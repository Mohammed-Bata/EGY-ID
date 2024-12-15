"use strict";

const conId = document.querySelector(".id");
const conInfo = document.querySelector(".info");
const inputId = document.querySelector(".inputId");
const message = document.querySelector(".message");
const btn = document.querySelector(".btn");
const birthDate = document.getElementById("birthDate");
const governorate = document.getElementById("Governorate");
const gender = document.getElementById("Gender");

inputId.addEventListener("input", function () {
  const value = inputId.value;
  if (isNaN(value)) {
    inputId.classList.add("invalid");
    message.textContent = "only numbers";
  } else {
    message.textContent = "";
    inputId.classList.remove("invalid");
  }
});
btn.addEventListener("click", function () {
  const len = inputId.value.length;
  const value = inputId.value;

  if (len < 14) {
    message.textContent = "too short";
    message.classList.add("show");
  } else if (len > 14) {
    message.textContent = "too long";
    message.classList.add("show");
  } else {
    const id = value + "";
    let year;
    let month;
    let day;
    // let arr = id.split("").map(Number);
    // console.log(arr);
    if (id[0] === "2") {
      year = 1900;
    } else if (id[0] === "3") {
      year = 2000;
    }
    year += parseInt(id[1] + id[2]);
    month = parseInt(id[3] + id[4]);
    day = parseInt(id[5] + id[6]);
    birthDate.value = `${year}/${month}/${day}`;

    const gover = parseInt(id[7] + id[8]);
    const myMap = new Map([
      [1, "Cairo"],
      [2, "Alexandria"],
      [3, "Portsaid"],
      [4, "Suez"],
      [11, "Damietta"],
      [12, "Dakahlia"],
      [13, "Sharqia"],
      [14, "Qalyubia"],
      [15, "Kafr El Sheikh"],
      [16, "Gharbia"],
      [17, "Monufia"],
      [18, "Beheira"],
      [19, "Ismailia"],
      [21, "Giza"],
      [22, "Beni Suef"],
      [23, "Faiyum"],
      [24, "Minya"],
      [25, "Assiut"],
      [26, "Sohag"],
      [27, "Qena"],
      [28, "Aswan"],
      [29, "Luxor"],
      [31, "Red Sea"],
      [32, "New Valley"],
      [33, "Matruh"],
      [34, "North Sinai"],
      [35, "South Sinai"],
      [88, "abroad"],
    ]);
    governorate.value = myMap.get(gover);
    const sex = parseInt(id[13]) % 2 == 0 ? "Female" : "Male";
    gender.value = sex;
    conId.classList.add("hidden");
    conInfo.classList.remove("hidden");
  }
});
