/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord (line){
    return { firstName: line[0],
        familyName: line[1], 
        title: line[2],
        payPerHour: line[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
function createEmployeeRecords (employeeInfo) {
    return employeeInfo.map(function(line){
        return createEmployeeRecord(line)
})}

 function createTimeInEvent ( workHours){
    let [date, hour] = workHours.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

 function createTimeOutEvent ( workHours){
    let [date, hour] = workHours.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function hoursWorkedOnDate ( workDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === workDate
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === workDate
    })
     let sumEvent =  outEvent.hour - inEvent.hour   
    return sumEvent / 100
}

function wagesEarnedOnDate ( dateWorked){
    let grossPay = hoursWorkedOnDate.call( this ,dateWorked)
        * this.payPerHour
    return parseFloat(grossPay.toString())
}



function calculatePayroll (arrayOfworkerInfo){
    return arrayOfworkerInfo.reduce(function(note, info){
        return note + allWagesFor.apply(info)
    }, 0)
}
function findEmployeeByFirstName (srcArray , firstName){
    return srcArray.find( line => line.firstName === firstName)
}