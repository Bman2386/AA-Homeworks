
let titleize = function(names, callback) {
    let array = names.map(name => 'Mx. ' + name + ' Jingleheimer Schmidt');
    callback(array);
};



// titleize(["Mary", "Brian", "Leo"], (names) => {
//     names.forEach(name => console.log(name));
//   });
// Mx. Mary Jingleheimer Schmidt
// Mx. Brian Jingleheimer Schmidt
// Mx. Leo Jingleheimer Schmidt
// undefined

function Elephant(name, height, tricksArray) {
    this.name = name;
    this.height = height;
    this.tricksArray = tricksArray;
}

Elephant.prototype.trumpet = function() {
   console.log(this.name + " the elephant goes 'phrRRRRRRRRRRR!!!!!!!'")
};

Elephant.prototype.grow = function() {
    this.height += 12
};

Elephant.prototype.addTrick = function(trick) {
    this.tricksArray.push(trick)
};

Elephant.prototype.play = function() {
    let randomIndex = Math.floor(Math.random() * this.tricksArray.length);
    console.log(this.name + ' ' + this.tricksArray[randomIndex])
};

Elephant.prototype.paradeHelper = function() {
    console.log(this.name + " is stomping by");
}
// let Dumbo = new Elephant ('Dumbo', 14350, ['fly high above', 'does your calc hw', 'makes dinner'])
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// ellie.paradeHelper()
herd.forEach(el => el.paradeHelper());
// herd.forEach(el => el.grow());
// herd.forEach(el => console.log(el.height));

