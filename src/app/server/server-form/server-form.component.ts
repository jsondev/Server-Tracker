import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Server } from '../../shared/server.model';
import { ServerService } from '../server.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {
  @ViewChild('hostnameInput') hostnameInputRef: ElementRef;
  @ViewChild('ipInput') ipInputRef: ElementRef;
  @ViewChild('deadlineInput') deadlineInputRef: ElementRef;
  @ViewChild('statusInput') statusInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;

  pattern:RegExp = /^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/igm;
  constructor(private stService: ServerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onAddItem() {
    const ingHostname = this.hostnameInputRef.nativeElement.value;
    const ingIp = this.ipInputRef.nativeElement.value;
    const ingDeadline = this.deadlineInputRef.nativeElement.value;
    const ingStatus = this.statusInputRef.nativeElement.value;
    const ingDesc = this.descriptionInputRef.nativeElement.value;
    const newServer = new Server(1, ingHostname, ingIp, new Date(ingDeadline), ingStatus, ingDesc);
    this.stService.addServer(newServer);
    this.router.navigate(
      ['servers']);
  }
}
