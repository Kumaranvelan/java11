 let numbers = [21, 58, 69, 20, 47, 55, 7, 36, 91, 75];
 numbers.sort(function(a,b) {return(b-a)});

 console.log(numbers)

 let number = numbers.slice(5,10);
 console.log(number);

 function calculateAverage(array) {
     var total = 0;
     var count = 0;
 
     number.forEach(function(item, index) {
         total += item;
         count++;
     });
 
     return total / count;
 }
 
 console.log("q.no:5"+" "+ calculateAverage(number));


const str = 'hello world';
const arr = str.split(" ");

for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
const str2 = arr.join(" ");
console.log("q.no:12"+ " "+str2);

let array1 = [22, 58, 69, 12, 47, 55, 7, 36, 89, 75];
let array2 = [12, 34, 46, 22, 67, 47, 89];
let common1 = getcommon(array1,array2);
function getcommon(a,b){
    let common = []
    for(i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
        if (a[i] === b[j]){
            common.push(a[i]);
        }
        }

    }
    return common;
}


console.log("q.no:7 "+ common1);

let String = "This is a sample sentence";
let steer = String.split(/(\s+)/); 
let steam = steer.filter((x) => x.trim().length>0);
let count = steam.length;

console.log(count);

let strn = "Hello, World!";
let answer = strn.replace(/[aeiou]/gi ,'')
console.log(answer);
