import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-add',
  templateUrl: './server-add.component.html',
  styleUrls: ['./server-add.component.css']
})
export class ServerAddComponent implements OnInit {
  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onNewServer() {
    this.router.navigate(
      ['new']);
  }

}
