// UNIT 2 ADVANCED JS
// ARROW FUNCTION
/*
SYNTAX:-
const sum=(P1,P2)=>{
    return P1+P2;
}
let result=sum(A1,A2);
console.log(result);
*/
/*
EXAMPLE:-
const sum=(a,b) =>{
    return a+b;
}
let result = sum(7,8);
console.log(result);
*/
//-------------------------------------------------------------------------------------
//MAP (ARRAY METHOD):- used to apply a specific condition on each element of an Array
/*
let a=[1, 2, 3, 4, 5]
let b=a.map((each) => each **2);
console.log(b);
*/
//Ques- Convert each element to upper case.
/*
let a = ['abc', 'efg', 'xyz']
let b = a.map(str => str.toUpperCase());
console.log(b);
*/
//Ques- Add index value with each element.
/*
let b= ['xy', 'mn', 'op']
let c = b.map((item,index) => item+index);
console.log(c);
*/
//Ques- Capitalize each element's first word
/*let d = ['mno', 'abc', 'xyz']
let e = d.map()
*/
//--------------------------------------------------------------------------------------
//Ques- Filter words with length greater than 4.
/*
let a = ['abc', 'efghi', 'xywop']
let b = a.filter(str => str >4)


//Ques- z
*/
//--------------------------------------------------------------------------------
//Reduce:- reduce array elements to a single value.
//EXAMPLE:
/*
let a = [1, 2, 3, 4, 5]
let b = a.reduce((acc,cv) => acc+cv);
console.log(b);
*/
//---------------------------------------------------------------------------------
// TERNARY OPERATOR:- condition?true:false
/*
let age=08;
let b = age>=18 ? 'adult':'minor'
console.log(b);
*/
//Ques- Check greater among 3 and print it. 
/*
let a = 78;
let b = 32;
let c = 100;
let result = ( a>b && a>c )?a: ( b>a && b>c )? b:c
console.log(result); 
*/
/*
let marks = 55;
let result = (marks>=90)?'A': (marks>=75)?'B': (marks>=50)?'C':'fail' 
console.log(result);
*/
//----------------------------------------------------------------------------------
