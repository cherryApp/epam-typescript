import { Team } from '../model/team';

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

    getMatch(callBack: Function): void {
        this.getJSON(this.url.match, () => {});
    }

    getTeam(callBack: Function): void {
        this.getJSON(this.url.team, (data: any) => {
            callBack((data.clubs as Team[]));
        });
    }
}