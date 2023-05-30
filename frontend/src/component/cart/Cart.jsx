import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/CartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import CartItemCard from "./CartItemCard.js";
import BottomTab from "../../more/BottomTab";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useEffect, useState } from "react";
import { getCartItems , deleteCartItem, updateCartItem} from "../../service/cartApi";

const Cart = ({ history }) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);


  const [items,setItems]=useState([]);

  const [tPrice,setTotalPrice]=useState(100);

useEffect(()=>{
            getItems();
},[]);

   const  getItems= async()=>{
          const data=await getCartItems();
          if(data){
            setItems(data);          
            let total=0;
            for(let i=0;i<data.length;i++){
              total+=data[i]?.productPrice * data[i]?.quantity
            }
              setTotalPrice(total);
          }
   }
  let Price = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  let totalPrice = Price;

  const increaseQuantity = async(id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return toast.error("Product Stock Limited");
    }
      const res=await updateCartItem(id,quantity+1);
      if(res){
        
        getItems();
      }
    
  };

  const decreaseQuantity = async(id, quantity) => {
    if(quantity==1) return ;
    const res=await updateCartItem(id,quantity-1);
      if(res){  
        getItems();
      }
  };

  const deleteCartItems = async(id) => {
      const data= await deleteCartItem(id);
      console.log("delete dd ", data);
      if(data){
        getItems();
      }
    // dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <>
     
      {items.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography>No Items In Cart</Typography>
          <Link to="/products">View Products</Link>
          <BottomTab />
        </div>
      ) : (
        <>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
{items.length>0 &&
              items?.map((item, index) => (
                      
                <div className="cartContainer" key={index}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems}  />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantity(item?._id, item?.quantity)
                      }
                    >
                      -
                    </button>
                    <input type="number" readOnly value={item.quantity} />
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item?._id,
                          item?.quantity,
                          item?.Stock
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal"> {`₹${item.productPrice * item.quantity }`}</p>
                </div>
                
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Price Total</p>
                {/* <p>₹ {totalPrice}</p> */}
                <p>₹ {tPrice}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
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
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Cart;
