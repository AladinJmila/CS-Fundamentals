const testStr = 'I am blue blabla bli blablabla';
// const testStr = '';

function mostRepeatedTenantName(charFloorBuilding) {
  if (typeof charFloorBuilding !== 'string' || !charFloorBuilding)
    throw new Error('Invalid input.');
  // Prepare and empty NamedFloorBuilding to create rooms named after the CharFloorBuildings
  // and inside which we will keep count of how many tenants share the same Char
  let namedFloorBuilding = {};
  // turn the CharFloorBuilding into a NumFloorBuilding to run the forEach()
  [...charFloorBuilding].forEach(char => {
    if (namedFloorBuilding[char]) namedFloorBuilding[char]++;
    else namedFloorBuilding[char] = 1;
  });

  // Now we need to iterate through all the floor of the NamedFloorBuilding and see wich one
  // contains the highest count. To do that we will put the floor names in a NumFloorBuilding
  // After that we can get every to consecutive tenants names, which we can use to access
  // those tenants apartment and compare the number they are hodling inside. So in every
  // iteration we check we compare the two number but retain the name of the tenant with
  // the higher number, and compare it with the following tenant number. At the end I will
  // have the name of the tenant with the highest count.

  return Object.keys(namedFloorBuilding).reduce((a, b) =>
    namedFloorBuilding[a] > namedFloorBuilding[b] ? a : b
  );
}

console.log(mostRepeatedTenantName(testStr));
