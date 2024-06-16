import { Tweet } from "../tweet/Tweet";

export type Comment = {
  author: string | null;
  commentAuthor: string | null;
  commentContent: string | null;
  commentTweet: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  tweet?: Tweet | null;
  updatedAt: Date;
};
