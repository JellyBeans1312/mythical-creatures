class Hobbit {
  constructor(name, age = 0, adult = false, old = false) {
    this.name = name
    this.disposition = 'homebody'
    this.age = age
    this.adult = adult  
    this.isShort = true 
    this.old = old
    this.hasRing = this.name === 'Frodo' ? true : false
  }
 
  celebrateBirthday() {
    this.age++
    this.age > 32 ? this.adult = true : this.adult
    this.age > 100 ? this.old = true : this.old
  }
}


























































// class Hobbit {
//   constructor (name) {
//     this.name = name;
//     this.disposition = 'homebody';
//     this.age = 0;
//     this.adult = false;
//     this.isShort = true;
//     this.old = false;
//     this.hasRing = false;
//     if(this.name === 'Frodo'){
//       this.hasRing = true;
//     } 
//   }
//   celebrateBirthday (){
//     this.age++;
//     if(this.age >= 33){
//       this.adult = true;
//     }
//     if(this.age >= 101){
//       this.old = true;
//     }
//   }

// }


 









module.exports = Hobbit;