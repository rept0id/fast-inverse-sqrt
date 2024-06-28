function fastInverseSqrt(x) {
  var i;
  var x2 = x * 0.5;
  var y = x;
  var threehalfs = 1.5;

  // Convert floating point value in y to binary representation (bit level manipulation)
  var buf = new ArrayBuffer(4);
  (new Float32Array(buf))[0] = y;
  i = (new Uint32Array(buf))[0];

  // Magic number
  i = 0x5f3759df - (i >> 1); // turns out in js we can do binary shift !
  (new Uint32Array(buf))[0] = i;

  // Convert binary representation back to floating point
  y = (new Float32Array(buf))[0];

  // One iteration of Newton's method to improve the initial estimate
  y = y * (threehalfs - (x2 * y * y));

  return y;
}

// Example usage:
console.log(fastInverseSqrt(7));  // Output should be ~0.37 (which is 1/sqrt(7))

