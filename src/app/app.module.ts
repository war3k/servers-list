import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { ServersComponent } from './components/servers/servers.component';
import { ServerComponent } from './components/server/server.component';
import { ServersService } from './services/servers.service';


// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'servers',
    pathMatch: 'full'
  },
  {
    path: 'servers',
    component: ServersComponent
  },
  {
    path: 'servers/:id',
    component: ServerComponent
  },
  {
    path: 'servers/new',
    component: ServerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
