const React = require('react');
const Layout = require('./Layout');
const Post = require('./Post');

module.exports = function MainPage({ all }) {
  // console.log(all);
  return (
    <Layout>
      <script defer src="/js/likeScript.js"></script>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 postContainer">
            {all.map((onePost) => <Post onePost={onePost} key={onePost.id}/>)}
          </div>
        </div>
      </div>
    </ Layout>
  )
};
