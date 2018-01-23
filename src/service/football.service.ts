export class FootballService {
    url: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/it.1.json";
    xhr: XMLHttpRequest;

    constructor() {}

    getJSON() {
        this.xhr = new XMLHttpRequest;
        this.xhr.open("get", this.url);
        this.xhr.onload = (ev) => {
            console.log( (<XMLHttpRequest>ev.target).response );
        };
        this.xhr.send();
    }
}