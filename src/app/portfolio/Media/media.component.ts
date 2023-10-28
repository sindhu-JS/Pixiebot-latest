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
    srcUrl: 'assets/images/portfolio/Design Sephora.jpg',
    previewUrl: 'assets/images/portfolio/Design Sephora.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/ipsy-1.jpg',
    previewUrl: 'assets/images/portfolio/ipsy-1.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/ipsy-2.jpg',
    previewUrl: 'assets/images/portfolio/ipsy-2.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/ipsy-3.jpg',
    previewUrl: 'assets/images/portfolio/ipsy-3.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/ipsy-4.jpg',
    previewUrl: 'assets/images/portfolio/ipsy-4.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/ipsy-5.jpg',
    previewUrl: 'assets/images/portfolio/ipsy-5.jpg'
  },
  {
    srcUrl: 'assets/images/portfolio/ipsy-6.jpg',
    previewUrl: 'assets/images/portfolio/ipsy-6.jpg'
  }
]
