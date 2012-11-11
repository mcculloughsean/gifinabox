class bs.collections.Gifs extends Backbone.Collection

  model: bs.models.Gif

  initialize: (models, options) ->
    @on 'reset', @render

    @reset(models)

  render: =>
    new bs.views.Gifs({ models: @models, el: "#gifs" })