
const fs = require('fs');
const path = require('path');


// Handle POST requests to "/users" and save user information to a JSON file
exports.postUser = (req, res) => {
    const user = req.body;

    const usersFilePath = path.join(__dirname, '../db/users.json');

    if (!fs.existsSync(usersFilePath)) {
        fs.writeFileSync(usersFilePath, '[]');
    }

    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

    users.push(user);

    fs.writeFileSync(usersFilePath, JSON.stringify(users));

    res.status(200).send('User information saved successfully.');
};

// Handle GET requests to "/users" and retrieve user information from the JSON file
exports.getUser = (req, res) => {
    const usersFilePath = path.join(__dirname, '../db/users.json');
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

    // Check if an ID query parameter is provided in the request
    const id = req.query.id;
    if (id) {
        const foundUser = users.filter(user => user.id == id);
        if(foundUser.length > 0) {
            res.json(foundUser);
        }
        else{
            res.status(404).send(`User with ID ${id} not found.`)
        }
    } else {
        res.json(users);
    }
};