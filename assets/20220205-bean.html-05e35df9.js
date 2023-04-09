import{_ as e,X as p,Y as o,Z as n,$ as a,a0 as c,a1 as l,D as i}from"./framework-dfc585d8.js";const s="/JavaPark/assets/console-res-eefa2059.png",u="/JavaPark/assets/console-res1-879d2067.png",k="/JavaPark/assets/console-res2-28dc137f.png",d="/JavaPark/assets/console-res3-bf5b8f9e.png",r={},v=n("p",null,"作者：村雨遥",-1),m={href:"https://cunyu1943.github.io/JavaPark",target:"_blank",rel:"noopener noreferrer"},b=l(`<blockquote><p>吾生也有涯，而知也无涯。</p></blockquote><hr><h2 id="bean-的别名配置" tabindex="-1"><a class="header-anchor" href="#bean-的别名配置" aria-hidden="true">#</a> Bean 的别名配置</h2><p>接着上一篇文章中的 <code>&lt;bean&gt;</code> 配置，其中配置了 <code>id</code> 属性，通过 <code>id</code> 属性我们就可以获取到对象。其实 <code>&lt;bean&gt;</code> 配置也提供了 <code>name</code> 属性，它是用于定义 Bean 的别名，一个 Bean 的别名是可以有多个的，各个别名之间可以通过逗号（<code>,</code>）、分号（<code>;</code>）、空格（\`\`）分隔。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--  配置 bean  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookDao<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dao bookDaoImpl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.cunyu.dao.impl.BookDaoImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>service,bookServiceImpl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.cunyu.service.impl.BookServiceImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- property 表示配置当前 Bean 的属性
             name 表示配置哪一个具体的属性
             ref 表示参照的 Bean
             --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookDao<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookDao<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们要获取 Bean 时，既可以通过 <code>id</code>，也可以通过 <code>name</code> 获取。两者的区别在于 <code>id</code> 属性是惟一的，而 <code>name</code> 不是，因此在配置时，更加推荐使用 <code>id</code> 而非 <code>name</code> 防止因为重名而导致在获取 Bean 时混淆。</p><p>通过 <code>id</code> 或者 <code>name</code> 获取 Bean 时，如果获取不到，此时程序将抛出异常 <code>NoSuchBeanDefinitionException</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>NoSuchBeanDefinitionException: No bean named <span class="token string">&#39;xxx&#39;</span> available
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一旦遇到以上错误，那么第一反应应该是是去 Spring 配置文件 <code>applicationContext.xml</code> 中查看对应 Bean 是否配置，或者在代码和配置中的 Bean 名是否匹配一致。</p><h2 id="bean-的作用范围" tabindex="-1"><a class="header-anchor" href="#bean-的作用范围" aria-hidden="true">#</a> Bean 的作用范围</h2><p>Bean 既然是一个对象，那么它也是有作用范围的。在 <code>&lt;bean&gt;</code> 配置时我们可以利用 <code>scope</code> 属性。</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td><code>singleton</code></td><td>单例，也是 Bean 磨人的作用范围</td></tr><tr><td><code>prototype</code></td><td>非单例</td></tr></tbody></table><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.cunyu.service.impl.BookServiceImpl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.cunyu.service.impl.BookServiceImpl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>singleton<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上两种配置的效果是一致的，因为 Bean 默认的作用范围是 <code>singleton</code>。接着我们创建两个 <code>BookService</code> 对象，然后打印出来，可以看到它们指向的是同一块内存。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppIoC</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//    加载配置文件，获取 IoC 容器</span>
        <span class="token class-name">ApplicationContext</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;applicationContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">BookService</span> bookService1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BookService</span><span class="token punctuation">)</span> app<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;bookService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BookService</span> bookService2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BookService</span><span class="token punctuation">)</span> app<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;bookService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bookService1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bookService2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+s+`" alt=""></p><p>而如果我们将 Bean 的 <code>scope</code> 配置为 <code>prototype</code>，那么此时再创建两个 <code>BookService</code> 对象，然后对比它们的内存地址，会发现两者指向的并非指向同一块内存。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.cunyu.service.impl.BookServiceImpl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prototype<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppIoC</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//    加载配置文件，获取 IoC 容器</span>
        <span class="token class-name">ApplicationContext</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;applicationContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">BookService</span> bookService1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BookService</span><span class="token punctuation">)</span> app<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;bookService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BookService</span> bookService2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BookService</span><span class="token punctuation">)</span> app<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;bookService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bookService1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bookService2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+s+`" alt=""></p><h2 id="bean-实例化" tabindex="-1"><a class="header-anchor" href="#bean-实例化" aria-hidden="true">#</a> Bean 实例化</h2><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><p>Bean 的本质是对象，所以可以使用构造方法完成。</p><p>同样基于上一篇文章中的实例，配置好 <code>&lt;bean&gt;</code> 之后，然后在 <code>BookDao</code> 接口的实现中用构造方法来创建 Bean，最后在主程序入口中获取 Bean 之后调用方法，可以发现调用了构造方法。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookDao<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.cunyu.dao.impl.BookDaoImpl<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookDaoImpl</span> <span class="token keyword">implements</span> <span class="token class-name">BookDao</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">BookDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;构造方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;book dao save ……&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppIoC</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//    加载配置文件，获取 IoC 容器</span>
        <span class="token class-name">ApplicationContext</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;applicationContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//    获取 Bean</span>
        <span class="token class-name">BookDao</span> bookDao <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BookDao</span><span class="token punctuation">)</span> app<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;bookDao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bookDao<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt=""></p><h3 id="静态工厂方法" tabindex="-1"><a class="header-anchor" href="#静态工厂方法" aria-hidden="true">#</a> 静态工厂方法</h3><p>利用静态工厂方法对 Bean 进行实例化时，首先需要创建一个工厂类，并在工厂类中创建一个静态方法用于创建对象。然后在 Spring 的配置文件 <code>applicationContext.xml</code> 中配置静态工厂类并指定其中的方法，最后在主程序入口中获取 Bean 并调用方法即可。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookDaoFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BookDao</span> <span class="token function">getBookDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BookDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookDao<span class="token punctuation">&quot;</span></span> <span class="token attr-name">factory-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getBookDao<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.cunyu.factory.BookDaoFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppIoC</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//    加载配置文件，获取 IoC 容器</span>
        <span class="token class-name">ApplicationContext</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;applicationContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//    获取 Bean</span>
        <span class="token class-name">BookDao</span> bookDao <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BookDao</span><span class="token punctuation">)</span> app<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;bookDao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bookDao<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt=""></p><h3 id="实例工厂对象方法" tabindex="-1"><a class="header-anchor" href="#实例工厂对象方法" aria-hidden="true">#</a> 实例工厂对象方法</h3><p>假设有一个接口和它的实现如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PersonDao</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonDaoImpl</span> <span class="token keyword">implements</span> <span class="token class-name">PersonDao</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Person Dao query……&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们创建一个实例工厂方法，注意此时我们是继承了 <code>FactoryBean</code> 接口，然后实现了其中的 <code>getObject()</code> 和 <code>getObjectType()</code> 两个方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonDaoFactoryBean</span> <span class="token keyword">implements</span> <span class="token class-name">FactoryBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PersonDao</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">PersonDao</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PersonDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getObjectType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">PersonDao</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着在 Spring 的配置文件中进行配置，需要注意此时的类应该是我们的工厂类 <code>PersonDaoFactoryBean</code>，而不是 <code>PersonDaoImpl</code>。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>personDao<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.cunyu.factory.PersonDaoFactoryBean<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后在程序主入口中获取 Bean，然后调用方法即可。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppIoC</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//    加载配置文件，获取 IoC 容器</span>
        <span class="token class-name">ApplicationContext</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;applicationContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//    获取 Bean</span>
        <span class="token class-name">PersonDao</span> personDao <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">PersonDao</span><span class="token punctuation">)</span> app<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;personDao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        personDao<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt=""></p><h2 id="bean-的生命周期" tabindex="-1"><a class="header-anchor" href="#bean-的生命周期" aria-hidden="true">#</a> Bean 的生命周期</h2><p>先来看看生命周期的定义，所谓生命周期就是指从创建到消亡的完整过程，类比到我们人身上，生命周期就是从我们出生到死亡的这个过程。而 Bean 的生命周期就指的是 Bean 从创建到销毁的整体过程。</p><p>Bean 的生命周期主要分为三个阶段：</p><ul><li><strong>初始化容器</strong></li><li><strong>使用 Bean</strong></li><li><strong>销毁容器</strong></li></ul><p>初始化容器阶段，主要执行的操作有：创建对象（内存分配）、执行构造方法、执行属性注入（<code>set</code> 操作）、执行 Bean 初始化方法。</p><p>使用 Bean 阶段，主要是去执行业务操作。</p><p>销毁容器阶段，主要是执行 Bean 的销毁方法。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>以上就是今天关于 Bean 的内容了，主要从 Bean 的别名配置、作用范围、如何进行实例化以及声明周期 4 个方面着手，学习了 Bean 的相关操作。</p>',55);function g(q,y){const t=i("ExternalLinkIcon");return p(),o("div",null,[v,n("p",null,[a("博客："),n("a",m,[a("JavaPark"),c(t)])]),b])}const B=e(r,[["render",g],["__file","20220205-bean.html.vue"]]);export{B as default};
