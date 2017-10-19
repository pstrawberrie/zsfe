import $ from 'jquery';

/* + Settings Menu + */
//- Settings Menu: Main
$('[data-opens]').off('click').on('click', function() {
  const currentMenu = $(this).attr('data-opens');
  $(`[data-menu="${currentMenu}"]`).toggleClass('hide');
});
//- Settings Menu: Theme Switcher
$('[data-theme]').off('click').on('click', function() {
  const theme = $(this).attr('data-theme');
  $('body').removeClass().addClass(theme);
});
