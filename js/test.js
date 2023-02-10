// for (const [key, value] of Object.entries(localStorage)) {
//     obj = JSON.parse(value);
//     // console.log(key, obj.name);
//     if (key === obj.name) {
//         console.log(obj.name + ' - Match - ' + key);
//     }
// }

// Get the existing data
// var existing = localStorage.getItem('myFavoriteSandwich');

// // If no existing data, use the value by itself
// // Otherwise, add the new value to it
// var data = existing ? existing + ' and blub' : 'tomatoe';

// // Save back to localStorage
// localStorage.setItem('myFavoriteSandwich', data);


// var existing = localStorage.getItem('myLunch');

// // If no existing data, create an array
// // Otherwise, convert the localStorage string to an array
// existing = existing ? JSON.parse(existing) : {};

// // Add new data to localStorage Array
// existing['drink'] = 'soda';

// // Save back to localStorage
// localStorage.setItem('myLunch', JSON.stringify(existing));