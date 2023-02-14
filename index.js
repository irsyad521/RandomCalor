const ChangeColorTitle = document.querySelector(
  "button[name=ChangeColorTitle]"
);

const h1 = document.querySelector("h1");

ChangeColorTitle.addEventListener("click", function () {
  const random_red = Math.floor(Math.random() * 255 + 1);
  const random_green = Math.floor(Math.random() * 255 + 1);
  const random_blue = Math.floor(Math.random() * 255 + 1);
  h1.style.color =
    "rgb(" + random_red + "," + random_green + "," + random_blue + ")";
  ChangeColorTitle.style.backgroundColor =
    "rgb(" + random_red + "," + random_green + "," + random_blue + ")";
});

// range

const kotakmerah = document.querySelector(".kotak.merah");
const kotakgreen = document.querySelector(".kotak.hijau");
const kotakblue = document.querySelector(".kotak.biru");

const merah = document.getElementById("merah");
merah.addEventListener("input", function () {
  document.body.style.backgroundColor =
    "rgb(" + merah.value + "," + green.value + "," + blue.value + ")";
  kotakmerah.innerHTML = merah.value;
});

const green = document.getElementById("green");
green.addEventListener("input", function () {
  document.body.style.backgroundColor =
    "rgb(" + merah.value + "," + green.value + "," + blue.value + ")";
  kotakgreen.innerHTML = green.value;
});

const blue = document.getElementById("blue");
blue.addEventListener("input", function () {
  document.body.style.backgroundColor =
    "rgb(" + merah.value + "," + green.value + "," + blue.value + ")";
  kotakblue.innerHTML = blue.value;
});

const btn = document.getElementById("btn");
const body = document.querySelector("body");
body.style.backgroundColor = "rgb(128,128,128)";
const save = document.getElementById("save");

btn.addEventListener("click", function () {
  const angka = body.style.backgroundColor;
  save.innerHTML = angka;
  save.style.opacity = "1";
});

//window

const fitur = document.getElementById("fitur");

function mouse(e) {
  const cursorX = Math.floor((e.clientX / innerWidth) * 255);
  const cursorY = Math.floor((e.clientY / innerHeight) * 255);

  document.body.style.backgroundColor =
    "rgb(" + cursorX + "," + cursorY + ",100)";
}

fitur.addEventListener("click", function (e) {
  fitur.classList.toggle("active");
  let benar = Boolean(document.querySelector(".active"));

  if (benar == true) {
    fitur.innerHTML = "Active";
    document.body.addEventListener("mousemove", mouse);
  } else {
    fitur.innerHTML = "Color move with Mouse";
    document.body.removeEventListener("mousemove", mouse);
  }
});
