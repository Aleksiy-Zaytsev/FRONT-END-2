$("button.nav-link").click(function () {
  $("button.nav-link").removeClass("active");
  $(this).addClass("active");
  const tab = $(this).data("target");
  $(".tab-pane").removeClass("active");
  $(tab).addClass("active");
});
