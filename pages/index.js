import fetch from "isomorphic-fetch";

import StoryList from "../components/StoryList";
import Layout from "../components/Layout";
import Error from "./_error";

class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let stories = [];
    let errMsg = null;
    let page;
    try {
      page = Number(query.page) || 1;
      const res = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await res.json();
    } catch (error) {
      console.log(error);
      errMsg = error.message;
    }

    return { page, stories, errMsg };
  }

  componentDidMount() {
    if ("ServiceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(reg => console.log("Serv Work Registration Complete: ", reg))
        .catch(err => console.warn("Service Worker Failed: ", err.message));
    }
  }

  render() {
    return (
      <Layout
        title="Hacker News"
        description="Hacker news clone made with nextJS."
        nextPage={this.props.page + 1}
      >
        {this.renderNews(this.props)}
      </Layout>
    );
  }

  renderNews = ({ stories, errMsg }) => {
    if (stories.length === 0) {
      return <Error statusCode={503} errMsg={errMsg} />;
    }

    return (
      <div className="story-list">
        {stories.map(story => (
          <StoryList key={story.id} story={story} />
        ))}
        <style jsx>{`
          .story-list {
            margin: 0 1em;
          }
        `}</style>
      </div>
    );
  };
}

export default Index;
