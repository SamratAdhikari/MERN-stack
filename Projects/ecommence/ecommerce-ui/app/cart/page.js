"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import CartItem from "@/components/CartItem";
import CartEmpty from "@/components/EmptyCart";
import { getCartList } from "@/lib/routes/cart.route";
import { Button } from "@mui/material";
import { RemoveShoppingCartRounded } from "@mui/icons-material";
import $axios from "@/lib/axios/axios.instance";

const page = () => {
    const queryClient = useQueryClient();

    const { data, isPending } = useQuery({
        queryKey: ["cart-list"],
        queryFn: () => getCartList(),
    });

    const cartData = data?.data?.cartData;

    // flush cart
    const { isPending: flushCartPending, mutate } = useMutation({
        mutationKey: ["flush-cart"],
        mutationFn: async () => {
            return await $axios.delete("/cart/flush");
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["cart-list"]);
        },
    });
    if (isPending || flushCartPending) {
        return (
            <div className="flex justify-center items-center">Loading ...</div>
        );
    }

    if (cartData.length < 1) {
        return <CartEmpty />;
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <Button
                endIcon={<RemoveShoppingCartRounded />}
                variant="outlined"
                color="error"
                onClick={() => {
                    console.log("clicked");
                    mutate();
                }}
            >
                flush cart
            </Button>
            <div className=" flex  justify-center items-center flex-wrap gap-4 m-8">
                {cartData.map((item) => {
                    return <CartItem key={item._id} {...item} />;
                })}
            </div>
        </div>
    );
};

export default page;
