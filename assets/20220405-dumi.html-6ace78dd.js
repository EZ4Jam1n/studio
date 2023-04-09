import{_ as c,X as o,Y as s,Z as e,$ as a,a0 as i,a1 as n,D as r}from"./framework-dfc585d8.js";const t="/JavaPark/assets/node-v-1d0a0ebc.png",p="/JavaPark/assets/dumi-init-d1415f11.png",l="/JavaPark/assets/dumi-dev-c15997a5.png",h="/JavaPark/assets/preview-badb311a.png",m="/JavaPark/assets/context-demo-3ace0f31.png",u="/JavaPark/assets/change-text-c5b5c68d.png",v="/JavaPark/assets/dumi-demo-006e085e.png",_="/JavaPark/assets/javapark-67eb07f6.png",b="/JavaPark/assets/javapark-preview-d1b62597.png",g={},k=e("p",null,"作者：村雨遥",-1),f={href:"https://cunyu1943.github.io/JavaPark",target:"_blank",rel:"noopener noreferrer"},x=n(`<blockquote><p>吾生也有涯，而知也无涯。</p></blockquote><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>之前已经讲过如何利用网上各种开源的框架来搭建自己的博客，比如 <code>docsify</code>、<code>Hexo</code>、<code>VuePress</code>、<code>Halo</code> 等。前三者可以直接搭配 <code>Github</code> 就能免费得到一个专属自己的博客，而 <code>Halo</code> 可能需要自己有服务器，然后将服务部署在自己的服务器里。</p><p>最近在网上冲浪的时候，又发现了一款文档工具，那就是 <code>dumi</code>。从中文拼音来发音，就是 <strong>嘟米</strong>。这是一款为组件开发场景而是的文档工具，和 <code>father</code> 组成一条龙服务。<code>father</code> 负责构建，<code>dumi</code> 则负责组件开发以及组件文档的生成，一起为开发者提供了一站式的组件开发体验。</p><p>今天就一起来看看，如何利用 <code>dumi</code> 搭建自己的文档型网站。</p><h2 id="dumi-特性" tabindex="-1"><a class="header-anchor" href="#dumi-特性" aria-hidden="true">#</a> dumi 特性</h2><p>既然要用 <code>dumi</code>，那首先就来看看它的一些特性，可以总结如下：</p><ul><li>开箱即用，我们只需要将注意力集中在组件开发和文档编写即可。</li><li>丰富的 <code>Markdown</code> 扩展，不止于渲染组件 <code>demo</code>。</li><li>基于 <code>TypeScript</code> 类型定义，能够自动生成组件 <code>API</code>。</li><li>支持自定义主题，还能创建专属的 <code>Markdown</code> 组件。</li><li>支持移动端组件库，内置移动端搞钱渲染方案。</li><li>一行命令搞定组件资产数据化，串联下游生产力工具。</li></ul><h2 id="搭建过程" tabindex="-1"><a class="header-anchor" href="#搭建过程" aria-hidden="true">#</a> 搭建过程</h2><h3 id="首要准备" tabindex="-1"><a class="header-anchor" href="#首要准备" aria-hidden="true">#</a> 首要准备</h3><p>既然都说了 <code>dumi</code> 是基于 <code>TypeScript</code> 类型定义，那怎么离得开 <code>Node.js</code> 呢？所以，在正式搭建过程开始前，你得保证你的电脑上安装了 <code>Node.js</code>，而且还得确保它的版本不低于 <code>10.13</code>。</p><p>如果你已经装过了 <code>Node.js</code>，但是不确定其版本，那么使用以下命令来查看。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+t+`" alt=""></p><h3 id="脚手架初始化" tabindex="-1"><a class="header-anchor" href="#脚手架初始化" aria-hidden="true">#</a> 脚手架初始化</h3><p><code>dumi</code> 支持两种初始化脚手架的方式，一种是组件开发脚手架，另一种则是静态站点脚手架，这里主要介绍如何使用组件开发脚手架。</p><p>组件开发脚手架不仅包含了 <code>dumi</code> 和基础的文档，还包含了一个简单的组件、<code>umi-test</code> 和 <code>father-build</code>， 能够轻松实现组件开发、文档编写、测试用例编写、组件打包的全流程。</p><p>在本地新建一个空文件夹，方便管理脚手架，然后在初始化一个文档模式的组件库开发脚手架。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> dumi-demo
<span class="token builtin class-name">cd</span> dumi-demo
npx @umijs/create-dumi-lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt=""></p><p>初始化完成之后，执行以下命令，然后在浏览器其中打开 <code>http://localhost:8080</code> 就可以进行预览了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx dumi dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+l+'" alt=""></p><p><img src="'+h+'" alt=""></p><h3 id="编写文档" tabindex="-1"><a class="header-anchor" href="#编写文档" aria-hidden="true">#</a> 编写文档</h3><p>查看我们的项目目录，可以发现 <code>docs</code> 文件，这里就是我们编写文档的地方。项目初始化时，默认只有 <code>index.md</code> 也就是上面我们访问 <code>http://localhost:8080</code> 页面中所称呈现的内容。</p><p><img src="'+m+'" alt=""></p><p>接着我们在 <code>docs</code> 目录下新增修改 <code>Markdown</code> 文档，它就会帮我们自动渲染到前端页面中。</p><p><img src="'+u+'" alt=""></p><p><img src="'+v+'" alt=""></p><p><img src="'+_+'" alt=""></p><p><img src="'+b+'" alt=""></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>以上就是利用 <code>dumi</code> 搭建文档型网站的具体过程了。当然，除了作为博客之外，我们还可以利用它来进行前端组件化开发，不断给你的网站添加新功能！</p>',34);function P(J,N){const d=r("ExternalLinkIcon");return o(),s("div",null,[k,e("p",null,[a("博客："),e("a",f,[a("JavaPark"),i(d)])]),x])}const w=c(g,[["render",P],["__file","20220405-dumi.html.vue"]]);export{w as default};
