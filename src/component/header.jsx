import Search from "./search.jsx";
import { AiOutlineUser } from "react-icons/ai";
import Cart_Header from "./cart_header.jsx";
import { useState } from "react";

function Header() {
      const [pc, mobile] = useState(false);
        const toggleMenu = () => {
            console.log("clicked");
            mobile(!pc);
        };
    return (
        <div onClick={() => mobile(false)}  className="bg-yellow-500 py-5 px-50 flex xl:justify-between  justify-center items-center w-100% ">
            <h1 className="text-5xl text-white font-extrabold rounded-1 ">Ben<span className="text-black">D</span></h1>
            <div className="hidden xl:block"><Search></Search></div>
            <div className="flex items-center  text-white">
                <AiOutlineUser className="text-2xl me-3 hidden xl:block" />
                <div className="hidden xl:block">              <Cart_Header></Cart_Header>
                </div>
                <p className="  xl:block hidden">Giỏ hàng</p> </div>
        </div>
    );
} export default Header;