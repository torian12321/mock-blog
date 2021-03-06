export interface IComment {
  children: any,
  className?: string,
  user?: string,
  date?: string,
  onAddComment?: Function,
};

type comment = {
  id: string,
  user: string,
  date: string,
  content: string,
};
export interface ICommentsGroup {
  comments: any,
  loading: boolean,
};
