// Zachery Gentry
// 1001144385
// 09/19/2018


// Constant input to be used in functional programming
const inputtable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fiveTable = inputtable.map(value => value * 5);
console.log(fiveTable);

const thirteenTable = inputtable.map(value => value * 13);
console.log(thirteenTable);

const squaresTable = inputtable.map(value => value * value);
console.log(squaresTable);

const inputThrough100 = new Array(100).fill(0).map((value, index) => index + 1)
console.log(inputThrough100);

const oddMultiplesOf5 = inputThrough100.filter(value => value % 5 == 0 && value % 2 != 0);
console.log(oddMultiplesOf5);

const evenMultiplesOf7Sum = inputThrough100
    .filter(value => value % 7 == 0 && value % 2 == 0)
    .reduce((sum, curr) => sum + curr, 0);

console.log(evenMultiplesOf7Sum);

const cylinder_volume = radius => height => 3.14 * radius * radius * height;

console.log(cylinder_volume(5)(10));

const makeTag = (beginTag, endTag) => textcontent => beginTag + textcontent + endTag;
const makeTable = textcontent => makeTag('<table>','</table>'(textcontent));
const makeRow = textcontent => makeTag('<tr>','</tr>'(textcontent));
console.log(makeTag('(',')')('Hello'));