var dogs = []

var erna = {
  name: 'Erna',
  breed: 'German Shepherd',
  age: 11,
  snacks: ['beef', 'chicken', 'groats'],
  isMale: true,
}

var erna2 = {
  name: 'Erna2',
  breed: 'German Shepherd',
  age: 11,
  snacks: ['beef', 'chicken', 'groats'],
  isMale: true,
}

var erna3 = {
  name: 'Erna3',
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
  else { (console.log(newDog.name + ' already exists!')); }
}

function deleteDog(dogName) {
  dogs = dogs.filter(function(d) { return d.name != dogName; });
}

function updateDog()

createDog(erna);
createDog(erna);
createDog(erna2);
createDog(erna3);
deleteDog('Erna');
console.log(dogs);
