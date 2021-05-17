class Ferret {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    age = 0
  ) {
    if (!name) { throw new error("name required") }
    this.name = name
    this.color = color
    this.gender = gender
    this.weight = weight
    this.age = age
    this.type = "mammal"
  }
  eat(food) {
    console.log(`Munch munch all the ${food}ies.`)
  }
}

export default Ferret
