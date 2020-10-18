import { useFetch } from 'hooks';
import { URL_POSTS } from '../constants';

export const useGetPosts = () => {
  const {
    data = [],
    isFetching,
    reload,
  } = useFetch(URL_POSTS);

  return [
    data || [],
    isFetching,
    reload,
  ]
};

export const useGetPostById = (postId: number | string) => {
  const {
    data = [],
    isFetching,
    reload,
  } = useFetch(`${URL_POSTS}?id=${postId}`);

  return [
    (data && data[0]) || {},
    isFetching,
    reload,
  ]
};
