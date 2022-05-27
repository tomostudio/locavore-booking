import React from 'react';

const Container = ({ children, className }) => {
  return (
    <div
      className={`container px-10 max-w-screen-xl mx-auto w-full max-md:px-5 ${className}`}
    >
      {children}
    </div>
  );
};
export default Container;
