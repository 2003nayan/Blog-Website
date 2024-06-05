import React from "react";
import { Link } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";

const SignUp = () => {
  return (
    <>
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* left */}
          <div className="flex-1">
            <Link
              to="/"
              className="text-sm sm:text-xl font-semibold dark:text-white"
            >
              <img className="h-11" src="/black-logo.png" alt="Logo" />
            </Link>
            <p className="mt-3 text-sm">
              This is a demo project. You can sign up with your email and
              password or with Google.
            </p>
          </div>
          {/* right */}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div className="">
                <Label value="Your username" />
                <TextInput type="text" placeholder="Username" id="username" />
              </div>
              <div className="">
                <Label value="Your email" />
                <TextInput
                  type="text"
                  placeholder="name@company.com"
                  id="email"
                />
              </div>
              <div className="">
                <Label value="Your password" />
                <TextInput type="text" placeholder="Password" id="password" />
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit">
                Sign Up
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5 ">
              <span>Have an account?</span>
              <Link to="/sign-in" className="text-blue-500">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
