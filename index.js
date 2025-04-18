const loader = document.querySelector('.loader')
const loaderfill=document.querySelector(".loader-fill")
let  i=0
gsap.to(loaderfill, {
    width: "100%",
    duration: 3, // duration in seconds
    ease: "power4.out", // smooth easing
    onComplete: () => {
      gsap.to(loader, {
          opacity: 0,
        overflow:"hidden",
        duration: 0.5,
        ease: "expo.inOut",
        onComplete: () => {
          loader.classList.add("hidden","bg-white");
        }
      });
    }
  });

