type Part = "id" | "replies" | "snippet";
export type GetCommentsOptions = {
    part: Part[];
    /**Instructs the API to return all comment threads associated with the specified channel. The response can include comments about the channel or about the channel's videos. */
    allThreadsRelatedToChannelId?: string;
    /**Instructs the API to return comment threads containing comments about the specified channel. (The response will not include comments left on videos that the channel uploaded.) */
    channelId?: string;
    /**Specifies a comma-separated list of comment thread IDs for the resources that should be retrieved. */
    id?: string[];
    /**Instructs the API to return comment threads associated with the specified video ID. */
    videoId?: string;
    /**Specifies the maximum number of items that should be returned in the result set.
     *
     *Note: This parameter is not supported for use in conjunction with the id parameter. Acceptable values are 1 to 100, inclusive. The default value is 20. */
    maxResults?: number;
    /**This parameter can only be used in a properly authorized request. Set this parameter to limit the returned comment threads to a particular moderation state.
     *
     *Note: This parameter is not supported for use in conjunction with the id parameter. The default value is published.
     *
     *Valid values are:
     *
     * **heldForReview** – Retrieve comment threads that are awaiting review by a moderator. A comment thread can be included in the response if the top-level comment or at least one of the replies to that comment are awaiting review.
     *
     * **likelySpam** – Retrieve comment threads classified as likely to be spam. A comment thread can be included in the response if the top-level comment or at least one of the replies to that comment is considered likely to be spam.
     *
     * **published** – Retrieve threads of published comments. This is the default value. A comment thread can be included in the response if its top-level comment has been published. */
    moderationStatus?: string;
    /**Specifies the order in which the API response should list comment threads.
     *
     * Valid values are:
     *
     * **time** - Comment threads are ordered by time. This is the default behavior.
     *
     * **relevance** - Comment threads are ordered by relevance.
     *
     * Note: This parameter is not supported for use in conjunction with the id parameter.*/
    order?: string;
    /**Instructs the API to limit the API response to only contain comments that contain the specified search terms.
     *
     * Note: This parameter is not supported for use in conjunction with the id parameter.
     */
    searchTerms?: string;
    /**Set this parameter's value to html or plainText to instruct the API to return the comments left by users in html formatted or in plain text. The default value is html.
     *
     * Valid values:
     *
     * **html** – Returns the comments in HTML format. This is the default value.
     * **plainText** – Returns the comments in plain text format.
     *
     */
    textFormat?: string;
};
export {};
