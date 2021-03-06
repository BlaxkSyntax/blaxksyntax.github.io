import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DevspaceComponent } from './devspace/devspace.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'devspace',component:DevspaceComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
