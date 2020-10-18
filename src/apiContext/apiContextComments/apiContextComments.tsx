import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Context } from "./apiContextComments.context";
import { IComment } from './apiContextComments.interfaces';
import { URL_COMMENTS } from '../constants';

const CommentsProvider = (props: any) => {
  const [comments, setComments]: [any, any] = useState([]);
  const [errors, setErrors]: [any, any] = useState(null);
  const [isFetching, setIsFetching]: [boolean, any] = useState(false);
  const [lastUpdate, setLastUpdate]: [any, any] = useState(Date.now())

  const { children } = props;


  useEffect(() => {
    // Set a timestamp for updates.
    setLastUpdate(Date.now());
  }, [comments]);

  const fetchComments = (url:string = URL_COMMENTS) => {
    setIsFetching(true);

    axios.get(url)
      .then((response) => {
        // handle success
        const { data = [] } = response;
        setComments(data);
      })
      .catch((error) => {
        // handle error
        setErrors(error)
      })
      .then(() => {
        // always executed
        setIsFetching(false);
      });
  }

  const reloadComments=()=> {
    console.log('reloading');
  }

  const addComment = () => {
    console.log('Add');
    reloadComments();
  }
  const getCommnentById = (id: string) => {
    return comments.find((c: IComment) => c.id === id) || {};
  }
  const fetchCommnentByPostId = (postId: string) => {
    fetchComments(`${URL_COMMENTS}?postId=${postId}`)
  }

  return (
    <Context.Provider
      value={{
        comments,
        isFetching,
        lastUpdate,
        errors,
        actions: {
          getCommnentById,
          reloadComments,
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