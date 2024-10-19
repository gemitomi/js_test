function hatvany(x, n){
    let y = Math.pow(x, n);
    return y;
    
}

function subres(x, n){
    let lista = [];
    for (let i = 0; i < n; i++) {
        let z = Math.pow(x, i);
        lista.push(z);
    }
    return lista;
}

const r = {result: hatvany(2,3), subresult: subres(2,3)};
console.log(r);