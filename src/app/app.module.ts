import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MinipostComponent } from './components/minipost/minipost.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from "@angular/forms";
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MinipostComponent,
    SearchComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
