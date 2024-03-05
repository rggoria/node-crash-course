console.log("testing");

const { format } = require("date-fns");

console.log(format(new Date(), "yyyy/MM/dd\tHH:mm:ss"));

const { v4: uuid } = require("uuid");
console.log(uuid());
