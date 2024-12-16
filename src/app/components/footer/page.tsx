import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <>
    <section className='footer-main'>
    <div className="comment-main pt-20">
        <div className="comment-ctn">
            <h3><span>St</span>ill You Need Our Support ?</h3>
            <p>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
        </div>
        <div className="comment-box">
        <div className="flex w-full max-w-sm items-center comment">
      <Input type="email" placeholder="Enter Your Email"/>
      <Button type="submit">Subscribe Now</Button>
    </div>
        </div>
    </div>
    <div className="footer-area mt-5">
    <footer className="w-full bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
                <div className="block">
                    <h4 className="text-xl text-white font-bold mb-7">About Us.</h4>
                    <p className='text-white'>orporate clients and leisure travelers has
been relying on Groundlink for dependab
safe, and professional chauffeured car
service in major cities across World.</p>
                <div className="time mt-9">
                    <img src="/clock.png" alt="" />
                    <p>Opening Houres <br /><span>Mon - Sat(8.00 - 6.00)</span> <span>Sunday - Closed</span></p>
                    
                </div>
                </div>
                <div className="block">
                    <h4 className="text-xl text-white font-bold mb-7">Useful Links</h4>
                    <ul className="text-lg  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-300 hover:text-white">About</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-300 hover:text-white">News</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-300 hover:text-white">Partners</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-300 hover:text-white">Team</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-300 hover:text-white">Manu</a></li>
                        <li ><a href="javascript:;"  className=" text-gray-300 hover:text-white">Contacts</a></li>
                    </ul>
                </div>

                <div className="block">
                    <h4 className="text-xl text-white font-bold mb-7">Help?</h4>
                    <ul className="text-lg  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-300 hover:text-white">FAQ</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-300 hover:text-white">Terms & conditions</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-300 hover:text-white">Reporting</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-300 hover:text-white">Documentation</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-300 hover:text-white">Support Policy</a></li>
                        <li ><a href="javascript:;"  className=" text-gray-300 hover:text-white">Privacy</a></li>
                    </ul>
                </div>
                
                <div className="block">
                    <h4 className="text-xl text-white font-bold mb-7">Recent Post</h4>
                    <div className="time mt-9">
                    <img className='w-20' src="/foot1.png" alt="" />
                    <p className='mt-3'><span className='text-gray-500'>20 Feb 2022</span><br /><span>Keep Your Business</span></p>
                </div>
                <div className="time mt-9">
                    <img className='w-20' src="/foot2.png" alt="" />
                    <p className='mt-3'><span className='text-gray-500'>20 Feb 2022</span><br /><span>Keep Your Business</span></p>
                </div>
                <div className="time mt-9">
                    <img className='w-20' src="/foot3.png" alt="" />
                    <p className='mt-3'><span className='text-gray-500'>20 Feb 2022</span><br /><span>Keep Your Business</span></p>
                </div>
                </div>
            </div>
            </div>
    </footer>
            <div className="links">
            <div className="py-7 ">
                <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
                        <span className="text-white  block">©Copyright 2022 by Ayeman. All Rights Reserved.</span>
                    <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                    <a href="javascript:;" className="w-9 h-9 border border-white flex justify-center items-center hover:border-indigo-600">
  <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.675C0 23.407 0.593 24 1.325 24H12.81V14.706H9.692V11.045H12.81V8.414C12.81 5.336 14.63 3.719 17.396 3.719C18.69 3.719 19.72 3.81 20.018 3.854V7.047L18.248 7.048C16.803 7.048 16.514 7.75 16.514 8.845V11.045H19.898L19.444 14.706H16.514V24H22.675C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
      fill="currentColor"
    />
  </svg>
</a>
                        <a href="javascript:;"  className="w-9 h-9 border border-white flex justify-center items-center hover:border-indigo-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white"/> 
                          </svg>
                                
                        </a>
                        <a href="javascript:;"  className="w-9 h-9 border border-white flex justify-center items-center hover:border-indigo-600">
                            <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                        
                        

                        <a href="javascript:;"  className="w-9 h-9 border border-white flex justify-center items-center hover:border-indigo-600">
                            <svg className="w-[1.25rem] h-[0.875rem] text-white" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                        <a href="javascript:;" className="w-9 h-9 border border-white flex justify-center items-center hover:border-indigo-600">
  <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 0C5.373 0 0 5.373 0 12C0 17.195 3.438 21.648 8.207 23.246C8.098 22.438 7.979 20.07 8.407 18.697C8.7 17.687 9.855 13.869 9.855 13.869C9.855 13.869 9.433 13.119 9.433 11.931C9.433 10.065 10.556 8.791 11.96 8.791C13.169 8.791 13.711 9.714 13.711 10.738C13.711 12.173 12.96 13.905 12.282 15.474C11.83 16.537 12.716 17.452 13.781 17.452C15.899 17.452 17.234 14.774 17.234 11.931C17.234 8.755 14.995 6.861 12.007 6.861C8.405 6.861 6.286 9.335 6.286 12.155C6.286 13.11 6.631 14.013 7.198 14.616C7.363 14.798 7.385 14.87 7.327 15.086C7.263 15.339 7.077 16.05 7.012 16.288C6.924 16.612 6.692 16.702 6.393 16.57C5.142 16.01 4.449 14.546 4.449 12.174C4.449 8.474 7.478 5.362 12.083 5.362C15.984 5.362 19.174 8.077 19.174 11.86C19.174 15.753 16.936 18.814 13.628 18.814C12.31 18.814 11.111 18.011 10.853 17.188C10.853 17.188 10.291 19.324 10.161 19.771C9.836 20.895 9.155 22.094 8.602 22.898C9.61 23.25 10.787 23.486 12 23.486C18.627 23.486 24 18.113 24 12C24 5.373 18.627 0 12 0Z"
      fill="currentColor"
    />
  </svg>
</a>

                    </div>
            </div>
                </div>
            </div>
        
    </div>
</section>
    </>
  )
}

export default Footer
