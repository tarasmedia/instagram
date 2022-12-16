const React = require('react');

module.exports = function Post({onePost}) {
  console.log(onePost);
  return (
    <div className="card" style={{ "width": "18rem" }}>
      <img src={onePost.picture} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{onePost.text}</p>
        <a href="#" className="btn btn-primary" data-postid={onePost.id}><i class="bi bi-heart-fill"></i> <span class='likes'>{onePost.likes}</span></a>
      </div>
    </div>
  )
};