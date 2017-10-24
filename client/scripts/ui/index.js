import $ from 'jquery';
import debounce from 'lodash.debounce';

$(document).ready(function() {

  /* + Initialize Stuff + */
  $("html").off('click');

  /* + Window Resize + */
  // $(window).off('resize').on('resize', debounce(function() {
  //   //do resize stuff here
  // }, 100));

  /* + Settings Menu + */

  //- Settings Menu: Main
  $('[data-opens]').off('click').on('click', function() {
    const currentTrigger = $(this);
    const currentMenu = $(this).attr('data-opens');
    const currentMenuEle = $(`[data-menu="${currentMenu}"]`);
    if(!currentMenuEle.hasClass('on')) {
      currentTrigger.addClass('active');
      currentMenuEle.addClass('on').fadeIn(180);
    } else {
      currentTrigger.removeClass('active');
      currentMenuEle.removeClass('on').fadeOut(180);
    }
    $("html").on('click',function(e) {
      if ($(e.target).closest(`[data-opens], [data-menu="${currentMenu}"]`).length === 0) {
        currentTrigger.removeClass('active');
        currentMenuEle.removeClass('on').fadeOut(180);
      }
    });

  });
  //- Settings Menu: Theme Switcher
  $('[data-theme]').off('click').on('click', function() {
    const theme = $(this).attr('data-theme');
    $('[data-theme]').removeClass('active');$(this).addClass('active');
    $('body').removeClass().addClass(theme);
  });

  /* + Accordions + */
  $('.accordion-trigger').off('click').on('click', function() {
    const currentAccordion = $(this).attr('href');
    $(this).toggleClass('active');$(currentAccordion).toggle();
  });
  /* + Modals + */
  $('.modal-trigger').off('click').on('click', function() {
    const currentTrigger = $(this);
    const currentModal = $(this).attr('href');
    $(this).toggleClass('active');$(currentModal).toggle();
    $("html").on('click',function(e) {
      if ($(e.target).closest(`.modal-trigger, .modal-content`).length === 0) {
        currentTrigger.removeClass('active');
        $(currentModal).hide();
      }
    });
  });

  /* + Hamburg + */
  $('.nav-hamburger').on('click', function() {
    $('html').toggleClass('sidebar-on');
  });

  /* + Sidebar + */
  $("html").on('click',function(e) {
    if (
      $(e.target).closest(`#sidebar, .nav-hamburger`).length === 0
      && $('html').hasClass('sidebar-on')
      && window.innerWidth < 950
    ) {
      $('html').removeClass('sidebar-on');
    }
  });

});
