import { CiShoppingCart } from "react-icons/ci";

function Cart_Header() {
    return (
        <>
          <span className="flex  cursor-pointer  items-center">
                    <CiShoppingCart className="text-2xl "></CiShoppingCart>
                    <p className=" rounded-xl bg-white text-black relative -top-4 -left-1 px-2 text-sm">0</p>
          </span>
        </>
    );
}
export default Cart_Header;