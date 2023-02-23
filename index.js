// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers){
    return [arrayOfDrivers[0] , arrayOfDrivers[1]]
}

const returnLastTwoDrivers = function(arrayOfDrivers){
    return [arrayOfDrivers[2] , arrayOfDrivers[3]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare){
       return int * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, selectDrivers){
    if (selectDrivers == returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else {

        return returnLastTwoDrivers(arrayOfDrivers)
    }
}