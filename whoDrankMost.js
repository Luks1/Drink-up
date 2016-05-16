module.exports = function(day,drink,min){

  var max = min;
  
  var name = {};

  day.forEach(function(person){

    if(person[drink] > max){

      max = person[drink];

  name = {
             Name:person.person
      }
    }
  });
  console.log(name.Name);
  return name.Name;
};
