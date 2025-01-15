"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import $axios from "@/lib/axios/axios.instance";
import { Button, CircularProgress, Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

const SellerList = () => {
    const [page, setPage] = useState(1);

    const router = useRouter();

    const { isLoading, isError, data } = useQuery({
        queryKey: ["seller-product-list", page],
        queryFn: async () => {
            const response = await $axios.post("/product/seller/list", {
                page: page,
                limit: 2,
            });
            return response.data;
        },
    });

    const productList = data?.products || [];
    console.log("prod lsit", productList);

    return (
        <div className="flex flex-col min-h-screen gap-6 p-4 justify-between items-center">
            <div className="flex flex-col gap-6 items-center justify-center">
                {isLoading && <CircularProgress size={100} />}
                <div className="flex flex-wrap items-center justify-center gap-6 p-4">
                    {isError && (
                        <p className="text-gray-500">Something went wrong!</p>
                    )}
                    {productList.length > 0
                        ? productList.map((product, index) => (
                              <ProductCard
                                  className="flex flex-col items-center justify-center gap-4 shadow-xl"
                                  key={product._id}
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
                          ))
                        : !isLoading && (
                              <p className="text-gray-500">No products found</p>
                          )}
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    className="w-[200px]"
                    onClick={() => {
                        router.push("/add-product");
                    }}
                >
                    Add Product
                </Button>
            </div>

            <Pagination
                page={page}
                count={5}
                color="secondary"
                onChange={(_, value) => {
                    setPage(value);
                }}
            />
        </div>
    );
};

export default SellerList;
