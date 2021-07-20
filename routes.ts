import { Routes } from '@angular/router';
import { SectionDashboardComponent } from 'src/app/sections/section-dashboard/section-dashboard.component';
import { SectionFormComponent } from 'src/app/sections/section-form/section-form.component';
import { SectionHealthComponent } from 'src/app/sections/section-health/section-health.component';


export const appRoutes: Routes = [
    { path: 'dashboard', component: SectionDashboardComponent },
    { path: 'health', component: SectionHealthComponent },
    { path: 'form', component: SectionFormComponent },

    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];
