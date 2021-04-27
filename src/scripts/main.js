import { createPlan } from "../src/scripts/plan.js"
import { plantSeeds } from "../src/scripts/tractor.js"
import { usePlants } from "../src/scripts/tractor.js"
import { createCorn } from "../src/scripts/seeds/corn.js"
import { createPotato } from "../src/scripts/seeds/potato.js"
import { createSunflower } from "../src/scripts/seeds/sunflower.js"


const thisYearsPlan = createPlan()
console.log(thisYearsPlan)

console.log("Welcome to the main module")