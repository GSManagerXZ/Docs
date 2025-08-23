import{_ as s,c as e,a,o as i}from"./app-Czf816Nd.js";const l={};function p(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<blockquote><p>此问题已于3.3.0版本中在程序运行时会自动检测并生成 <code>.env</code> 文件，无需手动创建。</p></blockquote><p>由于 Github CLI 在自动构建时，会将默认的 <code>.env</code> 文件在上传时删除，所以配置文件需要各位手动上传到面板目录下的 <code>server/</code> 目录下。</p><p><a href="http://langlangy.server.xiaozhuhouses.asia:8082/disk1/GSM3/.env" target="_blank" rel="noopener noreferrer">点击这里下载配置文件</a></p><blockquote><p><strong>注意：</strong></p><ul><li>浏览器默认打开会显示内容，使用 <code>Ctrl + S</code> 可以直接保存到面板 <code>server</code> 目录下。</li><li>您也可以复制下方配置文件内容，手动创建 <code>.env</code> 文件。</li></ul></blockquote><div class="language-env line-numbers-mode" data-highlighter="shiki" data-ext="env" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-env"><span class="line"><span># GSM3 游戏服务器管理系统配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 服务器端口配置</span></span>
<span class="line"><span># 后端 API 服务端口</span></span>
<span class="line"><span>SERVER_PORT=3001</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 前端开发服务端口（仅开发环境使用）</span></span>
<span class="line"><span>CLIENT_PORT=5173</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 环境配置</span></span>
<span class="line"><span>NODE_ENV=development</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志配置</span></span>
<span class="line"><span>LOG_LEVEL=info</span></span>
<span class="line"><span></span></span>
<span class="line"><span># CORS 配置</span></span>
<span class="line"><span># 前端访问地址（开发环境）</span></span>
<span class="line"><span>CLIENT_URL=http://localhost:5173</span></span>
<span class="line"><span># 允许的前端访问地址，生产环境请修改为实际域名</span></span>
<span class="line"><span>CORS_ORIGIN=*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Socket.IO 配置</span></span>
<span class="line"><span>SOCKET_CORS_ORIGIN=*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 数据目录</span></span>
<span class="line"><span>DATA_DIR=./data</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志目录</span></span>
<span class="line"><span>LOG_DIR=./logs</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 说明：</span></span>
<span class="line"><span># 1. 修改 SERVER_PORT 可以更改后端服务端口</span></span>
<span class="line"><span># 2. 生产环境部署时，请将 CORS_ORIGIN 和 SOCKET_CORS_ORIGIN 设置为实际的前端访问地址</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=s(l,[["render",p]]),d=JSON.parse('{"path":"/%E9%83%A8%E7%BD%B2/%E9%9D%A2%E6%9D%BF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.html","title":"面板配置文件","lang":"zh-CN","frontmatter":{"title":"面板配置文件","icon":"fa-file-text","order":2,"description":"此问题已于3.3.0版本中在程序运行时会自动检测并生成 .env 文件，无需手动创建。 由于 Github CLI 在自动构建时，会将默认的 .env 文件在上传时删除，所以配置文件需要各位手动上传到面板目录下的 server/ 目录下。 点击这里下载配置文件 注意： 浏览器默认打开会显示内容，使用 Ctrl + S 可以直接保存到面板 server ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面板配置文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-07-25T11:02:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yxsj245\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/%E9%83%A8%E7%BD%B2/%E9%9D%A2%E6%9D%BF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"GSManager"}],["meta",{"property":"og:title","content":"面板配置文件"}],["meta",{"property":"og:description","content":"此问题已于3.3.0版本中在程序运行时会自动检测并生成 .env 文件，无需手动创建。 由于 Github CLI 在自动构建时，会将默认的 .env 文件在上传时删除，所以配置文件需要各位手动上传到面板目录下的 server/ 目录下。 点击这里下载配置文件 注意： 浏览器默认打开会显示内容，使用 Ctrl + S 可以直接保存到面板 server ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-07-25T11:02:17.000Z"}],["meta",{"property":"article:modified_time","content":"2025-07-25T11:02:17.000Z"}]]},"git":{"createdTime":1753280788000,"updatedTime":1753441337000,"contributors":[{"name":"小朱","username":"","email":"10714957+xiao-zhu245@user.noreply.gitee.com","commits":3}]},"readingTime":{"minutes":1.04,"words":313},"filePathRelative":"部署/面板配置文件.md","autoDesc":true}');export{r as comp,d as data};
