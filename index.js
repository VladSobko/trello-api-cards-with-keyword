const Trello = require("trello");
const trello = new Trello(
  "8bdea35fac03ccb7842bc300266586d3",
  "ea8ad5414a74c09ea12cf696c6537a4bcedbbef5ed2e1523d6303d9d21ccee3b"
);

const userId = "11vlados";
trello.getBoards(userId, function(error, trelloBoards) {
  trelloBoards.forEach(board => {
    // trello.getCardsOnBoard(board.id, function(error, trelloCards){
    //     console.log("Board: ",board.name)
    //     trelloCards.forEach(card => {

    //         console.log("    Card: ",card.name)
    //     });
    // })

    trello.getCardsOnBoardWithExtraParams(board.id, (task = "task"), function(
      error,
      trelloCards
    ) {
      console.log("Board: ", board.name);
      trelloCards.forEach(card => {
        if (card.name.toLowerCase().includes(task)) {
          console.log("    Card: ", card.name);
        }
      });
    });
  });
});
