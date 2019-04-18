import anime from "animejs";

export const animateIn = node => {
  anime({
    targets: node,
    opacity: [0, 1],
    easing: 'easeOutSine',
    translateX: [10, 0],
    duration: 400,

  });
};

export const animateOut = node => {
  anime({
    targets: node,
    opacity: [1, 0.5],
    easing: 'easeOutSine',
    translateX: [0, 10],
    duration: 1400,
    // delay: 400
  });
};
