import{_ as a,c as e,a as n,o as i}from"./app-vjFV_IuD.js";const l="/obsidian-api-request/assets/data-rendering-BkB5yFnb.jpg",t={};function d(r,s){return i(),e("div",null,s[0]||(s[0]=[n('<h1 id="用例" tabindex="-1"><a class="header-anchor" href="#用例"><span>用例</span></a></h1><p>此插件的用例集合。 <strong>如果您有，请与我们分享。</strong></p><h2 id="渲染-markdown" tabindex="-1"><a class="header-anchor" href="#渲染-markdown"><span>渲染 Markdown</span></a></h2><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>```req</span></span>\n<span class="line"><span>url: https://raw.githubusercontent.com/Rooyca/Rooyca/main/README.md</span></span>\n<span class="line"><span>```</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检查比特币-或任何加密货币-价格" tabindex="-1"><a class="header-anchor" href="#检查比特币-或任何加密货币-价格"><span>检查比特币（或任何加密货币）价格</span></a></h2><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>```req </span></span>\n<span class="line"><span>url: api.coincap.io/v2/rates/bitcoin</span></span>\n<span class="line"><span>show: data -&gt; rateUsd</span></span>\n<span class="line"><span>```</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>64992.8972508856324769</p></blockquote><p>如果我们想每 5 秒重复此请求 100 次，我们可以这样做：</p><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>```req </span></span>\n<span class="line"><span>url: api.coincap.io/v2/rates/bitcoin</span></span>\n<span class="line"><span>show: data -&gt; rateUsd</span></span>\n<span class="line"><span>req-repeat: 100@5</span></span>\n<span class="line"><span>```</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想更进一步，在价格超过 65000 时收到通知，我们可以这样做：</p><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>```req </span></span>\n<span class="line"><span>url: api.coincap.io/v2/rates/bitcoin</span></span>\n<span class="line"><span>show: data -&gt; rateUsd</span></span>\n<span class="line"><span>req-repeat: 100@5</span></span>\n<span class="line"><span>notify-if: data.rateUsd &gt; 65000</span></span>\n<span class="line"><span>```</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!!! warning &quot;请注意使用 <code>data.rateUsd</code> 而不是 <code>data -&gt; rateUsd</code>&quot;</p><h2 id="获取天气" tabindex="-1"><a class="header-anchor" href="#获取天气"><span>获取天气</span></a></h2><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>```req</span></span>\n<span class="line"><span>url: api.openweathermap.org/data/2.5/weather?q=&lt;CITY&gt;&amp;appid=YOUR_API_KEY</span></span>\n<span class="line"><span>show: main -&gt; temp</span></span>\n<span class="line"><span>```</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索电影" tabindex="-1"><a class="header-anchor" href="#搜索电影"><span>搜索电影</span></a></h2><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>```req</span></span>\n<span class="line"><span>url: https://api.themoviedb.org/3/search/movie?query={{this.title}}&amp;api_key=YOUR_API_KEY</span></span>\n<span class="line"><span>show: results -&gt; {..} -&gt; title</span></span>\n<span class="line"><span>```</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!!! info &quot;请注意使用 <code>{{this.title}}</code>。此功能允许您传递前置属性。&quot;</p><h2 id="渲染数据" tabindex="-1"><a class="header-anchor" href="#渲染数据"><span>渲染数据</span></a></h2><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>```req</span></span>\n<span class="line"><span>url: https://mapi.mobilelegends.com/hero/detail?id={{this.file.name}}</span></span>\n<span class="line"><span>show: data -&gt; cover_picture, data -&gt; name, data -&gt; type</span></span>\n<span class="line"><span>format: ![img]({}) &lt;br&gt; **Name:** {} &lt;br&gt; **Type:** {}</span></span>\n<span class="line"><span>render</span></span>\n<span class="line"><span>```</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="'+l+`" alt="data-rendering" loading="lazy"></p><h2 id="从-todoist-获取-todos" tabindex="-1"><a class="header-anchor" href="#从-todoist-获取-todos"><span>从 <a href="https://todoist.com/" target="_blank" rel="noopener noreferrer">todoist</a> 获取 TODOS</span></a></h2><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>\`\`\`req</span></span>
<span class="line"><span>url: https://api.todoist.com/rest/v2/tasks</span></span>
<span class="line"><span>headers: {&quot;Authorization&quot;: &quot;Bearer YOUR_TOKEN&quot;}</span></span>
<span class="line"><span>show: {..} -&gt; content</span></span>
<span class="line"><span>format: - [ ] {}</span></span>
<span class="line"><span>req-id: todos</span></span>
<span class="line"><span>render</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!!! warning &quot;这将把响应保存在 localStorage 中的键 <code>req-todos</code> 下&quot;</p><h2 id="您的用例" tabindex="-1"><a class="header-anchor" href="#您的用例"><span>您的用例</span></a></h2><blockquote><p><strong>如果您想分享您的用例，请随时打开 PR 或 <a href="https://github.com/Rooyca/obsidian-api-request/issues/new/choose" target="_blank" rel="noopener noreferrer">Issue</a>。</strong></p></blockquote>`,25)]))}const o=a(t,[["render",d],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/docs/zh/usecase/","title":"用例","lang":"zh-CN","frontmatter":{"description":"用例 此插件的用例集合。 如果您有，请与我们分享。 渲染 Markdown 检查比特币（或任何加密货币）价格 64992.8972508856324769 如果我们想每 5 秒重复此请求 100 次，我们可以这样做： 如果我们想更进一步，在价格超过 65000 时收到通知，我们可以这样做： !!! warning \\"请注意使用 data.rateUsd...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/obsidian-api-request/docs/zh/usecase/"}],["meta",{"property":"og:site_name","content":"obsidian-api-request"}],["meta",{"property":"og:title","content":"用例"}],["meta",{"property":"og:description","content":"用例 此插件的用例集合。 如果您有，请与我们分享。 渲染 Markdown 检查比特币（或任何加密货币）价格 64992.8972508856324769 如果我们想每 5 秒重复此请求 100 次，我们可以这样做： 如果我们想更进一步，在价格超过 65000 时收到通知，我们可以这样做： !!! warning \\"请注意使用 data.rateUsd..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用例\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/obsidian-api-request/\\"}]}"]]},"headers":[{"level":1,"title":"用例","slug":"用例","link":"#用例","children":[{"level":2,"title":"渲染 Markdown","slug":"渲染-markdown","link":"#渲染-markdown","children":[]},{"level":2,"title":"检查比特币（或任何加密货币）价格","slug":"检查比特币-或任何加密货币-价格","link":"#检查比特币-或任何加密货币-价格","children":[]},{"level":2,"title":"获取天气","slug":"获取天气","link":"#获取天气","children":[]},{"level":2,"title":"搜索电影","slug":"搜索电影","link":"#搜索电影","children":[]},{"level":2,"title":"渲染数据","slug":"渲染数据","link":"#渲染数据","children":[]},{"level":2,"title":"从 todoist 获取 TODOS","slug":"从-todoist-获取-todos","link":"#从-todoist-获取-todos","children":[]},{"level":2,"title":"您的用例","slug":"您的用例","link":"#您的用例","children":[]}]}],"git":{},"readingTime":{"minutes":0.94,"words":281},"filePathRelative":"docs/zh/usecase/index.md","excerpt":"\\n<p>此插件的用例集合。 <strong>如果您有，请与我们分享。</strong></p>\\n<h2>渲染 Markdown</h2>\\n<div class=\\"language-makdown line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"makdown\\" data-title=\\"makdown\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>```req</span></span>\\n<span class=\\"line\\"><span>url: https://raw.githubusercontent.com/Rooyca/Rooyca/main/README.md</span></span>\\n<span class=\\"line\\"><span>```</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"docs/zh/usecase/index.md","value":{"title":"index","path":"docs/zh/usecase/index.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{o as comp,c as data};
