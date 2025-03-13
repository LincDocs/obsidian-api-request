import{_ as s,e as a,f as n,o as i}from"./app-DZbIiTCC.js";const t={};function o(l,e){return i(),a("div",null,e[0]||(e[0]=[n('<h1 id="ejemplos-de-uso" tabindex="-1"><a class="header-anchor" href="#ejemplos-de-uso"><span>Ejemplos de uso</span></a></h1><p>A collection of use cases for this plugin. <strong>If you have a one, please share it with us.</strong><br> Una colección ejemplos de uso para este plugin. <strong>Si tienes uno, por favor compártelo con nosotros.</strong></p><h2 id="ver-el-precio-de-bitcoin-o-cualquier-criptomoneda" tabindex="-1"><a class="header-anchor" href="#ver-el-precio-de-bitcoin-o-cualquier-criptomoneda"><span>Ver el precio de BITCOIN (o cualquier criptomoneda)</span></a></h2><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>```req </span></span>\n<span class="line"><span>url: https://api.coincap.io/v2/rates/bitcoin</span></span>\n<span class="line"><span>show: $.data.rateUsd</span></span>\n<span class="line"><span>```</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>64992.8972508856324769</p></blockquote><h2 id="obtener-el-clima" tabindex="-1"><a class="header-anchor" href="#obtener-el-clima"><span>Obtener el clima</span></a></h2><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>```req</span></span>\n<span class="line"><span>url: https://api.openweathermap.org/data/2.5/weather?q=&lt;CITY&gt;&amp;appid=YOUR_API_KEY</span></span>\n<span class="line"><span>show: $.main.temp</span></span>\n<span class="line"><span>```</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="buscar-peliculas" tabindex="-1"><a class="header-anchor" href="#buscar-peliculas"><span>Buscar peliculas</span></a></h2><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>```req</span></span>\n<span class="line"><span>url: https://api.themoviedb.org/3/search/movie?query={{this.title}}&amp;api_key=YOUR_API_KEY</span></span>\n<span class="line"><span>show: $.results[0:].title</span></span>\n<span class="line"><span>```</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!!! info &quot;Nota el uso de <code>{{this.title}}</code>. Esta es una característica que te permite pasar propiedades del front-matter.&quot;</p><h2 id="obtener-mas-de-un-resultado" tabindex="-1"><a class="header-anchor" href="#obtener-mas-de-un-resultado"><span>Obtener más de un resultado</span></a></h2><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>```req</span></span>\n<span class="line"><span>url: https://mapi.mobilelegends.com/hero/detail?id={{this.file.name}}</span></span>\n<span class="line"><span>show: $.data[cover_picture,name,type]</span></span>\n<span class="line"><span>```</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="obtener-tareas-de-todoist" tabindex="-1"><a class="header-anchor" href="#obtener-tareas-de-todoist"><span>Obtener Tareas de <a href="https://todoist.com/" target="_blank" rel="noopener noreferrer">todoist</a></span></a></h2><div class="language-makdown line-numbers-mode" data-highlighter="shiki" data-ext="makdown" data-title="makdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>```req</span></span>\n<span class="line"><span>url: https://api.todoist.com/rest/v2/tasks</span></span>\n<span class="line"><span>headers: {&quot;Authorization&quot;: &quot;Bearer YOUR_TOKEN&quot;}</span></span>\n<span class="line"><span>show: $..content</span></span>\n<span class="line"><span>req-uuid: todos</span></span>\n<span class="line"><span>```</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!!! warning &quot;Esto guardará la respuesta en localStorage bajo la clave <code>req-todos</code>&quot;</p><h2 id="tu-caso-de-uso" tabindex="-1"><a class="header-anchor" href="#tu-caso-de-uso"><span>Tu caso de uso</span></a></h2><blockquote><p><strong>Si deseas compartir tu caso de uso, por favor siéntete libre de abrir una PR o un <a href="https://github.com/Rooyca/obsidian-api-request/issues/new/choose" target="_blank" rel="noopener noreferrer">Issue</a></strong></p></blockquote>',17)]))}const d=s(t,[["render",o],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/docs/es/usecase/","title":"Ejemplos de uso","lang":"zh-CN","frontmatter":{"description":"Ejemplos de uso A collection of use cases for this plugin. If you have a one, please share it with us. Una colección ejemplos de uso para este plugin. Si tienes uno, por favor c...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/obsidian-api-request/docs/es/usecase/"}],["meta",{"property":"og:site_name","content":"obsidian-api-request"}],["meta",{"property":"og:title","content":"Ejemplos de uso"}],["meta",{"property":"og:description","content":"Ejemplos de uso A collection of use cases for this plugin. If you have a one, please share it with us. Una colección ejemplos de uso para este plugin. Si tienes uno, por favor c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ejemplos de uso\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/obsidian-api-request/\\"}]}"]]},"git":{},"readingTime":{"minutes":0.59,"words":176},"filePathRelative":"docs/es/usecase/index.md","excerpt":"\\n<p>A collection of use cases for this plugin. <strong>If you have a one, please share it with us.</strong><br>\\nUna colección ejemplos de uso para este plugin. <strong>Si tienes uno, por favor compártelo con nosotros.</strong></p>\\n<h2>Ver el precio de BITCOIN (o cualquier criptomoneda)</h2>\\n<div class=\\"language-makdown line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"makdown\\" data-title=\\"makdown\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>```req </span></span>\\n<span class=\\"line\\"><span>url: https://api.coincap.io/v2/rates/bitcoin</span></span>\\n<span class=\\"line\\"><span>show: $.data.rateUsd</span></span>\\n<span class=\\"line\\"><span>```</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"docs/es/usecase/index.md","value":{"title":"index","path":"docs/es/usecase/index.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{d as comp,p as data};
