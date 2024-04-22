const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./conversor-monedas.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(10);
    const expected = 10 * 1.07; 
    expect(dollars).toBe(expected); 
});

test("one dollar should be 156.5 yen", function(){
    const yen = fromDollarToYen(10);
    const expected = (10 / 1.07) * 156.5; 
    expect(yen).toBe(expected);
});

test("one yen should be 0.87 pounds", function() {
    const pound = fromYenToPound(10)
    const expected = (10 / 156.5) * 0.87; 
    expect(pound).toBe(expected)
});