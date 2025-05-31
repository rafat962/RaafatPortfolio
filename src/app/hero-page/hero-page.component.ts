import { Component, ElementRef, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { Matrial } from '../matrials';
import { WEBProjectsService } from '../_service/wepProjects.service';
import { ArcGisProjectsService } from '../_service/arc-gis-projects.service';
import { PythonProjectsService } from '../_service/python-projects.service';
import { MobileProjectsService } from '../_service/mobile-projects.service';
import { Project } from '../_service/project';
import { ToastrService } from 'ngx-toastr';
import { FooterComponent } from '../shared/footer/footer.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import AOS from 'aos';
declare var $: any;
@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    Matrial,
    FooterComponent,
    RouterModule,
  ],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  animations: [
    trigger('divstate1', [
      state(
        'now',
        style({
          opacity: 0,
        })
      ),
      state(
        'new',
        style({
          opacity: 1,
        })
      ),
      transition('now <=> new', [animate('0.3s')]),
    ]),
  ],
})
export class HeroPageComponent implements OnInit {
  constructor(
    public webProjcts: WEBProjectsService,
    private arcgisPro: ArcGisProjectsService,
    private pythonProjects: PythonProjectsService,
    private mobileAppsProjects: MobileProjectsService,
    private tost: ToastrService,
    private activeRoute: ActivatedRoute
  ) {}
  sctrolToProtoflio() {
    const element = document.getElementById('PORTFOLIO');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  state = 'now';
  ngOnInit(): void {
    AOS.init({
      offset: 0,
      duration: 600,
      // easing: 'ease-in-sine',
      // delay: 100,
    });
    setTimeout(() => {
      this.state = 'new';
    }, 200);
    this.activeRoute.paramMap.subscribe((params: any) => {
      if (params.get('id') === 'home') {
        const element = document.getElementById('skills');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
    if (window.innerWidth < 767) {
      this.projects = this.webProjcts.WebProjects.slice(0, 2);
    } else {
      this.projects = this.webProjcts.WebProjects.slice(0, 6);
    }
    this.listNum = this.webProjcts.WebProjects.length;
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    document.querySelector('.step-1')?.classList.add('active');
  }
  serviceCards = [
    {
      header: 'Frontend Developer',
      content:
        'I build high-performance web apps using Angular with responsive designs that work seamlessly on any device. From landing pages to complex web apps, I bring your ideas to life.',
      img: './assets/heroPage/mobile-app-development.png',
      dir: 'justify-center md:justify-start',
    },
    {
      header: 'Backend Developer',
      content:
        'I develop scalable and efficient backends for web applications, ensuring robust performance and seamless integration with your frontend and database systems.',
      img: './assets/heroPage/server.png.png',
      dir: 'justify-center md:justify-end',
    },
    {
      header: 'GIS Developer & Expert',
      content:
        'I specialize in GIS web apps, improving existing systems, and creating Python GIS tools with ArcPy to provide tailored geospatial solutions.',
      img: './assets/heroPage/location.png',
      dir: 'justify-center md:justify-start',
    },
  ];
  skilssRow1 = [
    './assets/heroPage/logos/HTML.png',
    './assets/heroPage/logos/CSS.png',
    './assets/heroPage/logos/JavaScript.png',
    './assets/heroPage/logos/Angular.png',
    './assets/heroPage/logos/Tailwind CSS.svg',
    './assets/heroPage/logos/media.png',
    './assets/heroPage/logos/git.png',
    './assets/heroPage/logos/ArcGIS Online.png',
    './assets/heroPage/logos/Firebase.png',
    './assets/heroPage/logos/Reactjs.png',
    './assets/heroPage/logos/ReactQuery.svg',
  ];
  skilssRow2 = [
    './assets/heroPage/logos/ArcGIS Pro.png',
    './assets/heroPage/logos/programing.png',
    './assets/heroPage/logos/Node.js.png',
    './assets/heroPage/logos/MongoDB.svg',
    './assets/heroPage/logos/Express.js.png',
    './assets/heroPage/logos/sql-server.png',
    './assets/heroPage/logos/Python.png',
    './assets/heroPage/logos/NextJs.png',
    './assets/heroPage/logos/docker.svg',
  ];
  projects: Project[] = [];
  listNum = 0;
  currentType = 'Web Apps';
  pickProjects(type: any) {
    // Fade out the current projects
    $('#cardList').fadeOut(300, () => {
      this.currentNum = 1;
      document.querySelectorAll('.stepnum')?.forEach((item: any) => {
        item.classList.remove('active');
      });
      document.querySelector('.step-1')?.classList.add('active');
      if (type === 'Web Apps') {
        this.currentType = type;
        if (window.innerWidth < 767) {
          this.projects = this.webProjcts.WebProjects.slice(0, 2);
        } else {
          this.projects = this.webProjcts.WebProjects.slice(0, 6);
        }
        this.listNum = this.webProjcts.WebProjects.length;
      } else if (type === 'Python') {
        this.currentType = type;
        if (window.innerWidth < 767) {
          this.projects = this.pythonProjects.PythonProjects.slice(0, 2);
        } else {
          this.projects = this.pythonProjects.PythonProjects.slice(0, 6);
        }
        this.listNum = this.pythonProjects.PythonProjects.length;
      } else if (type === 'ARCGIS') {
        this.currentType = type;
        if (window.innerWidth < 767) {
          this.projects = this.arcgisPro.ArcGisProProjects.slice(0, 2);
        } else {
          this.projects = this.arcgisPro.ArcGisProProjects.slice(0, 6);
        }
        this.listNum = this.arcgisPro.ArcGisProProjects.length;
      } else if (type === 'Mobile Apps') {
        this.currentType = type;
        if (window.innerWidth < 767) {
          this.projects = this.mobileAppsProjects.MobileAppsProjects.slice(
            0,
            2
          );
        } else {
          this.projects = this.mobileAppsProjects.MobileAppsProjects.slice(
            0,
            6
          );
        }
        this.listNum = this.mobileAppsProjects.MobileAppsProjects.length;
      }
      // Fade in the new projects
      $('#cardList').fadeIn(300);
    });
  }
  // list
  generateArray(count: number): number[] {
    if (window.innerWidth < 767) {
      return Array.from(
        { length: Math.ceil(count / 2) },
        (_, index) => index + 1
      );
    } else {
      return Array.from(
        { length: Math.ceil(count / 6) },
        (_, index) => index + 1
      );
    }
  }
  // changenum
  currentNum = 1;
  changeNum(num: number) {
    this.currentNum = num;
    // Fade out the current projects
    $('#cardList').fadeOut(250, () => {
      document.querySelectorAll('.stepnum')?.forEach((item: any) => {
        item.classList.remove('active');
      });
      document.querySelector(`.step-${num}`)?.classList.add('active');
      let start;
      let end;
      if (window.innerWidth < 767) {
        start = (num - 1) * 2;
        end = start + 2;
      } else {
        start = (num - 1) * 6;
        end = start + 6;
      }
      if (this.currentType === 'Web Apps') {
        this.projects = this.webProjcts.WebProjects.slice(start, end);
      } else if (this.currentType === 'Python') {
        this.projects = this.pythonProjects.PythonProjects.slice(start, end);
      } else if (this.currentType === 'ARCGIS') {
        this.projects = this.arcgisPro.ArcGisProProjects.slice(start, end);
      } else if (this.currentType === 'Mobile Apps') {
        this.projects = this.mobileAppsProjects.MobileAppsProjects.slice(
          start,
          end
        );
      }

      // Fade in the new projects
      $('#cardList').fadeIn(250);
    });
  }

  next() {
    if (window.innerWidth < 767) {
      if (this.currentNum < Math.ceil(this.listNum / 2)) {
        this.changeNum(this.currentNum + 1);
      } else {
        return;
      }
    } else {
      if (this.currentNum < Math.ceil(this.listNum / 6)) {
        this.changeNum(this.currentNum + 1);
      } else {
        return;
      }
    }
  }
  back() {
    if (this.currentNum === 1) {
      return;
    }
    if (window.innerWidth < 767) {
      if (
        this.currentNum <= Math.ceil(this.listNum / 2) &&
        this.currentNum - 1 !== 0
      ) {
        this.changeNum(this.currentNum - 1);
      } else {
        return;
      }
    } else {
      if (this.currentNum >= Math.floor(this.listNum / 6)) {
        this.changeNum(this.currentNum - 1);
      } else {
        return;
      }
    }
  }
  copyEmail() {
    this.tost.success('Email copied to clipboard!', '', {
      positionClass: 'toast-bottom-left',
    }); // Optional: Show a confirmation message
    const email = 'rafatkamel5@gmail.com';
    // Use the Clipboard API to copy the email
    navigator.clipboard.writeText(email).then(() => {});
  }
}
