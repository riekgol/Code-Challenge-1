function calculateChaiIngredients(numberOfCups){
//Ingredients amount per cup
const waterPerCup =200;//in ml
const milkPerCup =50;//in ml
const teaLeavesPerCup =1;//in tablespoon
const sukariPeraCup =2;//in tablespoon
//Calulate total ingredient amount
const totalWater =numberOfCups*waterPerCup;
const totalMilk =numberOfCups *milkPerCup;
const totalTeaLeaves =numberOfCups*teaLeavesPerCup;
const totalSukari =numberOfCups*sukariPerCup;
//Output the results
console.log('To produce ${numberOfCups}cups of Chai, you will require:');
console.log('Water:${totalWater}ml');
console.log('Milk:${totalMilk}ml');
console.log('Tea leaves:${totalTeaLeaves}tablespoons');
console.log('Sukari:${totalSukari}teaspoons');
console.log('Chai tamu mmh');
}
//Prompt user input
const input =prompt("Welcome! How many cups shall we serve you?");
const numberOfCups =parseInt(input);

if (!isNaN(numberOfCups) && numberOfCups>0){
  calculateChaiIngredients(numberOfCups);

}else{
  console.log("Please enter number starting from 1");
}