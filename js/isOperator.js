// operators = ["+","-","/","*"]

export default function isOperator(lexeme) {
    switch (lexeme) {
        case "+":
            return "TOKEN_PLUS_OPERATOR";
        case "-":
            return "TOKEN_MINUS_OPERATOR";
        case "/":
            return "TOKEN_DIVIDED_OPERATOR";
        case "*":
            return "TOKEN_TIMES_OPERATOR";
    }
}
