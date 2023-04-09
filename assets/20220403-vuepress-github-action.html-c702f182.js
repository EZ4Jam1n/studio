const e=JSON.parse('{"key":"v-6aaaaf5b","path":"/md/tools/blog/20220403-vuepress-github-action.html","title":"Vuepress + GitHub Actions 博客自动部署","lang":"zh-CN","frontmatter":{"title":"Vuepress + GitHub Actions 博客自动部署","isOriginal":true,"icon":"vue","order":10,"category":["博客搭建"],"date":"2022-04-03T00:00:00.000Z","description":"作者：村雨遥 博客：JavaPark 吾生也有涯，而知也无涯。 前言 正常我们利用 Vuepress 搭建一个文档博客之后，往往都是通过如下步骤来部署一篇博客： 首先写文章； 写完文章之后生成静态文件，这里一般使用的是 npm run build 命令，但也有使用 yarn build 的； 将我们生成的静态文件推送到 Github Pages； 访问我们对应的网址，查看我们的推送是否成功。","head":[["meta",{"property":"og:url","content":"https://cunyu1943.site/JavaPark/md/tools/blog/20220403-vuepress-github-action.html"}],["meta",{"property":"og:site_name","content":"JavaPark"}],["meta",{"property":"og:title","content":"Vuepress + GitHub Actions 博客自动部署"}],["meta",{"property":"og:description","content":"作者：村雨遥 博客：JavaPark 吾生也有涯，而知也无涯。 前言 正常我们利用 Vuepress 搭建一个文档博客之后，往往都是通过如下步骤来部署一篇博客： 首先写文章； 写完文章之后生成静态文件，这里一般使用的是 npm run build 命令，但也有使用 yarn build 的； 将我们生成的静态文件推送到 Github Pages； 访问我们对应的网址，查看我们的推送是否成功。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cunyu1943.site/JavaPark/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-14T06:01:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Vuepress + GitHub Actions 博客自动部署"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:published_time","content":"2022-04-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-14T06:01:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vuepress + GitHub Actions 博客自动部署\\",\\"image\\":[\\"https://cunyu1943.site/JavaPark/\\"],\\"datePublished\\":\\"2022-04-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-14T06:01:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://cunyu1943.site/JavaPark\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"生成 Token","slug":"生成-token","link":"#生成-token","children":[]},{"level":2,"title":"设置 Secrets","slug":"设置-secrets","link":"#设置-secrets","children":[]},{"level":2,"title":"编写 Action","slug":"编写-action","link":"#编写-action","children":[]},{"level":2,"title":"验证","slug":"验证","link":"#验证","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1678429185000,"updatedTime":1678773677000,"contributors":[{"name":"村雨遥","email":"747731461@qq.com","commits":2},{"name":"cunyu1943","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":4.15,"words":1244},"filePathRelative":"md/tools/blog/20220403-vuepress-github-action.md","localizedDate":"2022年4月3日","excerpt":"<p>作者：村雨遥</p>\\n<p>博客：<a href=\\"https://cunyu1943.github.io/JavaPark\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JavaPark</a></p>\\n<blockquote>\\n<p>吾生也有涯，而知也无涯。</p>\\n</blockquote>\\n<h2> 前言</h2>\\n<p>正常我们利用 Vuepress 搭建一个文档博客之后，往往都是通过如下步骤来部署一篇博客：</p>\\n<ol>\\n<li>\\n<p>首先写文章；</p>\\n</li>\\n<li>\\n<p>写完文章之后生成静态文件，这里一般使用的是 <code>npm run build</code> 命令，但也有使用 <code>yarn build</code> 的；</p>\\n</li>\\n<li>\\n<p>将我们生成的静态文件推送到 Github Pages；</p>\\n</li>\\n<li>\\n<p>访问我们对应的网址，查看我们的推送是否成功。</p>\\n</li>\\n</ol>","copyright":{"author":"村雨遥","license":"转载请注明以下信息：『作者：村雨遥，博客：https://cunyu1943.site/JavaPark』"},"autoDesc":true}');export{e as data};
