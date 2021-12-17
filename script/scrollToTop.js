window.onscroll = function () {
	//const height = document.getElementById('footer').offsetHeight
	if (window.pageYOffset > 1500) {
	  document.getElementById('scrollTop').classList.add('visible');
	} else {
	  document.getElementById('scrollTop').classList.remove('visible');
	}
  }