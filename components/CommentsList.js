import Comment from "./story/Comment";

export default ({ comments }) => {
  return (
    <div className="comment-list">
      {renderComment(comments)}

      <style jsx>
        {`
          .comment-list {
            padding: 0 1em;
          }
        `}
      </style>
    </div>
  );
};

const renderComment = comments =>
  comments.map(comment => <Comment key={comment.id} comment={comment} />);
