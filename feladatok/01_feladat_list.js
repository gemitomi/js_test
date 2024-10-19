const lista = [false, 1, "2", [3, 4], {ot: "5"}, 8, "bazmeg"];
const bucket ={bool: [], string: [], number: [], list: [], object: [] };

function control(){
    
    for (let i = 0; i < lista.length; i++) {
        if (typeof lista[i] === "boolean"){
            bucket.bool.push(lista[i]);
        }
        else if (typeof lista[i] === "string"){
            bucket.string.push(lista[i]);
        }
        else if (typeof lista[i] === "number"){
            bucket.number.push(lista[i]);
        }
        else if (typeof lista[i] === "object"){
            if (Array.isArray(lista[i]) == true){
                bucket.list.push(lista[i]);
            }
            else {
                bucket.object.push(lista[i]);
            }
        }
    }
}

console.log(lista);
control();

console.log(bucket);

