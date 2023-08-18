class Vehicle {
  run: number;
}

// function kmToMiles<T>(vehicle: T): T {
//   vehicle.run = vehicle.run / 0.62;// ERROR: 1. Property 'run' does not exist on type 'T'. [2339]
//   return vehicle;
// }

function kmToMiles<T extends Vehicle>(vehicle: T): T {// the same we can extends by interface, not only by class
  vehicle.run = vehicle.run / 0.62;// NO ERROR
  return vehicle;
}

class LCV extends Vehicle {
  capasity: number;
}

const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
kmToMiles({ a: 1 });
kmToMiles({ run: 1 });// it can be an object, not only class

//
function logId<T extends string | number, Y>(id: T, additionData: Y): { id: T, data: Y } {
  console.log(id);
  console.log(additionData);
  return { id, data: additionData };
}
