import { setAddress, setEmail } from "@/store/userSlice";
import React from "react";
import { useDispatch } from "react-redux";

const UserInput = () => {
    const dispatch = useDispatch();

    return (
        <div className="w-[30%] flex flex-col gap-4 p-4 shadow-2xl bg-slate-200 rounded-lg">
            <input
                className="text-black p-2 rounded-lg"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => {
                    dispatch(setEmail(e.target.value));
                }}
            />
            <input
                className="text-black p-2 rounded-lg"
                type="text"
                placeholder="Enter your address"
                onChange={(e) => {
                    dispatch(setAddress(e.target.value));
                }}
            />
        </div>
    );
};

export default UserInput;
