/****************************
 * Name:
 * Student ID:
 * Date: 
 * Description:
 * Filename: 
 ****************************/

// You must use FAT Arrow functions & String Literals for full marks.

//1: Research 10 additional animal species and add them as an object to the the array below. Use the properties given as a guide.
let animals = [
    {species: "Lion", genus: "Felis", order: "Carnivora", numberOfLegs: 4, weightKG: 174, lengthCM: 184, habitat: "Plains", hatchesFromEgg: false, gestationDays: 110, extinct: false },
    {species: "Brown Bear", genus: "Ursus", order: "Carnivora", numberOfLegs: 4, weightKG: 217, lengthCM: 224, habitat: "Woodlands", hatchesFromEgg: false, gestationDays: 190, extinct: false },
    {species: "American Alligator", genus: "Alligator", order: "Crocodilia", numberOfLegs: 4, weightKG: 160, lengthCM: 340, habitat: "Wetlands", hatchesFromEgg: true, gestationDays: 65, extinct: false },
    {species: "Woolly Mammoth", genus: "Mammuthus", order: "Proboscidea", numberOfLegs: 4, weightKG: 6000, lengthCM: 580, habitat: "Tundra", hatchesFromEgg: false, gestationDays: 630, extinct: true },
    {species: "Danger Noodle", genus: "Ophiophagus", order: "Squamata", numberOfLegs: 0, weightKG: 6, lengthCM: 548, habitat: "Forest", hatchesFromEgg: true, gestationDays: 110, extinct: false },
    
  ];
  
  //2: Using a filter create a new array that only contains animals that weigh over 200KG. Console log them all.
  
  //3: Using findIndex look for the position of the species "Danger Noodle" 
  
  //3.1: Using the index position you just found update the species to "King Cobra"
  
  //4: Sort the animals array alphabetically in reverse (z-a). Console log the result.
  
  //5: Using find determine the first extinct species. Console log the result.
  
  //6: Use map to create a new array with the following information: '{animal name} has {X} number of legs.' Console log the results.
  
  //7: Loop through the animals array. Using a switch based off of the extinct property console log the following if they are extinct.
  //   'Press F to pay respect for {animal name}'
  
  //8: Out of the animals that weigh over 200KG which of them are extinct? Console log the result.
  
  //9: Create a new animal as a seperate object & insert it into the correct postion using splice. Console log the result.
  //   (Bonus Mark: Don't use a hardcoded number to specify the position for the new animal)
  
  //10: Create a copy of the animals array. Sort it by gestationDays. Remove all animals with a gestation length greater than 200 days. Console log the result.