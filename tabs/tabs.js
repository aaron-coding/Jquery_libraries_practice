$.Tabs = function (el) { 
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data("content-tabs"));
  this.$activeTab = this.$contentTabs.find('.active');
  this.$el.on("click", "a", this.clickTab.bind(this));
 };


 var transitionIn = function(){
   $(event.currentTarget).removeClass('transitioning');
   // debugger
   this.$activeTab.addClass('active transitioning');
   setTimeout(function () {
   this.$activeTab.removeClass('transitioning');
     
   }.bind(this), 0)
 }
 $.Tabs.prototype.clickTab = function (event) {
   this.$activeTab.on('transitionend', transitionIn.bind(this));
   event.preventDefault();
   this.$el.find('.active').removeClass('active');
   this.$activeTab.removeClass('active');
   this.$activeTab.addClass('transitioning');
   // this.$activeTab.addClass('active');
   this.$activeTab = this.$contentTabs.find($(event.currentTarget).attr("href"));
 }
 
 $.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};