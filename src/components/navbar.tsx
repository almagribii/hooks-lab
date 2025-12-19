import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { BiHeartSquare } from "react-icons/bi";
import { GiMagicLamp } from "react-icons/gi";
import { MdOutlineCallReceived } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import { TbWeight } from "react-icons/tb";
import { GrDocumentPerformance } from "react-icons/gr";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    useState: false,
    useEffect: false,
    useCallback: false,
    useContext: false,
    useMemo: false,
    useRef: false,
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (key: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base ms-3 mt-3 text-sm p-2 focus:outline-none inline-flex sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <GiHamburgerMenu className="w-6 h-6" />
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href=""
                className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
              >
                <MdDashboard className="w-5 h-5 transition duration-75 group-hover:text-fg-brand" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("useState")}
                type="button"
                className="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                aria-controls="dropdown-useState"
                data-collapse-toggle="dropdown-useState"
              >
                <BiHeartSquare className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Use State
                </span>
                <FaCaretDown className="w-5 h-5" />
              </button>
              <ul
                id="dropdown-useState"
                className={`${
                  dropdowns.useState ? "block" : "hidden"
                } py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("useEffect")}
                type="button"
                className="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                aria-controls="dropdown-useEffect"
                data-collapse-toggle="dropdown-useEffect"
              >
                <GiMagicLamp className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Use Effect
                </span>
                <FaCaretDown className="w-5 h-5" />
              </button>
              <ul
                id="dropdown-useEffect"
                className={`${
                  dropdowns.useEffect ? "block" : "hidden"
                } py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("useCallback")}
                type="button"
                className="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                aria-controls="dropdown-useCallback"
                data-collapse-toggle="dropdown-useCallback"
              >
                <MdOutlineCallReceived className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Use Callback
                </span>
                <FaCaretDown className="w-5 h-5" />
              </button>
              <ul
                id="dropdown-useCallback"
                className={`${
                  dropdowns.useCallback ? "block" : "hidden"
                } py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("useContext")}
                type="button"
                className="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                aria-controls="dropdown-useContext"
                data-collapse-toggle="dropdown-useContext"
              >
                <RiShareBoxLine className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Use Context
                </span>
                <FaCaretDown className="w-5 h-5" />
              </button>
              <ul
                id="dropdown-useContext"
                className={`${
                  dropdowns.useContext ? "block" : "hidden"
                } py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("useMemo")}
                type="button"
                className="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                aria-controls="dropdown-useMemo"
                data-collapse-toggle="dropdown-useMemo"
              >
                <TbWeight className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Use Memo
                </span>
                <FaCaretDown className="w-5 h-5" />
              </button>
              <ul
                id="dropdown-useMemo"
                className={`${
                  dropdowns.useMemo ? "block" : "hidden"
                } py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("useRef")}
                type="button"
                className="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                aria-controls="dropdown-useRef"
                data-collapse-toggle="dropdown-useRef"
              >
                <GrDocumentPerformance className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Use Ref
                </span>
                <FaCaretDown className="w-5 h-5" />
              </button>
              <ul
                id="dropdown-useRef"
                className={`${
                  dropdowns.useRef ? "block" : "hidden"
                } py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
