import { displayPosts } from './modules/posts.js';
import { getPosts, createPost, loginUser } from './modules/ajax.js';
import { saveUser } from './modules/users.js';

(function(){
    $("#login-btn").click(() => loginUser(saveUser));
    $("#post-btn").click(() => createPost(displayPosts));
    // getPosts(displayPosts);
})();

