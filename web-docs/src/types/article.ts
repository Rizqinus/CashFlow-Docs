export interface ArticleStep {
  num: number;
  title: string;
  desc: string;
  screenshotNote?: string;
  image?: string;
  caption?: string;
}

export interface ArticleData {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  author?: string;
  role?: string;
  publishDate?: string;
  updateDate?: string;
  note?: string;
  steps: ArticleStep[];
}
