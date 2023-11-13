"use client";
import Layout from "@/components/basic/Layout";
import LeftArrowIcon from "@/components/icons/ArrowIcon";
import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import ShopengIcon from "@/components/icons/ShopengIcon";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { useState } from "react";

export default function Signup() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="absolute top-0 left-0 min-h-screen w-full bg-background z-50 flex items-center">
      <Link className="absolute top-6 left-6" href="/">
        <LeftArrowIcon className="fill-white " />
      </Link>
      <Layout className="!w-1/2 mx-auto">
        <div className="w-full">
          <ShopengIcon className="w-full" />
          <h1>Sign Up now</h1>
          <p>
            Already have Shopeng account? <Link href="/login">Login</Link>
          </p>
          <form>
            <Input
              type="text"
              label="Name"
              variant="bordered"
              className="my-2"
            />
            <Input
              type="email"
              label="Email"
              variant="bordered"
              className="my-2"
            />
            <Input
              label="Password"
              variant="bordered"
              placeholder="At least 6 characters"
              className="my-2"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
            <Input
              label="Re-enter Password"
              variant="bordered"
              className="my-2"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
            <Button className="w-full">Sign Up</Button>
          </form>
          <p>or sign up with</p>
          <Button fullWidth startContent={<GoogleIcon />}>
            Google
          </Button>
          <p>
            By signing up, I agree to{" "}
            <Link href="terms">Terms and Conditions</Link> and{" "}
            <Link href="privacy">Privacy Policy</Link>
          </p>
        </div>
      </Layout>
    </main>
  );
}
