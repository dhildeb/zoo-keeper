class Beaver {
  constructor(
    name = 'unknown',
    gender = '',
    color = 'unknown',
    height = 0,
    weight = 0,
    toothLength = 'unknown',
    age = 0
  ) {
    if (!name) { throw new error("name required") }
    this.name = name
    this.gender = gender
    this.color = color
    this.height = height
    this.weight = weight
    this.toothLength = toothLength
    this.age = age
    this.type = "mammal"
  }
  bit(object) {
    console.log(`chomp! beaver bit ${object}`)
  }

}

export default Beaver