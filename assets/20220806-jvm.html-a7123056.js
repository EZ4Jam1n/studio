const e=JSON.parse('{"key":"v-f0effda8","path":"/md/interview/20220806-jvm.html","title":"JVM 面试总结","lang":"zh-CN","frontmatter":{"title":"JVM 面试总结","shortTitle":"JVM","icon":"machine","isOriginal":true,"date":"2022-08-06T00:00:00.000Z","category":"面试宝典","order":6,"description":"作者：村雨遥 博客：studio 吾生也有涯，而知也无涯。 JVM 内存区域？ JVM 定义及组成 JVM 是一种用于计算设备的规范，是一个虚构出来的计算机，通过在实体机上仿真模拟各种计算机功能来实现。JVM 运行在操作系统之上，与硬件之间并没有进行直接交互，这也就为什么 Java 语言只需要编译一次，就能够在不同平台上运行，通常有如下组成部分：","head":[["meta",{"property":"og:url","content":"https://ez4jam1n.site/studio/md/interview/20220806-jvm.html"}],["meta",{"property":"og:site_name","content":"studio"}],["meta",{"property":"og:title","content":"JVM 面试总结"}],["meta",{"property":"og:description","content":"作者：村雨遥 博客：studio 吾生也有涯，而知也无涯。 JVM 内存区域？ JVM 定义及组成 JVM 是一种用于计算设备的规范，是一个虚构出来的计算机，通过在实体机上仿真模拟各种计算机功能来实现。JVM 运行在操作系统之上，与硬件之间并没有进行直接交互，这也就为什么 Java 语言只需要编译一次，就能够在不同平台上运行，通常有如下组成部分："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ez4jam1n.site/studio/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-09T11:50:51.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"JVM 面试总结"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:published_time","content":"2022-08-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-09T11:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM 面试总结\\",\\"image\\":[\\"https://ez4jam1n.site/studio/\\"],\\"datePublished\\":\\"2022-08-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-09T11:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://ez4jam1n.site/studio\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"JVM 内存区域？","slug":"jvm-内存区域","link":"#jvm-内存区域","children":[{"level":3,"title":"JVM 定义及组成","slug":"jvm-定义及组成","link":"#jvm-定义及组成","children":[]},{"level":3,"title":"JVM 功能","slug":"jvm-功能","link":"#jvm-功能","children":[]},{"level":3,"title":"线程","slug":"线程","link":"#线程","children":[]},{"level":3,"title":"Hotspot JVM 后台系统线程","slug":"hotspot-jvm-后台系统线程","link":"#hotspot-jvm-后台系统线程","children":[]},{"level":3,"title":"深拷贝 vs 浅拷贝","slug":"深拷贝-vs-浅拷贝","link":"#深拷贝-vs-浅拷贝","children":[]},{"level":3,"title":"堆和栈的区别","slug":"堆和栈的区别","link":"#堆和栈的区别","children":[]}]},{"level":2,"title":"运行时数据区","slug":"运行时数据区","link":"#运行时数据区","children":[{"level":3,"title":"内存划分","slug":"内存划分","link":"#内存划分","children":[]},{"level":3,"title":"各内存区域功能","slug":"各内存区域功能","link":"#各内存区域功能","children":[]},{"level":3,"title":"Java 7 和 Java 8 在内存模型上的区别","slug":"java-7-和-java-8-在内存模型上的区别","link":"#java-7-和-java-8-在内存模型上的区别","children":[]},{"level":3,"title":"什么情况下会出现堆内存溢出？","slug":"什么情况下会出现堆内存溢出","link":"#什么情况下会出现堆内存溢出","children":[]}]},{"level":2,"title":"GC 机制","slug":"gc-机制","link":"#gc-机制","children":[{"level":3,"title":"什么是 GC？","slug":"什么是-gc","link":"#什么是-gc","children":[]},{"level":3,"title":"Java 中的对象引用","slug":"java-中的对象引用","link":"#java-中的对象引用","children":[]},{"level":3,"title":"判断对象是否为垃圾","slug":"判断对象是否为垃圾","link":"#判断对象是否为垃圾","children":[]},{"level":3,"title":"需要 GC 的内存区域","slug":"需要-gc-的内存区域","link":"#需要-gc-的内存区域","children":[]},{"level":3,"title":"回收垃圾对象内存的算法","slug":"回收垃圾对象内存的算法","link":"#回收垃圾对象内存的算法","children":[]},{"level":3,"title":"垃圾回收器","slug":"垃圾回收器","link":"#垃圾回收器","children":[]}]},{"level":2,"title":"Java 类加载机制","slug":"java-类加载机制","link":"#java-类加载机制","children":[{"level":3,"title":"类的生命周期","slug":"类的生命周期","link":"#类的生命周期","children":[]},{"level":3,"title":"JVM 加载类文件的原理","slug":"jvm-加载类文件的原理","link":"#jvm-加载类文件的原理","children":[]},{"level":3,"title":"类加载过程","slug":"类加载过程","link":"#类加载过程","children":[]},{"level":3,"title":"类加载过程中的具体分工","slug":"类加载过程中的具体分工","link":"#类加载过程中的具体分工","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":3,"title":"类加载器","slug":"类加载器","link":"#类加载器","children":[]},{"level":3,"title":"动态模型系统（OSGI）","slug":"动态模型系统-osgi","link":"#动态模型系统-osgi","children":[]}]},{"level":2,"title":"内存分配策略","slug":"内存分配策略","link":"#内存分配策略","children":[{"level":3,"title":"Minor GC vs Major GC","slug":"minor-gc-vs-major-gc","link":"#minor-gc-vs-major-gc","children":[]},{"level":3,"title":"堆内存分配原则","slug":"堆内存分配原则","link":"#堆内存分配原则","children":[]},{"level":3,"title":"新生代","slug":"新生代","link":"#新生代","children":[]},{"level":3,"title":"老年代","slug":"老年代","link":"#老年代","children":[]},{"level":3,"title":"永久代","slug":"永久代","link":"#永久代","children":[]}]},{"level":2,"title":"JVM 调优","slug":"jvm-调优","link":"#jvm-调优","children":[{"level":3,"title":"JVM 调优常用参数","slug":"jvm-调优常用参数","link":"#jvm-调优常用参数","children":[]},{"level":3,"title":"JVM 调优步骤","slug":"jvm-调优步骤","link":"#jvm-调优步骤","children":[]}]}],"git":{"createdTime":1678429185000,"updatedTime":1681041051000,"contributors":[{"name":"村雨遥","email":"747731461@qq.com","commits":2},{"name":"EZ4Jam1n","email":"“1286884552@qq.com”","commits":1},{"name":"cunyu1943","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":33.94,"words":10181},"filePathRelative":"md/interview/20220806-jvm.md","localizedDate":"2022年8月6日","excerpt":"<p>作者：村雨遥</p>\\n<p>博客：<a href=\\"https://ez4jam1n.github.io/studio\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">studio</a></p>\\n<blockquote>\\n<p>吾生也有涯，而知也无涯。</p>\\n</blockquote>\\n<h2> JVM 内存区域？</h2>\\n<h3> JVM 定义及组成</h3>\\n<p>JVM 是一种用于计算设备的规范，是一个虚构出来的计算机，通过在实体机上仿真模拟各种计算机功能来实现。JVM 运行在操作系统之上，与硬件之间并没有进行直接交互，这也就为什么 Java 语言只需要编译一次，就能够在不同平台上运行，通常有如下组成部分：</p>","copyright":{"author":"村雨遥","license":"转载请注明以下信息：『作者：村雨遥，博客：https://ez4jam1n.site/studio』"},"autoDesc":true}');export{e as data};
