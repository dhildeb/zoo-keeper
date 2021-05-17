class Tuna {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    speed = 0,
    age = 0,
  ) {
    if (!name) { throw new error("name required") }
    this.name = name
    this.color = color
    this.gender = gender
    this.weight = weight
    this.speed = speed
    this.age = age
    this.type = 'fish'
  }
  race() {
    return Math.floor(Math.random() * this.constructor.speed)
  }
}

export default Tuna
