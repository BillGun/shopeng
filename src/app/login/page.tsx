"use client";
import Layout from "@/components/basic/Layout";
import { LeftArrowIcon } from "@/components/icons/ArrowIcon";
import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import ShopengIcon from "@/components/icons/ShopengIcon";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { useState } from "react";

export default function Login() {
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
          <h1>Login to Shopeng now</h1>
          <p>
            Don&apos;t have Shopeng account?{" "}
            <Link href="/signup">Sign up now</Link>
          </p>
          <form>
            <Input type="email" label="Email" variant="bordered" />
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
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
            <Button className="w-full">Login Up</Button>
          </form>
          <Link href="/forgot-password">Forgot your password?</Link>
          <p>or login with</p>
          <Button fullWidth startContent={<GoogleIcon />}>
            Google
          </Button>
          <p>
            By continuing, I agree to{" "}
            <Link href="terms">Terms and Conditions</Link> and{" "}
            <Link href="privacy">Privacy Policy</Link>
          </p>
        </div>
      </Layout>
    </main>
  );
}
