import {
  Employee,
  Manager,
  WorkerBee,
  SalesPerson,
  Engineer,
} from "./classes.js";

const employee1 = new Employee("Ali", "Marketing");
console.log("employee:", employee1);

const manager1 = new Manager("Mohamed", "Sales", [employee1]);
console.log("manager:", manager1);

const worker1 = new WorkerBee("Salem", "Development", ["ProjectA", "ProjectB"]);
console.log("workerBee:", worker1);

const salesPerson1 = new SalesPerson("Mahmoud", "Sales", 150);
console.log("salesPerson:", salesPerson1);

const engineer1 = new Engineer("Zaki", "Engineering", "MachineX");
console.log("engineer:", engineer1);



async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}

async function getPosts(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    return response.json();
}

async function displayUsersAndPosts() {
    const users = await getAllUsers();
    const usersList = document.getElementById('users-list');

    for (const user of users) {
        const userItem = document.createElement('li');
        userItem.textContent = user.name;

        const posts = await getPosts(user.id);

        if (posts.length > 0) {
            const postsList = document.createElement('ul');

            for (const post of posts) {
                const postItem = document.createElement('li');
                postItem.textContent = post.title;
                postsList.appendChild(postItem);
            }

            userItem.appendChild(postsList);
        }

        usersList.appendChild(userItem);
    }
}

displayUsersAndPosts();