var dogs = []

var erna = {
  name: 'Erna',
  breed: 'German Shepherd',
  age: 11,
  snacks: ['beef', 'chicken', 'groats'],
  isMale: false,
}

var erna2 = {
  name: 'Erna2',
  breed: 'German Shepherd',
  age: 11,
  snacks: ['beef', 'chicken', 'groats'],
  isMale: false,
}

var erna3 = {
  name: 'Erna3',
  breed: 'German Shepherd',
  age: 11,
  snacks: ['beef', 'chicken', 'groats'],
  isMale: false,
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

function createDog(dog) {
  var found = dogs.some(function(d) {
    return d.name === dog.name;
  });
  if (!found) { dogs.push(dog); }
  else { (console.log(dog.name + ' already exists!')); }
}

function deleteDogByName(name) {
  dogs = dogs.filter(function(d) { return d.name != name; });
}

function deleteDogById(id) {
  dogs.splice(id, 1);
}

function getAllDogs() {
  return dogs;
}

function getDogByName(name) {
  var foundDog = dogs.filter(function(d) { return d.name === name; });
  if (foundDog.length > 0) { return foundDog[0]; }
  else { return 'Dog with name: ' + name + ' does not exist!'; } 
}

function getDogById(id) {
  if (dogs.length > id) { return dogs[id]; }
  else { return 'Dog with index: ' + id + ' does not exist!'; }
}

// function updateDog()

createDog(erna);
createDog(erna);
createDog(erna2);
createDog(erna3);
deleteDogByName('Erna');
console.log('====================');
console.log(getAllDogs());

deleteDogById(0);
console.log('====================');
console.log(getAllDogs());

console.log('====================');
console.log(getDogById(0));
console.log(getDogById(1));

console.log('====================');
console.log('====================');
console.log(getDogByName('Erna3'));
console.log(getDogByName('Kapsel'));