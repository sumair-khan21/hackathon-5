import React from 'react'
import Topbar from '../components/topbar/page'
import Navbar from '../components/navbar/page' 
import "./contact.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Footer from '../components/footer/page';

const Pages = () => {
  return (
    <>
    <Navbar />
    <Topbar />
    <section>
        <div className="pages-flex">
            <div className="page01">
            <div className="m-10">

    <div className="flex items-start justify-between p-5">
        <h3 className="text-xl font-semibold">
            Shipping Address 
        </h3>
    </div>

    <div className="p-6 space-y-6">
        <form action="#">
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">First Name</label>
                    <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-yellow-600 focus:border-yellow-600 block w-80 p-2.5"  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Last Name</label>
                <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-yellow-600 focus:border-yellow-600 block w-80 p-2.5"  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Email Address</label>
                    <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-yellow-600 focus:border-yellow-600 block w-80 p-2.5"  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
                <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-yellow-600 focus:border-yellow-600 block w-80 p-2.5"  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Company</label>
                    <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-yellow-600 focus:border-yellow-600 block w-80 p-2.5"  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Country</label>
                <Select>
      <SelectTrigger className="w-[320px]">
        <SelectValue placeholder="Choose country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value="awst">
            Australian Western Standard Time (AWST)
          </SelectItem>
          <SelectItem value="acst">
            Australian Central Standard Time (ACST)
          </SelectItem>
          <SelectItem value="aest">
            Australian Eastern Standard Time (AEST)
          </SelectItem>
          <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value="art">Argentina Time (ART)</SelectItem>
          <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
          <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
          <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Brand</label>
                    <Select>
      <SelectTrigger className="w-[320px]">
        <SelectValue placeholder="Choose city" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value="awst">
            Australian Western Standard Time (AWST)
          </SelectItem>
          <SelectItem value="acst">
            Australian Central Standard Time (ACST)
          </SelectItem>
          <SelectItem value="aest">
            Australian Eastern Standard Time (AEST)
          </SelectItem>
          <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value="art">Argentina Time (ART)</SelectItem>
          <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
          <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
          <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>       
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Zip Code</label>
                   <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-yellow-600 focus:border-yellow-600 block w-80 p-2.5"  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Address 1</label>
                    <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-yellow-600 focus:border-yellow-600 block w-80 p-2.5"  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Address 1</label>
                <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-yellow-600 focus:border-yellow-600 block w-80 p-2.5"  />
                </div>
            </div>
            <div className="billing">
               <h4>Billing Address</h4>
               <input type="checkbox" /> <span>Same as shipping address</span>
            </div>
                <div className="flex py-4 ">
              <div className="button1">
                <button>Back to cart</button>
              </div>
              <div className="button222 ">
                <button>Proceed to Shipping</button>
              </div>
                </div>
        </form>
    </div>
</div>
            </div>
            {/* <div className="page02">

            </div> */}
        </div>
    </section>
<Footer />
    </>
  )
}

export default Pages
