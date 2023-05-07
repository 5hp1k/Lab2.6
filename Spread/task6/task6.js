function merge(...arrays) 
{
    return [].concat(...arrays);
}

let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]); 
document.write(result);