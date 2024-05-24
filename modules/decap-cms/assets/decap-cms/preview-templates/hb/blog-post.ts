export default createClass({
  renderTaxonomy: function (item, index) {
    return h(
      'span',
      {
        key: index,
        className: 'hb-blog-post-taxonomy-meta'
      },
      h(
        'span',
        {
          className:
            'hb-blog-post-taxonomy hb-blog-post-taxonomy-category badge bg-secondary text-decoration-none fw-normal ms-1'
        },
        item
      )
    )
  },
  renderAuthor: function (name, index) {
    return h(
      'span',
      { key: index },
      h(
        'span',
        {
          className:
            'hb-blog-author-img border rounded-circle px-1 text-bg-secondary',
          title: name
        },
        name !== '' ? name.substr(0, 1).toUpperCase() : ''
      )
    )
  },
  renderImage: function (img, index) {
    if (img == null) {
      return
    }

    return h('img', {
      key: index,
      className: 'border',
      style: {
        height: '200px',
        minWidth: '60px'
      },
      src: this.props.getAsset(img).toString()
    })
  },
  render: function () {
    const authors = this.props.entry.getIn(['data', 'authors'])
    const categories = this.props.entry.getIn(['data', 'categories'])
    const images = this.props.entry.getIn(['data', 'images'])
    const series = this.props.entry.getIn(['data', 'series'])
    const tags = this.props.entry.getIn(['data', 'tags'])

    return h(
      'div',
      {
        className: 'hb-blog-post d-flex flex-column m-3'
      },
      h(
        'h1',
        {
          className: 'hb-blog-post-title'
        },
        this.props.entry.getIn(['data', 'title'])
      ),
      h(
        'div',
        {
          className: 'hb-blog-post-meta'
        },
        authors != null ? authors.map(this.renderAuthor) : null,
        h(
          'div',
          {
            className: 'hb-blog-post-date'
          },
          this.props.entry.getIn(['data', 'date']).toString()
        ),
        series != null ? series.map(this.renderTaxonomy) : null,
        categories != null ? categories.map(this.renderTaxonomy) : null,
        tags != null ? tags.map(this.renderTaxonomy) : null
      ),
      h(
        'div',
        {
          className: 'hb-blog-post-desc lead mb-0'
        },
        this.props.entry.getIn(['data', 'description'])
      ),
      images != null
        ? h(
          'div',
          {
            className: 'hb-blog-post-img d-flex gap-1'
          },
          images.map(this.renderImage)
        )
        : null,
      h(
        'div',
        {
          className: 'hb-blog-post-content'
        },
        this.props.widgetFor('body')
      )
    )
  }
})
