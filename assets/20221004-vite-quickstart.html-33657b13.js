import{_ as c,X as t,Y as d,Z as e,$ as s,a0 as n,a1 as o,D as i}from"./framework-dfc585d8.js";const p="/studio/assets/npm-version-363c628d.png",l="/studio/assets/npm-create-b49e0857.png",r="/studio/assets/vue-ts-cefad185.png",u="/studio/assets/finish-f8a40747.png",m="/studio/assets/npm-run-52cde9bc.png",v="/studio/assets/preview-2639416c.png",b="/studio/assets/init-vite-6a7c9aaf.png",h="/studio/assets/npm-run-1-6f21476b.png",g="/studio/assets/preview-2639416c.png",_={},k=e("p",null,"作者：村雨遥",-1),f={href:"https://ez4jam1n.github.io/studio",target:"_blank",rel:"noopener noreferrer"},V=o(`<blockquote><p>吾生也有涯，而知也无涯。</p></blockquote><hr><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>虽然市面上有很多的打包工具，例如 <code>webpack</code>、<code>Rollup</code> 以及 <code>Parcel</code> 等。毫无疑问，通过使用这些工具，在很大程度上改善了前端开发者的游戏体验。 但随着业务变得越来越复杂，我们不得构建比之前更大型的应用。此时，所需要处理的代码量也越来越大。这时候，上面提到的打包工具就开始遇到性能瓶颈，我们可能需要很长的时间才能启动开发服务器，这样一来，开发效率就变得越来越低。 针对这一现状，大佬们又构建了一个打包工具 ，也就是今天文章的主角 - <code>Vite</code>。<code>Vite</code> 旨在利用生态系统中的新进展来解决上面的问题，通过将应用中的 <strong>依赖</strong> 和 <strong>源码</strong> 相分开，从而缩减开发服务器的启动时间。</p><h2 id="webpack、rollup、vite-的区别" tabindex="-1"><a class="header-anchor" href="#webpack、rollup、vite-的区别" aria-hidden="true">#</a> webpack、Rollup、Vite 的区别</h2><p>由于自己更多的是和后端打交道，所以这里对三者的区别介绍仅限于表面，至于更深一层的代码层面的区别，还请各位自行去了解。经过查阅资料，这里简单给出下 <code>webpack</code>、<code>Rollup</code> 以及 <code>Vite</code> 的区别，先说一个总结论：</p><blockquote><p><strong>webpack</strong> 更适合打包项目，<code>Rollup</code> 更适合打包库，而 <code>Vite</code> 基于 <code>Rollup</code>，实现了热更新的同时也十分适合打包项目。</p></blockquote><table><thead><tr><th>工具</th><th>webpack</th><th>Rollup</th><th>Vite</th></tr></thead><tbody><tr><td>区别</td><td>1. 支持代码切割，从而实现分包<br>2. 支持 <code>HMR</code>，实现热更新</td><td>1. 基于 <code>esm</code> 打包，生成的文件体积更小<br>2. 原生支持 <code>tree-shaking</code></td><td>1. 生产环境通过 <code>Rollup</code> 打包生成 <code>esm</code> 模块包，因此打包的体积小<br>2. 生产环境基于浏览器支持 <code>esm</code>，让浏览器解析模块，然后服务器按需编译返回<br>3. 热更新，实现按需编译，不像 <code>webpack</code> 需全部重新编译并更新</td></tr></tbody></table><h2 id="搭建-vite-项目" tabindex="-1"><a class="header-anchor" href="#搭建-vite-项目" aria-hidden="true">#</a> 搭建 Vite 项目</h2><p>说完上边的内容之后，接下来就来看看，如何大家我们的第一个 <code>Vite</code> 项目。</p><p>需要注意的是，要使用 <code>Vite</code> 的前提是电脑中有 <code>Node.js</code>，而且版本需要 <code>&gt;=12.0.0</code>，至于个别模块可能需要更高版本的 <code>Node.js</code> 才能正常运行，此时就需要注意升级 <code>Node.js</code> 的版本。</p><p>如果你不清楚你的电脑中是否安装了 <code>Node.js</code>，那么可以在控制台中使用如下命令进行查询。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 查看 <span class="token function">node</span> 版本
<span class="token function">node</span> <span class="token parameter variable">--version</span>
// 查看 <span class="token function">npm</span> 版本
<span class="token function">npm</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt=""></p><p>如何还是不太清楚，那么可以参考我之前的一篇文章：</p>',15),x={href:"https://ez4jam1n.github.io/studio/md/tools/windows/20220414-nodejs-install",target:"_blank",rel:"noopener noreferrer"},w=o(`<p>初始工作做好之后，我们就可以开始搭建我们的第一个 <code>Vite</code> 项目了。</p><p>如果我们只是要构建一个 <code>Vite</code> 项目，那么简单地使用以下命令即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> create vite@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后根据提示进行相关设置即可，这里需要注意的是它会让我们选择框架，这就需要根据我们的需求来进行选择了。</p><p>比如我们要创建一个基于 <code>Vue</code> 的项目，那么可以选择 <code>Vue</code> 模板，然后再进行下一步。</p><p><img src="`+l+'" alt=""></p><p>选择变体，是基于 <code>Vue</code> 还是 <code>Vue-ts</code>。</p><p><img src="'+r+'" alt=""></p><p>最后，等待项目创建完毕即可。</p><p><img src="'+u+`" alt=""></p><p>然后根据它的提示，依次执行以下三个命令即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// vite-project 是项目名
<span class="token builtin class-name">cd</span> vite-project
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt=""></p><p>接着在浏览器中访问以下地址：</p><blockquote><p><code>http://localhost:3000</code></p></blockquote><p>如果一切正常，那么应该就会出现以下的界面了，至此我们的第一个 <code>Vite</code> + <code>Vue</code> 项目就搭建成功了！</p><p><img src="'+v+`" alt=""></p><p>当然，除开使用上面的命令来创建之外，我们还可以通过附加的命令选项来执行项目的名称和想要使用的模板。不过这里需要注意，根据你电脑上 <code>npm</code> 版本的不同，需要使用不同的命令。</p><p>如果你的 <code>npm</code> 是 <code>6.x</code> 版本，那么要使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// my-vue-app 是项目名称，--template 后紧跟模板
<span class="token function">npm</span> create vite@latest my-vue-app <span class="token parameter variable">--template</span> vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 <code>npm</code> 版本 <code>7.x</code> 及以上版本，那么则需要使用如下命令，一定不要忘记多出来的 <code>–</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// my-vue-app 是项目名称，--template 后紧跟模板
<span class="token function">npm</span> create vite@latest my-vue-app -- <span class="token parameter variable">--template</span> vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt=""></p><p>同样的，我们依次执行提示的三条命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> my-vue-app
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+'" alt=""></p><p>最后，同样在浏览器中访问 <code>http://localhost:3000</code>，不出意外同样可以看到以下的界面。</p><p><img src="'+g+'" alt=""></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>以上就是本文的所有内容了，主要介绍了 <code>Vite</code> 由来的背景，并简单对比了下 <code>webpack</code>、<code>Rollup</code> 和 <code>Vite</code> 三个打包工具的区别，最后则是利用两种方式来创建了 <code>Vite</code> + <code>Vue</code> 的实例。</p>',30);function j(N,R){const a=i("ExternalLinkIcon");return t(),d("div",null,[k,e("p",null,[s("博客："),e("a",f,[s("studio"),n(a)])]),V,e("blockquote",null,[e("p",null,[e("a",x,[s("Windows 教程：Node.js 安装教程"),n(a)])])]),w])}const y=c(_,[["render",j],["__file","20221004-vite-quickstart.html.vue"]]);export{y as default};
