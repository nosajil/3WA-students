// const chalk = require('chalk');

// console.log(chalk.blue('Marianne'));
// console.log(chalk.red('Jason'));
// console.log(chalk.green('Nathan'));
// console.log(chalk.yellow('Steve'));

const host = 'localhost';
const port = 8000;
import http from 'node:http'
import fs from 'fs';
import axios from 'axios';

const server = http.createServer((req, res) => {
        axios.get('http://www.google.com')
        .then(response => {
            const htmlContent = response.data;
            fs.writeFileSync('google.html', htmlContent);
            fs.readFile('google.html', 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.write('<h1>Error reading HTML file</h1>');
                    res.end();
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                }
            });
        })

});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});