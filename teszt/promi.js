Promise.all(Array.apply(null, {length: 8})
    .map(Number.call, Number)
    .filter(e => !(e % 2))
    .map(e => new Promise((r1, r2) => {r1(e + 3)})))
    .then(e => e.join(''))
    .then(console.log)
    .catch(e =>console.error(e))