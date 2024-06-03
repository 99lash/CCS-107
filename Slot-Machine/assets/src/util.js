const screen = document.getElementById('minmax_screen');
screen.addEventListener('click', toggleFullScreenMode);

function toggleFullScreenMode() {
  if (document.fullscreenElement == null) {
      document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
      document.exitFullscreen();
  }
}


//check
// document.addEventListener('fullscreenchange', function () {
//   if (document.fullscreenElement != null) {
//       console.log('Entered fullscreen mode');
//   } else {
//       console.log('Exited fullscreen mode');
//   }
// });

