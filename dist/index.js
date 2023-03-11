"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Youtube = void 0;
const googleapis_1 = require("googleapis");
class Youtube {
    constructor(apiKey) {
        this._apiKey = apiKey;
        this._api = new googleapis_1.youtube_v3.Youtube({
            key: this._apiKey,
        });
    }
    /**
     * Search for one or more channels
     * @param ids One or more ids of the channel(s) you want to search
     */
    searchChannels(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(!options.forUsername, !options.id);
            if ((!options.forUsername && options.id) || (options.forUsername && !options.id)) {
                let channels = this._api.channels.list(Object.assign(Object.assign({}, options), { key: this._apiKey }));
                return channels;
            }
            else
                throw new Error("Channel username/id needed to be able to search for it.");
        });
    }
    getVideoComments(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let comments = yield this._api.commentThreads.list(Object.assign(Object.assign({}, options), { key: this._apiKey }));
            return comments;
        });
    }
    search(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let search = yield this._api.search.list({
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
        });
    }
}
exports.Youtube = Youtube;
