import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WEBProjectsService } from '../_service/wepProjects.service';
import { PythonProjectsService } from '../_service/python-projects.service';
import { ArcGisProjectsService } from '../_service/arc-gis-projects.service';
import { MobileProjectsService } from '../_service/mobile-projects.service';
import { Project } from '../_service/project';
import { CommonModule } from '@angular/common';
import { Carousel } from 'flowbite';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import AOS from 'aos';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [FooterComponent, RouterModule, CommonModule, TranslateModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css',
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
export class ProjectPageComponent implements OnInit {
  project!: Project;
  skilssRow1: any = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private webProjects: WEBProjectsService,
    private pythonProject: PythonProjectsService,
    private arcgisProjects: ArcGisProjectsService,
    private mobileApps: MobileProjectsService,
    private translate: TranslateService
  ) {}
  state = 'now';
  currentLang: string = '';
  private langChangeSub!: Subscription;
  ngOnInit(): void {
    // Subscribe to language change
    this.langChangeSub = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.currentLang = event.lang;
      }
    );
    AOS.init({
      offset: 0,
      duration: 600,
      // easing: 'ease-in-sine',
      // delay: 100,
    });
    setTimeout(() => {
      this.state = 'new';
    }, 300);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.activeRoute.paramMap.subscribe((param: any) => {
      let type = param.get('type');
      let id = param.get('id');
      if (type === 'Web-Apps') {
        this.project = this.webProjects.getOne(+id);
      } else if (type === 'Python') {
        this.project = this.pythonProject.getOne(+id);
      } else if (type === 'ArcGIS') {
        this.project = this.arcgisProjects.getOne(+id);
      } else if (type === 'Mobile_Apps') {
        this.project = this.mobileApps.getOne(+id);
      }
      for (let x of this.project.tech) {
        if (
          x === 'Tailwind CSS' ||
          x === 'MongoDB' ||
          x === 'Pug.js' ||
          x === 'ReactQuery'
        ) {
          this.skilssRow1.push(`./assets/heroPage/logos/${x}.svg`);
        } else if (
          x === 'Mask R-CNN' ||
          x === 'Faster R-CNN' ||
          x === 'Remote Sensing' ||
          x === 'HED Model' ||
          x === 'BDCN Model'
        ) {
          return;
        } else {
          this.skilssRow1.push(`./assets/heroPage/logos/${x}.png`);
        }
      }
    });
  }
  carousel!: Carousel;
  ngAfterViewInit(): void {
    const carouselElement = document.getElementById('default-carousel');
    const items: any = [];
    this.project.subImgs.forEach((img: any, index: any) => {
      items.push({
        position: index,
        el: document.getElementById(`carousel-item-${index}`),
      });
    });
    // options with default values
    const options: any = {
      defaultPosition: 0,
      interval: 6000,
      indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses:
          'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
      },
      // callback functions
      onNext: () => {
        console.log('next slider item is shown');
      },
      onPrev: () => {
        console.log('previous slider item is shown');
      },
      onChange: () => {
        console.log('new slider item has been shown');
      },
    };
    // instance options object
    const instanceOptions: any = {
      id: 'carousel-example',
      override: true,
    };
    this.carousel = new Carousel(
      carouselElement,
      items,
      options,
      instanceOptions
    );
  }
  back() {
    this.carousel.prev();
  }
  next() {
    this.carousel.next();
  }
}
