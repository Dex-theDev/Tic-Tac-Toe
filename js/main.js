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
const button = document.querySelector('.reset-button')
button.addEventListener('click', function(){
    game.reset()
})


class Game {
    constructor(player1,player2){
        //this whatever whatever
        this.player1 = player1
        this.player2 =  player2
        this.text = ''
        this.counter = 0 //private variable that keeps track of what player's turn it is
        this.list = Array.from(box)
        this.isWinner = ''
        
    }
    display(event){
        if(event.target.innerHTML == "X" || event.target.innerHTML == "O"){
            return
        } // if the box already has X or O in it, you cannot override the box's value with another click
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
            this.isWinner = this.player1
            
        } else if(this.list[0].innerHTML == "O" && this.list[1].innerHTML == "O" && this.list[2].innerHTML == "O"){
            console.log('player 2 wins')
            this.isWinner = this.player2
        } else if(this.list[0].innerHTML == "X" && this.list[4].innerHTML == "X" && this.list[8].innerHTML == "X"){
            console.log('player 1 wins')
            this.isWinner = this.player1
        } else if(this.list[0].innerHTML == "O" && this.list[4].innerHTML == "O" && this.list[8].innerHTML == "O"){
            console.log('player 2 wins')
            this.isWinner = this.player2
        } else if(this.list[0].innerHTML == "X" && this.list[3].innerHTML == "X" && this.list[6].innerHTML == "X"){
            console.log('player 1 wins')
            this.isWinner = this.player1
        } else if(this.list[0].innerHTML == "O" && this.list[3].innerHTML == "O" && this.list[6].innerHTML == "O"){
            console.log('player 2 wins')
            this.isWinner = this.player2
        } else if(this.list[1].innerHTML == "X" && this.list[4].innerHTML == "X" && this.list[7].innerHTML == "X"){
            console.log('player 1 wins')
            this.isWinner = this.player1
        } else if(this.list[1].innerHTML == "O" && this.list[4].innerHTML == "O" && this.list[7].innerHTML == "O"){
            console.log('player 2 wins')
            this.isWinner = this.player2
        } else if(this.list[2].innerHTML == "X" && this.list[5].innerHTML == "X" && this.list[8].innerHTML == "X"){
            console.log('player 1 wins')
            this.isWinner = this.player1
        } else if(this.list[2].innerHTML == "O" && this.list[5].innerHTML == "O" && this.list[8].innerHTML == "O"){
            console.log('player 2 wins')
            this.isWinner = this.player2
        } else if(this.list[2].innerHTML == "X" && this.list[4].innerHTML == "X" && this.list[6].innerHTML == "X"){
            console.log('player 1 wins')
            this.isWinner = this.player1
        } else if(this.list[2].innerHTML == "O" && this.list[4].innerHTML == "O" && this.list[6].innerHTML == "O"){
            console.log('player 2 wins')
            this.isWinner = this.player2
        } else if(this.list[3].innerHTML == "X" && this.list[4].innerHTML == "X" && this.list[5].innerHTML == "X"){
            console.log('player 1 wins')
            this.isWinner = this.player1
        } else if(this.list[3].innerHTML == "O" && this.list[4].innerHTML == "O" && this.list[5].innerHTML == "O"){
            console.log('player 2 wins')
            this.isWinner = this.player2
        } else if(this.list[6].innerHTML == "X" && this.list[7].innerHTML == "X" && this.list[8].innerHTML == "X"){
            console.log('player 1 wins')
            this.isWinner = this.player1
        } else if(this.list[6].innerHTML == "O" && this.list[7].innerHTML == "O" && this.list[8].innerHTML == "O"){
            console.log('player 2 wins')
            this.isWinner = this.player2 
        }
        this.displayWinner()
        return
       
       
    }
    displayWinner(){
        //a modal will pop up and declare winner, it will include a function call that resets the game
        if(!this.isWinner){
            return
        }
        const modal = document.querySelector('.modal')
        document.querySelector('.modal-text').textContent = `${this.isWinner} Wins!`
        modal.style.display = 'block'
        
    }
    reset(){
        document.querySelector('.modal').style.display = 'none'
        document.querySelectorAll('.box').innerHTML = ''
    }
}
let game = new Game('player 1','player 2')
