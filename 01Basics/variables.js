const accountId = 2394857
let accountName = 'kazi'
// accountIds = 98988

// const accountIds; /*const accountIds; SyntaxError: Missing initializer in const declaration */
var accountIds; /* if not declare any value in keyword then let and var will be undefine */
console.log(accountId,  accountName);
console.table([accountId, accountName, accountIds])

let accountBalance = 1200
console.log(accountBalance);
accountBalance = 500
console.log('direct variable', accountBalance); 
/* double variable use not applicable */

const data = {
    district:'dhaka',
    thana: 'uttara',
    address: 'sectore 07'
}
console.log(data);




