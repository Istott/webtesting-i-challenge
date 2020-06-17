module.exports = {
  succeed,
  fail,
  repair,
  // get,
};

function succeed(item) {
  item.enhancement++

  if(item.enhancement >= 20){
    return item.enchancement === 20;
  }

  return { ...item };
}

function fail(item) {
  if(item.enhancement < 15){
    return item.durablility - 5;
  } else if(item.enhancement >= 15){
    return item.durability - 10;
  }
  
  if(item.enhancement > 16){
    return item.enhancement - 1;
  }

  return { ...item };
}

function repair(item) {
  if(item.durability === 0) {
    return item.durability === 100;
  }

  return { ...item };
}

// function get(item) {
//   return { ...item };
// }
