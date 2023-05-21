const fs = require('fs');
const path = require('path');

// Middleware for logging incoming requests
const logger = ((req, res, next) => {
    const loggersFilePath = path.join(__dirname, '../db/loggers.json');

    if (!fs.existsSync(loggersFilePath)) {
        fs.writeFileSync(loggersFilePath, '[]');
    }

    const logs = JSON.parse(fs.readFileSync(loggersFilePath, 'utf8'));

    // Get the current date and time in Indian Standard Time (IST)
    const date = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour12: false };
    const ISTTime = date.toLocaleString('en-US', options);

    logs.push({ method: `${req.method}`, endpoint: `${req.url}`, createdAt: ISTTime });

    fs.writeFileSync(loggersFilePath, JSON.stringify(logs));

    next();
});

module.exports = { logger };