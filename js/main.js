import isKeyword from "./LexicalAnalyzer/isKeyword.js";
import isId from "./LexicalAnalyzer/isId.js";
import isSymbol from "./LexicalAnalyzer/isSymbol.js";
import isOperator from "./LexicalAnalyzer/isOperator.js";
import isData from "./LexicalAnalyzer/isData.js";
import isComment from "./LexicalAnalyzer/isComment.js";

const content = document.querySelector("#source-code");
const form = document.querySelector("#form");
const table = document.querySelector("#table");
const tableBody = document.querySelector("#table-body");
const emptyMsg = document.querySelector("#empty");
const logs = document.querySelector("#logs");

form.addEventListener("submit", compile);

function compile(e) {
    e.preventDefault();
    tableBody.innerHTML = "";
    const code = content.value;
    const lines = code.split("\n");

    let numberOfIdes = 0;
    let symbolTable = [];

    let tokens = [];

    lines.forEach((line, index) => {
        index += 1;
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
                    tokens.push((keywordToken += `_${index}`));
                } else if (dataToken) {
                    addToTable(word, "ACCEPTED", "GREEN", dataToken);
                    tokens.push("TOKEN_DATA" + `_${index}`);
                } else if (operatorToken) {
                    addToTable(word, "ACCEPTED", "GREEN", operatorToken);
                    tokens.push((operatorToken += `_${index}`));
                } else if (idToken) {
                    tokens.push((idToken += `_${index}`));
                    if (symbolTable.includes(word))
                        idToken += `_${symbolTable.indexOf(word) + 1}`;
                    else {
                        idToken += `_${++numberOfIdes}`;
                        symbolTable.push(word);
                    }
                    addToTable(word, "ACCEPTED", "GREEN", idToken);
                } else if (symbolToken) {
                    addToTable(word, "ACCEPTED", "GREEN", symbolToken);
                    tokens.push((symbolToken += `_${index}`));
                } else if (isComment(word)) {
                    return;
                } else {
                    addToTable(word, "REJECTED!", "RED", "🤷🏻‍♂️");
                }
            }
        });
    });
    if (symbolTable.length > 0) renderSymbolTable(symbolTable);
}

function addToTable(text1, text2, style, token) {
    emptyMsg.className = "hide";
    table.className = "";

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

function renderSymbolTable(data) {
    const table = document.querySelector("#symbolTable");
    const emptyMsg = document.querySelector("#empty2");
    table.className = "";
    emptyMsg.className = "hide";
    const tableBody = document.querySelector("#symbolTable-body");
    // Remove old data
    tableBody.innerHTML = "";
    // Remove Duplicates from data
    data = [...new Set(data)];
    data.forEach((element) => {
        const tr = document.createElement("tr");
        const index = document.createElement("td");
        const id = document.createElement("td");
        index.appendChild(document.createTextNode(data.indexOf(element) + 1));
        id.appendChild(document.createTextNode(element));
        tr.appendChild(index);
        tr.appendChild(id);
        tableBody.appendChild(tr);
    });
}
