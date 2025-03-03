function verify(){
    let playername = document.getElementById('username');
    let feedback = document.getElementById('feedback');
    playername = playername.value.trim(); 
    
    if(playername === ''){
        feedback.classList.add('feedback');
        feedback.textContent = `To be able to play this game kindly enter any username`;
    }
    else{
        is_logged = true;
        localStorage.setItem('playername',playername);
        window.location.href = 'game.html';
    }

}
    
document.addEventListener('DOMContentLoaded',function(){
    if(window.location.pathname.includes('game.html')){
        let playername = window.localStorage.getItem('playername');
        if(!playername){
            window.location.href = 'index.html';
        }
        else{
            playername = playername.charAt(0).toUpperCase() + playername.slice(1);
            const choices = ['rock','paper','scissor'];
            const playerDisplay = document.getElementById('playerChoice');
            const compDisplay = document.getElementById('compChoice');
            const results = document.getElementById('result');
            const playermarks = document.getElementById('playermarks');
            const computermarks = document.getElementById('compmarks');
            let pmarks = 0;
            let cmarks = 0;

            window.playGame = function(choice){
                let announcement = '';
                let compChoice = choices[Math.floor(Math.random() * 3)];
                playerDisplay.textContent = `${playername}'s choice : ${choice}`;
                compDisplay.textContent = `Computer's choice : ${compChoice}`;
        
                if(choice === compChoice){
                    announcement = 'IT IS A TIE';
                }
                else{
                    switch(compChoice){
                        case 'rock' : announcement = (choice==='paper') ? 'YOU WIN!!' : 'YOU LOSE!!' ;
                        break
                        case 'paper' : announcement = (choice==='scissor') ? 'YOU WIN!!' : 'YOU LOSE!!' ;
                        break
                        case 'scissor' : announcement = (choice==='rock') ? 'YOU WIN!!' : 'YOU LOSE!!' ;
                        break 
                    }
                }
                results.classList.remove('greentext','redtext');
                if(announcement === 'YOU WIN!!'){
                    results.classList.add('greentext');
                    pmarks += 1;
                }
                else if(announcement === 'YOU LOSE!!'){
                    results.classList.add('redtext');
                    cmarks += 1;
                }
                results.textContent = `${announcement}`;
                playermarks.textContent = `${playername}'s Marks: ${pmarks}`;
                computermarks.textContent = `Computer's Marks: ${cmarks}`;
        
                
            }            

        }
    }

})

