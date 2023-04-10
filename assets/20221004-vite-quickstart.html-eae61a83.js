const e=JSON.parse('{"key":"v-5c489b13","path":"/md/java/vue3/20221004-vite-quickstart.html","title":"搭建 Vue + Vite 入门项目","lang":"zh-CN","frontmatter":{"title":"搭建 Vue + Vite 入门项目","isOriginal":true,"order":15,"icon":"vue","category":["Vue3 笔记"],"date":"2022-10-04T00:00:00.000Z","description":"作者：benjamin 博客：studio 吾生也有涯，而知也无涯。 前言 虽然市面上有很多的打包工具，例如 webpack、Rollup 以及 Parcel 等。毫无疑问，通过使用这些工具，在很大程度上改善了前端开发者的游戏体验。 但随着业务变得越来越复杂，我们不得构建比之前更大型的应用。此时，所需要处理的代码量也越来越大。这时候，上面提到的打包工具就开始遇到性能瓶颈，我们可能需要很长的时间才能启动开发服务器，这样一来，开发效率就变得越来越低。 针对这一现状，大佬们又构建了一个打包工具 ，也就是今天文章的主角 - Vite。Vite 旨在利用生态系统中的新进展来解决上面的问题，通过将应用中的 依赖 和 源码 相分开，从而缩减开发服务器的启动时间。","head":[["meta",{"property":"og:url","content":"https://ez4jam1n.site/md/java/vue3/20221004-vite-quickstart.html"}],["meta",{"property":"og:site_name","content":"studio"}],["meta",{"property":"og:title","content":"搭建 Vue + Vite 入门项目"}],["meta",{"property":"og:description","content":"作者：benjamin 博客：studio 吾生也有涯，而知也无涯。 前言 虽然市面上有很多的打包工具，例如 webpack、Rollup 以及 Parcel 等。毫无疑问，通过使用这些工具，在很大程度上改善了前端开发者的游戏体验。 但随着业务变得越来越复杂，我们不得构建比之前更大型的应用。此时，所需要处理的代码量也越来越大。这时候，上面提到的打包工具就开始遇到性能瓶颈，我们可能需要很长的时间才能启动开发服务器，这样一来，开发效率就变得越来越低。 针对这一现状，大佬们又构建了一个打包工具 ，也就是今天文章的主角 - Vite。Vite 旨在利用生态系统中的新进展来解决上面的问题，通过将应用中的 依赖 和 源码 相分开，从而缩减开发服务器的启动时间。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ez4jam1n.site/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T11:23:15.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"搭建 Vue + Vite 入门项目"}],["meta",{"property":"article:author","content":"benjamin"}],["meta",{"property":"article:published_time","content":"2022-10-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-10T11:23:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"搭建 Vue + Vite 入门项目\\",\\"image\\":[\\"https://ez4jam1n.site/\\"],\\"datePublished\\":\\"2022-10-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-10T11:23:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"benjamin\\",\\"url\\":\\"https://ez4jam1n.site/studio\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"webpack、Rollup、Vite 的区别","slug":"webpack、rollup、vite-的区别","link":"#webpack、rollup、vite-的区别","children":[]},{"level":2,"title":"搭建 Vite 项目","slug":"搭建-vite-项目","link":"#搭建-vite-项目","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1678429185000,"updatedTime":1681125795000,"contributors":[{"name":"EZ4Jam1n","email":"“1286884552@qq.com”","commits":2},{"name":"村雨遥","email":"747731461@qq.com","commits":2},{"name":"cunyu1943","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":4.33,"words":1299},"filePathRelative":"md/java/vue3/20221004-vite-quickstart.md","localizedDate":"2022年10月4日","excerpt":"<p>作者：benjamin</p>\\n<p>博客：<a href=\\"https://benjam1n.eu.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">studio</a></p>\\n<blockquote>\\n<p>吾生也有涯，而知也无涯。</p>\\n</blockquote>\\n<hr>\\n<h2> 前言</h2>\\n<p>虽然市面上有很多的打包工具，例如 <code>webpack</code>、<code>Rollup</code> 以及 <code>Parcel</code> 等。毫无疑问，通过使用这些工具，在很大程度上改善了前端开发者的游戏体验。\\n但随着业务变得越来越复杂，我们不得构建比之前更大型的应用。此时，所需要处理的代码量也越来越大。这时候，上面提到的打包工具就开始遇到性能瓶颈，我们可能需要很长的时间才能启动开发服务器，这样一来，开发效率就变得越来越低。\\n针对这一现状，大佬们又构建了一个打包工具 ，也就是今天文章的主角 - <code>Vite</code>。<code>Vite</code> 旨在利用生态系统中的新进展来解决上面的问题，通过将应用中的 <strong>依赖</strong> 和 <strong>源码</strong> 相分开，从而缩减开发服务器的启动时间。</p>","copyright":{"author":"benjamin","license":"转载请注明以下信息：『作者：benjamin，博客：https://ez4jam1n.site/studio』"},"autoDesc":true}');export{e as data};
