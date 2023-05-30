import axios from "axios"



// Create Variant --------Admin
export const createVariant =  async(productData,id) => {
    
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(`/api/v2/variants/new/${id}`,productData,config);
    }
    catch(error){
        console.log("error while posting data ", error.message);
    }
  }