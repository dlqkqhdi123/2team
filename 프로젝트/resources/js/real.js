window.addEventListener("scroll", function () {
  const navi = document.querySelector(".navigation");
  const naviHeight = navi.getBoundingClientRect().height;
  if (window.scrollY > naviHeight) {
    navi.classList.add("active");
    navi.classList.remove("deactive");
  } else {
    navi.classList.remove("active");
    navi.classList.add("deactive");
  }
});

const hambugerBtn = document.querySelector(".hamburger-button");
const gnb = document.querySelector(".gnb");
const account = document.querySelector(".account");
const gnbWidth = gnb.getBoundingClientRect().width;
hambugerBtn.addEventListener("click", function () {
  hambugerBtn.classList.toggle("active");
  gnb.classList.toggle("vh");
  account.classList.toggle("active");
});
// 단축키
const shortCut = document.querySelector(".lg-shortcut");
const lgShorCut = document.querySelectorAll(".lg-h2-shortcut");
const imgBox = document.querySelectorAll(".lg-imgbox");
let isShortCutOpen = false;

for (let i = 0; i < lgShorCut.length; i++) {
  lgShorCut[i].addEventListener("click", () => {
    imgBox[i].classList.toggle("lg-modal");
  });
}

// function onClick() {
//   if (isShortCutOpen) {
//     isShortCutOpen = false;
//     imgBox.classList.remove("lg-modal");
//   } else {
//     isShortCutOpen = true;
//     imgBox.classList.add("lg-modal");
//   }
// }

// for (let i = 0; i < shortCut.length; i++) {
//   funcs[i] = shortCut(i);
//   console.log(funcs);
// }
// for (let j = 0; j < lgShorCut.length; j++) {
//   funcs[j]();
// }

// function onClick() {
//   imgBox.forEach((i) => {
//     if (isShortCutOpen) {
//       isShortCutOpen = false;
//       i.classList.add("active");
//     } else {
//       isShortCutOpen = ture;
//       i.classList.remove("active");
//     }
//   });
// }

// imgTitle.forEach((copy) => {
//   copy.addEventListener("click", (e) => {
//     image.classList.toggle("selected");
//   });
// });

// function toggle() {
//   pTag.addEventListener("click", function () {
//     title.classList.toggle("selected");
//   });
// }
