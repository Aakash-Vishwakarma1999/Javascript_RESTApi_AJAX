const friends = ['Laurence', 'John', 'Steve', 'Linda', 'Jane'];
console.log(friends);
console.log(friends[2]);

const friend1 = {
    name: 'Laurence'
};

const friend2 = {
    name: 'John'
};

const friendList = [friend1, friend2];

friendList[10] = {
    name: 'Linda'
};

console.log(friendList);
// document.querySelector('.output').textContent = friendList[1].name; // dot method
document.querySelector('.output').textContent = friendList[1]['name']  // bracket method both will work the same