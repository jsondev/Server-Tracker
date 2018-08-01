import { Component, OnInit } from '@angular/core';
import { Server } from '../../shared/server.model';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server-overdue',
  templateUrl: './server-overdue.component.html',
  styleUrls: ['./server-overdue.component.css']
})
export class ServerOverdueComponent implements OnInit {
  today:number = Date.now();
  oneDay:number = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  cToday: number = new Date().getTime();


  servers: Server[];
  constructor(private stService: ServerService) { }

  ngOnInit() {
    this.servers = this.stService.getServers();
    this.stService.serversChanged.subscribe(
      (servers: Server[]) => {
        this.servers = servers;
      }
    );
  }
  calculateDate(server){
    const diffDays = Math.round(Math.abs((server.deadline.getTime() - this.cToday)/(this.oneDay)));
    return diffDays;
  }

}
