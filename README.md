Week 1 Code Challenge
Prerequisites
Links to an external site.
GitHub Repository: Create a new repository on your GitHub account (e.g., Code-Challenge-1).
Project Structure: For each challenge below, create a dedicated folder within your main repository (e.g., chaiCalculator, bodaFareCalculator, mobileMoneyEstimator).
JavaScript Files: Inside each challenge's folder, create a single JavaScript file to hold your solution for that specific challenge (e.g., chai.js, fare.js, fee.js).
Solution Implementation: Use JavaScript to write your solutions.
Version Control: Push your solutions to the GitHub repository as you complete them.
Documentation: Ensure your repository has a well-written main README.md file (like this one!).
Submission: Submit the link to your GitHub repository.
 

Challenge 1: Chai Bora Ingredient Calculator ☕
Links to an external site.
This challenge involves creating a simple calculator to determine the basic ingredients needed to make a specific number of cups of Kenyan chai.

The Standard Recipe for 1 Cup of Chai:

Water: 200 ml
Milk: 50 ml
Tea Leaves (Majani): 1 tablespoon
Sugar (Sukari): 2 teaspoons (optional, but included for this challenge)
Your Task:

Write a JavaScript function named calculateChaiIngredients that:

Prompts the user to enter the number of chai cups they want to make (e.g., using prompt()). Remember to convert the input to a number.
Takes the numberOfCups (as a number) as an argument.
Calculates the required amount for each ingredient (water, milk, tea leaves, sugar) based on the numberOfCups.
Prints the results to the console in a clear, readable format.
Example Interaction (for an input of 3 cups):

User is prompted: Karibu! How many cups of Chai Bora would you like to make?
User enters: 3
Console Output:
To make 3 cups of Kenyan Chai, you will need:
Water: 600 ml
Milk: 150 ml
Tea Leaves (Majani): 3 tablespoons
Sugar (Sukari): 6 teaspoons

Enjoy your Chai Bora!
Challenge 2: Boda Boda Ride Fare Estimator 🛵
Links to an external site.
This challenge is to create a simple program to estimate the fare for a boda boda ride.

Fare Calculation Rules:

Base Fare: KES 50 (applied to every ride).
Per Kilometer Charge: KES 15 for every kilometer traveled.
Your Task:

Write a JavaScript function named calculateBodaFare that:

Prompts the user to enter the distance of their trip in kilometers. Convert this input to a number.
Takes the distanceInKm (as a number) as an argument.
Calculates the total estimated fare using the formula: totalFare = baseFare + (distanceInKm * chargePerKm)
Prints the result to the console in a user-friendly format.
Example Interaction (for a trip of 5 km):

User is prompted: Unafika wapi Mkubwa? Kilometer ngapi?:
User enters: 5
Console Output:
Uko kwote? Io ni 5 km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 75
Total: KES 125

Panda Pikipiki!
Challenge 3: Simplified Mobile Money Transaction Fee Estimator 📱
Links to an external site.
This challenge is to create a simplified estimator for transaction fees.

Simplified Fee Structure:

The basic transaction fee is 1.5% of the transaction amount.
However, there's a minimum fee of KES 10. If 1.5% of the amount is less than KES 10, the fee charged is KES 10.
There's also a maximum fee of KES 70. If 1.5% of the amount is more than KES 70, the fee charged is KES 70.
Your Task:

Write a JavaScript function named estimateTransactionFee that:

Prompts the user to enter the amount of money they wish to send. Convert this input to a number.
Takes the amountToSend (as a number) as an argument.
Calculates the transaction fee based on the 1.5% rule, ensuring it adheres to the minimum (KES 10) and maximum (KES 70) fee limits.
Hint: You'll likely need conditional logic (if-else if-else) or Math.min() and Math.max().
Calculates the total amount that will be debited (amount to send + transaction fee).
Prints the results to the console.
Example Interactions & Outputs:

User is prompted: Unatuma Ngapi? (KES):

Scenario 1: User enters 500

(1.5% of 500 = 7.5. Fee becomes KES 10 due to minimum.)
Console Output:
Sending KES 500:
Calculated Transaction Fee: KES 10
Total amount to be debited: KES 510

Send Money Securely!
Scenario 2: User enters 2000

(1.5% of 2000 = 30. Fee is KES 30.)
Console Output:
Sending KES 2000:
Calculated Transaction Fee: KES 30
Total amount to be debited: KES 2030

Send Money Securely!
Scenario 3: User enters 10000

(1.5% of 10000 = 150. Fee becomes KES 70 due to maximum.)
Console Output:
Sending KES 10000:
Calculated Transaction Fee: KES 70
Total amount to be debited: KES 10070

Send Money Securely!
