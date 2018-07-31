import { Component, OnInit } from '@angular/core';
import { Server } from '../server.model';
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
}