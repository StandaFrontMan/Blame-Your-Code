import { IMockPost, MockPosts } from "../infrastructure/posts";


export function addPost(post: IMockPost) { // Моковая заглушка !!! Я жду бэк от человека, пока использую этот подход
    MockPosts.push(post);
}

export function getPosts() {
    return MockPosts;
}