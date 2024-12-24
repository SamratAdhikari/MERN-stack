"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        } else {
            // Clear local storage and navigate to home
            localStorage.removeItem("token");
            localStorage.removeItem("userRole");
            localStorage.removeItem("firstname");

            router.push("/");
        }
    }, [router]); // Dependency array ensures useEffect runs only once

    return <div>Loading...</div>; // Show loading while processing
};

export default Page;
