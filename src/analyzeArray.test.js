let analyzeArray = require('./analyzeArray');


it("analyze array and display properties", () => {
    expect(analyzeArray([1,2,3,4,5])).toStrictEqual({ max: 5, min: 1, avg: 3, length: 5 });
    expect(analyzeArray([1,1,1,1,1])).toStrictEqual({ max: 1, min: 1, avg: 1, length: 5 });
    expect(analyzeArray([0,0])).toStrictEqual({ max: 0, min: 0, avg: 0, length: 2 });
})