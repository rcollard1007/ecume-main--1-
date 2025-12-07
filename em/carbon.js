function calculateCarbonFootprint(event) {
  event.preventDefault(); // Empêche le rechargement

  // Récupération des valeurs
  var distance = parseFloat(document.forms["carbonForm"]["distance"].value);
  var weight = parseFloat(document.forms["carbonForm"]["weight"].value);

  // Validation
  if (isNaN(distance) || isNaN(weight) || distance <= 0 || weight <= 0) {
    document.getElementById("result").textContent = "Please enter valid positive numbers.";
    return false;
  }

  // Facteur pour camion
  var factor = 0.2; // kg CO₂ par km·kg

  // Calcul
  var footprint = distance * weight * factor;

  // Affichage du résultat
  document.getElementById("result").textContent =
    "Estimated Carbon Footprint: " + footprint.toFixed(2) + " kg CO2";

  return false; // Empêche le rechargement
}





