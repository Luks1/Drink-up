module.exports = function(days,drinks,person){

  var total = 0;

  days.forEach(function(user){

      total = total+user[drinks]*5;

  })
  console.log(total);

  return total;
}
