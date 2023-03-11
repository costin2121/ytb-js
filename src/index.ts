import { youtube_v3 } from "googleapis";
import { SearchOptions } from './types/SearchOptions';
import { ChannelFindOptions } from './types/ChannelFindOptions';
import { GetCommentsOptions }  from './types/GetCommentsOptions'

export class Youtube {
  private _apiKey: string;
  private _api: youtube_v3.Youtube;
  constructor(apiKey: any) {
    this._apiKey = apiKey;
    this._api = new youtube_v3.Youtube({
      key: this._apiKey,
    });
  }

  /**
   * Search for one or more channels
   * @param ids One or more ids of the channel(s) you want to search
   */
  async searchChannels(options: ChannelFindOptions) {
    console.log(!options.forUsername, !options.id)
    
    if ((!options.forUsername && options.id) || (options.forUsername && !options.id)) {
      let channels = this._api.channels.list({ ...options, key: this._apiKey});
      return channels;
    } else throw new Error("Channel username/id needed to be able to search for it.")
  }

  async getVideoComments(options: GetCommentsOptions) {
    let comments = await this._api.commentThreads.list({
      ...options,
      key: this._apiKey
    });

    return comments;
  }

  async search(options: SearchOptions) {
    let search = await this._api.search.list({
      part: ["snippet"],
      key: this._apiKey,
      channelId: options.channelId ? options.channelId : undefined,
      q: options.q,
      channelType: options.channelType ? options.channelType : undefined,
      eventType: options.eventType ? options.eventType : undefined,
      maxResults: options.maxResults ? options.maxResults : 5, 
      order: options.order ? options.order : undefined, 
      publishedAfter: options.publishedAfter ? options.publishedAfter : undefined, 
      publishedBefore: options.publishedBefore ? options.publishedBefore : undefined, 
      regionCode: options.regionCode ? options.regionCode : undefined, 
      type: options.type ? options.type : undefined, 
      videoCaption: options.videoCaption ? options.videoCaption : undefined, 
      videoCategoryId: options.videoCategoryId ? options.videoCategoryId : undefined, 
      videoDefinition: options.videoDefinition ? options.videoDefinition : undefined, 
      videoDimension: options.videoDimension ? options.videoDimension : undefined, 
      videoDuration: options.videoDuration ? options.videoDuration : undefined, 
      videoEmbeddable: options.videoEmbeddable ? options.videoEmbeddable : undefined, 
      videoLicense: options.videoLicense ? options.videoLicense : undefined, 
      videoSyndicated: options.videoSyndicated ? options.videoSyndicated : undefined, 
      videoType: options.videoType ? options.videoType : undefined, 
    });

    return search;
  }
}