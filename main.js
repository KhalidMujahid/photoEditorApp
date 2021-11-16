const upload = document.querySelector("#upload");
const image = document.querySelector("img");
const resetBtn = document.querySelector(".reset button");

//effects
const grayscale = document.querySelector("#grayscale");
const brightness = document.querySelector("#brightness");
const contract = document.querySelector("#contract");
const hue = document.querySelector("#hue");
const sepia = document.querySelector("#sepia");
const opac = document.querySelector("#opt");
const range = document.querySelectorAll("input[type='range']");
const reset = document.querySelector(".reset button");
const invert = document.querySelector("#invert");

reset.addEventListener("click", resetFunc);


upload.addEventListener("change", () => {
  //resetFunc();
  let read = new FileReader();
  read.readAsDataURL(upload.files[0]);
  read.onload = () => {
     image.src = read.result;
  }
});


const effects = () => {
  image.style.filter = `
    grayscale(${grayscale.value}%)
    contrast(${contract.value}%)
    hue-rotate(${hue.value}deg)
    sepia(${sepia.value}%)
    brightness(${brightness.value})
    invert(${invert.value})
  `;
}

range.forEach(rang => {
  rang.addEventListener("input", effects);
});


function resetFunc(){
  blur.value = "0";
  contract.value = "100";
  hue.value = "0";
  sepia.value = "0";
  opac.value = "0";
  brightness.value = "20";
  invert.value = "0";
  effects();
}