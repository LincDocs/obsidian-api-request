import{_ as t,c as l,d as n,a as s,e as a,b as i,o,r}from"./app-GDRiPp-6.js";const c={},p={href:"https://blacksmithgu.github.io/dataview/",target:"_blank",rel:"noopener noreferrer"};function u(m,e){const d=r("ExternalLinkIcon");return o(),l("div",null,[e[3]||(e[3]=n('<h1 id="👨🏻‍💻-代码块" tabindex="-1"><a class="header-anchor" href="#👨🏻‍💻-代码块"><span>👨🏻‍💻 代码块</span></a></h1><p><code>codeblock</code> 是一个多功能块，可用于用不同语言编写代码。在本例中，我们将使用它来发出请求。</p><h2 id="🏳️-flag" tabindex="-1"><a class="header-anchor" href="#🏳️-flag"><span>🏳️ Flag</span></a></h2><p>Flag是指定请求参数以及我们想要的响应格式的方式。</p><table><thead><tr><th>标志</th><th>默认</th></tr></thead><tbody><tr><td><a href="#url">url</a></td><td></td></tr><tr><td><a href="#method">method</a></td><td>GET</td></tr><tr><td><a href="#body">body</a></td><td></td></tr><tr><td><a href="#headers">headers</a></td><td></td></tr><tr><td><a href="#show">show</a></td><td>ALL</td></tr><tr><td><a href="#format">format</a></td><td><code>{}</code></td></tr><tr><td><a href="#req-id">req-id</a></td><td>req-general</td></tr><tr><td><a href="#disabled">disabled</a></td><td></td></tr><tr><td><a href="#req-repeat">req-repeat</a></td><td>1t@1s</td></tr><tr><td><a href="#notify-if">notify-if</a></td><td></td></tr><tr><td><a href="#save-to">save-to</a></td><td></td></tr><tr><td><a href="#properties">properties</a></td><td></td></tr><tr><td><a href="#render">render</a></td><td>false</td></tr><tr><td><a href="#res-type">res-type</a></td><td></td></tr><tr><td><a href="#maketable">maketable</a></td><td></td></tr></tbody></table><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url"><span>url</span></a></h3><p>是唯一的<strong>必需</strong>标志。它指定请求的端点。可以使用 <code>frontmatter</code> 中定义的变量。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/users/{{this.id}}</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!!! note &quot;其中<code>{{this.id}}</code>是frontmatter中定义的变量（<code>id</code>）。&quot;</p><h3 id="method" tabindex="-1"><a class="header-anchor" href="#method"><span>method</span></a></h3><p>指定请求方法。默认值为 <code>GET</code>，可用值为：</p><ul><li>GET</li><li>POST</li><li>PUT</li><li>DELETE</li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/posts\nmethod: post</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body"><span>body</span></a></h3><p>指定请求的正文。默认值为空对象。数据应为 JSON 格式，双引号用冒号和空格分隔键和值。可以使用 <code>frontmatter</code> 中定义的变量。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/posts\nmethod: post\nbody: {&quot;title&quot;: {{this.title}}, &quot;body&quot;: &quot;bar&quot;, &quot;userId&quot;: 1}</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!!! note &quot;其中 <code>{{this.title}}</code> 是 frontmatter 中定义的变量（<code>title</code>）。&quot;</p><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers"><span>headers</span></a></h3><p>指定请求的标头。默认值为空对象。数据应为 JSON 格式，双引号将键和值用冒号和空格分隔。可以使用 <code>frontmatter</code> 中定义的变量。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/posts\nmethod: post\nheaders: {&quot;Content-type&quot;: &quot;application/json; charset=UTF-8&quot;}</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show" tabindex="-1"><a class="header-anchor" href="#show"><span>show</span></a></h3><p>指定要显示的响应数据。使用右箭头 <code>-&gt;</code> 访问嵌套对象。默认值为 <code>ALL</code>。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req</span>\n<span class="token code-block language-req">url: https://api.chess.com/pub/player/hikaru/stats\nshow: chess_daily -&gt; last -&gt; rating</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过用逗号分隔来显示多个输出。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req</span>\n<span class="token code-block language-req">url: https://api.chess.com/pub/player/hikaru/stats\nshow: chess_daily -&gt; last -&gt; rating, chess_daily -&gt; best -&gt; rating\nformat: &lt;p&gt;Last game: {}&lt;/p&gt; &lt;strong&gt;Best game: {}&lt;/strong&gt;\nrender</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用 <code>{..}</code> 循环遍历数组。以下示例从所有用户中检索城市 (city)。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req</span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/users\nshow: {..} -&gt; address -&gt; city</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用 <code>{n..n}</code> 循环遍历数组中指定数量的元素。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/users\nshow: {0..2} -&gt; address -&gt; city</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用 <code>{n-n-n}</code> 循环遍历数组的指定范围的索引。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/users\nshow: {0-2-1} -&gt; address -&gt; city</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以使用 <code>{-1}</code> 访问最后一个元素...</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req</span>\n<span class="token code-block language-req">url:https://api.modrinth.com/v2/project/distanthorizons\nshow: game_versions -&gt; {-1}</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>...或者使用 <code>{len}</code> 获取数组的长度。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req</span>\n<span class="token code-block language-req">url:https://api.modrinth.com/v2/project/distanthorizons\nshow: game_versions -&gt; {len}</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>{..}</code> 时，若要同时访问多个元素，请使用 <code>&amp;</code> 分隔键，并使用 <code>.</code> 访问值。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&amp;user=rooyca&amp;api_key=API_KEY&amp;format=json&amp;limit=4\nshow: recenttracks -&gt; track -&gt; {..} -&gt; name &amp; artist.#text &amp; streamable\nmaketable: name, artist, stream</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="format" tabindex="-1"><a class="header-anchor" href="#format"><span>format</span></a></h3><p>指定响应应以何种格式显示。默认值为 <code>{}</code>。它可以是任何字符串（包括 <code>markdown</code> 和 <code>html</code>）。如果指定了多个输出，则应指定多种格式，否则，所有输出将应用相同的格式。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/posts/1\nshow: title, body\nformat: &lt;h1&gt;{}&lt;/h1&gt; &lt;p&gt;{}&lt;/p&gt;\nrender</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!!! warning &quot;在此示例中，第一个 <code>{}</code> 将被标题替换，第二个 <code>{}</code> 将被正文替换。&quot;</p><h3 id="req-id" tabindex="-1"><a class="header-anchor" href="#req-id"><span>req-id</span></a></h3><p>指定请求的 ID。默认值为 <code>req-general</code>。当我们想要将响应存储在 <code>localStorage</code> 中并在其他块或注释中使用它时，这很有用。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/users/1\nshow: name\nreq-id: name</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用带有 <code>disabled</code> 标志的 <code>req-id</code> 访问存储的响应（不会触发新请求）。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/users/1\nreq-id: name\ndisabled</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',46)),s("p",null,[e[1]||(e[1]=a("也可以使用 ")),s("a",p,[e[0]||(e[0]=a("dataview")),i(d)]),e[2]||(e[2]=a(" 访问响应。"))]),e[4]||(e[4]=n('<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">dataview</span>\n<span class="token code-block language-dataview">dv.paragraph(localStorage.getItem(&quot;req-name&quot;))</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!!! info &quot;在<code>req-id</code>标志中定义的任何内容之前，必须使用<code>req-</code>&quot;</p><p>要从 localStorage 中删除响应，请运行：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">dataview</span>\n<span class="token code-block language-dataview">localStorage.removeItem(&quot;req-name&quot;)</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要删除所有响应，请转到设置并单击 <code>Clear ID&#39;s</code> (清除ID) 按钮。</p><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><p>禁用请求。如果指定了 <code>req-id</code>，APIR 将在<code>localStorage</code>中检查响应。如果未找到，它将发出新请求并存储它。之后，APIR 将使用存储的响应。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/users/1\nshow: name\nreq-id: name\ndisabled</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="req-repeat" tabindex="-1"><a class="header-anchor" href="#req-repeat"><span>req-repeat</span></a></h3><p>!!! warning &quot;这仅适用于 JSON 响应&quot;</p><p>指定应重复请求的次数以及每次重复之间的间隔。默认值为 <code>1@1</code>（读作 <code>X time(s) every X second(s)</code> (每 X 秒 X 次)）。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: api.coincap.io/v2/rates/bitcoin\nreq-repeat: 5@5\nrender</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="notify-if" tabindex="-1"><a class="header-anchor" href="#notify-if"><span>notify-if</span></a></h3><p>!!! warning &quot;这仅适用于 JSON 响应&quot;</p><p>指定触发通知的条件。可用于监视特定值。用于访问嵌套对象的路径语法与 <code>show</code> 标志不同，这里使用点代替箭头，并且路径中不允许有空格。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: api.coincap.io/v2/rates/bitcoin\nreq-repeat: 5@5\nnotify-if: data.rateUsd &lt; 69889\nrender</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!!! note “在上面的例子中，每次 <code>data.rateUsd</code> 的值小于 <code>69889</code> 时都会触发通知。”</p><h3 id="save-to" tabindex="-1"><a class="header-anchor" href="#save-to"><span>save-to</span></a></h3><p>指定保存响应的路径。它将保存整个响应。需要文件扩展名。它不会创建目录。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/posts/1\nsave-to: posts/1.json</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>properties</span></a></h3><p>!!! warning &quot;要使用此标志，您需要 JSON 响应和 <code>show</code> 标志&quot;</p><p>指定要使用响应更新的前置内容属性。数据应该是用逗号分隔的字符串。要设置内部链接，请使用 <code>[[..]]</code> 语法。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/posts/1\nshow: id, title\nproperties: id, title</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render"><span>render</span></a></h3><p>如果存在，响应将呈现为 HTML。当响应是图像或表格时，它很有用。HTML 经过清理以防止 XSS 攻击。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/photos/1\nshow: url\nformat: ![img]({})\nrender</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="res-type" tabindex="-1"><a class="header-anchor" href="#res-type"><span>res-type</span></a></h2><p>指定响应的类型。如果不存在此标志，插件将尝试根据响应内容类型猜测类型。这可以用作<em>可选的后备功能</em>。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: https://jsonplaceholder.typicode.com/posts/1\nres-type: json</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="maketable" tabindex="-1"><a class="header-anchor" href="#maketable"><span>maketable</span></a></h2><p>将响应转换为表格。当响应是对象数组时，它很有用。此标志需要以逗号分隔的标题列表。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">req </span>\n<span class="token code-block language-req">url: http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&amp;user=rooyca&amp;api_key=API_KEY&amp;format=json&amp;limit=4\nshow: recenttracks -&gt; track -&gt; {..} -&gt; name &amp; artist.#text &amp; streamable\nmaketable: name, artist, stream</span>\n<span class="token punctuation">```</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!!! note &quot;在上面的示例中，响应将转换为带有标题 <code>name</code>, <code>artist</code>, 和 <code>stream</code> 的表格。&quot;</p>',34))])}const h=t(c,[["render",u],["__file","codeblocks.html.vue"]]),g=JSON.parse('{"path":"/docs/zh/codeblocks.html","title":"👨🏻‍💻 代码块","lang":"zh-CN","frontmatter":{"description":"👨🏻‍💻 代码块 codeblock 是一个多功能块，可用于用不同语言编写代码。在本例中，我们将使用它来发出请求。 🏳️ Flag Flag是指定请求参数以及我们想要的响应格式的方式。 url 是唯一的必需标志。它指定请求的端点。可以使用 frontmatter 中定义的变量。 !!! note \\"其中{{this.id}}是frontmatt...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/obsidian-api-request/docs/zh/codeblocks.html"}],["meta",{"property":"og:site_name","content":"obsidian-api-request"}],["meta",{"property":"og:title","content":"👨🏻‍💻 代码块"}],["meta",{"property":"og:description","content":"👨🏻‍💻 代码块 codeblock 是一个多功能块，可用于用不同语言编写代码。在本例中，我们将使用它来发出请求。 🏳️ Flag Flag是指定请求参数以及我们想要的响应格式的方式。 url 是唯一的必需标志。它指定请求的端点。可以使用 frontmatter 中定义的变量。 !!! note \\"其中{{this.id}}是frontmatt..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincDocs"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"👨🏻‍💻 代码块\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/obsidian-api-request/\\"}]}"]]},"headers":[{"level":1,"title":"👨🏻‍💻 代码块","slug":"👨🏻‍💻-代码块","link":"#👨🏻‍💻-代码块","children":[{"level":2,"title":"🏳️ Flag","slug":"🏳️-flag","link":"#🏳️-flag","children":[{"level":3,"title":"url","slug":"url","link":"#url","children":[]},{"level":3,"title":"method","slug":"method","link":"#method","children":[]},{"level":3,"title":"body","slug":"body","link":"#body","children":[]},{"level":3,"title":"headers","slug":"headers","link":"#headers","children":[]},{"level":3,"title":"show","slug":"show","link":"#show","children":[]},{"level":3,"title":"format","slug":"format","link":"#format","children":[]},{"level":3,"title":"req-id","slug":"req-id","link":"#req-id","children":[]},{"level":3,"title":"disabled","slug":"disabled","link":"#disabled","children":[]},{"level":3,"title":"req-repeat","slug":"req-repeat","link":"#req-repeat","children":[]},{"level":3,"title":"notify-if","slug":"notify-if","link":"#notify-if","children":[]},{"level":3,"title":"save-to","slug":"save-to","link":"#save-to","children":[]},{"level":3,"title":"properties","slug":"properties","link":"#properties","children":[]},{"level":3,"title":"render","slug":"render","link":"#render","children":[]}]},{"level":2,"title":"res-type","slug":"res-type","link":"#res-type","children":[]},{"level":2,"title":"maketable","slug":"maketable","link":"#maketable","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.6,"words":1381},"filePathRelative":"docs/zh/codeblocks.md","excerpt":"\\n<p><code>codeblock</code> 是一个多功能块，可用于用不同语言编写代码。在本例中，我们将使用它来发出请求。</p>\\n<h2>🏳️ Flag</h2>\\n<p>Flag是指定请求参数以及我们想要的响应格式的方式。</p>\\n<table>\\n<thead>\\n<tr>\\n<th>标志</th>\\n<th>默认</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><a href=\\"#url\\">url</a></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><a href=\\"#method\\">method</a></td>\\n<td>GET</td>\\n</tr>\\n<tr>\\n<td><a href=\\"#body\\">body</a></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><a href=\\"#headers\\">headers</a></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><a href=\\"#show\\">show</a></td>\\n<td>ALL</td>\\n</tr>\\n<tr>\\n<td><a href=\\"#format\\">format</a></td>\\n<td><code>{}</code></td>\\n</tr>\\n<tr>\\n<td><a href=\\"#req-id\\">req-id</a></td>\\n<td>req-general</td>\\n</tr>\\n<tr>\\n<td><a href=\\"#disabled\\">disabled</a></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><a href=\\"#req-repeat\\">req-repeat</a></td>\\n<td>1t@1s</td>\\n</tr>\\n<tr>\\n<td><a href=\\"#notify-if\\">notify-if</a></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><a href=\\"#save-to\\">save-to</a></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><a href=\\"#properties\\">properties</a></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><a href=\\"#render\\">render</a></td>\\n<td>false</td>\\n</tr>\\n<tr>\\n<td><a href=\\"#res-type\\">res-type</a></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><a href=\\"#maketable\\">maketable</a></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"index","link":"docs/zh/index.html"}],"localMap":{"nodes":[{"id":"docs/zh/codeblocks.md","value":{"title":"codeblocks","path":"docs/zh/codeblocks.md","outlink":[],"backlink":["docs/zh/index.md"]}},{"id":"docs/zh/index.md","value":{"title":"index","path":"docs/zh/index.md","outlink":[],"backlink":[]}}],"links":[{"source":"docs/zh/index.md","target":"docs/zh/codeblocks.md"}]}}}');export{h as comp,g as data};
