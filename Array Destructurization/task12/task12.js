function func () 
{
    return [new Date().getFullYear(), new Date().getMonth(), new Date().getDate()]
}

let arr = [undefined, undefined, undefined]
let [year = func()[0], month = func()[1], day = func()[2]] = arr

document.write(`${year} ${month} ${day}`);