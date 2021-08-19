import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhereamiComponent } from './whereami.component';

const routes: Routes = [{ path: '', component: WhereamiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhereamiRoutingModule { }
