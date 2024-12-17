import Footer from '@/app/components/footer/page';
import React from 'react';
import "./blog.css";
import Topbar from '@/app/components/topbar/page';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import Navbar from '@/app/components/navbar/page';
const Blog = () => {
  return (
    <>
    <Navbar />
    <Topbar />
    <section className='blog'>
        <div className="blog-center">
    <div className="food-img22 with-texts">
        <img src="blog-back1.png" alt="" />
        <p className='text-over11'>14 <br /> <span>Feb</span></p>
        </div>
        </div>
        <div className="admin-flex">
            <img src="/Calendar.png" alt="" />
            <p>Feb 14 2025 /</p>
            <img src="/Chats.png" alt="" />
            <p>3 /</p>
            <img src="/Admin.png" alt="" />
            <p>Admin</p>
        </div>
        <h3 className='Reasons'>10 Reasons To Do A Digital Detox Challenge</h3>
        <p className='vero'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <button className='read'>Read More</button>
    </section>
    <section className='blog'>
        <div className="blog-center">
    <div className="food-img22 with-texts">
        <img src="blog-back2.png" alt="" />
        <p className='text-over11'>14 <br /> <span>Feb</span></p>
        </div>
        </div>
        <div className="admin-flex">
            <img src="/Calendar.png" alt="" />
            <p>Feb 14 2025 /</p>
            <img src="/Chats.png" alt="" />
            <p>3 /</p>
            <img src="/Admin.png" alt="" />
            <p>Admin</p>
        </div>
        <h3 className='Reasons'>Traditional Soft Pretzels with Sweet Beer Cheese</h3>
        <p className='vero'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <button className='read'>Read More</button>
    </section>
    <section className='blog'>
        <div className="blog-center">
    <div className="food-img22 with-texts">
        <img src="blog-back3.png" alt="" />
        <p className='text-over11'>14 <br /> <span>Feb</span></p>
        </div>
        </div>
        <div className="admin-flex">
            <img src="/Calendar.png" alt="" />
            <p>Feb 14 2025 /</p>
            <img src="/Chats.png" alt="" />
            <p>3 /</p>
            <img src="/Admin.png" alt="" />
            <p>Admin</p>
        </div>
        <h3 className='Reasons'>The Ultimate Hangover Burger: Egg in a Hole Burger</h3>
        <p className='vero'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <button className='read'>Read More</button>
    </section>
    <section className='blog'>
        <div className="blog-center">
    <div className="food-img22 with-texts">
        <img src="blog-back4.png" alt="" />
        <p className='text-over11'>14 <br /> <span>Feb</span></p>
        </div>
        </div>
        <div className="admin-flex">
            <img src="/Calendar.png" alt="" />
            <p>Feb 14 2025 /</p>
            <img src="/Chats.png" alt="" />
            <p>3 /</p>
            <img src="/Admin.png" alt="" />
            <p>Admin</p>
        </div>
        <h3 className='Reasons'>My Favorite Easy Black Pizza Toast Recipe</h3>
        <p className='vero'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <button className='read'>Read More</button>
    </section>
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
    </>
  )
}

export default Blog
