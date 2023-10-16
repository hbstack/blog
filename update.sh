#!/bin/bash
modules=(
  breadcrumb content-panel disqus featured-image giscus heading-sign post-nav related-posts 
  sidebar/profile sidebar/posts sidebar/taxonomies staticman toc-scrollspy twikoo utterances
)
for module in ${modules[@]}; do
  echo "Updating modules for modules/$module"
  cd "modules/$module"
  hugo mod get -u
  hugo mod tidy
  cd -
done 
