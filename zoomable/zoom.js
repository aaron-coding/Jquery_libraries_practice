$.Zoom = function (el){
  this.$el = $(el);
  this.$el.append("<div class='focus-box'>");
  this.$focusBox = this.$el.find('.focus-box');
  this.$el.find('img').on("mousemove", this.renderFocusBox.bind(this));
  
};

$.Zoom.prototype.renderFocusBox = function (event) {
  this.$focusBox.css("left", 100);
  this.$focusBox.css("top", 100);
}

 $.fn.zoom = function () {
  return this.each(function () {
    new $.Zoom(this);
  });
};

