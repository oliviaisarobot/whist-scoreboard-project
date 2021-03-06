import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { SimplemenuComponent } from './games/simple/simplemenu/simplemenu.component';
import { SimplesetupComponent } from './games/simple/simplesetup/simplesetup.component';
import { SimpleboardComponent } from './games/simple/simpleboard/simpleboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    MenuComponent,
    SimplemenuComponent,
    SimplesetupComponent,
    SimpleboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forChild(),
    RouterModule.forRoot([
      { path: '', component: LoadingComponent},
      { path: 'menu', component: MenuComponent,
        children: [
          // { path: '', redirectTo: 'menu', pathMatch: 'full' },
        ],
      },
      { path: 'simple', redirectTo: 'simple/menu', pathMatch: 'full' },
      { path: 'simple/menu', component: SimplemenuComponent },
      { path: 'simple/setup', component: SimplesetupComponent },
      { path: 'simple/board', component: SimpleboardComponent },
    ]),
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
