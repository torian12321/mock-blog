import { useFetch } from 'hooks';
import { URL_COMMENTS } from '../constants';

export const useGetComments = () => {
  const {
    data = [],
    isFetching,
    reload,
  } = useFetch(URL_COMMENTS);

  return [
    data || [],
    isFetching,
    reload,
  ]
};

export const useGetCommentsByPostId = (postId: number | string) => {
  const {
    data = [],
    isFetching,
    reload,
  } = useFetch(`${URL_COMMENTS}?postId=${postId}`);

  return [
    data || [],
    isFetching,
    reload,
  ]
};
