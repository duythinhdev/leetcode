/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {

  const str = num.toString();

  let roman = "";

    for (let i = str.length - 1; i >= 0; i--) {
    if (i === str.length - 1) {
        if (str[i] === "1") roman = "I";
        else if (str[i] === "2") roman = "II";
        else if (str[i] === "3") roman = "III";
        else if (str[i] === "4") roman = "IV";
        else if (str[i] === "5") roman = "V";
        else if (str[i] === "6") roman = "VI";
        else if (str[i] === "7") roman = "VII";
        else if (str[i] === "8") roman = "VIII";
        else if (str[i] === "9") roman = "IX";
    } else if (i === str.length - 2) {
        if (str[i] === "1") roman = "X" + roman;
        else if (str[i] === "2") roman = "XX" + roman;
        else if (str[i] === "3") roman = "XXX" + roman;
        else if (str[i] === "4") roman = "XL" + roman;
        else if (str[i] === "5") roman = "L" + roman;
        else if (str[i] === "6") roman = "LX" + roman;
        else if (str[i] === "7") roman = "LXX" + roman;
        else if (str[i] === "8") roman = "LXXX" + roman;
        else if (str[i] === "9") roman = "XC" + roman;
    } else if (i === str.length - 3) {
        if (str[i] === "1") roman = "C" + roman;
        else if (str[i] === "2") roman = "CC" + roman;
        else if (str[i] === "3") roman = "CCC" + roman;
        else if (str[i] === "4") roman = "CD" + roman;
        else if (str[i] === "5") roman = "D" + roman;
        else if (str[i] === "6") roman = "DC" + roman;
        else if (str[i] === "7") roman = "DCC" + roman;
        else if (str[i] === "8") roman = "DCCC" + roman;
        else if (str[i] === "9") roman = "CM" + roman;
    } else if (i === str.length - 4) {
        if (str[i] === "1") roman = "M" + roman;
        else if (str[i] === "2") roman = "MM" + roman;
        else if (str[i] === "3") roman = "MMM" + roman;
    }
  }

 return roman;
};
