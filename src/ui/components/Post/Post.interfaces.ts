export interface IPost {
  children: any,
  className?: string,
  title?: string,
  user?: string,
  date?: string,
  onAddComment?: Function,
};

type comment = {
  id: string,
  title: string,
  author: string,
  publish_date: string,
  slug: string,
  description: string,
  content: string,
};
