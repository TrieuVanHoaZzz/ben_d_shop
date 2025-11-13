import Search from "./search.jsx";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
    return (
        <div className="bg-yellow-500 py-5 px-50 flex justify-between items-center">
            <h1 className="text-5xl text-white font-extrabold rounded-1 ">Ben<span className="bg-linear-to-r from-black mask-b-to-amber-900 bg-clip-text text-transparent">D</span></h1>
            <div><Search></Search></div>
            <div className="flex items-center  text-white">
                <AiOutlineUser className="text-2xl me-3 "/>

                <span className="flex ">
                    <CiShoppingCart className="text-2xl "></CiShoppingCart>
                    <p className=" rounded-xl bg-white text-black relative -top-4 -left-1 px-2 text-sm">0</p>
                </span>
                Giỏ hàng</div>
        </div>
    );
} export default Header;