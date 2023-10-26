// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid


const testPhoneNumber = (phone) => {
    /*
    * verifies a phone number
    * @param {String} phone  
    * @return {Boolean}
    */

    let re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/;

    if (phone === "") {
        return 'Phone number cannot be empty!';
    } else if (!(re.test(phone)) && (phone.match(/\d/g) || []).length != 10) {
        return 'false, missing a digit';
    } else if (phone !== "" && re.test(phone)) {
        return 'true';
    } 
}


// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('(206) 33-4444')); // should return false, missing a digit


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}

const parsePhoneNumber = (phone) => {
     /*
    * parses a phone number
    * @param {String} phone  
    * @return {Object} area code & phone number
    */

    let re = /^((\+1)|1)? ?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})( ?(ext\.? ?|x)(\d*))?$/;

    let parsed = re.exec(phone.trim());

    if (parsed !== null && parsed.length > 8) {
        return "area code: " + parsed[3] + ", " + "phone number: " + parsed[4] + parsed[5] + (typeof parsed[8] !== "undefined" ? " x" + parsed[8] : ""); 
    }
    else {
         return 'phone number cannot be parsed';
    }
}

// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}
