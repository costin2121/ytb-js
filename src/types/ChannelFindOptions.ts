type Part =
  | "auditDetails"
  | "brandingSettings"
  | "contentDetails"
  | "contentOwnerDetails"
  | "id"
  | "localizations"
  | "snippet"
  | "statistics"
  | "status"
  | "topicDetails";

export type ChannelFindOptions = {
  /**Specifies a comma-separated list of one or more channel resource properties that the API response will include.
   *
   * Valid values:
   * 
   * auditDetails

   brandingSettings

   contentDetails

   contentOwnerDetails

   id

   localizations

   snippet

   statistics

   status

   topicDetails
   */
  part: Part[];
  /**Specifies a YouTube username, thereby requesting the channel associated with that username.*/
  forUsername?: string;
  /**Specifies a list of channel id(s) for the resource(s) that are being retrieved. In a channel resource, the id property specifies the channel's YouTube channel ID.  */
  id?: string[];
  /**This parameter can only be used in a properly authorized request. Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user. */
  mine?: boolean;
  /**Specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5. */
  maxResults?: number;
};
