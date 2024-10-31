import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {  faTwitter,faFacebookF, faInstagram, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <div className="w-full min-h-[504px] bg-black text-white flex px-40 py-36 justify-center flex-col">
      <div className="w-[1120px] min-h-[256px] flex items center justify-between">

        <div className="w-[384px] h-24"><img src="/images/Logo2.png" alt="" className="mb-6" />
        <p className="text-sm text-gray-200">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        </div>


<div className="w-[623px] h-[256px] flex gap-8">    
        <div className="w-[295px] h-[256px] flex flex-col gap-2">
            <p className="text-lg font-semibold">Services</p>

            <ul className="  text-sm text-gray-200 flex flex-col gap-4">
                <li>Bonus program</li>
                <li>Gift cards</li>
                <li>Credit and payment</li>
                <li>Service contracts</li>
                <li>Non-cash account</li>
                <li>Payment</li>




            </ul>
        </div>

        <div className="w-[295px] h-[256px] flex flex-col gap-2">
            <p className="text-lg font-semibold">Assistance to the buyer</p>

            <ul  className="text-sm text-gray-200 flex flex-col gap-4 ">
                <li>Find an order</li>
                <li>Terms of delivery</li>
                <li>Exchange and return of goods</li>
                <li>Guarantee</li>
                <li>Frequently asked questions</li>
                <li>Terms of use of the site</li>
            </ul>
        </div>
        </div>


      </div>
      <div className="w-44 h-4 flex gap-12 mt-8">
<FontAwesomeIcon icon={faTwitter} />
<FontAwesomeIcon icon={faFacebookF} />
<FontAwesomeIcon icon={faTiktok} />
<img src="/images/instagram.png" alt="" />
</div>

    </div>
  )
}
