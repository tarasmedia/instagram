const React = require('react');
const Layout = require('./Layout');
const Post = require('./Post');

module.exports = function MainPage({ all }) {
  // console.log(all);
  return (
    <Layout>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 postContainer">
            {all.map((onePost) => <Post onePost={onePost} key={onePost.id} />)}
          </div>
        </div>


        <div className="modal fade" id="editWindow" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body editModal">
                <textarea name="text" className="form-control" id="editTextaArea" rows="3"></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary saveBtn" id="saveBtn" data-bs-dismiss="modal">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script defer src="/js/likeScript.js"></script>
    </ Layout>
  )
};
