import React from "react";

export const metadata = {
    title: "Auth",
    description: "Auth Layout",
};

const AuthLayout = ({ children }) => {
    return (
        <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
            {children}
        </div>
    );
};

export default AuthLayout;
