import test from "ava";
import { transform } from "babel-core";
import path from "path";

const root = process.cwd();

test("plus", t => {
  const { code } = transform(`const result = 2 ** 2;`, {
    plugins: [require(path.join(root, "index.js"))]
  });
  t.deepEqual(code, `const result = 4;`);
});

test("multiple-plus", t => {
  const { code } = transform(`const result = 2 ** 2 ** 2;`, {
    plugins: [require(path.join(root, "index.js"))]
  });
  t.deepEqual(code, `const result = 16;`);
});
