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
            }
        ]
    }
];