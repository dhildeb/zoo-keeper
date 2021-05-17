class Alligator {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    teethSize = '',
    age = 0,
  ) {
    if (!name) { throw new error("name required") }
    this.name = name
    this.color = color
    this.gender = gender
    this.weight = weight
    this.teethSize = teethSize
    this.age = age
    this.type = 'mammal'
  }
  eat(food) {
    console.log(`Chew chew all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

export default Alligator
