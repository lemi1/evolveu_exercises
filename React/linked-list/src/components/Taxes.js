let taxBracket;
function taxBracket(income) {
    if (income <= 47630) {
        taxBracket = 1
    } else if (income > 47630 && income <= 95259) {
        taxBracket = 2

    } else if (income > 95259 && income <= 147667) {
        taxBracket = 3
    } else if (income > 147667 && income <= 210371) {
        taxBracket = 4

    } else if (income > 210371) {
        taxBracket = 5
    }
    return taxBracket;

}


let tax;
function taxCalc(income, taxBracket) {
    switch (taxBracket) {
        case 1:
            tax = (0.15 * income).toFixed(2);
            return tax
        case 2:
            tax = ((income - 47630) * 0.205) + (47630 * 0.15).toFixed(2);
            return tax
        case 3:
            tax = ((income - 95259) * 0.26) + ((95259 - 47630) * 0.205) + (47629 * 0.15).toFixed(2);
            return tax
        case 4:
            tax = ((income - 147667) * 0.29) + ((147667 - 95259) * 0.26) + ((95259 - 47630) * 0.205) + (47629 * 0.15).toFixed(2);
            return tax
        case 5:
            tax = ((income - 210371) * 0.33) + ((210371 - 147667) * 0.29) + ((147667 - 95259) * 0.26) + ((95259 - 47630) * 0.205) + (47630 * 0.15).toFixed(2)
            return tax
        default: return tax = "error";


    }
}












export default Taxes;
