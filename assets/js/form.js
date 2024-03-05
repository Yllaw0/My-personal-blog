const modeSwitch = document.getElementById('modeSwitch');

modeSwitch.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode', modeSwitch.checked);
});

const userInfo = document.querySelector('.container');

userInfo.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content-box').value;
    if (!username || !title || !content) {
        alert("Please fill out all fields.");
        return; 
    }
    
    const formData = {
        username: username,
        title: title,
        content: content,
    };

    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    blogPosts.push(formData);

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Redirect the user to the second page
    window.location.href = 'blog.html';
});