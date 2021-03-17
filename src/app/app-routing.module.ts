import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const defaultRoute = '/dashboard';
const APP_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {title: 'Dashboard'}
  },
  {path: '', redirectTo: defaultRoute, pathMatch: 'full'},
  {path: '**', redirectTo: defaultRoute}
];

@NgModule({
  imports: [RouterModule.forRoot(
    APP_ROUTES,
    {
      enableTracing: false, // <-- set to 'true' for debugging purposes only
      useHash: false,
      relativeLinkResolution: 'legacy'
    }
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
