import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

const Layout = ({ children, title, description, nextPage, backButton }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="container">
        <nav>
          {backButton && displayBackButton()}

          <Link href="/">
            <a>
              <span className="main-title">Hacker News - Next</span>
            </a>
          </Link>
        </nav>

        {children}

        <footer>{nextPageLink(nextPage)}</footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 800px;
            background: #f6f6f6;
            margin: 0 auto;
          }

          nav {
            padding: 1em;
            background: #f60;
          }

          nav > * {
            display: inline-block;
          }

          nav a {
            color: black;
            text-decoration: none;
          }

          .main-title {
            font-size: 1.2rem;
            font-weight: 700;
          }
        `}
      </style>
      <style global jsx>
        {`
          html,
          body {
            font-family: Verdana, sans-serif;
          }

          footer a {
            color: black;
            text-decoration: none;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

const nextPageLink = nextPage => {
  if (nextPage) {
    return (
      <React.Fragment>
        <Link href={`/?page=${nextPage}`}>
          <a>{`Next Page: (${nextPage})`}</a>
        </Link>
      </React.Fragment>
    );
  }

  return null;
};

const displayBackButton = () => (
  <React.Fragment>
    <span className="back-button" onClick={() => Router.back()}>
      &#x2b05;
    </span>
    <style jsx>{`
      .back-button {
        font-size: 1rem;
        padding-right: 1em;
        cursor: pointer;
        font-weight: bold;
      }
    `}</style>
  </React.Fragment>
);
export default Layout;
