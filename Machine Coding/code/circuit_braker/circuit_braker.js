// const fetch = require('node-fetch');
const eventTracking = require('./Event-tracking');

const event = eventTracking();


const circuitBreaker = () => {
    let failureCount = 0;  
    let lastcallFailed = 0;
    return{
        healthcheck: async()=>{
            const now = Date.now();
            if (lastcallFailed && now - lastcallFailed < 10000) {
                console.log("Circuit is open, skipping health check");
                console.log(`---------------------------------`);
                
            } 
            try{
                const response = await fetch('http://localhost:3000/healthcheck');
                const data = await response.json();
               event.healthcheckStatus(data.status);
               failureCount = 0; // Reset failure count on success        
            }catch(error) {
                lastcallFailed = Date.now();
                failureCount++;
                event.healthCheckFailed(error.message);
                if (failureCount >= 3) {
                    console.log("FIX IT NOW! Circuit is open");
                    console.log(`---------------------------------`);
                }
            }
        }
    } 


}

module.exports = circuitBreaker;