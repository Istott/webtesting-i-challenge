module.exports = {
  succeed,
  fail,
  repair,
  // get,
};


function succeed(item) {
  // if(!item){
  //   return {};
  // }

  // item.enhancement++

  // if(item.enhancement >= 20){
  //   return item.enchancement === 20;
  // }

  return item
    ?
      {
        ...item,
        enhancement: 
          item.enhancement < 20 ? item.enhancement + 1 : item.enhancement
      }
    :
      {};
}

function fail(item) {
  if(!item){
    return {};
  }

  const newDurability = item.durability - (item.enhancement >= 15 ? 10 : 5);

  return { 
    ...item,
    durability: newDurability < 0 ? 0 : newDurability,
    enhancement: item.enhancement - (item.enhancement > 16 ? 1 : 0)
  };
}

function repair(item) {
  return { 
    ...item,
      durability: 100
  };
}

// function get(item) {
//   return { ...item };
// }
