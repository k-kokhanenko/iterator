import sum from './team';

const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
};

const team = new Team();
team.addCharacter(char);

for (const character of team) {
    console.log(character);
}