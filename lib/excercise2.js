
/* ----------------- Favorite Animals ----------------------------------------
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next. http://www.w3schools.com/jsref/jsref_random.asp
 Hint: read the whole Math.random description on that page and try the examples
*/

// TODO: 10 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

exports.chooseAnimal = function() {
  var favoriteAnimals = [ "elephant", "penguin", "eagle", "camel" ],
    nextAnimal;
    if ((Math.random() * 10) < 2) {
      nextAnimal = "elephant";
    }
    else if ((Math.random() * 10) >= 2 && (Math.random() * 10) < 5) {
      nextAnimal = "penguin";
    }
    else if ((Math.random() * 10) >= 5 && (Math.random() * 10) < 8) {
      nextAnimal = "eagle";
    }
    else {
      nextAnimal = "camel";
    }

    return nextAnimal;
};

exports.chooseAnimal();
