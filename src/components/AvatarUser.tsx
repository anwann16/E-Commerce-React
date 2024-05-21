import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { IMAGE_URL } from "../utils/constans";
import NoProfile from "../assets/images/no-profile.png";

const AvatarUser = () => {
  const [dropAvatar, setDropAvatar] = useState<boolean>(false);
  const { user, logoutApiCall } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const image = `${IMAGE_URL}/${user?.avatar}`;

  const handleLogout = async () => {
    await logoutApiCall();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropAvatar(false);
      }
    };

    if (dropAvatar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropAvatar]);

  return (
    <div className="flex flex-col items-center relative" ref={dropdownRef}>
      <div className="flex items-center gap-2">
        <figure
          className="h-9 w-9 rounded-full bg-red-500 cursor-pointer"
          onClick={() => setDropAvatar((prev) => !prev)}
        >
          <img
            src={user?.avatar ? image : NoProfile}
            alt={user?.username}
            className="h-9 w-9 rounded-full bg-cover"
          />
        </figure>
        <p className="text-sm font-semibold text-white">{user?.username}</p>
      </div>
      {dropAvatar && (
        <div className="bg-zinc-50 absolute top-11 right-3 w-56 rounded-lg z-10 transition-all duration-1000">
          <div className="border-b border-solid flex flex-col gap-4">
            <p className="w-full py-3 px-5 cursor-pointer transition-all rounded-md">
              {user?.email}
            </p>
          </div>
          <ul className="flex flex-col">
            <Link
              to="/transaction-history"
              className="w-full py-3 px-5 hover:bg-[#219ebc] hover:text-white cursor-pointer transition-all rounded-md"
            >
              Transaction History
            </Link>
            <li className="w-full py-3 px-5 hover:bg-[#219ebc] hover:text-white cursor-pointer transition-all rounded-md">
              Setting
            </li>
          </ul>
          <div className="border-t border-b border-solid">
            <p
              onClick={handleLogout}
              className="w-full py-3 px-5 rounded-md hover:bg-[#219ebc] hover:text-white cursor-pointer transition-all"
            >
              Signout
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarUser;
