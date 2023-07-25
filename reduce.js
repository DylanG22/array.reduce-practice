
function extractValue(arr, key) {
    return arr.reduce(function(accumulator,nextObj){
        accumulator.push(nextObj[key]);
        return accumulator;
    },[])
}

function vowelCount(str) {
    let vowels = ['a','e','i','o','u'];
    let strArr = Array.from(str.toLowerCase());
    return strArr.reduce(function(acc,char){
        for(let i of vowels){
            if(i === char){
                if(acc[char]){
                    acc[char] += 1}
                else{
                    acc[char] = 1}
            }
        }
        return acc;
    },{})
}


function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, nextObj){
            nextObj[key] = value;
            acc.push(nextObj);
            return acc;
        }
    ,[])
}



function partition(arr, callback) {
    return arr.reduce(function(acc,nextVal){
        if(callback(nextVal) === true){
            acc[0].push(nextVal);
            return acc
        }
        else{
            acc[1].push(nextVal);
            return acc;
        }
    },[[],[]])
}