import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  items: GalleryItem[];
 
  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }


  ngOnInit() {
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    const lightboxRef = this.gallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });
    lightboxRef.load(this.items);
  }
}

const data = [
  {
    srcUrl: '../assets/images/portfolio/broucher-1.png',
    previewUrl: '../assets/images/portfolio/broucher-1.png'
  },
  {
    srcUrl: '../assets/images/portfolio/broucher-2.png',
    previewUrl: '../assets/images/portfolio/broucher-2.png'
  },
  {
    srcUrl: '../assets/images/portfolio/broucher.png',
    previewUrl: '../assets/images/portfolio/broucher.png'
  },
  {
    srcUrl: '../assets/images/portfolio/cookiebox-1.png',
    previewUrl: '../assets/images/portfolio/cookiebox-1.png'
  },
  {
    srcUrl: '../assets/images/portfolio/cookiebox-2.png',
    previewUrl: '../assets/images/portfolio/cookiebox-2.png'
  },
  {
    srcUrl: '../assets/images/portfolio/cookiebox-3.png',
    previewUrl: '../assets/images/portfolio/cookiebox-3.png'
  },
  {
    srcUrl: '../assets/images/portfolio/imotion-package.png',
    previewUrl: '../assets/images/portfolio/imotion-package.png'
  }
]
