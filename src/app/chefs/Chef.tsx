// Chefs.tsx
"use client";
import { createClient } from "next-sanity";
import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-01-11",
});

type Chef = {
  _id: string;
  name: string;
  imageUrl: string;
  bio: string;
  specialty: string[];
  experience: number;
  socialLinks: { platform: string; url: string }[];
  available: boolean;
  description: string;
  position: string;
  slug: {
    _type: "slug";
    current: string;
  };
};

const Chefs: React.FC = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChef = async () => {
      const query = `*[_type == "chef"]{
        _id,
        name,
        "imageUrl": image.asset->url,
        bio,
        specialty,
        experience,
        socialLinks,
        available,
        description,
        position,
        slug
      }`;

      try {
        const data = await client.fetch(query);
        setChefs(data);
      } catch (error) {
        console.error("Failed to fetch chefs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChef();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading Chefs...</div>;
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
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">Chefs List</h1>
            <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
              <Link href={"/"}>
                <span className="transition-colors duration-300">Home</span>
              </Link>
              <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
              <span className="transition-colors duration-300 text-[#FF9F0D]">Our Chefs</span>
            </p>
          </div>
        </div>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Our Chefs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chefs.map((chef) => (
            <ChefCard
              key={chef._id}
              name={chef.name}
              imageUrl={chef.imageUrl}
              experience={chef.experience}
              bio={chef.bio}
              specialty={chef.specialty}
              socialLinks={chef.socialLinks}
              available={chef.available}
              description={chef.description}
              position={chef.position}
              slug={chef.slug.current} // Pass slug for dynamic routing
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
