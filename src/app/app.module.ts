import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicornComponent } from './pages/unicorn/unicorn.component';
import { UnicornsListComponent } from './pages/unicorns-list/unicorns-list.component';

@NgModule({
  declarations: [AppComponent, UnicornsListComponent, UnicornComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
