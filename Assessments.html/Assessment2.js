// Assessment 2 
// Ques - Convert each element to upper case.
let a = ['abc', 'efg', 'xyz']
let b = a.map(str => str.toUpperCase());
console.log(b);
// Ques - Add index value with each element.
let c = ['xy', 'mn', 'op']
let d = c.map((element,index) =>{
console.log(index,element)
})
// Ques - Capitalize each element's first word
let e = ['mno', 'abc', 'xyz']
let f = e.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(f);
// Ques - Square each number and then filter out even number.
let g = [1, 2, 3, 4, 5]
let h = g.map(element => element**2);
console.log(h);
let i = h.filter(element => element%2==0);
console.log(i);
// Ques - Filter words with length >4
let j = ['abc', 'efghi', 'xywop']
let k = j.filter(str => str.length>4);
console.log(k);
// Ques - Filter duplicate
let l = [1, 2, 3, 3, 2, 4, 5, 6, 4]
let m = l.filter((item,index) => {
    return(l.indexOf(item) === index);
});
console.log(m);
//Ques - Filter words which have 'ke'
let n = ['key', 'keyboard', 'keim', 'mouse']
let o = n.filter(str => str.includes('ke'));
console.log(o);
// Ques - Use ternary operator to print results
let marks = 86;
let result = (marks>=90)?'A': (marks>=75)?'B': (marks>=50)?'C':'fail' 
console.log(result);
// Ques - Use ternary operator to print the result
let temp = 34;
let output = (temp>=35)?'Hot' : (temp<=20)?'Cold':'Moderate'
console.log(output);
// Ques - Find greater mong three
let x = 78;
let y = 32;
let z = 100;
let greater = (x>y && x>z)?'x':(y>x && y>z)?'y':'z'
console.log(greater);

