(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(num1, num2) {
     if(num1 > num2){
       return num1;
     } else {
       return num2;
     }
    }



  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------


   function maxOfThree(a, b, c)
     {
     var max = Math.max(a, b, c);
     return max;
     }


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------


    function isVowel(letter)
     {
         if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" ) {
             result = true;
             return true;
         }
         else{
             result = false;
             return false;
         }
     }



  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------



   function rovarspraket(word)
     {
    //  word = "rövarspråket";
      var strSplit = str.split(text);
     }


     function vowel_check(str1)
     {
       var vowel_list = 'aeiouAEIOU';
       var vcount = 0;

       for(var x = 0; x < str1.length ; x++)
       {
         if (vowel_list.indexOf(str1[x]) !== -1)
         {
           vcount += 1;
         }

       }
       return vcount;
     }

// conceptuual logic to work to insert extra spaces

     for (i = 1; i <= strsplit.Length; i++) {
        if ("o" <> strSplit[i]) // this checks for current letter match
        {
          var countletter ++;
        }
         else {
           console.log(arrayString[i]);
           console.log(countletter);
         }
      }





  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------


    function sum(myArr)
    {
        let total = 0;
        for(var i in a){
          total += a[i];
        return total;
        }



    function multiply(myArr) {
        for (var i=0; i < arr1.length; i++){
        myArr[i] = myArr[i]*myArr[i - 1];
         }
       return myArr[i];
     }

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------


    function reverse(bob)
    {
    var reversedWords = reverseString(bob);
    return reversedWords;
    }


  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

    function findLongestWord(text)
      {
      // Step 1. Split the string into an array of strings
      var strSplit = str.split(text);

      // Step 2. Initiate a variable that will hold the length of the longest word
      var longestWord = 0;

      // Step 3. Created the FOR loop
       for(var i = 0; i < strSplit.length; i++){
         if(strSplit[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
     	longestWord = strSplit[i].length; // ...then longestWord takes this new value
          }
       }
     }

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------



    function filterLongWords(text, wordLenPreference) {

    var longestWords = 0;

    // Step 1. Split the string into an array of strings
    var strSplit = str.split(text);

    // Step 2. Find long words of interest.
    for (var i = 0; strgSplit[i].length > wordLenPreference; i++)
      {
      var arrayOfWords[(longestWords + 1)] = strgSplit[i];
      }
    }



  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  charFreq(text)
     {

   // Step 1 sort letters into alphabetical order.

    var sortAlphabets = function(text) {
      return text.split('').sort().join('');
      };

  //  Step 2 split string into an array and count letters in string

    var arrayedString = sortAlphabets.split;
    var arraysStringLength = arrayedString.length;


  //  Step 3 run loop to compare initial letter and last letter being examined

    var lastLetter = arraysString[0];
    let countLetter = 0;

    for (i = 1; i <= arraysStringLength; i++){
       if (lastLetter == arryString[i]) // this checks for current letter match
       {
         countLetter++;
       }
        else {
          console.log(arrayString[i]);
          console.log(countletter);
        }
      }

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

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
