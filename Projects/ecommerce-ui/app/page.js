"use client";

import BuyerList from "@/components/BuyerList";
import SellerList from "@/components/SellerList";

export default function Home() {
    const userRole = localStorage.getItem("userRole");
    return <div>{userRole === "buyer" ? <BuyerList /> : <SellerList />}</div>;
}
