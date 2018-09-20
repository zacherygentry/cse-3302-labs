// Zachery Gentry
// 1001144385
// 09/19/2018


//1. Constant input to be used in functional programming
const inputtable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2.
const fiveTable = inputtable.map(value => value * 5);
console.log('\nfiveTable: ' + fiveTable);

const thirteenTable = inputtable.map(value => value * 13);
console.log('\nthirteenTable: ' + thirteenTable);

const squaresTable = inputtable.map(value => value * value);
console.log('\nsquaresTable: ' + squaresTable);



const inputThrough100 = new Array(100).fill(0).map((value, index) => index + 1)

// 3.
const oddMultiplesOf5 = inputThrough100.filter(value => value % 5 == 0 && value % 2 != 0);
console.log('\noddMultiplesOf5: ' + oddMultiplesOf5);

// 4. 
const evenMultiplesOf7Sum = inputThrough100
    .filter(value => value % 7 == 0 && value % 2 == 0)
    .reduce((sum, curr) => sum + curr, 0);

console.log('\nevenMultiplesOf7Sum: ' + evenMultiplesOf7Sum);

// 5.
const cylinder_volume = radius => height => 3.14 * radius * radius * height;

console.log('\ncylinder_volume: ' + cylinder_volume(5)(10));

/*
This is my first try at closure. It works but I don't think it's best example

const makeTag = (beginTag, endTag) => textcontent => beginTag + textcontent + endTag;
const makeTable = textcontent => makeTag('<table>\n','\n</table>')(textcontent);
const makeRow = textcontent => makeTag('<tr>\n','\n</tr>')(textcontent);
const makeCell = textcontent => makeTag('<td>\n', '\n</td>')(textcontent);
*/

// 6.
const makeTable = (tableBeg, tableEnd) => {
    return makeRow = (rowBeg, rowEnd) => {
        return makeCell = (cellBeg, cellEnd, textcontent) => {
            return tableBeg + rowBeg + cellBeg + textcontent + cellEnd + rowEnd + tableEnd;
        }
    }
}

const row = makeTable('<table>\n', '\n</table>');
const cell = row('<tr>\n', '\n</tr>');
console.log('\nHTML Table\n' + cell('<td>\n', '\n</td>', 'This is my cell in a row in a table!'));

// 8.
console.log("\nWelcome to the generic version of problem 3 and 4\n");

const multiplesOf = (isOdd, multipleOf) => inputThrough100
    .filter(value => value % multipleOf == 0 &&
        (isOdd ? value % 2 != 0 : value % 2 == 0));

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Odd or even?\n", (answer) => {
    const isOdd = answer.toLowerCase() == "odd" ? true : false;
    rl.question("What multiple?\n", (answer) => {
        const multipleOf = parseInt(answer);
        console.log('\nBonus: Generic ' + (isOdd ? 'odd' : 'even') + ' multiples of ' + multipleOf + '\n' + multiplesOf(isOdd, multipleOf));
        rl.close();
    })
});