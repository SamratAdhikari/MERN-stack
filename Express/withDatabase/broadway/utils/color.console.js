import chalk from "chalk";

export const printWhite = (value) => {
    return console.log(chalk.hex("#FFF")(value));
};
export const printPink = (value) => {
    return console.log(chalk.hex("#DC0083")(value));
};
export const printPurple = (value) => {
    return console.log(chalk.hex("#4A249D")(value));
};
