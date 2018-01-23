import { Team } from './team';

export class Match {
    matchDate: Date;
    date: string;
    score1: number;
    score2: number;
    team1: Team;
    team2: Team;

    constructor(match: Match) {
        this.matchDate = new Date(match.date);
        this.score1 = match.score1;
        this.score2 = match.score2;
        this.team1 = new Team(match.team1);
        this.team2 = new Team(match.team2);
    }
}