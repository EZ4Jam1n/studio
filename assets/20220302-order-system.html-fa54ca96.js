const e=JSON.parse('{"key":"v-1db82042","path":"/md/java/se-in-action/20220302-order-system.html","title":"点菜系统","lang":"zh-CN","frontmatter":{"title":"点菜系统","date":"2022-03-02T00:00:00.000Z","isOriginal":true,"icon":"menu","order":2,"category":["Java 基础实战"],"description":"作者：村雨遥 博客：JavaPark 吾生也有涯，而知也无涯。 前言 继上次写了一个 Java SE 版本的 学生成绩管理系统 之后，发现大家反响还不错，所以今天我有带来了差不多一样的点菜系统，希望利用我们所学的 Java SE 知识，实现我们的点菜系统。","head":[["meta",{"property":"og:url","content":"https://cunyu1943.site/JavaPark/md/java/se-in-action/20220302-order-system.html"}],["meta",{"property":"og:site_name","content":"JavaPark"}],["meta",{"property":"og:title","content":"点菜系统"}],["meta",{"property":"og:description","content":"作者：村雨遥 博客：JavaPark 吾生也有涯，而知也无涯。 前言 继上次写了一个 Java SE 版本的 学生成绩管理系统 之后，发现大家反响还不错，所以今天我有带来了差不多一样的点菜系统，希望利用我们所学的 Java SE 知识，实现我们的点菜系统。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cunyu1943.site/JavaPark/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-22T07:22:12.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"点菜系统"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:published_time","content":"2022-03-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-22T07:22:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"点菜系统\\",\\"image\\":[\\"https://cunyu1943.site/JavaPark/\\"],\\"datePublished\\":\\"2022-03-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-22T07:22:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://cunyu1943.site/JavaPark\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[]},{"level":2,"title":"功能预览","slug":"功能预览","link":"#功能预览","children":[{"level":3,"title":"系统菜单","slug":"系统菜单","link":"#系统菜单","children":[]},{"level":3,"title":"点菜","slug":"点菜","link":"#点菜","children":[]},{"level":3,"title":"查看已点菜品","slug":"查看已点菜品","link":"#查看已点菜品","children":[]},{"level":3,"title":"删除菜品","slug":"删除菜品","link":"#删除菜品","children":[]},{"level":3,"title":"结账","slug":"结账","link":"#结账","children":[]},{"level":3,"title":"退出系统","slug":"退出系统","link":"#退出系统","children":[]}]},{"level":2,"title":"功能实现","slug":"功能实现","link":"#功能实现","children":[{"level":3,"title":"主界面","slug":"主界面","link":"#主界面","children":[]},{"level":3,"title":"主类设计","slug":"主类设计","link":"#主类设计","children":[]},{"level":3,"title":"功能接口","slug":"功能接口","link":"#功能接口","children":[]},{"level":3,"title":"初始化菜单","slug":"初始化菜单","link":"#初始化菜单","children":[]},{"level":3,"title":"展示菜品列表","slug":"展示菜品列表","link":"#展示菜品列表","children":[]},{"level":3,"title":"展示已点菜品","slug":"展示已点菜品","link":"#展示已点菜品","children":[]},{"level":3,"title":"移除菜品","slug":"移除菜品","link":"#移除菜品","children":[]},{"level":3,"title":"结账","slug":"结账-1","link":"#结账-1","children":[]}]},{"level":2,"title":"总程序","slug":"总程序","link":"#总程序","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1678429185000,"updatedTime":1679469732000,"contributors":[{"name":"村雨遥","email":"747731461@qq.com","commits":3},{"name":"cunyu1943","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":7.31,"words":2193},"filePathRelative":"md/java/se-in-action/20220302-order-system.md","localizedDate":"2022年3月2日","excerpt":"<p>作者：村雨遥</p>\\n<p>博客：<a href=\\"https://cunyu1943.github.io/JavaPark\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JavaPark</a></p>\\n<blockquote>\\n<p>吾生也有涯，而知也无涯。</p>\\n</blockquote>\\n<hr>\\n<h2> 前言</h2>\\n<p>继上次写了一个 Java SE 版本的 <a href=\\"/JavaPark/md/java/se-in-action/20220301-score-management.html\\" target=\\"blank\\">学生成绩管理系统</a> 之后，发现大家反响还不错，所以今天我有带来了差不多一样的点菜系统，希望利用我们所学的 Java SE 知识，实现我们的点菜系统。</p>","copyright":{"author":"村雨遥","license":"转载请注明以下信息：『作者：村雨遥，博客：https://cunyu1943.site/JavaPark』"},"autoDesc":true}');export{e as data};
