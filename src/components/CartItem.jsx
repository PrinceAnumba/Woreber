import { useContext, useState, react } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NoImg, HeartIcon, DiscountIcon } from '../assets'

const CartItem = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const history = useNavigate();
    // const { handleAddToCart } = useContext(Context);
    // const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };




  return (
    <div className="">
        <div className='flex flex-row items-center gap-8 relative'>
            <div className="item-image angle-img">
                <img src={NoImg} alt="" />
            </div>
            <div className="description">
                <h6 className="prod-name">Asmond Armchair</h6>
                <div className="flex gap-4"><p className="color text-gray-400">Color</p> <h6 className=''>Green</h6></div>
                <div className=" flex  gap-4 my-1">
                    <div className="increment flex  items-center gap-1  border w-24">
                        <button className="py-1 px-2 " onClick={decrement}><p>-</p></button>
                        <div className="count flex justify-center items-center w-12 h-full">{quantity}</div>
                        <button className="py-1 px-2" onClick={increment}><p>+</p></button>
                    </div>
                    <div className=" flex gap-4 ">
                        <img src={HeartIcon} alt="" />
                        <button className="text-red-700">Remove</button>
                    </div>
                </div>
            </div>
            <p className="price font-bold absolute right-0 top-0">CFA 5,700</p>
        </div>
        <hr className="my-6 w-full" />
    </div>
  )
}

export default CartItem