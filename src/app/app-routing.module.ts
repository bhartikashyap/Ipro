import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'area-of-interest',
    loadChildren: () => import('./pages/area-of-interest/area-of-interest.module').then( m => m.AreaOfInterestPageModule)
  },
  {
    path: 'personalized-micronutrition',
    loadChildren: () => import('./pages/personalized-micronutrition/personalized-micronutrition.module').then( m => m.PersonalizedMicronutritionPageModule)
  },
  {
    path: 'inteligent-trading',
    loadChildren: () => import('./pages/inteligent-trading/inteligent-trading.module').then( m => m.InteligentTradingPageModule)
  },
  {
    path: 'ipro-partnership',
    loadChildren: () => import('./pages/ipro-partnership/ipro-partnership.module').then( m => m.IproPartnershipPageModule)
  },
  {
    path: 'book-analysis',
    loadChildren: () => import('./pages/book-analysis/book-analysis.module').then( m => m.BookAnalysisPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'question',
    loadChildren: () => import('./pages/question/question.module').then( m => m.QuestionPageModule)
  },  {
    path: 'check-zip',
    loadChildren: () => import('./pages/check-zip/check-zip.module').then( m => m.CheckZipPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
