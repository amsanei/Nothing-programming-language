export default function isOperator(lexeme) {
    if (lexeme === "+") return "TOKEN_PLUS_OPERATOR";
    else if (lexeme === "-") return "TOKEN_MINUS_OPERATOR";
    else if (lexeme === "*") return "TOKEN_MINUS_OPERATOR";
    else if (lexeme === "/") return "TOKEN_DIVIDED_OPERATOR";
    else if (isAssign(lexeme)) return "TOKEN_ASSIGN_OPERATOR";
}

function isAssign(lexeme) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (lexeme[i] === "a") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (lexeme[i] === "s") state = 3;
                else return false;
            case 3:
                i++;
                if (lexeme[i] === "s") state = 4;
                else return false;
            case 4:
                i++;
                if (lexeme[i] === "i") state = 5;
                else return false;
            case 5:
                i++;
                if (lexeme[i] === "g") state = 6;
                else return false;
            case 6:
                i++;
                if (lexeme[i] === "n") state = 7;
                else return false;
            case 7:
                i++;
                if (lexeme[i] === undefined) return true;
                else return false;
        }
    }
}
