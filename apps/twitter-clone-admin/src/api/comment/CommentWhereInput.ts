import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  commentAuthor?: StringNullableFilter;
  commentContent?: StringNullableFilter;
  commentTweet?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  tweet?: TweetWhereUniqueInput;
};
