import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroducesComponent } from './introduces/introduces.component';
import { IntroduceComponent } from './introduces/introduce/introduce.component';
import { IntroduceListComponent } from './introduces/introduce-list/introduce-list.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroducesComponent,
    IntroduceComponent,
    IntroduceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
