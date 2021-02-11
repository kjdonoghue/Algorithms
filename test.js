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

    for (i=1; i<= N; i++) {
        if ((i % 3 ==0) && (i % 5 == 0)) {
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
    for(let char of str.toLowerCase()) {
      if(vowels.includes(char)) {
        count++
      }
    }
    return count
  }

console.log(findVowels('Heabcdefgiii'))