import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class MobileProjectsService {
  constructor() {}
  MobileAppsProjects: Project[] = [
    {
      id: 29,
      category: 'Mobile_Apps',
      name: 'RK Maps Mobile',
      desc: "A mobile app built with Ionic Angular, similar to Esri's Field Maps, but enhanced with additional features like real-time chat for improved collaboration and communication during fieldwork.",
      mainImg: './assets/detail_Projects/mobile/RK.MAPS/main/main.jpeg',
      subImgs: [
        './assets/detail_Projects/mobile/RK.MAPS/sub/1.jpeg',
        './assets/detail_Projects/mobile/RK.MAPS/sub/2.jpeg',
        './assets/detail_Projects/mobile/RK.MAPS/sub/3.jpeg',
        './assets/detail_Projects/mobile/RK.MAPS/sub/4.jpeg',
        './assets/detail_Projects/mobile/RK.MAPS/sub/5.jpeg',
        './assets/detail_Projects/mobile/RK.MAPS/sub/6.jpeg',
        './assets/detail_Projects/mobile/RK.MAPS/sub/7.jpeg',
        './assets/detail_Projects/mobile/RK.MAPS/sub/8.jpeg',
      ],
      tech: ['AngularJS', 'Ionic Angular', 'Esri APIs'],
    },
  ];
  getOne(id: any) {
    return this.MobileAppsProjects.filter((item: Project) => item.id === id)[0];
  }
}
