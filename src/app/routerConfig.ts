import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

const appRoutes : Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'projects',
        component: ProjectsComponent
    },
    {
        path:'services',
        component: ServicesComponent
    },
    {
        path:'contact',
        component: ContactComponent
    }
]

export default appRoutes;