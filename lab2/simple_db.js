var dogs = []

var erna = {
  name: 'Erna',
  breed: 'German Shepherd',
  age: 11,
  snacks: ['chicken', 'groats'],
  isMale: false,
}

var max = {
  name: 'Max',
  breed: 'Bernardine',
  age: 4,
  snacks: ['beef', 'chicken', 'vegetables'],
  isMale: true,
}

var kapsel = {
  name: 'Kapsel',
  breed: 'Rottweiler',
  age: 7,
  snacks: ['beef', 'groats'],
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

function createDog(dog) {
  var found = dogs.some(function(d) {
    return d.name === dog.name;
  });
  if (!found) { dogs.push(dog); }
  else { (console.log(dog.name + ' already exists!')); }
}

function deleteDogById(id) {
  dogs.splice(id, 1);
}

function deleteDogByName(name) {
  dogs = dogs.filter(function(d) { return d.name != name; });
}

function deleteLastDog() {
  return dogs.pop();
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
createDog(max);
createDog(kapsel);
deleteDogByName('Erna');
console.log('====================');
console.log('getAllDogs');
console.log(getAllDogs());

deleteDogById(0);
console.log('====================');
console.log('getAllDogs');
console.log(getAllDogs());

console.log('====================');
console.log('getDogById');
console.log(getDogById(0));
console.log(getDogById(1));

console.log('====================');
console.log('getDogByName');
console.log(getDogByName('Erna3'));
console.log(getDogByName('Kapsel'));

console.log('====================');
console.log('deleteLastDog')
console.log(deleteLastDog());
console.log('====================');
console.log('getAllDogs');
