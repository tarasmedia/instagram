const React = require('react');

module.exports = function Post({onePost}) {
  console.log(onePost);
  return (
    <div className="card" style={{ "width": "18rem" }}>
      <img src={onePost.picture} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{onePost.text}</p>
        <a href="#" className="btn btn-primary likeBtn" data-postid={onePost.id}><i class="bi bi-heart-fill"></i> <span class='likes'>{onePost.likes}</span></a>
        <a href="#" className="btn btn-danger deleteBtn" data-postid={onePost.id}><i class="bi bi-trash3"></i></a>
        <button type="button" className="btn btn-warning editBtn" data-postid={onePost.id} data-bs-toggle="modal" data-bs-target="#editWindow"><i class="bi bi-pencil"></i></button>
      </div>
    </div>
  )
};