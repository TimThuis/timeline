// const buttonNext = document.getElementById('next');
// buttonNext.addEventListener('click', playTimeline);
//
// const buttonReverse = document.getElementById('return');
// buttonReverse.addEventListener('click', reverseTimeline);
//
// function playTimeline() {
//   journey.play()
// }
//
// function reverseTimeline() {
//   journey.reverse()
// }

// alert("user your arrowkeys to 'pause', 'start' and 'reverse' the animation")

const journey = new TimelineMax();
const tlOne = new TimelineMax({
  delay: 1
});
const tlTwo = new TimelineMax({
  paused: true,
});
const tlThree = new TimelineMax({
  paused: true,
});
const tlFour = new TimelineMax({
  paused: true,
});

tlOne.from("#chapter-1 .dot", 1, {
  ease: Elastic.easeOut.config(1, 0.3),
  transform: "scale(0)"
}, "start")
  .from("#chapter-1 #start-content", 3, {
    ease: Elastic.easeOut.config(1.2, 0.5),
    transform: "rotate(90deg)",
    width: "0%"
  }, "start+=1")

tlTwo.to("#chapter-1 .line", 1.5, {
  width: "100%"
})
  .from("#chapter-2 .dot", 0.5, {
    ease: Elastic.easeOut.config(1, 0.3),
    transform: "scale(0)"
  }, "start")
  .from("#second-content h2", 3, {
    ease: Elastic.easeOut.config(1, 0.3),
    transform: "rotateX(-90deg)"
  }, "start")

tlThree.to("#chapter-2 .line", 1.5, {
  width: "100%"
})
  .from("#chapter-3 .dot", 0.5, {
    ease: Elastic.easeOut.config(1, 0.3),
    transform: "scale(0)"
  })

tlFour.to("#chapter-3 .line", 1.5, {
  width: "100%"
})
  .from("#chapter-4 .dot", 0.5, {
    ease: Elastic.easeOut.config(1, 0.3),
    transform: "scale(0)"
  })

journey
  .add(chapterOne)
  // >>>> paused <<<<
  .to("#timeline-journey", 3, {
    transform: "translateX(-100vw)",
  }, "second")
  .add(tlTwo.play(), "second")
  .add(chapterTwo, "second+=3")
  // >>>> paused <<<<
  .to("#timeline-journey", 2, {
    transform: "translateX(-200vw)",
  }, "third")
  .add(tlThree.play(), "third")
  .add(chapterThree, "third+=2")
  // >>>> paused <<<<
  .to("#timeline-journey", 2, {
    transform: "translateX(-300vw)",
  }, "fourth")
  .add(tlFour.play(), "fourth")
  // >>>> paused <<<<
  .add(chapterFour, "fourth+=2")

function chapterOne() {
  journey.pause();
  console.log("chapter one");
}

function chapterTwo() {
  journey.pause();
  console.log("chapter two");

}

function chapterThree() {
  journey.pause();
  console.log("chapter three");
}

function chapterFour() {
  journey.pause();
  console.log("chapter four");
}

document.addEventListener('keydown', keyboardClick);

function keyboardClick(event) {
  switch (event.key) {
    case "ArrowDown":
      journey.pause();
      break;
    case "ArrowRight":
      journey.play();
      break;
    case "ArrowLeft":
      journey.reverse();
      break;
    case "ArrowUp":
      journey.pause();
      break;
    default:
      console.log(event.key);
  }
}
