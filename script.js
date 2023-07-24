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

function initiateChess(name, ix, iy, cx, cy, color, row, piece) {
    chess.push({
        piece: name,
        initialX: ix,
        initialY: iy,
        currentX: cx,
        currentY: cy,
        color: color,
    });
    let soldier = document.getElementById(`${row}${iy}`);
    soldier.classList.add(piece);
}

function arrangeCoins() {
    // init soldiers
    // while soldiers
    for (var i = 0; i < 8; i++) {
        initiateChess("soldier", 1, i, 1, i, "white", 1, "wsoldier");
    }
    //black soldiers
    for (var i = 0; i < 8; i++) {
        initiateChess("soldier", 6, i, 6, i, "black", 6, "bsoldier");
    }

    //kings
    initiateChess("king", 0, 3, 0, 3, "white", 0, "wking");
    initiateChess("king", 7, 4, 7, 4, "black", 7, "bking");

    //queens
    initiateChess("queen", 0, 4, 0, 4, "white", 0, "wqueen");
    initiateChess("queen", 7, 3, 7, 3, "black", 7, "bqueen");

    //elephant
    initiateChess("elephant", 7, 0, 7, 0, "black", 7, "belephant");
    initiateChess("elephant", 7, 7, 7, 7, "black", 7, "belephant");
    initiateChess("elephant", 0, 0, 0, 0, "white", 0, "welephant");
    initiateChess("elephant", 0, 7, 0, 7, "white", 0, "welephant");

    //camel
    initiateChess("camel", 0, 2, 0, 2, "white", 0, "wcamel");
    initiateChess("camel", 0, 5, 0, 5, "white", 0, "wcamel");
    initiateChess("camel", 7, 2, 7, 2, "black", 7, "bcamel");
    initiateChess("camel", 7, 5, 7, 5, "black", 7, "bcamel");

    //horse
    initiateChess("horse", 0, 1, 0, 1, "white", 0, "whorse");
    initiateChess("horse", 0, 6, 0, 6, "white", 0, "whorse");
    initiateChess("horse", 7, 1, 7, 1, "black", 7, "bhorse");
    initiateChess("horse", 7, 6, 7, 6, "black", 7, "bhorse");
}


initiateChessBoard();
arrangeCoins();