angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    videos: '<',
    onClick: '<',
    autoPlay: '<',
    toggleAutoPlay: '<',
    changeResults: '<',
    prevPageToken: '<',
    nextPageToken: '<'
  }
});
