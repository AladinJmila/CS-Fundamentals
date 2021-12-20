// Returns the adress of a tenant

function binarySearchManager(building, tenant) {
  let lowerFloor = 0;
  let higherFloor = building.length - 1;

  while (lowerFloor <= higherFloor) {
    let middleFloor = parseInt((lowerFloor + higherFloor) / 2);

    if (tenant === building[middleFloor]) return middleFloor;

    if (tenant < building[middleFloor]) higherFloor = middleFloor - 1;
    else lowerFloor = middleFloor + 1;
  }

  return -1;
}
