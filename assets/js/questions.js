const questions = [
    {
        question: "Palindrome Number Checker",
        description: "A palindrome number is a which remains the same on reversal. For example, some palindrome" +
        " numbers are 8, 121, 212, 12321, -454. To check whether a number is a palindrome or not first we reverse " +
        "it and then compare the number obtained with the original number, if both are same then the number is " +
        "palindrome otherwise not.",
        answers: [
            {
                lang: "C",
                answer: `#include <stdio.h>
 
int main()
{
   int n, reverse = 0, t;
 
   printf("Enter a number to check if it is a palindrome or not\\n");
   scanf("%d", &n);
 
   t = n;
 
   while (t != 0)
   {
      reverse = reverse * 10;
      reverse = reverse + t%10;
      t = t/10;
   }
 
   if (n == reverse)
      printf("%d is a palindrome number.\\n", n);
   else
      printf("%d isn't a palindrome number.\\n", n);
 
   return 0;
}`
            }, {
                lang: "java",
                answer: `import java.util.Scanner;
public class Palindrome
{
    public static void main(String args[])
    {
        int n, m, a = 0,x;
        Scanner s = new Scanner(System.in);
        System.out.print("Enter any number:");
        n = s.nextInt();
        m = n;
        while(n > 0)
        {
            x = n % 10;
            a = a * 10 + x;
            n = n / 10;
        }
        if(a == m)
        {
            System.out.println(m+" is a palindrome number.");
        }
        else
        {
            System.out.println(m+" isn't a palindrome number.");
        }
    }
}`
            }, {
                lang: "python",
                answer: `def is_palindrome(n):
    """Check if a number is palindrome"""
    original = n
    reversed_num = 0
    
    # Handle negative numbers
    if n < 0:
        return False
    
    while n > 0:
        reversed_num = reversed_num * 10 + n % 10
        n //= 10
    
    return original == reversed_num

# Example usage
number = int(input("Enter a number: "))
if is_palindrome(number):
    print(f"{number} is a palindrome number.")
else:
    print(f"{number} isn't a palindrome number.")`
            }, {
                lang: "javascript",
                answer: `function isPalindrome(n) {
    // Convert to string and check if it reads the same forwards and backwards
    const str = Math.abs(n).toString();
    return str === str.split('').reverse().join('');
}

// Alternative mathematical approach
function isPalindromeNum(n) {
    if (n < 0) return false;
    
    let original = n;
    let reversed = 0;
    
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    
    return original === reversed;
}

// Example usage
const number = parseInt(prompt("Enter a number:"));
if (isPalindrome(number)) {
    console.log(\`\${number} is a palindrome number.\`);
} else {
    console.log(\`\${number} isn't a palindrome number.\`);
}`
            }
        ]
    },
    {
        question: "Fibonacci Series Generator",
        description: "The Fibonacci numbers are the numbers in the following integer sequence.\n" +
        "\n" +
        "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..",
        answers: [
            {
                lang: "C",
                answer: `#include<stdio.h>
int fib(int n)
{
   if (n <= 1)
      return n;
   return fib(n-1) + fib(n-2);
}
 
int main ()
{
  int n = 9;
  printf("%d", fib(n));
  getchar();
  return 0;
}`
            }, {
                lang: "java",
                answer: `class fibonacci
{
    static int fib(int n)
    {
    if (n <= 1)
       return n;
    return fib(n-1) + fib(n-2);
    }
      
    public static void main (String args[])
    {
    int n = 9;
    System.out.println(fib(n));
    }
}`
            }, {
                lang: "python",
                answer: `def fibonacci(n):
    """Generate fibonacci number at position n"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

def fibonacci_series(count):
    """Generate fibonacci series up to count numbers"""
    series = []
    for i in range(count):
        series.append(fibonacci(i))
    return series

# Optimized version using memoization
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]

# Example usage
n = 10
print(f"Fibonacci series: {fibonacci_series(n)}")
print(f"10th Fibonacci number: {fibonacci_memo(n)}")`
            }, {
                lang: "javascript",
                answer: `// Recursive approach
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Iterative approach (more efficient)
function fibonacciIterative(n) {
    if (n <= 1) return n;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// Generate fibonacci series
function fibonacciSeries(count) {
    const series = [];
    for (let i = 0; i < count; i++) {
        series.push(fibonacciIterative(i));
    }
    return series;
}

// Example usage
console.log("Fibonacci series:", fibonacciSeries(10));
console.log("10th Fibonacci number:", fibonacciIterative(10));`
            }
        ]
    }, {
        question: "Factorial Of A Number",
        description: "Factorial of a non-negative integer, is multiplication of all integers smaller than or equal to n. For example factorial of 6 is 6*5*4*3*2*1 which is 720.",
        answers: [
            {
                lang: "C",
                answer: `unsigned int factorial(unsigned int n)
{
    if (n == 0)
      return 1;
    return n*factorial(n-1);
}
 
int main()
{
    int num = 5;
    printf("Factorial of %d is %d", num, factorial(num));
    return 0;
}
`
            }, {
                lang: "java",
                answer: `// Java program to find factorial of given number
class Test
{
    // method to find factorial of given number
    static int factorial(int n)
    {
        if (n == 0)
          return 1;
         
        return n*factorial(n-1);
    }
     
    // Driver method
    public static void main(String[] args) 
    {
        int num = 5;
        System.out.println("Factorial of "+ num + " is " + factorial(5));
    }
}`
            }, {
                lang: "python",
                answer: `def factorial_recursive(n):
    """Calculate factorial using recursion"""
    if n == 0 or n == 1:
        return 1
    return n * factorial_recursive(n - 1)

def factorial_iterative(n):
    """Calculate factorial using iteration"""
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

# Using built-in math module
import math

def factorial_builtin(n):
    """Calculate factorial using built-in function"""
    return math.factorial(n)

# Example usage
num = 5
print(f"Factorial of {num} (recursive): {factorial_recursive(num)}")
print(f"Factorial of {num} (iterative): {factorial_iterative(num)}")
print(f"Factorial of {num} (built-in): {factorial_builtin(num)}")`
            }, {
                lang: "javascript",
                answer: `// Recursive approach
function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

// Iterative approach
function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Using reduce (functional approach)
function factorialReduce(n) {
    return Array.from({length: n}, (_, i) => i + 1)
                .reduce((acc, curr) => acc * curr, 1);
}

// Example usage
const num = 5;
console.log(\`Factorial of \${num} (recursive): \${factorialRecursive(num)}\`);
console.log(\`Factorial of \${num} (iterative): \${factorialIterative(num)}\`);
console.log(\`Factorial of \${num} (reduce): \${factorialReduce(num)}\`);`
            }
        ]
    }, {
        question: "Bubble Sort Algorithm",
        description: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.",
        answers: [
            {
                lang: "C",
                answer: `// C program for implementation of Bubble sort
#include <stdio.h>
 
void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}
 
// A function to implement bubble sort
void bubbleSort(int arr[], int n)
{
   int i, j;
   for (i = 0; i < n-1; i++)      
 
       // Last i elements are already in place   
       for (j = 0; j < n-i-1; j++) 
           if (arr[j] > arr[j+1])
              swap(&arr[j], &arr[j+1]);
}
 
/* Function to print an array */
void printArray(int arr[], int size)
{
    int i;
    for (i=0; i < size; i++)
        printf("%d ", arr[i]);
    printf("n");
}
 
// Driver program to test above functions
int main()
{
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    bubbleSort(arr, n);
    printf("Sorted array: \\n");
    printArray(arr, n);
    return 0;
}
`
            }, {
                lang: "java",
                answer: `// Java program for implementation of Bubble Sort
class BubbleSort
{
    void bubbleSort(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n-1; i++)
            for (int j = 0; j < n-i-1; j++)
                if (arr[j] > arr[j+1])
                {
                    // swap temp and arr[i]
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
    }
 
    /* Prints the array */
    void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }
 
    // Driver method to test above
    public static void main(String args[])
    {
        BubbleSort ob = new BubbleSort();
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        ob.bubbleSort(arr);
        System.out.println("Sorted array");
        ob.printArray(arr);
    }
}
`
            }, {
                lang: "python",
                answer: `def bubble_sort(arr):
    """
    Bubble sort implementation
    Time Complexity: O(n²)
    Space Complexity: O(1)
    """
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        # Flag to optimize - if no swapping occurs, array is sorted
        swapped = False
        
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        
        # If no swapping occurred, array is sorted
        if not swapped:
            break
    
    return arr

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
print("Original array:", arr)
sorted_arr = bubble_sort(arr.copy())
print("Sorted array:", sorted_arr)`
            }, {
                lang: "javascript",
                answer: `function bubbleSort(arr) {
    const n = arr.length;
    const sortedArr = [...arr]; // Create a copy to avoid mutating original
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        
        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                // Swap elements
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
                swapped = true;
            }
        }
        
        // If no swapping occurred, array is sorted
        if (!swapped) break;
    }
    
    return sortedArr;
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Sorted array:", bubbleSort(arr));

// Alternative ES6+ implementation
const bubbleSortES6 = arr => {
    const result = [...arr];
    const len = result.length;
    
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }
    
    return result;
};`
            }
        ]
    }, {
        question: "Show Third Largest Number In An Array Of Numbers",
        description: "Given an array of distinct elements, find third largest element in it. Pretty much self explanatory",
        answers: [
            {
                lang: "C",
                answer: `void thirdLargest(int arr[], int arr_size)
{
    /* There should be atleast three elements */
    if (arr_size < 3)
    {
        printf(" Invalid Input ");
        return;
    }
 
    // Find first largest element
    int first = arr[0];
    for (int i = 1; i < arr_size ; i++)
        if (arr[i] > first)
            first = arr[i];
 
    // Find second largest element
    int second = INT_MIN;
    for (int i = 0; i < arr_size ; i++)
        if (arr[i] > second && arr[i] < first)
            second = arr[i];
 
    // Find third largest element
    int third = INT_MIN;
    for (int i = 0; i < arr_size ; i++)
        if (arr[i] > third && arr[i] < second)
            third = arr[i];
 
    printf("The third Largest element is %d\\n", third);
}
 
/* Driver program to test above function */
int main()
{
    int arr[] = {12, 13, 1, 10, 34, 16};
    int n = sizeof(arr)/sizeof(arr[0]);
    thirdLargest(arr, n);
    return 0;
}`
            }, {
                lang: "java",
                answer: `public class ThirdLargestInArrayExample{  
public static int getThirdLargest(int[] a, int total){  
int temp;  
for (int i = 0; i < total; i++)   
        {  
            for (int j = i + 1; j < total; j++)   
            {  
                if (a[i] > a[j])   
                {  
                    temp = a[i];  
                    a[i] = a[j];  
                    a[j] = temp;  
                }  
            }  
        }  
       return a[total-3];  
}  
public static void main(String args[]){  
int a[]={1,2,5,6,3,2};  
int b[]={44,66,99,77,33,22,55};  
System.out.println("Third Largest: "+getThirdLargest(a,6));  
System.out.println("Third Largest: "+getThirdLargest(b,7));  
}}  `
            }, {
                lang: "python",
                answer: `def third_largest_sort(arr):
    """Find third largest using sorting"""
    if len(arr) < 3:
        return "Array should have at least 3 elements"
    
    # Remove duplicates and sort in descending order
    unique_arr = list(set(arr))
    if len(unique_arr) < 3:
        return "Array should have at least 3 distinct elements"
    
    unique_arr.sort(reverse=True)
    return unique_arr[2]

def third_largest_single_pass(arr):
    """Find third largest in single pass - O(n) time"""
    if len(arr) < 3:
        return "Array should have at least 3 elements"
    
    first = second = third = float('-inf')
    
    for num in arr:
        if num > first:
            third = second
            second = first
            first = num
        elif num > second and num != first:
            third = second
            second = num
        elif num > third and num != second and num != first:
            third = num
    
    if third == float('-inf'):
        return "Array should have at least 3 distinct elements"
    
    return third

# Example usage
arr1 = [12, 13, 1, 10, 34, 16]
arr2 = [1, 2, 5, 6, 3, 2]

print(f"Third largest (sort method): {third_largest_sort(arr1)}")
print(f"Third largest (single pass): {third_largest_single_pass(arr1)}")`
            }, {
                lang: "javascript",
                answer: `function thirdLargestSort(arr) {
    if (arr.length < 3) {
        return "Array should have at least 3 elements";
    }
    
    // Remove duplicates and sort in descending order
    const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
    
    if (uniqueArr.length < 3) {
        return "Array should have at least 3 distinct elements";
    }
    
    return uniqueArr[2];
}

function thirdLargestSinglePass(arr) {
    if (arr.length < 3) {
        return "Array should have at least 3 elements";
    }
    
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    
    for (const num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            third = second;
            second = num;
        } else if (num > third && num !== second && num !== first) {
            third = num;
        }
    }
    
    if (third === -Infinity) {
        return "Array should have at least 3 distinct elements";
    }
    
    return third;
}

// Example usage
const arr1 = [12, 13, 1, 10, 34, 16];
const arr2 = [1, 2, 5, 6, 3, 2];

console.log("Third largest (sort method):", thirdLargestSort(arr1));
console.log("Third largest (single pass):", thirdLargestSinglePass(arr1));

// Using modern JavaScript methods
const thirdLargestModern = arr => {
    const unique = [...new Set(arr)];
    return unique.length < 3 
        ? "Need at least 3 distinct elements"
        : unique.sort((a, b) => b - a)[2];
};`
            }
        ]
    }
];