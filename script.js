(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://raw.githubusercontent.com/Wronk4/javascript2_2/refs/heads/main/db.json')
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

  const popup = document.createElement('div');
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2196F3;
    color: white;
    padding: 30px 40px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  `;
  
  const text = document.createElement('div');
  text.textContent = 'Ładowanie...';
  text.style.fontSize = '18px';
  popup.appendChild(text);
  
  const loader = document.createElement('div');
  loader.style.cssText = `
    display: flex;
    gap: 8px;
  `;
  
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      width: 12px;
      height: 12px;
      background: white;
      border-radius: 50%;
      animation: bounce 1.4s infinite ease-in-out both;
      animation-delay: ${i * 0.16}s;
    `;
    loader.appendChild(dot);
  }
  
  popup.appendChild(loader);
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(popup);

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
      }).finally(() => {
        popup.remove();
        style.remove();
      });
});
})();
