const e=JSON.parse('{"key":"v-7ce7edb4","path":"/md/java/springboot/20220108-integrated-thymeleaf.html","title":"整合 Thymeleaf 实例","lang":"zh-CN","frontmatter":{"title":"整合 Thymeleaf 实例","isOriginal":true,"order":35,"icon":"leaf","category":["Spring Boot 基础教程"],"date":"2022-01-08T00:00:00.000Z","description":"作者：村雨遥 博客：studio 吾生也有涯，而知也无涯。 什么是 Thymeleaf Thymeleaf 是新一代的 Java 模板引擎，类似于 Velocity、FreeMarker 等传统引擎，其语言和 HTML 很接近，而且扩展性更高； Thymeleaf 的主要目的是将优雅的模板引入开发工作流程中，并将 HTML 在浏览器中正确显示。同时能够作为静态引擎，让开发成员之间更方便协作开发； Spring Boot 官方推荐使用模板，而且 Spring Boot 也为 Thymeleaf 提供了完整的自动化 配置解决方案； Thymeleaf 使用教程请戳 Tutorial: Using Thymeleaf，配合 Spring 使用的教程请戳 Tutorial: Thymeleaf + Spring。","head":[["meta",{"property":"og:url","content":"https://ez4jam1n.site/studio/md/java/springboot/20220108-integrated-thymeleaf.html"}],["meta",{"property":"og:site_name","content":"studio"}],["meta",{"property":"og:title","content":"整合 Thymeleaf 实例"}],["meta",{"property":"og:description","content":"作者：村雨遥 博客：studio 吾生也有涯，而知也无涯。 什么是 Thymeleaf Thymeleaf 是新一代的 Java 模板引擎，类似于 Velocity、FreeMarker 等传统引擎，其语言和 HTML 很接近，而且扩展性更高； Thymeleaf 的主要目的是将优雅的模板引入开发工作流程中，并将 HTML 在浏览器中正确显示。同时能够作为静态引擎，让开发成员之间更方便协作开发； Spring Boot 官方推荐使用模板，而且 Spring Boot 也为 Thymeleaf 提供了完整的自动化 配置解决方案； Thymeleaf 使用教程请戳 Tutorial: Using Thymeleaf，配合 Spring 使用的教程请戳 Tutorial: Thymeleaf + Spring。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ez4jam1n.site/studio/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-09T11:50:51.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"整合 Thymeleaf 实例"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:published_time","content":"2022-01-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-09T11:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"整合 Thymeleaf 实例\\",\\"image\\":[\\"https://ez4jam1n.site/studio/\\"],\\"datePublished\\":\\"2022-01-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-09T11:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://ez4jam1n.site/studio\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是 Thymeleaf","slug":"什么是-thymeleaf","link":"#什么是-thymeleaf","children":[]},{"level":2,"title":"整合过程","slug":"整合过程","link":"#整合过程","children":[{"level":3,"title":"准备过程","slug":"准备过程","link":"#准备过程","children":[]},{"level":3,"title":"添加 Thymeleaf 依赖","slug":"添加-thymeleaf-依赖","link":"#添加-thymeleaf-依赖","children":[]},{"level":3,"title":"编写实体类和 Controller","slug":"编写实体类和-controller","link":"#编写实体类和-controller","children":[]},{"level":3,"title":"创建 Thymeleaf 模板","slug":"创建-thymeleaf-模板","link":"#创建-thymeleaf-模板","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]}]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1678429185000,"updatedTime":1681041051000,"contributors":[{"name":"村雨遥","email":"747731461@qq.com","commits":2},{"name":"EZ4Jam1n","email":"“1286884552@qq.com”","commits":1},{"name":"cunyu1943","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":4.22,"words":1266},"filePathRelative":"md/java/springboot/20220108-integrated-thymeleaf.md","localizedDate":"2022年1月8日","excerpt":"<p>作者：村雨遥</p>\\n<p>博客：<a href=\\"https://ez4jam1n.github.io/studio\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">studio</a></p>\\n<blockquote>\\n<p>吾生也有涯，而知也无涯。</p>\\n</blockquote>\\n<h2> 什么是 Thymeleaf</h2>\\n<ul>\\n<li>\\n<p>Thymeleaf 是新一代的 Java 模板引擎，类似于 Velocity、FreeMarker 等传统引擎，其语言和 HTML 很接近，而且扩展性更高；</p>\\n</li>\\n<li>\\n<p>Thymeleaf 的主要目的是将优雅的模板引入开发工作流程中，并将 HTML 在浏览器中正确显示。同时能够作为静态引擎，让开发成员之间更方便协作开发；</p>\\n</li>\\n<li>\\n<p>Spring Boot 官方推荐使用模板，而且 Spring Boot 也为 Thymeleaf 提供了完整的自动化 配置解决方案；</p>\\n</li>\\n<li>\\n<p>Thymeleaf 使用教程请戳 <a href=\\"https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tutorial: Using Thymeleaf</a>，配合 Spring 使用的教程请戳 <a href=\\"https://www.thymeleaf.org/doc/tutorials/3.0/thymeleafspring.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Tutorial: Thymeleaf + Spring</a>。</p>\\n</li>\\n</ul>","copyright":{"author":"村雨遥","license":"转载请注明以下信息：『作者：村雨遥，博客：https://ez4jam1n.site/studio』"},"autoDesc":true}');export{e as data};
