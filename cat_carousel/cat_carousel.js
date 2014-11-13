$.Carousel = function (el) {
  this.$el = $(el);
  this.activeIdx = 0;
  this.$images = this.$el.find('.items').children();
  this.$el.find('.items img:first-child').addClass('active');
  this.$el.on("click", "a", this.slide.bind(this));
}
 
$.Carousel.prototype.slide = function (event) {
  if (this.transitioning === true) {
    return
  }
  this.transitioning = true;
  if (event.currentTarget.className === "slide-left") {
    var direction = 1;
    var dirClass = "left";
    var oppositeClass = 'right'

  } else if (event.currentTarget.className === "slide-right") {
    var direction = -1;
    var dirClass = 'right';
    var oppositeClass = 'left'
  }
  var $item = this.$el.find(".items img:nth-child(" + (this.activeIdx + 1) + ")")
  
  $item.addClass(dirClass);
  this.activeIdx += direction;
  var $nextItem = this.$el.find(".items img:nth-child(" + (this.activeIdx + 1) + ")")
  $nextItem.addClass('active'+ " " + oppositeClass);    
  
  setTimeout(function(){
 
   $nextItem.removeClass(oppositeClass)  
   this.$el.one("transitionend", function() {
     $item.removeClass(dirClass)
     $item.removeClass('active');
     this.transitioning = false;
   }.bind(this));
  }.bind(this), 0);
}

 
$.fn.carousel = function(){
  return this.each(function () {
    new $.Carousel(this);
  });
};
