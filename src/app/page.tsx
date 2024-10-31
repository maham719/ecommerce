import Image from "next/image";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan,faLessThan} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <Fragment>
      {/* main banner  */}
  <div className="banner w-full">
  <div className="banner-sub w-full flex justify-center items-center gap-11 ">
    <div className=" banner-text flex flex-col gap-6">
    <p className="text-sm font-extrabold text-gray-300">Pro.Beyond.</p>
    <p className="tracking-wider text-7xl  font-[100]  font-[PT Sans Narrow]">IPHONE  14 <span className="font-[700]">Pro</span></p>
    <p className=" text-gray-300 text-xs">Created to change everything for the better. For everyone</p>
    <button className="w-48 h-14 border border-1 border-white rounded-md">Shop Now</button>
    </div>
  <Image
  src="/images/iphone image.png"
  alt="Banner"
  width={300}
  height={100}/>
  </div>
  </div>
  
{/* popular products */}
<div className="grid-layout">
<div className="bg-white h-auto area1 flex flex-col">

<div className="bg-white area1-sub h-[320px] flex items-center ">
  <img src="/images/PlayStation.png" alt="" />
  <div className="area1-text">
    <h1 className="text-4xl">Playstation 5</h1>
    <p className="text-sm">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
  </div>
</div>

<div className="area3 flex h-[260px] w-full">
<div className="bg-[#E5E5E5] full w-1/2 flex items-center gap-8 ">
<img src="/images/half.png" alt="" className="w-20" />
<div className="w-40">
  <h1 className="text-2xl">Apple 
AirPods  <span className="font-bold">Max</span></h1>
<p className="text-xs">Computational audio. Listen, it's powerful</p>
</div>

</div>
<div className="bg-[#353535] h-full w-1/2 flex items-center gap-8 text-white">
<img src="/images/image36.png" alt="" className="w-28"/>
<div className="w-40">
<h1 className="text-2xl">Apple 
Vision <span className="font-bold"> Pro</span></h1>
<p className="text-xs">An immersive way to experience entertainment</p>
</div>
</div>


</div>
</div>

<div className="bg-[#E5E5E5]  flex items-center justify-center">

<div className="pl-12 gap-8 flex flex-col">
<h1 className="text-5xl font-thin">Macbook <br /> <span className="font-bold">Air</span></h1>
<p className="w-3/4 text-xs">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
<button className="w-48 h-14 border border-1 border-black rounded-md">Shop Now</button>
</div>

  <div className="img-container">
    
  <img src="/images/Display.png" alt="" className="w-80 " />
  </div>
</div>
</div>

{/* Categories section  */}
<div className=" categories h-80 w-full bg-[#FAFAFA] flex flex-col items-center justify-center gap-4 ">
  <div className="w-[1120px] h-8 flex justify-between text-xl font-semibold"><p className="text-gray-800">Browse By Category </p> <div className="text-2xl flex gap-7 text-gray-500"><FontAwesomeIcon icon={faLessThan} />    <FontAwesomeIcon icon={faGreaterThan} /></div></div>

  <div className="w-[1120] h-32 flex gap-8 text-[16px] font-semibold">
    <div className="bg-[#EDEDED] w-40 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 "><img src="/images/Phones.png" alt="" /><h1 >Phones</h1></div>
  
    <div className="bg-[#EDEDED] w-40 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 "><img src="/images/SmartWatches.png" alt="" /><h1 >Smart Watches</h1></div>

    <div className="bg-[#EDEDED] w-40 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 "><img src="/images/Cameras.png" alt="" /><h1 >Cameras</h1></div>

    <div className="bg-[#EDEDED] w-40 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 "><img src="/images/Headphones.png" alt="" /><h1 >Headphones</h1></div>

    <div className="bg-[#EDEDED] w-40 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 "><img src="/images/Computers.png" alt="" /><h1 >Computers</h1></div>

    <div className="bg-[#EDEDED] w-40 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 "><img src="/images/Gaming.png" alt="" /><h1 >Gaming</h1></div>
  </div>
