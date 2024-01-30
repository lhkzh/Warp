import{_ as s,c as i,o as a,U as e}from"./chunks/framework.BouBWMxc.js";const g=JSON.parse('{"title":"Client","description":"","frontmatter":{},"headers":[],"relativePath":"api/1.0/client.md","filePath":"api/1.0/client.md"}'),t={name:"api/1.0/client.md"},l=e(`<h1 id="client" tabindex="-1">Client <a class="header-anchor" href="#client" aria-label="Permalink to &quot;Client&quot;">​</a></h1><p>For Client-sided</p><h2 id="client-1" tabindex="-1"><code>.Client</code> <a class="header-anchor" href="#client-1" aria-label="Permalink to &quot;\`.Client\`&quot;">​</a></h2><p>Create new Warp event.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-WMTa-" id="tab-8fuJBYo" checked="checked"><label for="tab-8fuJBYo">Variable</label><input type="radio" name="group-WMTa-" id="tab-l7wfSlv"><label for="tab-l7wfSlv">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	Identifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Remote </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Warp.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Remote&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><h2 id="connect" tabindex="-1"><code>:Connect</code> <a class="header-anchor" href="#connect" aria-label="Permalink to &quot;\`:Connect\`&quot;">​</a></h2><p>Connect event to receive incoming from server way.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-913OR" id="tab-Xvghcm2" checked="checked"><label for="tab-Xvghcm2">Variable</label><input type="radio" name="group-913OR" id="tab-Qq0qRYq"><label for="tab-Qq0qRYq">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">any) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Connect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(...)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><h2 id="once" tabindex="-1"><code>:Once</code> <a class="header-anchor" href="#once" aria-label="Permalink to &quot;\`:Once\`&quot;">​</a></h2><p>This function likely <code>:Connect</code> but it disconnect the event once it fired.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-7bWhj" id="tab-qg9rt4C" checked="checked"><label for="tab-qg9rt4C">Variable</label><input type="radio" name="group-7bWhj" id="tab-wCFNoJJ"><label for="tab-wCFNoJJ">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">any) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Once</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(...)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><h2 id="disconnect" tabindex="-1"><code>:Disconnect</code> <a class="header-anchor" href="#disconnect" aria-label="Permalink to &quot;\`:Disconnect\`&quot;">​</a></h2><p>Disconnect the event connection.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-jhZf-" id="tab-jQIB7cH" checked="checked"><label for="tab-jQIB7cH">Variable</label><input type="radio" name="group-jhZf-" id="tab-f1J_ZR8"><label for="tab-f1J_ZR8">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> connection </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Connect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player, ...) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- store the key</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Disconnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(connection)</span></span></code></pre></div></div></div><h2 id="disconnectall" tabindex="-1"><code>:DisconnectAll</code> <a class="header-anchor" href="#disconnectall" aria-label="Permalink to &quot;\`:DisconnectAll\`&quot;">​</a></h2><p>Disconnect All the event connection.</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DisconnectAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h2 id="fire" tabindex="-1"><code>:Fire</code> <a class="header-anchor" href="#fire" aria-label="Permalink to &quot;\`:Fire\`&quot;">​</a></h2><p>Fire the event to the spesific server with data.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_QDeh" id="tab-7pHqPfD" checked="checked"><label for="tab-7pHqPfD">Variable</label><input type="radio" name="group-_QDeh" id="tab-iNQzgEZ"><label for="tab-iNQzgEZ">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	reliable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: boolean,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: any</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Fire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This function have rate limiting it self and configured from server.</p></div><h2 id="invoke" tabindex="-1"><code>:Invoke</code> <a class="header-anchor" href="#invoke" aria-label="Permalink to &quot;\`:Invoke\`&quot;">​</a></h2><p>Semiliar to <code>:InvokeServer</code>, its for Invoke to a server.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-OUXOZ" id="tab-3ch63Il" checked="checked"><label for="tab-3ch63Il">Variable</label><input type="radio" name="group-OUXOZ" id="tab-T2WBB5b"><label for="tab-T2WBB5b">Example</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: number,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: any</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">any)</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Request </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Invoke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This function is yielded, once it timeout it will return nil.</p></div><h2 id="wait" tabindex="-1"><code>:Wait</code> <a class="header-anchor" href="#wait" aria-label="Permalink to &quot;\`:Wait\`&quot;">​</a></h2><p>Wait the event being triggered.</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Wait</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This function is yielded, Invoke might also ping this one and also causing error.</p></div><h2 id="destroy" tabindex="-1"><code>:Destroy</code> <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;\`:Destroy\`&quot;">​</a></h2><p>Disconnect all connection of event and remove the event from Warp</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Remote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div>`,32),n=[l];function p(h,k,d,c,o,r){return a(),i("div",null,n)}const u=s(t,[["render",p]]);export{g as __pageData,u as default};