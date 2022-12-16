const { ftchfrm } = document.forms;

ftchfrm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { picture, text } = ftchfrm;
  console.log(picture.value, text.value);
  const myPost = { picture: picture.value, text: text.value };
  // fetch
  const response = await fetch('/posts/new',
    {
      method: 'POST',
      body: JSON.stringify(myPost),
      headers: { 'Content-type': 'application/json', 'Anton': 'top' }
    });
    // server work
  const post = await response.json();
  console.log(post);

  const postPreview = document.querySelector('#postPreview');
  postPreview.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="${post.picture}" class="card-img-top">
  <div class="card-body">
    <p class="card-text">${post.text}</p>
    <!--a href="#" class="btn btn-primary">Go somewhere</a-->
  </div>
</div>
  `;
});