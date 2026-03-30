const friend1 = {
  name: 'Laurence'
};
const friend2 = {
  name: 'John'
};
const friend3 = {
  name: 'Jane'
};
const friends = [friend1, friend2];
friends.push(friend3);
console.log(friends);
for (let x = 0; x < friends.length; x++) {
  console.log(friends[x].name);
}
friends.forEach(function (item, index, array) {
  console.log(item.name);
})
for (x in friends) {
  console.log(friends[x].name);
}
const friendList = ['Laurence', 'John', 'Steve', 'Linda', 'Jane'];
const newArray = [];

for (let elem of friendList){
    newArray.push({name:elem})
}
console.log(newArray);
