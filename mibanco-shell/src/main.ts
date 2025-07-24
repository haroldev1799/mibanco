import { initFederation } from '@angular-architects/module-federation-runtime';

(async () => {
  await initFederation({
    cotizador: {
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js'
    }
  });

  import('./bootstrap')
    .catch(err => console.error(err));
})();