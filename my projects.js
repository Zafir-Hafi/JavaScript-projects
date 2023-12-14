// This file is a collection of multiple small and simple JavaScript projects

//my first project

console.log('Hello World!. How are you?')
 alert('hello world!. How are you?')
document.write("Hello everyone.")


// day 1 project
console.log('Teaching the world how to code'.length)
console.log(Math.floor(Math.random()*100))

let x = 3;

if (x > 4){
    console.log('This is False')
} else {
    console.log('This is True')
} 


//day 2 project
let mood = 'sleepy';
let tirednessLevel = 6;

 if ((mood == 'sleepy') && (tirednessLevel > 8)){

    console.log('time to sleep')
 } else{
    console.log('not bed time yet')
 }

 let today_is_rainy = true;
 today_is_rainy ? console.log('It is raining') : console.log('It is not raining')


 let seasons = 'winter';

 if (seasons == 'fall'){ 
    console.log('It is fall season.')
 } else if (seasons == 'summer'){
    console.log('It is summer season')
 }
  else if (seasons == 'winter'){
    console.log('It is winter season')
 } 

 else {
    console.log('It is a normal season.')
 }



let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 let market_item = 'tomato';

 switch(market_item){
    case 'tomato':
        console.log('Tomato is available')
        break
    case 'onion':
        console.log('Potato is available')
        break;
    case 'carrot':
        console.log('carrot is available')
    default:
        console.log('Sorry, no item available at the moment!')
        break
 }



 function greeting(){
    console.log('hello, my name is zafir.')
 }
 greeting()

 function numbers(height, width){
    console.log(width * height)
 }
 let rectwidth = 10
 let rectheight = 100
 numbers(rectwidth, rectheight)

 function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }

  console.log(rectangleArea(-100, 100))


  
  function monitorCount(rows, columns){
    return rows * columns;
  }
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200;
  }
  const totalCost = costOfMonitors(5, 4)
  console.log(totalCost)



  const plantNeedsWater = function (day){
    if(day === 'Wednesday'){
      return true;
    } else { 
      return false
    }
  }
  plantNeedsWater('Tuesday')
  console.log(plantNeedsWater('Tuesday'))
  

  
  const plantNeedsWaterToday = (day) => {
    if(day === 'Wednesday'){
      return true;
    } else { 
      return false
    }
  }
  plantNeedsWaterToday('Tuesday')
  console.log(plantNeedsWaterToday('Tuesday'))

    const just_a_num = num => num * num;
    console.log(just_a_num(100))


  
//day 3 - 28/10/2023 - project



let color_red = 'red';
function the_color_red (){
  return color_red;
}
console.log(the_color_red())

let new_num = function () {
let string_num = '10000 is tenthousand'
console.log(string_num)
}
new_num()

let color = 'red';

function a_new_color(){
  let color = 'red'
console.log(color )
}
a_new_color()
console.log(color)






let the_color_black = () =>{
  const dusk = true;
  let new_color = 'black'
  if(dusk){
    let new_color = 'yellow';
    console.log(new_color)
  }
  console.log(new_color)
}
the_color_black()


function colorMessage(favoriteColor, shirtColor){
  if (favoriteColor === shirtColor){
    return 'The shirt is your favorite color!'
  } else {
    return 'That is a nice color.'
  } 
}

console.log(colorMessage('White', 'Red'))


let num = 3;
let another_num = 6;

if (num == another_num){
  console.log('this is not true')
} else {
  console.log('this is true')
}


// //day 4 project

let famousSayings = [ 'Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.']

console.log(famousSayings[1])


let new_seasons = ['summer', 'winter', 'spring' ]
new_seasons[3] = 'fall'

console.log(new_seasons)


let new_animals = ['cat', 'camel', 'kangroo']

new_animals[0] = 'lion'
console.log(new_animals)

new_animals = ['camel']
console.log(new_animals)


const new_other_animals = ['cat', 'camel', 'kangroo']

new_other_animals[0] = 'lion'
console.log(new_other_animals)

// new_other_animals = ['camel']
// console.log(new_other_animals) 
//will throwe this error ---->>> Uncaught TypeError: Assignment to constant variable.

let a_new_story = ['Once upon a time there were eight trees in the jungle.', 'hello. my name is zafir. I was very excited yesterday']

console.log(a_new_story.length)



let new_grocery = ['milk', 'vegetables', 'chicken', 'fruits']

new_grocery.push('ketchup', 'green tea', 'flour', 'lentils')

console.log(new_grocery)

let new_list_of_colors = ['red', 'blue', 'green', 'black']

let colors_in_array = new_list_of_colors.pop()

console.log(new_list_of_colors)

console.log(colors_in_array)


let digital_skills = ['digital marketing', 'programming', 'ecommerce', 'graphic design']

function manipulation_of_array(arr){
  arr[2] = 'data science'
  return arr
}
console.log(manipulation_of_array(digital_skills))


function pop_digital_skills(new_arr){
  new_arr.pop()
  return new_arr
}

