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
zoo.pen.push(new Beaver("brox"))
zoo.tank.push(new Dolphin("doug"))
zoo.miniGlassBox.push(new Caterpillar("Cilla"))
zoo.pasture.push(new Elephant("efret"))
zoo.pen.push(new Ferret("frank"))
zoo.pasture.push(new Gorilla("George"))
zoo.pen.push(new Hamster("Henrey"))
zoo.pasture.push(new Iguana("Izack"))
zoo.cage.push(new Jaybird("Jared"))
zoo.pasture.push(new Kangaroo("Kevin"))
zoo.pasture.push(new Lion("Moofasa"))
zoo.pasture.push(new Moose("mack"))
zoo.swamp.push(new Newt("human"))
zoo.cage.push(new Owl("owen"))
zoo.cage.push(new Penguin("peter"))
zoo.cage.push(new Quail("quincy"))
zoo.pen.push(new Rooster("roger"))
zoo.swamp.push(new Salamander("sam"))
zoo.tank.push(new Tuna("tim"))
zoo.tank.push(new Urchin("um"))
zoo.cage.push(new Vulture("victor"))
zoo.tank.push(new Whale("wyet"))
zoo.tank.push(new Xray("xfish"))
zoo.pasture.push(new Yak("yuck"))
zoo.pasture.push(new Zebra("zen"))
//#endregion

function addAlligator() {

  let newGator = new Alligator(prompt("name"), prompt("color"), prompt("gender"), prompt("weight"), prompt("tail length (in)"), prompt("teeth size"), prompt("age"))
  zoo.swamp.push(newGator)
  displaySwamp()
}

function displaySwamp() {

  document.getElementById("swamp").innerHTML = `<div class="col-4">${zoo.swamp}</div>`
}
