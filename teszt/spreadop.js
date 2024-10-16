const a = ["hello", true, 7];
const b = [1,2, ...a]; /* elhelyezi az a osszes elemét*/
console.log(b);
const c = {a: "hello", b: true, c: 7};
const d = {d: "foo", ...c};
console.log(d); 