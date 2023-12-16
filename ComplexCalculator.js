/*
   File Name: ComplexCalculator.js
   
   Description: This file contains a complex calculator that performs various calculations to solve mathematical problems.
   
   Author: John Doe
   
   Date: 1st January 2022
*/

function complexCalculator() {
  // Constants
  const PI = 3.14159;
  const EULER = 2.71828;

  // Utility functions
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b === 0) throw new Error('Divide by zero error');
    return a / b;
  }

  // Trigonometric functions
  function sin(x) {
    return Math.sin(x);
  }

  function cos(x) {
    return Math.cos(x);
  }

  function tan(x) {
    return Math.tan(x);
  }

  // Exponential & logarithmic functions
  function exp(x) {
    return Math.exp(x);
  }

  function log(x, base) {
    return Math.log(x) / Math.log(base);
  }

  // Statistical functions
  function average(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
  }

  function median(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  }

  function variance(arr) {
    const avg = average(arr);
    const differences = arr.map((x) => x - avg);
    const squaredDifferences = differences.map((x) => x * x);
    const sum = squaredDifferences.reduce((a, b) => a + b, 0);
    return sum / arr.length;
  }

  // Matrix operations
  class Matrix {
    constructor(rows, columns) {
      this.rows = rows;
      this.columns = columns;
      this.data = [];

      for (let i = 0; i < this.rows; i++) {
        this.data[i] = [];
        for (let j = 0; j < this.columns; j++) {
          this.data[i][j] = 0;
        }
      }
    }

    multiply(matrix) {
      if (this.columns !== matrix.rows) {
        throw new Error('Incompatible matrix dimensions');
      }

      const result = new Matrix(this.rows, matrix.columns);

      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < matrix.columns; j++) {
          for (let k = 0; k < this.columns; k++) {
            result.data[i][j] += this.data[i][k] * matrix.data[k][j];
          }
        }
      }

      return result;
    }

    add(matrix) {
      if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
        throw new Error('Incompatible matrix dimensions');
      }

      const result = new Matrix(this.rows, this.columns);

      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          result.data[i][j] = this.data[i][j] + matrix.data[i][j];
        }
      }

      return result;
    }

    subtract(matrix) {
      if (this.rows !== matrix.rows || this.columns !== matrix.columns) {
        throw new Error('Incompatible matrix dimensions');
      }

      const result = new Matrix(this.rows, this.columns);

      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          result.data[i][j] = this.data[i][j] - matrix.data[i][j];
        }
      }

      return result;
    }

    transpose() {
      const result = new Matrix(this.columns, this.rows);

      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          result.data[j][i] = this.data[i][j];
        }
      }

      return result;
    }
  }

  // Main function
  function main() {
    const x = 2;
    const y = 5;

    const sum = x + y;
    console.log('Sum:', sum);

    const diff = x - y;
    console.log('Difference:', diff);

    const product = multiply(x, y);
    console.log('Product:', product);

    const quotient = divide(x, y);
    console.log('Quotient:', quotient);

    const power = Math.pow(x, y);
    console.log('Power:', power);

    const root = Math.sqrt(x);
    console.log('Square root:', root);

    const fact = factorial(x);
    console.log('Factorial:', fact);

    const sinX = sin(x * PI / 180); // Convert to radians
    console.log('Sine:', sinX);

    const cosX = cos(x * PI / 180); // Convert to radians
    console.log('Cosine:', cosX);

    const tanX = tan(x * PI / 180); // Convert to radians
    console.log('Tangent:', tanX);

    const exponential = exp(x);
    console.log('Exponential:', exponential);

    const logarithm = log(x, 10);
    console.log('Logarithm:', logarithm);

    const numbers = [1, 2, 3, 4, 5];
    const avg = average(numbers);
    console.log('Average:', avg);

    const med = median(numbers);
    console.log('Median:', med);

    const varia = variance(numbers);
    console.log('Variance:', varia);

    const matA = new Matrix(2, 2);
    matA.data = [[1, 2], [3, 4]];

    const matB = new Matrix(2, 2);
    matB.data = [[5, 6], [7, 8]];

    const matProduct = matA.multiply(matB);
    console.log('Matrix Product:', matProduct.data);

    const matSum = matA.add(matB);
    console.log('Matrix Sum:', matSum.data);

    const matDiff = matA.subtract(matB);
    console.log('Matrix Difference:', matDiff.data);

    const matTransposed = matA.transpose();
    console.log('Matrix Transpose:', matTransposed.data);
  }

  main();
}

// Execute the complexCalculator function
complexCalculator();