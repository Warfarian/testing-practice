const capitalize =  require('./capitalize');

it('capitalizes a string', () => {
    expect(capitalize("hello")).toBe("Hello")
});