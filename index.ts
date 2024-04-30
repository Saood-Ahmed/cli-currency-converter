import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.yellow.bold("\n\t Welcome To My Currency Converter \t\n"));

// List Of Currencies
let exchange_rate : any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70,
} 

//Prompt User to provide currency to convert from and into 

let user_ans = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the Currency to convert from:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
])

let from_amount = exchange_rate[user_ans.from_currency];
let to_amount = exchange_rate[user_ans.to_currency];
let amount = user_ans.amount;

//Conversion Formula
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

// Display the amount
console.log(`Converted Amount: = ${chalk.redBright.bold(converted_amount.toFixed(2))}`);