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
}
