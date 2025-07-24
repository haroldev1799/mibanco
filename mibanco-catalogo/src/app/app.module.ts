import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}