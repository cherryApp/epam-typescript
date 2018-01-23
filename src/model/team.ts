export class Team {
    key: string;
    name: string;
    code: string;
    constructor(team: Team) {
        this.key = team.key;
        this.name = team.name;
        this.code = team.code;
    }

    get teamName(): string {
        return this.name;
    }
}