import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CenterMenuComponent } from './components/navigation/center-menu/center-menu.component';
import { ToastrModule } from 'ngx-toastr';
import { OrderByPipe } from './pipes/order-by.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { UtilsService } from './service/util.service';

@NgModule({
  declarations: [MenuComponent, TapToTopComponent,HeaderComponent,BreadcrumbComponent,FooterComponent, CenterMenuComponent, OrderByPipe, LoaderComponent],
  exports:[
    MenuComponent,
    LoaderComponent,
    CenterMenuComponent,
    TapToTopComponent,
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  providers: [UtilsService]
})
export class SharedModule { }
