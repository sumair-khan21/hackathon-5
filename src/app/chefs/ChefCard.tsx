// ChefCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ChefCardProps {
  name: string;
  imageUrl: string;
  experience: number;
  bio: string;
  specialty: string[];
  socialLinks: { platform: string; url: string }[];
  available: boolean;
  description: string;
  position: string;
  slug: string; 
}

const ChefCard: React.FC<ChefCardProps> = ({
  name,
  imageUrl,
  experience,
  description,
  position,
  slug,
}) => (
  <div className="bg-white shadow-lg w-11/12 rounded-lg overflow-hidden border border-gray-200">
  <div className="relative h-72">
    <Image
      src={imageUrl}
      alt={name}
      width={1024}  // Adjust width as needed (for example, 1024px)
      height={288}  // Adjust height as needed (for example, 288px, 72 * 4)
      className="w-full h-72 object-fill rounded-t-lg"
    />
  </div>
  <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
    <p className="text-sm text-gray-600 mb-2">Position: {position}</p>
    <p className="text-sm text-gray-600 mb-2">Experience: {experience} years</p>
    <p className="text-sm text-gray-600 mb-4">Description: {description}</p>
    <Link href={`/chefs/${slug}`}>
      <button className="mt-4 w-full bg-[#FF9F0D] text-black py-2 rounded-lg">
        View Details
      </button>
    </Link>
  </div>
</div>
);

export default ChefCard;
