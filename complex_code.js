/* complex_code.js */

// This code implements a sophisticated algorithm for solving the Travelling Salesman Problem (TSP)
// using the Simulated Annealing metaheuristic approach

// Helpers
function generateRandomSolution(numCities) {
  const cities = Array.from(Array(numCities).keys());
  const solution = [];
  while (cities.length > 0) {
    const index = Math.floor(Math.random() * cities.length);
    solution.push(cities.splice(index, 1)[0]);
  }
  return solution;
}

function calculateDistance(cities, solution) {
  let distance = 0;
  for (let i = 0; i < solution.length - 1; i++) {
    const cityA = cities[solution[i]];
    const cityB = cities[solution[i + 1]];
    distance += Math.sqrt(Math.pow(cityB.x - cityA.x, 2) + Math.pow(cityB.y - cityA.y, 2));
  }
  return distance;
}

function swapCities(solution, i, j) {
  const temp = solution[i];
  solution[i] = solution[j];
  solution[j] = temp;
}

// Simulated Annealing
function simulatedAnnealing(cities) {
  const initialSolution = generateRandomSolution(cities.length);
  let currentSolution = initialSolution.slice();
  let bestSolution = initialSolution.slice();
  let currentDistance = calculateDistance(cities, currentSolution);
  let bestDistance = currentDistance;

  let temperature = 100;
  const coolingRate = 0.999;

  while (temperature > 1) {
    const newSolution = currentSolution.slice();
    const i = Math.floor(Math.random() * (cities.length - 1));
    const j = i + 1;

    swapCities(newSolution, i, j);
    const newDistance = calculateDistance(cities, newSolution);

    const acceptanceProbability = Math.exp((currentDistance - newDistance) / temperature);
    if (newDistance < currentDistance || Math.random() < acceptanceProbability) {
      currentSolution = newSolution.slice();
      currentDistance = newDistance;

      if (newDistance < bestDistance) {
        bestSolution = newSolution.slice();
        bestDistance = newDistance;
      }
    }

    temperature *= coolingRate;
  }

  return bestSolution;
}

// Example usage
const cities = [
  { x: 0, y: 0 },
  { x: 1, y: 5 },
  { x: 2, y: 1 },
  { x: -3, y: 2 },
  { x: 0, y: -4 }
];

const bestRoute = simulatedAnnealing(cities);
console.log('Best route:', bestRoute);
console.log('Best distance:', calculateDistance(cities, bestRoute));