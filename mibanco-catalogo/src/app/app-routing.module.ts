import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  {
		path: 'catalogo',
		loadChildren: () => import('./modules/catalogo/catalogo.routes').then((m) => m.routes),
	},
  { path: '**', redirectTo: 'catalogo' } // para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
