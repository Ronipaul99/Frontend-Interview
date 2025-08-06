const circuitBreaker = require('./circuit_braker');

const circuit = circuitBreaker();

const wait = time =>{
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve();
        }, time);   
    })
};

(async ()=>{
    while(true){
        await circuit.healthcheck();
        await wait(1000); // Wait for 1 second
    }
})()