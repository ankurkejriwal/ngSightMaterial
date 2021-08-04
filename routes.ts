import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LoginComponent } from 'src/app/login/login.component';
import { MainComponent } from 'src/app/main/main.component';
import { SectionDashboardComponent } from 'src/app/sections/section-dashboard/section-dashboard.component';
import { SectionFormComponent } from 'src/app/sections/section-form/section-form.component';
import { SectionHealthComponent } from 'src/app/sections/section-health/section-health.component';


export const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: MainComponent,
      children: [
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
          },
        { path: 'dashboard', component: SectionDashboardComponent },
        { path: 'health', component: SectionHealthComponent },
        { path: 'form', component: SectionFormComponent }
    ]}];
  

// export const appRoutes: Routes = [
//       {
//         path: '',
//         component: MainComponent,
//         canActivate: [AuthGuard],
//         children: [
//           { path: 'dashboard', component: SectionDashboardComponent },
//           { path: 'health', component: SectionHealthComponent },
//           { path: 'form', component: SectionFormComponent }
//         ]
//       },
//       {
//         path: '',
//         component: LoginComponent,
//       },
//       { path: '**', redirectTo: '' }
//     ];