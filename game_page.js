player_1name = localStorage.getItem("player_1name");
player_2name = localStorage.getItem("player_2name");

player_1score = 0;
player_2score = 0;

document.getElementById("player_1name").innerHTML = player_1name + " : ";
document.getElementById("player_2name").innerHTML = player_2name + " : ";

document.getElementById("player_1score").innerHTML = player_1score;
document.getElementById("player_2score").innerHTML = player_2score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player_1name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_2name;

function send()
{
word = document.getElementById("word").value;

word = word.toLowerCase();

Charat1 = word.charAt(1);

length_by_2 = Math.floor(word.length/2);
Charat2 = word.charAt(length_by_2);

length_minus_1 = word.length-1 ;
Charat3 = word.charAt(length_minus_1);

remove1 = word.replace(Charat1, "_");
remove2 = remove1.replace(Charat2, "_");
remove3 = remove2.replace(Charat3, "_");

question = "<h4 id = 'word_display'> Q. " + remove3 + "</h4>";

input = "<br> answer : <input type = 'text' id = 'input_check_box'>";

cbutton = "<br><br> <button class= 'btn btn-info' onclick = 'check()'> Check </button>";

row = question + input + cbutton ;

document.getElementById("output").innerHTML = row ;

document.getElementById("word").value = "" ;

}

Question_turn = player_1name ;

Answer_turn = player_2name ;

function check()
{
get_answer = document.getElementById("input_check_box").value  ;

Answer = get_answer.toLowerCase() ;

if(Answer == word)

{
if(Answer_turn == player_1name)
{
player_1score = player_1score + 1 ;
document.getElementById("player_1score").innerHTML = player_1score ;
}

else

{
player_2score = player_2score + 1 ;
document.getElementById("player_2score").innerHTML = player_2score ;
}

}

if( Question_turn == player_1name)
{
Question_turn = player_2name ;  
document.getElementById("player_question").innerHTML = "Question  Turn -" + player_2name ;
}

else

{
Question_turn = player_1name ;  
document.getElementById("player_question").innerHTML = "Question  Turn -" + player_1name ;
}

if( Answer_turn == player_1name)
{
Answer_turn = player_2name ;  
document.getElementById("player_answer").innerHTML = "Answer  Turn -" + player_2name ;
}

else

{
Answer_turn = player_1name ;  
document.getElementById("player_answer").innerHTML = "Answer  Turn -" + player_1name ;
 }
 document.getElementById("output").innerHTML= "" ;  
}