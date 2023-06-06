// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello World!" when executed', function() {
        expect(sayHello()).toBe("Hello World!");
    });
    it('should return the string "Hello Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello Jane!");
    });
    it('should return the string "Hello Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello Alex!");
    });
    it('should return the string "Hello Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello Pat!");
    });
    it('should return the string "Hello World!" when passed the Boolean of True', function() {
        expect(sayHello(true)).toBe("Hello World!");
    });
    it('should return the string "Hello World!" when passed the Boolean of False', function() {
        expect(sayHello(false)).toBe("Hello World!");
    });
    it('should return the string "Hello World!" when passed Null', function() {
        expect(sayHello(null)).toBe("Hello World!");
    });
    it('should return the string "Hello World!" when passed an empty string', function() {
        expect(sayHello("")).toBe("Hello World!");
    });
    it('should return the string "Hello World!" when passed a number', function() {
        expect(sayHello(2.3)).toBe("Hello World!");
    });
    it('should return the string "Hello World!" when passed a string of a number', function() {
        expect(sayHello("5")).toBe("Hello World!");
    });
    it('should return the string "Hello World!" when passed an Array', function() {
        expect(sayHello([])).toBe("Hello World!");
    });
    it('should return the string "Hello World!" when passed an Object', function() {
        expect(sayHello({})).toBe("Hello World!");
    });
    it('should return the string "Hello World!" when passed an function', function() {
        expect(sayHello(typeof name === "function")).toBe("Hello World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a Boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return false when passed the Boolean of True', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed the Boolean of False', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when passed Null', function() {
        expect(isEven(null)).toBe(false);
    });
    it('should return True when passed "2"', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return True when passed "-4"', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed an odd number', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return true when passed a string of "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed an Array', function() {
        expect(isEven([])).toBe(false);
    });
    it('should return false when passed an Object', function() {
        expect(isEven({})).toBe(false);
    });
    it('should return false when passed an function', function() {
        expect(isEven(typeof number === "function")).toBe(false);
    });
    it("should return false if isEven() is called with no argument", function() {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a Boolean when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return false when passed the Boolean of True', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed the Boolean of False', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed Null', function() {
        expect(isVowel(null)).toBe(false);
    });
    it('should return True when passed "a"', function() {
        expect(isVowel('a')).toBe(true);
    });
    it('should return True when passed "A"', function() {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when passed "y"', function() {
        expect(isVowel('y')).toBe(false);
    });
    it('should return true when passed 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed "banana"', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when passed Infinity', function() {
        expect(isVowel(Infinity)).toBe(false);
    });
    it('should return false when passed an Array', function() {
        expect(isVowel([])).toBe(false);
    });
    it('should return false when passed an Object', function() {
        expect(isVowel({})).toBe(false);
    });
    it('should return false when passed an function', function() {
        expect(isVowel(typeof x === "function")).toBe(false);
    });
    it("should return false if isEven() is called with no argument", function() {
        expect(isVowel()).toBe(false);
    });
});

describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return a number when called', function() {
        expect(typeof add()).toBe("number");
    });
    it('should return 5 when passed 2, 3', function() {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when passed -3, -9', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed "5", 6', function() {
        expect(add('5', 6)).toBe(11);
    });
    it('should return 6 when passed "-4", "10"', function() {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when passed "banana" and "split"', function() {
        expect(add('banana', 'split')).toBe(NaN);
    });
    it('should return NaN when passed 2, "apples"', function() {
        expect(add(2, 'apples')).toBe(NaN);
    });
    it("should return NaN if add() is called with no argument", function() {
        expect(add()).toBe(NaN);
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
});