import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Search from "./search";
import Cart_Header from "./cart_header";
import { IoIosArrowBack } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";


function Nav() {
    const [pc, mobile] = useState(false);
    const toggleMenu = () => {
        console.log("clicked");
        mobile(!pc);
    };
    return (
        <div className="mt-5  ">
            <div className="flex justify-between items-center m-auto">
                <div>
                    <IoMdMenu onClick={toggleMenu} className="text-3xl xl:hidden cursor-pointer" />
                </div>
                <div className=" xl:hidden">
                    <Search ></Search>
                </div>
                <div className=" xl:hidden ">
                    <Cart_Header></Cart_Header>
                </div>
            </div>
            <div className={`shadow-xl:shadow-none z-20  xl:px-50 flex justify-between   transition-all duration-400 ease-in-out absolute xl:static
          ${pc ? 'left-0 top-0 xl:bg-white bg-gray-200 ' : '-left-[1000px] top-0 '} `}>
                <div className=" xl:flex gap-4 items-center">
                    <div className="xl:hidden block  ">
                        <div className="bg-yellow-500 flex items-center px-2 py-3 font-extrabold  text-white shadow-lg">
                            <IoIosArrowBack onClick={toggleMenu} className="text-2xl font-semibold "/>
                            <p className="text-3xl m-auto">
                                Menu
                            </p>
                        </div>
                        <div className=" bg-white py-4 gap-2 ">
                            <div className="flex  items-center rounded-md justify-center  gap-2 border-2 border-gray-300 mx-10 py-2 px-3 cursor-pointer">
                                <div><FaGoogle></FaGoogle></div>
                                <p>Đăng nhập bằng Google</p>
                            </div>
                        </div>
                    </div>
                    <div className="xl:px-0 px-10 xl:py-0 py-5  xl:flex">
                        <button>Danh mục</button>

                        <ul className="xl:flex gap-4 xl:ms-4  h-dvh xl:h-0">
                            <li className="xl:mt-0 mt-5">
                                <a href="" className="hover:font-semibold ">Trang chủ</a>
                            </li>
                            <li className="xl:mt-0 mt-5">
                                <a href="#" className="hover:font-semibold ">Giới thiệu</a>
                            </li>
                            <li className="xl:mt-0 mt-5">
                                <a href="#" className="hover:font-semibold ">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>

                </div>
                <div className=" xl:block hidden ">
                    0945 1221 52
                </div>
            </div>
        </div>

    );
}
export default Nav;