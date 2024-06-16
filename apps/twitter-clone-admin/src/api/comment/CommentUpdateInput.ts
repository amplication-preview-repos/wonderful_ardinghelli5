import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  commentAuthor?: string | null;
  commentContent?: string | null;
  commentTweet?: string | null;
  content?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
