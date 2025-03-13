import { subTotalCalculator } from "./subTotalCalculator";

export function TotalCalculator(array){
    let total = 0
    array.forEach(el => {
        const subtotal = subTotalCalculator(el.price, el.quantity)
           total += subtotal 
    });
    return total
}

export function TotalItems(array){
    let totalItems = 0;
    array.forEach(el => {
        totalItems += el.quantity
    });
    return totalItems
}