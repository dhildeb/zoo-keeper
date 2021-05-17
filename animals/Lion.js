class Lion {
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
    this.type = 'reptile'
  }
  eat(food) {
    console.log(`Bite bite all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}

export default Lion
