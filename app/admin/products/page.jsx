import React from "react";
import axios from "axios";
import Products from "@/components/admin/Products";


const getProducts = async () => {

  try {
    const { data } = await axios.get(
      `${process.env.API_URL}/api/products`
    );
    return data;
  } catch (error) {

    return null;
  }


};

const Prd = async () => {
  const data = await getProducts();

  return <Products data={data} />;
};

export default Prd;