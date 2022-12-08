import isKeyword from "./isKeyword.js";
import isId from "./isId.js";
import isSymbol from "./isSymbol.js";
import isOperator from "./isOperator.js";
import isData from "./isData.js";
import isComment from "./isComment.js";

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
                let symbolToken = isSymbol(word);
                let operatorToken = isOperator(word);
                let dataToken = isData(word);
                if (keywordToken) {
                    addToTable(word, "ACCEPTED", "GREEN", keywordToken);
                } else if (dataToken) {
                    addToTable(word, "ACCEPTED", "GREEN", dataToken);
                } else if (idToken) {
                    idToken += `_${++numberOfIdes}`;
                    addToTable(word, "ACCEPTED", "GREEN", idToken);
                } else if (symbolToken) {
                    addToTable(word, "ACCEPTED", "GREEN", symbolToken);
                } else if (operatorToken) {
                    addToTable(word, "ACCEPTED", "GREEN", operatorToken);
                } else if (isComment(word)) {
                    return;
                } else {
                    addToTable(word, "REJECTED!", "RED", "----");
                }
            }
        });
    });
}

function addToTable(text1, text2, style, token) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    if (style === "RED") td2.className = "red";
    else if (style === "GREEN") td2.className = "green";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    td1.appendChild(document.createTextNode(text1));
    td2.appendChild(document.createTextNode(text2));
    td3.appendChild(document.createTextNode(token));

    tableBody.appendChild(tr);
}
