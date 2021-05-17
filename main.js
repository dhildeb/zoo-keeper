//#region animal imports
import Alligator from "./animals/Alligator.js"
import Beaver from "./animals/Beaver.js"
import Caterpillar from "./animals/Caterpillar.js"
import Dolphin from "./animals/Dolphin.js"
import Elephant from "./animals/Elephant.js"
import Ferret from "./animals/Ferret.js"
import Gorilla from "./animals/Gorilla.js"
import Hamster from "./animals/Hamster.js"
import Iguana from "./animals/Iguana.js"
import Jaybird from "./animals/Jaybird.js"
import Kangaroo from "./animals/Kangaroo.js"
import Lion from "./animals/Lion.js"
import Moose from "./animals/Moose.js"
import Newt from "./animals/Newt.js"
import Owl from "./animals/Owl.js"
import Penguin from "./animals/Penguin.js"
import Quail from "./animals/Quail.js"
import Rooster from "./animals/Rooster.js"
import Salamander from "./animals/Salamander.js"
import Tuna from "./animals/Tuna.js"
import Urchin from "./animals/Urchin.js"
import Vulture from "./animals/Vulture.js"
import Whale from "./animals/Whale.js"
import Xray from "./animals/Xray-fish.js"
import Yak from "./animals/Yak.js"
import Zebra from "./animals/Zebra.js"
//#endregion
let zoo = {
  swamp: [],
  pasture: [],
  tank: [],
  miniGlassBox: [],
  cage: [],
  pen: []
}
//#region new animals
new Beaver("brox")
new Dolphin("doug")
new Caterpillar("Cilla")
new Elephant("efret")
new Ferret("frank")
new Gorilla("George")
new Hamster("Henrey")
new Iguana("Izack")
new Jaybird("Jared")
new Kangaroo("Kevin")
new Lion("Moofasa")
new Moose("mack")
new Newt("human")
new Owl("owen")
new Penguin("peter")
new Quail("quincy")
new Rooster("roger")
new Salamander("sam")
new Tuna("tim")
new Urchin("um")
new Vulture("victor")
new Whale("wyet")
new Xray("xfish")
new Yak("yuck")
new Zebra("zen")
//#endregion

function addAlligator() {

  let newGator = new Alligator(prompt("name"), prompt("color"), prompt("gender"), prompt("weight"), prompt("tail length (in)"), prompt("teeth size"), prompt("age"))
  zoo.swamp.push(newGator)
  displaySwamp()
}

function displaySwamp() {

  document.getElementById("swamp").innerHTML = `<div class="col-4">${zoo.swamp}</div>`
}
