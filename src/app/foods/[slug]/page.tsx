'use client';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// Define the Food interface with proper types
interface Food {
  _id: string;
  name: string;
  image: { asset: { _ref: string } }; // Ensure this matches the Sanity image structure
  price: number;
  originalPrice?: number;
  description?: string;
  available?: boolean;
  tags?: string[];
  slug?: {
    _type: "slug";
    current: string;
  };
}

async function getProduct(slug: string): Promise<Food> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
      _id,
      name,
      image,
      price,
      originalPrice,
      description,
      available,
      tags,
      slug
    }`,
    { slug }
  );
}

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Food | null>(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart(); // useCart hook se addItem function ko import karo
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await getProduct(slug);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (product) {
      const imageUrl = urlFor(product.image).url(); // Ensure urlFor is working with the image object
      console.log("Generated Image URL:", imageUrl); // Debugging
      addItem({
        id: product._id,
        name: product.name,
        price: product.price,
        image: imageUrl, // Ensure this is correct
        quantity: 1,
      });
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1000);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-10 text-red-500">Product not found.</div>
    );
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
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
          Food List Details
        </h1>
        <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
          <Link href={"/"}>
            <span className="transition-colors duration-300">Home</span>
          </Link>
          <ChevronRight
            size={16}
            className="text-white transition-colors duration-300 group-hover:text-orange-500"
          />
          <span className="transition-colors duration-300 text-[#FF9F0D]">
            Food Details
          </span>
        </p>
      </div>
    </div>
  
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-36">
        <div className="aspect-square">
          {product.image ? (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={450}
              height={460}
              className="rounded-lg shadow-md relative"
            />
          ) : (
            <div className="text-red-500">Image not available</div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl mt-4 font-serif">{product.name}</h1>
          <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-md line-through text-gray-400">
              Original Price: ${product.originalPrice.toFixed(2)}
            </p>
          )}
          <p className="text-gray-700 text-xl">
            {product.description || "No description available"}
          </p>
          <p
            className={`text-md ${product.available ? "text-green-500" : "text-red-500"}`}
          >
            {product.available ? "In Stock" : "Out of Stock"}
          </p>
          {product.tags && (
            <div className="flex flex-wrap gap-2 ">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-md bg-[#FF9F0D] text-black rounded-full px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
  
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-[#FF9F0D] text-white px-4 py-2 font-lg rounded"
          >
            Add to Cart
          </button>
          {isAdded && (
            <p className="text-[#FF9F0D] 500 mt-2">Added to cart successfully!</p>
          )}
        </div>
      </div>
    </div>
  </div>
  
  );
}
