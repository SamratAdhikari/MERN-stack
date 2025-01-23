"use client";

import React from "react";
import { useSelector } from "react-redux";

const DisplayText = () => {
    const state = useSelector((state) => state.user);
    console.log(state);
    return (
        <div className="mt-6 text-black w-[30%] h-[8%] flex flex-col shadow-lg p-4 text-md rounded-lg bg-slate-200">
            <div>
                <span className="font-semibold">Email:</span> {state.email}
            </div>
            <div>
                <span className="font-semibold">Address:</span> {state.address}
            </div>
        </div>
    );
};

export default DisplayText;
