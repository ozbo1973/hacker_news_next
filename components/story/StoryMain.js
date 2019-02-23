export default ({ story }) => {
  return (
    <main>
      <h1 className="story-title">
        <a href={story.url} target="_blank">
          {story.title}
        </a>
      </h1>
      <div className="story-details">
        <strong>{story.points} points </strong>
        <strong>{story.comments_count} comments </strong>
        <strong>{story.time_ago}</strong>
      </div>
      <style jsx>
        {`
          main {
            margin: 0;
            padding: 1em;
          }

          .story-title {
            font-size: 1.2rem;
            font-weight: 400;
            margin: 0;
            padding-bottom: 0.5em;
          }

          .story-title a {
            color: #333;
            text-decoration: none;
          }

          .story-title a:hover {
            color: black;
            text-decoration: underline;
          }

          .story-details {
            font-size: 0.8rem;
            padding-bottom: 0.5em;
            border-bottom: 1px solid black;
            margin-bottom: 1em;
          }

          .story-details strong {
            margin-right: 1em;
          }

          .story-details a {
            color: #f60;
          }
        `}
      </style>
    </main>
  );
};
