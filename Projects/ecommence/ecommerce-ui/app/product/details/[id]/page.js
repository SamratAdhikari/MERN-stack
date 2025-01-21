"use client";

import $axios from "@/lib/axios/axios.instance";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
    IconButton,
    Stack,
    Button,
    Typography,
    Chip,
    Checkbox,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query"; // Added useQuery import
import Image from "next/image";
import { useParams } from "next/navigation"; // Correct import for useParams
import { useRouter } from "next/navigation"; // Correct import for useRouter
import React, { useEffect, useState } from "react";

const page = () => {
    const [token, setToken] = useState("");
    const [count, setCount] = useState(1); // Added state for count
    const router = useRouter();

    useEffect(() => {
        const userToken = localStorage.getItem("token");
        if (!userToken) {
            router.push("/login");
        }

        // const userRole = localStorage.getItem("userRole");
        // if (userRole === "buyer") {
        //     router.push("/");
        // }

        setToken(userToken);
    }, [router]);

    const params = useParams();
    const productId = params?.id;

    const { data, isLoading: isPending } = useQuery({
        queryKey: ["get-product-details", productId], // Added productId to queryKey for caching
        queryFn: async () => {
            const response = await $axios.get(`/product/detail/${productId}`);
            return response.data;
        },
        enabled: !!productId, // Ensures query only runs when productId is available
    });

    const productDetail = data?.productDetail;

    const mutation = useMutation({
        mutationFn: async (productData) => {
            return await $axios.post("/cart/item/add", productData);
        },
        onError: (error) => {
            console.log("Error adding to cart:", error);
        },
        onSuccess: (data) => {
            console.log("Product added to cart successfully:", data);
        },
    });

    const handleAddToCart = () => {
        const productData = {
            productId: productDetail?._id, // Use actual product ID
            orderedQuantity: count,
        };
        mutation.mutate(productData);
    };

    const increaseCount = () => {
        if (count < productDetail?.quantity) {
            setCount((prev) => prev + 1);
        }
    };
    const decreaseCount = () => setCount((prev) => Math.max(prev - 1, 1));

    return (
        <div className="flex flex-col md:flex-row max-w-[90%] mx-auto shadow-2xl rounded-lg overflow-hidden bg-white">
            {/* Product Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
                <Image
                    src={
                        productDetail?.image ||
                        "https://images.unsplash.com/photo-1579818276426-2f2bca600658?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    height={600}
                    width={600}
                    alt="product image"
                    className="object-contain"
                />
            </div>
            {/* Product Details */}
            <div className="w-full md:w-1/2 flex flex-col items-start p-6 gap-4">
                <Typography
                    variant="h5"
                    className="font-bold text-gray-800 text-lg md:text-2xl"
                >
                    {productDetail?.name}
                </Typography>
                <Chip
                    label={productDetail?.brand || "Samsung"}
                    color="secondary"
                    className="text-sm md:text-base"
                />
                <Typography
                    variant="h6"
                    className="text-gray-600 text-base md:text-lg"
                >
                    {productDetail?.brand}
                </Typography>
                <Typography
                    variant="h6"
                    className="font-bold text-green-500 text-lg md:text-xl"
                >
                    ${productDetail?.price}
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                >
                    <Typography
                        variant="h6"
                        className="text-gray-500 text-sm md:text-base"
                    >
                        Free Shipping
                    </Typography>
                    <Checkbox
                        color="success"
                        checked={productDetail?.freeShipping}
                    />
                </Stack>

                <Typography
                    variant="h6"
                    className="text-gray-500 text-sm md:text-base"
                >
                    Quantity: {productDetail?.quantity}
                </Typography>
                <Typography
                    className="text-justify text-gray-600 text-sm md:text-base leading-6"
                    variant="h6"
                >
                    {productDetail?.description}
                </Typography>
                {/* Quantity Selector */}
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                    className="mt-6"
                >
                    <IconButton
                        color="error"
                        size="large"
                        onClick={decreaseCount}
                        disabled={count === 1}
                    >
                        <RemoveIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        className="text-lg font-semibold text-gray-800"
                    >
                        {count}
                    </Typography>
                    <IconButton
                        color="success"
                        disabled={count >= productDetail?.quantity}
                        size="large"
                        onClick={increaseCount}
                    >
                        <AddIcon />
                    </IconButton>
                </Stack>
                {/* Add to Cart Button */}
                <Button
                    variant="contained"
                    color="success"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg mt-4"
                    onClick={handleAddToCart} // Trigger the mutation on button click
                    disabled={mutation.isLoading} // Disable button while loading
                >
                    {mutation.isLoading ? "Adding..." : "Add to Cart"}
                </Button>
                {mutation.isError && (
                    <Typography color="error" className="mt-2">
                        Error adding to cart.
                    </Typography>
                )}
                {mutation.isSuccess && (
                    <Typography color="success" className="mt-2">
                        Product added to cart successfully!
                    </Typography>
                )}
            </div>
        </div>
    );
};

export default page;
