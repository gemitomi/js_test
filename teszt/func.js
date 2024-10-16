function mw(dep) {
    return function (result, next) {
        result.key = 11 + dep.some;
        return next();
    };
};
const mwFunction = mw({some: 'value'});
const result = {};
mwFunction(result,function() {/*console.log('bam');*/})
console.log(result);