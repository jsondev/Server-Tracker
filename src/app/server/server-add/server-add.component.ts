import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Server } from '../server.model';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server-add',
  templateUrl: './server-add.component.html',
  styleUrls: ['./server-add.component.css']
})
export class ServerAddComponent implements OnInit {
  @ViewChild('hostnameInput') hostnameInputRef: ElementRef;
  @ViewChild('ipInput') ipInputRef: ElementRef;
  @ViewChild('deadlineInput') deadlineInputRef: ElementRef;
  @ViewChild('statusInput') statusInputRef: ElementRef;

  constructor(private stService: ServerService) { }

  ngOnInit() {
  }
  onFormOpen() {

  }
  onAddItem() {
    
    const ingHostname = this.hostnameInputRef.nativeElement.value;
    const ingIp = this.ipInputRef.nativeElement.value;
    const ingDeadline = this.deadlineInputRef.nativeElement.value;
    const ingStatus = this.statusInputRef.nativeElement.value;
    const newServer = new Server(1, ingHostname, ingIp, ingDeadline, ingStatus, '');
    this.stService.addServer(newServer);

  }
}
