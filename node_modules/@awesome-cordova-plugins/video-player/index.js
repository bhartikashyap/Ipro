var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var VideoPlayerOriginal = /** @class */ (function (_super) {
    __extends(VideoPlayerOriginal, _super);
    function VideoPlayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoPlayerOriginal.prototype.play = function (fileUrl, options) { return cordova(this, "play", {}, arguments); };
    VideoPlayerOriginal.prototype.close = function () { return cordova(this, "close", { "sync": true }, arguments); };
    VideoPlayerOriginal.pluginName = "VideoPlayer";
    VideoPlayerOriginal.plugin = "https://github.com/moust/cordova-plugin-videoplayer.git";
    VideoPlayerOriginal.pluginRef = "VideoPlayer";
    VideoPlayerOriginal.repo = "https://github.com/moust/cordova-plugin-videoplayer";
    VideoPlayerOriginal.platforms = ["Android"];
    return VideoPlayerOriginal;
}(AwesomeCordovaNativePlugin));
var VideoPlayer = new VideoPlayerOriginal();
export { VideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdmlkZW8tcGxheWVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQW1EM0QsK0JBQTBCOzs7O0lBU3pELDBCQUFJLGFBQUMsT0FBZSxFQUFFLE9BQXNCO0lBUTVDLDJCQUFLOzs7Ozs7c0JBckVQO0VBb0RpQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgdGhlIHZpZGVvIHBsYXliYWNrIHVzaW5nIHRoZSBgcGxheWAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9PcHRpb25zIHtcbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCB2b2x1bWUgb2YgdGhlIHZpZGVvIHBsYXliYWNrLCB3aGVyZSAwLjAgaXMgMCUgdm9sdW1lIGFuZCAxLjAgaXMgMTAwJS5cbiAgICogRm9yIGV4YW1wbGU6IGZvciBhIHZvbHVtZSBvZiAzMCUgc2V0IHRoZSB2YWx1ZSB0byAwLjMuXG4gICAqL1xuICB2b2x1bWU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGVyZSBhcmUgdHdvIG9wdGlvbnMgZm9yIHRoZSBzY2FsaW5nIG1vZGUuIFNDQUxFX1RPX0ZJVCB3aGljaCBpcyBkZWZhdWx0IGFuZCBTQ0FMRV9UT19GSVRfV0lUSF9DUk9QUElORy5cbiAgICogVGhlc2Ugc3RyaW5ncyBhcmUgdGhlIG9ubHkgb25lcyB3aGljaCBjYW4gYmUgcGFzc2VkIGFzIG9wdGlvbi5cbiAgICovXG4gIHNjYWxpbmdNb2RlPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIFZpZGVvIFBsYXllclxuICogQGRlc2NyaXB0aW9uXG4gKiBBIENvcmRvdmEgcGx1Z2luIHRoYXQgc2ltcGx5IGFsbG93cyB5b3UgdG8gaW1tZWRpYXRlbHkgcGxheSBhIHZpZGVvIGluIGZ1bGxzY3JlZW4gbW9kZS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvbS5tb3VzdC5jb3Jkb3ZhLnZpZGVvcGxheWVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1ZpZGVvUGxheWVyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vbW91c3QvY29yZG92YS1wbHVnaW4tdmlkZW9wbGF5ZXIpLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBWaWRlb1BsYXllciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy92aWRlby1wbGF5ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZGVvUGxheWVyOiBWaWRlb1BsYXllcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gUGxheWluZyBhIHZpZGVvLlxuICogdGhpcy52aWRlb1BsYXllci5wbGF5KCdmaWxlOi8vL2FuZHJvaWRfYXNzZXQvd3d3L21vdmllLm1wNCcpLnRoZW4oKCkgPT4ge1xuICogIGNvbnNvbGUubG9nKCd2aWRlbyBjb21wbGV0ZWQnKTtcbiAqIH0pLmNhdGNoKGVyciA9PiB7XG4gKiAgY29uc29sZS5sb2coZXJyKTtcbiAqIH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIFZpZGVvT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1ZpZGVvUGxheWVyJyxcbiAgcGx1Z2luOiAnaHR0cHM6Ly9naXRodWIuY29tL21vdXN0L2NvcmRvdmEtcGx1Z2luLXZpZGVvcGxheWVyLmdpdCcsXG4gIHBsdWdpblJlZjogJ1ZpZGVvUGxheWVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tb3VzdC9jb3Jkb3ZhLXBsdWdpbi12aWRlb3BsYXllcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZGVvUGxheWVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUGxheXMgdGhlIHZpZGVvIGZyb20gdGhlIHBhc3NlZCB1cmwuXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlVXJsIHtzdHJpbmd9IEZpbGUgdXJsIHRvIHRoZSB2aWRlby5cbiAgICogQHBhcmFtIG9wdGlvbnMge1ZpZGVvT3B0aW9ucz99IE9wdGlvbmFsIHZpZGVvIHBsYXliYWNrIHNldHRpbmdzLiBTZWUgb3B0aW9ucyBhYm92ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgcHJvbWlzZSB3aGVuIHRoZSB2aWRlbyB3YXMgcGxheWVkIHN1Y2Nlc3NmdWxseS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGxheShmaWxlVXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBWaWRlb09wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyB0aGUgdmlkZW8gcGxheWJhY2sgaW1tZWRpYXRseS5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjbG9zZSgpOiB2b2lkIHt9XG59XG4iXX0=