import React from "react";
import cn from "./ui/cn";

const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4 ", className)}>
      {children}
    </div>
  );
};

export default Container;
