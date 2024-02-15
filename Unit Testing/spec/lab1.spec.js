const {capitalizeTextFirstChar} = require('../lab/lab1')

// test cases:
/* 
1-test that the function takes a string it will return type to be a string
2-test that the function takes a string and return it after capitalize it
3-test if the function takes number it will throw type error says parameter should be string
 */

describe('capitalize first letter of each word', () => {
    
    it('should return a string when a string is passed as an argument', () => {
      const result = capitalizeTextFirstChar('letter');
      expect(typeof result).toBe('string');
    });
  
    it('should capitalize the first character of each word in the string', () => {
      const result = capitalizeTextFirstChar("i'm ahmed ali");
      expect(result).toBe("I'm Ahmed Ali");
    });
  
    it('should throw a TypeError if a number is passed as an argument', () => {
        expect(() => capitalizeTextFirstChar(12)).toThrowError();
    });
  });