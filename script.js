var chess = [];

function initiateChessBoard() {
    var chessboarddiv = document.getElementById("chessboard");
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var cell = document.createElement("div");
            cell.id = `${i}${j}`;
            cell.className = "cell";
            chessboarddiv.appendChild(cell);
        }
    }
}

function initiateChess(ix, iy, cx, cy, piece) {
    chess.push({
        piece: piece,
        initialX: ix,
        initialY: iy,
        currentX: cx,
        currentY: cy,
    });
    let peice = document.getElementById(`${ix}${iy}`);
    peice.classList.add(piece);
    peice.addEventListener("click", function () {
        markPossibleWays(ix + "" + iy)
    });
    peice.myParms = this;
}

function markPossibleWays(event) {
    const id = event;
    const x = Number(id.charAt(0)),
        y = Number(id.charAt(1));
    console.log(x, y);
    const coin =
        chess[chess.findIndex((e) => e.currentX == x && e.currentY == y)];
    const listofpossibilities = getPossiblePositions(coin);
    markNextPosibleMoves(listofpossibilities, coin);
}

function markNextPosibleMoves(moves, cpiece) {
    if (cpiece.piece == "bsoldier") {
        //check if any piece is present in diagonals indexes
        if (chess.includes(e => e.currentX == cpiece.currentX + moves[1].x && e.currentY == cpiece.currentY + moves[1].y)) {
            drawMark({ x: cpiece.currentX + moves[1].x, y: cpiece.currentY + moves[1].y }, cpiece);
        }
        if (chess.includes(e => e.currentX == cpiece.currentX + moves[2].x && e.currentY == cpiece.currentY + moves[2].y)) {
            drawMark({ x: cpiece.currentX + moves[2].x, y: cpiece.currentY + moves[2].y }, cpiece);
        }
        if(cpiece.currentX == 6)
        {
            drawMark({ x: cpiece.currentX + moves[3].x, y: cpiece.currentY + moves[3].y }, cpiece);
        }
        drawMark({ x: cpiece.currentX + moves[0].x, y: cpiece.currentY + moves[0].y }, cpiece);
    }
    if (cpiece.piece == "bhorse") {

    }
}

function drawMark(cords, cureentpiece) {
    let peice = document.getElementById(`${cords.x}${cords.y}`);
    peice.classList.add("marker");
    peice.addEventListener("click", function () {
        moveTo(cords, cureentpiece);
    });
}
function moveTo(cords, previouspiece) {
    //remove event of previous cell
    const prev = document.getElementById(`${previouspiece.currentX}${previouspiece.currentY}`);
    prev.removeEventListener("click", function () {
        markPossibleWays(this);
    })
    //remove event and picture of previous cell
    prev.classList.remove(previouspiece.piece);

    chess[chess.findIndex(x => x.currentX == previouspiece.currentX && x.currentY == previouspiece.currentY)].currentX = cords.x;
    chess[chess.findIndex(x => x.currentX == previouspiece.currentX && x.currentY == previouspiece.currentY)].currentY = cords.y;

    //remove previous event and add new event 
    let peice = document.getElementById(`${cords.x}${cords.y}`);
    peice.removeEventListener("click", function () {
        moveTo();
    });
    peice.classList.remove("marker");
    peice.classList.add(previouspiece.piece);
    peice.addEventListener("click", function () {
        markPossibleWays(cords.x + "" + cords.y);
    });
}
function getPossiblePositions(chesspiece) {
    const name = chesspiece.piece;
    let rules = [];
    console.log(chesspiece.piece);
    switch (name) {
        case "bsoldier":
            rules = [{ x: -1, y: 0 }, { x: 1, y: -1 }, { x: -1, y: -1 }, { x: -2, y: 0 }];
            break;
        case "bhorse":
            rules = [
                { x: -2, y: 1 },
                { x: -2, y: -1 },
                { x: 2, y: -1 },
                { x: 2, y: 1 },
                { x: -1, y: -2 },
                { x: 1, y: -2 },
                { x: -1, y: 2 },
                { x: 1, y: 2 },
            ];
            break;
        case "wcamel":
            rules = [{}];
            break;
        case "wqueen":
            rules = [{}];
            break;
        case "wking":
            rules = [{}];
            break;
        case "welephant":
            rules = [{}];
            break;
    }
    return rules;
}

function arrangeCoins() {
    // init soldiers
    // while soldiers
    for (var i = 0; i < 8; i++) {
        initiateChess(1, i, 1, i, "wsoldier");
    }
    //black soldiers
    for (var i = 0; i < 8; i++) {
        initiateChess(6, i, 6, i, "bsoldier");
    }

    //kings
    initiateChess(0, 3, 0, 3, "wking");
    initiateChess(7, 4, 7, 4, "bking");

    //queens
    initiateChess(0, 4, 0, 4, "wqueen");
    initiateChess(7, 3, 7, 3, "bqueen");

    //elephant
    initiateChess(7, 0, 7, 0, "belephant");
    initiateChess(7, 7, 7, 7, "belephant");
    initiateChess(0, 0, 0, 0, "welephant");
    initiateChess(0, 7, 0, 7, "welephant");

    //camel
    initiateChess(0, 2, 0, 2, "wcamel");
    initiateChess(0, 5, 0, 5, "wcamel");
    initiateChess(7, 2, 7, 2, "bcamel");
    initiateChess(7, 5, 7, 5, "bcamel");

    //horse
    initiateChess(0, 1, 0, 1, "whorse");
    initiateChess(0, 6, 0, 6, "whorse");
    initiateChess(7, 1, 7, 1, "bhorse");
    initiateChess(7, 6, 7, 6, "bhorse");
}

initiateChessBoard();
arrangeCoins();
