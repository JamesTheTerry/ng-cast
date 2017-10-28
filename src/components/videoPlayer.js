angular.module('video-player')

.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    cv: '<',
    cvFullDetails: '<',
    getFullDetails: '<'
  }
})
.filter('youtubeEmbedUrl', function($sce) {
  return function(videoId) {
    return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + videoId);
  };
});