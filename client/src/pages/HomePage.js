import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useCart();

  // get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  // get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  // get filtered product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filters`,
        { checked, radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Home Page - Our eCommerce Site"}>
      {/* Hero Section */}
<div
  className="text-white text-center p-5"
  style={{
    background: "linear-gradient(135deg, #0f172a, #1e293b)", // Dark blue gradient
    minHeight: "40vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <h1 className="fw-bold">Welcome to Our eCommerce Site</h1>
  <p className="lead">Discover the best products, amazing deals, and fast delivery!</p>
  <a href="#products" className="btn btn-light mt-3">
    Shop Now
  </a>
</div>


      {/* Products Section */}
      <div className="row" id="products">
        {/* Sidebar */}
        <div className="col-sm-2 p-3 filter-sidebar">
          <h4 className="text-center">Filter Category</h4>
          {categories?.map((c) => (
            <Checkbox
              key={c._id}
              onChange={(e) => handleFilter(e.target.checked, c._id)}
            >
              {c.name}
            </Checkbox>
          ))}

          <h4 className="text-center mt-4">Filter Price</h4>
          <Radio.Group onChange={(e) => setRadio(e.target.value)}>
            {Prices?.map((p) => (
              <div key={p._id}>
                <Radio value={p.array}>{p.name}</Radio>
              </div>
            ))}
          </Radio.Group>

          <button
            className="filter-btn mt-3 w-100"
            onClick={() => window.location.reload()}
          >
            <i className="bi bi-funnel-fill me-2"></i>Reset Filters
          </button>
        </div>

        {/* Products */}
        <div className="col-sm-10">
          <h1 className="text-center mb-4">Our Products</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {products?.map((p, idx) => (
              <div
                className="card m-3 home-product-card animate__animated animate__fadeInUp"
                style={{ width: "18rem", animationDelay: `${idx * 0.1}s` }}
                key={p._id}
              >
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top home-product-img"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text">
                    <b>₹{p.price}</b>
                  </p>
                  <button
                    className="btn btn-primary w-100 mt-2"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to Cart");
                    }}
                  >
                    <i className="bi bi-cart-plus"></i> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="m-2 p-3 text-center">
            {products && products.length < total && (
              <button
                className="btn btn-warning btn-lg px-5 shadow"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : (
                  "Load More"
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        className="text-center text-white py-3 mt-5"
        style={{ background: "black" }}
      >
        <p className="mb-0">© 2025 My eCommerce Site. All Rights Reserved.</p>
      </footer>
    </Layout>
  );
};

export default HomePage;
