const a = '2';
let b = 3;
const c = a + b;
const s = 'lorem ipsum';
const g = ' valami ipsum';
if (a == b) {}
if (a === b) {}
console.log('3' > 2)
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

console.log(s + g);
console.log(s + 45 + g);
console.log(s.includes('lor'));


if (a){

} else  if (b){

}

switch (a){
  case 2:
    console.log('oh');
    break;
  case '2':
    console.log('hopp');
    break;
  default:
    console.log('meh');
    break;
}

let lista = [];
lista.push(1);
lista.push(2,3);
console.log(lista[1]);
let elem = lista.pop();
console.log(elem);
console.log(lista);
elem = lista.shift();
console.log(typeof lista);

const lista1 = [1,2,3,'8pista'];
const ret = [];

lista1.forEach(function(e) {
  ret.push(parseInt(e,10)*2);
});
console.log([ret, ret.indexOf(4), ret.indexOf('4')]);

const emptyObj = {};
const kutya = {
  lab : 4,
  fej : 1,
  ugat: function(){
    console.log('meow');
  }
};
console.log([kutya.lab, kutya.fej]);
kutya.ugat();
console.log(kutya['fej']);

const kutya1 = {lab1: 4, fej1: 1, ugat1: function(){console.log('Meow');}};
kutya1.fej1 = 3;
console.log(kutya1.fej1);
kutya1.ugat1 = function(){console.log('Wuf');}
kutya1.ugat1();
delete kutya1.lab1;
console.log(kutya1);
console.log(typeof kutya1);

