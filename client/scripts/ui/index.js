import $ from 'jquery';

// Theme Switcher
$('#theme-switcher').on('click', function() {
  $(this).toggleClass('hide');
});
$('[data-theme]').on('click', function() {
  const theme = $(this).attr('data-theme');
  $('body').removeClass().addClass(theme);
});
