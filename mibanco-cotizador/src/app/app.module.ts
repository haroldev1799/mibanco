import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ModalLoaderComponent } from '@components/molecules/modals/modal-loader/modal-loader.component';
import { AppRoutingModule } from './app-routing.module';
import { CotizadorProviders } from '@modules/cotizador/cotizador.provider';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModalLoaderComponent,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
	providers: [
    CotizadorProviders
  ],
})
export class AppModule {}