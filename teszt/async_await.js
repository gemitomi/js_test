function promiseFv(item){
    return new Promise(function (resolve, reject) {
        resolve(item + 'p');
    });
}
async function foo(item) {
    return await promiseFv(item);
}
console.log(await foo(1) + "alma");
