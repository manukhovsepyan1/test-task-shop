"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import Image from 'next/image';

import Button from "./ui/button";
import Modal from "./ui/modal";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>("");

  const handleAddToCart = () => {
    setModalContent("Product has been added to your cart!");
    setIsModalOpen(true);
  };

  const handleBuyNow = () => {
    setModalContent("Thank you for your purchase!");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          {data?.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <Image
              priority
              src={data.images[0]}
              alt={data.title}
              width={500}
              height={500}
              className="rounded-lg object-contain max-w-full h-auto"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="mb-4">
              <p className="text-2xl text-gray-700 font-semibold">
                Price: <span className="text-gray-900">${data.price}</span>
              </p>
            </div>

            {data.description && (
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Description:</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {data.description}
                </p>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-4">
              <Button text={'Add to Cart'} onClick={handleAddToCart} />
              <Button text={'Buy Now'} onClick={handleBuyNow} variant={'secondary'} />
            </div>
          </div>
        </div>

        <hr className="my-6" />

        <div className="text-center text-gray-600 text-sm">
          <p>Free shipping on orders over $50</p>
        </div>
      </div>
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
};

export default Info;
