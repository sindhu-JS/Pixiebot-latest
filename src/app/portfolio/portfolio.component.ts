import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ColorScssService } from '../shared/service/color-scss.service';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public activeClass = 'home';
  public url : any; 
  public customizer: any = "all"
  items: GalleryItem[];
 
  imageData = data;


  constructor(private router: Router, public colorPicker : ColorScssService, private displayblock: ColorScssService, public gallery: Gallery, public lightbox: Lightbox) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    const lightboxRef = this.gallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });
    lightboxRef.load(this.items);
  }
  openGallery(val) {
    this.customizer = val
  }
  active(val) {
    this.activeClass = val;
    document.querySelector(`#${val}`).scrollIntoView({behavior: 'smooth' });
  }
}

const data = [
  {
    srcUrl: 'assets/images/portfolio/1.jpg',
    previewUrl: 'assets/images/portfolio/1.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/2.jpg',
    previewUrl: 'assets/images/portfolio/2.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/3.jpg',
    previewUrl: 'assets/images/portfolio/3.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/4.jpg',
    previewUrl: 'assets/images/portfolio/4.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/5.jpg',
    previewUrl: 'assets/images/portfolio/5.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/6.jpg',
    previewUrl: 'assets/images/portfolio/6.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/7.jpg',
    previewUrl: 'assets/images/portfolio/7.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/9.jpg',
    previewUrl: 'assets/images/portfolio/9.jpg'
  }
]