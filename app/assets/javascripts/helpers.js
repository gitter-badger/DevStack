$(function(){
	$('#leaderboard').dataTable( {
	    responsive: true,
	    "lengthMenu": [ [25, 50, 100, 250, -1], [25, 50, 100, 250, "All"] ],

	    "oLanguage": {
	    "sLengthMenu": '_MENU_',
	    "sSearch": "_INPUT_"
	    }
	});

	$('.dataTables_filter input').attr("placeholder", "Search");

	$('.sign-in').on('click', '.btn, .login', function(){
	    $(this).closest('.popup').find('.btn').hide();
	    $(this).closest('.popup').find('.title').hide();
	    $(this).closest('.popup').find('.disable').show();
	});
	$('.signin-btn').on('click', function(){
	    $('.popup').find('.btn, .title, .popup-logo').hide();
	    $('.popup').find('.title').hide();
	    $('.popup').find('.disable').show();
	    window.location.replace("/signin");
	});

	var windowWidth = $(window).width();
	socialProfileLabelBalancer();
	
	$('.profile-menu').on('click', function(){
	    $(this).toggleClass('active');
	    $('.offset-profile-menu').slideToggle().toggleClass('active');
	    $('body').unbind('click');
		  $('.offset-profile-menu').unbind('mouseleave');
		  $('.offset-profile-menu, .profile-menu').unbind('mouseenter');



	    $('.offset-profile-menu').mouseleave(function() {
				$('body').on('click',function(){
					$('.profile-menu').removeClass('active');
				  $('.offset-profile-menu').slideToggle().removeClass('active');
				  $('body').unbind('click');
				  $('.offset-profile-menu').unbind('mouseleave');
				  $('.offset-profile-menu, .profile-menu').unbind('mouseenter');
				});
			});

	    $('.offset-profile-menu, .profile-menu').mouseenter(function() {
				$('body').unbind('click');
			});
	});




	$(window).resize(function() {
	    windowWidth = $(window).width();
	    socialProfileLabelBalancer();
	});

	function socialProfileLabelBalancer(){
	    if (windowWidth < 640){
	        $('.analytic-view-options .stackoverflow-btn').text("STACK");
	    }else{
	        $('.analytic-view-options .stackoverflow-btn').text("STACKOVERFLOW");
	    }
	}

	var stringWithShorterURLs = getReplacementString($(".profile-extra-info span.profile-blog-url a").text());

	function getReplacementString(str){
	    return str.replace(/https?\:\/\/([^\s]*)/gi,function(match){
	        return match.substring(0,25) + "..."
	    });
	}

	$('.profile-extra-info span.profile-blog-url a').text(stringWithShorterURLs);    
});