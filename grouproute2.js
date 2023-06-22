const prompt = require('prompt-sync')();

class Leg {
  constructor(source, destination, cost) {
    this.source = source;
    this.destination = destination;
    this.cost = cost;
  }
}

class Route {
  constructor() {
    this.legs = [];
  }

  addLeg(source, destination, cost) {
    const leg = new Leg(source, destination, cost);
    this.legs.push(leg);
  }

  getTotalCost() {
    return this.legs.reduce((totalCost, leg) => totalCost + leg.cost, 0);
  }
}

function main() {
  const route = new Route();

  const numLegs = prompt('Enter the number of legs in the route:');

  for (let i = 1; i <= numLegs; i++) {
    const source = prompt(`Enter the source city for leg ${i}:`);
    const destination = prompt(`Enter the destination city for leg ${i}:`);
    const cost = parseFloat(prompt(`Enter the cost for leg ${i}:`));
    route.addLeg(source, destination, cost);
  }

  const totalCost = route.getTotalCost();
  console.log('Total cost of the trip:', totalCost);
}

main();
