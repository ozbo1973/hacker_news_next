import fetch from "isomorphic-fetch";

import Error from "./_error";
import Layout from "../components/Layout";
import StoryMain from "../components/story/StoryMain";
import CommentsList from "../components/CommentsList";

class Story extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let errMsg = null;
    let story = null;
    try {
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/item/${query.id}`
      );
      story = await response.json();
    } catch (error) {
      console.log(error);
      errMsg = error.message;
    }

    return { story, errMsg };
  }

  render() {
    const { story, errMsg } = this.props;
    if (errMsg) {
      return <Error statusCode={503} errMsg={errMsg} />;
    }

    return (
      <Layout backButton title={story.title}>
        <StoryMain story={story} />

        {this.renderCommentsList()}
      </Layout>
    );
  }

  renderCommentsList = () => {
    const { comments_count, comments } = this.props.story;
    return comments_count > 0 ? (
      <CommentsList comments={comments} />
    ) : (
      <div>No Comments for this story.</div>
    );
  };
}

export default Story;
