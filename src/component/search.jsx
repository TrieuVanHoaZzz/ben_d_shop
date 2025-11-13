import { FaSearch } from "react-icons/fa";

function Search() {
    return (
<div className="">
    <section className="flex items-center bg-white py-1 px-2 rounded-md gap-1 ">
        <span className=" inline-block font-light">
            <FaSearch />
        </span>
        <input type="text" placeholder="Tìm kiếm sản phẩm" className=" focus:outline-0" />
        <button className=" cursor-pointer text-amber-500 ms-10 hidden sm:block">Tìm kiếm</button>
    </section>

</div>
    );
}
export default Search;