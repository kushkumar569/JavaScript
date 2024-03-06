const accountId =123456       //can't modify
var accountName="saving"       //prefer not to use var because of issue in block scope and functional scope
let bank="IDBI"             // use this
accountNo="xxxxxx";        // default assign datatype
let accountBalance        //declear but undefine

// accountId=2  not allow

accountName="current"        //these 3 values can change
bank="SBI"
accountNo="YYYYYYY"


console.log(accountId)        //type log and chhose log for shortcut
console.table([accountId,accountName,accountNo,bank]);        //use console.table to print multiple values in form of table

/*
   in js ; is optional
*/
