import { Routes, RouterModule } from '@angular/router';
import { authComponent } from 'src/auth/auth.component';
import { LayoutComponent } from './Layout/Layout.component';
import { CommunityComponent } from './Layouts/Community/Community.component';
import { consoleComponent } from './Layouts/console.component';
import { LifestyleComponent } from './Layouts/Lifestyle/Lifestyle.component';
import { mobileComponent } from './Layouts/Mobile/mobile.component';
import { PCComponent } from './Layouts/PC/PC.component';
import { ServicesComponent } from './Layouts/Services/Services.component';
import { SupprotComponent } from './Layouts/Support/Support.component';


const routes: Routes = [
    { path: 'Layout', component: LayoutComponent },
    { path: 'Community', component: CommunityComponent },
    { path: 'Lifestyle', component: LifestyleComponent },
    { path: 'mobile', component: mobileComponent},
    { path: 'Services', component: ServicesComponent },
    { path: 'Support', component: SupprotComponent },
    { path: 'console', component: consoleComponent },
    { path: 'PC', component: PCComponent },
    { path: 'auth', component: authComponent },
    // otherwise redirect to home
    { path: 'Layout', redirectTo: 'Layout' }
    
    
];

export const appRoutingModule = RouterModule.forRoot(routes)