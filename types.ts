// Fix: Import `ReactNode` and use it for the icon type to resolve the "Cannot find namespace 'JSX'" error.
import type { ReactNode } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
  projects: number;
}

export interface ProjectItem {
  image: string;
  title: string;
  category: string;
}

export interface BlogArticle {
    image: string;
    date: string;
    title: string;
    isMain: boolean;
}