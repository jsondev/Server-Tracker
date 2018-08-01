import { Server } from '../shared/server.model';
import { EventEmitter } from '@angular/core';


export class ServerService {
    serversChanged = new EventEmitter<Server[]>();
    private servers: Server[] = [
        new Server(1, "Core", "10.1.1.1", new Date("8/1/2018"), "Pending", "This server is up and running"),
        new Server(2, "Core", "10.1.1.1", new Date("7/25/2018"), "Pending", "Bender says: \"Abandon Ship!!\"")
    ];
    getServers() {
        return this.servers.slice();
    }
    addServer(server: Server) {
        this.servers.push(server);
        this.serversChanged.emit(this.servers.slice());
    }
    addServers(servers: Server[]) {
        this.servers.push(...servers);
        this.serversChanged.emit(this.servers.slice());
    }
    removeServer(server: Server){
        this.servers.splice(0, 1);
        this.serversChanged.emit(this.servers.slice());
    }
}