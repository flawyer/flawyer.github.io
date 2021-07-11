var ageinyear;

function age(){
    var agein = prompt('what is your birthyear');
      ageinyear = (2021-agein);
    var ans = document.createTextNode('Your age in year is '+ '  ' + ageinyear);
    var a =document.createElement('a');
     a.setAttribute('id','ageinyear');
    a.appendChild(ans);
    document.getElementById('real_result').appendChild(a);
    

    }
    
    function agei(){
        var ageindays = ageinyear*365;
         var ansi = document.createTextNode('Your age in days are '+ ' '+ageindays);
         var a = document.createElement('a');
         a.setAttribute('id','ageindays');
         a.appendChild(ansi);
         document.getElementById('real').appendChild(a);
    }

     function reset(){
        document.getElementById('ageinyear').remove();
        document.getElementById('ageindays').remove();
        }
         
    function generate(){
      var image = document.createElement('img');

      var div = document.getElementById('aj');
      image.src  ="https://source.unsplash.com/90x90/?animal,cat";
      div.appendChild(image); 
    }
    
    function rpsmain(yourChoice){
      console.log(yourChoice);
      var humanchoice,botchoice;
    humanchoice = yourChoice.id;
      botchoice = numbertochoice(randtorpsint());
      console.log('computer choice :',botchoice);
       results = decidewinner(humanchoice,botchoice);
         console.log(results);
         message = finalmessage(results);
         console.log(message);
         rpsfrontend(yourChoice.id,botchoice,message);
    
    }

    function randtorpsint(){
      return Math.floor(Math.random()*3);
    }

    function numbertochoice(number){
      return['rock','paper','scissors'][number];
    }
    function decidewinner(yourChoice, computerChoice){
      var rpsDatabase= {
        'rock': {'scissors':1 ,'rock':0.5 ,'paper':0},
        'paper': {'rock':1 ,'paper':0.5 ,'scissors':0},
        'scissors': {'paper':1 ,'scissors':0.5 ,'rock':0}
      };
      var yourScore = rpsDatabase[yourChoice][ computerChoice];
      var computerScore =  rpsDatabase[computerChoice][yourChoice];
       return[yourScore,computerScore];
    }
  function finalmessage([yourScore,computerScore]){
      if (yourScore === 0){
        return{'mesage': 'You lose','color':'red'};}
      else if (yourScore === 0.5){
        return{'mesage': 'You tied','color':'yellow'};
      }
      else{
         return{'mesage': 'You Won','color':'green'};
      }
      
    }
    function rpsfrontend(humanimagechoice,botimagechoice,finalmessage){
      var imagedatabase ={
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' :document.getElementById('scissors').src
      }
      document.getElementById('rock').remove();
      document.getElementById('paper').remove();
      document.getElementById('scissors').remove();
      
      var humandiv = document.createElement('div');
      var botdiv = document.createElement('div');
      var messagediv = document.createElement('div');

      humandiv.innerHTML ="<img src='" + imagedatabase[humanimagechoice] + "'height= 90px width =90px>"
      messagediv.innerHTML ="<h1 style=color:"+finalmessage['color'] +"; font-size =60px; padding =30px;'>" +finalmessage['mesage'] +"</h1>"
      botdiv.innerHTML ="<img src='" + imagedatabase[botimagechoice] + "'height= 90px width =90px>"
      
      document.getElementById('container').appendChild(humandiv);
      document.getElementById('container').appendChild(messagediv);
       document.getElementById('container').appendChild(botdiv);
}