console.log(pop_digital_skills(digital_skills))



let new_numbers = [[1,2], [100, 10000]]

let manipulation_of_numbers = new_numbers[1][1]

console.log(manipulation_of_numbers)


//day 5 project

for (let whole_num = 0; whole_num < 10; whole_num++){
  console.log(whole_num)
}

console.log('--------------------')
for (let new_num = 7; new_num >= 0; new_num--){
  console.log(new_num)
}

const array_colors = ['red', 'black', 'blue', 'yellow', 'green']

for (let another_num = 0; another_num < array_colors.length; another_num ++){
  console.log(array_colors[another_num])
}


const favorite_dish = ['fish', 'tea', ' pomegrante'];

const second_favorite_dish = ['fish', 'tea', 'yogurt'];


for (let x = 0; x < favorite_dish.length; x++){
  
  for (let y = 0; y < second_favorite_dish.length; y++){

    if (favorite_dish[x] == second_favorite_dish[y]){
      console.log('My favorite dish is ' + second_favorite_dish[y] + '!');
    } 
  }
}


const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

let while_number = 10
while(while_number < 20){
  console.log(while_number)
  while_number++;
}



let sentence = 'Hi. My name is Zafir Hafi. I\'m looking for an apple.'

do{
  console.log(sentence)
} while (sentence.length < 4)


let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);


let cups_of_sugar = 3;
let cups_added = 0

do{
  cups_added++
  console.log(cups_added + ' glass was added.')

}while (cups_added < cups_of_sugar)


for (let a = 0; a < 10; a++){
  if (a > 2){
    break
  }
  console.log('This is a sentence')
}
console.log('We are out of the loop')


let iphone_specs = {
  color: 'black',
  storage: '64 gb'
}

console.log(iphone_specs.color)
console.log(iphone_specs.storage)

let spaceship = {
  'fuel type': 'liquid methane',
  'active mission': true,
  homePlanet : 'Earth',
  distance: '1000 km'
}

console.log(spaceship['active mission'])

let details_of_spaceship = (object1, object2 ) => spaceship['homePlanet']

console.log(details_of_spaceship(spaceship, 'distance'))


let new_food_list = {
  vegetable : 'potato',
  fruit: 'apple',
  meat: 'fish',
  flour: 'oats',
  rice: 'brown'
}
console.log(new_food_list)
new_food_list.flour = 'wheat'
new_food_list['fruit'] = 'pomegrante'

delete new_food_list.rice

console.log(new_food_list.flour)

console.log(new_food_list.fruit)

console.log(new_food_list)


let my_name = {
  another_name(){
    console.log('Hello world. This is a method in JavaScript Object. Bye')
  }
}
my_name.another_name()

const second_spaceship = {
  telescope: {
     yearBuilt: 2018,
     model: '91031-XLT',
     focalLength: 2032 
  },
 crew: {
     captain: { 
         name: 'Sandra', 
         degree: 'Computer Engineering', 
         encourageTeam() { console.log('We got this!') } 
      }
 },
 engine: {
     model: 'Nimbus2000'
  },
  nanoelectronics: {
      computer: {
         terabytes: 100,
         monitors: 'HD'
      },
     'back-up': {
        battery: 'Lithium',
        terabytes: 50
      }
 }
}; 

console.log(second_spaceship)

console.log(second_spaceship.nanoelectronics['computer'].monitors)

// //day 7, 8, 9, 10 was BREAK

// //Day 11 project

let new_food_item = {
  color : 'white',
  dish: 'rice',
  temperature: 'hot',
}

let status_of_food = obj =>{
  obj.temperature = 'cold'
}
status_of_food(new_food_item);
console.log(new_food_item)

let second_status_food = obj =>{
  obj['dish'] = 'potato';
}
second_status_food(new_food_item)
console.log(new_food_item)

let myRecipes = {
  desserts: {
    'apple pie': 'Ingredients and instructions for apple pie',
    'chocolate cake': 'Ingredients and instructions for chocolate cake'
  }
};

let note = 'apple pie';
console.log(myRecipes['desserts'][note]); // This will show you the apple pie recipe using the note.


let toyBox = {
  crayons: {
    blue: 'a bright blue crayon',
    red: 'a vivid red crayon'
  }
};

// Using dot notation to get the blue crayon
console.log(toyBox.crayons.blue); // This interprets, "Get the blue crayon from the toy box."

// Using bracket notation to get the red crayon
let mySecretColor = 'red';
console.log(toyBox.crayons[mySecretColor]); // This interprets, "Get the color written on my secret note."


let aNewSpaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
    },
      
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      
      }
  }
}

for (let batman in aNewSpaceship.crew){
  console.log(`${batman}: ${aNewSpaceship.crew[batman].name}`)
}

for (let job in aNewSpaceship.crew){
  console.log(`${aNewSpaceship.crew[job].name}: ${aNewSpaceship.crew[job].degree}`)
}


