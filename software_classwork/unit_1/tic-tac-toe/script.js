const squares = document.querySelectorAll('.square');
squares.forEach(element => element.textContext = '');

console.log(squares)

//X Starts Button
function xStarts() {
    player = 'X'
    clearBoard()
}
//O Starts Button
function oStarts() {
    player = 'O'
    clearBoard()
}

//Winner
function winner(){
    let winCondition = [
        [squares[0], squares[1], squares[2]],
        [squares[0], squares[4], squares[7]],
        [squares[0], squares[5], squares[9]],
        [squares[4], squares[5], squares[6]],
        [squares[2], squares[5], squares[8]],
        [squares[7], squares[8], squares[9]],
        [squares[3], squares[6], squares[9]],
        [squares[3], squares[5], squares[7]]
    ]
    for (let i = 0; i < winCondition.length; i++){
        if (winCondition[i][0].textContext === 'X' && winCondition[i][1].textContext === 'X' && winCondition[i][2].textContext === 'X' ){
        document.querySelector('#scoreboard').textContent = 'X winner chicken dinner'
        } else if (winCondition[i][0].textContext === 'O' && winCondition[i][1].textContext === 'O' && winCondition[i][2].textContext === 'O' ){
            document.querySelector('#scoreboard').textContent = 'O winner chicken dinner'
        }
    }
}

//Clear board
function clearBoard () {
    squares.forEach(element => {
        element.textContent = '',
        element.classList.remove('blue')
        element.classList.remove('red')
    })
}

squares.forEach(element => {
    element.addEventListener('click', function(){
        if (player !== 'X' && player !== 'O'){
            alert("Select starting player!!")
            return
        }else{
            if (element.textContent != ''){
                alert('Pick another square')
                winner();
            } else {
                element.textContent = player;
                winner()
                element.classList.add('blue')
                    if(player == 'X'){
                        player = 'O'
                        element.classList.add('red')
                    } else {              
                        player = 'X'; 
                    }
                }
            }
        })
    });

