
// random no shown at the start of the game!

function randomNumber () {
    return Math.floor(Math.random() * 100) + 20;
  }

//var randomNum = Math.floor(Math.random() * 100) + 20;
var userPoint = 0;
var wins = 0;
var loses = 0;

function myFunction(){
    userPoint = 0
    
    $('#total-score').text(userPoint)
    $('#rm').text(randomNumber())
    console.log(randomNumber())

}
 
 
$(function () {
    //call the random function we define below
    $('#rm').text(randomNumber())
  
  //onclick give random number to the image
  $(document).on('click', 'img', function(){
      userPoint += parseInt(Math.floor(Math.random() * 10) + 2);
      console.log(userPoint)
      //display your total score
      $('#total-score').text(userPoint)

      if(parseInt($('#rm').text()) === userPoint){
          wins++
          $('#wins').text(wins)
          myFunction()
      } else if (userPoint > parseInt($('#rm').text())) {
          loses++
          $('#loses').text(loses)
          myFunction()
      }
  })

  

})

