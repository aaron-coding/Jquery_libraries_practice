$.Thumbnails = function(el){
  this.$el = $(el);
  this.$images = this.$el.find(".gutter-images").children();
  this.$activeImage = this.$images.eq(0);
  this.$activeDiv = this.$el.find(".active");
  this.activate(this.$activeImage);
  this.gutterIdx = 0;
  this.$gutter = this.$el.find(".gutter-images")
  this.fillGutterImages();

  this.$el.on('click', 'img', this.clickCallback.bind(this));
  this.$el.on('click', 'a', this.clickNav.bind(this));

};

$.Thumbnails.prototype.fillGutterImages = function () {
  this.$gutter.empty();
  for (var i = this.gutterIdx; i < (this.gutterIdx + 5); i++) {
    this.$gutter.append(this.$images.eq(i));
  }
  this.$gutter.find('img').on('mouseenter', this.mouseEnter.bind(this));
  this.$gutter.find('img').on('mouseleave', this.mouseLeave.bind(this));
}

$.Thumbnails.prototype.activate = function($img){
  this.$activeDiv.html($img.clone());
};

$.Thumbnails.prototype.clickCallback = function (event) {
  this.$activeImage = $(event.currentTarget);
  this.activate(this.$activeImage);
}

$.Thumbnails.prototype.clickNav = function (event) {
  if ($(event.currentTarget).data("dir") === "right") {
      this.gutterIdx += 1;
  } else if ($(event.currentTarget).data("dir") === "left") {
      this.gutterIdx -= 1;    
  }
  this.fillGutterImages();
}

$.Thumbnails.prototype.mouseEnter = function (event) {
  this.activate($(event.currentTarget));
}

$.Thumbnails.prototype.mouseLeave = function (event) {
  this.activate(this.$activeImage);
}
 
 $.fn.thumbnails = function () {
  return this.each(function () {
    new $.Thumbnails(this);
  });
};