let monkey = {
  diet :'partially herbivore',
  makeSound(){
    console.log('oh oh ah ah')
  },
  dietType(){
    console.log(this.diet)
  }
}
monkey.makeSound()
monkey.dietType()


let gun = {
  _name: 'ak 47',
  color: 'green'
}
console.log(gun._name)


const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at  ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high '
robot.recharge()

let new_robot = {
  _newenergyLevel : 1000,
  new_recharge(){
    this._newenergyLevel += 100
    console.log(`${this._newenergyLevel}% is my new energy level right now! `)
  }
}
new_robot._newenergyLevel = 'High'

new_robot.new_recharge()

let rainy_day = {
  location : 'new york',
  temperature: '25 C',
  get newTemperature(){
    if (this.location && this.temperature){
      return `Toyda it is ${this.temperature} degree in ${this.location}.`
    }
    else{
      return 'It is not raining.'
    }
  }
}
console.log(rainy_day.newTemperature)


let specs = {
  phone : 'Samsung z flip',
  color: 'black',
  price: 2000,
  set newPriceOfPhone(num){
    if(typeof num === 'number'){
      this.price = num
    }
    else{
      console.log('This is not a right issue.')
    }
  },
}
specs.newPriceOfPhone = 1500 ; //SUCCESSFUL reassignment of new price of phone

console.log(specs.price)

let my_details = (name, gender, age, nationality) => {
  return{
    name: name,
    gender: gender,
    age: age, 
    citizen(){
      console.log('I am from ' + nationality + '.')
    }
  }
}


let me = my_details('Zafir', 'Male', 25, 'Pakistan')
console.log(me)
me.citizen()

let furniture = (color, item, price, brand) =>{
  return {
    color, item, price, brand
  }
}
let values_of_furniture = furniture('black', 'chair', '100', 'Apple')
console.log(values_of_furniture)
console.log(values_of_furniture.color)
console.log(values_of_furniture.price)

let movie_character = {
  name: 'spider-man',
  universe: 'marvel',
  powers:{
    firstPower: 'healing',
    secondPower: 'web shooting',
  }
}
const {powers} = movie_character;
console.log(powers)

const movie_character_keys = Object.keys(movie_character)
console.log(movie_character_keys)

const movie_character_entries = Object.entries(movie_character)
console.log(movie_character_entries)

const movie_character_assign = Object.assign({gender: 'male', height: '6 ft'}, movie_character)
console.log(movie_character_assign)


function IamDoingSomeWorkInMyOffice (){
  console.log('I am at the factory.')
}
let busy = IamDoingSomeWorkInMyOffice;
busy()

// //day 12 projects

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

console.log('hello i am zafir')


const higherOrderFunc = param => {
  param();
  console .log(`I just invoked ${param.name} as a callback function!`)
}


const anotherFunc = () => {
  console.log( 'I\'m being invoked by the higher-order function!');
}

higherOrderFunc(anotherFunc);

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});


const add_Two = num => {
  return num + 2;
}
console.log(add_Two(10))

const car_names = ['ferrari', 'lamborgini', 'honda', 'toyota']

car_names.forEach(function(namesOFTheCar){
  console.log(' - ' + 'my favorite car is ' + namesOFTheCar)
})

const new_car_names = ['civic', 'cultus', 'mehran', 'ferrari']

const modifiedCars = new_car_names.map(function (cars){
 return cars + ' is awesome.'
})
console.log(modifiedCars)


let some_words = ['matter', 'volume', 'blue', 'money', 'health', 'mars', 'moon']

let modifiedWords = some_words.filter(words => {return words.length <= 5})
console.log(modifiedWords)


let newAnimals = ['cat', 'dog', 'fish', 'parrot', 'lion']

const anotherAnimal = newAnimals.findIndex(findAnimal =>{ return findAnimal == 'lion'})

console.log(anotherAnimal)

const numbersofArray = [1, 2, 4, 10];

const summedNums = numbersofArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

const range_of_numbers = [1,2,3,4,5,6]

const reducing_range_of_numbers =range_of_numbers.reduce( ( accumulator, currentValue) => 
{ console.log('The value of accumulator: ', accumulator);
 console.log('The value of currentValue: ', currentValue)
return accumulator + currentValue
})

console.log(reducing_range_of_numbers)


// //day 13 projects

document.body.innerHTML = '<h3>this is new content here</h3>'

document.getElementsByTagName('h3')[0].innerHTML = 'Hello this is new content'

document.querySelector('h3').style.backgroundColor = 'orange'
document.querySelector('h3').style.fontSize = '35px'


let newAttractions = document.createElement('p')

newAttractions.id = 'new-attraction'
newAttractions.innerHTML = 'This is a new attraction. please visit'

document.getElementById('italy-attractions').appendChild(newAttractions)


// //day 14 projects


let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here

function textChange(){
view.innerHTML = 'Hello, World!'  
}
textChange()

function textReturn(){
  view.innerHTML = 'View'
}

textReturn()
view.addEventListener('click', textChange)

close.addEventListener('click', textReturn)

