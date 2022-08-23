import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../../common/FormsControls/FormsControls'
import { maxLengthCreator, minLengthCreator, required } from '../../../utils/validators/validators'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => {
    return <Post message={p.message} key={p.id} likesCount={p.likesCount} />
  })

  let addNewPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddNewPostFormRedux onSubmit={addNewPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newPostText' placeholder='Enter your post' validate={[required, maxLengthCreator(30), minLengthCreator(1)]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts
