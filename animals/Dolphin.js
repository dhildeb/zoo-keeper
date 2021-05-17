class Dolphin {
  constructor(
    name = '',
    gender = 'unknown',
    weight = 0,
    length = 0,
    speed = 0,
    age = 0
  ) {
    if (!name) { throw new Error("name required") }
    this.name = name
    this.gender = gender
    this.weight = weight
    this.length = length
    this.speed = speed
    this.age = age
    this.type = "fish"
  }

  trick() {
    let trick = ["front flip", "back flip", "balancing act with a beach ball", "impressive mimic noise"]

    console.log(this.constructor.name, " performs a ", trick.Math.floor(Math.random() * trick.length))
  }
}

export default Dolphin