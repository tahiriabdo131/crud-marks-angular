import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarksComponent } from '../components/marks/marks.component';

const routes: Routes = [
  { path: 'marks', component: MarksComponent },
  {path:'**', component:MarksComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
