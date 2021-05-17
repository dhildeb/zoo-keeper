class Newt {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    age = 0,
    previouslyHuman = false
  ) {
    if (!name) { throw new error("name required") }
    this.name = name
    this.color = color
    this.gender = gender
    this.weight = weight
    this.previouslyHuman = previouslyHuman
    this.age = age
    this.type = "reptile"
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

export default Newt
