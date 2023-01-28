export default function isData(lexeme) {
    if (isInt(lexeme)) return "TOKEN_DATA_INT";
    else if (isFloat(lexeme)) return "TOKEN_DATA_FLOAT";
    else if (isChar(lexeme)) return "TOKEN_DATA_CHAR";
    else if (isString(lexeme)) return "TOKEN_DATA_STRING";
}

function isInt(lexeme) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (lexeme[i] >= 0 && lexeme[i] <= 9) state = 2;
                else return false;
            case 2:
                i++;
                if (lexeme[i] === undefined) return true;
                else if (lexeme[i] >= 0 && lexeme[i] <= 9) state = 2;
                else return false;
        }
    }
}

function isFloat(lexeme) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (lexeme[i] >= 0 && lexeme[i] <= 9) state = 2;
                else return false;
            case 2:
                i++;
                if (lexeme[i] >= 0 && lexeme[i] <= 9) {
                    state = 2;
                    break;
                } else if (lexeme[i] === ".") state = 3;
                else return false;
            case 3:
                i++;
                if (lexeme[i] >= 0 && lexeme[i] <= 9) state = 4;
                else return false;
            case 4:
                i++;
                if (lexeme[i] === undefined) return true;
                else if (lexeme[i] >= 0 && lexeme[i] <= 9) state = 4;
                else return false;
        }
    }
}

function isChar(lexeme) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (lexeme[i] === "'") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (lexeme[i]) state = 3;
                else return false;
                break;
            case 3:
                i++;
                if (lexeme[i] === "'") return true;
                else return false;
                break;
        }
    }
}

function isString(lexeme) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (lexeme[i] === '"') state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (lexeme[i]) state = 3;
                else return false;
                break;
            case 3:
                i++;
                if (lexeme[i] === '"') return true;
                else if (lexeme[i]) state = 3;
                else return false;
                break;
        }
    }
}
