//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
    // creates the endsWith method on the string prototype.
    if (typeof String.prototype.endsWith != 'function') {
        // see below for better implementation!
        String.prototype.endsWith = function (str){
            return this.indexOf(str) == this.length-1;
        };
    }
    // removes all chars that are not letters
    var scrubbedInput = input.replace(/[^äöüÄÖÜßa-zA-Z]/g, '');
    // removes all chars that are not capital letters
    var onlyCapsInput = scrubbedInput.replace(/[^ÄÖÜßA-Z]/g, '');
    // regex to remove all chars.
    var onlySpacesInput = input.replace(/[^ ]/g,'');
    // base response
    var response = "Whatever.";

    if(input.endsWith("?"))
        response = "Sure.";
    // Checks if all letters are caps
    if ((onlyCapsInput.length !== 0) && onlyCapsInput.length === scrubbedInput.length)
        response = "Whoa, chill out!";
    // checks if input is empty string.
    if(input.length === 0 || onlySpacesInput .length === input.length)
        response = 'Fine. Be that way!';

   return response;
};

module.exports = Bob;
