// Dữ liệu trận đấu và cầu thủ
const game = {
    homeTeam: 'Bayern Munich',
    awayTeam: 'Dortmund',
    score: {
        home: 2,
        away: 1
    },
    players: {
        team1: ['Neuer', 'Pavard', 'Sule', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Coman', 'Lewandowski', 'Gnabry'],
        team2: ['Burki', 'Hakimi', 'Hummels', 'Akanji', 'Guerreiro', 'Witsel', 'Dahoud', 'Brandt', 'Hazard', 'Reus', 'Haaland']
    },
    odds: {
        team1: 1.8,
        draw: 3.5,
        team2: 4.0
    }
};

// 1. Tạo mảng cầu thủ cho mỗi đội
const { team1, team2 } = game.players;
const gk1 = team1[0];
const fieldPlayers1 = team1.slice(1);
const gk2 = team2[0];
const fieldPlayers2 = team2.slice(1);

// 2. Mảng tất cả cầu thủ
const allPlayers = [...team1, ...team2];

// 3. Mảng cầu thủ của Bayern Munich sau khi thay người
const players1Final = [...team1, 'Thiago', 'Coutinho', 'Perisic'];

// 4. Tạo biến tỉ lệ kết quả trận đấu
const { team1: oddsTeam1, draw, team2: oddsTeam2 } = game.odds;

// 5. Hàm in ra tên cầu thủ ghi bàn
function printGoals(...scorers) {
    console.log(`Cầu thủ đã ghi bàn: ${scorers.join(', ')}`);
}

// 6. In ra đội chiến thắng dựa trên tỷ lệ chấp
const winningTeam = oddsTeam1 < oddsTeam2 ? game.homeTeam : game.awayTeam;
console.log(`Đội chiến thắng là: ${winningTeam}`);

// Gọi hàm in ra cầu thủ ghi bàn
printGoals('Lewandowski', 'Muller');

console.log(`Tất cả cẩu thủ là : ${allPlayers}`);
console.log(`Cầu thủ dư bị của rDortmund là : ${players1Final}`);
console.log(`Thủ môn của Bayern : ${gk1} và thủ môn của Dortmund là ${gk2}`);
