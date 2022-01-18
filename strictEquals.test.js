function strictEquals(a, b) {
  let compareValues = Object.is(a, b);
  if (Object.is(NaN, b) && Object.is(a, NaN)) {
    compareValues = false;
  }
  if (Object.is(a, -0) && Object.is(0, b)) {
    compareValues = true;
  }
  if (Object.is(-0, b) && Object.is(a, 0)) {
    compareValues = true;
  }

  return compareValues;
}

describe("Given a strictEquals function", () => {
  describe("When it receives values: a=1 and b=1", () => {
    test("Then it should return: true", () => {
      // Arrange
      const receivedValue1 = 1;
      const receivedValue2 = 1;
      const expectedValue = true;

      // Act
      const returnedValue = strictEquals(receivedValue1, receivedValue2);

      // Assert
      expect(returnedValue).toBe(expectedValue);
    });
  });

  describe("When it receives values: a=NaN and b=NaN", () => {
    test("Then it should return: true", () => {
      // Arrange
      const receivedValue1 = NaN;
      const receivedValue2 = NaN;
      const expectedValue = false;

      // Act
      const returnedValue = strictEquals(receivedValue1, receivedValue2);

      // Assert
      expect(returnedValue).toBe(expectedValue);
    });
  });

  describe("When it receives values: a=0 and b=-0", () => {
    test("Then it should return: true", () => {
      // Arrange
      const receivedValue1 = 0;
      const receivedValue2 = -0;
      const expectedValue = true;

      // Act
      const returnedValue = strictEquals(receivedValue1, receivedValue2);

      // Assert
      expect(returnedValue).toBe(expectedValue);
    });
  });
  describe("When it receives values: a=-0 and b=0", () => {
    test("Then it should return: true", () => {
      // Arrange
      const receivedValue1 = -0;
      const receivedValue2 = 0;
      const expectedValue = true;

      // Act
      const returnedValue = strictEquals(receivedValue1, receivedValue2);

      // Assert
      expect(returnedValue).toBe(expectedValue);
    });
  });

  describe("When it receives values: a=1 and b='1'", () => {
    test("Then it should return: true", () => {
      // Arrange
      const receivedValue1 = 1;
      const receivedValue2 = "1";
      const expectedValue = false;

      // Act
      const returnedValue = strictEquals(receivedValue1, receivedValue2);

      // Assert
      expect(returnedValue).toBe(expectedValue);
    });
  });

  describe("When it receives values: a=true and b=false", () => {
    test("Then it should return: true", () => {
      // Arrange
      const receivedValue1 = true;
      const receivedValue2 = false;
      const expectedValue = false;

      // Act
      const returnedValue = strictEquals(receivedValue1, receivedValue2);

      // Assert
      expect(returnedValue).toBe(expectedValue);
    });
  });

  describe("When it receives values: a=false and b=false", () => {
    test("Then it should return: true", () => {
      // Arrange
      const receivedValue1 = false;
      const receivedValue2 = false;
      const expectedValue = true;

      // Act
      const returnedValue = strictEquals(receivedValue1, receivedValue2);

      // Assert
      expect(returnedValue).toBe(expectedValue);
    });
  });

  describe("When it receives values: a='Water' and b='oil'", () => {
    test("Then it should return: true", () => {
      // Arrange
      const receivedValue1 = "Water";
      const receivedValue2 = "oil";
      const expectedValue = false;

      // Act
      const returnedValue = strictEquals(receivedValue1, receivedValue2);

      // Assert
      expect(returnedValue).toBe(expectedValue);
    });
  });
});
