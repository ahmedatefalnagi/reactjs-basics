import { useState, type ChangeEvent } from "react";
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data"
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";

const App = () => {

  // const renderProductList = () => {
  //   // ** LOGIC
  //   return productList.map(product=><ProductCard key={product.id} />);
  // }

  /* __________ STATE __________ */

  const [product, setProduct] = useState<IProduct>({
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: '',
    },
  });

  const [isOpen, setIsOpen] = useState(false);

  /* __________ HANDLER __________ */

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const {value, name} = event.target;
    setProduct({
      ...product,
      [name]: value
    });
  }

   /* __________ RENDER __________ */

  const renderProductList = productList.map(product=><ProductCard key={product.id} product={product} />);
  const renderFormInputList = formInputsList.map(input => 
    <div className="flex flex-col" key={input.id}>
        <label htmlFor={input.id} className="mb-0.5 text-sm font-medium text-gray-700" >{input.label}</label>
        <Input type="text" id={input.id} name={input.name} value={''} onChange={onChangeHandler} />
    </div>
  )
  
  return (
    <main className="md-container mx-auto md:px-20">
      <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full" onClick={openModal}>Add</Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 m-5 rounded-md">
        {/* {renderProductList()} */}
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT" >
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex items-center space-x-3">
              <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
              <Button className="bg-red-700 hover:bg-red-800">Cancel</Button>
          </div>
        </form>
      </Modal>
    </main>
  )
}

export default App