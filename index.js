let box1 = document.querySelector(".box1").lastElementChild;
let box2 = document.querySelector(".box2").lastElementChild;
let box3 = document.querySelector(".box3").lastElementChild;
let box4 = document.querySelector(".box4").lastElementChild;
let box5 = document.querySelector(".box5").lastElementChild;
let box6 = document.querySelector(".box6").lastElementChild;

box1.addEventListener("click", () => {
  document.querySelector("#ans1").classList.toggle("ans");
  //  =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
  //   <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  // </svg>
});
box2.addEventListener("click", () => {
  document.querySelector("#ans2").classList.toggle("ans");
});
box3.addEventListener("click", () => {
  document.querySelector("#ans3").classList.toggle("ans");
});
box4.addEventListener("click", () => {
  document.querySelector("#ans4").classList.toggle("ans");
});
box5.addEventListener("click", () => {
  document.querySelector("#ans5").classList.toggle("ans");
});
box6.addEventListener("click", () => {
  document.querySelector("#ans6").classList.toggle("ans");
});