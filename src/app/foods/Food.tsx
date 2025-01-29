"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-01-11",
});

type Food = {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description?: string;
  imageUrl?: string;
  slug?: {
    _type: "slug";
    current: string;
  } | null;
};

const Food: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchFoods = async () => {
      const query = `*[_type == "food"]{
        _id,
        name,
        price,
        originalPrice,
        description,
        "imageUrl": image.asset->url,
        slug
      }`;

      try {
        const data = await client.fetch(query);
        if (!data || !Array.isArray(data)) {
          throw new Error("Invalid data format received from Sanity");
        }
        setFoods(data);
      } catch (error) {
        console.error("Failed to fetch foods:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading foods...</div>;
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
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">Food List</h1>
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <Link href={"/"}><span className="transition-colors duration-300">Home</span></Link>
            <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
            <span className="transition-colors duration-300 text-[#FF9F0D]">Our Food</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Foods</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => {
            const slug = food.slug?.current;
            return (
              <div key={food._id} className="bg-white shadow-md rounded-lg p-4">
                {food.imageUrl ? (
                  <img
                    src={food.imageUrl}
                    alt={food.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{food.name}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {food.description || "No description available"}
                  </p>
                  <p className="text-green-500 font-bold">
                    ${food.price.toFixed(2)}
                  </p>
                  {food.originalPrice && (
                    <p className="text-sm line-through text-gray-400">
                      ${food.originalPrice.toFixed(2)}
                    </p>
                  )}

                  {/* Add to Cart Button */}
                  {/* <button
                    onClick={() => addItem({ ...food, id: food._id })} // addItem function ko call karo
                    className="mt-4 w-full bg-[#FF9F0D] text-white py-2 rounded-lg"
                  >
                    Add to Cart
                  </button> */}

                  {slug && (
                    <Link href={`/foods/${slug}`}>
                      <button className="mt-4 w-full bg-[#FF9F0D] text-white py-2 rounded-lg">
                        View Details
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Food;
