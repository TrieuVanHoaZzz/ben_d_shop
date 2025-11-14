
import { FaCartPlus } from "react-icons/fa";


function Product_Card({ GiaSP, TenSP, AnhSP, GiamGia }) {
    return (
        <div className="my-5 pb-4 bg-white relative cursor-pointer text-center shadow-md hover:shadow-lg hover:scale-105 xl:w-[220px] lg:[220px] md:[210px]  w-[180px]   ">
            <div className="p-1 rounded-1 px-2 border-gray-300 ">
                <div className={` ${ GiamGia ? 'inline z-10 px-2 rounded-md absolute  top-3 right-4  bg-yellow-500 text-white font-semibold' : 'hidden '}`}>
                   - {GiamGia} % 
                </div>
                <img className=" img-fluid border border-gray-300 "
                    src={AnhSP} alt={TenSP} >
                </img>
            </div>
            <p className="font-semibold  font-sans mt-3 line-clamp-2 overflow-hidden text-ellipsis ">
                {TenSP}
            </p>
            <p className="font-semibold font-sans text-red-700 px-2 mt-3">
                {GiaSP} VND
            </p>
            <button
                className="bg-amber-100 text-yellow-500 font-semibold flex items-center gap-2
            font-sans py-1 md:px-10  px-8 sm:px-10 m-auto rounded-md hover:bg-amber-600 hover:text-white mt-3 ">
                <FaCartPlus></FaCartPlus>  Chọn mua
            </button>

        </div>
    );
} export default Product_Card;