import { createPlan } from "./plan.js"
const yearlyPlan = createPlan()

// 1. define & export plantSeeds function w/ yearlyPlan as parameter
export const plantSeeds = (yearlyPlan) => {

}
export const usePlants = () => {
    return fieldPlants
}
console.log(fieldPlants)












// *********************************************
/*  1. Define and export a plantSeeds function. The function must accept the year's planting plan as input (i.e. it must define a parameter).

    2. The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent 
    array and the child arrays.
    // Example growing plan. Actual plan is bigger.
    [
        ["Potato", "Soybean", "Soybean", "Corn"],
        ["Wheat", "Corn", "Wheat", "Asparagus"],
        ["Asparagus", "Wheat", "Soybean", "Corn"],
        ["Asparagus", "Soybean", "Potato", "Wheat"]
    ]

    3. As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", 
    invoke the createAsparagus function to get an asparagus seed).

    4. Take that seed and add it to the array of plants in the field module.

*****    
Checking Your Logic
In the main.js module, invoke the function that plants all of the seeds. 
Then get the plants array from the fields.js module. 
Then use console.log() to see if the plants array has been populated correctly. 
*/


// *******************************
// Reference
// Array.from(yearlyPlan.children).map((child)=>console.log(child))