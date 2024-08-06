// Menu page
export const animationTextMenu = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
export const animationImgMenu = {
  initial: { opacity: 0, x: 1000, y: 110, scale: 1.4 },
  animate: { opacity: 1, x: 0, y: 0, scale: 1.0 },
  exit: { opacity: 0, x: -1000, y: -120, scale: 0.7 },
};
// About Page
export const animationTextAbout = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const animationImgAbout = {
  initial: { opacity: 0, x: -150, y: 100, scale: 0.7 },
  animate: { opacity: 1, x: 0, y: 0, scale: 0.9 },
  exit: { opacity: 0, x: -150, y: 100, scale: 0.7 },
};

// Contact Page
export const animationTextContact = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Props
export const animationProps = (animation, duration = 0.7) => ({
  variants: animation,
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: { duration },
});
