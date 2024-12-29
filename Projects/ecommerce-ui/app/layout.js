import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "NepalMart",
    description: "Marketplace for Nepali products",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <ReactQueryClientProvider>
                <body
                    className={`bg-white w-full h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    {children}
                </body>
            </ReactQueryClientProvider>
        </html>
    );
}
