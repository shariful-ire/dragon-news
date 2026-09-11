"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
    const today = new Date();

    const date = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="flex flex-col items-center text-center py-8">
            {/* Logo */}
            <Image
                src={logo}
                alt="Dragon News Logo"
                width={550}
                height={350}
                className="mb-4"
            />

            {/* Tagline */}
            <p className="text-xl text-gray-600">
                Journalism Without Fear or Favour
            </p>

            {/* Dynamic Date */}
            <p className="text-sm text-gray-500 mt-2">
                {date}
            </p>
        </div>
    );
};

export default Header;