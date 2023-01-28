function isKeyword(word) {
    let token;
    if (isIf(word)) token = "TOKEN_IF";
    else if (isOtherwise(word)) token = "TOKEN_OTHERWISE";
    else if (isElse(word)) token = "TOKEN_ELSE";
    else if (isLoop(word)) token = "TOKEN_LOOP";
    else if (isTo(word)) token = "TOKEN_TO";
    else if (isIs(word)) token = "TOKEN_IS";
    else if (isFloat(word)) token = "TOKEN_FLOAT";
    else if (isWhile(word)) token = "TOKEN_WHILE";
    else if (isFrom(word)) token = "TOKEN_FROM";
    else if (isCall(word)) token = "TOKEN_CALL";
    else if (isInteger(word)) token = "TOKEN_INTEGER";
    else if (isString(word)) token = "TOKEN_STRING";
    else if (isFunction(word)) token = "TOKEN_FUNCTION";
    else if (isCharacter(word)) token = "TOKEN_CHARACTER";
    else if (isTill(word)) token = "TOKEN_TILL";
    else if (isNeeds(word)) token = "TOKEN_NEEDS";
    else if (isSend(word)) token = "TOKEN_SEND";
    else if (isVariable(word)) token = "TOKEN_VARIABLE";
    return token;
}

function isIf(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "i") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "f") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isVariable(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "v") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "a") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "r") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "i") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === "a") state = 6;
                else return false;
            case 6:
                i++;
                if (word[i] === "b") state = 7;
                else return false;
            case 7:
                i++;
                if (word[i] === "l") state = 8;
                else return false;
            case 8:
                i++;
                if (word[i] === "e") state = 9;
                else return false;
            case 9:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isBoolean(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "b") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "o") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "o") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "l") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === "e") state = 6;
                else return false;
            case 6:
                i++;
                if (word[i] === "a") state = 7;
                else return false;
            case 7:
                i++;
                if (word[i] === "n") state = 8;
                else return false;
            case 8:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isOtherwise(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "o") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "t") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "h") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "e") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === "r") state = 6;
                else return false;
            case 6:
                i++;
                if (word[i] === "w") state = 7;
                else return false;
            case 7:
                i++;
                if (word[i] === "i") state = 8;
                else return false;
            case 8:
                i++;
                if (word[i] === "s") state = 9;
                else return false;
            case 9:
                i++;
                if (word[i] === "e") state = 10;
                else return false;
            case 10:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isElse(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "e") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "l") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "s") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "e") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isLoop(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "l") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "o") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "o") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "p") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isFrom(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "f") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "r") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "o") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "m") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isCall(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "c") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "a") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "l") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "l") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isTill(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "t") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "i") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "l") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "l") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isSend(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "s") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "e") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "n") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "d") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isNeeds(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "n") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "e") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "e") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "d") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === "s") state = 6;
                else return false;
            case 6:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isFloat(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "f") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "l") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "o") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "a") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === "t") state = 6;
                else return false;
            case 6:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isWhile(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "w") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "h") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "i") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "l") return 5;
                else return false;
            case 5:
                i++;
                if (word[i] === "e") state = 6;
                else return false;
            case 6:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isInteger(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "i") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "n") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "t") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "e") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === "g") state = 6;
                else return false;
            case 6:
                i++;
                if (word[i] === "e") state = 7;
                else return false;
            case 7:
                i++;
                if (word[i] === "r") state = 8;
                else return false;
            case 8:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isFunction(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "f") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "u") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "n") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "c") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === "t") state = 6;
                else return false;
            case 6:
                i++;
                if (word[i] === "i") state = 7;
                else return false;
            case 7:
                i++;
                if (word[i] === "o") state = 8;
                else return false;
            case 8:
                i++;
                if (word[i] === "n") state = 9;
                else return false;
            case 9:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isCharacter(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "c") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "h") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "a") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "r") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === "a") state = 6;
                else return false;
            case 6:
                i++;
                if (word[i] === "c") state = 7;
                else return false;
            case 7:
                i++;
                if (word[i] === "t") state = 8;
                else return false;
            case 8:
                i++;
                if (word[i] === "e") state = 9;
                else return false;
            case 9:
                i++;
                if (word[i] === "r") state = 10;
                else return false;
            case 10:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isString(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "s") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "t") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === "r") state = 4;
                else return false;
            case 4:
                i++;
                if (word[i] === "i") state = 5;
                else return false;
            case 5:
                i++;
                if (word[i] === "n") state = 6;
                else return false;
            case 6:
                i++;
                if (word[i] === "g") state = 7;
                else return false;
            case 7:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isIs(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "i") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "s") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

function isTo(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (word[i] === "t") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === "o") state = 3;
                else return false;
            case 3:
                i++;
                if (word[i] === undefined) return true;
                else return false;
        }
    }
}

export default isKeyword;
