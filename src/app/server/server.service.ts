import { Server } from './server.model';
import { EventEmitter } from '../../../node_modules/@angular/core';


export class ServerService {
    serversChanged = new EventEmitter<Server[]>();
    private servers: Server[] = [
        new Server(1, "Core", "10.1.1.1", "7/25/2018", "Pending", ''),
        new Server(2, "Core", "10.1.1.1", "7/25/2018", "Pending", '')
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
}