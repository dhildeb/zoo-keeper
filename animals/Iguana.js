class Iguana {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    age = 0
  ) {
    if (!name) { throw new error("name required") }
    this.name = name
    this.color = color
    this.gender = gender
    this.weight = weight
    this.tailLengthInch = tailLengthInch
    this.age = age
    this.type = "reptile"
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
}

export default Iguana
