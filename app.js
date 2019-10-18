// non primitive data types or Object ref...
let languages = ['java','nodejs','python','ruby',undefined,null,true];
console.log(languages[6]);

var array3 = Array.of('java','python','nodejs');

let users={
    //key:value
    
    name:'anu',
    age:20,
    company:'qspiders',
    salary:20000,
    skills:[
        'java',
        'nodejs',
        'aws',
        'firebase',
        'babel',
        'webpack'
    
    ]
}
console.log(users['age']);
console.log(users.company);

let name='sowmya';
let age=30;
let company='Jsdpiders';

let usersData={
    name:name,
    age:age,
    company:company,
    salary:20000
}

let usersData1={
    //key:value
    name,
    age,
    company,
    salary:30000
};
console.log(usersData);