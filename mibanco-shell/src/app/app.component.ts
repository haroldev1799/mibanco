import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>Mi Banco</h1>
      <nav>
        <a routerLink="/cotizador">Cotizador</a>
        <a routerLink="/catalogo">Catálogo</a>2
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mibanco-shell';
}
