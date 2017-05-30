$(function () {

	$.fn.videoPlayer = function (options) {


		var settings = {
			playerWidth: '1.0', // Default is 95%
			videoClass: 'video' // Video Class
		}

		// Extend the options so they work with the plugin
		if (options) {
			$.extend(settings, options);
		}


		// For each so that we keep chainability.
		return this.each(function () {

			$(this)[0].addEventListener('loadedmetadata', function () {

				// Basic Variables 
				var $this = $(this);
				var $settings = settings;

				// Wrap the video in a div with the class of your choosing
				$this.wrap('<div class="' + $settings.videoClass + '"></div>');


				// Select the div we just wrapped our video in for easy selection.
				var $that = $this.parent('.' + $settings.videoClass);

				// The Structure of our video player
				{

					$('<div class="player">' +
						'<div class="play-pause play">' +
						'<div class="play-button"></div>' +
						'<div class="pause-button"></div>' +
						'</div>' +
						'<div class="progress">' +
						'<div class="progress-bar">' +
						'<div class="button-holder">' +
						'<div class="progress-button"> </div>' +
						'</div>' +
						'</div>' +
						'</div>' +
						'<div class="fullscreen"> ' +
						'</div>' +
						'</div>').appendTo($that);

				}


				// Width of the video
				$videoWidth = $this.width();
				$that.width($videoWidth + 'px');

				// Set width of the player based on previously noted settings
				$that.find('.player').css({
					'width': '100%',
					'left': '0'
				});


				// Video information
				var $spc = $(this)[0], // Specific video
					$duration = $spc.duration, // Video Duration
					$volume = $spc.volume, // Video volume
					currentTime;

				// Some other misc variables to check when things are happening
				var $mclicking = false,
					$vclicking = false,
					$vidhover = false,
					$volhover = false,
					$playing = false,
					$drop = false,
					$begin = false,
					$draggingProgess = false,
					$storevol,
					x = 0,
					y = 0,
					vtime = 0,
					updProgWidth = 0,
					volume = 0;

				// Setting the width, etc of the player
				var $volume = $spc.volume;

				// So the user cant select text in the player
				$that.bind('selectstart', function () {
					return false;
				});

				// Set some widths
				var progWidth = $that.find('.progress').width();


				var bufferLength = function () {

					// The buffered regions of the video
					var buffered = $spc.buffered;

					// Rest all buffered regions everytime this function is run
					$that.find('[class^=buffered]').remove();

					// If buffered regions exist
					if (buffered.length > 0) {

						// The length of the buffered regions is i
						var i = buffered.length;

						while (i--) {
							// Max and min buffers
							$maxBuffer = buffered.end(i);
							$minBuffer = buffered.start(i);

							// The offset and width of buffered area				
							var bufferOffset = ($minBuffer / $duration) * 100;
							var bufferWidth = (($maxBuffer - $minBuffer) / $duration) * 100;

							// Append the buffered regions to the video
							$('<div class="buffered"></div>').css({
								"left": bufferOffset + '%',
								'width': bufferWidth + '%'
							}).appendTo($that.find('.progress'));

						}
					}
				}

				// Run the buffer function
				bufferLength();

				// The timing function, updates the time.
				var timeUpdate = function ($ignore) {

					// The current time of the video based on progress bar position
					var time = Math.round(($('.progress-bar').width() / progWidth) * $duration);

					// The 'real' time of the video
					var curTime = $spc.currentTime;

					// Seconds are set to 0 by default, minutes are the time divided by 60
					// tminutes and tseconds are the total mins and seconds.
					var seconds = 0,
						minutes = Math.floor(time / 60),
						tminutes = Math.round($duration / 60),
						tseconds = Math.round(($duration) - (tminutes * 60));

					// If time exists (well, video time)
					if (time) {
						// seconds are equal to the time minus the minutes
						seconds = Math.round(time) - (60 * minutes);

						// So if seconds go above 59
						if (seconds > 59) {
							// Increase minutes, reset seconds
							seconds = Math.round(time) - (60 * minutes);
							if (seconds == 60) {
								minutes = Math.round(time / 60);
								seconds = 0;
							}
						}

					}

					// Updated progress width
					updProgWidth = (curTime / $duration) * progWidth

					// Set a zero before the number if its less than 10.
					if (seconds < 10) {
						seconds = '0' + seconds;
					}
					if (tseconds < 10) {
						tseconds = '0' + tseconds;
					}

					// A variable set which we'll use later on
					if ($ignore != true) {
						$that.find('.progress-bar').css({
							'width': updProgWidth + 'px'
						});
						$that.find('.progress-button').css({
							'left': (updProgWidth - $that.find('.progress-button').width()) + 'px'
						});
					}

					// Update times
					$that.find('.ctime').html(minutes + ':' + seconds)
					$that.find('.ttime').html(tminutes + ':' + tseconds);

					// If playing update buffer value
					if ($spc.currentTime > 0 && $spc.paused == false && $spc.ended == false) {
						bufferLength();
					}

				}

				// Run the timing function twice, once on init and again when the time updates.
				timeUpdate();
				$spc.addEventListener('timeupdate', timeUpdate);

				// When the user clicks play, bind a click event	
				$that.find('.play-pause').bind('click', function () {

					// Set up a playing variable
					if ($spc.currentTime > 0 && $spc.paused == false && $spc.ended == false) {
						$playing = false;
					} else {
						$playing = true;
					}

					// If playing, etc, change classes to show pause or play button
					if ($playing == false) {
						$spc.pause();
						$(this).addClass('play').removeClass('pause');
						bufferLength();
					} else {
						$begin = true;
						$spc.play();
						$(this).addClass('pause').removeClass('play');
					}

				});


				// Bind a function to the progress bar so the user can select a point in the video
				$that.find('.progress').bind('mousedown', function (e) {

					// Progress bar is being clicked
					$mclicking = true;

					// If video is playing then pause while we change time of the video
					if ($playing == true) {
						$spc.pause();
					}

					// The x position of the mouse in the progress bar 
					x = e.pageX - $that.find('.progress').offset().left;

					// Update current time
					currentTime = (x / progWidth) * $duration;

					$spc.currentTime = currentTime;

				});

				// For usability purposes then bind a function to the body assuming that the user has clicked mouse
				// down on the progress bar or volume bar
				$('body, html').bind('mousemove', function (e) {

					// Hide the player if video has been played and user hovers away from video
					if ($begin == true) {
						$that.hover(function () {
							$that.find('.player').stop(true, false).animate({
								'opacity': '1'
							}, 0.5);
						}, function () {
							$that.find('.player').stop(true, false).animate({
								'opacity': '1'
							}, 0.5); //Must desappear
						});
					}

					// For the progress bar controls
					if ($mclicking == true) {

						// Dragging is happening
						$draggingProgress = true;
						// The thing we're going to apply to the CSS (changes based on conditional statements);
						var progMove = 0;
						// Width of the progress button (a little button at the end of the progress bar)
						var buttonWidth = $that.find('.progress-button').width();

						// Updated x posititon the user is at
						x = e.pageX - $that.find('.progress').offset().left;

						// If video is playing
						if ($playing == true) {
							// And the current time is less than the duration				
							if (currentTime < $duration) {
								// Then the play-pause icon should definitely be a pause button 
								$that.find('.play-pause').addClass('pause').removeClass('play');
							}
						}


						if (x < 0) { // If x is less than 0 then move the progress bar 0px
							progMove = 0;
							$spc.currentTime = 0;
						} else if (x > progWidth) { // If x is more than the progress bar width then set progMove to progWidth
							$spc.currentTime = $duration;
							progMove = progWidth;
						} else { // Otherwise progMove is equal to the mouse x coordinate
							progMove = x;
							currentTime = (x / progWidth) * $duration;
							$spc.currentTime = currentTime;
						}

						// Change CSS based on previous conditional statement
						$that.find('.progress-bar').css({
							'width': progMove + 'px'
						});
						$that.find('.progress-button').css({
							'left': (progMove - buttonWidth) + 'px'
						});

					}


				})

				// When the video ends the play button becomes a pause button
				$spc.addEventListener('ended', function () {

					$playing = false;

					// If the user is not dragging
					if ($draggingProgress == false) {
						$that.find('.play-pause').addClass('play').removeClass('pause');
					}

				});

				// If the user lets go of the mouse, clicking is false for both volume and progress.
				// Also the video will begin playing if it was playing before the drag process began.
				// We're also running the bufferLength function
				$('body, html').bind('mouseup', function (e) {

					$mclicking = false;
					$vclicking = false;
					$draggingProgress = false;

					if ($playing == true) {
						$spc.play();
					}

					bufferLength();


				});

				// Check if fullscreen supported. If it's not just don't show the fullscreen icon.
				if (!$spc.requestFullscreen && !$spc.mozRequestFullScreen && !$spc.webkitRequestFullScreen) {
					$('.fullscreen').hide();
				}

				// Requests fullscreen based on browser.
				$('.fullscreen').click(function () {

					if ($spc.requestFullscreen) {
						$spc.requestFullscreen();
					} else if ($spc.mozRequestFullScreen) {
						$spc.mozRequestFullScreen();
					} else if ($spc.webkitRequestFullScreen) {
						$spc.webkitRequestFullScreen();
					}

				});



			});

		});

	}

	$(document).ready(function () {
		$('video').videoPlayer({
			'playerWidth': 1,
			'videoClass': 'video'
		});
	});

})