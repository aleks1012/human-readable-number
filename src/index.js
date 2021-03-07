module.exports = function toReadable (number) {
/*var ones = new Array('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
    var tens = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');
    var hundred = ' hundred';
    var output = '';
    var numString = number.toString();

    if (number == 0) {
        return 'zero';
	}
    //the case of 10, 11, 12 ,13, .... 19 
    if (number < 20) {
        output = ones[number].slice(1);
        return output;
    }

    if (number > 19 && number < 100) {
    	output += tens[parseInt(numString.charAt(0))].slice(1);
        output += ones[parseInt(numString.charAt(1))];
        return output;
    }

    //100 and more
    if (numString.length == 3) {
        output = ones[parseInt(numString.charAt(0))].slice(1) + hundred;
        output += tens[parseInt(numString.charAt(1))];
        output += ones[parseInt(numString.charAt(2))];
        return output;
    }

    output += tens[parseInt(numString.charAt(0))].slice(1);
    output += ones[parseInt(numString.charAt(1))].slice(1);

    return output;*/  


const ones = ['','one','two','three','four','five','six','seven','eight','nine'];
const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const ten = ['ten'];
var output = '';
var numString = number.toString();
//let numLength = numString.length();
let end = number % 10;
let hundred = number % 100;

//function convert_tens(number) {
   								if (number == 0) {
    								return "zero";
    											}

    							if (number == 110) {
    								return "one hundred ten";
    											}

    							if (number == 210) {
    								return "two hundred ten";
    											}

    							if (number == 310) {
    								return "three hundred ten";
    											}

    							if (number == 410) {
    								return "four hundred ten";
    											}

    							if (number == 510) {
    								return "five hundred ten";
    											}

    							if (number == 610) {
    								return "six hundred ten";
    											}

    							if (number == 710) {
    								return "seven hundred ten";
    											}

    							if (number == 810) {
    								return "eight hundred ten";
    											}

    							if (number == 910) {
    								return "nine hundred ten";
    											}

   								if (number < 10) {
    						    				  return ones[number];
    											  } 
    							if (number >= 10 && number < 20) {
    											  	return teens[number - 10];
    													} 
    							if (number >= 20 && number < 100 && end == 0) { 
        									return tens[Math.floor(number / 10)];
        								}
    							if (number >= 20 && number < 100) { 
        									return tens[Math.floor(number / 10)] + " " + ones[number % 10];
        								}
							   //};

//function convert_hundreds(number) {
    							/*if (number > 99) {
        										return ones[Math.floor(number / 100)] + " hundred " + tens[Math.floor(number / 100)] + " " + ones[number % 10];
    				 							 }*/
    				 			if ((number % 100) == 0) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred";
        							return output;
        						}

    				 			if (end == 0 && number > 99) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							return output;
    													}

    				 			
    				 			if (number > 99 && number < 110) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += ones[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 109 && number < 120) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += teens[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 199 && number < 210) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += ones[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 209 && number < 220) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += teens[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 299 && number < 310) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += ones[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 309 && number < 320) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += teens[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 399 && number < 410) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += ones[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 409 && number < 420) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += teens[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 499 && number < 510) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += ones[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 509 && number < 520) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += teens[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 599 && number < 610) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += ones[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 609 && number < 620) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += teens[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 699 && number < 710) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += ones[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 709 && number < 720) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += teens[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 799 && number < 810) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += ones[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 809 && number < 820) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += teens[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 899 && number < 910) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += ones[parseInt(numString.charAt(2))];
        							return output;
    													}

    							if (number > 909 && number < 920) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += teens[parseInt(numString.charAt(2))];
        							return output;
    													}

    							/*if (hundred == 0 && number > 99) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred";
        						    output += tens[parseInt(numString.charAt(1))];
        							output += " " + ones[parseInt(numString.charAt(2))];
        							return output;
    													}*/
    				 			
    				 			if (hundred !== 0 && end !== 0 && number > 99) {
        						    output = ones[parseInt(numString.charAt(0))] + " hundred ";
        							output += tens[parseInt(numString.charAt(1))];
        							output += " " + ones[parseInt(numString.charAt(2))];
        							return output;
    													}


    				 								  /*else {
       						  							return convert_tens(number);
    														 }*/
								   //}


}
/*function convert_tens(number) {
   								if (number < 10) {
    						    				  return ones[number];
    											  } 
    							else if (number >= 10 && number < 20) {
    											  	return teens[number - 10];
    													} 
    								else { 
        									return tens[Math.floor(number/10)] + " " + ones[number % 10];
        								}
							   };

function convert_hundreds(number) {
    								if (number > 99) {
        											  return ones[Math.floor(number / 100)] + " hundred " + convert_tens(number % 100);
    				 								  } else {
       						  							return convert_tens(number);
    														 }
								  // }

    if (number == 0) {
    	return 'zero';
    }
}*/