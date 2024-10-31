import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { Fragment } from "react";

export default function Header() {
  return (
    <Fragment >
        <div className="bg-[#FFFFFF w-full h-auto py-4  z-10">
      <div className="flex items-center justify-center gap-14">
        <Image src="/images/Logo.png" alt="Logo" width={65} height={50} />
        <div className="bg-gray-200  w-64 rounded-md flex items-center px-2">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="search"
            placeholder="search"
            className="bg-gray-200 px-2 py-2 rounded-md outline-none"
          />
        </div>
        <ul className="flex items-center justify-evenly gap-14 list text-gray-500hover:cursor-pointer text-sm">
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <div className=" icons flex items-center justify-evenly gap-6 text-gray-500 text-lg">
          <FontAwesomeIcon
            icon={faHeart}
            className="hover:cursor-pointer hover:text-black"
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="hover:cursor-pointer hover:text-black"
          />
          <FontAwesomeIcon
            icon={faUser}
            className="hover:cursor-pointer hover:text-black"
          />
        </div>
      </div>

      


    </div>

   
  </Fragment>

  );
}
