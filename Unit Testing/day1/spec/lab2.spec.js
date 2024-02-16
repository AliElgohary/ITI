const User = require('../lab/lab2');


describe('User class', () => {
  let user;

  beforeEach(() => {
    user = new User('Ali', 'alielgohary');
  });

  describe('add To Cart', () => {
    it('add a product to the cart', () => {
      const product = { name: 'Add product', price: 30 };
      user.addToCart(product);
      expect(user.cart).toContain(product);
    });
  });

  describe('calculate Total Cart Price', () => {
    it('return the total price of the cart', () => {
      const products = [
        { name: 'Phone', price: 10 },
        { name: 'TV', price: 20 },
      ];
      user.cart = products;
      expect(user.calculateTotalCartPrice()).toBe(30);
    });

    it('should return 0 if the cart is empty', () => {
      expect(user.calculateTotalCartPrice()).toBe(0);
    });
  });

  describe('checkout method', () => {
    it('return true if payment is verified', () => {
      const paymentModel = {
        goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
        returnBack: jasmine.createSpy('returnBack'),
        isVerify: jasmine.createSpy('isVerify').and.returnValue(true),
      };

      const result = user.checkout(paymentModel);

      expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
      expect(paymentModel.returnBack).toHaveBeenCalled();
      expect(paymentModel.isVerify).toHaveBeenCalled();
      expect(result).toBe(true);
    });

    it('false if payment is not verified', () => {
      const paymentModel = {
        goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
        returnBack: jasmine.createSpy('returnBack'),
        isVerify: jasmine.createSpy('isVerify').and.returnValue(false),
      };

      const result = user.checkout(paymentModel);

      expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
      expect(paymentModel.returnBack).toHaveBeenCalled();
      expect(paymentModel.isVerify).toHaveBeenCalled();
      expect(result).toBe(false);
    });
  });
});
