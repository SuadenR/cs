const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function 
perf.start();                    
doublerAppend(tinyArray);
let resultsAppend1 = perf.stop();  
perf.start();                    
doublerAppend(smallArray);
let resultsAppend2 = perf.stop();  
perf.start();                    
doublerAppend(mediumArray);
let resultsAppend3 = perf.stop();  
perf.start();                    
doublerAppend(largeArray);
let resultsAppend4 = perf.stop(); 
perf.start();                    
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop(); 



// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();
perf.start();
doublerInsert(smallArray);
let resultsInsert1 = perf.stop();
perf.start();
doublerInsert(mediumArray);
let resultsInsert2 = perf.stop();
perf.start();
doublerInsert(largeArray);
let resultsInsert3 = perf.stop();
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert4 = perf.stop();

perf.start();
getSizedArray(tinyArray);
let resultsgetSized = perf.stop();
perf.start();
getSizedArray(smallArray);
let resultsgetSized1 = perf.stop();
perf.start();
getSizedArray(mediumArray);
let resultsgetSized2 = perf.stop();
perf.start();
getSizedArray(largeArray);
let resultsgetSized3 = perf.stop();
perf.start();
getSizedArray(extraLargeArray);
let resultsgetSized4 = perf.stop();



console.log('Results for the different sized arrays');
console.log("append", resultsAppend.preciseWords);
console.log("append1", resultsAppend1.preciseWords);
console.log("append2", resultsAppend2.preciseWords);
console.log("append3", resultsAppend3.preciseWords);
console.log("append4", resultsAppend4.preciseWords);
console.log("insert", resultsInsert.preciseWords);
console.log("insert1", resultsInsert1.preciseWords);
console.log("insert2", resultsInsert2.preciseWords);
console.log("insert3", resultsInsert3.preciseWords);
console.log("insert4", resultsInsert4.preciseWords);
console.log("getSized", resultsgetSized.preciseWords);
console.log("getSized1", resultsgetSized1.preciseWords);
console.log("getSized2", resultsgetSized2.preciseWords);
console.log("getSized3", resultsgetSized3.preciseWords);
console.log("getSized4", resultsgetSized4.preciseWords);