</div>
 

{/* new arrivals/bestsellers/featured products section  */}
<div className="min-h-[1056px] bg-white w-full flex  flex-col items-center justify-items-center py-14 gap-8">

  <div className="min-w-[1120px] h-8 flex items-center gap-8 font-[600]"> <h1 className="text-black ">New Arrival <hr className="border-2 border-black" /></h1> <h1 className="text-gray-500">Bestseller</h1> <h1 className="text-gray-500">Featured Products</h1></div>

  <div className="min-w-[1000px] h-[800] flex flex-wrap  gap-4 px-14 justify-center">
  

  {/* product 1 */}
<div className="w-64 min-h-[432px] rounded-lg py-6 px-4 bg-[#F6F6F6] flex flex-col items-center  gap-4">
  <div className="w-56 h-8 flex items-center justify-end"><FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer text-2xl text-gray-400"
          /></div>
  <img src="/images/Iphone14pro1.png" alt="" className="" />
  <div className="w-60 h-40 flex flex-col items-center justify-between"><h1 className="font-semibold text-xs text-center">Apple iPhone 14 Pro Max 128GB Deep Purple </h1>
  <p className="text-2xl font-bold">$900</p>
  <button className="w-44 h-12 bg-black text-white rounded-lg">Buy Now</button></div>
</div>

{/* product 2 */}
<div className="w-64 min-h-[432px] rounded-lg py-6 px-4 bg-[#F6F6F6] flex flex-col items-center gap-4">
  <div className="w-56 h-8 flex items-center justify-end"><FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer text-2xl text-gray-400"
          /></div>
  <img src="/images/Iphone14pro12.png" alt="" className="" />
  <div className="w-60 h-40 flex flex-col items-center justify-between"><h1 className="font-semibold text-xs text-center">Blackmagic Pocket Cinema Camera 6k</h1>
  <p className="text-2xl font-bold">$2535</p>
  <button className="w-44 h-12 bg-black text-white rounded-lg">Buy Now</button></div>
</div>

{/* prodcut 3 */}
<div className="w-64 min-h-[432px] rounded-lg py-6 px-4 bg-[#F6F6F6] flex flex-col items-center  gap-4">
  <div className="w-56 h-8 flex items-center justify-end"><FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer text-2xl text-gray-400"
          /></div>
  <img src="/images/Iphone14pro3.png" alt="" className="" />
  <div className="w-60 h-40 flex flex-col items-center justify-between"><h1 className="font-semibold text-xs text-center">Apple Watch Series 9 GPS 41mm Starlight Aluminium  </h1>
  <p className="text-2xl font-bold">$399</p>
  <button className="w-44 h-12 bg-black text-white rounded-lg">Buy Now</button></div>
</div>

{/* product 4 */}
<div className="w-64 min-h-[432px] rounded-lg py-6 px-4 bg-[#F6F6F6] flex flex-col items-center  gap-4">
  <div className="w-56 h-8 flex items-center justify-end"><FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer text-2xl text-gray-400"
          /></div>
  <img src="/images/Iphone14pro4.png" alt="" className="" />
  <div className="w-60 h-40 flex flex-col items-center justify-between"><h1 className="font-semibold text-xs text-center">AirPods Max Silver
  Starlight Aluminium </h1>
  <p className="text-2xl font-bold">$549</p>
  <button className="w-44 h-12 bg-black text-white rounded-lg">Buy Now</button></div>
</div>

{/* product 5 */}
<div className="w-64 min-h-[432px] rounded-lg py-6 px-4 bg-[#F6F6F6] flex flex-col items-center gap-4">
  <div className="w-56 h-8 flex items-center justify-end"><FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer text-2xl text-gray-400"
          /></div>
  <img src="/images/Iphone14pro6.png" alt="" className="" />
  <div className="w-60 h-40 flex flex-col  items-center justify-between"><h1 className="font-semibold text-xs text-center">Samsung Galaxy Watch6 Classic 47mm Black</h1>
  <p className="text-2xl font-bold">$369</p>
  <button className="w-44 h-12 bg-black text-white rounded-lg">Buy Now</button></div>
