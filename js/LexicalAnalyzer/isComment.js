export default function isComment(lexeme) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (lexeme[i] === "!") state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (lexeme[i]) state = 3;
                else return false;
                break;
            case 3:
                i++;
                if (lexeme[i] === "!") return true;
                else if (lexeme[i]) state = 3;
                else return false;
                break;
        }
    }
}
