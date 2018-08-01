import { Component, OnInit } from '@angular/core';
import { Server } from '../shared/server.model';
import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-overdue',
  templateUrl: './overdue.component.html',
  styleUrls: ['./overdue.component.css']
})
export class OverdueComponent implements OnInit {
  today = Date.now();
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
  onRemove(data) {
    const index = this.servers.indexOf(data);
    if (index !== -1) {
      this.servers.splice(index, 1);
    }

  }
  onComplete(server) {
    return server.status = "Complete";
  }

}
