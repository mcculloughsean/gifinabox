// Generated by CoffeeScript 1.4.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  bs.views.Gif = (function(_super) {

    __extends(Gif, _super);

    function Gif() {
      return Gif.__super__.constructor.apply(this, arguments);
    }

    Gif.prototype.template = "<li>\n  <a href=\"{{ link }}\">\n    <img src=\"{{ url }}\" />\n  </a>\n</li>";

    Gif.prototype.toHtml = function() {
      return Mustache.render(this.template, {
        link: this.model.link(),
        url: this.model.get('url')
      });
    };

    return Gif;

  })(Backbone.View);

}).call(this);
