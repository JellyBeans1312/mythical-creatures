class Pirate {
  constructor(name, job ='Scallywag', cursed = false, booty = 0){
   this.name = name
   this.job = job
   this.counter = 0
   this.cursed = cursed
   this.booty = booty
  }

  commitHeinousAct() {
    this.counter++ 
    this.counter === 3 ? this.cursed = true : this.cursed
    this.cursed ? this.counter = 0 : this.counter
  }

  robShip() {
    this.booty += 100
    return 'YAARRR!'
  }
}





module.exports = Pirate;