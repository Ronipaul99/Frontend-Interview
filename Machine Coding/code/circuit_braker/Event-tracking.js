module.exports= EventTracking = () => {
    return {
        healthcheckStatus: (status) => {
        // Logic to handle health check status
        console.log(`Health check status: ${status}`);
        console.log(`---------------------------------`)
        },
        healthCheckFailed: (error) => {
        // Logic to handle health check failure
        console.log(`Health check failed: ${error}`);
        console.log(`---------------------------------`)
        }   
    };
    
}