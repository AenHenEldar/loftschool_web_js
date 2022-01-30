const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

const getWorthyWorkers = (workers) => workers.filter(w => w.salary > 1000).map(w => w.name)

console.log(getWorthyWorkers(workers))