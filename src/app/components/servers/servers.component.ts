import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../services/servers.service'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    public isDataAvailable: boolean = false;
    servers: any = []

  constructor(private serversService: ServersService) { }

  ngOnInit() {

      this.serversService.getAllServers().subscribe(servers =>{
        this.servers = servers;
        for (let server of this.servers) {

        }
      });
  }
  serverActive(status:string){
    if (status=="works" || status=="starting" || status=="overloaded" || status=="error"){
      return true;
    }else {
      return false;
    }
  }
  startServer(id:string){
    console.log(id);
    this.serversService.startServer(id).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
  }
  restartServer(id:string){
    this.serversService.restartServer(id).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
  }
  stopServer(id:string){
    this.serversService.stopServer(id).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
  }
}
