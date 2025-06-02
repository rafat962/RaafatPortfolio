import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
declare var $: any;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('slideToggle', [
      state('open', style({ height: '*', opacity: 1 })),
      state('closed', style({ height: '*', opacity: 0 })),
      transition('open <=> closed', [animate('500ms ease-in-out')]),
    ]),
  ],
})
export class HeaderComponent {
  ngOnInit(): void {
    // get lan
    let lan = JSON.parse(localStorage.getItem('lan')!) || 'en';
    this.translateService.use(lan);
    this.curLan = lan;
    if (lan === 'en') {
      this.curLanSrc = './assets/lan/English.png';
    } else if (lan === 'ar') {
      this.curLanSrc = './assets/lan/Arabic.png';
    } else if (lan === 'fr') {
      this.curLanSrc = './assets/lan/French.png';
    }
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    AOS.init({
      offset: 0,
      duration: 600,
      // easing: 'ease-in-sine',
      // delay: 100,
    });
  }
  menuState = 'closed';
  constructor(
    private sharedService: SharedServiceService,
    private translateService: TranslateService
  ) {}
  curState: any = 'dark';
  toggleDark() {
    this.curState = localStorage?.getItem('darkMode') || 'dark';
    const currenState = localStorage?.getItem('darkMode') || 'dark';
    if (currenState === 'dark') {
      this.sharedService.darkState.next('sun');
      localStorage?.setItem('darkMode', 'sun');
    } else {
      this.sharedService.darkState.next('dark');
      localStorage?.setItem('darkMode', 'dark');
    }
    this.menuState = 'closed';
    document.getElementById('menu')?.classList.remove('open');
    setTimeout(() => {
      document.getElementById('seconde')?.classList.add('hidden');
    }, 400);
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.menuState = 'closed';
    document.getElementById('menu')?.classList.remove('open');
    setTimeout(() => {
      document.getElementById('seconde')?.classList.add('hidden');
    }, 400);
  }

  openMenu(event: Event) {
    event.stopPropagation(); // Prevent click propagation to document
    document.getElementById('menu')?.classList.toggle('open');
    // document.getElementById('seconde')?.classList.toggle('flex');
    // $('#seconde').slideToggle(400);
    this.menuState = this.menuState === 'open' ? 'closed' : 'open';
    document.getElementById('seconde')?.classList.toggle('hidden');
  }
  disapperSide() {
    this.menuState = 'closed';
    document.getElementById('menu')?.classList.remove('open');
    setTimeout(() => {
      document.getElementById('seconde')?.classList.add('hidden');
    }, 400);
  }

  // lan
  curLanSrc = './assets/lan/English.png';
  curLan = 'en';
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  @ViewChild('dropdownMenu2') dropdownMenu2!: ElementRef;
  ToggleLan(lan: any) {
    this.dropdownMenu.nativeElement?.classList.add('hidden');
    this.dropdownMenu2.nativeElement?.classList.add('hidden');
    this.curLan = lan;
    localStorage.setItem('lan', JSON.stringify(lan));
    if (lan === 'en') {
      this.curLanSrc = './assets/lan/English.png';
    } else if (lan === 'ar') {
      this.curLanSrc = './assets/lan/Arabic.png';
    } else if (lan === 'fr') {
      this.curLanSrc = './assets/lan/French.png';
    }
    this.translateService.use(lan);
  }
  buttonClick() {
    this.dropdownMenu.nativeElement.classList.toggle('hidden');
  }
  buttonClick2() {
    this.dropdownMenu2.nativeElement.classList.toggle('hidden');
  }
}
