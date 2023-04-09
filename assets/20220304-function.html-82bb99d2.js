const t=JSON.parse('{"key":"v-6263951b","path":"/md/database/mysql/20220304-function.html","title":"MySQL 中的函数","lang":"zh-CN","frontmatter":{"title":"MySQL 中的函数","shortTitle":"函数","isOriginal":true,"icon":"function","order":15,"category":["MySQL 教程"],"date":"2022-03-04T00:00:00.000Z","description":"作者：村雨遥 博客：JavaPark 吾生也有涯，而知也无涯。 定义 所谓函数，就是指的一段可以直接被另一端程序所调用的程序或者代码，就像 Java 中的方法一样。 字符串函数 函数 说明 concat(S1, S2, …, Sn) 字符串凭借，将 S1、S2、……Sn 拼接成一个字符串 lower(str) 将字符串 str 全部转换为小写 upper(str) 将字符串 str 全部转换为大写 lpad(str, n, pad) 左填充，用字符串 pad 对 str 的左边进行填充，达到 n 个字符串长度 rpad(str, n, pad) 右填充，用字符串 pad 对 str 的右边进行填充，达到 n 个字符串长度 trim(str) 去除字符串头部和尾部的空格 substring(str, start, len) 返回字符串 str 从 start 位置起长度为 len 的字符串","head":[["meta",{"property":"og:url","content":"https://cunyu1943.site/JavaPark/md/database/mysql/20220304-function.html"}],["meta",{"property":"og:site_name","content":"JavaPark"}],["meta",{"property":"og:title","content":"MySQL 中的函数"}],["meta",{"property":"og:description","content":"作者：村雨遥 博客：JavaPark 吾生也有涯，而知也无涯。 定义 所谓函数，就是指的一段可以直接被另一端程序所调用的程序或者代码，就像 Java 中的方法一样。 字符串函数 函数 说明 concat(S1, S2, …, Sn) 字符串凭借，将 S1、S2、……Sn 拼接成一个字符串 lower(str) 将字符串 str 全部转换为小写 upper(str) 将字符串 str 全部转换为大写 lpad(str, n, pad) 左填充，用字符串 pad 对 str 的左边进行填充，达到 n 个字符串长度 rpad(str, n, pad) 右填充，用字符串 pad 对 str 的右边进行填充，达到 n 个字符串长度 trim(str) 去除字符串头部和尾部的空格 substring(str, start, len) 返回字符串 str 从 start 位置起长度为 len 的字符串"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-10T06:19:45.000Z"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:published_time","content":"2022-03-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-10T06:19:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL 中的函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-10T06:19:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://cunyu1943.site/JavaPark\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"字符串函数","slug":"字符串函数","link":"#字符串函数","children":[]},{"level":2,"title":"数值函数","slug":"数值函数","link":"#数值函数","children":[]},{"level":2,"title":"日期函数","slug":"日期函数","link":"#日期函数","children":[]},{"level":2,"title":"流程函数","slug":"流程函数","link":"#流程函数","children":[]}],"git":{"createdTime":1678429185000,"updatedTime":1678429185000,"contributors":[{"name":"村雨遥","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":1.68,"words":503},"filePathRelative":"md/database/mysql/20220304-function.md","localizedDate":"2022年3月4日","excerpt":"<p>作者：村雨遥</p>\\n<p>博客：<a href=\\"https://cunyu1943.github.io/JavaPark\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JavaPark</a></p>\\n<blockquote>\\n<p>吾生也有涯，而知也无涯。</p>\\n</blockquote>\\n<h2> 定义</h2>\\n<p>所谓函数，就是指的一段可以直接被另一端程序所调用的程序或者代码，就像 Java 中的方法一样。</p>\\n<h2> 字符串函数</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>函数</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>concat(S1, S2, …, Sn)</code></td>\\n<td>字符串凭借，将 <code>S1</code>、<code>S2</code>、……<code>Sn</code> 拼接成一个字符串</td>\\n</tr>\\n<tr>\\n<td><code>lower(str)</code></td>\\n<td>将字符串 <code>str</code> 全部转换为小写</td>\\n</tr>\\n<tr>\\n<td><code>upper(str)</code></td>\\n<td>将字符串 <code>str</code> 全部转换为大写</td>\\n</tr>\\n<tr>\\n<td><code>lpad(str, n, pad)</code></td>\\n<td>左填充，用字符串 <code>pad</code> 对 <code>str</code> 的左边进行填充，达到 <code>n</code> 个字符串长度</td>\\n</tr>\\n<tr>\\n<td><code>rpad(str, n, pad)</code></td>\\n<td>右填充，用字符串 <code>pad</code> 对 <code>str</code> 的右边进行填充，达到 <code>n</code> 个字符串长度</td>\\n</tr>\\n<tr>\\n<td><code>trim(str)</code></td>\\n<td>去除字符串头部和尾部的空格</td>\\n</tr>\\n<tr>\\n<td><code>substring(str, start, len)</code></td>\\n<td>返回字符串 <code>str</code> 从 <code>start</code> 位置起长度为 <code>len</code> 的字符串</td>\\n</tr>\\n</tbody>\\n</table>","copyright":{"author":"村雨遥","license":"转载请注明以下信息：『作者：村雨遥，博客：https://cunyu1943.site/JavaPark』"},"autoDesc":true}');export{t as data};
