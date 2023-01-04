const btn = document.getElementById("bar_id");
const onOff = document.querySelector("#left_side_bar");
const left_side_bar = document.getElementById("right_sidebar_id");
const left_side_bar_v = document.getElementById("left_side_bar");
const signout = document.querySelector(".your_profile_image");
const signout_box = document.querySelector("#sign_out_box");

btn.addEventListener("click", function () {
  onOff.classList.toggle("onOff");
  left_side_bar.classList.toggle("new_width");
  btn.classList.toggle("active_button");
  left_side_bar_v.classList.toggle("with_auto");
});

//   sign out
signout.addEventListener("click", function () {
  signout_box.classList.toggle("offOn");
});

document.querySelector(".header_part").addEventListener("click", function () {
  this.classList.toggle("bg_red");
});