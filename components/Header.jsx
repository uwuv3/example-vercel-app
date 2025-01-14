import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import darkTheme from "../hooks/dark";
import { Popover, Transition } from "@headlessui/react";
const navItems = [
  { label: "Ana sayfa", href: "/", icon: "fa-regular fa-house" },
  { label: "Api", href: "/apis", icon: "fa-regular fa-code" },
];
const Header = () => {
  const router = useRouter();
  const [isActive, setActive] = useState(false);
  const [colorTheme, setTheme] = darkTheme();

  const navbar = () => {
    setActive(true);
  };
  return (
    <>
      <link
        href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
        rel="stylesheet"
      />
      <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto sticky-navbg-black bg-opacity-60 text-gray-100">
        <div
          className="flex items-center dark:text-[#454FBF] text-[#5865F2] hover:text-[#454FBF] dark:hover:text-[#5865F2]"
          style={{ fontSize: "15px" }}
        >
          {navItems.map((item) => (
            <Link legacyBehavior href={item.href} key={item.href}>
              <a
                style={{
                  fontSize: "15px",
                  position: "relative",
                  right: "-30px",
                }}
                className={`${
                  router.asPath === `${item.href}` &&
                  "dark:text-[#454FBF] text-[#5865F2]"
                } hover:text-[#454FBF] dark:hover:text-[#5865F2] font-bold  mr-2 p-1 sm:p-4 text-lg hover:scale-105 duration-75`}
              >
                <i className={item.icon}></i> {item.label}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
