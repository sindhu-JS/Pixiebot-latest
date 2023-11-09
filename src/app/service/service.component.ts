import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  public activeClass = 'home';
  constructor() { }

  ngOnInit() {
  }
  active(val) {
    this.activeClass = val;
    document.querySelector(`#${val}`).scrollIntoView({behavior: 'smooth' });
  }

features = [
  {
    img:'assets/images/agency/slider/branding.png',
    title: 'Visual Branding',
    description: 'We turn your ideas into stunning visuals that make your brand unforgettable. We create captivating logos, eye-catching packaging, and personalized illustrations. Elevate your products with professional photography.' 
  },
  {
    img:'assets/images/agency/slider/ads.png',
    title: 'Paid Promotion',
    description: 'Unleash the power of Paid Promotion and dominate the online landscape. Reach a wider audience with targeted campaigns on Google, Amazon, Yahoo, Apple Search, Instagram, Facebook, Twitter, YouTube, and Pinterest. Amplify your brand visibility, surge traffic, and achieve maximum ROI with our expert guidance.'
  },
  {
    img:'assets/images/agency/slider/growth.png',
    title: 'Digital Growth',
    description: 'Specializes in web design (UI/UX), packaging design, strategic social media management, and impactful e-marketing campaigns. Elevate your online presence, captivate your audience, and propel your brand into the digital forefront.'
  },
  {
    img:'assets/images/agency/slider/strategy.png',
    title: 'Brand Strategy',
    description: 'We specializes in cutting-edge web (UI/UX) design, impactful e-marketing campaigns, strategic social media management, and captivating packaging design. Transform your online presence, captivate your audience, and propel your brand into the digital future.'
  }
]
services = [
  {
    img:'assets/images/saas2/our-feature/1.png',
    title:'Account',
    description:'Organizing and taking care of the entire partnership between a company and its most valued customers.'
  },
  {
    img:'assets/images/saas2/our-feature/2.png',
    title:'Strategy',
    description:'Know and handle tasks and goals. Figure out where the brand stands in people mind compared to other products.'
  },
  {
    img:'assets/images/saas2/our-feature/3.png',
    title:'Concept',
    description:'Make practical plans that technology has proven to work.'
  },
  {
    img:'assets/images/saas2/our-feature/4.png',
    title:'Delivery',
    description:'Provide outstanding experiences and products.'
  }
]
}
