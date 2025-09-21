import { Routes } from '@angular/router';
import { MaterialesComponent } from './materiales/materiales.component';
import { TijerasComponent } from './tijeras/tijeras.component';
import { PlumasComponent } from './plumas/plumas.component';
import { CuadernosComponent } from './cuadernos/cuadernos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CardComponent } from './card/card.component';
import { CompraComponent } from './compra/compra.component';


export const PAPELERIA_ROUTES: Routes = [
  { path: 'materiales', component: MaterialesComponent},
  { path: 'tijeras', component: TijerasComponent},
  { path: 'plumas', component: PlumasComponent},
  { path: 'cuadernos', component: CuadernosComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'card', component: CardComponent },
  { path: 'compra', component: CompraComponent}
]
