const name="Grace";
const monthlyIncome = 350000;
const rent = 120000;
const food = 90000;
const transport = 30000;
const internet = 15000

//TotalExpences

let TotalExpences = rent+food+transport+internet;
console.log(TotalExpences);

//savings
let savings = monthlyIncome-TotalExpences;

//Saving rate
let savingsRate = (savings / monthlyIncome) * 100;
let savinggoal = savingsRate >= 20;

//Answer 1
console.log(`${name}) has a monthly income of ${monthlyIncome}rwf and she spends ${TotalExpences}rwf`)

//Answer 2
console.log(`${name}) after spending ${TotalExpences}rwf she is left with a saving of ${savings}rwf`)

//Answer 3
console.log(`${name}) has a saving of ${savings}rwf`)

//Answwer 4
console.log(`${name}) her saving goal was ${savinggoal}`)

////////////////////////////////////////////////////////////////////
///////////              work sasa                    ////////////////



