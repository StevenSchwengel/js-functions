(function() {
    'use strict';

    // ---------------------
    // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
    // ---------------------

    function max(num1, num2) {
      if (num1 > num2) {
        return num1;
      } else {
        return num2;
      }
    }



    // ---------------------
    // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    // ---------------------


    function maxOfThree(a, b, c) {
      var max = Math.max(a, b, c);
      return max;
    }


    // ---------------------
    // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    // ---------------------


    function isVowel(letter) {
      if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {

        return true;
      } else {

        return false;
      }
    }


    // class answers
    function isVowell(char) {
      return 'aeiou'.includes(char)
    }


    // ---------------------
    // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
    // ---------------------

   // var tarray = [];
   //
   // console.log ('hi');
   //
   //  function rovarspraket(text) {
   //     tarray.from.text;
   //
   //    console.log(tarray);
   //
   //  }

      function rovarspraket(str) {
        // double the consonants and place an o between them
        const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

        let rovarspraketString = '';

        for(let i = 0; i < str.length; i++) {
          if(consonants.includes(str[i])) {
            rovarspraketString = rovarspraketString + str[i] + 'o' + str[i];
          } else {
            rovarspraketString = rovarspraketString + str[i];
          }
        }

        return rovarspraketString;

      }

    // my Initial answer...
    //   //  word = "rövarspråket";
    //   var strSplit = str.split(text);
    // }
    //
    //
    // function vowel_check(str1) {
    //   var vowel_list = 'aeiouAEIOU';
    //   var vcount = 0;
    //
    //   for (var x = 0; x < str1.length; x++) {
    //     if (vowel_list.indexOf(str1[x]) !== -1) {
    //       vcount += 1;
    //     }
    //
    //   }
    //   return vcount;
    // }

   // function rovarspraket(text)
   // {
   //   let newText = '';
   //   let lowerCaseString = text.toLowerCase();
   //   console.log(lowerCaseString);
   // }
   //
   // rovarspraket();

    //
    // class answer //
    // function rovarspraket(text) {
    //   let translation = '';
    //
    //   let toLowerCaseString = text.toLowerCase();
    //   let textArray = toLowerCaseString.split('');
    //
    //   for (let i = 0; i < textArray.length; i++) {
    //     'bcdfghklmnpqrstvxyz'.includes(textArray[1]) ?
    //       translation += `${textArray[i]}o${textArray[i]}` :
    //       translation += textArray[i];
    //   }



      // conceptuual logic to work to insert extra spaces

      // for (let i = 1; i <= strsplit.length; i++) {
      //   if ("o" !== str.split()) { // this checks for current letter match
      //     console.log('work in progress');
      //   } else {
      //     console.log(arrayString[i]);
      //     console.log(countletter);
      //   }
      // }

//
// }


      // ---------------------
      // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
      // ---------------------


      // did not label array in function variable

      function sum(myArr) {
        let total = 0;
        for (let i = 0; i < myArr.length; i++) {
          total += myArr[i];
        }
        return total;
      }

      function multiply(myArr) {
        let product = 1;
        for (var i = 0; i < myArr.length; i++) {
          product = product * myArr[i];
        }
        return product;
      }

      // class answers....
      // function multiply(arr) {
      //   let result = 1;
      //   for (let i = 0; i < arr.length; i++) {
      //     result *= arr[i];
      //   }
      // }

      // const sum3 = arr.reduce(function(acc, i) {
      //   return acc + i;
      // });

      // ---------------------
      // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
      // ---------------------


      function reverse(bob) {
        var reversedWords = reverseString(bob);
        return reversedWords;
      }

      // class answer
      function reverse(str) {
        return str.split('').reverse().join('');
      }


      // ---------------------
      // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
      // ---------------------

      function findLongestWord(text) {
        // Step 1. Split the string into an array of strings
        var strSplit = str.split(text);

        // Step 2. Initiate a variable that will hold the length of the longest word
        var longestWord = 0;

        // Step 3. Created the FOR loop
        for (var i = 0; i < strSplit.length; i++) {
          if (strSplit[i].length > longestWord) { // If strSplit[i].length is greater than the word it is compared with...
            longestWord = strSplit[i].length; // ...then longestWord takes this new value
          }
        }
      }


      // class answers

      function findLongestWord(arr) {
        let len = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].length > len) {
            len = arr[i].length;
          }
        }
        return len;
      }


      // ---------------------
      // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
      // ---------------------



      function filterLongWords(text, wordLenPreference) {

        var longestWords = 0;

        // Step 1. Split the string into an array of strings
        var strSplit = str.split(text);

        // Step 2. Find long words of interest.
        for (let i = 0; strgSplit[i].length > wordLenPreference; i++) {
          console.log('working on this');
          // arrayOfWords[(longestWords + 1)] = strgSplit[i];
        }
      }

      // class answer

      function filterLongWords(arr, i) {
        let longWordArray = [];

        for (let j = 0; j < arr.length; j++) {
          if (arr[j].length > i) {
            longWordArray.push(arr[j]);
          }
        }

        return longWordArray;
}
        // ---------------------
        // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
        // ---------------------

        function charFreq(text) {

          // Step 1 sort letters into alphabetical order.

          var sortAlphabets = function(text) {
            return text.split('').sort().join('');
          };

          //  Step 2 split string into an array and count letters in string

          var arrayedString = sortAlphabets.split;
          // var arraysStringLength = arrayedString.length;


          //  Step 3 run loop to compare initial letter and last letter being examined

          // var lastLetter = arraysString[0];
          let countLetter = 0;

          // WORKING ON THIS!

          // for (let i = 1; i <= arraysStringLength; i++) {
          //   if (lastLetter == arryString[i]) // this checks for current letter match
          //   {
          //     countLetter++;
          //   } else {
          //     console.log(arrayString[i]);
          //     console.log(countletter);
          //   }
          // }

        }

        // class answers

        function charFreq(str) {
          const freqList = {};
          const strArray = str.split('');

          for (let i = 0; i < strArray.length; i++) {
            let char = strArray[i];
            freqList[char] = freqList[char] + 1 || 1;
        }

          return freqList
      }



      ////////////////////////////////////////////////////////////////////////
      /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
      ////////////////////////////////////////////////////////////////////////

      console.assert(max(2, 4) === 4, 'function max error');

      console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

      console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

      console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

      console.assert(isVowel('a') === true, 'ERROR function isVowel');

      console.assert(isVowel('b') == false, 'ERROR function isVowel');

      console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

      console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

      console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

      console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

      console.assert(findLongestWord(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

      console.assert(filterLongWords(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

      console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

      console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

      console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

      console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
    })();
