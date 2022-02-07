import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsComponent } from "./tabs.component";
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
        path: "personalized-micronutrition",
        loadChildren: () =>
          import(
            "../../pages/personalized-micronutrition/personalized-micronutrition.module"
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
        path: "card",
        loadChildren: () =>
          import("../../pages/card/card.module").then((m) => m.CardPageModule),
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
        path: "question",
        loadChildren: () =>
          import("../../pages/question/question.module").then(
            (m) => m.QuestionPageModule
          ),
      },
      {
        path: "check-zip",
        loadChildren: () =>
          import("../../pages/check-zip/check-zip.module").then(
            (m) => m.CheckZipPageModule
          ),
      },
      {
        path: "shop",
        loadChildren: () =>
          import("../../pages/shop/shop.module").then((m) => m.ShopPageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/area-of-interest",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/area-of-interest",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
