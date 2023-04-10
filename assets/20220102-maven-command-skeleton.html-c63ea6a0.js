import{_ as o,X as n,Y as r,Z as e,$ as t,a0 as a,a1 as s,D as l}from"./framework-dfc585d8.js";const c="/assets/maven-archetype-3061e194.png",i="/assets/maven-groupid-82629592.png",A="/assets/maven-confirm-95b6bbfb.png",v="/assets/project-structure-c9841488.png",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX0AAAFZCAMAAABDmg9DAAACiFBMVEUlJSYqLS5EZ1EvLzA5OTpzyZFHa1YlJS8lgHUuJSbMzMxzqlAyl4NzyYNbyZFLYSZmyZFLvJFzyXU+JSbjeTIlYWQlJTvHzMxyyYlBg1NzvGRmlzslKCesycyGhYYoLVM/Z1JhmcFmkrZPhKxfoHVtyZG8mWa2kmZEZ0xagSbHzMfMyr1sxpAoRD8mLjMzJSbMy64lJVBbw5BnmkCowczMwqdJhlRzyY5wuXBDYUQzQiu9zMrMvp0oZJxTwJE+qYzBmWElRFJtpUolJURLbzCBrMzMzMFiyZEpT4QlSn9Nn3Vyw3BeoWtmrV8qT0ZAUSYmgqxIqIFyxIBywXg3iXU5YlEzXE4mPTt+Ui1OaiaBJSbMy8fMvJxjvo7Kr4Zrs2kocGVYhTQpOi0lMyoyOSdUdiZDVyY/RSYyLyZwJiZLJSbBy8wlJoJzyYAukX9Annwoh3lBhFxemllTkFVgkTo7LymbYyZnLSYpLSZfJSa2oYlClXIlX1tqnkJCWzolJTY2RylqNyd8SiYpJSa+s5o3oIc6l3zHpXYpSm4wg21Bi2lzsFYoL0PUdjM7UDHieC+kcyu1zMxyosW0u8OgtMGUqrzLvLI7caRWuo1Ps4lYrIElKWpztl5bX1uWcFNvPy5SfiqWWShoSiiZvcxDspGGhY2pkIYqgXQld28mTFu3kVInYks4SzS/cTNMYzBYMCfCPyafKia0wcvGuqiGj6BNc5kpWZFowoFbnnVurFUuN1PiYyo6WCnXUiiJSCZWJiaGqrqCmbCbjIYlQoZvtYBzU3qxhVGyYC+ugyzjcCyqQymILCZQkraxvKddgqSEhX+xl3ZBfmclfmF+ZUFaQC2yMyZAirZbL4FjhYSuAAALkElEQVR42uydB08UQRSA36Lr6VrRKHcqWLFRRNQTRcHesffee8PesYCiEqOIFcWCXaOJNRpj15jYS/Tv+GaXvTmz3ung3p3Mvi/xmL3Zk+Sb4e3s3rwZUIjIQfYFIPtSQfYFIPtSQfYFIPtSQfYFIPsVi1nBKsl+KBnWtEqVKm2uB6wPZv/KN4WTf04hBBlXxWCrEoAg9otLu5/2HQzsNG2RQoj3fEZUwN5vtc+Nx6J+U37nCbwieddUVU17pDSp1XFMnZo3FGUPHo+aqRD+JI+tYtK1khIAUILq5/I5me6V3k33b6D9l1nd8Ndkqmle78jVCuFPUlOf/TbdlACAEly/RT5K38cu5rOwMGQNlpapHRUikP3goQeUP+k35HMKMkbP82uGguiTlRTC1r7P9b8y5fvYU0ed3le3v0V/7a0Q9sZ9rl8z5XPGb5qqNpzDrrplbUAEHfPsVwIBSnDy43470l8W39G0n0GRx4bxvtDd80OMN8w+kuemwWb573VFaZKa5c0+7u5r2i+IVqd7s2nEGZ7nPAUjE9UuaX0Vwz6SVPYGIQg9ZROC7EsF2ReA7EsF2ReA7EsF2ReA7EsF2Y8kEIzKlYAIJWT/v4XsC0D2pYLsC0D2pYLsC0D2pYLsC/B/2c8bVRuICNl3ZZJ9aDyrMUWeyNA4aWxUVFTXbv9s/8pN4Fw5B8RfyB/WNIrRZn/jf7NfXDplO5gMwkwKIP5IEso39G/7J/toPBb1m/I77wAfVWve2JWopg134evovoBgKoVRqlG3HjSIrj7suIr14DiSx0WZbF1ffvtcP5fP7btPTPcsj2+4a4h3b+rSefiGmuXZm1qztmk/LXUlq28PTmP8WJ/9rnPKb5/rt8pH2ft2omh19HyAy/GrAb6wbj8jvqNp3z2TDT67zAWnMb6pz36bbv9gn+vn8rn9trrtLfiKM/nBoEOt6qZ97PWsXdqC07Cr73P9r0z53D6LMVC/TiPTOVwbfCIxUfXZx4JR7zTsivtcv4byg9t3Zaqjh3o/DyD7No15OPkfz0Fw+1jqqMcgsm/feJ/zJ/vGdWAFRR5G0jh+rxsW+71qjVrlGfmSIk8Zs/Ff+OzDjFS1S9ZDijxAz/crNmRfALIvFWRfALIvFWRfALIvFWRfALIvFZUrUUv8NWRfKsi+AGRfKsi+AGRfKsi+AGRfKgLad52qBoSFMNk/mt7aqn+Z+wwQ4ej7zdu1rkb2w5U9wctcPwWfMGRP8DLpj9hsKiyT/kjNJORlq34+t4dnT/TJMObs5+Gk/hnH2N4U4CzsnUWLZav+1xb7vuyJZe6JANgI+3AuFa4UnOG0S7LgDHJx+y1irlrs+7InrgzoXTZzfzN2ezysDo7C3uwJXubyW1kiD8+ecJ0fsgYgE190GkQ7LHsodH2fy7fY59kTVTFdCLdGAIBhm05MTVQdZj9Ecd8qn9v3z55oktEbVrBEuhrqqJarsjMcZj9UYx4u32LfP3sC8uquOb+PHTzY6cDIE6LxPpdvte+fPYEtsWoAHm0ewBpkRh2n2efZE7Y/ZdPlW+37Z09ATnQiu+b2yXBjyu79qc6zj8wOwxNmbp9nTyDL1C2AbMabrenXHRd5wvvtCtqnJWEiZ7/GUgcux2AhQvZzKLZE0P5xpz3JsRBJ+457ihkImtMgA2RfALIvFWRfALIvFWRfALIvFWRfALIvFWRfALIvFWS/PFD2hAwEyZ6gGbQWQmufJjCXB8qeqJhQ9oQ9UPZExUMse2JE/5KnWvcNkH84Rkv4tAigQ/N0Tbs9AU+9e0jTJueeA4B+eALAktieAM1SXhVp00A/X8tdCMDOOlKC1U2eLtbfcTZC2RNo/1Dr9myp8oSLcYe13dVchZM3xt05tBZczbQjz+MOx6Ts+NV+wqESbL4e6Ql42vtJ0CLmdtyFTpMPQIdS/B+epUwCZyOWPTECjQP06ZfyGFB4wtklsdPwOHkB9FiM++QwzVjvb19jHy+OxUZhvIhlZxWXTlt0Lx1rIdnp81OEsifQ/hsm8eBufEXjb4o7pUwARmHCWf0D/bA7+9vvv5Z9Cju7zndWYPFo0ouDuM0FIZY9MQJtMu2aQU9osVi7XdIeo01nI4Tj38Ovcf+t/uZjMGo1g/5rXc1jtNyvjr+ki2RPcPsb43S+Ajx8dkubsi6w/UlgtgErYLBnsC0W8p+la47f1Usge8Jn/x5GHk5O85iePPJgK2D00ZvIZ/+dGXlYgdOkEOOYsxHInvDZ71Ca8rjM/BzWy7Ex/K+6hf3RsatQ89kfeBD/Ohj30s3enrxAb6Cr4GwEsid89o0R5IXDuRuWxOLPIrRtjjhRM6u9eKHoyEGffRxoYsjBEadx1p2iVngOfrATXg+cjcATZm4f7hXhrdWRkmrFT2M0vOyy0z/c0vAG7CYgd7G48QeP+8atWMLGJ5DDzpqcOwHyi2L0nw6Hvl0RgOxLBdkXgOxLBdkXgOxLBdkXgOxLBdkvL7TzR0WH7AtA9qWC7AtA9qWC7AtA9qWC7Icfypj4P6CMifBDGROM/2vvid/rz1neG0wsFQ7Hjr0ngutvEF0dLBgVDltzPKRr0XL9ZD986zAH119DZbQFfXuJtL4AkLy8Di6H2t6scC7lXYNcIGPiWnZqmsfzCC7F69tLzIWc8zVXeTYNqWdWOBd719/nGRPWANMrlS0zXhB9spqx5PVsijw27z3BZ89a7a9wT9TjUN16vWo1nENx3/6+z+Vb7ddQDdhmN/Fdsh6RfdvjPpdvtb/U69Hphm2Ol93eO8m+vWMeLt9qn+3uxEnOU9uSfRvH+1y+xX5DfG/zALzq6sxer286sZpVOP6xRLn2nhDJmIBM98q9ZzDwp3k9e0c2gvr3V3qyM+rONypoWezZoX3C3OuY6p5r7O+XmDUPko4nql2mz/NVEPTtSsWE7AtA9qWC7AtA9qWC7P9k335eogjDAI4/l2mNXTVwgtWELrM3U0ow6aC0CYKriD8OdRA1M93ANF1ZIwVFEkxlz4kQgWAQ5nrKEPEo2TX/n553BqaalG1CDNzvB3YcZkYP3xneGZd5Q6D+pUL9EKgPAAAAAMB/pK9eCc5Snc4eyq+of4GG1mx7//iZ+KgfVq/zSNSDtvbOf6ivvu6Kj/oXV1+yC8d6AnJ5PxL1L67+zNFxWha0f14CSkrLl/t0isS8qI/eCzzu5k9LNVZjZ0SXPS3i+pCY0+X11qTGnu6qsTqe1Oqy8Sn1/2LkOUhXb9u5kz/qt32equxKVI2KbCW6dbbEtdJy3Rxf768cT1QtpRre3BnTwCrSrCuRzdS0xMbWOyq7rC/N/Xp4apr6hevrsK/599OB+pbpLhNWRqdNmFX9sXFVN68salSrZ8Rc8xlRZk9UT8uw2T5nTob7q8/vDlO/kJ0jzf/tu449wfqD7h9tisqEdjRievGXuNO0Btyx5mZZUjxb8StNZj0WL3fP2KD3li31C3uXsw8q9OI//L2+hvReX66L6fuyypQ3twO37A1d3i6Liieyaek448b2jvOOKbL6IxLWkZZ/b+d2H+oneNf16m9cLVjfG2yKtn6LqNW29joJ6bGt1Ydydl5XTsTnJ5T7ZcmfI89Y5xn1t+JTrfVFWn/ZyYia3ZsMXd+73W7bB7Vrdj5Qf2VGRF7Hh/UM+HfdU+vrnqS5KRRn/dk9c/HfeuUMSmgV5nuenWxWPy8D435fY8OLt1Z00X/i1OecYH0dmVIjkWbds9pUNVqU9SO9juPsOc7kPTk/+m/VeI3VnVkUNauT1OOT83J6fe8ZpyRRX5T1pXZA27c3jMo5MpkRBvUvC+qHQP1LhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAHe3AgAAAAAADk/9oIqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpKe3BAAgAAACDo/+t+hAoAAAAAAAAAAMBQ66HQzzMmL2YAAAAASUVORK5CYII=",m="/assets/pom-933c9cce.png",h={},q=e("p",null,"作者：benjamin",-1),g={href:"https://benjam1n.eu.org",target:"_blank",rel:"noopener noreferrer"},u=s(`<blockquote><p>吾生也有涯，而知也无涯。</p></blockquote><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>上一篇文章中我们已经介绍了什么是 Maven，以及如何进行 Maven 的安装，最后还对 Maven 安装后的简单配置进行了讲解。今天我们就主要来看看 Maven 中的核心概念以及 Maven 在日常使用中常用的命令。</p><h2 id="maven-核心" tabindex="-1"><a class="header-anchor" href="#maven-核心" aria-hidden="true">#</a> Maven 核心</h2><h2 id="构建" tabindex="-1"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h2><p>所谓构建，就是指项目的构建，它是面向过程的，是一系列步骤的总和，主要包括项目代码的编译、运行、测试、打包以及部署等等。而 Maven 所支持的构建主要有如下几种：</p><ol><li><strong>清理</strong>：删除之前编译产生的文件，为新的代码编译做好准备；</li><li><strong>编译</strong>：将源代码编译为执行代码，支持批量编译；</li><li><strong>测试</strong>：通过执行测试代码，验证功能是否正常，而且它也是支持批量测试的；</li><li><strong>报告</strong>：通过执行测试，生成测试结果的文件；</li><li><strong>打包</strong>：讲项目中的 <code>class</code> 文件、配置文件打包到一个压缩文件中。对于一般程序，打包的压缩文件扩展名通常是 <code>.jar</code>，而对于 Web 应用，则起压缩文件扩展名通常是 <code>.war</code>；</li><li><strong>安装</strong>：把打包好的文件安装到本地仓库；</li><li><strong>部署</strong>：让程序跑起来。</li></ol><h3 id="maven-核心概念" tabindex="-1"><a class="header-anchor" href="#maven-核心概念" aria-hidden="true">#</a> Maven 核心概念</h3><ol><li><strong>pom</strong>：项目对象模型，Maven 将项目当做一个模型，用于控制 Maven 构建项目的过程，通过它来管理 jar 依赖；</li><li><strong>目录结构</strong>：Maven 的目录和文件位置都是约定俗成的；</li><li><strong>坐标</strong>：用于表示资源的唯一标识；</li><li><strong>依赖管理</strong>：使用 jar 文件来管理项目；</li><li><strong>仓库管理</strong>：资源存放的路径；</li><li><strong>生命周期</strong>：Maven 工具构建项目的过程；</li><li><strong>插件和目标</strong>：执行 Maven 构建是的工具就是插件</li><li><strong>继承</strong></li><li><strong>聚合</strong></li></ol><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><p>Maven 中的一些常见命令如下：</p><table><thead><tr><th>命令</th><th>含义</th><th>功能</th></tr></thead><tbody><tr><td><code>mvn clean</code></td><td>清理</td><td>用于清理已编译好的文件</td></tr><tr><td><code>mvn compile</code></td><td>编译</td><td>将 Java 源代码编译成字节码 <code>.class</code> 文件</td></tr><tr><td><code>mvn test</code></td><td>测试</td><td>项目测试</td></tr><tr><td><code>mvn package</code></td><td>打包</td><td>根据用户配置，将项目打包为 <code>jar</code> 包或 <code>war</code> 包</td></tr><tr><td><code>mvn install</code></td><td>安装</td><td>手动向本地仓库安装一个 <code>jar</code></td></tr><tr><td><code>mvn deploy</code></td><td>上传</td><td>将 <code>jar</code> 上传到私服</td></tr></tbody></table><h2 id="利用-archetype-来生成项目骨架" tabindex="-1"><a class="header-anchor" href="#利用-archetype-来生成项目骨架" aria-hidden="true">#</a> 利用 Archetype 来生成项目骨架</h2><p>实际上，为了更快捷的创建 Maven 项目骨架，我们可以使用 maven archetype 来创建，创建过程如下：</p><ol><li>首先进入你要创建项目骨架的目录，然后执行如下命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn archetype:generate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>然后会有很长的输出，有多种可用的 Archetype 供你选择，选择你所需要的，然后输入对应编号即可；</li></ol><p><img src="`+c+'" alt=""></p><ol start="3"><li>接着会让你输入 <code>groupId</code>、<code>artifactId</code>、<code>version</code>、<code>package</code> 等信息；</li></ol><p><img src="'+i+'" alt=""></p><ol start="4"><li>再接着让你确认相关信息；</li></ol><p><img src="'+A+'" alt=""></p><ol start="5"><li>最后确认无误后，回车生成即可。</li></ol><h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h2><p>项目生成后的目录中主要包含如下文件：</p><p><img src="'+v+`" alt=""></p><p>其中 <code>src</code> 目录包含了项目的主代码和资源，同时还包括了测试相关的代码以及资源。而 <code>pom.xml</code> 则定义了项目的所有配置。</p><p>假设我们有一个 <code>HelloWorld</code> 的项目，我们利用 Maven 来进行管理时，其项目结构大致应该是如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HelloWorld/
    | ----src/ |
    | -------- || main/ |
| ----- ||     |  | java/ |
| --- ||     | resources/ |
| --- | ---------- || test/ |
| ----- ||     | java/ |
| --- ||  |resources/
    |----pom.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>HelloWorld</code> 是根目录，也就是我们的工程名，而 <code>src</code> 目录下主要是存放源代码，其下有主要分为 <code>java</code> 和 <code>resources</code>，<code>java</code> 目录主要用于存放程序包以及程序包中的 Java 文件，<code>resources</code> 目录则是存放程序中所要使用的配置文件。</p><p><code>test</code> 目录结构同 <code>src</code>，只不过顾名思义，这里主要是存放用于测试的代码和配置文件，而且这不是一个必选项，我们可以根据自己的需要进行选择。</p><p>最后则是 <code>pom.xml</code>，这个每个 Maven 所管理项目的核心文件，这是必须的，后续的依赖管理等工作都基于此文件来操作。</p><p><img src="`+p+'" alt=""></p><p><img src="'+m+'" alt=""></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>好了，以上就是 Maven 中的一些常用命令和如何利用 Archetype 来生成项目骨架，以及利用 Maven 所生成的项目的总体结构了。如果你觉得对你有所帮助，还请点赞关注一波哦。今天就到此为止了，下一期我们继续来看如何利用 Maven 进行依赖管理，敬请期待吧！</p>',36);function b(f,Z){const d=l("ExternalLinkIcon");return n(),r("div",null,[q,e("p",null,[t("博客："),e("a",g,[t("studio"),a(d)])]),u])}const M=o(h,[["render",b],["__file","20220102-maven-command-skeleton.html.vue"]]);export{M as default};
