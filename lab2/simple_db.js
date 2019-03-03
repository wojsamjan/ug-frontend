var dogs = []

var erna = {
  name: 'Erna',
  breed: 'German Shepherd',
  age: 11,
  snacks: ['beef', 'chicken', 'groats'],
  isMale: true,
}

// function Dog(name, breed, age, snakcs, isMale) {
//   this.name = name;
//   this.breed = breed;
//   this.age = age;
//   this.snakcs = snakcs;
//   this.isMale = isMale;
// }

// function createDog(name, breed, age, snacks, isMale) {
//   dogs.push(new Dog('Erna', 'German Shepherd', 11, ['beef', 'groats'], false));
// }

function createDog(newDog) {
  var found = dogs.some(function(dog) {
    return dog.name === newDog.name;
  });
  if (!found) { dogs.push(newDog); }
  else { (console.log('Can not add a dog that already exists!')); }
}

createDog(erna);
createDog(erna);
console.log(dogs);
