
module.exports = function(day,drinks){

  var total = 0;

  day.forEach(function(person){

      total = total+person[drinks];

  })
  console.log(total);

  return total;
}
