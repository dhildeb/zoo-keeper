class Hamster {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    height = 0,
    age = 0
  ) {
    if (!name) { throw new error("name required") }
    this.name = name
    this.color = color
    this.gender = gender
    this.weight = weight
    this.height = height
    this.age = age
    this.type = "mammal"
  }
  eat(food) {
    console.log(`Munch munch all the ${food}ies.`)
  }
}

export default Hamster
