(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

cw1.addEventListener("click", function () {
    answer.innerHTML = 'Loading…';
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        return new Promise(resolve => {
          setTimeout(() => resolve(posts), 1000);
        });
      })
      .then(posts => {
      let html = '<table>'; 
        posts.forEach(post => {
          html += `<tr>
            <td>${post.id}</td>
            <td class="post-title" style="font-size: 16px;">${post.title}</td>
            <td>${post.body}</td>
          </tr>`;

        });
        html += '</table>'; 
        answer.innerHTML = html;
        answer.innerHTML = html;
      });
})

 cw2.addEventListener("click", function () {
    const postSelect = document.getElementById('postSelect');
    const postId = postSelect.value;
    
    answer.innerHTML = 'Loading…';
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(post => {
        console.log(post)
      })
      .catch(error => {
        answer.innerHTML = `<p style="color: red;">Błąd: ${error.message}</p>`;
      });
      answer.innerHTML = 'Sent to console!';
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
