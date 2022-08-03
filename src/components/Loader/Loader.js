import Styles from "../Loader/Loader.module.css";
import { useState } from "react";
import { useAuth } from "../../router/AuthProvider";
const Loader = ({ children, isLoading }) => {
  return (
    <>
      <div className="w-screen h-screen absolute bg-[#aed6f1] top-0 bottom-0 right-0 left-0 flex justify-center items-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"></div>
      </div>
    </>
  );
};

export default Loader;
