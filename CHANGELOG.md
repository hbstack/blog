# Changelog

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
