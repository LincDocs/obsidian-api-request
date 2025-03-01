import{_ as l,c as d,a as n,b as i,f as s,d as o,e as t,r,o as c}from"./app-vjFV_IuD.js";const u={};function p(m,e){const a=r("RouteLink");return c(),d("div",null,[e[16]||(e[16]=n('<h1 id="🔎-apirequest" tabindex="-1"><a class="header-anchor" href="#🔎-apirequest"><span>🔎 APIRequest</span></a></h1><p>APIRequest (APIR) es un plugin para <a href="https://obsidian.md/" target="_blank" rel="noopener noreferrer">Obsidian</a> que te permite realizar solicitudes HTTP y mostrar la respuesta en tus notas.</p><h2 id="🔥-caracteristicas" tabindex="-1"><a class="header-anchor" href="#🔥-caracteristicas"><span>🔥 Características</span></a></h2><ul><li>Realiza solicitudes HTTP utilizando varios métodos como <code>GET</code>, <code>POST</code>, <code>PUT</code> y <code>DELETE</code>.</li><li>Recibe respuestas en diferentes formatos incluyendo JSON, HTML y Markdown.</li><li>Utiliza variables del front-matter dentro de bloques de código.</li><li>Guarda respuestas en <code>localStorage</code> para un acceso y reutilización convenientes.</li><li>Desactiva bloques de código según sea necesario para optimizar el rendimiento.</li><li>Repite solicitudes múltiples veces a intervalos especificados, facilitando tareas automatizadas o la recuperación continua de datos sin intervención manual.</li><li>Recibe notificaciones cuando los valores específicos cumplen condiciones predefinidas, permitiendo monitoreo proactivo y alertas.</li><li>Define combinaciones de teclas para ejecutar solicitudes, mejorando la eficiencia y la experiencia del usuario al permitir acceso rápido a solicitudes frecuentemente utilizadas.</li><li>Muestra valores específicos de las respuestas, proporcionando un control detallado sobre la presentación de datos.</li></ul><h2 id="⚡-como-usar" tabindex="-1"><a class="header-anchor" href="#⚡-como-usar"><span>⚡ Cómo usar</span></a></h2><h3 id="👨🏻‍💻-bloque-de-codigo" tabindex="-1"><a class="header-anchor" href="#👨🏻‍💻-bloque-de-codigo"><span>👨🏻‍💻 Bloque de código</span></a></h3>',6)),i("p",null,[e[1]||(e[1]=s("Para usarlo, crea un bloque de código con el lenguaje establecido en ")),e[2]||(e[2]=i("code",null,"req",-1)),e[3]||(e[3]=s(". Dentro del bloque de código, puedes especificar ")),e[4]||(e[4]=i("code",null,"url",-1)),e[5]||(e[5]=s(", ")),e[6]||(e[6]=i("code",null,"method",-1)),e[7]||(e[7]=s(", ")),e[8]||(e[8]=i("code",null,"body",-1)),e[9]||(e[9]=s(", ")),e[10]||(e[10]=i("code",null,"headers",-1)),e[11]||(e[11]=s(", ")),e[12]||(e[12]=i("code",null,"format",-1)),e[13]||(e[13]=s(", etc. Consulta las ")),o(a,{to:"/docs/es/codeblocks.html#flags"},{default:t(()=>e[0]||(e[0]=[s("banderas disponibles")])),_:1}),e[14]||(e[14]=s(" para más información."))]),e[17]||(e[17]=n(`<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`req</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">url: https://my-json-server.typicode.com/typicode/demo/comments</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">method: post</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">body: {&quot;id&quot;:1}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">headers: {&quot;Accept&quot;: &quot;application/json&quot;}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">show: id</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">format: &lt;h1&gt;{}&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">req-id: id-persona</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">disabled</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🛠️-configuraciones-no-todas-las-funcionalidades-estan-disponibles" tabindex="-1"><a class="header-anchor" href="#🛠️-configuraciones-no-todas-las-funcionalidades-estan-disponibles"><span>🛠️ Configuraciones (no todas las funcionalidades están disponibles)</span></a></h3><p>!!! info &quot;Todos los parámetros se pueden definir en la configuración.&quot;</p><p>Presiona <code>Ctrl+P</code> y busca <code>APIR</code>. Hay dos opciones:</p><ol><li>Mostrar respuesta en modal</li><li>Pegar respuesta en el documento actual (en la línea actual)</li></ol>`,5)),i("p",null,[o(a,{to:"/docs/es/settings.html"},{default:t(()=>e[15]||(e[15]=[s("Más información")])),_:1})])])}const g=l(u,[["render",p],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/docs/es/","title":"🔎 APIRequest","lang":"zh-CN","frontmatter":{"description":"🔎 APIRequest APIRequest (APIR) es un plugin para Obsidian que te permite realizar solicitudes HTTP y mostrar la respuesta en tus notas. 🔥 Características Realiza solicitudes H...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/obsidian-api-request/docs/es/"}],["meta",{"property":"og:site_name","content":"obsidian-api-request"}],["meta",{"property":"og:title","content":"🔎 APIRequest"}],["meta",{"property":"og:description","content":"🔎 APIRequest APIRequest (APIR) es un plugin para Obsidian que te permite realizar solicitudes HTTP y mostrar la respuesta en tus notas. 🔥 Características Realiza solicitudes H..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🔎 APIRequest\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/obsidian-api-request/\\"}]}"]]},"headers":[{"level":1,"title":"🔎 APIRequest","slug":"🔎-apirequest","link":"#🔎-apirequest","children":[{"level":2,"title":"🔥 Características","slug":"🔥-caracteristicas","link":"#🔥-caracteristicas","children":[]},{"level":2,"title":"⚡ Cómo usar","slug":"⚡-como-usar","link":"#⚡-como-usar","children":[{"level":3,"title":"👨🏻‍💻 Bloque de código","slug":"👨🏻‍💻-bloque-de-codigo","link":"#👨🏻‍💻-bloque-de-codigo","children":[]},{"level":3,"title":"🛠️ Configuraciones (no todas las funcionalidades están disponibles)","slug":"🛠️-configuraciones-no-todas-las-funcionalidades-estan-disponibles","link":"#🛠️-configuraciones-no-todas-las-funcionalidades-estan-disponibles","children":[]}]}]}],"git":{},"readingTime":{"minutes":0.87,"words":261},"filePathRelative":"docs/es/index.md","excerpt":"\\n<p>APIRequest (APIR) es un plugin para <a href=\\"https://obsidian.md/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Obsidian</a> que te permite realizar solicitudes HTTP y mostrar la respuesta en tus notas.</p>\\n<h2>🔥 Características</h2>\\n<ul>\\n<li>Realiza solicitudes HTTP utilizando varios métodos como <code>GET</code>, <code>POST</code>, <code>PUT</code> y <code>DELETE</code>.</li>\\n<li>Recibe respuestas en diferentes formatos incluyendo JSON, HTML y Markdown.</li>\\n<li>Utiliza variables del front-matter dentro de bloques de código.</li>\\n<li>Guarda respuestas en <code>localStorage</code> para un acceso y reutilización convenientes.</li>\\n<li>Desactiva bloques de código según sea necesario para optimizar el rendimiento.</li>\\n<li>Repite solicitudes múltiples veces a intervalos especificados, facilitando tareas automatizadas o la recuperación continua de datos sin intervención manual.</li>\\n<li>Recibe notificaciones cuando los valores específicos cumplen condiciones predefinidas, permitiendo monitoreo proactivo y alertas.</li>\\n<li>Define combinaciones de teclas para ejecutar solicitudes, mejorando la eficiencia y la experiencia del usuario al permitir acceso rápido a solicitudes frecuentemente utilizadas.</li>\\n<li>Muestra valores específicos de las respuestas, proporcionando un control detallado sobre la presentación de datos.</li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[{"title":"codeblocks","link":"docs/es/codeblocks.html"},{"title":"settings","link":"docs/es/settings.html"}],"backlink":[],"localMap":{"nodes":[{"id":"docs/es/index.md","value":{"title":"index","path":"docs/es/index.md","outlink":["docs/es/codeblocks.md","docs/es/settings.md"],"backlink":[]}},{"id":"docs/es/codeblocks.md","value":{"title":"codeblocks","path":"docs/es/codeblocks.md","outlink":[],"backlink":[]}},{"id":"docs/es/settings.md","value":{"title":"settings","path":"docs/es/settings.md","outlink":[],"backlink":[]}}],"links":[{"source":"docs/es/index.md","target":"docs/es/codeblocks.md"},{"source":"docs/es/index.md","target":"docs/es/settings.md"}]}}}');export{g as comp,h as data};
