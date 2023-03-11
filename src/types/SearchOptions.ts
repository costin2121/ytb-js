export type regionCode =
  | "AF"
  | "AX"
  | "AL"
  | "DZ"
  | "AS"
  | "AD"
  | "AO"
  | "AI"
  | "AQ"
  | "AG"
  | "AR"
  | "AM"
  | "AW"
  | "AU"
  | "AT"
  | "AZ"
  | "BH"
  | "BS"
  | "BD"
  | "BB"
  | "BY"
  | "BE"
  | "BZ"
  | "BJ"
  | "BM"
  | "BT"
  | "BO"
  | "BQ"
  | "BA"
  | "BW"
  | "BV"
  | "BR"
  | "IO"
  | "BN"
  | "BG"
  | "BF"
  | "BI"
  | "KH"
  | "CM"
  | "CA"
  | "CV"
  | "KY"
  | "CF"
  | "TD"
  | "CL"
  | "CN"
  | "CX"
  | "CC"
  | "CO"
  | "KM"
  | "CG"
  | "CD"
  | "CK"
  | "CR"
  | "CI"
  | "HR"
  | "CU"
  | "CW"
  | "CY"
  | "CZ"
  | "DK"
  | "DJ"
  | "DM"
  | "DO"
  | "EC"
  | "EG"
  | "SV"
  | "GQ"
  | "ER"
  | "EE"
  | "ET"
  | "FK"
  | "FO"
  | "FJ"
  | "FI"
  | "FR"
  | "GF"
  | "PF"
  | "TF"
  | "GA"
  | "GM"
  | "GE"
  | "DE"
  | "GH"
  | "GI"
  | "GR"
  | "GL"
  | "GD"
  | "GP"
  | "GU"
  | "GT"
  | "GG"
  | "GN"
  | "GW"
  | "GY"
  | "HT"
  | "HM"
  | "VA"
  | "HN"
  | "HK"
  | "HU"
  | "IS"
  | "IN"
  | "ID"
  | "IR"
  | "IQ"
  | "IE"
  | "IM"
  | "IL"
  | "IT"
  | "JM"
  | "JP"
  | "JE"
  | "JO"
  | "KZ"
  | "KE"
  | "KI"
  | "KP"
  | "KR"
  | "KW"
  | "KG"
  | "LA"
  | "LV"
  | "LB"
  | "LS"
  | "LR"
  | "LY"
  | "LI"
  | "LT"
  | "LU"
  | "MO"
  | "MK"
  | "MG"
  | "MW"
  | "MY"
  | "MV"
  | "ML"
  | "MT"
  | "MH"
  | "MQ"
  | "MR"
  | "MU"
  | "YT"
  | "MX"
  | "FM"
  | "MD"
  | "MC"
  | "MN"
  | "ME"
  | "MS"
  | "MA"
  | "MZ"
  | "MM"
  | "NA"
  | "NR"
  | "NP"
  | "NL"
  | "NC"
  | "NZ"
  | "NI"
  | "NE"
  | "NG"
  | "NU"
  | "NF"
  | "MP"
  | "NO"
  | "OM"
  | "PK"
  | "PW"
  | "PS"
  | "PA"
  | "PG"
  | "PY"
  | "PE"
  | "PH"
  | "PN"
  | "PL"
  | "PT"
  | "PR"
  | "QA"
  | "RE"
  | "RO"
  | "RU"
  | "RW"
  | "BL"
  | "SH"
  | "KN"
  | "LC"
  | "MF"
  | "PM"
  | "VC"
  | "WS"
  | "SM"
  | "ST"
  | "SA"
  | "SN"
  | "RS"
  | "SC"
  | "SL"
  | "SG"
  | "SX"
  | "SK"
  | "SI"
  | "SB"
  | "SO"
  | "ZA"
  | "GS"
  | "SS"
  | "ES"
  | "LK"
  | "SD"
  | "SR"
  | "SJ"
  | "SZ"
  | "SE"
  | "CH"
  | "SY"
  | "TW"
  | "TJ"
  | "TZ"
  | "TH"
  | "TL"
  | "TG"
  | "TK"
  | "TO"
  | "TT"
  | "TN"
  | "TR"
  | "TM"
  | "TC"
  | "TV"
  | "UG"
  | "UA"
  | "AE"
  | "GB"
  | "US"
  | "UM"
  | "UY"
  | "UZ"
  | "VU"
  | "VE"
  | "VN"
  | "VG"
  | "VI"
  | "WF"
  | "EH"
  | "YE"
  | "ZM"
  | "ZW";

