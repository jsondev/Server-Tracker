import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './server/server.component';
import { ServerAddComponent } from './server/server-add/server-add.component';
import { ServerOverdueComponent } from './server/server-overdue/server-overdue.component';
import { ServerListComponent } from './server/server-list/server-list.component';
import { FooterComponent } from './footer/footer.component';
import { ServerService } from './server/server.service';
import { AppRoutingModule } from './app-router.module';
import { ServerFormComponent } from './server/server-form/server-form.component';
import { OverdueComponent } from './overdue/overdue.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerComponent,
    ServerAddComponent,
    ServerFormComponent,
    ServerOverdueComponent,
    ServerListComponent,
    FooterComponent,
    OverdueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
