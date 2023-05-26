import React from 'react';
import { Link } from 'react-router-dom';
import "./CartItemCard.css";

// const CartItemCard = ({item, deleteCartItems}) => {
//     return (
//         <div className='CartItemCard'>
//             <img src={item.image} alt="ssa" />
//             <div>
//                 <Link to={`/product/${item.product}`}>{item.name}</Link>
//                 <span>{`Price: ₹ ${item.price}`}</span> 
               
//                 <p onClick={() => deleteCartItems(item.product)}>Remove</p>
//             </div>
//         </div>
//     ) 
// }

const CartItemCard = ({item, deleteCartItems}) => {
    return (
        <div className='CartItemCard'>
            <img src={item.productImages[0]?.url} alt="ssa" />
            <div>
                <Link to={`/product/${item.product}`}>{item.productName}</Link>
                <span>{`Price: ₹ ${item.productPrice}`}</span> 
                  <span>{`Size: ${item.size}`}</span> 
                <p onClick={() => deleteCartItems(item.productId)}>Remove</p>
            </div>
        </div>
    ) 
}

export default CartItemCard
