import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { dropDownDirective } from './shared/dropDown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';

import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { loadingSpinnerComponent } from './shared/spinner/spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor';
import { AlertComponent } from './shared/alert/alert.component';
import { RecipesModules } from './recipes/recipe.module';
import { SharedModule } from './shared/shared.module';

// import { TestToggelComponent } from './test-toggel/test-toggel.component';
// import { basicHighLightDirective } from './test-toggel/directive/basic-highlight.directive';
// import { AppAdvDirectiveDirective } from './test-toggel/directive/app-adv-directive.directive';
// import { HostBindingDirective } from './test-toggel/directive/host-binding.directive';
// import { UnlessDirective } from './test-toggel/directive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ShoppingListComponent,
    ShoppingEditComponent,



    AuthComponent,
    loadingSpinnerComponent,
    AlertComponent,


    //  TestToggelComponent,
    //  basicHighLightDirective,
    //  AppAdvDirectiveDirective,
    //  HostBindingDirective,
    //  UnlessDirective
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecipesModules,
    SharedModule

  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
