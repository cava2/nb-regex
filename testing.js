const exercises = [
  {
    name: "Decimal Numbers",
    re: /^-?\d{1,3}(?:,\d{3})*(?:\.\d+)?(?:e[+-]?\d+)?$/i,
    inputs: [
      "3.14529",
      "-255.34",
      "128",
      "1.9e10",
      "123,340.00",
    ]
  },
  {
    name: "Matching Phone Numbers",
    re: /^1?\s*\(?(\d{3})\)?[-\s]?(\d{3})[-\s]?(\d{4})$/,
    inputs: [
      "415-555-1234",
      "650-555-2345",
      "(416)555-3456",
      "202 555 4567",
      "4035555678",
      "1 416 555 9292",
    ]
  }
];

exercises.forEach(({ name, re, inputs }) => {
  console.log(`\n=== ${name} ===`);
  inputs.forEach(input => {
    console.log(
      `${input}  →  ${re.test(input) ? "✅" : "❌"}`
    );
  });
});