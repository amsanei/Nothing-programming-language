export default function isId(word) {
    let state = 1;
    let i = 0;
    while (1) {
        switch (state) {
            case 1:
                if (
                    (word[i] >= "a" && word[i] <= "z") ||
                    (word[i] >= "A" && word[i] <= "Z") ||
                    word[i] === "_"
                )
                    state = 2;
                else return false;
                break;
            case 2:
                i++;
                if (word[i] === undefined) return "TOKEN_ID";
                else if (
                    (word[i] >= "a" && word[i] <= "z") ||
                    (word[i] >= "A" && word[i] <= "Z") ||
                    (word[i] >= 0 && word[i] <= 9) ||
                    word[i] === "_"
                )
                    state = 2;
                else return false;
                break;
        }
    }
}
