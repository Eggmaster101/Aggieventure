/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

var study = 0;
var x = 0;

document.getElementById("studycounter").innerHTML = study;

function studytime() {
  study = study + 1;
  document.getElementById("studycounter").innerHTML = study;
}

function quiz(){
  if (study >= 0 && study <= 10) {
    document.getElementById("quiz").innerHTML = "You failed miserably...";
  } else if (study > 10 && study <= 20) {
    document.getElementById("quiz").innerHTML = "You managed to scrape by with a C.";
  } else if (study > 20) {
  document.getElementById("quiz").innerHTML = "Thanks to your extreme knowledge, you managed to score an A!";
  } else {
    document.getElementById("quiz").innerHTML = "ERROR";
  }
}


document.getElementById("counter").innerHTML = x;

function nightmareFuel() {
  x = x - 1;
  document.getElementById("counter").innerHTML = x
}

function dreamFuel() {
  x = x + 1;
  document.getElementById("counter").innerHTML = x
}

function evansFloor(y) {
  if (y > 1) {
      document.getElementById("quiet").style.visibility = "visible";
      document.getElementById("normal").style.visibility = "hidden";
  }else{ 
      document.getElementById("quiet").style.visibility = "hidden";
      document.getElementById("normal").style.visibility = "visible";
}}

function zachFloor(y) {
  if (y > 1) {
      document.getElementById("stairs").style.visibility = "visible";
      document.getElementById("garden").style.visibility = "hidden";
  }else{ 
      document.getElementById("garden").style.visibility = "visible";
      document.getElementById("stairs").style.visibility = "hidden";
  }}

function clothes() {
      document.getElementById("onlyChoice").style.visibility = "visible";
      dreamFuel();
}

function breakfast(y) {
  if (y > 1) {
      document.getElementById("eat").style.visibility = "visible";
      document.getElementById("skip").style.visibility = "hidden";
      dreamFuel();
  }else{ 
      document.getElementById("eat").style.visibility = "hidden";
      document.getElementById("skip").style.visibility = "visible";
      nightmareFuel();
  }}

function pet(y) {
  if (y > 1) {
      document.getElementById("pet").style.visibility = "visible";
      document.getElementById("noPet").style.visibility = "hidden";
      dreamFuel();
  }else{ 
      document.getElementById("pet").style.visibility = "hidden";
      document.getElementById("noPet").style.visibility = "visible";
      nightmareFuel();
  }}

function goBack() {
      document.getElementById("noPet").style.visibility = "hidden";
}

function food(y) {
  if (y > 1) {
      document.getElementById("food").style.visibility = "visible";
      document.getElementById("bottom").style.visibility = "hidden";
      dreamFuel();
  }else{ 
      document.getElementById("food").style.visibility = "hidden";
      document.getElementById("bottom").style.visibility = "visible";
      dreamFuel();
  }}

function attend(y) {
  if (y > 1) {
      document.getElementById("classTime").style.visibility = "visible";
      document.getElementById("noClass").style.visibility = "hidden";
      dreamFuel();
  }else{ 
      document.getElementById("classTime").style.visibility = "hidden";
      document.getElementById("noClass").style.visibility = "visible";
      nightmareFuel();
  }}

function dream(value1,value2,value3) {
  var dreampict = {};
  if (x < -5) {
    document.getElementById("dream").innerHTML = "You have a horrible dream where Reveille and Lucky the Leprechaun chase you all around campus because they thought you were a 2 percenter. Ssssssssss!";
  } else  if (x === -5){
    dreampict["value1"] = "https://cdn.glitch.com/af4a9983-87bc-42dd-a6c3-c9dd0dd49a4a%2Fwildjoker.png?v=1567930949246";
    dreampict["value2"] = "Mountain Lion with Joker's Mask";
    return dreampict;
    document.getElementById("dream").innerHTML = "You dream about flying around campus, but then a flying wildcat pounces on you and you come crashing to the ground. I bet you didn't see that one coming!";
  } else if (x === -4) {
    document.getElementById("dream").innerHTML = "You have a bad nightmare where you show up to class naked and everyone laughs at you, and then your professor fails you for the whole semester. How could he!";
  } else if (x === -3) {
    document.getElementById("dream").innerHTML = "You have a dream about trying to pet Reveille, but then she bites you and runs away. Oh no! Reveille, please come back!";
  } else if (x === -2) {
    document.getElementById("dream").innerHTML = "You're eating pie in your dream when you realize it's actually not pie at all, but actually a rock in the shape of a pie! What's going on here?!";
  } else if (x ===-1) {
    document.getElementById("dream").innerHTML = "You have a strange dream of being at yell practice when all of a sudden, everyone turns into frogs! Why not try kissing one?";   
  } else if (x === 0) {
    document.getElementById("dream").innerHTML = "You have a dream that you forget about when you wake up. What if the aliens wiped your memory?";
  } else if (x === 1) {
    document.getElementById("dream").innerHTML = "You have a decent dream where you go to a football game and the Aggies won! Yeah saw them horns off!";
  } else if (x === 2) {
    document.getElementById("dream").innerHTML = "You dream that the yell leaders are hanging out with you and call you the coolest person they've ever met. Wow aren't they nice!";
  } else if (x === 3) {
    document.getElementById("dream").innerHTML = "You have a nice dream where you got to pet Reveille and she didn't bite you! You should feel honored!";
  } else if (x === 4) {
    document.getElementById("dream").innerHTML = "You go to class and that professor you didn't like turned into a rabbit and everyone cheered. Is this some kind of magic trick?";
  } else if (x === 5) {
    document.getElementById("dream").innerHTML = "You have a dream that you and the alien you broke out of Area 51 were watching Spongebob. I guess the raid was a success?";
  } else if (x > 5 ) {
    document.getElementById("dream").innerHTML = "You have a dream that Spongebob Squarepants tells you the secret Krabby Patty formula and gives you a lifetime supply of Krabby Pattys! Don't eat too many or you might explode, literally!";
  }
}

var dreamvalue = dream("1",value2,value3);


