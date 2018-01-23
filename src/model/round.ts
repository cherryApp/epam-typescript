import { Match } from './match';

export class Round {
    name: string;
    matches: Match[];

    constructor(round: Round) {
        this.name = round.name;
        this.matches = [];
        for (let match of round.matches) {
            this.matches.push( new Match(match) );
        }
    }
}