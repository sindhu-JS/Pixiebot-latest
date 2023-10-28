import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from './shared/shared.module';
import { Lightbox } from 'ng-gallery/lightbox';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './About us/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ServiceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    SharedModule,
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })

  ],
  providers: [Lightbox],
  bootstrap: [AppComponent]
})
export class AppModule { }
