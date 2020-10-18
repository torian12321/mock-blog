import React from "react";

const Context = React.createContext({});

const useCommentsState: any = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error(
      `Components cannot be rendered outside <CommentsProvider>`
    );
  }

  return context;
};

export { Context, useCommentsState };
