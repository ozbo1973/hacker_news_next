import CommentsList from "../CommentsList";

const Comment = ({ comment }) => (
  <div className="comment">
    <div className="comment-user">{comment.user}</div>
    <div
      className="comment-content"
      dangerouslySetInnerHTML={{ __html: comment.content }}
    />

    {comment.comments && renderNested(comment)}

    <style jsx>
      {`
        .comment {
          margin: 0;
          margin-bottom: 1.5em;
        }

        .comment-user {
          font-size: 0.9rem;
          font-weight: bold;
          margin-bottom: 0.5em;
        }

        .comment-content {
          font-size: 0.9rem;
        }

        .comment-content :global(p) {
          margin: 0;
          margin-bottom: 0.5rem;
          word-wrap: break-word;
        }

        .comment-content :global(a) {
          color: #f60;
          text-decoration: underline;
        }

        .comment-content :global(pre) {
          max-width: 100%;
          overflow: scroll;
        }
      `}
    </style>
  </div>
);

const renderNested = comment => (
  <div className="nested-comments">
    {comment.comments.map(nested => (
      <Comment key={nested.id} comment={nested} />
    ))}
    <style jsx>{`
      .nested-comments {
        padding-left: 1em;
        margin-top: 1em;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
      }
    `}</style>
  </div>
);

export default Comment;
