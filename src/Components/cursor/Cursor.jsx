import React, { useEffect } from "react";
import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";
import "./Cursor.scss";
const Cursor = () => {
  useEffect(() => {
    neonCursor({
      el: document.getElementById("app-container"),
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 2,
      radius2: 15,
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
