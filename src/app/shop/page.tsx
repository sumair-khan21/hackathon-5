import Topbar from '@/app/components/topbar/page'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import "./shop.css";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import Footer from '@/app/components/footer/page';
import Navbar from '@/app/components/navbar/page';
const Shop = () => {
  return (
    <>
    <Navbar />
    <Topbar />
    <section className='shop-main'>
    <div className="shop-input">
        <div className='flex'>
            <p className='my-1 mx-3 font-bold text-lg'>Sort By : </p>
            <p><Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Newest" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select></p>
            </div>
            <div className='flex'>
            <p className='my-1 mx-3 font-bold text-lg'>Show : </p>
            <p><Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Default" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select></p>
            </div>
    </div>
    <div className="shop-flex">
    <div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-1.png" alt="" />
        <div className="px-6 py-4">
            <div className="mb-2 ">
                <p className='font-bold text-xl'>Fresh Lime</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
                <del className="text-gray-500 mx-3">$45.00</del></p>
            </div>
        </div>
    </div>
</div>
<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-2.png" alt="" />
        <div className="px-6 py-4">
            <div className="mb-2 ">
                <p className='font-bold text-xl'>Chocolate Muffin</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
                </p>
            </div>
        </div>
    </div>
</div>

<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-3.png" alt="" />
        <div className="px-6 py-4">
            <div className="mb-2 ">
                <p className='font-bold text-xl'>Burger</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
                <del className="text-gray-500 mx-3">$45.00</del></p>
            </div>
        </div>
    </div>
</div>

    </div>
    <div className="shop-flex">
    <div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-10.png" alt="" />
        <div className="px-6 py-4">
            <div className="mb-2 ">
                <p className='font-bold text-xl'>Country Burger</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
                <del className="text-gray-500 mx-3">$45.00</del></p>
            </div>
        </div>
    </div>
</div>
<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-5.png" alt="" />
        <div className="px-6 py-4">
            <div className="mb-2 ">
                <p className='font-bold text-xl'>Drink</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
                <del className="text-gray-500 mx-3">$45.00</del></p>
            </div>
        </div>
    </div>
</div>

<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-6.png" alt="" />
        <div className="px-6 py-4">
            <div className="mb-2 ">
                <p className='font-bold text-xl'>Pizza</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
                </p>
            </div>
        </div>
    </div>
</div>

    </div>
    <div className="shop-flex">
    <div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-7.png" alt="" />
        <div className="px-6 py-4">
            <div className="mb-2 ">
                <p className='font-bold text-xl'>Cheese Butter</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
               </p>
            </div>
        </div>
    </div>
</div>
<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-8.png" alt="" />
        <div className="px-6 py-4">
            <div className="mb-2 ">
                <p className='font-bold text-xl'>Sandwiches</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
                </p>
            </div>
        </div>
    </div>
</div>

<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-9.png" alt="" />
        <div className="px-6 py-4">
            <div className="mb-2 ">
                <p className='font-bold text-xl'>Chicken Chup</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
                </p>
            </div>
        </div>
    </div>
</div>

    </div>
    <div className="shop-flex">
    <div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-10.png" alt="" />
        <div className="px-6 py-4">
        <div className="mb-2 ">
                <p className='font-bold text-xl'>Country Burger</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
            </p>
            </div>
        </div>
    </div>
</div>
<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-11.png" alt="" />
        <div className="px-6 py-4">
        <div className="mb-2 ">
                <p className='font-bold text-xl'>Drink</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
                <del className="text-gray-500 mx-3">$45.00</del></p>
            </div>
        </div>
    </div>
</div>

<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-12.png" alt="" />
        <div className="px-6 py-4">
        <div className="mb-2 ">
                <p className='font-bold text-xl'>Pizza</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
                </p>
            </div>
        </div>
    </div>
</div>

    </div>
    <div className="shop-flex">
    <div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-13.png" alt="" />
        <div className="px-6 py-4">
        <div className="mb-2 ">
                <p className='font-bold text-xl'>Cheese Butter</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
               </p>
            </div>
        </div>
    </div>
</div>
<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-14.png" alt="" />
        <div className="px-6 py-4">
            <div className="mb-2 ">
                <p className='font-bold text-xl'>Sandwiches</p>
                <p className=''>
                    <span className="font-bold color">$38.00</span>
                </p>
            </div>
        </div>
    </div>
</div>

<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className='blog-img' src="/shop-15.png" alt="" />
        <div className="px-6 py-4">
            <div className="mb-2 ">
                <p className='font-bold text-xl'>Chicken Chup</p>
                <p className=''>
                    <span className="font-bold color">$12.00</span>
                </p>
            </div>
        </div>
    </div>
</div>
    </div>
    <div className="page">
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
    <Footer />
    </section>

    </>
  )
}

export default Shop
