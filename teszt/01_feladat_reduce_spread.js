const list = [false, 1, "2", [3, 4], {ot: "5"}, 8, "bazmeg"];
const bucket ={bool: [], string: [], number: [], list: [], object: [] };

const getType = (input) => {
    switch (true) {
      case typeof input === "boolean":
        return "bool";
      case Array.isArray(input):
        return "list";
      default:
        return typeof input;
    }
  };

const result = list.reduce((accumulator, current) => {
    const itemType = getType(current);
    accumulator[itemType].push(current);
    return accumulator;
  }, bucket);
  
  console.log(bucket);
  console.log(result);

  const result1 = list.reduce((accumulator, current) => {
    const itemType = getType(current);
    return {
      ...accumulator,
      [itemType]: [...accumulator[itemType], current],
    };
  }, bucket);
  
  console.log(bucket);
  console.log(result1);