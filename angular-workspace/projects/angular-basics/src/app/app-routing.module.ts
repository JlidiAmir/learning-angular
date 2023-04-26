import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: ()=>
          import("./home/feature/home.module").then((m)=>m.HomePageModule)
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"

  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
