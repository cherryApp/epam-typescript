import { FootballService } from './service/football.service';
import { Round } from './model/round';

let service = new FootballService();
service.getMatch().then( (matchDays: Round[]) => {
    console.log(matchDays);
});
service.getTeam((teams: any) => {
    console.log(teams);
});
