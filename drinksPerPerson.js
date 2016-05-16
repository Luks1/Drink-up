module.exports = function(day, drink, person){

  var drinks = 1000;

  day.forEach(function(user){

    if(user.person === person){

      drinks = user[drink];
    }
  });
  console.log(drinks);
  return drinks;
}
