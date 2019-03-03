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

// CREATE
function createDog(dog) {
  var found = dogs.some(function(d) {
    return d.name === dog.name;
  });
  if (!found) { dogs.push(dog); }
  else { (console.log(dog.name + ' already exists!')); }
}

// DELETE
function deleteDogById(id) {
  dogs.splice(id, 1);
}

function deleteDogByName(name) {
  dogs = dogs.filter(function(d) { return d.name != name; });
}

function deleteFirstDog() {
  return dogs.shift();
}

function deleteLastDog() {
  return dogs.pop();
}

// READ ALL
function getAllDogs() {
  return dogs;
}

// READ SINGLE
function getDogById(id) {
  if (dogs.length > id) { return dogs[id]; }
  else { return 'Dog with index: ' + id + ' does not exist!'; }
}

function getDogByName(name) {
  var foundDog = dogs.filter(function(d) { return d.name === name; });
  if (foundDog.length > 0) { return foundDog[0]; }
  else { return 'Dog with name: ' + name + ' does not exist!'; } 
}

function getFirstDog() {
  if ( dogs.length > 0 ) { return dogs[0]; }
}

function getLastDog() {
  if ( dogs.length > 0 ) { return dogs[dogs.length-1]; }
}



// function updateDog()

createDog(erna);
createDog(erna);
createDog(max);
createDog(kapsel);
console.log('====================');
console.log(getFirstDog());
console.log(getLastDog());

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
