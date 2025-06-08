function estimateTransactionFee() {
  // Prompt user for the amount to send and convert to number
  let input = prompt("How much are you sending? (KES):");
  let amountToSend = Number(input);

  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Please enter a valid positive number.");
    return;
  }

  // Calculate 1.5% fee
  let fee = amountToSend * 0.015;

  // Apply minimum and maximum fee limits
  fee = Math.max(10, Math.min(fee, 70));

  // Calculate total debited amount
  let total = amountToSend + fee;

  // Print results to console
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}\n`);
  console.log("Send Money Safely!");
}
