function arrToObj(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      if (arr[i] !== undefined) rv[i] = arr[i];
    return rv;
 }

const inforArr=[
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
 ];
 const obj1=arrToObj(inforArr);
 console.log(obj1);
