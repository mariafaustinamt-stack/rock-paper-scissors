const gamepoints={
    win:0,
    lose:0,
    tie:0
};


function resetscore()
{
    gamepoints.win=0;
    gamepoints.lose=0;
    gamepoints.tie=0;
    document.querySelector('.result').innerHTML='';
    document.querySelector('.moves').innerHTML='';
    updateScoreElement()  
}
function gamemoves(playermove)
{
    let computermove=getcomputermove();
    let resultofgame='';
    if(playermove=='rock')
     {   if(computermove=='rock')
           { gamepoints.tie+=1;
            resultofgame='Tie!!!';}
        else if(computermove=='paper')
           { gamepoints.lose+=1;
            resultofgame='Computer Wins!!!';}
        else
           { gamepoints.win+=1;
            resultofgame='You Win!!!';}
     }
    else if(playermove=='paper')
    {    if(computermove=='rock')
          {  gamepoints.win+=1;
            resultofgame='You Win!!!';}
        else if(computermove=='paper')
           { gamepoints.tie+=1;
            resultofgame='Tie!!!';}
        else
          {  gamepoints.lose+=1;
            resultofgame='Computer Wins!!!';}
}
    else if(playermove=='scissors')
     {   if(computermove==='paper')
          {  gamepoints.win+=1;
            resultofgame='You Win!!!';}
        else if(computermove==='scissors')
         {   gamepoints.tie+=1;
            resultofgame='Tie!!!';}
        else if(computermove==='rock'){
            gamepoints.lose+=1;
            resultofgame='Computer Wins!!!';}
        }
    document.querySelector('.result').innerHTML=resultofgame;
    document.querySelector('.moves').innerHTML=`<p class="inside-moves" >You <img class="inside-image-player"  src="${playermove}.jpg">. Computer <img class="inside-image-computer" src="${computermove}.jpg">. </p>`;
    
    updateScoreElement()   
}
function updateScoreElement() {
  document.querySelector('.scores')
    .innerHTML = `Wins: ${gamepoints.win}, Losses: ${gamepoints.lose}, Ties: ${gamepoints.tie}`;
}

function getcomputermove()
{
    let num=Math.floor(Math.random()*3)+1;
    if(num==1)
        return 'rock';
    else if(num==2)
        return 'paper';
    else
        return 'scissors';
}