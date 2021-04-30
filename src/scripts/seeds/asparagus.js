//--------------------------

/* 1. 
Define and export a function for creating a seed. Define the functions with the 
following syntax. If the plant is Asparagus, the function should be named 
createAsparagus. Same thing for all the others. Use arrow functions. Do not use 
the function keyword. Each of these functions should return an object with the 
following properties. Look at the table below the instructions to see what the 
values for each object are:
type
height
output*/

//---------------------------------
//const asparagusSeed = 

export const createAsparagus = () => {
    return {
        type: "Asparagus",
        height: 24,
        output: 4
    }
}


/* comp code from Brewed Awakenings:
export const getOrders = () => {
    return [...database.orders]
} */


//?? 
//I'm confused. Why would I code a function that returns an object, rather than 
//create an object that can be referenced? Does "a function that returns an object" 
//imply the object is created by that function somehow?