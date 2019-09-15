let arrayHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexBtn = document.querySelector("#hexButton");
let hexBody = document.querySelector("body");
let hexSpan = document.querySelector("#hexSpan");

hexBtn.addEventListener("click", magic);

function magic() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * arrayHex.length);
    hexColor += arrayHex[random];
  }
  hexBody.style.background = hexColor;
  hexSpan.innerHTML = hexColor;
}

// let magic = document.querySelector("#hexButton");
// magic.onclick = function() {
//   document.body.style.background =
//     "#" + (((1 << 24) * Math.random()) | 0).toString(16);
// };

// let allTurbines = 25;
// let turbinePower = 2000;
// let sumPower = 0;
// let turbineCounter = 1;

// for (turbineCounter; turbineCounter <= allTurbines; turbineCounter++) {
//   if (turbineCounter <= 10)
//     console.log(
//       "Turbina nr " +
//         turbineCounter +
//         " działa z maksymalną prędkością, generując 2000 MWh. Suma całkowitej energii generowanej przez farmę wynosi w tej chwili " +
//         (sumPower = turbinePower * turbineCounter) +
//         "  MWh."
//     );
//   else if (turbineCounter > 10 && turbineCounter <= 20) {
//     console.log(
//       "Turbina nr " +
//         turbineCounter +
//         " działa z połową maksymalnej prędkości, generując 1000 MWh. Suma całkowitej energii generowanej przez farmę wynosi w tej chwili " +
//         (sumPower = sumPower + turbinePower / 2) +
//         " MWh."
//     );
//   } else {
//     console.log(
//       "Turbina nr " +
//         turbineCounter +
//         " nie działa, dlatego generuje 0 MWh. Suma całkowitej energii generowanej przez farmę wynosi w tej chwili " +
//         sumPower +
//         " MWh."
//     );
//   }
// }

// var characters = {
//   character1: { "first name": "James", "last name": "Bond" },
//   character2: { "first name": "Luke", "last name": "Skywalker" },
//   character3: { "first name": "Jason", "last name": "Bourne" },

//   fullname: function(character) {
//     console.log(
//       "Hello " +
//         this[character]["first name"] +
//         " " +
//         this[character]["last name"]
//     );
//   }
// };
// characters.fullname("character1");

// var objectName = {
//   propertyName1: propertyValue1,
//   propertyName2: function(parameter) {
//     console.log(this[parameter]);
//   }
// };
// objectName.propertyName2(argument);

// var bicycle = {
//   type: "rower miejski",
//   color: "miętowa zieleń",
//   "frame material": "stal",
//   check: function() {
//     let checkArray = [];
//     for (var obj in this) {
//       if (typeof this[obj] !== "function") {
//         checkArray.push(this[obj]);
//       }
//     }
//     console.log(checkArray);
//   }
// };
// bicycle.check();

// 'unread': function () {
//   var booksToRead = [];
//   for (var book in this) {
//     if (this[book]['has been read'] === false) {
//       booksToRead.push(this[book].title);
//     }
//   }
// }
