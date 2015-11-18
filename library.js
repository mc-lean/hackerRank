var input = "9 1 2016\n6 6 2015";

function libraryFine(string) {
    
    var a = string.split("\n");
    a[0] = a[0].split(' ');
    a[1] = a[1].split(' ');
    
    
    var returnedDate = new Date(parseInt(a[0][2]), parseInt(a[0][1]) - 1, parseInt(a[0][0]));
    var dueDate = new Date(parseInt(a[1][2]), parseInt(a[1][1]) - 1, parseInt(a[1][0]));
    var fine = 0;

    
    if(returnedDate > dueDate) {
        
        
        fine = calculateFine(dueDate, returnedDate);
        
    }
    
    
    console.log(fine);
    
}

function calculateFine(dueDate, returnedDate) {
    var fine = 0;

    console.log( dueDate.getDate() );
    console.log( returnedDate.getDate() );
    

    if(returnedDate.getFullYear() > dueDate.getFullYear()) {
        
        fine = 10000;
        
    } else if (returnedDate.getMonth() > dueDate.getMonth()) {
        
        fine = (returnedDate.getMonth() - dueDate.getMonth()) * 500;
        
    } else if (returnedDate.getDate() > dueDate.getDate()) {
        
        fine = (returnedDate.getDate() - dueDate.getDate()) * 15;
        
    }
    

    return fine;
    
}

// new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);