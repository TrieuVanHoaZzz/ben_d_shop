import Search from "./search.jsx";
import { AiOutlineUser } from "react-icons/ai";
import Cart_Header from "./cart_header.jsx";
import Logo from "./logo.jsx";
function Header() {

    return (
        <div className={`bg-yellow-500 py-5 xl:px-50 flex xl:justify-between  justify-center items-center w-100% 
       `}>
            <Logo></Logo>
            <div className="hidden xl:block"><Search></Search></div>
            <div className="flex items-center  text-white">
                <AiOutlineUser className="text-2xl me-3 hidden xl:block" />
                <div className="hidden xl:block">              <Cart_Header></Cart_Header>
                </div>
                <p className="  xl:block hidden">Giỏ hàng</p> </div> 
        </div>
    );
} export default Header;