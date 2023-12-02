import { PostSubmitionRepository } from "../domain/PostSubmitionRepository";

export class PostSubmitionRepositoryImpl implements PostSubmitionRepository {
  async submitPost(
    postLanguage: string,
    postCode: string,
    postTitle: string,
    postComment: string
  ): Promise<void> {
    if (
      postLanguage === null ||
      postCode === null ||
      postTitle === null ||
      postComment === null
    ) {
      throw new Error("One property is missing :-(");
    }

    const token = this.getTokenFromLocalStorage();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE}Post/Create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: postLanguage,
          code: postCode,
          title: postTitle,
          comment: postComment,
        }),
      }
    );
  }

  private getTokenFromLocalStorage(): string | null {
    const token = localStorage.getItem("token");
    return token !== null ? JSON.parse(token) : null;
  }
}
