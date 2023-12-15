
"use client"
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Login from "@/components/auth/Login";

const ErrorPage = () => {
  const router = useRouter; // Use the useRouter hook

  useEffect(() => {

    toast.error("Check your email or password and try again.");



  }, []);
  return (

    <>
      <div style={{display:"flex", justifyContent: "center", top:"20px"}}>
        <p>  check email or password</p>
      </div>
      <Login />
    </>

  );
};

export default ErrorPage;
