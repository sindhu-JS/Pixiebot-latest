import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  constructor() {}

  safeLowerCase(str: string): string {
    return (str || '').toLowerCase();
  }

  safeUpperCase(str: string): string {
    return (str || '').toUpperCase();
  }

  scrollTo(el: Element): void {
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  scrollWithDelay(el: Element): void {
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 1);
    }
  }

  scrollToJustAbove(el: string, animation: boolean) {
    const dims = document.getElementById(el);
    if (dims) {
      window.scrollTo({
        top: dims.offsetTop - 100,
        behavior: animation ? 'smooth' : 'auto'
      });
    }
  }

  scrollToTop(animation: boolean) {
    window.scrollTo({ top: 0, behavior: animation ? 'smooth' : 'auto' });
  }
}
