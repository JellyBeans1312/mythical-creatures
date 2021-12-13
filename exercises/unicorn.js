class Unicorn {
  constructor(name, color = 'white') {
    this.name = name
    this.color = color
  }

  isWhite(color) {
    if(color != 'white') {
      return false
    }
    return true
  }

  say(text) {
    return '**;* ' + text + ' *;**'
  }
}

module.exports = Unicorn;