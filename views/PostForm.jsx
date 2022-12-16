const React = require('react');
const Layout = require('./Layout');

module.exports = function PostForm() {
  return (
    <Layout>
      <script defer src="/js/formFetch.js"></script>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <form name="ftchfrm" action='/posts/new' method='POST'>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Photo</label>
                <input name="picture" type="url" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your photos with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your text</label>
                <textarea name="text" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Post!</button>
            </form>
            <div id="postPreview"></div>
          </div>
        </div>
      </div>


    </Layout>
  )
};
