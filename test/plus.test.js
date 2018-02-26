import test from "ava";
import { transform } from "babel-core";
import path from "path";

const root = process.cwd();

test("plus", t => {
  const { code } = transform(`const result = 1 + 2;`, {
    plugins: [require(path.join(root, "index.js"))]
  });
  t.deepEqual(code, `const result = 3;`);
});

test("multiple-plus", t => {
  const { code } = transform(`const result = 1 + 2 + 3 + 4 + 5;`, {
    plugins: [require(path.join(root, "index.js"))]
  });
  t.deepEqual(code, `const result = 15;`);
});

test("multiple-plus", t => {
  const { code } = transform(`const result = 0.1 + 0.2;`, {
    plugins: [require(path.join(root, "index.js"))]
  });
  t.deepEqual(code, `const result = 0.3;`);
});
