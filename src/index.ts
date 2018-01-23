import { FootballService } from './service/football.service';

let service = new FootballService();
service.getMatch(() => {});
service.getTeam((teams: any) => {
    console.log(teams);
});
