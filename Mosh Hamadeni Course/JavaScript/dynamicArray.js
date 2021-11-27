// → Figure out the return value (with storytelling)
// I need to create a couple of functions that will perform operations on an static array:
// Operation 1 'insert': You can insert items and when the array reaches it cap

// We're going to solve this problem step by step and this is the approach that I want you to follow whenever you want to solve a complexe problem, don't try to do too many things at once, try to break down that problem into smaller, easier to understand, easier to solve problems.

// → Figure out the edge cases

// → Figure out the logic for the simplest case

// → Project the logic for the edge cases

// → Code a solution for the simplest case

function arrayConstructor(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(0);
  }
  return array;
}

let count = 0;
// When we print the array all the way to array.length in the for-loop we end up seeing 3 zeros, but techincally we should not be able to see anything because we didn't insert any items in this array. So, we need another field to keep track of the number of items in this array. We can not rely on array.length because that is the memory we are allocating. Intially we might allocate memory for 50 items, but we might only insert two items in the array. So everytime we insert a new item, we need to keep track of the number of items in this array. To do that we add a field called 'count', and we replace array.length with 'count'. So initially count is 0 and this loop is not going to be executed. In the future everytime we insert a new item in this array we're going to increment count by 1.

function printArray(array) {
  for (let i = 0; i < count; i++) {
    console.log(array[i]);
  }
}

// Insert Operation: There are a couple of things we need to do -> The function takes in and item, if the array is full we nedd to resize it and also we need to add the new item to the end of the array. Let's not worry about the first step yet, instead we're going to do the second step which is easier. So we're goin to add this new item to the end of this array, how can we do this? Well, we use the array field, we use square brackets, array[], now we need to pass an index, what is this index? This index should represent the last item in this array, it's not going to be array.length, it's going to be 'count'. So currently we don't have any items in this array, so the index of the last item, or the place where we should insert a new item is index 0. Next time we add a new item, the index is going to be 1 and then 2 and 3. so we set the array[count] = item, and then we increment count by 1.

// Now we will implement the full array scenario: So how can we tell if this array is full? that very easy, we can write an expression like this, if array.length === count. Now in this case, what should we do? First we need to create a new array that is larger, let's say twice the size. Then we need to copy all the existing items into this new array. And finally we're going to set 'array' field to this new array.

// So now implement this, first we need to create a new array, this is pretty easy, first we declare a newArray and set it to new Array(count * 2). Now we need to copy all the existing items, here we're going to use a fo-loop and iterate over all the existing items and reference them using their index, so newArray[i] = array[i]. finally we need to set the 'array' field to this 'newArray' so array = newArray

function insertItem(item) {
  if (array.length === count) {
    const newArray = new Array(count * 2);
    for (let i = 0; i < count; i++) {
      newArray[i] = array[i];
    }
    array = newArray;
  }

  array[count++] = item;
}

// Now let's implement the remove operation. So what should we do here? First we validate the index and make sure it's in the right range. For example, if someone passes -1, it doesn't make sens, or let's say our array has 5 items, as you know the index of the last item in this case should be 4, what if someone says remove the item at the index 5, 6 or 7. So first we want to validate the index. Second, we want to shift the items to the left to fill the hole. Let's implement each of these scenarios one by one.

// So first we're going to validate the index, this is pretty easy, we can write an if statement like this: if index is less than 0 or index is greater than or equal to count. What does this mean? Well, if count is 4 that means that the index of the last item is 3. So we cannot tell this array to remove the item at index 4 or 5. So that is why we have greated that or equal to count.| Now, what should we do in this case? We don't want to print a message on the console, because this function might be used in an application with a graphical user interface. There, we don't have a console, so instead we should throw an exception because this is a programming error if somone passes an idex that is out of range. So by throwing an exception we force the program to crash, and with this the programmer knows that they've made a mistake and they will solve this problem.

