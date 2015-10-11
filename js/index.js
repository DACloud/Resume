// sildeDown部分
$(".skills .skills_sub").hover(function(){
  $(this).find(".slideDown").fadeIn();
},function(){
  $(this).find(".slideDown").fadeOut();
})
