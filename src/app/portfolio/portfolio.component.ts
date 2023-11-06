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
    srcUrl: '../assets/images/portfolio/imotion.png',
    previewUrl: '../assets/images/portfolio/imotion.png',
    projectTypes: [1] //[WebDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/imotion-mock.png',
    previewUrl: '../assets/images/portfolio/imotion-mock.png',
    projectTypes: [1] //[WebDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/Erickson.png',
    previewUrl: '../assets/images/portfolio/Erickson.png',
    projectTypes: [1] //[WebDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/vs.png',
    previewUrl: '../assets/images/portfolio/vs.png',
    projectTypes: [2] //[BrandDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/SR-logo.png',
    previewUrl: '../assets/images/portfolio/SR-logo.png',
    projectTypes: [2] //[BrandDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/vet-flyers.png',
    previewUrl: '../assets/images/portfolio/vet-flyers.png',
    projectTypes: [2] //[BrandDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/imotion-card.png',
    previewUrl: '../assets/images/portfolio/imotion-card.png',
    projectTypes: [2] //[BrandDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/imotion-box.png',
    previewUrl: '../assets/images/portfolio/imotion-box.png',
    projectTypes: [2] //[BrandDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/ipsy-inst.png',
    previewUrl: '../assets/images/portfolio/ipsy-inst.png',
    projectTypes: [ 3] //[ SocialMediaDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/imotion-box2.png',
    previewUrl: '../assets/images/portfolio/imotion-box2.png',
    projectTypes: [2] //[BrandDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/lehanga.png',
    previewUrl: '../assets/images/portfolio/lehanga.png',
    projectTypes: [3] //[SocialMediaDesign]
  },
  {
    srcUrl: '../assets/images/portfolio/insta_grid.png',
    previewUrl: '../assets/images/portfolio/insta_grid.png',
    projectTypes: [3] //[SocialMediaDesign]
  }
]