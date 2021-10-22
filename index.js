const drivers =["Sally","Bob","Freddy","Claudia"];
const firsttwo= drivers.slice(0,2);
const lasttwo=drivers.slice(-2);
function returnFirstTwoDrivers(){
    return firsttwo;
}
function returnLastTwoDrivers(){
    return lasttwo;
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num1){
    return function(){
        return num1*num1
    }
}
const fareDoubler=fare=>fare*2
const fareTripler=fare=>fare*3

const selectDifferentDrivers =function(arrayOfDrivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
};