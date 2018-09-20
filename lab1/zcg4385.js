// Zachery Gentry
// 1001144385
// 09/19/2018


// Constant input to be used in functional programming
const inputtable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fiveTable = inputtable.map(value => value * 5);
console.log('fiveTable: ' + fiveTable);

const thirteenTable = inputtable.map(value => value * 13);
console.log('\nthirteenTable: ' + thirteenTable);

const squaresTable = inputtable.map(value => value * value);
console.log('\nsquaresTable: ' + squaresTable);

const inputThrough100 = new Array(100).fill(0).map((value, index) => index + 1)

const oddMultiplesOf5 = inputThrough100.filter(value => value % 5 == 0 && value % 2 != 0);
console.log('\noddMultiplesOf5: ' + oddMultiplesOf5);

const evenMultiplesOf7Sum = inputThrough100
    .filter(value => value % 7 == 0 && value % 2 == 0)
    .reduce((sum, curr) => sum + curr, 0);

console.log('\nevenMultiplesOf7Sum: ' + evenMultiplesOf7Sum);

const cylinder_volume = radius => height => 3.14 * radius * radius * height;

console.log('\ncylinder_volume: ' + cylinder_volume(5)(10));

/*
const makeTag = (beginTag, endTag) => textcontent => beginTag + textcontent + endTag;
const makeTable = textcontent => makeTag('<table>\n','\n</table>')(textcontent);
const makeRow = textcontent => makeTag('<tr>\n','\n</tr>')(textcontent);
const makeCell = textcontent => makeTag('<td>\n', '\n</td>')(textcontent);
*/

const makeTable = (tableBeg, tableEnd) => {
    return  makeRow = (rowBeg, rowEnd) => {
        return makeCell = (cellBeg, cellEnd, textcontent) => {
            return tableBeg + rowBeg + cellBeg + textcontent + cellEnd + rowEnd + tableEnd;
        }
    }
}

const row = makeTable('<table>\n', '\n</table>');
const cell = row('<tr>\n', '\n</tr>');
console.log('\nHTML Table\n' + cell('<td>\n','\n</td>','This is my cell in a row in a table!'));