import { IMockPost, MockPosts } from "../infrastructure/posts";


export async function addPost(post: IMockPost) {
    fetch('https://blame-your-code-production.up.railway.app/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });

    console.log(post);
    
}

export function getPosts() {
    return MockPosts; 
}