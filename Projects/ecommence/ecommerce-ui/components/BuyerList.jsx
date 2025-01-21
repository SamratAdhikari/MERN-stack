"use client";

import $axios from "@/lib/axios/axios.instance";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "./ProductCard";

const BuyerList = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["buyer-product-details"],
        queryFn: async () => {
            return await $axios.post("/product/buyer/list", {
                page: 1,
                limit: 100,
                searchText: "",
            });
        },

        onError: (error) => {
            console.log(error);
        },
    });

    const productList = data?.data?.products || [];

    return (
        <div className="flex flex-col min-h-screen gap-6 p-4 justify-between items-center">
            {isLoading && <CircularProgress size={100} />}
            {error && <p className="text-red-400">Something went wrong!</p>}
            {!isLoading && !error && (
                <div className="flex flex-wrap items-center justify-center gap-6 p-4">
                    {productList.length > 0
                        ? productList.map((product, index) => {
                              //   console.log(product); // Correct place to log the product
                              return (
                                  <ProductCard
                                      className="flex flex-col items-center justify-center gap-4 shadow-xl"
                                      key={product.id || index}
                                      _id={product._id}
                                      image={
                                          product.image ||
                                          "https://via.placeholder.com/150"
                                      }
                                      name={product.name}
                                      price={product.price}
                                      brand={product.brand}
                                      description={product.description}
                                  />
                              );
                          })
                        : !isLoading && (
                              <p className="text-gray-500">No products found</p>
                          )}
                </div>
            )}
        </div>
    );
};

export default BuyerList;
