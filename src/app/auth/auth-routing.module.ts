import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";

const routes: Routes = [
    { path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'login', component: LoginPageComponent },
            { path: 'new-account', component: RegisterComponent },
            { path: '**', redirectTo: 'login' },
        ]
    },
];


@NgModule ({
    imports: [
        RouterModule.forChild (routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AuthRoutingModule {}