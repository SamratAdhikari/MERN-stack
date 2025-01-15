"use client";

import { useState, useEffect } from "react";
import BuyerList from "@/components/BuyerList";
import SellerList from "@/components/SellerList";
import { useRouter } from "next/navigation";

export default function Home() {
    const [userRole, setUserRole] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Check token and role on component mount
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/login"); // Redirect to login if no token is found
            return;
        }

        const role = localStorage.getItem("userRole");
        setUserRole(role);
    }, [router]);

    if (userRole === null) {
        // Show a loading state while checking userRole
        return <div>Loading...</div>;
    }

    return <div>{userRole === "buyer" ? <BuyerList /> : <SellerList />}</div>;
}
