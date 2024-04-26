#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGreenBright.black("\n$$$$$$$$$$ CURRENCY CONVERTOR $$$$$$$$$$\n"));
//PKR currency is treated here as Based Currecy
const currency = {
    PKR: 1,
    USD: 0.0036,
    EUR: 0.0034,
    INR: 0.3,
    AED: 0.013,
    HKD: 0.028,
    IRR: 151.05,
    JPY: 0.56,
    KWD: 0.0011,
    TRY: 0.12, //Turkish New Lira
};
let userInput = await inquirer.prompt([
    {
        message: "CURRENCY CONVERT FROM: ",
        type: "list",
        name: "fromCurrency",
        choices: ["PKR", "USD", "EUR", "INR", "AED", "HKD", "IRR", "JPY", "KWD", "TRY"],
    },
    {
        message: "CURRENCY CONVERT TO: ",
        type: "list",
        name: "toCurrency",
        choices: ["PKR", "USD", "EUR", "INR", "AED", "HKD", "IRR", "JPY", "KWD", "TRY"],
    },
    {
        message: "ENTER YOUR AMOUNT: ",
        type: "number",
        name: "amount",
    },
]);
//Initialize variables to store the value from user
let fromAmount = currency[userInput.fromCurrency];
let toAmount = currency[userInput.toCurrency];
let Amount = userInput.amount;
let convertedCurrency = (Amount / fromAmount) * toAmount;
console.log(chalk.yellowBright.italic("\nYour Converted Amount is: ") +
    chalk.greenBright.bold(`${convertedCurrency.toFixed(2)}`) +
    chalk.greenBright.bold(` ${userInput.toCurrency}`));
