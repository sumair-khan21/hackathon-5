'use client'
import { useCart } from 'react-use-cart';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function CartPage() {
  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal } = useCart();

  if (isEmpty) {
    return <p className='text-center py-10 text-3xl mt-24'>Your cart is empty.</p>;
  }

  return (

    <div className="min-h-screen bg-gray-50 mt-16">
      <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] bg-black">
        <Image
          src="/menubg.png"
          alt="Menu Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">Cart List</h1>
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <Link href={"/"}>
              <span className="transition-colors duration-300">Home</span>
            </Link>
            <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
            <span className="transition-colors duration-300 text-[#FF9F0D]">Cart</span>
          </p>
        </div>
      </div>
    
      <div className="container mx-auto p-4 mt-16">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
              {/* Product Image */}
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={64} // 16rem
                  height={64} // 16rem
                  className="object-cover rounded-lg"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              {/* Product Details */}
              <div className="flex-1 ml-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center space-x-2 mt-2">
                  {/* Quantity Update */}
                  <button
                    onClick={() => updateItemQuantity(item.id, (item.quantity ?? 1) - 1)}
                    className="bg-gray-300 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => updateItemQuantity(item.id, (item.quantity ?? 1) + 1)}
                    className="bg-gray-300 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Total Amount */}
              <p className="font-bold text-green-500">
                ${item.price * (item.quantity ?? 1)}
              </p>
              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-6">
          <p className="text-xl font-semibold">Total: ${cartTotal.toFixed(2)}</p>
          <Link href="/checkout" className="bg-[#FF9F0D] text-white px-4 py-2 rounded">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
    
  );
}
