import { FaSearch } from "react-icons/fa";

function Search() {
    return (
<div className=" flex items-center text-center">
    <FaSearch className="absolute text-gray-400 ms-2"/>
    <input type="text" placeholder="Tìm kiếm sản phẩm" 
    className="border hover:border-white rounded-md ps-6 pe-20 py-0.5 text-gray-600 bg-white"/>
</div>
    );
}
export default Search;