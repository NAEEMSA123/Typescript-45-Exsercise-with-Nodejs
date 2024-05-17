"use strict";
// Array of Current Users
let current_users = ["Naeem", "Shuraim", "Sarim", "Abiyan", "urwa"];
// Array of New Users
let new_users = ["Mazia", "Ayesha", "Fahad", "Dawood", "Amir"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`);
    }
    else {
        console.log(`Yes ${new_user}, Is still in available list`);
    }
}
