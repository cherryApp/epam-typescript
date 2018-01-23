import { Team } from '../model/team';
import { Round } from '../model/round';

export class FootballService {
    url: {team: string, match: string} = {
        match: "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/it.1.json",
        team: "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/it.1.clubs.json"
    };
    xhr: XMLHttpRequest;

    constructor() {}

    private getJSON(url: string, callBack: Function) {
        this.xhr = new XMLHttpRequest;
        this.xhr.open("get", url);
        this.xhr.onload = (ev) => {
            let data = JSON.parse((<XMLHttpRequest>ev.target).response);
            callBack(data);
        };
        this.xhr.send();
    }

    getMatch(): Promise<Round[]> {
        return new Promise<Round[]>( (resolve: any, reject: any) => {
            this.getJSON(this.url.match, (data: any) => {
                let matchArray: Round[] = [];
                for (let round of data.rounds) {
                    matchArray.push( new Round(round) );
                }
                resolve(matchArray);
            });
        });        
    }

    getTeam(callBack: Function): void {
        this.getJSON(this.url.team, (data: any) => {
            let teamArray: Team[] = [];
            for (let team of data.clubs) {
                teamArray.push( new Team(team) );
            }
            callBack(teamArray);
        });
    }
}