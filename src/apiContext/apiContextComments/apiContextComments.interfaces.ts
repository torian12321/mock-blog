export interface IComment {
  id: string,
  postId: string,
  parent_id?: string,
  user: string,
  date: string;
  content: string,
}
