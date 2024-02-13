import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

const Error = () => {
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
            <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-lg text-gray-700">Oops! Something went wrong.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Error;
