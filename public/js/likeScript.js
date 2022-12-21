const postsContainer = document.querySelector('.container');
let cardTextElement = '';

postsContainer.addEventListener('click', async (event) => {
  event.preventDefault();

  const editableText = document.querySelector('#editTextaArea');

  console.log(event.target.classList);
  if (event.target.classList.contains('likeBtn')) {
    const response = await fetch(`/posts/like/${event.target.dataset.postid}`);
    // server
    const result = await response.json();
    event.target.querySelector('.likes').innerText = result.likes;
  }
  if (event.target.classList.contains('deleteBtn')) {
    const resp = await fetch(`/posts/${event.target.dataset.postid}`, { method: 'DELETE' });
    if (resp.status === 222) {
      event.target.parentNode.parentNode.remove();
    } else if (resp.status === 555) {
      alert('удалить не удалось, попробуйте позднее');
    }
  }
  if (event.target.classList.contains('editBtn')) {
    cardTextElement = event.target.closest('.card-body').firstChild
    const cardText = cardTextElement.innerText;
    editableText.innerText = cardText;
    // console.log(document.querySelector('#saveBtn'));
    document.querySelector('#saveBtn').setAttribute('data-editPostId', event.target.dataset.postid);
  }
  if (event.target.classList.contains('saveBtn')) {
    console.log(event.target.dataset.postid);
    const res = await fetch(`/posts/${event.target.dataset.editpostid}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ text: editableText.value })
    });
    if(res.status === 200){
      // console.log('----->', cardTextElement);
      cardTextElement.innerText = editableText.value;
    }
  }
});