import { Injectable } from '@angular/core';
import { Project } from './project';
@Injectable({
  providedIn: 'root',
})
export class ArcGisProjectsService {
  constructor() {}
  ArcGisProProjects: Project[] = [
    {
      id: 17,
      category: 'ArcGIS',
      name: 'Building Detection with Mask R-CNN',
      desc: 'This project utilizes the Mask R-CNN model in ArcGIS Pro for building detection, accurately identifying and outlining building structures in geospatial data for enhanced spatial analysis.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/building_detection_MaskR-cnn/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/building_detection_MaskR-cnn/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/building_detection_MaskR-cnn/sub/2.png',
        './assets/detail_Projects/ARCGIS_PRO/building_detection_MaskR-cnn/sub/3.png',
        './assets/detail_Projects/ARCGIS_PRO/building_detection_MaskR-cnn/sub/4.png',
        './assets/detail_Projects/ARCGIS_PRO/building_detection_MaskR-cnn/sub/5.png',
        './assets/detail_Projects/ARCGIS_PRO/building_detection_MaskR-cnn/sub/6.png',
      ],
      tech: ['ArcGIS Pro', 'Python'],
    },
    {
      id: 18,
      category: 'ArcGIS',
      name: 'Cad To GIS',
      desc: 'A data conversion project that transforms problematic CAD files into clean GIS datasets, uploads them to ArcGIS Portal, and creates an interactive web map for visualization and analysis.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/CadToArcGISPro/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/CadToArcGISPro/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/CadToArcGISPro/sub/2.png',
        './assets/detail_Projects/ARCGIS_PRO/CadToArcGISPro/sub/3.png',
      ],
      tech: ['ArcGIS Pro', 'AutoCad'],
    },
    {
      id: 18,
      category: 'ArcGIS',
      name: 'Data Collection with ArcGIS Online',
      desc: 'This project involves uploading field data using the Field Maps application, enabling efficient data collection and real-time syncing with GIS systems for enhanced spatial analysis and decision-making.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/arcOnline_collecting_data/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/arcOnline_collecting_data/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/arcOnline_collecting_data/sub/2.png',
      ],
      tech: ['ArcGIS Pro', 'ArcGIS Online', 'Field Maps'],
      video: 'https://www.facebook.com/100001750802724/videos/713087504309278/',
    },
    {
      id: 19,
      category: 'ArcGIS',
      name: 'Palm Tree Health Assessment',
      desc: 'This project uses remote sensing and artificial intelligence to assess plant health, leveraging advanced AI algorithms to analyze satellite or aerial imagery and detect signs of stress or disease in vegetation for improved agricultural monitoring.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/assess_palm_tree_health/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/assess_palm_tree_health/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/assess_palm_tree_health/sub/2.png',
        './assets/detail_Projects/ARCGIS_PRO/assess_palm_tree_health/sub/3.png',
        './assets/detail_Projects/ARCGIS_PRO/assess_palm_tree_health/sub/4.png',
        './assets/detail_Projects/ARCGIS_PRO/assess_palm_tree_health/sub/5.png',
        './assets/detail_Projects/ARCGIS_PRO/assess_palm_tree_health/sub/6.png',
      ],
      tech: ['ArcGIS Pro', 'Python', 'Faster R-CNN', 'Remote Sensing'],
      video:
        'https://www.facebook.com/100001750802724/videos/1058935965193502/',
    },
    {
      id: 20,
      category: 'ArcGIS',
      name: 'Car Detection with Mask R-CNN',
      desc: 'A project on ArcGIS Pro using Mask R-CNN to detect and locate vehicles with spatial AI. It enables accurate vehicle tracking and analysis, offering a seamless and efficient geospatial solution.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/Car_Decector_MaskR-CNN/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/Car_Decector_MaskR-CNN/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/Car_Decector_MaskR-CNN/sub/2.png',
        './assets/detail_Projects/ARCGIS_PRO/Car_Decector_MaskR-CNN/sub/3.png',
        './assets/detail_Projects/ARCGIS_PRO/Car_Decector_MaskR-CNN/sub/4.png',
      ],
      tech: ['ArcGIS Pro', 'Python', 'Mask R-CNN'],
      video:
        'https://www.facebook.com/100001750802724/videos/1582602425484858/',
    },
    {
      id: 21,
      category: 'ArcGIS',
      name: 'Car Detection with Faster R-CNN',
      desc: 'A project on ArcGIS Pro using Faster R-CNN to detect and locate vehicles with spatial AI. It enables accurate vehicle tracking and analysis, offering a seamless and efficient geospatial solution.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/Car_dector_faster_R-CNN/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/Car_dector_faster_R-CNN/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/Car_dector_faster_R-CNN/sub/2.png',
        './assets/detail_Projects/ARCGIS_PRO/Car_dector_faster_R-CNN/sub/3.png',
        './assets/detail_Projects/ARCGIS_PRO/Car_dector_faster_R-CNN/sub/4.png',
        './assets/detail_Projects/ARCGIS_PRO/Car_dector_faster_R-CNN/sub/5.png',
        './assets/detail_Projects/ARCGIS_PRO/Car_dector_faster_R-CNN/sub/6.png',
      ],
      tech: ['ArcGIS Pro', 'Python', 'Faster R-CNN'],
      video:
        'https://www.facebook.com/100001750802724/videos/1315509029066527/',
    },
    {
      id: 22,
      category: 'ArcGIS',
      name: 'City Data Collection',
      desc: 'Introducing "Databases Collecting," a powerful tool for merging multiple databases into a single one, regardless of the number of features, with remarkable speed and efficiency.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/2.png',
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/3.png',
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/4.png',
      ],
      tech: ['ArcGIS Pro', 'Python'],
      video:
        'https://www.facebook.com/100001750802724/videos/5963871670340241/',
    },
    {
      id: 23,
      category: 'ArcGIS',
      name: 'Topology Clipping',
      desc: 'Introducing "Topology," a unique tool that enables self-clipping between features, a functionality not available in GIS. With a touch of AI, it not only identifies intersections but resolves them, offering a groundbreaking solution for topology management in GIS.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/2.png',
        './assets/detail_Projects/ARCGIS_PRO/City_Collecting/sub/3.png',
      ],
      tech: ['ArcGIS Pro', 'Python'],
      video:
        'https://www.facebook.com/100001750802724/videos/2334895566660286/',
    },
    {
      id: 24,
      category: 'ArcGIS',
      name: 'Edge Detection Model',
      desc: 'A project on ArcGIS Pro using Faster R-CNN to detect and locate vehicles with spatial AI. It enables accurate vehicle tracking and analysis, offering a seamless and efficient geospatial solution.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/Edge_detection_model/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/Edge_detection_model/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/Edge_detection_model/sub/2.png',
        './assets/detail_Projects/ARCGIS_PRO/Edge_detection_model/sub/3.png',
        './assets/detail_Projects/ARCGIS_PRO/Edge_detection_model/sub/4.png',
        './assets/detail_Projects/ARCGIS_PRO/Edge_detection_model/sub/5.png',
        './assets/detail_Projects/ARCGIS_PRO/Edge_detection_model/sub/6.png',
      ],
      tech: ['ArcGIS Pro', 'Python', 'HED Model', 'BDCN Model'],
      video:
        'https://www.facebook.com/100001750802724/videos/1582602425484858/',
    },
    {
      id: 25,
      category: 'ArcGIS',
      name: 'Extract KML from Files',
      desc: 'This tool takes the path of a folder containing multiple KML files and aggregates them into a single SHP file, streamlining the conversion process for large datasets.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/extract_kml_from_files/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/extract_kml_from_files/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/extract_kml_from_files/sub/2.png',
      ],
      tech: ['ArcGIS Pro', 'Python'],
      fronendGit: 'https://github.com/rafat962/KML_FROM_FOLDERS.git',
    },
    {
      id: 26,
      category: 'ArcGIS',
      name: 'Image to Point Conversion',
      desc: 'This new ArcGIS tool integrates ArcPy with libraries like Exif, re, and OpenPyxl, enabling advanced analyses beyond traditional GIS capabilities. It bridges specialized external libraries with GIS to perform unique computations and seamlessly visualize results in ArcGIS. The tools first phase uses Python scripts to process data, later uploading points and associated images to ArcGIS Online for easy sharing and exploration.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/sub/2.png',
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/sub/3.png',
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/sub/4.png',
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/sub/5.png',
        './assets/detail_Projects/ARCGIS_PRO/image-to-point/sub/6.png',
      ],
      tech: ['ArcGIS Pro', 'Python'],
      video: 'https://www.facebook.com/100001750802724/videos/883390526052909/',
    },
    {
      id: 27,
      category: 'ArcGIS',
      name: 'Orbit to ArcGIS Pro Conversion',
      desc: 'Introducing a transformative tool that converts data from Orbits schema to the official Saudi Ministry of Planning schema on GIS, reducing a 1.5-day workload to just 3 minutes.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/OrpitToARCPRO/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/OrpitToARCPRO/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/OrpitToARCPRO/sub/2.png',
        './assets/detail_Projects/ARCGIS_PRO/OrpitToARCPRO/sub/3.png',
        './assets/detail_Projects/ARCGIS_PRO/OrpitToARCPRO/sub/4.png',
      ],
      tech: ['ArcGIS Pro', 'Python'],
      video: 'https://www.facebook.com/100001750802724/videos/745550293670378/',
    },
    {
      id: 28,
      category: 'ArcGIS',
      name: 'Suria Climate Analysis',
      desc: 'Introducing a transformative tool that converts data from Orbits schema to the official Saudi Ministry of Planning schema on GIS, reducing a 1.5-day workload to just 3 minutes.',
      mainImg:
        './assets/detail_Projects/ARCGIS_PRO/suria_climate/main/main.png',
      subImgs: [
        './assets/detail_Projects/ARCGIS_PRO/suria_climate/sub/1.png',
        './assets/detail_Projects/ARCGIS_PRO/suria_climate/sub/2.png',
        './assets/detail_Projects/ARCGIS_PRO/suria_climate/sub/3.png',
        './assets/detail_Projects/ARCGIS_PRO/suria_climate/sub/4.png',
        './assets/detail_Projects/ARCGIS_PRO/suria_climate/sub/5.png',
        './assets/detail_Projects/ARCGIS_PRO/suria_climate/sub/6.png',
      ],
      tech: ['ArcGIS Pro', 'Google Earth Engine'],
    },
  ];
  getOne(id: any) {
    return this.ArcGisProProjects.filter((item: Project) => item.id === id)[0];
  }
}
