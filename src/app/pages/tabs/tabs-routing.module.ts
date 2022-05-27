import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsComponent } from "./tabs.component";
import { UtilService } from "src/app/services/util.service";
const routes: Routes = [
  {
    path: "",
    component: TabsComponent,
    children: [
      {
        path: "area-of-interest",
        loadChildren: () =>
          import("../../pages/area-of-interest/area-of-interest.module").then(
            (m) => m.AreaOfInterestPageModule
          ),
      },
      {
        path: 'dashboard/:type',
        loadChildren: () =>
          // import('../../pages/member-replacement/member-replacement.module').then( m => m.MemberReplacementPageModule)
          import('../../pages/dashboard/dashboard.module').then(m => m.DashboardPageModule),
      },
      {
        path: 'basket',
        loadChildren: () =>
          import('../../pages/basket/basket.module').then(m => m.BasketPageModule),
      },
      {
        path: "personalized-micronutrition",
        loadChildren: () =>
          import("../../pages/personalized-micronutrition/personalized-micronutrition.module"
          ).then((m) => m.PersonalizedMicronutritionPageModule),
      },
      {
        path: "inteligent-trading",
        loadChildren: () =>
          import(
            "../../pages/inteligent-trading/inteligent-trading.module"
          ).then((m) => m.InteligentTradingPageModule),
      },
      {
        path: "ipro-partnership",
        loadChildren: () =>
          import("../../pages/ipro-partnership/ipro-partnership.module").then(
            (m) => m.IproPartnershipPageModule
          ),
      },
      {
        path: "book-analysis",
        loadChildren: () =>
          import("../../pages/book-analysis/book-analysis.module").then(
            (m) => m.BookAnalysisPageModule
          ),
      },
      {
        path: "cart",
        loadChildren: () =>
          import("../../pages/cart/cart.module").then((m) => m.CartPageModule),
      },
      {
        path: "check-zip",
        loadChildren: () =>
          import("../../pages/check-zip/check-zip.module").then(
            (m) => m.CheckZipPageModule
          ),
      },
      {
        path: "changepassword",
        loadChildren: () =>
          import("../../pages/changepassword/changepassword.module").then(
            (m) => m.ChangepasswordPageModule
          ),
      },
      {
        path: "shop",
        loadChildren: () =>
          import("../../pages/shop/shop.module").then((m) => m.ShopPageModule),
      },

      {
        path: "product-detail",
        loadChildren: () =>
          import(
            "../../pages/product-detail/product-detail.module"
          ).then((m) => m.ProductDetailPageModule),
      },
      {
        path: 'user-managment/:type',
        loadChildren: () =>
          import(
            "../../pages/prospect-managment/prospect-managment.module"
          ).then((m) => m.ProspectManagmentPageModule),

      },
      {


        path: 'notification',
        loadChildren: () => import("../../pages/notification/notification.module"
        ).then(m => m.NotificationPageModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('../../pages/mem-pros-detail/mem-pros-detail.module').then(m => m.MemProsDetailPageModule)
      },
      {
        path: 'my-sponsor',
        loadChildren: () => import('../../pages/my-sponsor/my-sponsor.module').then(m => m.MySponsorPageModule)
      },
      {
        path: 'myproducts',
        loadChildren: () => import('../../pages/myproducts/myproducts.module').then(m => m.MyproductsPageModule)
      },
      {
        path: 'setdiscount',
        loadChildren: () => import('../../pages/setdicount/setdicount.module').then(m => m.SetdicountPageModule)
      },
      {
        path: 'paymnet-option',
        loadChildren: () => import('../../pages/paymnet-option/paymnet-option.module').then( m => m.PaymnetOptionPageModule)
      },
      {
        path: 'commission-option',
        loadChildren: () => import('../../pages/commission-option/commission-option.module').then( m => m.CommissionOptionPageModule)
      }
    
    
      // {
      //   path: "",
      //   redirectTo: "/tabs/area-of-interest",
      //   pathMatch: "full",
      // },
    ],
  },
  // {
  //   path: "",
  //   redirectTo: "/tabs/area-of-interest",
  //   pathMatch: "full",
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule { }
