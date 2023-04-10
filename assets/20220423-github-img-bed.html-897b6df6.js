import{_ as r,X as l,Y as i,Z as e,$ as t,a0 as s,a1 as n,D as a}from"./framework-dfc585d8.js";const c="/assets/repo-create-17f46ac9.png",p="/assets/repo-info-5d3ed3f0.png",h="/assets/repo-finish-e5c99534.png",d="/assets/picgo-8860b7dd.png",_="/assets/github-setting-b7b429de.png",u="/assets/token-generate-d66ab9be.png",g="/assets/token-info-47b6c431.png",m="/assets/access-token-df03c02f.png",b="/assets/picgo-github-33176485.png",f="/assets/img-bed-setting-e3e260b0.png",k="/assets/upload-fc8acdce.png",G="/assets/speed-192fab35.png",x={},P=e("p",null,"作者：benjamin",-1),j={href:"https://benjam1n.eu.org",target:"_blank",rel:"noopener noreferrer"},v=n('<blockquote><p>吾生也有涯，而知也无涯。</p></blockquote><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>对于写博客的朋友们来讲，图床这个东西一定不会陌生，而且在一定程度上也给大家造成过一定困扰。</p><p>对于不清楚这个东西的朋友，我就在这儿大概说一下图床是个啥东西。所谓图床，其实可以就相当于我们手机上的相册，不过它是在线的，而且是对大家开放的，大家都可以访问查看，但是编辑删除这些功能仅限于拥有者，就相当于用百度云分享的公开照片，你可以查看，也可以下载下来编辑，但是拥有权还是属于分享者。</p><p>那你可能会疑惑，那这个东西和写博客的我们有啥关系呢？</p><p>你想想，我们写博客，是不是有很多图片需要插入，我们这些博客要保留在本地的时候你可以预览到图片，但一旦你要把它发布到网上，这时候问题来了！发现图片上传失败，那是因为你本地的图片都是存在本地的，平台不会自动给你上传，那这个时候就凸显出图床的重要性了。当然了，如果你是直接在平台进行编辑，那着一点就不用担心了，基本平台都会自动给你上传到它自己的服务器。</p><p>有了图床，我们在本地写好博客之后，就能够任意复制到其他平台，不用担心图片丢失问题了。</p><p>今天的文章就是给大家分享一个搭建免费图床的教程，既是方便自己后续的复习，也希望对大家也有所帮助。</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><p>那么在正式开始之前，你需要提前准备以下东西：</p><blockquote><p>一个 Github 账号</p></blockquote>',11),q={href:"https://github.com/ez4jam1n",target:"_blank",rel:"noopener noreferrer"},S=n('<h2 id="搭建过程" tabindex="-1"><a class="header-anchor" href="#搭建过程" aria-hidden="true">#</a> 搭建过程</h2><p>这一部分就是正式开始搭建过程了，准备好大干一场吧！</p><ol><li>登录你的 Github 之后，创建一个新的仓库。</li></ol><p><img src="'+c+'" alt=""></p><ol start="2"><li>填写仓库先关资料，一般只需要选一个合适的仓库名，然后确保仓库为 <code>public</code> 其他的保持默认就好；</li></ol><p><img src="'+p+'" alt=""></p><ol start="3"><li>一般创建成功之后，会出现如下界面，至此，我们的图床算是创建好了，接下来就是如何上传图片了。</li></ol><p><img src="'+h+'" alt=""></p><h2 id="上传图片" tabindex="-1"><a class="header-anchor" href="#上传图片" aria-hidden="true">#</a> 上传图片</h2>',9),V={href:"https://molunerfinn.com/PicGo/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://molunerfinn.com/PicGo/",target:"_blank",rel:"noopener noreferrer"},B=n('<p><img src="'+d+'" alt=""></p><p>接下来就是配置 PicGo 的过程了。</p><ol><li>首先，我们先要去 Github 创建一个 token；</li></ol><p>以此打开 <code>Settings -&gt; Developer settings -&gt; Personal access tokens</code>，最后点击 <code>generate new token</code>；</p><p><img src="'+_+'" alt=""></p><p><img src="'+u+'" alt=""></p><ol start="2"><li>填写及勾选相关信息，然后点击 <code>Genetate token</code> 即可；</li></ol><p><img src="'+g+'" alt=""></p><ol start="3"><li><code>token</code> 生成，注意它只会显示一次，所以你最好把它复制下来到你的备忘录存好，方便下次使用，否则下次有需要重新新建；</li></ol><p><img src="'+m+'" alt=""></p><ol start="4"><li>配置 PicGo，依次打开 图床设置 -&gt; Github 图床；</li></ol><p><img src="'+b+'" alt=""></p><ol start="5"><li>填写相关信息，最后点击 <code>确定</code>即可，要将其作为默认图床的话，点击设为默认图床；</li></ol><p><img src="'+f+'" alt=""></p><ol start="6"><li>上传图片，通过上传区上传即可（Ctrl V 或者将图片拖拽都可以），也可以通过快捷键的方式上传（默认上传键为 <code>Ctrl + Shift + P</code>）；</li></ol><p><img src="'+k+'" alt=""></p><h2 id="加速访问" tabindex="-1"><a class="header-anchor" href="#加速访问" aria-hidden="true">#</a> 加速访问</h2><p>大家可能会发现，我们上传到 Github 的图片有时候访问太慢了，有时候甚至直接加载不出来！那该咋办呢？</p>',18),I={href:"https://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"},N=e("blockquote",null,[e("p",null,[e("code",null,"https://cdn.jsdelivr.net/gh/用户名/仓库名")])],-1),C=e("p",null,[t("比如我的就是 "),e("code",null,"https://cdn.jsdelivr.net/gh/ez4jam1n/blog-imgs")],-1),D=e("p",null,[e("img",{src:G,alt:""})],-1),E=e("h2",{id:"图床推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#图床推荐","aria-hidden":"true"},"#"),t(" 图床推荐")],-1),z=e("p",null,"除开用 Github 搭建的方式之后，我们也可以用 Gitee 进行搭建，搭建方式和本文大致相同。此外，我也推荐几个免费的图床给大家，大家可以根据自己的喜好进行选择；",-1),L={href:"https://imgchr.com/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://sm.ms/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://imgur.com/",target:"_blank",rel:"noopener noreferrer"},X=e("h2",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),t(" 总结")],-1),Y=e("p",null,"至此，我们的搭建免费图床的教程就到此结束了，总结一下主要有如下几部分：",-1),Z=e("ol",null,[e("li",null,"准备一个 Github 账号；"),e("li",null,"搭建图床仓库；"),e("li",null,"上传图片设置；"),e("li",null,"加速访问；"),e("li",null,"免费图床推荐；")],-1),$=e("p",null,"如果你对上面的部分有疑问，欢迎留言或者私信，我会在看到的第一时间回复你！",-1);function y(A,F){const o=a("ExternalLinkIcon");return l(),i("div",null,[P,e("p",null,[t("博客："),e("a",j,[t("studio"),s(o)])]),v,e("p",null,[t("好了，就这么简单，只要你有一个 Github 账号就够了，你就能拥有一个免费的图床了，如果你还没有，那赶紧去 "),e("a",q,[t("注册"),s(o)]),t(" 一个账号吧。")]),S,e("p",null,[t("通过上面的步骤，我们的图床时搭建好了，但是通过传统的方法向 Github 上传图片太麻烦了，这里我们推荐使用一个开源图床工具 "),e("a",V,[t("PicGo"),s(o)]),t(" 来作为我们的图片上传工具；")]),e("p",null,[t("PicGo 的安装就不说了，去他的 "),e("a",w,[t("官网"),s(o)]),t(" 下载对应版本进行安装即可，我们主要讲讲如何用它来上传图片。安装后，打开软件其主页面如下：")]),B,e("p",null,[t("这时候我们就可以用 "),e("a",I,[t("jsDelivr"),s(o)]),t(" 进行免费加速，而设置的方法也很简单，只需要在我们 PicGo 图床配置中添加如下自定义域名即可；")]),N,C,D,E,z,e("ol",null,[e("li",null,[e("a",L,[t("路过图床"),s(o)])]),e("li",null,[e("a",M,[t("SM.MS"),s(o)])]),e("li",null,[e("a",T,[t("Imgur"),s(o)])])]),X,Y,Z,$])}const J=r(x,[["render",y],["__file","20220423-github-img-bed.html.vue"]]);export{J as default};
