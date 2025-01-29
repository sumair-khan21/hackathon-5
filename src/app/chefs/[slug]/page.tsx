"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ChefPageProps {
  params: { slug: string };
}

interface Chef {
  _id: string;
  name: string;
  image: { asset: { _ref: string } };
  bio: string;
  position: string;
  specialty: string[];
  available: boolean;
  description: string;
  socialLinks: { platform: string; url: string }[] | null;
}

async function getChef(slug: string): Promise<Chef | null> {
  return client.fetch(
    groq`*[_type == "chef" && slug.current == $slug][0]{
      _id,
      name,
      image,
      bio,
      position,
      specialty,
      available,
      description,
      socialLinks
    }`,
    { slug }
  );
}

export default function ChefPage({ params }: ChefPageProps) {
  const { slug } = params;

  // Use async function directly inside the component
  const [chef, setChef] = useState<Chef | null>(null);

  useEffect(() => {
    async function fetchChef() {
      const chefData = await getChef(slug);
      setChef(chefData);
    }
    fetchChef();
  }, [slug]);

  if (!chef) {
    return (
      <div className="text-center py-10 text-red-500">Chef not found.</div>
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
            Chef List
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
              Chef Details
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-36">
          <div className="aspect-square">
            {chef.image ? (
              <Image
                src={urlFor(chef.image).url()}
                alt={chef.name}
                width={450}
                height={460}
                className="rounded-lg shadow-md"
              />
            ) : (
              <div className="text-red-500">Image not available</div>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl mt-4 font-serif">{chef.name}</h1>
            <p className="text-xl font-bold">{chef.position}</p>
            <p className="text-md text-gray-600">{chef.bio}</p>
            <p className="text-md text-gray-600">
              Specialty: {chef.specialty.join(", ")}
            </p>
            <p
              className={`text-md ${chef.available ? "text-green-500" : "text-red-500"}`}
            >
              {chef.available ? "Available for Hire" : "Not Available"}
            </p>
            <div className="flex gap-3">
              <h3 className="font-semibold mb-2">Social Links:</h3>
              <ul>
                {(chef.socialLinks || []).map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-md hover:underline"
                    >
                      {link.platform}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
