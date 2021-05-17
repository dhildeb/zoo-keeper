class Caterpillar {
  constructor(
    name = '',
    color = 'unknown',
    length = 0,
    gender = 'unknown',
    age = 0
  ) {
    if (!name) { throw new error("name required") }
    this.name = name
    this.color = color
    this.length = length
    this.gender = gender
    this.age = age
    this.type = "insect"
  }
  crawl() {
    let distance = Math.floor(Math.random() * this.constructor.length)
    console.log(this.constructor.length, " crawled ", distance)
  }
}

export default Caterpillar