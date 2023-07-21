// 초기 설정
const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

// 이긴 경우의 조합
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// 셀 클릭 이벤트 핸들러
function handleCellClick(cellIndex) {
  if (board[cellIndex] === "" && !checkWinner()) {
    board[cellIndex] = currentPlayer;
    cells[cellIndex].textContent = currentPlayer;
    if (checkWinner()) {
      alert(`${currentPlayer}가 이겼습니다!`);
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

// 승리 여부 확인
function checkWinner() {
  for (const combination of winCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

// 초기화
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  cells.forEach((cell) => (cell.textContent = ""));
  alert("게임이 초기화되었습니다.");
}

// 셀 클릭 이벤트 연결
cells.forEach((cell) =>
  cell.addEventListener("click", () =>
    handleCellClick(Array.from(cells).indexOf(cell))
  )
);

// 초기화 버튼 이벤트 연결
const resetButton = document.createElement("button");
resetButton.textContent = "게임 초기화";
resetButton.addEventListener("click", resetGame);
document.body.appendChild(resetButton);
