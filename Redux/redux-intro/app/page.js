"use client";
import DisplayText from "@/components/DisplayText";
import UserInput from "@/components/UserInput";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

const Home = () => {
    return (
        <Provider store={store}>
            <div className="w-screen h-screen flex justify-center items-center flex-col bg-gray-300">
                <UserInput />
                <DisplayText />
            </div>
        </Provider>
    );
};

export default Home;
