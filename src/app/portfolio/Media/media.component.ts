import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  public customizer: any = "all"
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
    srcUrl: '../assets/images/portfolio/sephora.png',
    previewUrl: '../assets/images/portfolio/broucher-2.png'
  },
  {
    srcUrl: '../assets/images/portfolio/ipsy1.png',
    previewUrl: '../assets/images/portfolio/ipsy1.png'
  },
  {
    srcUrl: '../assets/images/portfolio/ipsy2.png',
    previewUrl: '../assets/images/portfolio/ipsy2.png'
  },
]
