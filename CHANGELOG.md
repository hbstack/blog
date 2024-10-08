# Changelog

## [0.38.0](https://github.com/hbstack/blog/compare/v0.37.4...v0.38.0) (2024-10-08)


### Features ✨

* add the `sidebar` page parameter ([#993](https://github.com/hbstack/blog/issues/993)) ([ca2a7bf](https://github.com/hbstack/blog/commit/ca2a7bf8da3212e82dfc14edcfa05a2efc761767)), closes [#992](https://github.com/hbstack/blog/issues/992)

## [0.37.4](https://github.com/hbstack/blog/compare/v0.37.3...v0.37.4) (2024-09-04)


### Bug Fixes 🐞

* adapt to Hugo v0.134.0 Summary changes ([760840c](https://github.com/hbstack/blog/commit/760840c60de77835654cf00d95184e5a762503ff))

## [0.37.3](https://github.com/hbstack/blog/compare/v0.37.2...v0.37.3) (2024-08-22)


### Bug Fixes 🐞

* compatibled with Dart Sass ([a11f60c](https://github.com/hbstack/blog/commit/a11f60c8f5e5bbfee4ca391ec335cd236cbf8343))

## [0.37.2](https://github.com/hbstack/blog/compare/v0.37.1...v0.37.2) (2024-08-17)


### Bug Fixes 🐞

* **rss:** correct copyright `{year}` placeholder parsing ([#947](https://github.com/hbstack/blog/issues/947)) ([7954fbc](https://github.com/hbstack/blog/commit/7954fbc04248524100ad061bfbc9cb8bfe268ec5))

## [0.37.1](https://github.com/hbstack/blog/compare/v0.37.0...v0.37.1) (2024-07-07)


### Bug Fixes 🐞

* show the read more button when specifying description ([5b23c75](https://github.com/hbstack/blog/commit/5b23c750b67f6f37a370b65a3867a4b65304e70a))

## [0.37.0](https://github.com/hbstack/blog/compare/v0.36.1...v0.37.0) (2024-06-21)


### Features ✨

* add cascade list style for posts list and terms list ([#915](https://github.com/hbstack/blog/issues/915)) ([993bae7](https://github.com/hbstack/blog/commit/993bae79375b235b339f04ad77ff9f585dda6e29)), closes [#914](https://github.com/hbstack/blog/issues/914)

## [0.36.1](https://github.com/hbstack/blog/compare/v0.36.0...v0.36.1) (2024-06-16)


### Bug Fixes 🐞

* hb-blog-post-meta context ([8e05210](https://github.com/hbstack/blog/commit/8e05210d2b2faeb89a096fd43c72fe0bc9d67fc0))

## [0.36.0](https://github.com/hbstack/blog/compare/v0.35.4...v0.36.0) (2024-06-16)


### Features ✨

* add the `meta.first_section` page parameter ([4e1d572](https://github.com/hbstack/blog/commit/4e1d572f8648b1e3dbef69b345e32671980fe0f4))
* add the hb-blog-post-meta hook ([#906](https://github.com/hbstack/blog/issues/906)) ([bc81c24](https://github.com/hbstack/blog/commit/bc81c242ce7f84c4286ef75b053e9896beee3099))

## [0.35.4](https://github.com/hbstack/blog/compare/v0.35.3...v0.35.4) (2024-06-16)


### Performance Improvements ⚡️

* cache carousel partial ([6c4a217](https://github.com/hbstack/blog/commit/6c4a217c98936a59c1d75f9eabac3ac996f7d69e))
* cache head-begin hook ([165eb48](https://github.com/hbstack/blog/commit/165eb48f62cb1838706a6a5ec36466090ee6caa3))

## [0.35.3](https://github.com/hbstack/blog/compare/v0.35.2...v0.35.3) (2024-06-15)


### Bug Fixes 🐞

* pagination title ([#895](https://github.com/hbstack/blog/issues/895)) ([40d13bf](https://github.com/hbstack/blog/commit/40d13bfabdfb25378641136b0f0e1d4133e33bab))

## [0.35.2](https://github.com/hbstack/blog/compare/v0.35.1...v0.35.2) (2024-06-15)


### Performance Improvements ⚡️

* cache first section for pages ([#889](https://github.com/hbstack/blog/issues/889)) ([c943604](https://github.com/hbstack/blog/commit/c9436046d3bf0c81fa5729cd36a006712a9ccee6))

## [0.35.1](https://github.com/hbstack/blog/compare/v0.35.0...v0.35.1) (2024-06-04)


### Performance Improvements ⚡️

* cache page summaries ([#873](https://github.com/hbstack/blog/issues/873)) ([eb6c629](https://github.com/hbstack/blog/commit/eb6c6292f75ff276d925aa94a98a564b3ce483e5))

## [0.35.0](https://github.com/hbstack/blog/compare/v0.34.0...v0.35.0) (2024-06-02)


### Features ✨

* add the hb.blog.list_style parameter, available option: `minimalist` ([#866](https://github.com/hbstack/blog/issues/866)) ([7c1912b](https://github.com/hbstack/blog/commit/7c1912b440024d411276c48a5117dc9dbf92c060))
* add the hb.terms.list_style parameter, available option: `minimalist` ([7c1912b](https://github.com/hbstack/blog/commit/7c1912b440024d411276c48a5117dc9dbf92c060))


### Performance Improvements ⚡️

* **terms:** avoid generating custom pages collection ([eee6fe9](https://github.com/hbstack/blog/commit/eee6fe9a41749294ea13b6fd53c10809bbf96ede))

## [0.34.0](https://github.com/hbstack/blog/compare/v0.33.0...v0.34.0) (2024-06-01)


### Features ✨

* add the `hb.terms.profile_metrics` parameter, hide the profile metrics if `false` ([d9e477c](https://github.com/hbstack/blog/commit/d9e477cdb366546e8db1a96cba6b9f2572d2c0d1))
* add the `hb.terms.profile` parameter, hide the profile if `false` ([d9e477c](https://github.com/hbstack/blog/commit/d9e477cdb366546e8db1a96cba6b9f2572d2c0d1))
* add the hb.blog.sidebar.max_width parameter, which default to 320px ([d9e477c](https://github.com/hbstack/blog/commit/d9e477cdb366546e8db1a96cba6b9f2572d2c0d1))


### Performance Improvements ⚡️

* cache hb/modules/blog/post/card-img partial ([d9e477c](https://github.com/hbstack/blog/commit/d9e477cdb366546e8db1a96cba6b9f2572d2c0d1))
* cache the sidebar taxonomies module ([d9e477c](https://github.com/hbstack/blog/commit/d9e477cdb366546e8db1a96cba6b9f2572d2c0d1))
* performance improvement ([#856](https://github.com/hbstack/blog/issues/856)) ([d9e477c](https://github.com/hbstack/blog/commit/d9e477cdb366546e8db1a96cba6b9f2572d2c0d1))
* **toc-scrollspy:** cache attributes partial ([d9e477c](https://github.com/hbstack/blog/commit/d9e477cdb366546e8db1a96cba6b9f2572d2c0d1))


### Styles 🎨

* **related-posts:** tweak vertical style ([d9e477c](https://github.com/hbstack/blog/commit/d9e477cdb366546e8db1a96cba6b9f2572d2c0d1))

## [0.33.0](https://github.com/hbstack/blog/compare/v0.32.2...v0.33.0) (2024-05-28)


### Features ✨

* **i18n:** add Vietnamese translations ([610010d](https://github.com/hbstack/blog/commit/610010d6c754fe06a6ccb7e9d55e978d7c0c1ab6))

## [0.32.2](https://github.com/hbstack/blog/compare/v0.32.1...v0.32.2) (2024-05-24)


### Bug Fixes 🐞

* invalid tag on terms layout ([f95e156](https://github.com/hbstack/blog/commit/f95e156601d95c420d055ba6748e832c4863ff71))

## [0.32.1](https://github.com/hbstack/blog/compare/v0.32.0...v0.32.1) (2024-05-14)


### Bug Fixes 🐞

* **i18n:** German translation ([94e0906](https://github.com/hbstack/blog/commit/94e090671d60efa621a405608f63ee16bd21c267))

## [0.32.0](https://github.com/hbstack/blog/compare/v0.31.1...v0.32.0) (2024-05-10)


### Features ✨

* add the hb.blog.post_read_more parameter ([#820](https://github.com/hbstack/blog/issues/820)) ([6019c64](https://github.com/hbstack/blog/commit/6019c6449cf0240a3eeb5f523912a48d99b37be5))


### Styles 🎨

* **archives:** minor tweak ([69f47c2](https://github.com/hbstack/blog/commit/69f47c2b65f2a6415f2706c2388cd85fa52b641b))

## [0.31.1](https://github.com/hbstack/blog/compare/v0.31.0...v0.31.1) (2024-05-02)


### Bug Fixes 🐞

* show the thumbnails all the time ([b23a00e](https://github.com/hbstack/blog/commit/b23a00e0822b5236d3e613daf173f9f7880c0243))

## [0.31.0](https://github.com/hbstack/blog/compare/v0.30.0...v0.31.0) (2024-05-01)


### Features ✨

* add the `hb.blog.post_thumbnail_height` parameter, which represents the height of thumbnail, default to `160px` ([#809](https://github.com/hbstack/blog/issues/809)) ([6f49989](https://github.com/hbstack/blog/commit/6f499894b9487944efafae0eac4c464677987444))
* add the `hb.blog.post_thumbnail_resize_height` parameter for changing the height for resizing thumbnails, default to `360`. ([6f49989](https://github.com/hbstack/blog/commit/6f499894b9487944efafae0eac4c464677987444))

## [0.30.0](https://github.com/hbstack/blog/compare/v0.29.1...v0.30.0) (2024-04-30)


### Features ✨

* accepts `socials` params in type `array` ([#803](https://github.com/hbstack/blog/issues/803)) ([cfdaf1d](https://github.com/hbstack/blog/commit/cfdaf1de9f22b7ddf602332ea1e15a6533599320)), closes [#801](https://github.com/hbstack/blog/issues/801)

## [0.29.1](https://github.com/hbstack/blog/compare/v0.29.0...v0.29.1) (2024-04-27)


### Bug Fixes 🐞

* add unique class name for term socials and metrics ([fc7293e](https://github.com/hbstack/blog/commit/fc7293eeed437b8a30bd57c8740b6a13aa3ba626))
* wrong type (boolean) of social icon color for authors ([fc7293e](https://github.com/hbstack/blog/commit/fc7293eeed437b8a30bd57c8740b6a13aa3ba626))


### Styles 🎨

* change margin of author's metrics ([aa2a65f](https://github.com/hbstack/blog/commit/aa2a65f89c8e5fd0134cc4f1969dbe80827af038))

## [0.29.0](https://github.com/hbstack/blog/compare/v0.28.0...v0.29.0) (2024-04-23)


### Features ✨

* **i18n:** add German translations ([#780](https://github.com/hbstack/blog/issues/780)) ([2daf645](https://github.com/hbstack/blog/commit/2daf6453f5a8f4f88f1a9a4aa261b25a53b01737))

## [0.28.0](https://github.com/hbstack/blog/compare/v0.27.2...v0.28.0) (2024-04-23)


### Features ✨

* add the post_thumbnail_position parameter ([#778](https://github.com/hbstack/blog/issues/778)) ([2bef119](https://github.com/hbstack/blog/commit/2bef1191aa2ad574de76c9deeb537ed0cb64dee4))


### Bug Fixes 🐞

* broken styles on homepage ([6ee1fd8](https://github.com/hbstack/blog/commit/6ee1fd8d40cf11d59301a0fc95553a3e20b42ff0))

## [0.27.2](https://github.com/hbstack/blog/compare/v0.27.1...v0.27.2) (2024-04-15)


### Bug Fixes 🐞

* safe check if the meta parameter is boolean ([#767](https://github.com/hbstack/blog/issues/767)) ([4472db8](https://github.com/hbstack/blog/commit/4472db8be8497f3d0cfe400e4f84dcfbe0d1a729))

## [0.27.1](https://github.com/hbstack/blog/compare/v0.27.0...v0.27.1) (2024-04-15)


### Bug Fixes 🐞

* list should respect the `meta*` page params ([#766](https://github.com/hbstack/blog/issues/766)) ([b0402fc](https://github.com/hbstack/blog/commit/b0402fc41380b4f9be0488370e805cabb315d54a))
* navigate to external post directly when clicking the featured image ([#764](https://github.com/hbstack/blog/issues/764)) ([f68544a](https://github.com/hbstack/blog/commit/f68544aa49593ec60c16c47e266f4fb5ca688f54))

## [0.27.0](https://github.com/hbstack/blog/compare/v0.26.3...v0.27.0) (2024-04-15)


### Features ✨

* add the external_url page parameter ([#761](https://github.com/hbstack/blog/issues/761)) ([7234642](https://github.com/hbstack/blog/commit/723464298322a070851bfdf1668a3d57b9067b10))

## [0.26.3](https://github.com/hbstack/blog/compare/v0.26.2...v0.26.3) (2024-04-09)


### Styles 🎨

* minor changes ([09161b4](https://github.com/hbstack/blog/commit/09161b476c4116987d04907cf7e7532f503120fa))

## [0.26.2](https://github.com/hbstack/blog/compare/v0.26.1...v0.26.2) (2024-04-03)


### Styles 🎨

* fix modules aligning ([a3ce53c](https://github.com/hbstack/blog/commit/a3ce53c2dd3171f513119286ef59e3635bd4c33a))

## [0.26.1](https://github.com/hbstack/blog/compare/v0.26.0...v0.26.1) (2024-04-02)


### Styles 🎨

* change the ToC toggle color to secondary ([2a4cc4c](https://github.com/hbstack/blog/commit/2a4cc4c664bb8d70bda6e96e47cf8fb7d50b6db6))
* remove margin-bottom from last modules to align components horizontally ([255d4a3](https://github.com/hbstack/blog/commit/255d4a3912b63e67cf96cb28c2190868458b6e3b))
* **toc:** set padding-left as pe-lg-2 ([fdf1475](https://github.com/hbstack/blog/commit/fdf1475fc5cb6387b52e8f63be4986ca8e83176c))

## [0.26.0](https://github.com/hbstack/blog/compare/v0.25.2...v0.26.0) (2024-03-22)


### Features ✨

* add the meta* page parameters ([#725](https://github.com/hbstack/blog/issues/725)) ([55e5150](https://github.com/hbstack/blog/commit/55e51506c09147f424e10b0e66a39aa7f9ae051f))

## [0.25.2](https://github.com/hbstack/blog/compare/v0.25.1...v0.25.2) (2024-03-06)


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v6.2.0 ([f3b9f67](https://github.com/hbstack/blog/commit/f3b9f67e18f84a2fcd4f936ca1f36bd1d760174f))
* **deps:** update dependency stylelint-scss to v6.2.1 ([c2ba3a4](https://github.com/hbstack/blog/commit/c2ba3a4ea6f2dba587efa1a1bee6fad2ad32737e))
* set default paginate ([d85a2cb](https://github.com/hbstack/blog/commit/d85a2cb021c1cdd7ba0bf45b5fde8a26963a0c57))

## [0.25.1](https://github.com/hbstack/blog/compare/v0.25.0...v0.25.1) (2024-02-17)


### Styles 🎨

* change sidebar and ToC scrollbar width as thin ([9bb66f9](https://github.com/hbstack/blog/commit/9bb66f9b925e45340c6f20ec876f59bdaea16268))
* highlight sidebar and ToC scrollbar on hover ([#660](https://github.com/hbstack/blog/issues/660)) ([9bb66f9](https://github.com/hbstack/blog/commit/9bb66f9b925e45340c6f20ec876f59bdaea16268))

## [0.25.0](https://github.com/hbstack/blog/compare/v0.24.3...v0.25.0) (2024-02-11)


### Features ✨

* add the toc page parameter, when false then hide the ToC ([#646](https://github.com/hbstack/blog/issues/646)) ([c791065](https://github.com/hbstack/blog/commit/c791065e50eada7e52ac533da73ea24055c22159))

## [0.24.3](https://github.com/hbstack/blog/compare/v0.24.2...v0.24.3) (2024-01-24)


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v6.1.0 ([2d21351](https://github.com/hbstack/blog/commit/2d213514745e990ab6fd5c291d45e0540b267aff))

## [0.24.2](https://github.com/hbstack/blog/compare/v0.24.1...v0.24.2) (2024-01-05)


### Bug Fixes 🐞

* correct overflow styles ([45160ce](https://github.com/hbstack/blog/commit/45160ceda3e2db3d74b4836ca09dc23ab8bbd19b))

## [0.24.1](https://github.com/hbstack/blog/compare/v0.24.0...v0.24.1) (2023-12-22)


### Bug Fixes 🐞

* remove the hb-main attributes ([#574](https://github.com/hbstack/blog/issues/574)) ([eea1de9](https://github.com/hbstack/blog/commit/eea1de9a717ea57bb228336f605bc39062049a1e))

## [0.24.0](https://github.com/hbstack/blog/compare/v0.23.0...v0.24.0) (2023-12-19)


### Features ✨

* add the hb-blog-post-content-afterbegin and hb-blog-post-content-beforeend hooks ([#565](https://github.com/hbstack/blog/issues/565)) ([2413243](https://github.com/hbstack/blog/commit/2413243a55d29272613eb18726df093f42b3c684))

## [0.23.0](https://github.com/hbstack/blog/compare/v0.22.8...v0.23.0) (2023-12-17)


### Features ✨

* add the sidebar.position parameter ([#545](https://github.com/hbstack/blog/issues/545)) ([2639b86](https://github.com/hbstack/blog/commit/2639b8619d64dfe01aefdf76f71679fa2292bd17))
* add the sidebar.sticky parameter, to disable sticky behaviour by setting it to false ([#549](https://github.com/hbstack/blog/issues/549)) ([23aaaa1](https://github.com/hbstack/blog/commit/23aaaa19b891cb277c0bf77617f9011e524bd7ec))
* add the sidebar.width parameter, which accepts percentage value, such as .3 (equals to 30%), 40% ([#548](https://github.com/hbstack/blog/issues/548)) ([7ba634a](https://github.com/hbstack/blog/commit/7ba634aeb091b930091e9bac6a9b1105da37c664))
* add the site.Params.hb.blog.list_cols_md and site.Params.hb.blog.list_cols_lg parameter to specify cols for md and lg breakpoints respectively ([#554](https://github.com/hbstack/blog/issues/554)) ([f5be4a7](https://github.com/hbstack/blog/commit/f5be4a7a16687708c910fbfce79c6b8de315383c))
* add the toc.position parameter ([#547](https://github.com/hbstack/blog/issues/547)) ([68b9197](https://github.com/hbstack/blog/commit/68b919743e87ff6fbca61997a61578672373d0c6))
* allow hiding carousel on homepage by setting hb.blog.home.featured_posts as 0 ([aa81cc0](https://github.com/hbstack/blog/commit/aa81cc005d1f96e09dca437553b509cdaabd0973))
* allow specifying title other than page title for taxonomy ([#560](https://github.com/hbstack/blog/issues/560)) ([d34bd42](https://github.com/hbstack/blog/commit/d34bd42e89d6e9f4157bb2a631f982deab346c9d))
* **sidebar/taxonomies:** allow sorting, disabling, limiting each taxonomy ([#559](https://github.com/hbstack/blog/issues/559)) ([8ae81d4](https://github.com/hbstack/blog/commit/8ae81d47375b91409c7aa371f854a4111555d8f9))


### Bug Fixes 🐞

* correct limit and count options ([#557](https://github.com/hbstack/blog/issues/557)) ([f2599ed](https://github.com/hbstack/blog/commit/f2599edda9bb2a2bcd1fe6a668c044913f5e8354))


### Styles 🎨

* specify class name for taxonomy titles and count for styling ([699420b](https://github.com/hbstack/blog/commit/699420b513b5cc85e9a0ae8a78662ddae6ae8d3e))
* specify extra class name for taxonomy terms ([#556](https://github.com/hbstack/blog/issues/556)) ([dc947ed](https://github.com/hbstack/blog/commit/dc947ed737cebad0013f9817e3e4a9d2dbbb8e16))

## [0.22.8](https://github.com/hbstack/blog/compare/v0.22.7...v0.22.8) (2023-12-13)


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v6 ([8da2a2d](https://github.com/hbstack/blog/commit/8da2a2dfd6a8e997254e82a54ae184bf6ef74eb7))
* **i18n:** update pt-br.toml ([#543](https://github.com/hbstack/blog/issues/543)) ([64db5ff](https://github.com/hbstack/blog/commit/64db5ff6014642ca4585fd980ea45e4371a994c6))

## [0.22.7](https://github.com/hbstack/blog/compare/v0.22.6...v0.22.7) (2023-12-05)


### Bug Fixes 🐞

* **i18n:** update ms.toml ([#524](https://github.com/hbstack/blog/issues/524)) ([e251893](https://github.com/hbstack/blog/commit/e251893aaaef02ab00fb8f02a53f246c043dd3aa))

## [0.22.6](https://github.com/hbstack/blog/compare/v0.22.5...v0.22.6) (2023-12-03)


### Styles 🎨

* improve SEO of read more buttons ([e74aae4](https://github.com/hbstack/blog/commit/e74aae4ddd301582b1e707e31aac22a93250fa94))

## [0.22.5](https://github.com/hbstack/blog/compare/v0.22.4...v0.22.5) (2023-12-03)


### Bug Fixes 🐞

* **i18n:** translate metrics UI items ([#509](https://github.com/hbstack/blog/issues/509)) ([c5cb9a2](https://github.com/hbstack/blog/commit/c5cb9a2790ad4784eb01357ca1595cceccc933fb))

## [0.22.4](https://github.com/hbstack/blog/compare/v0.22.3...v0.22.4) (2023-12-03)


### Styles 🎨

* prepare for theming ([#507](https://github.com/hbstack/blog/issues/507)) ([409fc08](https://github.com/hbstack/blog/commit/409fc08a0422d3e04e061312bbcb4bba03aae29c))

## [0.22.3](https://github.com/hbstack/blog/compare/v0.22.2...v0.22.3) (2023-11-30)


### Bug Fixes 🐞

* **taxonomies:** listing and counting regular pages only ([#498](https://github.com/hbstack/blog/issues/498)) ([635dc2d](https://github.com/hbstack/blog/commit/635dc2dbf0e9831e92ca08f3c18dce8944b69e46))

## [0.22.2](https://github.com/hbstack/blog/compare/v0.22.1...v0.22.2) (2023-11-14)


### Bug Fixes 🐞

* correct the default thumbnail in the case of baseURL contains subpaths ([#484](https://github.com/hbstack/blog/issues/484)) ([52e6a74](https://github.com/hbstack/blog/commit/52e6a747c1c5693b8f7ed36b343e35e17d4418bf))

## [0.22.1](https://github.com/hbstack/blog/compare/v0.22.0...v0.22.1) (2023-11-10)


### Bug Fixes 🐞

* **i18n:** update PT-BR translation file ([#471](https://github.com/hbstack/blog/issues/471)) ([6519c83](https://github.com/hbstack/blog/commit/6519c8316107192288d606ab9fd282952d6662aa))

## [0.22.0](https://github.com/hbstack/blog/compare/v0.21.0...v0.22.0) (2023-11-10)


### Features ✨

* **i18n:** create pt-br.toml ([#469](https://github.com/hbstack/blog/issues/469)) ([2380172](https://github.com/hbstack/blog/commit/2380172d8715ded983c60bb12c7263526bd0708c))


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v5.3.1 ([b20c478](https://github.com/hbstack/blog/commit/b20c478c4646b51edf9379447630b47f23c13da7))

## [0.21.0](https://github.com/hbstack/blog/compare/v0.20.0...v0.21.0) (2023-11-02)


### Features ✨

* **i18n:** add FR translations ([#456](https://github.com/hbstack/blog/issues/456)) ([6eff88e](https://github.com/hbstack/blog/commit/6eff88ebb05594c76cc11a522795f25aabb29822))
* **i18n:** add Spanish translations ([#455](https://github.com/hbstack/blog/issues/455)) ([c751df0](https://github.com/hbstack/blog/commit/c751df0b18c981c4a3554866fc18e3ab2cac911d))


### Styles 🎨

* change the hb.terms.paginate as 12 by default ([4a07c96](https://github.com/hbstack/blog/commit/4a07c968f5bc4003363fca587cca444daa58bd39))

## [0.20.0](https://github.com/hbstack/blog/compare/v0.19.2...v0.20.0) (2023-11-01)


### Features ✨

* **i18n:** add Russian translations ([#442](https://github.com/hbstack/blog/issues/442)) ([db1fd6b](https://github.com/hbstack/blog/commit/db1fd6b0b91301b304194ecc507884c0f11f2683))

## [0.19.2](https://github.com/hbstack/blog/compare/v0.19.1...v0.19.2) (2023-11-01)


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v5.3.0 ([37f1372](https://github.com/hbstack/blog/commit/37f137203f71b07b9cd8aa4dc046436a7c4213f0))


### Styles 🎨

* show more posts per row on term list pages when there is no sidebar ([#441](https://github.com/hbstack/blog/issues/441)) ([7459cee](https://github.com/hbstack/blog/commit/7459cee80323043754e11ce7b985213473c2709d))

## [0.19.1](https://github.com/hbstack/blog/compare/v0.19.0...v0.19.1) (2023-10-23)


### Continuous Integration

* **deps:** update module github.com/hbstack/base to v0.3.0 ([cb2f748](https://github.com/hbstack/blog/commit/cb2f748d74c1354a3aedc83983b40bf73d410a96))
* **deps:** update module github.com/hbstack/pagination to v0.3.0 ([aa53a00](https://github.com/hbstack/blog/commit/aa53a004cf02b47ad78ab2d72f7a2ac4778cf289))
* **deps:** update module github.com/hbstack/socials to v0.7.0 ([6833a0c](https://github.com/hbstack/blog/commit/6833a0c0bd359f22c1d7b0371184b4f004e50aba))
* **deps:** update module github.com/hugomods/simple-icons to v9.19.0+incompatible ([1d559bb](https://github.com/hbstack/blog/commit/1d559bba79dcbe75fa1a19e170ee0aa3920d0d4c))


### Bug Fixes 🐞

* **archives:** correct the year and month parsing when defaultContentLanguageInSubdir is false ([#428](https://github.com/hbstack/blog/issues/428)) ([9d0027a](https://github.com/hbstack/blog/commit/9d0027ac9d72d330a2361fbf3847e89c4f8002b5)), closes [#427](https://github.com/hbstack/blog/issues/427)

## [0.19.0](https://github.com/hbstack/blog/compare/v0.18.1...v0.19.0) (2023-10-21)


### Features ✨

* **i18n:** add ms.toml ([#415](https://github.com/hbstack/blog/issues/415)) ([6edea4a](https://github.com/hbstack/blog/commit/6edea4af0ab1435682d9780766510da92e31620f))

## [0.18.1](https://github.com/hbstack/blog/compare/v0.18.0...v0.18.1) (2023-10-19)


### Bug Fixes 🐞

* build of home layout ([42ca3ce](https://github.com/hbstack/blog/commit/42ca3ce14faa0b96e53033c78c68e619e3ca2086))

## [0.18.0](https://github.com/hbstack/blog/compare/v0.17.0...v0.18.0) (2023-10-16)


### Continuous Integration

* **deps:** update module github.com/hbstack/pagination to v0.2.1 ([8f3ee13](https://github.com/hbstack/blog/commit/8f3ee1388336475ed5fa92e3edb2541534e5d42a))


### Features ✨

* add the home.pinned_posts_position parameter ([48c709e](https://github.com/hbstack/blog/commit/48c709ee592e0e10cce207c288bf82212b58acd3))

## [0.17.0](https://github.com/hbstack/blog/compare/v0.16.1...v0.17.0) (2023-10-16)


### Continuous Integration

* **deps:** update module github.com/hugomods/simple-icons to v9.18.0+incompatible ([2e235ed](https://github.com/hbstack/blog/commit/2e235ed73878d9a57bda2731eb876d544cddc45c))


### Features ✨

* prepare for theming ([fd8d330](https://github.com/hbstack/blog/commit/fd8d3302218dec96344cb13466de270e6a71dc6c))


### Bug Fixes 🐞

* correct broken read more links ([#401](https://github.com/hbstack/blog/issues/401)) ([16a9605](https://github.com/hbstack/blog/commit/16a9605e8a43a3ec213dafd487fd583fc060c888))


### Styles 🎨

* hide the read more button from pinned posts on homepage ([56c5945](https://github.com/hbstack/blog/commit/56c59453706ba9aba1ce377eb78bdfaac56aa8da))
* **sidebar:** change the scrollbar width as 2px ([69bea11](https://github.com/hbstack/blog/commit/69bea111a80889e32f391525c49394a820223a86))

## [0.16.1](https://github.com/hbstack/blog/compare/v0.16.0...v0.16.1) (2023-10-09)


### Continuous Integration

* **deps:** update module github.com/hugomods/simple-icons to v9.17.0+incompatible ([3ffed8d](https://github.com/hbstack/blog/commit/3ffed8d3d59a9a302e81c88e0efbad73834a674c))


### Bug Fixes 🐞

* **i18n:** translate read_more in Korean ([#389](https://github.com/hbstack/blog/issues/389)) ([3052c47](https://github.com/hbstack/blog/commit/3052c4749ccef884cddcf4ffcd1033c5ccad2a2e))
* replace the summaries truncated indicator (dots) with the read more button ([#388](https://github.com/hbstack/blog/issues/388)) ([7cc02cc](https://github.com/hbstack/blog/commit/7cc02cc03fcfeb73a26d0fd7fb55872694cea3cc)), closes [#387](https://github.com/hbstack/blog/issues/387)


### Styles 🎨

* minor changes ([36aecd3](https://github.com/hbstack/blog/commit/36aecd3e76b78e8570eeee28c5f26e06a9856790))
* minor changes of post card ([ec768a7](https://github.com/hbstack/blog/commit/ec768a7b9d9ad1f444683e48ca048175d9c6d57a))
* post cards take equal height ([ef8c026](https://github.com/hbstack/blog/commit/ef8c026252d1c37f2bab0921a8385a54eb2447a5))

## [0.16.0](https://github.com/hbstack/blog/compare/v0.15.9...v0.16.0) (2023-10-08)


### Continuous Integration

* **deps:** update module github.com/hugomods/images to v0.8.0 ([ab1d818](https://github.com/hbstack/blog/commit/ab1d818fa9b17677a1f9b3e1f33485a05c461045))


### Features ✨

* add the profile sidebar module ([#379](https://github.com/hbstack/blog/issues/379)) ([db3f67c](https://github.com/hbstack/blog/commit/db3f67c1b43ff5e70ae0b7c2cc97c13c5595492a))

## [0.15.9](https://github.com/hbstack/blog/compare/v0.15.8...v0.15.9) (2023-10-05)


### Continuous Integration

* **deps:** update module github.com/hbstack/socials to v0.5.1 ([695f4b2](https://github.com/hbstack/blog/commit/695f4b2179c31d212f298b52dcfbfca052013c49))
* **deps:** update module github.com/hbstack/socials to v0.6.0 ([74be591](https://github.com/hbstack/blog/commit/74be5913e07715386b6d97698bd821f1b0ea3b39))
* **deps:** update module github.com/hugomods/icons/vendors/bootstrap to v0.5.1 ([8233f7b](https://github.com/hbstack/blog/commit/8233f7b2740abe584dc16dcc09015212d9c535db))
* **deps:** update module github.com/hugomods/simple-icons to v9.14.0+incompatible ([5a761c1](https://github.com/hbstack/blog/commit/5a761c16de3beb2daef3d4aa2d8b94a5a3331e21))
* **deps:** update module github.com/hugomods/simple-icons to v9.15.0+incompatible ([097ded8](https://github.com/hbstack/blog/commit/097ded8e198dfc403cc8d737ce9f68d76a46df60))
* **deps:** update module github.com/hugomods/simple-icons to v9.16.0+incompatible ([77f7771](https://github.com/hbstack/blog/commit/77f77710177c001a9a5e4a500cc5cf6b1d4c81c9))
* **deps:** update module github.com/hugomods/simple-icons to v9.16.1+incompatible ([d7e9f90](https://github.com/hbstack/blog/commit/d7e9f9036dbb48686e6d5ee3a6d1a3d6c11fe626))


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v5.2.0 ([0213edb](https://github.com/hbstack/blog/commit/0213edbfc83877b7047ade5bf1b6c9047c09f143))
* **deps:** update dependency stylelint-scss to v5.2.1 ([b4560d9](https://github.com/hbstack/blog/commit/b4560d992fc27d403d724a280bb2f4b5c44cbea4))


### Styles 🎨

* show the ... indicates that the summaries were truncated ([#374](https://github.com/hbstack/blog/issues/374)) ([48bf0e6](https://github.com/hbstack/blog/commit/48bf0e6c0cb8cce18e68c17cd391645f49928d6a))

## [0.15.8](https://github.com/hbstack/blog/compare/v0.15.7...v0.15.8) (2023-09-07)


### Continuous Integration

* **deps:** update module github.com/hbstack/socials to v0.4.0 ([0b5b884](https://github.com/hbstack/blog/commit/0b5b884d0037a98acba0c359ca924a50a7f4dfb2))
* **deps:** update module github.com/hugomods/simple-icons to v9.13.0+incompatible ([7447a30](https://github.com/hbstack/blog/commit/7447a30fef24411112a80e7f9c4adb3b68f0abe5))

## [0.15.7](https://github.com/hbstack/blog/compare/v0.15.6...v0.15.7) (2023-09-02)


### Continuous Integration

* **deps:** update module github.com/hbstack/hb to v0.7.1 ([618083e](https://github.com/hbstack/blog/commit/618083eb257fa59f587f23b878c4021a448f4a86))
* **deps:** update module github.com/hugomods/simple-icons to v9.12.0+incompatible ([483d15b](https://github.com/hbstack/blog/commit/483d15b55c344efc13838ec73d5df0331f06d411))


### Styles 🎨

* change the margin-bottom as mb-2 of lead description ([4825570](https://github.com/hbstack/blog/commit/4825570ea627930cad68919cecbcb0a1ad27f60f))

## [0.15.6](https://github.com/hbstack/blog/compare/v0.15.5...v0.15.6) (2023-08-26)


### Styles 🎨

* adjust the sidebar width ([46da409](https://github.com/hbstack/blog/commit/46da40963db244ebbe7434b7145035a96973456e))
* increase the gap between of content and ToC ([3bcfb29](https://github.com/hbstack/blog/commit/3bcfb2959c487ab223235c5031021a00164c7c12))

## [0.15.5](https://github.com/hbstack/blog/compare/v0.15.4...v0.15.5) (2023-08-25)


### Bug Fixes 🐞

* correct the height and top of ToC ([87092fc](https://github.com/hbstack/blog/commit/87092fc383d455053e9ad7cb7016ba2e14cb6a27))
* correct the height of sidebar ([4c0a143](https://github.com/hbstack/blog/commit/4c0a1430bd295a2e6bb61685eadd9d555219c24c))

## [0.15.4](https://github.com/hbstack/blog/compare/v0.15.3...v0.15.4) (2023-08-25)


### Continuous Integration

* **deps:** update module github.com/hbstack/base to v0.2.1 ([f68b02e](https://github.com/hbstack/blog/commit/f68b02e96829974624e21b16c05714e7ef13dd82))
* **deps:** update module github.com/hbstack/carousel to v0.2.3 ([e5962d3](https://github.com/hbstack/blog/commit/e5962d358d46b31607a435be99c5df3b6fa04cde))
* **deps:** update module github.com/hbstack/hb to v0.5.2 ([b2253ac](https://github.com/hbstack/blog/commit/b2253ac6459f618385ca8208214c98e8c531b9bb))
* **deps:** update module github.com/hbstack/hb to v0.6.0 ([f672d04](https://github.com/hbstack/blog/commit/f672d04849fe06930b4b53385015635013518d93))
* **deps:** update module github.com/hbstack/hb to v0.7.0 ([3730c01](https://github.com/hbstack/blog/commit/3730c01ce65071f0cfed95cba1d00e9cc224d7a2))
* **deps:** update module github.com/hbstack/socials to v0.3.0 ([8666792](https://github.com/hbstack/blog/commit/866679211957df24434c9002702b4fba989553c5))
* **deps:** update module github.com/hugomods/simple-icons to v9.11.0+incompatible ([affc2ae](https://github.com/hbstack/blog/commit/affc2ae1ea3e0b57f88c9c624cdebba8c0f07051))
* **deps:** update module github.com/hugomods/simple-icons to v9.7.0+incompatible ([b13c416](https://github.com/hbstack/blog/commit/b13c416613abd7e14c5e3830d3ab1ae303f56cc0))
* **deps:** update module github.com/hugomods/simple-icons to v9.8.0+incompatible ([b1c4d39](https://github.com/hbstack/blog/commit/b1c4d393fd87cf995d3e55e2c02c1fea6336d9c6))
* **deps:** update module github.com/hugomods/simple-icons to v9.9.0+incompatible ([8cb0ef1](https://github.com/hbstack/blog/commit/8cb0ef1c711d3f5caf968c6f71ff585e489cefe6))


### Bug Fixes 🐞

* correct the top property of sidebar ([#318](https://github.com/hbstack/blog/issues/318)) ([9445d0c](https://github.com/hbstack/blog/commit/9445d0cfc6959990175f74af8168f30017f39ce1))
* **deps:** update dependency stylelint-scss to v5.1.0 ([fe0310d](https://github.com/hbstack/blog/commit/fe0310dd033b36a212592a9918c851a679dabfd4))

## [0.15.1](https://github.com/hbstack/blog/compare/v0.15.0...v0.15.1) (2023-07-13)


### Continuous Integration

* **deps:** update module github.com/hugomods/images to v0.6.0 ([7385ceb](https://github.com/hbstack/blog/commit/7385ceb3446533a72de8fdc27b36caaadaf3af73))
* **deps:** update module github.com/hugomods/images to v0.7.0 ([e84cd88](https://github.com/hbstack/blog/commit/e84cd88533a7577899985672a62e69666a0e2362))
* **deps:** update module github.com/hugomods/simple-icons to v9.3.0+incompatible ([d4f86a8](https://github.com/hbstack/blog/commit/d4f86a862658a1e4ee8ecff00c4295f65aea36ea))
* **deps:** update module github.com/hugomods/simple-icons to v9.4.0+incompatible ([d501123](https://github.com/hbstack/blog/commit/d501123e3726e778c206b6d0f0d4a89834c4612d))
* **deps:** update module github.com/hugomods/simple-icons to v9.5.0+incompatible ([e605858](https://github.com/hbstack/blog/commit/e605858c7324e211f9443370f22d8bc8d41e8a25))


### Styles 🎨

* show the description of post if set ([#238](https://github.com/hbstack/blog/issues/238)) ([a5ba66f](https://github.com/hbstack/blog/commit/a5ba66fd5f5f0a2bff4b50b3b425fcbf30f4e729))


### Bug Fixes 🐞

* use the descriptions as summaries on list if set ([#240](https://github.com/hbstack/blog/issues/240)) ([e69c42e](https://github.com/hbstack/blog/commit/e69c42e45d0560cc5afd79b5d861f03b9529810b))

## [0.15.0](https://github.com/hbstack/blog/compare/v0.14.0...v0.15.0) (2023-06-19)


### Features ✨

* add the sidebar posts module ([f659bed](https://github.com/hbstack/blog/commit/f659bed23a76fe99c3763615f91935f26d84f2ab))
* add the sidebar taxonomies module ([a3d1876](https://github.com/hbstack/blog/commit/a3d1876d7940f5849d2c1c1e6e1ebdbecc48419a))


### Bug Fixes 🐞

* sticky ToC not working when enabling sidebar modules ([#205](https://github.com/hbstack/blog/issues/205)) ([a459225](https://github.com/hbstack/blog/commit/a459225e7f84755694adb45f13135fb5527c6a5d))

## [0.14.0](https://github.com/hbstack/blog/compare/v0.13.0...v0.14.0) (2023-06-19)


### Continuous Integration

* **deps:** update module github.com/hugomods/simple-icons to v9.2.0+incompatible ([2e31509](https://github.com/hbstack/blog/commit/2e31509599549ccfdefb734bcd72c383da2d9ac9))


### Features ✨

* add the full_width parameter to take full width ([1745c99](https://github.com/hbstack/blog/commit/1745c99ab8bb525f8ead4431016f9907f974ec47))
* add the optional sidebar implementation ([8df5d79](https://github.com/hbstack/blog/commit/8df5d79f73f7b9babc4caf73137d3e80bc5ceb2c))

## [0.13.0](https://github.com/hbstack/blog/compare/v0.12.1...v0.13.0) (2023-06-14)


### Continuous Integration

* **deps:** update module github.com/hugomods/simple-icons to v9.1.0+incompatible ([e36d4fc](https://github.com/hbstack/blog/commit/e36d4fcd2c3bc0ca6d48ef843fcfe04f4ed0ce22))


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v5.0.1 ([4425e76](https://github.com/hbstack/blog/commit/4425e763a39a10f6138c149b5d95ca5b5571dddf))


### Features ✨

* add the socials._color parameter for author pages to disable icon colors ([21b883f](https://github.com/hbstack/blog/commit/21b883fde99720de9ecf746f9b64434748656016))

## [0.12.1](https://github.com/hbstack/blog/compare/v0.12.0...v0.12.1) (2023-06-10)


### Styles 🎨

* fixed [#153](https://github.com/hbstack/blog/issues/153) ([597c585](https://github.com/hbstack/blog/commit/597c585239493f3b9045f88ad5ac214cfdb6ba18))


### Continuous Integration

* configure release please ([3928d53](https://github.com/hbstack/blog/commit/3928d5377086a7c5ad729128d4d08e106c275396))

## [0.12.0](https://github.com/hbstack/blog/compare/v0.11.0...v0.12.0) (2023-06-01)


### Features

* add the hb.blog.home.taxonomies parameter to show/hide the taxonomies navigation on homepage ([fda532d](https://github.com/hbstack/blog/commit/fda532d2e88e4ea708b3e506e12845d94935caa9))
* add the staticman module ([b333469](https://github.com/hbstack/blog/commit/b33346962366998cf95151218f0445c89f1381e4))

## [0.11.0](https://github.com/hbstack/blog/compare/v0.10.1...v0.11.0) (2023-05-14)


### Features

* **i18n:** create ko.toml ([1a5562d](https://github.com/hbstack/blog/commit/1a5562d995f9b1d99368276e646426edc53fa42d))

## [0.10.1](https://github.com/hbstack/blog/compare/v0.10.0...v0.10.1) (2023-05-13)


### Bug Fixes

* **deps:** update dependency stylelint-scss to v5 ([b0297a1](https://github.com/hbstack/blog/commit/b0297a120668d0cc2e7d24979ab3ea1684b182a0))
