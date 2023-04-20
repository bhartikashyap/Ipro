import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: "/",
  //   loadChildren: () =>
  //     import("./pages/splash/splash.module").then((m) => m.SplashPageModule),
  // },
  {
    path: "splash",
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
  {
    path: 'questionaires',
    loadChildren: () => import('./pages/questionaires/questionaires.module').then( m => m.QuestionairesPageModule)
  },
  {
    path: 'user-modal',
    loadChildren: () => import('./components/user-modal/user-modal.module').then( m => m.UserModalPageModule)
  },
  {
    path: "questionare",
    loadChildren: () =>
      import(
        "./pages/questionaires/questionaires.module"
      ).then((m) => m.QuestionairesPageModule),
  },
  {
    path: "question",
    loadChildren: () =>
      import("./pages/question/question.module").then(
        (m) => m.QuestionPageModule
      ),
  }
  ,
  {
    path: 'member-replacement',
    loadChildren: () => import('./pages/member-replacement/member-replacement.module').then( m => m.MemberReplacementPageModule)
  }












  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
