import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class N8nService {
  constructor() {}
  n8nProjects: Project[] = [
    {
      id: 1,
      category: 'n8n',
      name: 'Geo-AI Sales Agent for GIS Assets',
      desc: `A sophisticated AI-driven assistant that integrates n8n AI Agents with ArcGIS APIs to handle real-time investor inquiries via Telegram. The agent uses Natural Language Understanding (NLU) to perform spatial queries, interprets technical field notes to provide persuasive sales arguments, and autonomously manages the lead generation process by collecting investor data and syncing it with CRM tools like Google Sheets.`,
      mainImg: './assets/detail_Projects/n8n/Arcgis_sales_system.png',
      subImgs: ['./assets/detail_Projects/n8n/Arcgis_sales_system.png'],
      tech: ['n8n', 'ArcGIS Pro', 'ArcGIS Online'],
    },
    {
      id: 2,
      category: 'n8n',
      name: 'ArcGIS Smart Notification System',
      desc: `An automated workflow built with n8n that monitors ArcGIS Feature Layers for status changes. Once a billboard becomes 'Available', the system automatically cross-references a database of interested investors and triggers personalized email notifications using AI-generated templates to ensure timely and fair distribution of investment opportunities.`,
      mainImg: './assets/detail_Projects/n8n/Arcgis-Notification.png',
      subImgs: ['./assets/detail_Projects/n8n/Arcgis-Notification.png'],
      tech: ['n8n', 'ArcGIS Pro', 'ArcGIS Online'],
    },
  ];

  getOne(id: any) {
    return this.n8nProjects.filter((item: Project) => item.id === id)[0];
  }
}
