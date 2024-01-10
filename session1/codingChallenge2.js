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
    },

    printOdds: function() {
      const properties = Object.keys(this.odds);
      console.log(properties);

      for (let [team, odd] of Object.entries(this.odds)) {
          const teamStr = team === 'x' ? 'draw' : `Tỉ lệ thắng của ${this[team]}`
          console.log(`Chỉ số của đội ${teamStr} là ${odd}`);
      }
  }
  };

  // bài 1 gọi và in ra tất cả các cầu thủ

  for(const [i, player] of game.scored.entries()) {
    console.log(`cầu thủ thứ ${i+1} ghi bàn có tên là : ${player}`);
  }

  // bài 2: Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console

  const odds = Object.values(game.odds);
console.log(odds);

let sum = 0;

for (let odd of odds) {
    sum += odd;
}

const average = sum / odds.length;
console.log(`Tỉ lệ kết quả trận đấu là: ${average}`);

// bài 3: in hiệu số của 2 đội bóng và hiệu số trung bình của 2 đội
game.printOdds();




