const url = require('url');
let addr = 'http://localhost:8080/default.html?year2021&month=november';
let q = url.parse(addr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

let qdata = q.query;
console.log(qdata.month);