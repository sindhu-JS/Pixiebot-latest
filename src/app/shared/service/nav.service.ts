import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
   type?: string;
   icon?:string;
	badgeType?: string;
	badgeValue?: string;
   active?: boolean;
   megaMenu?: boolean;
   megaMenuType?: string; // small, medium, large
	bookmark?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() {   }

  MENUITEMS: Menu[] = [
	 { title: 'Home', type: 'sub' },
    { title: 'About Us', type: 'sub' },
    { title: 'Serices', type: 'sub' },
    { title: 'Portfolio', type: 'sub' },
    { title: 'Contact', type: 'sub' }
   ]
  
  	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
   
}
