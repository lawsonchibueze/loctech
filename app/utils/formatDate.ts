export function formatDate(inputDate:string) {
    const months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
  
    const dateObj = new Date(inputDate);
    const year = dateObj.getFullYear();
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
  
    // Format the date as "MONTH DAY, YEAR"
    const formattedDate = `${month} ${day}, ${year}`;
  
    return formattedDate;
  }