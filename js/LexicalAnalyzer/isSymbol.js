// symbols = ['{','}',',','(',')']

export default function isSymbol(lexeme) {
    switch (lexeme) {
        case "(":
            return "TOKEN_OPEN_PARENTHESIS";
        case ")":
            return "TOKEN_CLOSED_PARENTHESIS";
        case "{":
            return "TOKEN_OPEN_BRACE";
        case "}":
            return "TOKEN_CLOSED_BRACE";
        case ",":
            return "TOKEN_COMMA";
    }
}
