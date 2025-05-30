import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class PythonProjectsService {
  constructor() {}
  PythonProjects: Project[] = [
    {
      id: 9,
      category: 'Python',
      name: 'Bar Chart Automation Project',
      desc: 'This project uses Python and the OpenPyXL library to convert multiple Excel data sets into charts, automating the process of visualizing data within Excel for improved analysis and reporting.',
      mainImg:
        './assets/detail_Projects/PYTHON/BarChart_project/main/main.webp',
      subImgs: [
        './assets/detail_Projects/PYTHON/BarChart_project/sub/1.webp',
        './assets/detail_Projects/PYTHON/BarChart_project/sub/2.webp',
        './assets/detail_Projects/PYTHON/BarChart_project/sub/3.webp',
      ],
      tech: ['OpenPyXL', 'Python'],
    },
    {
      id: 10,
      category: 'Python',
      name: 'City Data Collection',
      desc: 'Introducing "Databases Collecting," a powerful tool for merging multiple databases into a single one, regardless of the number of features, with remarkable speed and efficiency.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/main/main.webp',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/1.webp',
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/2.webp',
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/3.webp',
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/4.webp',
      ],
      tech: ['ArcGIS Pro', 'Python'],
      video:
        'https://www.facebook.com/100001750802724/videos/5963871670340241/',
    },
    {
      id: 11,
      category: 'Python',
      name: 'Topology Clipping',
      desc: 'Introducing "Topology," a unique tool that enables self-clipping between features, a functionality not available in GIS. With a touch of AI, it not only identifies intersections but resolves them, offering a groundbreaking solution for topology management in GIS.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/main/main.webp',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/1.webp',
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/2.webp',
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/3.webp',
      ],
      tech: ['ArcGIS Pro', 'Python'],
      video:
        'https://www.facebook.com/100001750802724/videos/2334895566660286/',
    },
    {
      id: 12,
      category: 'Python',
      name: 'Extract KML from Files',
      desc: 'This tool takes the path of a folder containing multiple KML files and aggregates them into a single SHP file, streamlining the conversion process for large datasets.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/extract_kml_from_files/main/main.webp',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/extract_kml_from_files/sub/1.webp',
        './assets/detail_Projects/ARCGIS_PRO/extract_kml_from_files/sub/2.webp',
      ],
      tech: ['ArcGIS Pro', 'Python'],
      fronendGit: 'https://github.com/rafat962/KML_FROM_FOLDERS.git',
    },
    {
      id: 13,
      category: 'Python',
      name: 'Image to Point Conversion',
      desc: 'This new ArcGIS tool integrates ArcPy with libraries like Exif, re, and OpenPyxl, enabling advanced analyses beyond traditional GIS capabilities. It bridges specialized external libraries with GIS to perform unique computations and seamlessly visualize results in ArcGIS. The tools first phase uses Python scripts to process data, later uploading points and associated images to ArcGIS Online for easy sharing and exploration.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/main/main.webp',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/sub/1.webp',
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/sub/2.webp',
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/sub/3.webp',
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/sub/4.webp',
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/sub/5.webp',
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/sub/6.webp',
      ],
      tech: ['ArcGIS Pro', 'Python'],
      video: 'https://www.facebook.com/100001750802724/videos/883390526052909/',
    },
    {
      id: 14,
      category: 'Python',
      name: 'Orbit to ArcGIS Pro Conversion',
      desc: 'Introducing a transformative tool that converts data from Orbits schema to the official Saudi Ministry of Planning schema on GIS, reducing a 1.5-day workload to just 3 minutes.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/OrpitToARCPRO/main/main.webp',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/OrpitToARCPRO/sub/1.webp',
        './assets/detail_Projects/ARCGIS_PRO/OrpitToARCPRO/sub/2.webp',
        './assets/detail_Projects/ARCGIS_PRO/OrpitToARCPRO/sub/3.webp',
        './assets/detail_Projects/ARCGIS_PRO/OrpitToARCPRO/sub/4.webp',
      ],
      tech: ['ArcGIS Pro', 'Python'],
      video: 'https://www.facebook.com/100001750802724/videos/745550293670378/',
    },
    {
      id: 15,
      category: 'Python',
      name: 'Web AI Car Detector',
      desc: 'This web project features a model for counting vehicles and calculating their speeds, all accessible online. Unlike desktop versions limited to users with the code and technical knowledge, this web-based solution allows anyone to upload and analyze their data easily.',
      mainImg:
        './assets/detail_Projects/web/Web_ai_car_Detector/main/main.webp',
      subImgs: [
        './assets/detail_Projects/web/Market_api/sub/2.webp',
        './assets/detail_Projects/web/Market_api/sub/3.webp',
        './assets/detail_Projects/web/Market_api/sub/4.webp',
        './assets/detail_Projects/web/Market_api/sub/5.webp',
        './assets/detail_Projects/web/Market_api/sub/6.webp',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Django'],
      video: 'https://www.facebook.com/100001750802724/videos/836407348022030/',
    },
    {
      id: 16,
      category: 'Python',
      name: 'Rentize',
      desc: 'Rentize is a real estate platform showcasing apartments for sale and rent, with features to display listings on a map and view nearby requests.',
      mainImg: './assets/detail_Projects/web/RENTIZE/main/main.webp',
      subImgs: [
        './assets/detail_Projects/web/RENTIZE/sub/1.webp',
        './assets/detail_Projects/web/RENTIZE/sub/2.webp',
        './assets/detail_Projects/web/RENTIZE/sub/3.webp',
        './assets/detail_Projects/web/RENTIZE/sub/4.webp',
        './assets/detail_Projects/web/RENTIZE/sub/5.webp',
        './assets/detail_Projects/web/RENTIZE/sub/6.webp',
      ],
      tech: [
        'ArcGIS Pro',
        'ArcGIS Online',
        'Python',
        'HTML',
        'CSS',
        'JavaScript',
        'Django',
      ],
      video: 'https://www.facebook.com/100001750802724/videos/808769784129457/',
    },
  ];
  getOne(id: any) {
    return this.PythonProjects.filter((item: Project) => item.id === id)[0];
  }
}
