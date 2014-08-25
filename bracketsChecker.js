function checkBrackets (str) {
	
	var brackets = 0;

    for (var ch in str) {
        if (str[ch] == '(') {
            brackets++;
        }
        else if (str[ch] == ')') {
            brackets--;
        }

        if (brackets < 0) {
            break;
        }
    }

    if (brackets == 0) {
       console.log( "correct");
    }
    else {
        console.log( "incorrect"();
    }
}

var str='( ( a + b ) / 5 – d )';
checkBrackets(str);