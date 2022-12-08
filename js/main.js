import isKeyword from "./isKeyword.js";
import isId from "./isId.js";

const content = document.querySelector("#source-code");
const form = document.querySelector("#form");
const table = document.querySelector("#table");
const tableBody = document.querySelector("#table-body");
const emptyMsg = document.querySelector("#empty");

form.addEventListener("submit", compile);

function compile(e) {
    e.preventDefault();
    table.className = "";
    tableBody.innerHTML = "";
    emptyMsg.className = "hide";
    const code = content.value;
    const lines = code.split("\n");

    let numberOfIdes = 0;

    lines.forEach((line) => {
        let words = line.split(" ");
        words.forEach((word) => {
            if (word) {
                let keywordToken = isKeyword(word);
                let idToken = isId(word);
                if (keywordToken) {
                    addToTable(word, "ACCEPTED", "GREEN");
                } else if (idToken) {
                    idToken += `_${++numberOfIdes}`;
                    addToTable(word, "ACCEPTED", "GREEN");
                } else {
                    addToTable(word, "REJECTED!", "RED");
                }
            }
        });
    });
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

    tableBody.appendChild(tr);
}
