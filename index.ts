#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bgGreenBright.black("\n$$$$$$$$$$ CURRENCY CONVERTOR $$$$$$$$$$\n")
);

//Define an interface that allows you to handle multiple key-value pairs dynamically
interface Currency {
  [currencyCode: string]: number;
}

//PKR currency is treated here as Based Currency
const currency: Currency = {
  PKR: 1, //Pakistan Rupee //BASED CURRENCY
  USD: 0.0036, //US Dollar
  EUR: 0.0034, // Euro
  INR: 0.3, //India Rupee
  AED: 0.013, //UAE Dirham
  HKD: 0.028, //Hong Kong Dollar
  IRR: 151.05, //Iran Rial
  JPY: 0.56, //Japan Yen
  KWD: 0.0011, //Kuwait Dinar
  TRY: 0.12, //Turkish New Lira
};

let condition = true;
while (condition) {
  let userInput = await inquirer.prompt([
    {
      message: "CURRENCY CONVERT FROM: ",
      type: "list",
      name: "fromCurrency",
      choices: Object.keys(currency),
    },
    {
      message: "CURRENCY CONVERT TO: ",
      type: "list",
      name: "toCurrency",
      choices: Object.keys(currency),
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

  //Formula to calculate the converted currency
  let convertedCurrency = (Amount / fromAmount) * toAmount;

  console.log(
    chalk.yellowBright.bold("\nYour Converted Amount is: ") +
      chalk.greenBright.bold(`${convertedCurrency.toFixed(2)}`) +
      chalk.greenBright.bold(` ${userInput.toCurrency}\n\n`)
  );

  //Create a option for user to convert more or exit
  let convertMore = await inquirer.prompt({
    message: "Do you want to convert more currency? ",
    name: "convertMoreCurrency",
    type: "confirm",
    default: "true",
  });

  convertMore.convertMoreCurrency ? (condition = true) : (condition = false);
}
