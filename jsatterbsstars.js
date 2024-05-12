// Pyramid Pattern:
// javascript
// Copy code
function pyramidPattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n - i - 1; j++) {
      str += ' ';
    }
    for (let k = 0; k <= i; k++) {
      str += '* ';
    }
    console.log(str);
  }
}

pyramidPattern(5);
// Inverse Pyramid Pattern:
// javascript
// Copy code
function inversePyramidPattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += ' ';
    }
    for (let k = 0; k < n - i; k++) {
      str += '* ';
    }
    console.log(str);
  }
}

inversePyramidPattern(5);
// Right Triangle Pattern:
// javascript
// Copy code
function rightTrianglePattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += '* ';
    }
    console.log(str);
  }
}

rightTrianglePattern(5);
// Hollow Rectangle Pattern:
// javascript
// Copy code
function hollowRectanglePattern(rows, cols) {
  for (let i = 1; i <= rows; i++) {
    let str = '';
    for (let j = 1; j <= cols; j++) {
      if (i === 1 || i === rows || j === 1 || j === cols) {
        str += '* ';
      } else {
        str += '  ';
      }
    }
    console.log(str);
  }
}

hollowRectanglePattern(5, 10);




// Diamond Pattern:
// javascript
// Copy code
function diamondPattern(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += '*';
    }
    str += '\n';
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      str += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}

diamondPattern(5);
// Hourglass Pattern:
// javascript
// Copy code
function hourglassPattern(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      str += ' ';
    }
    for (let k = i; k <= n; k++) {
      str += '* ';
    }
    str += '\n';
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j < i; j++) {
      str += ' ';
    }
    for (let k = i; k <= n; k++) {
      str += '* ';
    }
    str += '\n';
  }
  console.log(str);
}

hourglassPattern(5);
// Right Triangle Pattern (Inverted):
// javascript
// Copy code
function invertedRightTrianglePattern(n) {
  for (let i = n; i >= 1; i--) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += '* ';
    }
    console.log(str);
  }
}

invertedRightTrianglePattern(5);
// Square Pattern:
// javascript
// Copy code
function squarePattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= n; j++) {
      str += '* ';
    }
    console.log(str);
  }
}

squarePattern(5);
// Zigzag Pattern:
// javascript
// Copy code
function zigzagPattern(rows, cols) {
  for (let i = 1; i <= rows; i++) {
    let str = '';
    for (let j = 1; j <= cols; j++) {
      if (i === 1 || i === rows || j === (rows - i + 1)) {
        str += '* ';
      } else {
        str += '  ';
      }
    }
    console.log(str);
  }
}

zigzagPattern(5, 10);