import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineTest1Component } from './components/machine-test1/machine-test1.component';

const routes: Routes = [
  {
    path:'test-1',
    component: MachineTest1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
