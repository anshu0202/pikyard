import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import bg from "../../Assets/background.jpg";
import bg2 from "../../Assets/background.jpg";
import bg3 from "../../Assets/bg.jpg";
import ProductCard from "../Products/ProductCard";
import { useDispatch, useSelector } from "react-redux"
import { clearErrors, getProduct } from "../../actions/ProductActions";
import Header from "./Header";
import MetaData from "../../more/Metadata";
import Footer from "../../Footer";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error])

  return (
    <>
      {loading ? (
        <Loading />
      )
        : (
          <>
            <MetaData title="Home" />
            <Header />
            {/* Carousel */}
            <div className="banner" style={{ "height": "50vh" }}>
              <Carousel>
                <img src={"https://images.unsplash.com/photo-1519520104014-df63821cb6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} className="bgImg" />
                <img src={bg2} className="bgImg" />
                <img src={"https://images.unsplash.com/photo-1605900009749-b3cdb75ce9c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"} className="bgImg" />
              </Carousel>
              <div className="home__content">
                <div style={{
                  display: "flex",
                  alignItems: "center",
                }}>
                  {/* <h2 style={{
                    color: "#fff",

                    fontFamily: "Segoe Script",
                    fontSize: "3em",
                    fontWeight: "500"
                  }}>we</h2> */}
                  {/* <span style={{
                    padding: "10px",
                    backgroundColor: "#fff",
                    margin: "0px 10px",
                    textAlign: "center",
                    width: "150px",
                    height: "60px",
                    color: "#26c",
                    fontFamily: "Segoe Script",
                    fontSize: "2.4em",
                    display: "flex",
                    justifyContent: "center",
                    lineHeight: ".7",
                    alignItems: "center"
                  }}>OFFER you</span> */}
                </div>
                <div>
                  {/* <h2 style={{
                    fontSize: "4.5em",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                  }}>Good quality</h2> */}
                </div>
                <div>
                  {/* <h2 style={{
                    fontSize: "3.5em",
                    fontWeight: "400",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                    lineHeight: ".7"
                  }}>Product</h2> */}
                </div>
                <div>
                  {/* <h2
                    style={{
                      fontWeight: "400",
                      fontFamily: "Poppins,sans-serif",
                      color: "#fff",
                      fontSize: "1em",
                      paddingTop: "10px"
                    }}
                  >
                    Get Free Shipping on all orders over ₹5000.00
                  </h2> */}
                </div>
                <div>
                  <a href="#container">
                    <button type="submit" style={{
                      width: "135px",
                      height: "50px",
                      border: "none",
                      background: "#3BB77E",
                      margin: "10px 0",
                      fontSize: "1.2vmax",
                      color: "#fff",
                      cursor: "pointer"
                    }}
                      className="Home__button"
                    >SHOP NOW</button>
                  </a>
                </div>
              </div>
            </div>


            <h2 className="homeHeading">Featured Products</h2>
            <div className="container" id="container">
              {products && products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Footer />
            <BottomTab />
          </>
        )}
    </>
  );
};

export default Home;
