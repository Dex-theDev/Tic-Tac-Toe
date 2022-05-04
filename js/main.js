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
    constructor(player1,player2){
        //this whatever whatever
        this.player1 = player1
        this.player2 =  player2
        this.text = ''
        this.counter = 0 //private variable that keeps track of what player's turn it is
        this.list = Array.from(box)
    }
    display(event){
        if(event.target.innerHTML == "X" || event.target.innerHTML == "O"){
            return
        }
      this.counter % 2 == 0 ? this.text = 'X' : this.text = 'O'
      event.target.innerHTML = this.text
      event.value = this.text
      box.value = this.text
      this.counter++
        
      console.log(this.counter)
      console.log(event.target.innerHTML)
      this.determineWinner()
    }
    determineWinner(){
        if (this.list[0].innerHTML == "X" && this.list[1].innerHTML == "X" && this.list[2].innerHTML == "X"){
            console.log('player 1 wins')
        } else if {
            return
        }
       
          
       
       
    }
    reset(){

    }
}
let game = new Game