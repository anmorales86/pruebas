import { Routes, RouterModule } from '@angular/router';

import { ListasComponent } from './components/listas/listas.component';
import { ReclamosComponent } from './components/reclamos/reclamos.component';
import { ModificacionesComponent } from './components/modificaciones/modificaciones.component';


const appRoutes: Routes = [
    { path: 'listas', component:ListasComponent },
    { path: 'reclamos', component:ReclamosComponent },
    { path: 'modificaciones', component:ModificacionesComponent },
    // otherwise redirect to home
    { path: '', redirectTo: '', pathMatch: 'full' }
 ];

export const routing = RouterModule.forRoot(appRoutes);