document.addEventListener('DOMContentLoaded', function() {

    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];


    const blogPostsContainer = document.getElementById('blog-posts-container');

    // Display stored blog posts
    blogPosts.forEach((post, index) => {
        const section = document.createElement('section');
        const heading = document.createElement('h3');
        heading.textContent = `Blog Post ${index + 1}`;
        const paragraph = document.createElement('p');
        paragraph.textContent = `Username: ${post.username}, Title: ${post.title}, Content: ${post.content}`;
        section.appendChild(heading);
        section.appendChild(paragraph);
        blogPostsContainer.appendChild(section);
    });

    // Back button functionality
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function() {
        window.history.back(); // Go back to the first page
    });
});

const displayBlogPosts = () => {
    blogPostsContainer.innerHTML = ''; 

   
    blogPosts.forEach((post, index) => {
        const section = document.createElement('section');
        section.classList.add('blog-post'); 
        const heading = document.createElement('h3');
        heading.textContent = `Blog Post ${index + 1}`;
        const paragraph = document.createElement('p');
        paragraph.textContent = `Username: ${post.username}, Title: ${post.title}, Content: ${post.content}`;
        section.appendChild(heading);
        section.appendChild(paragraph);
        blogPostsContainer.appendChild(section);
    });
};