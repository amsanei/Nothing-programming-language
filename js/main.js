const content = document.querySelector("#source-code");
const form = document.querySelector("#form");
const table = document.querySelector("#table-body");

form.addEventListener("submit", compile);

const keyWords = [
    "function",
    "if",
    "otherwise",
    "else",
    "character",
    "string",
    "boolean",
    "float",
    "loop",
    "from",
    "to",
    "while",
    "variable",
    "integer",
    "needs",
    "till",
    "send",
    "is",
];

function compile(e) {
    e.preventDefault();
    const code = content.value;
    const lines = code.split("\n");

    lines.forEach((line) => {
        let words = line.split(" ");
        words.forEach((word) => {
            if (word) {
                if (keyWords.includes(word)) {
                    addToTable(word, "ACCEPTED", "GREEN");
                } else {
                    isID(word);
                }
            }
        });
    });

    function isID(word) {
        state = 1;
        let i = 0;
        while (1) {
            switch (state) {
                case 1:
                    if (
                        (word[i] >= "a" && word[i] <= "z") ||
                        (word[i] >= "A" && word[i] <= "Z") ||
                        word[i] === "_"
                    ) {
                        state = 2;
                    } else {
                        addToTable(word, "REJECTED!", "RED");
                        return;
                    }
                    break;
                case 2:
                    i++;
                    if (i >= word.length) {
                        addToTable(word, "ACCEPTED!", "GREEN");
                        return;
                    } else if (
                        (word[i] >= "a" && word[i] <= "z") ||
                        (word[i] >= "A" && word[i] <= "Z") ||
                        (word[i] >= 0 && word[i] <= 9) ||
                        word[i] === "_"
                    ) {
                        state = 2;
                    } else {
                        addToTable(word, "REJECTED!", "RED");
                        return;
                    }
                    break;
            }
        }
    }
}

function addToTable(text1, text2, style) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    if (style === "RED") td2.className = "red";
    else if (style === "GREEN") td2.className = "green";

    tr.appendChild(td1);
    tr.appendChild(td2);

    td1.appendChild(document.createTextNode(text1));
    td2.appendChild(document.createTextNode(text2));

    table.appendChild(tr);
}
