function taxonomy(item, index) {
  return h(
    "span",
    {
      key: index,
      className: "hb-blog-post-taxonomy-meta",
    },
    h(
      "span",
      {
        className:
          "hb-blog-post-taxonomy hb-blog-post-taxonomy-category badge bg-secondary text-decoration-none fw-normal ms-1",
      },
      item?.get("data") ?? "",
    ),
  );
}

export default createClass({
  render: function () {
    const props = this.props;

    return h(
      "div",
      {
        className: "hb-blog-post d-flex flex-column m-3",
      },
      h(
        "h1",
        {
          className: "hb-blog-post-title",
        },
        this.props.entry.getIn(["data", "title"]),
      ),
      h(
        "div",
        {
          className: "hb-blog-post-meta",
        },
        this.props.widgetsFor("authors").map(function (author, index) {
          if (!author || !author.get("data")) {
            return false;
          }

          return h(
            "span",
            { key: index },
            h(
              "span",
              {
                className:
                  "hb-blog-author-img border rounded-circle px-1 text-bg-secondary",
                title: author.get("data"),
              },
              author.get("data").substr(0, 1).toUpperCase(),
            ),
          );
        }),
        h(
          "div",
          {
            className: "hb-blog-post-date mx-1",
          },
          this.props.entry.getIn(["data", "date"]).toString(),
        ),
        this.props.widgetsFor("series").map(taxonomy),
        this.props.widgetsFor("categories").map(taxonomy),
        this.props.widgetsFor("tags").map(taxonomy),
      ),
      h(
        "div",
        {
          className: "hb-blog-post-desc lead mb-0",
        },
        this.props.entry.getIn(["data", "description"]),
      ),
      h(
        "div",
        {
          className: "hb-blog-post-img d-flex gap-1",
        },
        this.props.widgetsFor("images").map(function (img, index) {
          if (!img) {
            return;
          }

          return h("img", {
            key: index,
            className: "border",
            style: {
              height: "200px",
              minWidth: "60px",
            },
            src: props.getAsset(img.get("data")).toString(),
          });
        }),
      ),
      h(
        "div",
        {
          className: "hb-blog-post-content",
        },
        this.props.widgetFor("body"),
      ),
    );
  },
});
