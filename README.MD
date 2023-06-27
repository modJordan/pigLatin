Describe: pigLatin()

Test:"If input is empty or is a number function will return nothing"
Code:pigLatin( 007);
Expected Output: return " "

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will move all the first consecutive consonants to the end and add 'ay."
Code: pigLatin("code");
Expected Output: "odecay"

Test: "It will move the letters "qu" if the word starts with this consonant and add "ay.""
Code: pigLatin("quick");
Expected Output: "ickquay"

