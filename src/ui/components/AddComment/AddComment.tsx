import React, { useState } from 'react';
import classnames from 'classnames';
import { Form } from 'react-final-form';
import { Field } from 'ui/components/formComponents/Field';
import { Button } from 'ui/components/Button';
import { IAddComment } from "./AddComment.interfaces";
import styles from './AddComment.module.scss';


const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async (values: any) => {
  await sleep(300);
  console.log(values)
}

const formValidate = (values: any) => {
  const errors: any = {}
  if (!values.userName) {
    errors.user = 'Required'
  }
  if (!values.notes) {
    errors.content = 'Required'
  }

  return errors
};
const formIsValid = (values: Object): any => {
  const v = formValidate(values);

  return !(Object.keys(v).length === 0 && v.constructor === Object);
}


export const AddComment = ({
  onAddComment,
  className,
}: IAddComment) => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm)
  };

  return !onAddComment ? (
    <div className={classnames(styles.post, className)}>
      <Button
        caption={!showForm ? "Add Comment" : 'Close Form'}
        onClick={handleShowForm}
        className={styles.btn}
      />
      {showForm &&
        <Form
          onSubmit={onSubmit}
          initialValues={{}}
          validate={formValidate}
          render={({ handleSubmit, form, submitting, pristine, values }) => {
            const valid = formIsValid(values);

            return (
              <form onSubmit={handleSubmit}>
                <Field
                  label='User Name'
                  name='user'
                  placeholder="e.g. Bla bla"
                />
                <Field
                  type='textarea'
                  label='Comment'
                  name='content'
                  placeholder="Notes"
                />
                <Button
                  caption='Submit'
                  disabled={valid}
                />
                </form>
            )
          }}
        />
      }


    </div>
  ) : null;
};

export default AddComment;