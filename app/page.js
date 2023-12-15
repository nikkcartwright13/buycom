import React from "react";
import axios from "axios";
import ListProducts from "@/components/products/ListProducts";
import queryString from "query-string";

export const metadata = {
  title: "Ecommerce App"
}

const getProducts = async (searchParams) => {
  try {
    const urlParams = {
      keyword: searchParams.keyword,
      page: searchParams.page,
      category: searchParams.category,
      "price[gte]": searchParams.min,
      "price[lte]": searchParams.max,
      "ratings[gte]": searchParams.ratings,
    };
    const searchQuery = queryString.stringify(urlParams);
    const { data } = await axios.get(
      `${process.env.API_URL}/api/products?${searchQuery}`
    );
    
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null; // or return an empty array or handle it as appropriate
  }
};


const HomePage = async ({ searchParams }) => {
  const productsData = await getProducts(searchParams);

  return <ListProducts data={productsData} />;
};

export default HomePage;