// Now let's imagine we have an array like this [10, 20, 30, 40], and then we want to remove the item at the index 1, that is this 20 over here. So in order to remove 20, we should copy 30 in the place of 20, then 40 in the place of 30, so we're shifting each item one step to the left. In other words, the item at index 1 should be set to what we have at index 2, and what we have at index 2 should be set to what we have at index 3. How do we implement this? This is very easy, we need a for-loop that starts from the given index and it goes all the way until it reaches the end of this array. So, for (let i = index) as long as i is less than count we increment i after each step, now at each iteration we want to set the item at this index to the item at its right side. That's pretty easy, so we set array[i] to array[i+1]. So after we execute this for-loop, our array is going to look like this: [10, 30, 40, 40], but we still have 4 items in this array, we want to shrink this array so it looks like this: [10, 30, 40]. How can we do that? Very easy, after our loop we decrement count by 1, because count represent the total number of items currently in the array, not the size of the array, right!

function removeAt(index) {
  // Validate index
  if (index < 0 || index >= count) throw new Error('Index out of range.');
  // Shift the items to the left to fill the hole
  for (let i = index; i < count; i++) array[i] = array[i + 1];

  count--;
}

// let array = arrayConstructor(3);
// insertItem(10);
// insertItem(20);
// insertItem(30);
// insertItem(40);
// removeAt(5);
// printArray(array);

// → Test edge cases one by one
// → Code a solution for every edge case
// → Optimize the solution

// Our client asked us to create a Numbered building to host our tenants the Datans: We have a few constrains that we need to work around and they are as follows: We don't know how many Datans we're goin to host. Second, the building regulations of that area do not allow you to add more stories once the building is first irected, so in order to get more apartment, you need to build a new building that is taller, and them move all the existing tenants there in the same order they occupied in the previous building. Once you completed emptying the old building, you rename the new building using the old name, so the previous tenants don't have to change the servecies that rely on their previous address.

// One more thing to note is we can't tell how many apartments are occupied until we go and knock on each door. To avoid the hassle if knocking on all the doors everytime we provide sign at the entrance that will hold the number of tenants. This way next time a new tenant moves in we know eaxtly in wich apartment he will go, and if there are any spare apartements left to begin with.

// To do any of the operations related to managing the tenans we need some staff members, each will be assigned a sperate role.

// Before everything we need a construction company that will erect the building. All we need is tell it how many stories our want

const NumberedBuilding = Array;

// Hire a contruction company
function constructionCompany(numberOfStories) {
  return new NumberedBuilding(numberOfStories);
}

let building = constructionCompany(3);

// Second, we need somone that will report to us the datans that live in the building. Let's call this person tenantsReporter, we give him the building and he's supposed to check out the occupied stories and report back with their tenants. In order to know how far in the buiding he needs to ravel to cover all the occupied apartement, he can make use of the sign at the entrance.

let tenantsCount = 0;

function ReportTenants(building) {
  for (let floor = 0; floor < tenantsCount; floor++) {
    console.log(building[floor]);
  }
}

// Now we need to add another staff member that will be responsible for moving new tenants to the next empty apartment. If the building is full, he needs to call for the constraction company to build a new building, then he will move all the existing tenants there. Once there is room, he place the new tenant there.

function addTenant(tenant) {
  if (building.length === tenantsCount) {
    const newBuilding = constructionCompany(tenantsCount * 2);
    for (let apartNum = 0; apartNum < tenantsCount; apartNum++) {
      newBuilding[apartNum] = building[apartNum];
    }
    building = newBuilding;
  }

  building[tenantsCount++] = tenant;
}

// Another employee will be responsible for moving out tenants from a given floor. First thing, we need to make sure that the given floor number exist in our building, so it needs to be greater than 0 and goes all the way up to the last floor. Since out floor count statrs from 0, the last apartment is at floor = tenantsCount - 1. In other words the floor number has to be less than of equal to the tenantsCount. Once that is done, he needs to move down all the tenants to fill in the empty apartement. In this building, it is not allowed to have a vacan floor in the middle of occupied ones. After that he will need to update the tenantsCount, so the moving employee will know the available spots and so that the reporter does not need to report the now unused apartment.

function removeTenant(level) {
  if (level < 0 || level >= tenantsCount)
    throw new Error('Floor out of range.');

  for (let floor = level; floor < tenantsCount; floor++)
    building[floor] = building[floor + 1];

  tenantsCount--;
}

// addTenant('dajopa');
// addTenant('daladin');
// addTenant('dattous');
// ReportTenants(building);
