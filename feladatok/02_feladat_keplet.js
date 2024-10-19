/* (5+4)-(3*(2+1))-6 = -6*/

async function add(numA, numB){
    return numA + numB;
}
function sub(numA, numB){
    return new Promise(resolve => resolve(numA - numB));
}
function mul(numA, numB){
    return numA * numB;
}



async function calculate() {
    let sumRes = await add(5, 4);
    let mulRes = mul(3, await add(2, 1));
    let subRes = await sub(sumRes, mulRes);
    let finResult = await sub(subRes, 6);

    return finResult;
}

calculate().then(result => {
    console.log("Eredmény:", result); 
  });
