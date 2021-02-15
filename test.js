let list = [1, 2, 3]

function solution(A) {

    for (I = 1; I < 1000000; I++) {
        if (!A.includes(I)) {
            return I
        }
    }
}

// console.log(solution(list))


function palindrome(word) {

    reverse = word.toLowerCase()
    reverse = reverse.split('').reverse().join('')
    console.log(reverse)

    if (word == reverse) {
        return true
    } else {
        return false
    }
}

// console.log(palindrome('racecar')) 
// console.log(palindrome('table')) 


function FizzBuzz(N) {

    for (i = 1; i <= N; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log('FizzBuzz')
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }

}

// FizzBuzz(15)

function anagram(first, second) {
    first = first.toLowerCase()
    second = second.toLowerCase()


}


// anagram('finder', 'Friend') 
// anagram('hello', 'bye') 


const findVowels = str => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}

//console.log(findVowels(''))

function addUpTo(n) {
    return n * (n + 1) / 2
}

// console.log(addUpTo(6))

// function charCount(str) {
//     let strLower = str.toLowerCase()

//     let result = {}

//     for (i = 0; i < strLower.length; i++) {
//     if (/[a-z0-9]/.test(strLower[i])) {
//         if (result[strLower[i]] > 0) {
//             result[strLower[i]] ++
//         } else {
//             result[strLower[i]] = 1
//         }
//     }
//     }
//     return result
// }

function charCount(str) {
    let result = {}

    for (var char of str) {
        char = char.toLowerCase()

        if (/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1
        }
    }
    return result
}

//console.log(charCount("this is the sentence I am checking 087986"))

// averagePair Solution
function averagePair(arr, num) {
    let start = 0
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start++
        else end--
    }
    return false;
}
// isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}
//isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}

// sameFrequency Solution
function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    for (let j = 0; j < strNum1.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}
// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}
// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}
// areThereDuplicates One Liner Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

// POWER SOLUTION
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}
// FACTORIAL SOLUTION
function factorial(x) {
    if (x < 0) return 0;
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}
// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE SOLUTION
function recursiveRange(x) {
    if (x === 0) return 0;
    return x + recursiveRange(x - 1);
}
// FIBONACCI SOLUTION
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

function numberCompare(num1, num2) {
    return num1 - num2
}

//console.log([6, 4, 15, 10].sort(numberCompare)) 

// function compareLen( str1, str2) {
//     return str1.length - str2.length
// }

// //console.log(['one', 'two', 'three', 'four'].sort(compareLen))



// function solution(S, K) {
//     days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",]

//     for (i = 0; i < days.length; i++) {
//         if (days[i] == S) {
//             newIndex = i + K
//             if (newIndex < 7) {
//                 return days[newIndex]
//             } else {
//                 x = newIndex % 7
//                 return days[x]
//             }

//         } else {
//             continue
//         }
//     }

// }

// console.log(solution("Sat", 10))

// function solution(N) {

//     let x = N.toString()
//     let array = []

//     if (N < 0) { 
//         for (i = 1; i < x.length; i++) {
//             num = parseInt(x[i])
//             array.push(num)

//         }

        
//         for (i = 0; i < array.length; i++) {
//             if (array[i] > 5) {
//                 array.splice((i), 0, 5)
//                 break
//             } else {
//                 continue
//             }
//         }
//         let newNum = array.join("")
//         return -newNum 


        

//     } else {
        

//         for (i = 0; i < x.length; i++) {
//             num = parseInt(x[i])
//             array.push(num)

//         }

        
//         for (i = 0; i < array.length; i++) {
//             if (array[i] < 5) {
//                 array.splice((i), 0, 5)
//                 break
//             } else {
//                 continue
//             }
//         }
//         let newNum = parseInt(array.join(""))
//         return newNum 

//     }
// }


// function solution(S) {
        

    
// }



// console.log(solution(268))

