let arr = ['John ', 'Smit ', 'development ', 'programmer '];
//let arr = ['John ', 'Smit ', 'development '];
let [name, surname, department, position = 'trainee'] = arr;

document.write(name, surname, department, position);
