import React, { useEffect, useState } from "react";
import "./Preloader.scss";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader">
          <svg viewBox="0 0 500 100">
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".35em"
              className="preloader-text"
            >
              Portfolio - Karol C.
            </text>
          </svg>
        </div>
      )}
    </>
  );
};

export default Preloader;
