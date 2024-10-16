function promiseFv(item) {
    return new Promise(function (resolve, reject) {
        resolve(item + 'p');
    });
}
function normalFv(item) { return item + 'n'; }
promiseFv('1')
    .then(normalFv)
    .then(promiseFv)
    .then(function (item) { return item + '2';})
    .then(console.log)
    .catch(function (e) {
        console.log('error: ' + e);
    });