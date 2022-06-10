// Your function must take in 2 strings with the exact number of characters and return an integer representing the difference between them.

// If your parameters are not the same size then your function will return -1.

// If the two strings are the same size, you must then iterate through each string and determine which characters are different. Each time there is a difference, it counts as 1.

const str1 = "ABC";
const str2 = "ABC";

function my_levenshtein(str1,str2){
    let changes = 0;
    if (str1.length !== str2.length){
        return -1;
    } else {
        for(let i=0; i<str1.length; i++){
        
            // iterate through each index for each string to compare str1.charCodeAt(0) and str2.charCodeAt(0) etc

            if (str1.charCodeAt(i) - str2.charCodeAt(i) == 0){                
                changes; // Difference is zero, so needs to move on                
            } else {
                changes++; // If difference, needs to add one to a counter
            }
        };
        return changes;    
    }
}

console.log(my_levenshtein(str1,str2));



