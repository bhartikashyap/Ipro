import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/splash/splash.module").then((m) => m.SplashPageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "forgotpassword",
    loadChildren: () =>
      import("./pages/forgotpassword/forgotpassword.module").then(
        (m) => m.ForgotpasswordPageModule
      ),
  },
  {
    path: "tabs",
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then((m) => m.TabsModule),
  },
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
