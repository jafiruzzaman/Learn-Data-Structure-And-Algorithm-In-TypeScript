export type TestCase<T, R> = {
  input: T;
  expected?: R;
};

export function runTests<T, R>(
  fn: (input: T) => R,
  testCases: TestCase<T, R>[],
  title?: string
): void {
  if (title) {
    console.log(`\n===== ${title} =====`);
  }

  testCases.forEach((test, index) => {
    try {
      const result = fn(test.input);

      if (test.expected !== undefined) {
        const passed = JSON.stringify(result) === JSON.stringify(test.expected);

        console.log(
          `Test ${index + 1}:`,
          passed ? "✅ PASSED" : "❌ FAILED",
          "| Output:",
          result,
          "| Expected:",
          test.expected
        );
      } else {
        console.log(`Test ${index + 1}: Output →`, result);
      }
    } catch (error) {
      console.log(`Test ${index + 1}: ❌ ERROR`, error);
    }
  });
}
