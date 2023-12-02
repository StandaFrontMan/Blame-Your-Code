export interface PostSubmitionRepository {
  submitPost(
    postLanguage: string,
    postCode: string,
    postTitle: string,
    postComment: string
  ): Promise<void>;
}
