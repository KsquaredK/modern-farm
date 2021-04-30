import { createPlan } from "./plan.js"
//import { plantSeeds } from "./tractor.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const yearlyPlan = createPlan()
console.log(yearlyPlan)

const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()

const seedObject = {
    type: "rye",
    height: 42,
    output: 3
}
addPlant(seedObject)

//usePlants = plantsToPlant




//console.log(thisYearsPlan)

console.log(asparagusSeed)
console.log(cornSeed)
console.log(potatoSeed)
console.log(soybeanSeed)
console.log(sunflowerSeed)
console.log(wheatSeed)

// console.log("Welcome to the main module")


// *******************************************

/*Checking Your Logic
Write some temporary test code in the main module to check if your functions do their job 
correctly.

a. Create a seed object.
b. Invoke addPlant() and specify the seed object as the argument.
c. Invoke usePlants() and store its return value in a variable.
d. Use console.log() to make sure your seed object got added to the array of plants 
in the field.
 */
// ***********************************************

/* Comp Code:
const addPhoneToInventory = (phoneObject) => {
    const lastIndex = phones.length - 1
    const currentLastPhone = phones[lastIndex] //why phones[lastIndex? because it identifies the last object/item in the array so it can be assigned to currentLastPhone?]
    const maxId = currentLastPhone.id
    const idForNewPhone = maxId + 1

    phoneObject.id = idForNewPhone //so the new phoneObject's id will be assigned to (or the same as) idForNewPhone?
    phones.push(phoneObject) //push onto the phones array phoneObject
}

const pixel = { //object to push added below arrow function and above function call
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 399,
    weight: 1.2
}

addPhoneToInventory(pixel) //call the function addPhone... calling pixel as the parameter 
   */