export type SearchOptions = {
  /**Specifies the query term to search for. */
  q: string;
  /**Indicates that the API response should only contain resources created by the channel. */
  channelId?: string;
  /**Restrict a search to a particular type of channel. Can be any or show */
  channelType?: "any" | "show";
  /**Restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value to video. Can be completed, live or upcoming */
  eventType?: "completed" | "live" | "upcoming";
  /**Specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5. */
  maxResults?: number;
  /**
   * Specifies the method that will be used to order resources in the API response. The default value is relevance.
   *
   * **date** – Resources are sorted in reverse chronological order based on the date they were created.
   *
   * **rating** – Resources are sorted from highest to lowest rating.
   *
   * **relevance** – Resources are sorted based on their relevance to the search query. This is the default value for this parameter.
   *
   * **title** – Resources are sorted alphabetically by title.
   *
   * **videoCount** – Channels are sorted in descending order of their number of uploaded videos.
   *
   * **viewCount** – Resources are sorted from highest to lowest number of views. For live broadcasts, videos are sorted by number of concurrent viewers while the broadcasts are ongoing.
   */
  order?:
    | "date"
    | "rating"
    | "relevance"
    | "title"
    | "videoCount"
    | "viewCount";
  /**Indicates that the API response should only contain resources created at or after the specified time. */
  publishedAfter?: string;
  /**Indicates that the API response should only contain resources created before or at the specified time. */
  publishedBefore?: string;
  /**Instructs the API to return search results for videos that can be viewed in the specified country.
   *
   * The parameter value is an ISO 3166-1 alpha-2 country code. */
  regionCode?: regionCode;
  /**Restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types. The default value is video,channel,playlist. */
  type?: string[];
  /**Indicates whether the API should filter video search results based on whether they have captions. If you specify a value for this parameter, you must also set the type parameter's value to video.
   *
   * Valid values:
   *
   * **any** – Do not filter results based on caption availability.
   *
   * **closedCaption** – Only include videos that have captions.
   *
   * **none** – Only include videos that do not have captions.
   */
  videoCaption?: "any" | "closedCaption" | "none";
  /**Filters video search results based on their category. If you specify a value for this parameter, you must also set the type parameter's value to video. */
  videoCategoryId?: string;
  /**Restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. If you specify a value for this parameter, you must also set the type parameter's value to video.
   *
   * Valid values:
   *
   * **any** – Return all videos, regardless of their resolution.
   * **high** – Only retrieve HD videos.
   * **standard** – Only retrieve videos in standard definition.
   */
  videoDefinition?: "any" | "high" | "standart";
  /**Restrict a search to only retrieve 2D or 3D videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
   *
   * Valid values:
   *
   * **2d** – Restrict search results to exclude 3D videos.
   *
   * **3d** – Restrict search results to only include 3D videos.
   *
   * **any** – Include both 3D and non-3D videos in returned results. This is the default value.
   */
  videoDimension?: "2d" | "3d" | "any";
  /**Filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video.
   *
   * Valid values:
   *
   * **any** – Do not filter video search results based on their duration. This is the default value.
   *
   * **long** – Only include videos longer than 20 minutes.
   *
   * **medium** – Only include videos that are between four and 20 minutes long (inclusive).
   *
   * **short** – Only include videos that are less than four minutes long.
   */
  videoDuration?: "any" | "long" | "medium" | "short";
  /**Restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.
   *
   * Valid values:
   *
   * **any** – Return all videos, embeddable or not.
   * **true** – Only retrieve embeddable videos.
   */
  videoEmbeddable?: "any" | "true";
  /**Filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
   *
   * Valid values:
   *
   * **any** – Return all videos, regardless of which license they have, that match the query parameters.
   *
   * **creativeCommon** – Only return videos that have a Creative Commons license. Users can reuse videos with this license in other videos that they create. Learn more.
   *
   * **youtube** – Only return videos that have the standard YouTube license.
   */
  videoLicense?: "any" | "creativeCommon" | "youtube";
  /**Restrict a search to only videos that can be played outside youtube.com. If you specify a value for this parameter, you must also set the type parameter's value to video.
   *
   * Valid values:
   *
   * **any** – Return all videos, syndicated or not.
   * **true** – Only retrieve syndicated videos.
   */
  videoSyndicated?: "any" | "true";
  /**Restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
   *
   * Valid values:
   *
   * **any** – Return all videos.
   *
   * **episode** – Only retrieve episodes of shows.
   *
   * **movie** – Only retrieve movies.
   */
  videoType?: "any" | "episode" | "movie";
};
