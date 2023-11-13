"use client";

import SearchIcon from "@/components/icons/SearchIcon";
import ShopengIcon from "@/components/icons/ShopengIcon";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useState } from "react";
import CartIcon from "../icons/CartIcon";
import { MoonIcon, SunIcon } from "../icons/Icons";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(true);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    },
  ];

  return (
    <header>
      {/* NavBar */}
      <div className="hidden lg:flex justify-between ">
        <NextUINavbar
          classNames={{
            wrapper: ["max-w-full"],
          }}
        >
          <NavbarBrand>
            <Link href="/">
              <ShopengIcon />
            </Link>
          </NavbarBrand>
          <NavbarContent>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="ghost">Category</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={items}>
                {(item) => (
                  <DropdownItem
                    key={item.key}
                    color={item.key === "delete" ? "danger" : "default"}
                    className={item.key === "delete" ? "text-danger" : ""}
                  >
                    {item.label}
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
          <NavbarContent>
            <NavbarItem>
              <Input
                placeholder="Search"
                isClearable
                startContent={
                  <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
              />
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="center">
            <NavbarItem>
              <CartIcon />
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/signup" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Switch
                isSelected={isSelected}
                onValueChange={() => {
                  setIsSelected(!isSelected);
                  theme === "light" ? setTheme("dark") : setTheme("light");
                }}
                size="lg"
                color="secondary"
                thumbIcon={({ isSelected, className }) =>
                  isSelected ? (
                    <SunIcon className={className} />
                  ) : (
                    <MoonIcon className={className} />
                  )
                }
              />
            </NavbarItem>
          </NavbarContent>
        </NextUINavbar>
      </div>

      {/* BurgerMenu */}
      <div className="flex lg:hidden">
        <NextUINavbar onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <p className="font-bold text-inherit">Shopeng</p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
            <NavbarItem>
              <Switch
                isSelected={isSelected}
                onValueChange={() => {
                  setIsSelected(!isSelected);
                  theme === "light" ? setTheme("dark") : setTheme("light");
                }}
                size="lg"
                color="secondary"
                thumbIcon={({ isSelected, className }) =>
                  isSelected ? (
                    <SunIcon className={className} />
                  ) : (
                    <MoonIcon className={className} />
                  )
                }
              />
            </NavbarItem>
          </NavbarMenu>
        </NextUINavbar>
      </div>
    </header>
  );
}
