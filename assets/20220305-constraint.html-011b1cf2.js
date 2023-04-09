const t=JSON.parse('{"key":"v-ef212492","path":"/md/database/mysql/20220305-constraint.html","title":"约束","lang":"zh-CN","frontmatter":{"title":"约束","isOriginal":true,"order":20,"icon":"lock","category":["MySQL 教程"],"date":"2022-03-05T00:00:00.000Z","description":"作者：村雨遥 博客：JavaPark 吾生也有涯，而知也无涯。 概述 所谓约束，就是作用于表中字段上的规则，用来限制存储在表中的数据。使用的目的是为了保证数据库中数据的正确性、有效性以及完整性。 约束有很多种，常见的约束分类如下表。 关键字 约束 描述 NOT NULL 非空约束 限制该字段的数据不能为 null UNIQUE 唯一约束 保证该字段的所有数据都是唯一不重复的 PRIMARY KEY 主键约束 主键是一行数据的唯一标识，要求非空且唯一 DEFAULT 默认约束 保存数据时，若未指定该字段的值，则采用默认值 CHECK 检查约束（8.0.16 版本之后） 保证字段值满足某一个条件 FOREIGN KEY 外键约束 用于让两张表之间的数据建立连接，从而保证数据的一致性和完整性","head":[["meta",{"property":"og:url","content":"https://cunyu1943.site/JavaPark/md/database/mysql/20220305-constraint.html"}],["meta",{"property":"og:site_name","content":"JavaPark"}],["meta",{"property":"og:title","content":"约束"}],["meta",{"property":"og:description","content":"作者：村雨遥 博客：JavaPark 吾生也有涯，而知也无涯。 概述 所谓约束，就是作用于表中字段上的规则，用来限制存储在表中的数据。使用的目的是为了保证数据库中数据的正确性、有效性以及完整性。 约束有很多种，常见的约束分类如下表。 关键字 约束 描述 NOT NULL 非空约束 限制该字段的数据不能为 null UNIQUE 唯一约束 保证该字段的所有数据都是唯一不重复的 PRIMARY KEY 主键约束 主键是一行数据的唯一标识，要求非空且唯一 DEFAULT 默认约束 保存数据时，若未指定该字段的值，则采用默认值 CHECK 检查约束（8.0.16 版本之后） 保证字段值满足某一个条件 FOREIGN KEY 外键约束 用于让两张表之间的数据建立连接，从而保证数据的一致性和完整性"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-10T06:19:45.000Z"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:published_time","content":"2022-03-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-10T06:19:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"约束\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-10T06:19:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://cunyu1943.site/JavaPark\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"外键约束","slug":"外键约束","link":"#外键约束","children":[{"level":3,"title":"创建/删除约束","slug":"创建-删除约束","link":"#创建-删除约束","children":[]},{"level":3,"title":"删除/更新行为","slug":"删除-更新行为","link":"#删除-更新行为","children":[]}]}],"git":{"createdTime":1678429185000,"updatedTime":1678429185000,"contributors":[{"name":"村雨遥","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":2.31,"words":693},"filePathRelative":"md/database/mysql/20220305-constraint.md","localizedDate":"2022年3月5日","excerpt":"<p>作者：村雨遥</p>\\n<p>博客：<a href=\\"https://cunyu1943.github.io/JavaPark\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JavaPark</a></p>\\n<blockquote>\\n<p>吾生也有涯，而知也无涯。</p>\\n</blockquote>\\n<h2> 概述</h2>\\n<p>所谓约束，就是作用于表中字段上的规则，用来限制存储在表中的数据。使用的目的是为了保证数据库中数据的正确性、有效性以及完整性。</p>\\n<p>约束有很多种，常见的约束分类如下表。</p>\\n<table>\\n<thead>\\n<tr>\\n<th>关键字</th>\\n<th>约束</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>NOT NULL</code></td>\\n<td>非空约束</td>\\n<td>限制该字段的数据不能为 <code>null</code></td>\\n</tr>\\n<tr>\\n<td><code>UNIQUE</code></td>\\n<td>唯一约束</td>\\n<td>保证该字段的所有数据都是唯一不重复的</td>\\n</tr>\\n<tr>\\n<td><code>PRIMARY KEY</code></td>\\n<td>主键约束</td>\\n<td>主键是一行数据的唯一标识，要求非空且唯一</td>\\n</tr>\\n<tr>\\n<td><code>DEFAULT</code></td>\\n<td>默认约束</td>\\n<td>保存数据时，若未指定该字段的值，则采用默认值</td>\\n</tr>\\n<tr>\\n<td><code>CHECK</code></td>\\n<td>检查约束（8.0.16 版本之后）</td>\\n<td>保证字段值满足某一个条件</td>\\n</tr>\\n<tr>\\n<td><code>FOREIGN KEY</code></td>\\n<td>外键约束</td>\\n<td>用于让两张表之间的数据建立连接，从而保证数据的一致性和完整性</td>\\n</tr>\\n</tbody>\\n</table>","copyright":{"author":"村雨遥","license":"转载请注明以下信息：『作者：村雨遥，博客：https://cunyu1943.site/JavaPark』"},"autoDesc":true}');export{t as data};
