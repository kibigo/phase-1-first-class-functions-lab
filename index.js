function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}


function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(interger){
    return function calculateFare(fare){
        return fare*interger
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers)
}