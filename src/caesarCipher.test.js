let caesarCipher = require('./caesarCipher');

it("Caeser Cipher encrypting properly", () => {
    expect(caesarCipher("xyz",3)).toBe("abc");
    expect(caesarCipher("hello",3)).toBe("khoor");
    expect(caesarCipher("H@ewmscdn ,!",3)).toBe("K@hzpvfgq ,!");
})
