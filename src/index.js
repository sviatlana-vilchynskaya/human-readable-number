module.exports = function toReadable(number) {
    let fraction = Math.round(frac(number) * 100);
    let f_text = "";

    if (fraction > 0) {
        f_text = convertNumber(fraction);
    }

    return convertNumber(number) + f_text;
};

function frac(f) {
    return f % 1;
}

function convertNumber(number) {
    if (number < 0 || number > 999) {
        return "Need number 1-999";
    }

    let dn = Math.floor(number / 100);
    number = number % 100;
    let tn = Math.floor(number / 10);
    let one = Math.floor(number % 10);
    let res = "";

    if (dn) {
        res += (res == "" ? "" : " ") + convertNumber(dn) + " hundred";
    }

    const ones = Array(
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    );
    const tens = Array(
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    );

    if (tn > 0 || one > 0) {
        if (!(res == "")) {
            res += " ";
        }
        if (tn < 2) {
            res += ones[tn * 10 + one];
        } else {
            res += tens[tn];
            if (one > 0) {
                res += " " + ones[one];
            }
        }
    }

    if (res == "") {
        res = "zero";
    }
    return res;
}