</div>

{/* product 6 */}
<div className="w-64 min-h-[432px] rounded-lg py-6 px-4 bg-[#F6F6F6] flex flex-col items-center gap-4">
  <div className="w-56 h-8 flex items-center justify-end"><FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer text-2xl text-gray-400 fill-red-600"
          /></div>
  <img src="/images/Iphone14pro7.png" alt="" className="" />
  <div className="w-60 h-40 flex flex-col items-center justify-between"><h1 className="font-semibold text-xs text-center">Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</h1>
  <p className="text-2xl font-bold">$1799</p>
  <button className="w-44 h-12 bg-black text-white rounded-lg">Buy Now</button></div>
</div>

{/* product 7 */}
<div className="w-64 min-h-[432px] rounded-lg py-6 px-4 bg-[#F6F6F6] flex flex-col items-center gap-4">
  <div className="w-56 h-8 flex items-center justify-end"><FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer text-2xl text-gray-400"
          /></div>
  <img src="/images/Iphone14pro8.png" alt="" className="" />
  <div className="w-60 h-40 flex flex-col items-center justify-between "><h1 className="font-semibold text-xs text-center">Galaxy Buds FE
  Graphite </h1>
  <p className="text-2xl font-bold">$99.99</p>
  <button className="w-44 h-12 bg-black text-white rounded-lg">Buy Now</button></div>
</div>

{/* product 8 */}
<div className="w-64 min-h-[432px] rounded-lg py-6 px-4 bg-[#F6F6F6] flex flex-col items-center  gap-4">
  <div className="w-56 h-8 flex items-center justify-end"><FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer text-2xl text-gray-400"
          /></div>
  <img src="/images/Iphone14pro9.png" alt="" className="" />
  <div className="w-60 h-40 flex flex-col items-center justify-between "><h1 className="font-semibold text-xs  text-center">Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021 </h1>
  <p className="text-2xl font-bold">$398</p>
  <button className="w-44 h-12 bg-black text-white rounded-lg">Buy Now</button></div>
</div>

  </div>



</div>


{/* products  */}
<div className="w-full min-h-[640px] flex">
{/* card1 */}
  <div className="w-1/4 h-[600px]  flex flex-col justify-evenly items-center gap-4">

<div className="w-full h-72">
  <img src="/images/Group1.png" alt="" className="relative" />
  
  
</div>
<div className="w-[298px] h-52 mx-8">
  <div className="w-[280px]  h-12 "><h1 className="text-3xl">Popular Products</h1></div>
  <div className="w-[280px] h-16 ">
    <p className="text-xs">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
  </div>
  <button className="px-14 py-4   border border-black w-48 h-14 rounded-md">Shop Now</button>
</div>
  </div>

{/* card2 */}
  <div className="w-1/4 h-[600px] bg-[#F9F9F9] flex flex-col justify-evenly items-center gap-4">

<div className="w-full h-72">
  <img src="/images/image64.png" alt="" className="" />
 
  
</div>
<div className="w-[298px] h-52 mx-8">
  <div className="w-[280px] h-12 "><h1 className="text-3xl">Ipad Pro</h1></div>
  <div className="w-[280px] h-16 ">
    <p className="text-xs">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
  </div>
  <button className="px-14 py-4   border border-black w-48 h-14 rounded-md">Shop Now</button>
</div>
  </div>


{/* card3 */}
  <div className="w-1/4 h-[600px] bg-[#EAEAEA] flex flex-col justify-evenly items-center gap-4">

<div className="w-full h-72">
  <img src="/images/image41.png" alt="" className="" />
  
</div>
<div className="w-[298px] h-52 mx-8">
  <div className="w-[280px]  h-12 "><h1 className="text-3xl">Samsung Galaxy </h1></div>
  <div className="w-[280px] h-16 ">
    <p className="text-xs">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
  </div>
  <button className="px-14 py-4   border border-black w-48 h-14 rounded-md">Shop Now</button>
