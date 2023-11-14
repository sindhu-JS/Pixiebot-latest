import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ColorScssService } from '../shared/service/color-scss.service';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInRight } from 'ng-animate';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../shared/service/util.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight))])]
})
export class LandingComponent implements OnInit {

  public activeClass = 'home';
  fadeInRight: any;
  constructor(
    private route: ActivatedRoute,
    private utilsService: UtilsService,
    public colorPicker: ColorScssService,
     @Inject(DOCUMENT) private document: Document,
      public breakpointObserver: BreakpointObserver,
      ) {

        this.route.fragment.subscribe((fragment: string) => {
          setTimeout(() => {
            this.utilsService.scrollToJustAbove(fragment, true);
          }, 200);
        });

  }

  ngOnInit() {
    this.colorPicker.setColorScheme('landing');
  }

  active(val) {
    this.activeClass = val;
    document.querySelector(`#${val}`).scrollIntoView({behavior: 'smooth' });
  }

  testimonialOptions = {
    items: 1,
    nav: false,
    dots: true,
    autoplay: false,
    slideSpeed: 300,
    loop: false,
    responsive: {
      0: {
        items: 1
      }
    }
  }
  
}
  
