const regex = /([a-zA-Z\W])/g

function matchString(arr) {
  let string = arr, result;

  //check to see if arr includes a string

  console.log("Output : " + regex + ' ' + result);
}

console.log(matchString(["$hello!", "%%^%%", "test!"]));