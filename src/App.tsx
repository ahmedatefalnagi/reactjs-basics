import { useState } from "react";
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal";
import { productList } from "./data"
import Button from "./components/ui/Button";

const App = () => {

  // const renderProductList = () => {
  //   // ** LOGIC
  //   return productList.map(product=><ProductCard key={product.id} />);
  // }

  /* __________ STATE __________ */

  const [isOpen, setIsOpen] = useState(false);

  /* __________ HANDLER __________ */

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

   /* __________ RENDER __________ */

  const renderProductList = productList.map(product=><ProductCard key={product.id} product={product} />);
  
  return (
    <main className="md-container mx-auto md:px-20">
      <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full" onClick={openModal}>Add</Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 m-5 rounded-md">
        {/* {renderProductList()} */}
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT" >
        <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
            <Button className="bg-red-700 hover:bg-red-800">Cancel</Button>
        </div>
      </Modal>
    </main>
  )
}

export default App