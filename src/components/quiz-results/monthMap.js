const monthMapper=(inputDate)=>{
    inputDate = new Date(inputDate)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = inputDate.getDate();
    const month = monthNames[inputDate.getMonth()];
    const year = inputDate.getFullYear();

    let dayStr;
    if (day === 1 || day === 21 || day === 31) {
        dayStr = day + "st";
    } else if (day === 2 || day === 22) {
        dayStr = day + "nd";
    } else if (day === 3 || day === 23) {
        dayStr = day + "rd";
    } else {
        dayStr = day + "th";
    }

    const formattedDate = `${month} ${dayStr} ${year}`;
    return formattedDate;
}

export default monthMapper;
console.log(monthMapper('10-10-2023'))