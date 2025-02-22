import React, { useEffect } from "react";
import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";
import "./Cursor.scss";
const Cursor = () => {
  useEffect(() => {
    neonCursor({
      el: document.getElementById("app-container"),
      shaderPoints: 4,
      curvePoints: 10,
      curveLerp: 0.2,
      radius1: 3,
      radius2: 10,
      velocityTreshold: 10,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.002,
      sleepTimeCoefY: 0.002,
    });
  }, []);

  return <></>;
};

export default Cursor;
