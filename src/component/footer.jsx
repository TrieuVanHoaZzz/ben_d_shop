import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaMapMarker } from "react-icons/fa";

function Footer() {
    return (
        <div className="  mb-5">
            <hr className="text-gray-100" />
            <div className="mt-4 gap-x-10 gap-y-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  md:px-40 px-5 md:text-center ">
                <div className="col-span-1 md:mx-auto ">
                    <h1 className="text-5xl text-black font-extrabold rounded-1 ">Ben<span className="text-black">D</span></h1>
                    <img className="img-fluid w-[400px] mt-5" src="https://cdn.kiotvietweb.vn/merchant/f0e0a197c91909fcbf85e7b52b3c0550/cropped/1742755163/crop-file.webp"></img>

                </div>
                <hr className="text-gray-300 md:hidden"></hr>

                <div className="col-span-1 text-black text-start  ">
                    <p className="font-semibold  ">  Kết nối với chúng tôi
                    </p>

                    <span className="flex items-center gap-3">
                        <BsFillTelephoneFill />
                        0123456789
                    </span>

                    <span className="flex items-center gap-3 ">
                        <FaFacebookSquare />
                        Facebook
                    </span>

                    <span className="flex items-center gap-3">
                        <SiZalo />
                        Zalo
                    </span>
                </div>
                <hr className="text-gray-300 md:hidden"></hr>

                <div className="col-span-1 text-start">
                    <p className="font-semibold"> Chính sách</p>
                    <span>
                        Chính sách cửa hàng
                    </span>
                </div>
                <hr className="text-gray-300 md:hidden"></hr>


                <div className="col-span-1  text-start ">
                    <p className="font-semibold"> Địa chỉ</p>
                    <span className="flex items-center text-start">
                        <FaMapMarker className=" me-2" />
                        <p>123 Nguyễn Văn Bảo, Phường 4, Gò Vấp, TP.HCM</p>
                    </span>

                </div>

            </div>
        </div>
    );
} export default Footer;