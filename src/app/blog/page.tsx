import Image from "next/image"
import {  ChevronRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import Link from "next/link"
import BlogCard2 from "../components/BlogCard2"
import BlogCard3 from "../components/BlogCard3"
import BlogSidebar from "../components/Blogsidebar"

export default function BlogCard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] bg-black mt-16">
        <Image
          src="/menubg.png"
          alt="Menu Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">Blog List</h1>
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
          <Link href={"/"} ><span className="transition-colors duration-300">Home</span></Link>  
            <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
            <span className="transition-colors duration-300 text-[#FF9F0D]">Blog</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-8">
            <Card className="overflow-hidden">
            </Card>
            <BlogCard2 />
            <BlogCard3 />
            <BlogCard3 />
            <BlogCard3 />
          </div>
          <div className="w-full lg:w-1/3 xl:w-1/4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

