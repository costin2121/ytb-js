import { youtube_v3 } from "googleapis";
import { SearchOptions } from './types/SearchOptions';
import { ChannelFindOptions } from './types/ChannelFindOptions';
import { GetCommentsOptions } from './types/GetCommentsOptions';
export declare class Youtube {
    private _apiKey;
    private _api;
    constructor(apiKey: any);
    /**
     * Search for one or more channels
     * @param ids One or more ids of the channel(s) you want to search
     */
    searchChannels(options: ChannelFindOptions): Promise<import("gaxios").GaxiosResponse<youtube_v3.Schema$ChannelListResponse>>;
    getVideoComments(options: GetCommentsOptions): Promise<import("gaxios").GaxiosResponse<youtube_v3.Schema$CommentThreadListResponse>>;
    search(options: SearchOptions): Promise<import("gaxios").GaxiosResponse<youtube_v3.Schema$SearchListResponse>>;
}
