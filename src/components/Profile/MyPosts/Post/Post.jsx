import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://u.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg" alt='pic' />
      {props.message}
      <div>
        <span>like </span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
