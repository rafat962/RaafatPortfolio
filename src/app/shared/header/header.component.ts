import { Component } from '@angular/core';
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
declare var $: any;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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
  constructor(private sharedService: SharedServiceService) {}
  curState: any = 'dark';
  toggleDark() {
    this.curState = localStorage?.getItem('darkMode') || 'dark';
    const currenState = localStorage?.getItem('darkMode') || 'dark';
    if (currenState === 'dark') {
      console.log('from dark');
      this.sharedService.darkState.next('sun');
      localStorage?.setItem('darkMode', 'sun');
    } else {
      console.log('from light');
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
}
