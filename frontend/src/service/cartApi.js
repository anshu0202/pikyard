import axios from "axios";
const URL="http://localhost:3000/api/v2";

const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

//Apis for cart items
const userId=JSON.parse(localStorage.getItem("user"))?._id



export const addToCart=async(data)=>{
    try{
        const result= await axios.post(`${URL}/addToCart`,data);
        return result.data.cart
    }
    catch(error){
        console.log("error while posting data ", error.message);
    }
}

export const deleteCartItem= async(productId)=>{
            try{
                const response=await axios.delete(`${URL}/removeCartItem/${userId}/${productId}`)
                // console.log("reposne is ", response)
                return response;
            }
            catch(error){
                    console.log("error while deleting cart item ", error.message);
            }       
}


export const emptyCartItem= async()=>{
    try{
        const response=await axios.delete(`${URL}/emptyCartItems/${userId}`)
        // console.log("reposne is ", response)
        return response;
    }
    catch(error){
            console.log("error while deleting cart item ", error.message);
    }  
}

export const getCartItems= async()=>{
    try{
        const response=await axios.get(`${URL}/cart/${userId}`)
        return response.data.cartData;
    }
    catch(error){
            console.log("error while deleting cart item ", error.message);
    }
}

export const updateCartItem= async(id,quantity)=>{
    const data={
        quantity
    }
    try{
        const result=await axios.put(`${URL}/cart/update/${id}`, data);
        // console.log("res updat ", result);
        return result;
    }
    catch(error){
        console.log("error while updating cart item ", error.message);
    }
}



//Api to get the details of selected variant of product


export const getVariantDetail=async(name,size)=>{
    try{
        let result= await axios.get(`${URL}/variantDetail/${name}/${size}`);
        // console.log("result is ",result.data.variant);
        return result.data.variant
    }
    catch(error){
        console.log("error while getting variant detail ", error.message);
    }
}