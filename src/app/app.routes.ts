import { Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/HomeScreen/homescreen.component';
import { JwtScreenComponent } from './screens/jwt-screen/jwt-screen.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeScreenComponent
    },
    {
        path: "jwt",
        component: JwtScreenComponent
    }
];
