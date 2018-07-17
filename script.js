'use strict';
document.addEventListener("DOMContentLoaded", function(){
  var score = 0;
  var move = 0;
  var free = 0;
  var leftblock;
  var rightblock;
  var upblock;
  var downblock;
  var scoreDom = document.getElementById("score");
  function RandomNumber(){
    var random = Math.floor(Math.random() *16 + 1);
    var randomundeux = Math.floor(Math.random() * 2)+1;
    if($("#" + random).text() != ""){
      RandomNumber();
    }else{
      $("#"+random).html(randomundeux *2);
    }

    
  }
  RandomNumber();
  RandomNumber();

  document.onkeydown = function (event) {

    if (event.keyCode == 38 ) {
      moveUp();
      calcUp();
      if(move > 0){
        RandomNumber();
        upblock = 1;
      }
      else if (move == 0){
        upblock = 0;
      }
      color();
      move = 0;
    } else if (event.keyCode == 39 ) {
      moveRight();
      calcRight();
      if(move>0){
        RandomNumber();
        rightblock = 1;
      }
      else if (move == 0){
        rightblock = 0;
      }
      color();
      move = 0;
    } else if (event.keyCode == 40 ) {
      moveDown();
      calcDown();
      if(move > 0){
        RandomNumber();
        downblock = 1;
      }
      else if (move == 0){
        downblock = 0;
      }
      color();
      move = 0;
    } else if (event.keyCode == 37 ) {
      moveLeft();
      calcLeft();
      if( move > 0 ){
        RandomNumber();
        leftblock = 1;
      }
      else if (move == 0){
        leftblock = 0;
      }
      color();
      move = 0;
    }
    scoreDom.innerHTML =  score;
    document.title = "2048 - "+score;
    end();
  }
  function moveUp(){
    for (var i = 5; i < 17; i++) {
      if($('#'+i).text() != ""){
        if($("#"+(i-4)).text() ==""){
          var textCase = $('#'+i).text();
          var textCasePrec = $('#'+(i-4)).text();
          $('#'+(i-4)).text(textCase);
          $('#'+i).text("");
          move = 1
          if($('#'+(i-8)).text() == "" || $('#'+(i-12)).text() == ""){
            moveUp();
          }
        }
      }
    }
  }

  function calcUp(){
    for(var j = 5; j<17; j++){
      if($('#'+j).text() != "" ){
        if($('#'+(j-4)).text() != ""){
          if($('#'+j).text() == $('#'+(j - 4)).text()){
            score = score + ($('#'+j).text())*2;
            $('#'+(j-4)).text(($('#'+j).text())*2);
            $('#'+j).text("");
            move = 1;
            moveUp();

          }
        }
      }
    }
  }

  function moveDown(){
    for (var i = 1; i < 13; i++) {
      if($('#'+i).text() != ""){
        if($("#"+(i+4)).text() ==""){
          var textCase = $('#'+i).text()
          var textCasePrec = $('#'+(i+4)).text();
          $('#'+(i+4)).text(textCase);
          $('#'+i).text("");
          move = 1
          if($('#'+(i+8)).text() == "" || $('#'+(i+12)).text() == ""){
            moveDown();
          }          
        }
      }
    }
  }
  function calcDown(){
    for(var j = 1; j<13; j++){
      if($('#'+j).text() != "" ){
        if($('#'+(j+4)).text() != ""){
          if($('#'+j).text() == $('#'+(j + 4)).text()){
            score = score + ($('#'+j).text())*2;
            $('#'+(j+4)).text(($('#'+j).text())*2);
            $('#'+j).text("");
            move = 1;
            moveDown();
          }
        }
      }
    }
  }

  function moveRight(){

    for (var i = 1; i < 4; i++) {
      if( i != 5 || i != 9 || i != 13){
        if($('#'+i).text() != ""){
          if($("#"+(i+1)).text() ==""){
            var textCase = $('#'+i).text();
            var textCasePrec = $('#'+(i+1)).text();
            $('#'+(i+1)).text(textCase);
            $('#'+i).text("");
            move = 1
            moveRight();
          }
        }
      }
    }
    

    for (var i = 5; i < 8; i++) {
      if(i != 9 || i != 13){
        if($('#'+i).text() != ""){
          if($("#"+(i+1)).text() ==""){
            var textCase = $('#'+i).text()
            var textCasePrec = $('#'+(i+1)).text();
            $('#'+(i+1)).text(textCase);
            $('#'+i).text("");
            move = 1
            moveRight();
          }
        }
      }
    }


    for (var i = 9; i < 12; i++) {
      if(i != 13){
        if($('#'+i).text() != ""){
          if($("#"+(i+1)).text() ==""){
            var textCase = $('#'+i).text()
            var textCasePrec = $('#'+(i+1)).text();
            $('#'+(i+1)).text(textCase);
            $('#'+i).text("");
            move = 1
            moveRight();
          }
        }
      }
    }




    for (var i = 13; i < 16; i++) {

      if($('#'+i).text() != ""){
        if($("#"+(i+1)).text() ==""){
          var textCase = $('#'+i).text()
          var textCasePrec = $('#'+(i+1)).text();
          $('#'+(i+1)).text(textCase);
          $('#'+i).text("");
          move = 1
          moveRight();
        }
      }
    }   


  }

  function calcRight(){
    for(var j = 1; j<5; j++){
      var y = j-1;
      if(j == 1){
        var x = 0;
      }else{
        var x = (4 * y) ;
      }
      for(var i = 3; i>0; i --){
        if($('#'+(x+i)).text() != "" ){
          if($('#'+((x+i)+1)).text() != ""){
            if($('#'+(x+i)).text() == $('#'+((x+i) +1 )).text()){
              score = score + ($('#'+(x+i)).text())*2;
              $('#'+((x+i)+1)).text(($('#'+(x+i)).text())*2);
              $('#'+(x+i)).text("");
              move = 1;
              moveRight();
              
            }
          }
        }
      }
    }
  }


  function moveLeft(){

    for (var i = 4; i > 1 ; i--) {
      if( i != 1 || i != 5 || i != 9){
        if($('#'+i).text() != ""){
          if($("#"+(i-1)).text() ==""){
            var textCase = $('#'+i).text()
            var textCasePrec = $('#'+(i-1)).text();
            $('#'+(i-1)).text(textCase);
            $('#'+i).text("");
            move = 1
            moveLeft();
          }
        }
      }
    }

    for (var i = 8; i > 5; i--) {
      if(i !=5 || i != 9){
        if($('#'+i).text() != ""){
          if($("#"+(i-1)).text() ==""){
            var textCase = $('#'+i).text()
            var textCasePrec = $('#'+(i-1)).text();
            $('#'+(i-1)).text(textCase);
            $('#'+i).text("");
            move = 1
            moveLeft();
          }
        }
      }
    }


    for (var i = 12; i > 9; i--) {
      if(i != 9){
        if($('#'+i).text() != ""){
          if($("#"+(i-1)).text() ==""){
            var textCase = $('#'+i).text()
            var textCasePrec = $('#'+(i-1)).text();
            $('#'+(i-1)).text(textCase);
            $('#'+i).text("");
            move = 1
            moveLeft();
          }
        }
      }
    }


    for (var i = 16; i > 13; i--) {

      if($('#'+i).text() != ""){
        if($("#"+(i-1)).text() ==""){
          var textCase = $('#'+i).text()
          var textCasePrec = $('#'+(i-1)).text();
          $('#'+(i-1)).text(textCase);
          $('#'+i).text("");
          move = 1
          moveLeft();
        }
      }
    }   

  }

  function calcLeft(){
    for(var j = 1; j<5; j++){
      var y = j-1;
      if(j == 1){
        var x = 0;
      }else{
        var x = (4 * y) ;
      }
      for(var i = 2; i<5; i ++){
        if($('#'+(x+i)).text() != "" ){
          if($('#'+((x+i)-1)).text() != ""){
            if($('#'+(x+i)).text() == $('#'+((x+i) -1 )).text()){
              score = score + ($('#'+(x+i)).text())*2;
              $('#'+((x+i)-1)).text(($('#'+(x+i)).text())*2);
              $('#'+(x+i)).text("");
              move = 1;
              moveLeft();
              
            }
          }
        }
      }
    }
  }

  function color(){
    for( var i = 1 ; i<17 ; i++){
      var coul = $('#'+i).text();
      $("#"+i).attr('class', 'number'+coul);
    }
  }
  color();




  function end(){
    var objectif = 0;
    for(var fin = 1; fin < 17; fin++){
      if($('#'+fin).text() >=2048){
        objectif += 1;
      }else{
        objectif += 0;
      }
    }
    
    if(upblock == 0 && downblock == 0 && leftblock == 0 && rightblock == 0){
      $('#share').html("<p class='scoretext'>Vous avez fait un score de "+score+" points</p><p class='scoretext'>Partager mon score : </p> <a target='_blank' href='https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text=2048%20-%20Mon%20score%20est%20de%20"+score+"&tw_p=tweetbutton&url=http%3A%2F%2Fintra.epitech.eu'>Twitter</a>");
      if(objectif >= 1){
        $('#toploose').html("<p>Fin de la partie !</p><p>Bravo ! Vous avez atteint 2048</p><a id='restart'>NewGame</a>");
      }else if (objectif == 0){
        $('#toploose').html("<p>Fin de la partie !</p><p>Dommage .. Vous n'avez pas atteint 2048 ..</p><a id='restart'>NewGame</a>");
      }
      
    
    $('#restart').click(function(){
      location.reload();
    });
  }
}

})
