class Dragon {
  constructor(name, rider, color, hungry = true){
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = hungry
    this.counter = 0
  }

  eat() {
    this.counter++ 
    if(this.counter === 3) {
      this.hungry = false
      this.counter = 0
    }
  }
}



module.exports = Dragon;
