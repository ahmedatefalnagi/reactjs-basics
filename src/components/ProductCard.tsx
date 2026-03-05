import type { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import Image from "./Image"
import Button from "./ui/Button"

interface IProps {
    product: IProduct;
}

const ProductCard = ({product}: IProps) => {
   const {title, description, price, imageURL, category} = product;
  return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col justify-between">
            <Image imagURL={imageURL}
                alt={"product name"} 
                className="rounded-md mb-2"
             />
            <h3>{title}</h3>
            <p className="text-sm">
               { textSlicer(description) }
            </p>
            <div className="flex items-center my-4 space-x-2">
                <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
                <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
            </div>

            <div className="flex items-center justify-between">
                <span>{price}</span>
                <Image imagURL={category.imageURL} 
                    alt={category.name} 
                    className="w-10 h-10 rounded-full object-center"
                />
            </div>
            <div className="flex items-center justify-between space-x-2 mt-5">
                <Button
                 className="bg-indigo-700"
                 onClick={()=>{
                    alert("Clicked")
                 }}
                 >EDIT</Button>
                <Button className="bg-red-700">DELETE</Button>
            </div>
        </div>
  )
}

export default ProductCard