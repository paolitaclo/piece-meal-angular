import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AuthenticationService } from './services/authentication.service';
import { RecipesService } from './services/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeItemComponent,
    SearchBarComponent,
    NavigationBarComponent,
    SignInComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ AuthenticationService, RecipesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
