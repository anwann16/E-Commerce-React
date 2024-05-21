import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

import Button from "./Button";
import AvatarUser from "./AvatarUser";
import ButtonContainer from "./ButtonContainer";

import { RootTypes } from "../redux/store";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [navbarScroll, setNavbarScroll] = useState<boolean>(false);
  const { carts } = useSelector((state: RootTypes) => state.cart);
  const { user } = useAuth();

  const stickyNav = () => {
    if (window.scrollY > 100) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };

  window.addEventListener("scroll", stickyNav);

  return (
    <nav
      className={`flex justify-between items-center py-4 px-20 bg-[#219ebc] ${
        navbarScroll
          ? "fixed top-0 left-0 w-full shadow-md transition-all duration-400 z-20"
          : ""
      }`}
    >
      <Link to="/" className="text-2xl font-semibold font-logo text-[#edf2f4]">
        Gaming Store
      </Link>
      <div className="w-[35%] flex items-center relative">
        <input
          type="text"
          className="w-full py-[7px] px-2 text-xs rounded-md outline-none placeholder:text-xs"
          placeholder="Search your product..."
        />
        <IoSearch className="absolute right-3 cursor-pointer" />
      </div>
      <div className="flex gap-6 items-center">
        <Link to="/carts" className="relative cursor-pointer">
          <MdOutlineShoppingCart color="white" size={30} />
          {carts.length > 0 && (
            <p className="w-4 h-4 text-[11px] text-white font-bold flex justify-center items-center absolute -top-2 -right-1 bg-red-500 rounded-full">
              {carts?.length}
            </p>
          )}
        </Link>
        <span className="text-slate-200">|</span>
        {user ? (
          <AvatarUser />
        ) : (
          <div className="flex items-center gap-4">
            <ButtonContainer width={120}>
              <Button to="/login" variant="primary" color="black">
                Sign In
              </Button>
            </ButtonContainer>
            <ButtonContainer width={120}>
              <Button to="/login" variant="primary" color="black">
                Sign In
              </Button>
            </ButtonContainer>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
