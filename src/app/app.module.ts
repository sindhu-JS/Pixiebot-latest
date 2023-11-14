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
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './landing/main-section/main-section.component';
import { ServiceSectionComponent } from './landing/service-section/service-section.component';
import { PortfolioSectionComponent } from './landing/portfolio-section/portfolio-section.component';
import { AboutSectionComponent } from './landing/about-section/about-section.component';
import { ProgressSectionComponent } from './landing/progress-section/progress-section.component';
import { TestimonialSectionComponent } from './landing/testimonial-section/testimonial-section.component';
import { ContactSectionComponent } from './landing/contact-section/contact-section.component';
import { ClientSectionComponent } from './landing/client-section/client-section.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    MainSectionComponent,
    ServiceSectionComponent,
    PortfolioSectionComponent,
    AboutSectionComponent,
    ProgressSectionComponent,
    TestimonialSectionComponent,
    ContactSectionComponent,
    ClientSectionComponent
  ],
  imports: [
    //BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    RouterModule,
    GalleryModule,
    LightboxModule,
    ToastModule,
    InputTextareaModule
  ],
  providers: [Lightbox, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
