import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.419948d5.js";const u=JSON.parse('{"title":"Client","description":"","frontmatter":{},"headers":[],"relativePath":"api/1.0/client.md","filePath":"api/1.0/client.md"}'),l={name:"api/1.0/client.md"},o=e(`<h1 id="client" tabindex="-1">Client <a class="header-anchor" href="#client" aria-label="Permalink to &quot;Client&quot;">​</a></h1><p>A Client-sided Connection</p><h2 id="new" tabindex="-1"><code>.new</code> <a class="header-anchor" href="#new" aria-label="Permalink to &quot;\`.new\`&quot;">​</a></h2><p>Create new FastNet2 event</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">Identifier</span><span style="color:#E1E4E8;">: string</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">Identifier</span><span style="color:#24292E;">: string</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><p>Identifier will converte/encode into hash identifier</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> Remote </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> FastNet2.</span><span style="color:#79B8FF;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Remote&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> Remote </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> FastNet2.</span><span style="color:#005CC5;">new</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Remote&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="connect-or-listen" tabindex="-1"><code>:Connect</code> or <code>:Listen</code> <a class="header-anchor" href="#connect-or-listen" aria-label="Permalink to &quot;\`:Connect\` or \`:Listen\`&quot;">​</a></h2><p>Listen an event from the server to receive, <code>:Connect</code> and <code>:Listen</code> is the same function.</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">: (</span><span style="color:#79B8FF;">...</span><span style="color:#E1E4E8;">any) </span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;"> ()</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">callback</span><span style="color:#24292E;">: (</span><span style="color:#005CC5;">...</span><span style="color:#24292E;">any) </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> ()</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><p>Each event only allowed have one callback.</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Remote</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">Connect</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(...)</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">...</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">end</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Remote</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">Connect</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(...)</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">...</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">end</span><span style="color:#24292E;">)</span></span></code></pre></div><p>to know if the event is connected or not by doing <code>.Connected</code></p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(Remote.</span><span style="color:#B392F0;">Connected</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(Remote.</span><span style="color:#6F42C1;">Connected</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="disconnect" tabindex="-1"><code>:Disconnect</code> <a class="header-anchor" href="#disconnect" aria-label="Permalink to &quot;\`:Disconnect\`&quot;">​</a></h2><p>Disconnect the event</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Remote</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">Disconnect</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Remote</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">Disconnect</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="fire" tabindex="-1"><code>:Fire</code> <a class="header-anchor" href="#fire" aria-label="Permalink to &quot;\`:Fire\`&quot;">​</a></h2><p>Fire the event to the server with data.</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">...</span><span style="color:#E1E4E8;">: any</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">...</span><span style="color:#24292E;">: any</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Remote</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">Fire</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Hello World!&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Remote</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">Fire</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello World!&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This function have rate limiting to prevent spamming</p></div><h2 id="pull" tabindex="-1"><code>:Pull</code> <a class="header-anchor" href="#pull" aria-label="Permalink to &quot;\`:Pull\`&quot;">​</a></h2><p>Pull is a function that invoke to server.</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">timeout</span><span style="color:#E1E4E8;">: number,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">...</span><span style="color:#E1E4E8;">: any</span></span>
<span class="line"><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">...</span><span style="color:#E1E4E8;">any)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">timeout</span><span style="color:#24292E;">: number,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">...</span><span style="color:#24292E;">: any</span></span>
<span class="line"><span style="color:#24292E;">) </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">...</span><span style="color:#24292E;">any)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> Request </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Remote</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">Pull</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Hello World!&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> Request </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Remote</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">Pull</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Hello World!&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This function is yielded, and the minimum for timeout is 2 (seconds)</p></div><h2 id="wait" tabindex="-1"><code>:Wait</code> <a class="header-anchor" href="#wait" aria-label="Permalink to &quot;\`:Wait\`&quot;">​</a></h2><p>Wait the event that triggered/pinged</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Remote</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">Wait</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Remote</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">Wait</span><span style="color:#24292E;">()</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This function is yielded</p></div><h2 id="destroy" tabindex="-1"><code>:Destroy</code> <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;\`:Destroy\`&quot;">​</a></h2><p>Disconnect the event and Remove the event from FastNet2</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Remote</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">Destroy</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Remote</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">Destroy</span><span style="color:#24292E;">()</span></span></code></pre></div>`,34),p=[o];function t(c,r,i,d,y,E){return a(),n("div",null,p)}const g=s(l,[["render",t]]);export{u as __pageData,g as default};
