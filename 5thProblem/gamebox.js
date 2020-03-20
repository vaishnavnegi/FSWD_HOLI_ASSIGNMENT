var r_no =  Math.floor(Math.random()*101);
n=0;
function win()
{
    document.getElementById('status').innerHTML = "Congratulations !!! You guessed it right.";
    document.getElementById('status').style.backgroundColor= "green";
    newgame();
}
function wrong()
{
    document.getElementById('status').innerHTML = "Wrong Guess. Try again.";
    document.getElementById('status').style.backgroundColor= "red";
}
function gameover()
{
    document.getElementById('status').innerHTML = "GAME OVER. START A NEW GAME.";
    document.getElementById('status').style.backgroundColor= "red";
}
function newgame()
{
document.getElementById('submit').disabled = true;
document.getElementById('newg').disabled = false;
}
function exit()
{
	location.reload();
}

function checkguess(){
    document.getElementById('newg').disabled = true;
    guess = document.getElementById('guess').value;
    n++;
	if(n == 10 || guess == r_no)
	{
        if(guess == r_no)
			{
                win();
                newgame();
			}
		else
			{
                gameover();
				newgame();
			}
    }
    document.getElementById('pguessarr').innerHTML += guess +" ";
    if(guess > r_no)
    {
        document.getElementById('guide').innerHTML="Guess was higher than the number.";
    }
    else
    {
        document.getElementById('guide').innerHTML="Guess was lower than the number.";
    }
}