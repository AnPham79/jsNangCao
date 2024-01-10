const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      ['Neuer', 'Pavard', 'Lucas', 'Hernandez', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
      ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5
    },

    printGoals: function() {
        console.log(` tên cầu thủ ghi bàn phía bayern là ${game.scored} `);
    }
  };

  // lab 1.1
  // câu 1: tạo 1 mảng cầu thủ cho mỗi đội
  // mảng danh sách cầu thủ đội 1
  const [player1, player2] = game.players;
  console.log(player1, player2);

  // câu 2 phần tử đầu tiên là gk còn những thằng còn lại là fieldPlayers

  const [gk, ...fieldPlayers] = player1;
  console.log(gk, fieldPlayers);

  // câu 3 tạo mảng tất cả cầu thủ 2 đội

  const allPlayers = [...game.players[0], ...game.players[1]];

  // câu 4 tạo mảng 3 người ban đầu rồi thây thành 3 thằng dự bị thêm

  const newPayer =['Thiago', 'Coutinho','Perisic']
  const players1Final = [...game.players[0] , ...newPayer];

  // câu 5 tạo một biến thể hiện tỉ lệ kết quả trận đấu
  const { team1, x: draw, team2 } = game.odds;

  // câu 6: Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn
  game.printGoals(...game.scored)

  // câu 7: Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng
  game.odds.team1 < game.odds.team2 && console.log('team 1 chiến thắng') ||
  game.odds.team1 > game.odds.team2 && console.log('team 2 chiến thắng');