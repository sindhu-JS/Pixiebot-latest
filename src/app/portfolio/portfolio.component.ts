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
  public customizer: ProjectType = ProjectType.All;
  items: GalleryItem[];
  imageData: PortfolioProject[] = [];
  constructor(private router: Router, public colorPicker : ColorScssService, private displayblock: ColorScssService, public gallery: Gallery, public lightbox: Lightbox) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }
  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
    this.filterGallery(ProjectType.All);
  }

  filterGallery(projectType: ProjectType): void {
    this.customizer = projectType;
    this.imageData = projectType === ProjectType.All ? data : data.filter(e => e.projectTypes.includes(projectType));
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    const lightboxRef = this.gallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });
    lightboxRef.load(this.items);
  }

  active(val) {
    this.activeClass = val;
    document.querySelector(`#${val}`).scrollIntoView({behavior: 'smooth' });
  }

  get projectType() {
    return ProjectType;
  }
}


export enum ProjectType {
  All = 0,
  WebDesign = 1,
  BrandDesign = 2,
  SocialMediaDesign = 3
}

export interface PortfolioProject {
  srcUrl: string;
  previewUrl: string;
  projectTypes: ProjectType[];
}

//projectType: 1 ==> WebDesign
//projectType: 2 ==> BrandDesign
//projectType: 3 ==> SocialMediaDesign

const data = [
  {
    srcUrl: '../assets/images/portfolio/imotion-logo.png',
    previewUrl: '../assets/images/portfolio/imotion-logo.png',
    projectTypes: [1] //[WebDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/erickson-logo.png',
    previewUrl: '../assets/images/portfolio/erickson-logo.png',
    projectTypes: [1] //[WebDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/broucher-1.png',
    previewUrl: '../assets/images/portfolio/broucher-1.png',
    projectTypes: [1] //[WebDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/broucher-2.png',
    previewUrl: '../assets/images/portfolio/broucher-2.png',
    projectTypes: [1, 2] //[WebDesign, BrandDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/broucher.png',
    previewUrl: '../assets/images/portfolio/broucher.png',
    projectTypes: [2] //[BrandDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/cookiebox-1.png',
    previewUrl: '../assets/images/portfolio/cookiebox-1.png',
    projectTypes: [3] //[SocialMediaDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/cookiebox-2.png',
    previewUrl: '../assets/images/portfolio/cookiebox-2.png',
    projectTypes: [3] //[SocialMediaDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/cookiebox-3.png',
    previewUrl: '../assets/images/portfolio/cookiebox-3.png',
    projectTypes: [3] //[SocialMediaDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/imotion-package.png',
    previewUrl: '../assets/images/portfolio/imotion-package.png',
    projectTypes: [3] //[SocialMediaDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/sephora.png',
    previewUrl: '../assets/images/portfolio/sephora.png',
    projectTypes: [1] //[WebDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/ipsy1.png',
    previewUrl: '../assets/images/portfolio/ipsy1.png',
    projectTypes: [1, 3] //[WebDesign, SocialMediaDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/ipsy2.png',
    previewUrl: '../assets/images/portfolio/ipsy2.png',
    projectTypes: [2, 3] //[BrandDesign, SocialMediaDesign]
  }
]