import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { ServerFormComponent } from './server/server-form/server-form.component';
import { OverdueComponent } from './overdue/overdue.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/servers', pathMatch: 'full' },
    { path: 'servers', component: ServerComponent },
    { path: 'overdue', component: OverdueComponent },
    { path: 'new', component: ServerFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}