const isPalindrome = (value) => {
   const str = value.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

   for (let i = 0; i < str.length / 2; i++) {
      let frontIndex = i;
      let backIndex = str.length - i - 1;

      if (str[frontIndex] !== str[backIndex]) {
         return false;
      }
   }
   return true;
};

const recursivePalindrome = (value, i) => {
   const str = value.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

   if (i < str.length / 2) {
      if (str[i] !== str[str.length - i - 1]) {
         return false;
      } else {
         return recursivePalindrome(value, i + 1);
      }
   } else {
      return true;
   }
};

console.log(isPalindrome("katak"));
console.log(isPalindrome("basi"));

console.log(recursivePalindrome("katak", 0));
console.log(recursivePalindrome("basi", 0));

const diagonalArray = (arr) => {
   let n = arr.length;
   let primary = 0;
   let secondary = 0;

   for (let i = 0; i < n; i++) {
      primary += arr[i][i];
      secondary += arr[i][n - 1 - i];
   }

   return Math.abs(primary + secondary);
};

console.log(
   diagonalArray([
      [11, 2, 4, 2],
      [4, 5, 6, 2],
      [10, 8, 12, 2],
      [12, 8, 8, 2],
   ])
);
