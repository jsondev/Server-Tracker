import { Component, OnInit } from '@angular/core';
import { Server } from '../../shared/server.model';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
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
  onComplete(server){
    return server.status = "Complete";
  }
  onRemove(data){
    const index = this.servers.indexOf(data);
    if (index !== -1) {
      this.servers.splice(index, 1);
  }        

  }
}