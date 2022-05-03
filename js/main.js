// Simple Tic-tac-toe game, user is both player 1 and player 2
// User will play game until no squares are left
// interface will determine winner
// User will be able to reset the game and start over
const box = document.querySelectorAll('.box')
box.forEach(box => {
    box.addEventListener('click', function(){
        game.display(event)
    })
})




class Game {
    constructor(text,/*idk what goes in this*/){
        //this whatever whatever
        this.text = text
     this.counter = 0
    }
    display(event){
      //private variable that keeps track of what player's turn it is
      this.counter % 2 == 0 ? this.text = 'X' : this.text = 'O'
      box.innerHTML += this.text
     event.target.innerHTML = this.text
     event.value = this.text
     this.counter++
      console.log(this.counter)
      console.log(event.value)
    }
    determineWinner(){

    }
    reset(){

    }
}
let game = new Game