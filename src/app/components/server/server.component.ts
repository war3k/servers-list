import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../services/servers.service'
import { ActivatedRoute, Router } from '@angular/router';

export interface Server {
  id: string,
  name: string,
  ip: string,
  type: string,
  status: string
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
  public server: Server;
  public isDataAvailable: boolean = false;


  constructor(private serversService: ServersService, private route: ActivatedRoute, private router : Router) { }
  fetchData(id) {
    this.serversService.getServerById(id).subscribe(server => {

      console.log(server);
      this.server = server;
      this.isDataAvailable = true;
    });

  }
  ngOnInit() {
    let id;
    this.route.params.subscribe(params => {
      id = params['id'];
    });
    if (id != 'new') {
      console.log(this.route.params);
      this.fetchData(id);
    } else {
      this.server = {
        id: '',
        name: '',
        ip: '',
        status: '',
        type: ''
      }
      this.isDataAvailable = true;
    }
    console.log(this);

  }
  addNewServer(model: Server) {
    this.serversService.addNewServer(model.name, model.ip, model.type).subscribe(res => {
      console.log(res);
    });
    this.router.navigate(['/servers']);
  }
  deleteServer() {
    let id;
    this.route.params.subscribe(params => {
      id = params['id'];
    });
    this.serversService.deleteServer(id).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['/servers']);
  }
  updateServer(model: Server){
    console.log("model");
    console.log(model);
    let id;
    this.route.params.subscribe(params => {
      id = params['id'];
    });
    this.serversService.editServer(model.name, model.ip,id).subscribe(res => {
      console.log(res);
    });
  }
}
