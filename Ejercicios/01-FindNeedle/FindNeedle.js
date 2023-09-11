function FindNeedle(haystack, needle) {
  // Your code here:

  //OPCION 1:
  // haystack = haystack.split('');
  // needle = needle.split('');

  // let pointer;
  // let index;

  // for(let i = 0; i < haystack.length; i++){
  //   index = i;
  //   pointer = i;
  //   for(let j = 0; j < needle.length; j++){
  //     if(needle[j] === haystack[pointer]){
  //       pointer++;
  //       if(j === needle.length -1){
  //         return index;
  //       }
  //     } else {
  //       break;
  //     }
  //   }
  // }
  // return -1;

  //OPCION 2:
  for(let i = 0; i < haystack.length; i++){
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }
  return -1;

  // OPCION 3: + corta;

  // return haystack.search(needle)
}



module.exports = FindNeedle;
