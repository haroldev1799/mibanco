import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';

export const routes: Routes = [
  {
    path: 'cotizador',
    loadChildren: () =>
      loadRemoteModule({
        exposedModule: './Module',
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
      }).then(m => m.AppModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}