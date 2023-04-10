const t=JSON.parse('{"key":"v-4247f093","path":"/md/tools/windows/20220412-windows-install.html","title":"手把手安装 Windows 系统","lang":"zh-CN","frontmatter":{"title":"手把手安装 Windows 系统","date":"2022-04-12T00:00:00.000Z","isOriginal":true,"order":2,"icon":"install","category":["Windows 教程"],"description":"前言 最近女朋友由于工作原因，一直缠着我教她装系统（连系统都不会装，大（la）佬（ji））。 嘘！！！小声 BB，别让她听见了，🤣🤣🤣。那没有办法呀，女朋友的话，你敢不听么，🤪🤪🤪。 于是就有了之前的如何制作 U 盘启动盘和这篇文章，手把手教她如何安装 Windows 系统。也可以扔给你的女朋友看看，我不介意的哈 😏😏😏。 接下来就是正文部分了，各位看官准备好，那么开始之前，我们先来看看一些基本常识，备好小板凳和瓜子！ 什么是 BIOS？ BIOS 是英文 \\"Basic Input Output System\\" 的缩略词，直译过来后中文名称就是\\"基本输入输出系统\\"。其实，它是一组固化到计算机内主板上一个 ROM 芯片上的程序，它保存着计算机最重要的基本输入输出的程序、开机后自检程序和系统自启动程序，它可从 CMOS 中读写系统设置的具体信息。其主要功能是为计算机提供最底层的、最直接的硬件设置和控制。此外，BIOS 还向作业系统提供一些系统参数。系统硬件的变化是由 BIOS 隐藏，程序使用 BIOS 功能而不是直接控制硬件。","head":[["meta",{"property":"og:url","content":"https://ez4jam1n.site/studio/md/tools/windows/20220412-windows-install.html"}],["meta",{"property":"og:site_name","content":"studio"}],["meta",{"property":"og:title","content":"手把手安装 Windows 系统"}],["meta",{"property":"og:description","content":"前言 最近女朋友由于工作原因，一直缠着我教她装系统（连系统都不会装，大（la）佬（ji））。 嘘！！！小声 BB，别让她听见了，🤣🤣🤣。那没有办法呀，女朋友的话，你敢不听么，🤪🤪🤪。 于是就有了之前的如何制作 U 盘启动盘和这篇文章，手把手教她如何安装 Windows 系统。也可以扔给你的女朋友看看，我不介意的哈 😏😏😏。 接下来就是正文部分了，各位看官准备好，那么开始之前，我们先来看看一些基本常识，备好小板凳和瓜子！ 什么是 BIOS？ BIOS 是英文 \\"Basic Input Output System\\" 的缩略词，直译过来后中文名称就是\\"基本输入输出系统\\"。其实，它是一组固化到计算机内主板上一个 ROM 芯片上的程序，它保存着计算机最重要的基本输入输出的程序、开机后自检程序和系统自启动程序，它可从 CMOS 中读写系统设置的具体信息。其主要功能是为计算机提供最底层的、最直接的硬件设置和控制。此外，BIOS 还向作业系统提供一些系统参数。系统硬件的变化是由 BIOS 隐藏，程序使用 BIOS 功能而不是直接控制硬件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ez4jam1n.site/studio/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-14T06:01:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"手把手安装 Windows 系统"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:published_time","content":"2022-04-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-14T06:01:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"手把手安装 Windows 系统\\",\\"image\\":[\\"https://ez4jam1n.site/studio/\\"],\\"datePublished\\":\\"2022-04-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-14T06:01:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://ez4jam1n.site/studio\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[{"level":3,"title":"什么是 BIOS？","slug":"什么是-bios","link":"#什么是-bios","children":[]},{"level":3,"title":"MBR vs GPT","slug":"mbr-vs-gpt","link":"#mbr-vs-gpt","children":[]}]},{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[{"level":3,"title":"8G + 内存的 U 盘","slug":"_8g-内存的-u-盘","link":"#_8g-内存的-u-盘","children":[]},{"level":3,"title":"Windows 系统镜像","slug":"windows-系统镜像","link":"#windows-系统镜像","children":[]},{"level":3,"title":"刻录软件","slug":"刻录软件","link":"#刻录软件","children":[]}]},{"level":2,"title":"安装过程","slug":"安装过程","link":"#安装过程","children":[{"level":3,"title":"设置 BIOS 启动顺序","slug":"设置-bios-启动顺序","link":"#设置-bios-启动顺序","children":[]},{"level":3,"title":"系统安装设置过程","slug":"系统安装设置过程","link":"#系统安装设置过程","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1678429185000,"updatedTime":1678773677000,"contributors":[{"name":"村雨遥","email":"747731461@qq.com","commits":2},{"name":"cunyu1943","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":8.7,"words":2611},"filePathRelative":"md/tools/windows/20220412-windows-install.md","localizedDate":"2022年4月12日","excerpt":"<h2> 前言</h2>\\n<p>最近女朋友由于工作原因，一直缠着我教她装系统（连系统都不会装，大（la）佬（ji））。</p>\\n<p>嘘！！！小声 BB，别让她听见了，🤣🤣🤣。那没有办法呀，女朋友的话，你敢不听么，🤪🤪🤪。</p>\\n<p>于是就有了之前的如何制作 U 盘启动盘和这篇文章，手把手教她如何安装 Windows 系统。也可以扔给你的女朋友看看，我不介意的哈 😏😏😏。</p>\\n<p>接下来就是正文部分了，各位看官准备好，那么开始之前，我们先来看看一些基本常识，备好小板凳和瓜子！</p>\\n<h3> 什么是 BIOS？</h3>\\n<blockquote>\\n<p>BIOS 是英文 \\"Basic Input Output System\\" 的缩略词，直译过来后中文名称就是\\"基本输入输出系统\\"。<strong>其实，它是一组固化到计算机内主板上一个 ROM 芯片上的程序</strong>，它保存着计算机最重要的基本输入输出的程序、开机后自检程序和系统自启动程序，它可从 CMOS 中读写系统设置的具体信息。其主要功能是为计算机提供最底层的、最直接的硬件设置和控制。此外，BIOS 还向作业系统提供一些系统参数。系统硬件的变化是由 BIOS 隐藏，程序使用 BIOS 功能而不是直接控制硬件。</p>\\n</blockquote>","copyright":{"author":"村雨遥","license":"转载请注明以下信息：『作者：村雨遥，博客：https://ez4jam1n.site/studio』"},"autoDesc":true}');export{t as data};
