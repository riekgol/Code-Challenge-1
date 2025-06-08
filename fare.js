function calculateBodaFare(distanceInKm) {
  const baseFare = 50;         // Base fare in KES
  const chargePerKm = 15;      // Per kilometer charge in KES

  const distanceCharge = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceCharge;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`kalia pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log("Panda pikipiki!");
}

// Prompt user for input
const input = prompt("Unafika hadi wapi boss?:");
const distanceInKm = parseFloat(input);

if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  console.log("please enter a realistic distance.");
}
