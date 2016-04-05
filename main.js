(function(){
  'use strict';

  var total = items.reduce(function(total, current, index) {

    if( total.hasOwnProperty("price") ){
      return total.price + current.price;
    }else{
      return total + current.price;
    }
  });
console.log(total);

  var average = total / items.length;

console.log("The average price is",average);
////////////////////////////////////////////
///////////////////////////////////////////
//////////////////////////////////////////
var filtered = items.filter(function(item){
  return item.price >=14 && item.price <=18;
});

console.log("Items that cost between $14.00 USD and $18.00 USD:",filtered);
////////////////////////////////////////////
///////////////////////////////////////////
//////////////////////////////////////////
  var code = items.filter(function(cur){
    return cur.currency_code === "GBP";
  });

console.log("1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18",code);
////////////////////////////////////////////
///////////////////////////////////////////
//////////////////////////////////////////
  var mat = items.filter(function(element, index, array){
    if (element.materials.indexOf('wood') >= 0){
      return true;
    }else {
      return false;
    }
  })
  mat.forEach(function(value, index, array){
    console.log(value.title,' is made of wood.')
  })
////////////////////////////////////////////
///////////////////////////////////////////
//////////////////////////////////////////
  var moreMaterials = items.filter(function(element){
    if (element.materials.length >= 8){
      return true;
    }else {
      return false;
    }
  });

  console.log(moreMaterials);
  moreMaterials.forEach(function(value){
    console.log(value.title,' has ', value.materials.length," materials: ", value.materials);
  });
  ////////////////////////////////////////////
  ///////////////////////////////////////////
  //////////////////////////////////////////
  var sellers = items.filter(function(who){
    return who.who_made === "i_did";
  });

  console.log("18 were made by their sellers",sellers);


  }());
