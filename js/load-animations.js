/*
TimelineLite is a lightweight, intuitive timeline class for building and managing sequences 
of TweenLite, TweenMax, TimelineLite, and/or TimelineMax instances. You can think of a TimelineLite
instance like a container where you place tweens (or other timelines) over the course of time. 
Here it is being used to create 2 states: the first and the final state of the animation, so the from()
function represents the state in which the animation will start and the to the final state of the animation.

Copyright (c) Eduardo Migueis 2020.

 */
var tl = new TimelineLite();
tl.from(".left-wrapper", {
  duration: 1.3,
  ease: Power1.easeOut,
  x: "-45vw",
}).to(".left-wrapper", { duration: 1.3, x: 0 });

var tl2 = new TimelineLite();
tl2
  .from(".main-form", {
    duration: 1,
    ease: Power1.easeOut,
    y: "-10vh",
    opacity: 0,
  })
  .to(".main-form", { duration: 1, y: 0, opacity: 1 });
