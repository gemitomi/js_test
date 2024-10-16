const nums = [1,2,3,4,5,6,7,8,9,10,11,12];
const one = nums.map(v => v + 1)
const two = nums.map(v => {return v + 1;})
const three = nums.map((v, i) => v + i)
console.log(nums);
console.log(one);
console.log(two);
console.log(three);