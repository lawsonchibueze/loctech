export function formatPrice(num:number) {
    //using regular expression
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }