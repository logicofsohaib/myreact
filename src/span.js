import React from 'react';
import info from './images/info.jpg'

const SpanClass = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold text-blue-500">
          Let's advance digitally together
        </h1>
        <p className="text-base text-black">
          Delivering Excellence in Tailored Software Development services, User-Centric Experiences, Mobile, and Web Applications. Our commitment lies in providing dependable, top-tier software solutions meticulously crafted to align with your unique business objectives.
        </p>
      </div>
      <div className="w-1/2">
        <img src={info} alt="info" className="max-w-full ml-4" />
      </div>
    </div>
  );
};

export default SpanClass;
