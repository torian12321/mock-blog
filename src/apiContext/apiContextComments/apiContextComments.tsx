import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Context } from "./apiContextComments.context";
import { IComment } from './apiContextComments.interfaces';
import { URL_COMMENTS } from '../constants';

const getDateToday = () => {
  const today = new Date();

  let dd = today.getDate();
  let mm = today.getMonth()+1; 
  const yyyy = today.getFullYear();
  
  return `${yyyy}-${mm}-${dd}`;
}
const CommentsProvider = (props: any) => {
  const { children } = props;
  const [comments, setComments]: [any, any] = useState([]);
  const [errors, setErrors]: [any, any] = useState(null);
  const [isFetching, setIsFetching]: [boolean, any] = useState(false);
  const [lastUpdate, setLastUpdate]: [any, any] = useState(Date.now())

  useEffect(() => {
    // Set a timestamp for updates.
    setLastUpdate(Date.now());
  }, [comments]);

  const fetchComments = (url:string = URL_COMMENTS) => {
    setIsFetching(true);

    axios.get(url)
      .then((response) => {
        const { data = [] } = response;
        setComments(data);
      })
      .catch((error) => {
        setErrors(error)
      })
      .then(() => {
        setIsFetching(false);
      });
  }

  const fetchCommnentByPostId = (postId: string) => {
    fetchComments(`${URL_COMMENTS}?postId=${postId}`)
  };

  const addComment = (args: Object) => {  
    axios.post(URL_COMMENTS, {
      date: getDateToday(),
      ...args,
    })
    .then((response) => {
      const { data = {} } = response;
      const { postId } = data;

      if(!!postId) {
        fetchCommnentByPostId(postId);
      }
    })
    .catch((error) => {
      setErrors(error)
    }); 
  }

  const getCommnentById = (id: string) => (
    comments.find((c: IComment) => c.id === id) || {}
  )

  return (
    <Context.Provider
      value={{
        comments,
        isFetching,
        lastUpdate,
        errors,
        actions: {
          getCommnentById,
          addComment,
          fetchComments,
          fetchCommnentByPostId,
        }
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { CommentsProvider };