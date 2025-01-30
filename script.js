function solveEquations() {
  // Get the coefficients from the input fields
  const a1 = parseFloat(document.getElementById('a1').value);
  const b1 = parseFloat(document.getElementById('b1').value);
  const c1 = parseFloat(document.getElementById('c1').value);
  const a2 = parseFloat(document.getElementById('a2').value);
  const b2 = parseFloat(document.getElementById('b2').value);
  const c2 = parseFloat(document.getElementById('c2').value);

  // Calculate the determinant
  const determinant = a1 * b2 - a2 * b1;

  if (determinant === 0) {
      // If determinant is 0, the system has no unique solution
      document.getElementById('solution').innerText = "The system has no unique solution (either no solution or infinitely many solutions).";
  } else {
      // Calculate the solutions for x and y
      const x = (c1 * b2 - c2 * b1) / determinant;
      const y = (a1 * c2 - a2 * c1) / determinant;

      // Display the solutions
      document.getElementById('solution').innerText = `x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`;
  }
}