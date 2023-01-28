export default function syntaxAnalyzer(data) {
    let tokens = [];
    let lookahead = 0;
    let rawData = data;
    data.forEach((element) => {
        let a = element.split("_");
        let token = "";
        for (let i = 0; i < a.length - 1; i++) {
            if (i == 0) {
                token += `${a[i]}`;
            } else {
                token += `_${a[i]}`;
            }
        }
        tokens.push(token);
    });

    statement();
    renderLog("success", "Code compiled successfully");

    function match(symbol) {
        if (lookahead + 1 > tokens.length) {
            renderLog(
                "error",
                "expected " + symbol + " at line " + getLineNumber()
            );

            throw new Error(
                "expected " + symbol + " at line " + getLineNumber()
            );
        } else if (tokens[lookahead] === symbol) {
            lookahead += 1;
            return;
        } else {
            renderLog(
                "error",
                "do Not expected " +
                    tokens[lookahead] +
                    " at line " +
                    getLineNumber()
            );
            throw new Error(
                "do Not expected " +
                    tokens[lookahead] +
                    " at line " +
                    getLineNumber()
            );
        }
        return;
    }

    function statement() {
        if (
            tokens[lookahead] === "TOKEN_FUNCTION" ||
            tokens[lookahead] === "TOKEN_CALL" ||
            tokens[lookahead] === "TOKEN_VARIABLE" ||
            tokens[lookahead] === "TOKEN_LOOP" ||
            tokens[lookahead] === "TOKEN_ASSIGN_OPERATOR" ||
            tokens[lookahead] === "TOKEN_IF"
        ) {
            syntax();
            statement();
        } else if (tokens[lookahead] === "TOKEN_ID") {
            match("TOKEN_ID");
            operationOrComparison();
            idOrData();
            statement();
        } else if (tokens[lookahead] === "TOKEN_DATA") {
            match("TOKEN_DATA");
            operationOrComparison();
            idOrData();
            statement();
        } else {
            return;
        }
    }

    function syntax() {
        if (tokens[lookahead] === "TOKEN_FUNCTION") {
            match("TOKEN_FUNCTION");
            match("TOKEN_ID");
            functionSyntax();
        } else if (tokens[lookahead] === "TOKEN_IF") {
            match("TOKEN_IF");
            idOrData();
            comparisonOperator();
            idOrData();
            match("TOKEN_OPEN_BRACE");
            statement();
            match("TOKEN_CLOSED_BRACE");
            otherwiseOrElse();
        } else if (tokens[lookahead] === "TOKEN_ASSIGN_OPERATOR") {
            match("TOKEN_ASSIGN_OPERATOR");
            match("TOKEN_DATA");
            match("TOKEN_TO");
            match("TOKEN_ID");
        } else if (tokens[lookahead] === "TOKEN_CALL") {
            match("TOKEN_CALL");
            match("TOKEN_ID");
            send();
        } else if (tokens[lookahead] === "TOKEN_VARIABLE") {
            match("TOKEN_VARIABLE");
            match("TOKEN_ID");
            match("TOKEN_IS");
            dataType();
        } else if (tokens[lookahead] === "TOKEN_LOOP") {
            match("TOKEN_LOOP");
            whileOrFrom();
        } else {
            renderLog("error", "expected synatx at line " + getLineNumber());
            throw new Error("expected synatx");
        }
        return;
    }

    function dataType() {
        if (tokens[lookahead] === "TOKEN_INTEGER") {
            match("TOKEN_INTEGER");
        } else if (tokens[lookahead] === "TOKEN_STRING") match("TOKEN_STRING");
        else if (tokens[lookahead] === "TOKEN_FLOAT") match("TOKEN_FLOAT");
        else if (tokens[lookahead] === "TOKEN_CHARACTER")
            match("TOKEN_CHARACTER");
    }

    function otherwiseOrElse() {
        if (tokens[lookahead] === "TOKEN_OTHERWISE") {
            match("TOKEN_OTHERWISE");
            match("TOKEN_IF");
            idOrData();
            comparisonOperator();
            idOrData();
            match("TOKEN_OPEN_BRACE");
            statement();
            match("TOKEN_CLOSED_BRACE");
            otherwiseOrElse();
        } else if (tokens[lookahead] === "TOKEN_ELSE") {
            match("TOKEN_ELSE");
            match("TOKEN_OPEN_BRACE");
            statement();
            match("TOKEN_CLOSED_BRACE");
        } else {
            return;
        }
        return;
    }

    function send() {
        if (tokens[lookahead] === "TOKEN_SEND") {
            match("TOKEN_SEND");
            idOrData();
            moreIdOrData();
        } else {
            return;
        }
    }

    function whileOrFrom() {
        if (tokens[lookahead] === "TOKEN_FROM") {
            match("TOKEN_FROM");
            idOrData();
            match("TOKEN_TILL");
            idOrData();
            match("TOKEN_OPEN_BRACE");
            statement();
            match("TOKEN_CLOSED_BRACE");
        } else if (tokens[lookahead] === "TOKEN_WHILE") {
            match("TOKEN_WHILE");
            idOrData();
            comparisonOperator();
            idOrData();
            match("TOKEN_OPEN_BRACE");
            statement();
            match("TOKEN_CLOSED_BRACE");
        } else {
            renderLog(
                "error",
                "expected loop syntax at line " + getLineNumber()
            );

            throw new Error("expected loop syntax at line " + getLineNumber());
        }
    }

    function operationOrComparison() {
        if (
            tokens[lookahead] === "TOKEN_EQUALS_OPERATOR" ||
            tokens[lookahead] === "TOKEN_NOTEQUALS_OPERATOR" ||
            tokens[lookahead] === "TOKEN_SMALLER_OPERATOR" ||
            tokens[lookahead] === "TOKEN_SMALLER_OR_EQUALS_OPERATOR" ||
            tokens[lookahead] === "TOKEN_GREATER_OPERATOR" ||
            tokens[lookahead] === "TOKEN_GREATER_OR_EQUALS_OPERATOR"
        ) {
            comparisonOperator();
        } else if (
            tokens[lookahead] === "TOKEN_PLUS_OPERATOR" ||
            tokens[lookahead] === "TOKEN_MINUS_OPERATOR" ||
            tokens[lookahead] === "TOKEN_TIMES_OPERATOR" ||
            tokens[lookahead] === "TOKEN_DIVIDED_OPERATOR"
        ) {
            operationOperator();
        } else {
            renderLog("error", "expected operator at line " + getLineNumber());
            throw new Error("expected OPERATOR");
        }
        return;
    }

    function comparisonOperator() {
        if (tokens[lookahead] === "TOKEN_EQUALS_OPERATOR") {
            match("TOKEN_EQUALS_OPERATOR");
        } else if (tokens[lookahead] === "TOKEN_NOTEQUALS_OPERATOR") {
            match("TOKEN_NOTEQUALS_OPERATOR");
        } else if (tokens[lookahead] === "TOKEN_SMALLER_OPERATOR") {
            match("TOKEN_SMALLER_OPERATOR");
        } else if (tokens[lookahead] === "TOKEN_SMALLER_OR_EQUALS_OPERATOR") {
            match("TOKEN_SMALLER_OR_EQUALS_OPERATOR");
        } else if (tokens[lookahead] === "TOKEN_GREATER_OPERATOR") {
            match("TOKEN_GREATER_OPERATOR");
        } else if (tokens[lookahead] === "TOKEN_GREATER_OR_EQUALS_OPERATOR") {
            match("TOKEN_GREATER_OR_EQUALS_OPERATOR");
        } else {
            renderLog(
                "error",
                "expected comparison operator in line " + getLineNumber()
            );

            throw new Error(
                "expected comparison operator in line " + getLineNumber()
            );
        }
        return;
    }

    function idOrData() {
        if (tokens[lookahead] === "TOKEN_ID") {
            match("TOKEN_ID");
        } else if (tokens[lookahead] === "TOKEN_DATA") {
            match("TOKEN_DATA");
        } else {
            renderLog(
                "error",
                "expected data or id at line " + getLineNumber()
            );
            throw new Error("expected data or id at line " + getLineNumber());
        }
        return;
    }

    function operationOperator() {
        if (tokens[lookahead] === "TOKEN_PLUS_OPERATOR") {
            match("TOKEN_PLUS_OPERATOR");
        } else if (tokens[lookahead] === "TOKEN_MINUS_OPERATOR") {
            match("TOKEN_MINUS_OPERATOR");
        } else if (tokens[lookahead] === "TOKEN_TIMES_OPERATOR") {
            match("TOKEN_TIMES_OPERATOR");
        } else if (tokens[lookahead] === "TOKEN_DIVIDED_OPERATOR") {
            match("TOKEN_DIVIDED_OPERATOR");
        } else {
            renderLog(
                "error",
                "expected operation operator at line " + getLineNumber()
            );
            throw new Error("expected OPERATOR");
        }
        return;
    }

    function functionSyntax() {
        if (tokens[lookahead] === "TOKEN_NEEDS") {
            match("TOKEN_NEEDS");
            match("TOKEN_ID");
            moreId();
            match("TOKEN_OPEN_BRACE");
            statement();
            match("TOKEN_CLOSED_BRACE");
        } else if (tokens[lookahead] === "TOKEN_OPEN_BRACE") {
            match("TOKEN_OPEN_BRACE");
            statement();
            match("TOKEN_CLOSED_BRACE");
        } else {
            renderLog(
                "error",
                "expected open brace at line " + getLineNumber()
            );
            throw new Error("expected open brace");
        }
        return;
    }

    function moreId() {
        if (tokens[lookahead] === "TOKEN_COMMA") {
            match("TOKEN_COMMA");
            match("TOKEN_ID");
            moreId();
        } else {
            return;
        }
    }

    function moreIdOrData() {
        if (tokens[lookahead] === "TOKEN_COMMA") {
            match("TOKEN_COMMA");
            idOrData();
            moreIdOrData();
        } else {
            return;
        }
    }

    function getLineNumber() {
        if (rawData[lookahead]) {
            return rawData[lookahead].split("_").slice(-1)[0];
        } else {
            return rawData[lookahead - 1].split("_").slice(-1)[0];
        }
    }
}

function renderLog(type, msg) {
    const logs = document.querySelector("#logs");
    const emptyMsg = document.querySelector("#logs-empty");
    emptyMsg.className = "hide";
    logs.classList.remove("hide");
    const div = document.createElement("div");
    if (type === "success") div.classList += "success";
    else if (type === "error") div.classList += "error";
    div.appendChild(document.createTextNode(msg));
    logs.appendChild(div);
}
