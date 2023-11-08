const isPalindrome = (value) => {
   const str = value.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

   let temporary = "";
   for (let i = str.length - 1; i >= 0; i--) {
      temporary += str[i];
   }
   return str === temporary;
};

const palindromeRecursive = (value, i) => {
   const str = value.replace(/[^A-za-z0-9]/g, "").toLowerCase();

   if (i < str.length / 2) {
      if (str[i] !== str[str.length - i - 1]) {
         return false;
      } else {
         return palindromeRecursive(value, i + 1);
      }
   } else {
      return true;
   }
};

console.log(isPalindrome("Kodok"));
console.log(palindromeRecursive("Kodak", 0));

const diagonalArray = (arr) => {
   const n = arr.length;
   let primary = 0;
   let secondary = 0;

   for (let i = 0; i < n; i++) {
      primary += arr[i][i];
      secondary += arr[i][n - i - 1];
   }

   return Math.abs(primary + secondary);
};

console.log(
   diagonalArray([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
   ])
);
