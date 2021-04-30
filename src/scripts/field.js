//***1. array for plants currently being grown
const fieldPlants = [] //defines a variable to hold new array


//***2. exported function for adding plants to the array above, incl. corn array
export const addPlant = (seed) => { //export function takes the parameter of a seed object
    if (Array.isArray(seed)) { //uses array method to detect corn's array of objects
        for (const singleSeed of seed) { //selects single corn object from array
            fieldPlants.push(singleSeed) //pushes to new array
        }
    } // closes Array.isArray callback function
    else { //for all other objects referenced outside arrays,
        fieldPlants.push(seed); // push seed to new array
    }
}


//***3. exported function that makes a copy of fieldPlants array
export const usePlants = () => {
    return fieldPlants
}
console.log(fieldPlants)


//checking the logic----------
const newSeed = {
    type: "rhubarb",
    height: 32,
    output: 4
}

addPlant(newSeed)
console.log(`Newly added: ${newSeed.type}, expected height ${newSeed.height} inches, expected yield ${newSeed.output} bushels/season.`)
    //References: For this module, I referred to adding phones in Bk. 2, live-coding sessions re methods, and Devin's Modern Farm field module.


// DIRECTIONS
/* 
1. Define a variable in this module whose initial value is an empty array. This array will 
store all of the plants that are growing in the field. Do not export the array. √

2. In the module, define and export a function named addPlant. The addPlant function must 
accept a seed object as input. The function will add the seed to the field (How do you add 
something to an array? Do you remember the method for it?). √

3. Define and export a function named usePlants that returns a copy of the array of plants.
Be aware that when planting corn, an array of objects will be provided instead of a single 
object like all the other type of seeds. Investigate the Array.isArray method to check if 
corn got passed in, or one of the others. √

4. Be aware that when planting corn, an array of objects will be provided instead of a 
single object like all the other type of seeds. Investigate the Array.isArray method to 
check if corn got passed in, or one of the others.√

Checking Your Logic
Write some temporary test code in the main module to check if your functions do their job 
correctly.

a. Create a seed object.√
b. Invoke addPlant() and specify the seed object as the argument.√
c. Invoke usePlants() and store its return value in a variable.√
d. Use console.log() to make sure your seed object got added to the array of plants 
in the field.√
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


addPhoneToInventory(pixel) //call the function addPhone... calling pixel as the parameter*/