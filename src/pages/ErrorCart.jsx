import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

const ErrorCart = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="container mx-auto mt-10 text-center  pt-36 h-14">
      <div>
        {loading ? (
          <PulseLoader color="gray" />
        ) : (
          <>
            <h1 className="text-3xl font-bold text-gray-600 mb-4">
              {" "}
              You did not select any item
            </h1>
            <p className="text-lg text-gray-700 font-bold">Please add items</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ErrorCart;
