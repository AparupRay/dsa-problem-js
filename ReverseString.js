const reverseString = (s) => {
  console.log(s);
  let arr = s.split("");
  let len = s.length;
  console.log("Length: ", len, s[len - 1]);
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    //swap interger concept using temp variable.
    let temp = arr[i];
    console.log(temp);
    arr[i] = arr[len - 1 - i];
    // console.log("s[i]", s[i]);
    // console.log("len-1-i", len - 1 - i);
    // console.log("s[len-1-i]", s[len - 1 - i]);
    arr[len - 1 - i] = temp;
  }
  return arr.join("");
};

console.log("Reverse string: ", reverseString("aparupray"));