</div>
  </div>

{/* card4 */}
  <div className="w-1/4 h-[600px] bg-[#2C2C2C] flex flex-col justify-evenly items-center gap-4">

<div className="w-full h-72">
  <img src="/images/Macbook1.png" alt="" className="" />
  
</div>
<div className="w-[298px] h-52 mx-8 text-gray-100">
  <div className="w-[280px]  h-12 "><h1 className="text-3xl font-extralight">Macbook Pro</h1></div>
  <div className="w-[280px] h-16 ">
    <p className="text-xs">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
  </div>
  <button className="px-14 py-4   border border-white w-48 h-14 rounded-md">Shop Now</button>
</div>
  </div>


</div>

<div className="w-full h-[656px] bg-white flex flex-col  py-20 p-40  ">
<div className="w-[1120px] h-8  items-center justify-center"><h1 className="text-xl font-semibold text-gray-700">Discounts up to -50%</h1></div>

  <div className="w-[1120px] h-[432px] flex gap-4 ">

{/* card1 */}
  <div className="w-64 min-h-[432px] rounded-lg py-6 px-4 bg-[#F6F6F6] flex flex-col items-center  gap-4">
  <div className="w-56 h-8 flex items-center justify-end"><FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer text-2xl text-gray-400"
          /></div>
  <img src="/images/Iphone14pro5.png" alt="" className="" />
  <div className="w-60 h-40 flex flex-col items-center justify-between"><h1 className="font-semibold text-xs text-center">Apple iPhone 14 Pro Max 128GB Deep Purple </h1>
  <p className="text-2xl font-bold">$900</p>
  <button className="w-44 h-12 bg-black text-white rounded-lg">Buy Now</button></div>
</div>

{/* card2 */}
<div className="w-64 min-h-[432px] rounded-lg py-6 px-4 bg-[#F6F6F6] flex flex-col items-center  gap-4">
  <div className="w-56 h-8 flex items-center justify-end"><FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer text-2xl text-gray-400"
          /></div>
  <img src="/images/Iphone14pro10.png" alt="" className="" />
  <div className="w-60 h-40 flex flex-col items-center justify-between"><h1 className="font-semibold text-xs text-center">Apple iPhone 14 Pro Max 128GB Deep Purple </h1>
  <p className="text-2xl font-bold">$900</p>
  <button className="w-44 h-12 bg-black text-white rounded-lg">Buy Now</button></div>
</div>

{/* card3 */}
<div className="w-64 min-h-[432px] rounded-lg py-6 px-4 bg-[#F6F6F6] flex flex-col items-center  gap-4">
  <div className="w-56 h-8 flex items-center justify-end"><FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer text-2xl text-gray-400"
          /></div>
  <img src="/images/Iphone14pro11.png" alt="" className="" />
  <div className="w-60 h-40 flex flex-col items-center justify-between"><h1 className="font-semibold text-xs text-center">Apple iPhone 14 Pro Max 128GB Deep Purple </h1>
  <p className="text-2xl font-bold">$900</p>
  <button className="w-44 h-12 bg-black text-white rounded-lg">Buy Now</button></div>
</div>

{/* card4 */}
<div className="w-64 min-h-[432px] rounded-lg py-6 px-4 bg-[#F6F6F6] flex flex-col items-center  gap-4">
  <div className="w-56 h-8 flex items-center justify-end"><FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer text-2xl text-gray-400"
          /></div>
  <img src="/images/Iphone14pro2.png" alt="" className="" />
  <div className="w-60 h-40 flex flex-col items-center justify-between"><h1 className="font-semibold text-xs text-center">Apple iPhone 14 Pro Max 128GB Deep Purple </h1>
  <p className="text-2xl font-bold">$900</p>
  <button className="w-44 h-12 bg-black text-white rounded-lg">Buy Now</button></div>
</div>


  </div>
</div>

<div>
  <img src="/images/Banner2.png" alt="" />
</div>
</Fragment>
  );
}
