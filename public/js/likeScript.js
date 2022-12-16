const postsContainer = document.querySelector('.postContainer');

postsContainer.addEventListener('click', async (event) => {
  event.preventDefault();
  console.log(event.target.classList);
  if (event.target.classList.contains('btn')) {
    console.log(event.target.dataset.postid);
    const response = await fetch(`/posts/like/${event.target.dataset.postid}`);
    // server
    const result = await response.json();
    event.target.querySelector('.likes').innerText = result.likes;
  }
});