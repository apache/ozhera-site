import{_ as l,a as e,b as o,c as p,d as t,e as r,f as c,g as E,h as i,i as y,j as d,k as m,l as h,m as u,n as _,o as g,p as F,q,r as k,s as b,t as A,u as D,v as P,w as v,x,y as C,z as O,A as f,B as N}from"./chunks/hera-dash3.0be27f14.js";import{_ as j,o as S,c as T,Q as n,k as s,a}from"./chunks/framework.4fd28da9.js";const Y=JSON.parse('{"title":"Apache OzHera(Incubating)接入文档","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"zh/docs/application-integration.md","filePath":"zh/docs/application-integration.md"}'),M={name:"zh/docs/application-integration.md"},B=n('<h1 id="apache-ozhera-incubating-接入文档" tabindex="-1">Apache OzHera(Incubating)接入文档 <a class="header-anchor" href="#apache-ozhera-incubating-接入文档" aria-label="Permalink to &quot;Apache OzHera(Incubating)接入文档&quot;">​</a></h1><h2 id="应用部署的依赖" tabindex="-1">应用部署的依赖 <a class="header-anchor" href="#应用部署的依赖" aria-label="Permalink to &quot;应用部署的依赖&quot;">​</a></h2><p>接入Apache OzHera(Incubating)的应用，需要依赖探针、jvm参数、环境变量以及log-agent服务</p><h3 id="_1、探针" tabindex="-1">1、探针 <a class="header-anchor" href="#_1、探针" aria-label="Permalink to &quot;1、探针&quot;">​</a></h3><p>探针在构建完成后最终会得到一个opentelemetry相关的jar，我们需要在部署项目时，将jar文件放到服务器上。这是为了在jvm参数中，能够通过-javaagent使用到探针。我们基于开源版本默认打包了一版探针，可以直接使用：</p><h3 id="_2、jvm参数" tabindex="-1">2、jvm参数 <a class="header-anchor" href="#_2、jvm参数" aria-label="Permalink to &quot;2、jvm参数&quot;">​</a></h3><p>先取用户主动设置的，为空取Nacos中DataId为<code>hera_javaagent_config</code>中配置的值，为空则设置默认值。必填项需要用户手动设置，不设置可能会导致探针无法生效。</p>',7),I=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"变量名"),s("th",{style:{"text-align":"center"}},"是否必填"),s("th",null,"默认值"),s("th",null,"备注")])]),s("tbody",null,[s("tr",null,[s("td",null,"-javaagent:/opt/soft/opentelemetry-javaagent-all-0.0.1.jar"),s("td",{style:{"text-align":"center"}},"是"),s("td"),s("td",null,[a("用于表示javaagent探针jar包在服务器上的位置，"),s("br"),a("我们一般习惯将探针的jar文件更名为opentelemetry-javaagent-all-0.0.1.jar，并放在服务器/opt/soft目录下。")])]),s("tr",null,[s("td",{nacosurl:""},"-Dotel.exporter.prometheus.nacos.addr=$"),s("td",{style:{"text-align":"center"}},"是"),s("td"),s("td",null,"Nacos地址")]),s("tr",null,[s("td",null,"-Dotel.resource.attributes=service.name=1-test"),s("td",{style:{"text-align":"center"}},"否"),s("td",null,"none"),s("td",null,[a("用于表示当前服务的应用名。格式是appId-appName。eg：1-test，1是 appId，test是appName。"),s("br"),a("如果为空，程序⾥默认使⽤none。应⽤是Hera中⾮常重要的元数据，可观测数据展⽰都与应⽤有关。")])]),s("tr",null,[s("td",null,"-Dotel.traces.exporter=log4j2"),s("td",{style:{"text-align":"center"}},"否"),s("td",null,"log4j2"),s("td",null,"用于表示trace export方式，是通过log4j2将trace输出到日志文件中，默认使用log4j2")]),s("tr",null,[s("td",null,"-Dotel.exporter.log.isasync=true"),s("td",{style:{"text-align":"center"}},"否"),s("td",null,"true"),s("td",null,[a("用于表示是否开log4j2启异步日志，一般出于性能考虑，会是true，只有在"),s("code",null,"-Dotel.traces.exporter"),a("值为"),s("code",null,"log4j2"),a("时生效。")])]),s("tr",null,[s("td",null,"-Dotel.metrics.exporter=prometheus"),s("td",{style:{"text-align":"center"}},"否"),s("td",null,"prometheus"),s("td",null,"用于表示metrics export方式。默认使用prometheus")]),s("tr",null,[s("td",null,"-Dotel.javaagent.exclude-classes=com.dianping.cat.*"),s("td",{style:{"text-align":"center"}},"否"),s("td",null,"com.dianping.cat.*"),s("td",null,"过滤不被探针拦截的包。如果使用到了cat，需要将cat所在的目录进行过滤")]),s("tr",null,[s("td",null,"-Dotel.exporter.log.pathprefix=/home/work/log/"),s("td",{style:{"text-align":"center"}},"否"),s("td",null,"/home/work/log/"),s("td",null,[a("用于表示log4j2的日志位置。"),s("br"),a("这里log4j2的日志会优先输出到名为MIONE_LOG_PATH的环境变量所表示的位置，如果没有这个环境变量，则会输出到"),s("code",null,"-Dotel.exporter.log.pathprefix"),a(" / "),s("code",null,"MIONE_PROJECT_NAME"),a("目录下。"),s("br"),a("注意：k8s中，需要将此目录挂载出来，以供日志采集容器能够访问到。")])]),s("tr",null,[s("td",null,"-Dotel.propagators=tracecontext"),s("td",{style:{"text-align":"center"}},"否"),s("td",null,"tracecontext"),s("td",null,"用于表示trace传输的处理类型，目前只用到了tracecontext")])])],-1),z=n(`<h3 id="_3、环境变量" tabindex="-1">3、环境变量 <a class="header-anchor" href="#_3、环境变量" aria-label="Permalink to &quot;3、环境变量&quot;">​</a></h3><p>先取用户主动设置的，为空取Nacos中DataId为<code>hera_javaagent_config</code>中配置的值，为空则设置默认值。必填项需要用户手动设置，不设置可能会导致探针无法生效。</p><table><thead><tr><th>变量名</th><th style="text-align:center;">是否必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td>MIONE_PROJECT_ENV_NAME</td><td style="text-align:center;">是</td><td>default</td><td>当前部署环境的名称，eg：dev、uat、st、preview、production。如不填，默认使用default。</td></tr><tr><td>MIONE_PROJECT_ENV_ID</td><td style="text-align:center;">是</td><td></td><td>当前部署环境的ID。环境id与环境名称，在Hera的指标监控中可以根据不同环境来看监控图表。</td></tr><tr><td>MIONE_PROJECT_NAME</td><td style="text-align:center;">是</td><td>none</td><td>用于表示当前服务的应用名。格式是appId-appName。eg：1-test，1是 appId，test是appName。如果为空，程序⾥默认使⽤none。应⽤是Hera中⾮常重要的元数据，可观测数据展⽰都与应⽤有关。</td></tr><tr><td>host.ip</td><td style="text-align:center;">否</td><td></td><td>用于记录当前物理机IP，展示在trace的process.tags里。在k8s里获取的是pod的IP。在K8s中，使用ozhera-operator部署时，会由webhook自动生成该环境变量</td></tr><tr><td>node.ip</td><td style="text-align:center;">否</td><td></td><td>用于记录k8s当前node节点的IP，非k8s部署则不用设置。在K8s中，使用ozhera-operator部署时，会由webhook自动生成该环境变量</td></tr><tr><td>JAVAAGENT_PROMETHEUS_PORT</td><td style="text-align:center;">否</td><td>55433</td><td>当前物理机可用端口号，用于提供给Prometheus拉取jvm metrics的httpServer使用。如果为空，程序里默认使用55433。</td></tr><tr><td>hera.buildin.k8s</td><td style="text-align:center;">否</td><td>1</td><td>用于记录是否是k8s部署的服务，如果是k8s的服务，标记为1。如果非k8s部署，可以设置为2。默认为1。如果本地调试，可以设置2。</td></tr><tr><td>application</td><td style="text-align:center;">否</td><td></td><td>是将<code>MIONE_PROJECT_NAME</code>的值所有中划线，转为下划线，用于容器监控的扩展指。在K8s中，使用ozhera-operator部署时，会由webhook自动生成该环境变量</td></tr><tr><td>serverEnv</td><td style="text-align:center;">否</td><td></td><td>与MIONE_PROJECT_ENV_NAME的值相同，用于容器监控的扩展指标。在K8s中，使用ozhera-operator部署时，会由webhook自动生成该环境变量</td></tr></tbody></table><h3 id="_4、log-agent" tabindex="-1">4、log-agent <a class="header-anchor" href="#_4、log-agent" aria-label="Permalink to &quot;4、log-agent&quot;">​</a></h3><p>目前Hera的trace、log都使用log-agent来收集，log-agent需要以sidecar的方式与应用部署在同一容器中，并且需要被采集的日志文件目录与trace日志目录同时挂载出来，以能够被log-agent采集。</p><h3 id="_5、应用dockerfile与k8s-yaml文件示例" tabindex="-1">5、应用Dockerfile与K8S yaml文件示例 <a class="header-anchor" href="#_5、应用dockerfile与k8s-yaml文件示例" aria-label="Permalink to &quot;5、应用Dockerfile与K8S yaml文件示例&quot;">​</a></h3><p>下面是我们demo项目所使用的dockerfile与k8s的yaml文件，可以参考一下ozhera-demo-client应用中关于探针、jvm、环境变量与log-agent的配置</p><p>Dockerfile</p><div class="language-Dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> openjdk:8-jre</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> ./ozhera-demo-client-1.0.0-SNAPSHOT.jar /home/work/ozhera-demo-client-1.0.0-SNAPSHOT.jar</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> ./opentelemetry-javaagent-0.1.0-SNAPSHOT-all.jar /opt/soft/opentelemetry-javaagent-0.1.0-SNAPSHOT-all.jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">ENTRYPOINT</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;java&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;-javaagent:/opt/soft/opentelemetry-javaagent-0.1.0-SNAPSHOT-all.jar&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;-Dotel.exporter.prometheus.nacos.addr=nacos:80&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;-Xloggc:/home/work/log/gc.log&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;-Duser.timezone=Asia/Shanghai&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;-XX:+HeapDumpOnOutOfMemoryError&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;-XX:HeapDumpPath=/home/dum/oom.dump&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;-jar&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;/home/work/ozhera-demo-client-1.0.0-SNAPSHOT.jar&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;&amp;&amp;&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;tail&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;-f&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;/dev/null&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> openjdk:8-jre</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> ./ozhera-demo-client-1.0.0-SNAPSHOT.jar /home/work/ozhera-demo-client-1.0.0-SNAPSHOT.jar</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> ./opentelemetry-javaagent-0.1.0-SNAPSHOT-all.jar /opt/soft/opentelemetry-javaagent-0.1.0-SNAPSHOT-all.jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">ENTRYPOINT</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;java&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;-javaagent:/opt/soft/opentelemetry-javaagent-0.1.0-SNAPSHOT-all.jar&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;-Dotel.exporter.prometheus.nacos.addr=nacos:80&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;-Xloggc:/home/work/log/gc.log&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;-Duser.timezone=Asia/Shanghai&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;-XX:+HeapDumpOnOutOfMemoryError&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;-XX:HeapDumpPath=/home/dum/oom.dump&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;-jar&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;/home/work/ozhera-demo-client-1.0.0-SNAPSHOT.jar&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;&amp;&amp;&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;tail&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;-f&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;/dev/null&quot;</span><span style="color:#24292E;">]</span></span></code></pre></div><p>K8S yaml</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">apps/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deployment</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ozhera-demo-client</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">demo</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ozhera-demo-client</span></span>
<span class="line"><span style="color:#85E89D;">spec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">replicas</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">selector</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">matchLabels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ozhera-demo-client</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ozhera-demo-client</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">spec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">containers</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">hera-demo-client-container</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">demo/hera-demo-client:v1</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">MIONE_PROJECT_ENV_NAME</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">value</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">dev</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">MIONE_PROJECT_ENV_ID</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">value</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">MIONE_PROJECT_NAME</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">value</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">2-hera-demo-client</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">volumeMounts</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">log-path</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">mountPath</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/home/work/log</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">limits</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">cpu</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;500m&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">memory</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">2Gi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">log-agent</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">demo/log-agent:v1</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">volumeMounts</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">mountPath</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/home/work/log&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">log-path</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">limits</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">cpu</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;300m&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">memory</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">1Gi</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">log-path</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">emptyDir</span><span style="color:#E1E4E8;">: {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">apps/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deployment</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ozhera-demo-client</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">demo</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ozhera-demo-client</span></span>
<span class="line"><span style="color:#22863A;">spec</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">replicas</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">selector</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">matchLabels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ozhera-demo-client</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">template</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ozhera-demo-client</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">spec</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">containers</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">hera-demo-client-container</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">demo/hera-demo-client:v1</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">MIONE_PROJECT_ENV_NAME</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">value</span><span style="color:#24292E;">: </span><span style="color:#032F62;">dev</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">MIONE_PROJECT_ENV_ID</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">value</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;2&#39;</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">MIONE_PROJECT_NAME</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">value</span><span style="color:#24292E;">: </span><span style="color:#032F62;">2-hera-demo-client</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">volumeMounts</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">log-path</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">mountPath</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/home/work/log</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">limits</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">cpu</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;500m&#39;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">memory</span><span style="color:#24292E;">: </span><span style="color:#032F62;">2Gi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">log-agent</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">demo/log-agent:v1</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">volumeMounts</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">mountPath</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/home/work/log&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">log-path</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">limits</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">cpu</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;300m&#39;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">memory</span><span style="color:#24292E;">: </span><span style="color:#032F62;">1Gi</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">log-path</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">emptyDir</span><span style="color:#24292E;">: {}</span></span></code></pre></div><h2 id="录入tpc" tabindex="-1">录入TPC <a class="header-anchor" href="#录入tpc" aria-label="Permalink to &quot;录入TPC&quot;">​</a></h2><p>Hera通过TPC系统来录入、同步、管理应用的元数据信息，以及应用与人的权限关系</p><h3 id="_1、注册并登录tpc" tabindex="-1">1、注册并登录tpc <a class="header-anchor" href="#_1、注册并登录tpc" aria-label="Permalink to &quot;1、注册并登录tpc&quot;">​</a></h3><p>我们需要访问通过ozhera-operator生成的tpc的页面链接</p><p><img src="`+l+'" alt="operator-url"></p><p>未登录访问时，会跳转到tpc登录页面，如果是第一次访问，我们需要先注册tpc超级管理员账号，该账号用于创建项目、授权等操作。超级管理员账号名必须为：tpc@tpc.com，密码可以自定义。注册完成后，我们使用tpc@tpc.com进行登录。</p><p><img src="'+e+'" alt="tpc-login"></p><h3 id="_2、录入应用" tabindex="-1">2、录入应用 <a class="header-anchor" href="#_2、录入应用" aria-label="Permalink to &quot;2、录入应用&quot;">​</a></h3><p>登录成功后，就进入了tpc的首页。在tpc首页的节点信息--子节点中，默认会创建一个名为hera的节点，这个节点是项目组，接入Hera的应用需要先在这个项目组下维护应用信息。</p><p><img src="'+o+'" alt="tpc-node1"></p><p>点击hera节点，进入hera项目组中。hera项目组中默认会创建logger项目，这个项目是用于Hera日志中，我们可以忽略。点击图中标注的“添加”按钮，会弹出创建项目的弹框。</p><p><img src="'+p+'" alt="tpc-node2"></p><p>节点类型选择“项目”，节点名称就填写我们的应用名称，管理员就填写当前应用的成员账号，当然，这个账号需要提前在tpc上注册。 我们录入应用信息时，需要分两种情况：</p><p>一是，我们目前已经有了应用的数据，并且应用的数据中有id，此时我们可以通过在tpc维护外部节点id，来将我们已有的应用id录入。这里我使用之前“一、应用部署的依赖”中的“应用Dockerfile与K8s yaml文件示例”中的应用来进行录入，如下图所示：</p><p><img src="'+t+'" alt="tpc-add-node1"></p><p>二是，我们目前只有应用的名称，但是没有应用的id，此时我们不需要填写“外部节点类型”与“外部节点ID”，tpc在创建应用之后，会自动生成该应用的id，点击该应用节点详情按钮，在该应用“节点信息”中，我们可以看到该应用的id。如下图所示：</p><p><img src="'+r+'" alt="tpc-add-node2"></p><p><img src="'+c+'" alt="tpc-node-id1"></p><p><img src="'+E+'" alt="tpc-node-id2"></p><p>不管是哪种情况，注意这里的应用id与应用名称，都要与应用部署中的jvm参数：<code>-Dotel.resource.attributes=service.name</code> 或者是环境变量中的<code>MIONE_PROJECT_NAME</code>保持一致。</p><h3 id="_3、应用与人的权限" tabindex="-1">3、应用与人的权限 <a class="header-anchor" href="#_3、应用与人的权限" aria-label="Permalink to &quot;3、应用与人的权限&quot;">​</a></h3><p>如果我们想给某一个应用添加管理员，让他可以在hera上有配置该应用的权限，我们可以在tpc中找到这个应用，点击应用名称，进入节点详情，在该应用节点的“成员”标签页中，点击添加按钮，可以选择将某个人的账号添加为管理员</p><p><img src="'+i+'" alt="tpc-role1"></p><p><img src="'+y+'" alt="tpc-add-role1"></p><h2 id="配置日志采集" tabindex="-1">配置日志采集 <a class="header-anchor" href="#配置日志采集" aria-label="Permalink to &quot;配置日志采集&quot;">​</a></h2><p>由于Hera中的日志、trace数据都是由log-agent采集，所以我们需要在Hera日志配置中配置采集信息，告诉log-agent去哪采集，以及采集后发送给谁。</p><h3 id="_1、访问apache-ozhera-incubating-日志页面" tabindex="-1">1、访问Apache OzHera(Incubating)日志页面 <a class="header-anchor" href="#_1、访问apache-ozhera-incubating-日志页面" aria-label="Permalink to &quot;1、访问Apache OzHera(Incubating)日志页面&quot;">​</a></h3><p>我们通过访问operator生成的ozhera首页的链接，在首页头部title中，点击“日志服务”，进入Apache OzHera(Incubating)日志的界面。</p><p><img src="'+d+'" alt="operator-url2"></p><p><img src="'+m+`" alt="hera-log1"></p><h3 id="_2、配置日志资源-后续会自动创建默认资源" tabindex="-1">2、配置日志资源（后续会自动创建默认资源） <a class="header-anchor" href="#_2、配置日志资源-后续会自动创建默认资源" aria-label="Permalink to &quot;2、配置日志资源（后续会自动创建默认资源）&quot;">​</a></h3><p>在日志页面左侧菜单栏，点击资源管理，填写RocketMQ与ES资源信息。</p><h4 id="_1-rocketmq" tabindex="-1">（1）RocketMQ <a class="header-anchor" href="#_1-rocketmq" aria-label="Permalink to &quot;（1）RocketMQ&quot;">​</a></h4><pre><code>别名：RocketMQ资源别名，可以自定义

区域：选择“大陆机房”

mq地址：RocketMQ的地址，格式为host:port

mq域名：RocketMQ地址的域名

ak：RocketMQ的accessKey，没有可不填

sk：RocketMQ的secretKey，没有可不填

brokerName：填写RocketMQ的brokerName，可以在RocketMQ的dashboard中查看，目的是为了创建日志所需要的topic，默认的为broker-0

标签列表：RocketMQ的tag列表，没有可不填
</code></pre><p><img src="`+h+`" alt="hera-log-mq1"></p><h4 id="_2-es" tabindex="-1">（2）ES <a class="header-anchor" href="#_2-es" aria-label="Permalink to &quot;（2）ES&quot;">​</a></h4><pre><code>别名：ES资源别名，可以自定义

区域：选择“大陆机房”

es集群名称：同别名

esApi地址：ES的地址，格式为host:port

连接方式：选择连接ES的方式，分为“用户名和密码”与“Token”，用户名、密码、Token没有可以不填

标签列表：没有可不填

es索引组：我们会为每种日志类型默认创建一个索引组，但是需要用户将这四个索引组进行分别配置：
    多行应用日志：mione_hera_log_multiple_app_log01
    单行应用日志：mione_hera_log_single_app_log01
    nginx日志：mione_hera_log_nginx_app_log01
    opentelemetry日志：mione_hera_log_other_app_log01
</code></pre><p><img src="`+u+'" alt="hera-log-es"></p><h3 id="_3、创建space" tabindex="-1">3、创建space <a class="header-anchor" href="#_3、创建space" aria-label="Permalink to &quot;3、创建space&quot;">​</a></h3><p>配置好资源后，我们需要创建space--store--taill这三个配置。 首先，在hera日志服务首页中，点击“立即接入”，进入日志接入页面。点击空间Space右侧的立即创建，创建一个Space。Space一般是部门组织级别。</p><p>注意：创建Space后，需要去tpc上hera--logger下对应的space节点下进行授权。</p><p><img src="'+_+'" alt="hera-log2"></p><p><img src="'+g+'" alt="log-space1"></p><p><img src="'+F+'" alt="log-space2"></p><h3 id="_4、创建store" tabindex="-1">4、创建store <a class="header-anchor" href="#_4、创建store" aria-label="Permalink to &quot;4、创建store&quot;">​</a></h3><p>在创建Space后，我们在空间Space下拉框中选择刚刚创建的Space，点击日志库Logstore右侧的立即创建，创建store。</p><p><img src="'+q+'" alt="log-store1"></p><p><img src="'+k+`" alt="log-store2"></p><h3 id="_5、创建tail" tabindex="-1">5、创建tail <a class="header-anchor" href="#_5、创建tail" aria-label="Permalink to &quot;5、创建tail&quot;">​</a></h3><pre><code>应用类型：选择hera

部署方式：选择mione

服务应用名：选择需要接入的应用名

服务别名：可以自定义

环境分组：选择需要接入的环境

服务IP：选择环境后自动带出，需要进行勾选。如果没有，也可以手动进行添加

日志文件目录：应用日志文件的输出位置，具体到文件名

切分表达式：日志文件切分的命名规则
    如果日志切分后和当前目录不在一起，且切分后的文件名的前缀不是日志为名的，则要自己手动填写切分表达式，例如：/home/work/logs/applogs/old/shopapi_application.log-.*。否则可不填。
    行首正则表达式：如：^2022-* .*$
    日志解析类型：分割符、自定义、正则、json、nginx
    解析脚本：
    分割符：每一段是怎么分割的，输入分割你日志的分割符
    自定义：如果是比较复杂的，可能每一部分都分割都不一样，则用自定义，例如：[%s]-[%s]-[%s]-[%s]-[%s]-%s，会根据 %s 查找每一部分，每一部分的前缀和后缀
    正则：输入正则表达式，会根据捕获组来提取字段
    nginx：输入 nginx 日志格式配置，例如：
        log_format milog2  &#39;$time_iso8601\\t$msec\\t$host\\t$request_method\\t$scheme\\t$status\\t&#39;
        &#39;$upstream_addr\\t$upstream_cache_status\\t$upstream_status\\t&#39;
        &#39;$server_addr\\t$remote_addr\\t$http_x_forwarded_for\\t&#39;
        &#39;$request_length\\t$request_time\\t$bytes_sent\\t$upstream_response_time\\t&#39;
        &#39;$upstream_connect_time\\t $upstream_header_time\\t$upstream_response_length\\t$upstream_bytes_received\\t&#39;
        &#39;$request_uri\\t&quot;$http_user_agent&quot;\\t&#39;
        &#39;$sent_http_x_xiaomi_error_code&#39;;

收集速率：日志采集时多长时间发送一次，控制发送的速率

MQ配置：可不填，默认会将日志消息随机发送至某一个topic中

索引列：日志每一部分代表的含义，这个是从当前 store 中选择的，且顺序必须和日志中实际的日志中字段各部分的含义对应。store 的索引列必须是最多的，避免 tail 选择时没有.
</code></pre><p><img src="`+b+'" alt="log-tail1"></p><p><img src="'+A+'" alt="log-tail2"></p><p>配置完成后，等待几秒钟的时间，就可以在日志页面查看日志了。</p><p><img src="'+D+'" alt="hera-log3"></p><h3 id="_6、配置trace采集-后续可以自动创建" tabindex="-1">6、配置trace采集（后续可以自动创建） <a class="header-anchor" href="#_6、配置trace采集-后续可以自动创建" aria-label="Permalink to &quot;6、配置trace采集（后续可以自动创建）&quot;">​</a></h3><p>在Hera中，trace信息是通过Hera日志中的log-agent进行收集的，我们是把trace信息当做是一种特殊的日志进行采集，所以还需要在Hera日志上配置trace的采集信息。只需要按照以下配置即可。</p><h4 id="_1-创建trace-space" tabindex="-1">（1）创建trace-space <a class="header-anchor" href="#_1-创建trace-space" aria-label="Permalink to &quot;（1）创建trace-space&quot;">​</a></h4><p><img src="'+P+'" alt="log-space3"></p><h4 id="_2-创建trace-store" tabindex="-1">（2）创建trace-store <a class="header-anchor" href="#_2-创建trace-store" aria-label="Permalink to &quot;（2）创建trace-store&quot;">​</a></h4><p>日志类型选择“opentelemetry日志”即可，其他的配置默认即可。</p><p><img src="'+v+`" alt="log-store3"></p><h4 id="_3-创建trace-tail" tabindex="-1">（3）创建trace-tail <a class="header-anchor" href="#_3-创建trace-tail" aria-label="Permalink to &quot;（3）创建trace-tail&quot;">​</a></h4><p>与一般的应用创建tail大致相同，只是配置相对来说比较固定。</p><pre><code>服务应用名：只能选择china_log-agent

服务分组：选择default_env

服务IP：全选

日志文件路径：填写“/home/work/log/*/trace.log”。它会扫描所有/home/work/log下的trace.log文件进行采集

收集速率：选择快速收集

MQ配置：选择我们在日志资源中配置的RocketMQ集群，后面则是需要填写topic，如果无更改固定为：mone_hera_staging_trace_etl_server
</code></pre><p><img src="`+x+'" alt="log-tail3"></p><p><img src="'+C+'" alt="log-tail4"></p><h2 id="首页关注应用" tabindex="-1">首页关注应用 <a class="header-anchor" href="#首页关注应用" aria-label="Permalink to &quot;首页关注应用&quot;">​</a></h2><p>在首页添加应用到“我参与的应用”或者“我关注的应用”后，就可以查看监控、链路信息了。</p><p><img src="'+O+'" alt="hera-dash1"></p><p><img src="'+f+'" alt="hera-dash2"></p><p><img src="'+N+'" alt="hera-dash3"></p>',82),H=[B,I,z];function R($,w,V,J,Q,K){return S(),T("div",null,H)}const L=j(M,[["render",R]]);export{Y as __pageData,L as default};
