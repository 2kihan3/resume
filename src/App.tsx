import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronRight,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Workflow,
} from 'lucide-react'

const resumePdf = '/高涵-杭州-产品经理.pdf'

const navItems = [
  { href: '#strengths', label: '核心能力' },
  { href: '#projects', label: '项目案例' },
  { href: '#experience', label: '工作经历' },
  { href: '#faq', label: '求职说明' },
]

const profileTags = ['AI Agent', '复杂后台系统', '电商中后台', '小程序', '数据中台', '0-1 产品']

const metrics = [
  { value: '30%', label: '旧衣回收转化率提升' },
  { value: '50%', label: '运营取数需求减少' },
  { value: '2次', label: '0-1 数据中台建设' },
  { value: '7×24h', label: '行业 Agent 问答场景' },
]

const strengths = [
  {
    icon: Bot,
    title: 'AI 产品与 Agent 落地',
    summary:
      '做过垂直行业 Agent，从需求边界、知识库处理到工作流设计都参与过。更关心回答质量、检索命中率和业务可用性，而不是只停在 Demo。',
    points: ['酒店投资行业知识库问答', 'MCP 调用与意图识别工作流', '结构化输出与迭代评估'],
  },
  {
    icon: Workflow,
    title: '复杂系统 0-1 拆解',
    summary:
      '习惯先把业务流、角色、数据流拆清楚，再落到页面、权限、状态和异常流程。适合从一团需求里拉出第一版产品结构。',
    points: ['无人机管理平台', '业务后台重构', '订单与客户管理链路'],
  },
  {
    icon: ChartNoAxesCombined,
    title: '电商与增长导向后台',
    summary:
      '做过订单、商品、会员、营销中台和小程序交易链路。不会只改页面，会顺着转化、客诉、取消率这些指标去改流程。',
    points: ['首页与下单流程改版', '渠道 ROI 数据模型', '营销工具与分销能力'],
  },
  {
    icon: Database,
    title: '数据中台与运营分析',
    summary:
      '两次主导数据中台 0-1。重点不是堆图表，而是把口径、映射关系和运营动作连起来，让业务能更快判断该做什么。',
    points: ['三维渠道映射体系', '数据库到前端映射', '动态阈值监测预警'],
  },
]

const projects = [
  {
    eyebrow: 'AI 产品',
    title: '天玑 Agent',
    subtitle: '酒店投资与酒店运营管理垂直领域 Agent',
    description:
      '针对酒店投资领域信息壁垒高、咨询反馈慢的痛点，主导研发行业垂直场景 Agent，将传统专家咨询范式转化为 7×24h AI 智能辅助决策。',
    highlights: [
      '对非结构化行业文档进行清洗、结构化处理与元数据注入，提高知识库召回质量。',
      '采用语义逻辑动态分块、文档分隔符分块和滑动窗口，提升长文档检索上下文连贯性。',
      '设计 Query Rewriting 节点，将模糊问题转化为专业检索指令。',
      '针对 RevPar、GOP 等行业术语采用 BM25 + 混合检索，提高相关片段命中率。',
      '通过 CRISPE、RTF、few-shot 等方式调优领域分类、检索、结构化输出节点。',
    ],
    result: '沉淀 MCP 调用、意图识别、知识库检索、结构化输出等多工作流方案。',
    link: 'https://ai.feishu.cn/wiki/NNd2wkRlfinIESkBM87ceUHlnnC?from=from_copylink',
    linkLabel: '查看 Agent 项目文档',
  },
  {
    eyebrow: '电商 / 后台 / 数据',
    title: '旧衣回收小程序 + 业务后台重构 + 数据中台',
    subtitle: '从用户下单、业务履约到运营决策的系统改造',
    description:
      '公司同时运营多个旧衣回收平台，前台体验、后台流转和数据口径都需要重新梳理。我负责把小程序改版、业务后台重构和数据中台放在一条链路里推进。',
    details: [
      {
        title: '业务中台：把渠道、订单和用户行为重新接起来',
        body: '原后台对渠道来源记录较散，运营很难判断一个订单到底来自哪个端口、什么功能、哪类投放。我用“端口 + 功能 + 渠道来源”重建三维流量模型，让订单、会员行为和运营动作能在同一套口径下被追踪。',
      },
      {
        title: '数据中台：先统一口径，再做分析看板',
        body: '通过数据字典和数据库到前端指标的中间层映射，减少直接改业务库带来的风险。运营需要新增指标时，可以优先在映射层组合，不必每次都压到研发改底层表结构。',
      },
      {
        title: '运营闭环：从“拉数”改成“看异常、做动作”',
        body: '围绕转化、取消、质检合格率、客诉和渠道 ROI 设计监控视角。数据不只是展示，而是服务于价格补偿、渠道投放、品类展示和下单提示这些具体运营动作。',
      },
    ],
    highlights: [
      '重构首页信息层级，用品牌定位、业务价值、流程引导和品类展示增强用户下单意愿。',
      '优化规则提示和订单状态视觉反馈，降低用户理解成本与客诉风险。',
      '将二级质检升级为多级质检，在平台利润与用户体验之间建立更细的平衡机制。',
      '重构会员数据监测体系，补齐登录、签到、浏览等行为埋点，给后续精细化运营留下数据基础。',
      '把渠道 ROI、订单状态、质检结果和运营动作放到同一套分析链路里，减少运营反复找研发拉数。',
    ],
    result: '订单转化率提升 30%，取消率由 37.5% 降至 25%，订单合格率提升 10%，运营取数需求减少 50%。',
  },
  {
    eyebrow: '0-1 平台',
    title: '酒店链盟',
    subtitle: '小程序 + 后台 + 营销中台',
    description:
      '面向酒店投资行业传统沟通效率低、信息壁垒强的问题，搭建数字化平台，提升投资人决策效率并实现产业资源对接。',
    highlights: [
      '通过用户调研和专家对话，完成活动报名、专家咨询、项目委托三个核心业务场景线上化。',
      '设计用户、商机、项目链路，实现线上流量到项目合作的商业化闭环。',
      '建设 CMS、商品与订单、会员管理等后台能力，支撑持续运营。',
      '设计推广员、优惠券、页面搭建系统等营销中台能力，辅助运营和销售分销。',
    ],
    result: '完成从业务流程线上化到运营管理、营销转化的 0-1 产品基础设施。',
  },
  {
    eyebrow: '数据中台',
    title: '无人机数据中台',
    subtitle: '设备 + 任务全流程管理',
    description:
      '针对无人机、救援车等硬件设备的数据管理需求，主导数据中台建设，提供健康度管理、任务监控与标准化数据分析能力。',
    highlights: [
      '采集硬件设备数据并通过动态阈值实现自动预警，保障多作业环境下的稳定性。',
      '对动态数据与静态数据进行分离式存储，对设备进行双维度管理。',
      '围绕设备可用率与任务响应速度设计监控指标和业务看板。',
    ],
    result: '降低设备损耗成本约 20%，实现 24h 任务响应。',
  },
]

const experiences = [
  {
    period: '2025.12 - 2026.03',
    company: '杭州肯非（裕润）信息科技有限公司',
    role: '产品经理',
    description: '负责萌兔小程序前端重构、白鲸鱼小程序及后台业务优化、数据中台 0-1 建设。',
    result: '萌兔小程序重构后月订单量提升约 50%，转化率提升 10%。',
  },
  {
    period: '2025.01 - 2025.08',
    company: '杭州哲大慧商科技有限公司',
    role: '产品经理',
    description: '负责小程序、后台及营销中台 0-1 设计，实现业务流程线上化，并推进 0-1 Agent 设计。',
  },
  {
    period: '2023.09 - 2024.09',
    company: '浙江星空通用航空有限公司',
    role: '产品经理',
    description: '负责 0-1 无人机管理平台及数据中台设计，实现设备 + 任务的全流程管理。',
  },
  {
    period: '2022.07 - 2023.08',
    company: '杭州领见科技有限公司',
    role: '产品经理',
    description: '负责从需求调研到项目落地的全流程，包括部分售前及售后工作。',
    result: '完成领见耘 SaaS 化及 2.0 迭代、多个农业管理平台、竹林病虫害识别小程序。',
  },
]

const faqs = [
  {
    question: '为什么工作经历中有几段项目周期较短？',
    answer:
      '几段经历都以明确项目交付为核心：领见科技阶段完成负责项目后，受市场环境影响新增项目减少；星空通航阶段完成后台系统与数据中台上线后，受硬件交付节奏影响，系统难以获得稳定真实数据反馈；肯非裕润阶段完成数据中台 1.0 后，后续数据实现理念与组织目标存在较大差异，因此选择重新寻找更匹配的产品方向。',
  },
  {
    question: '目前最希望寻找什么岗位？',
    answer:
      '优先寻找 AI 相关产品岗位，包括 Agent 定制开发、行业 + AI、AI 工具平台、知识库/RAG、智能工作流等方向；同时也接受电商、SaaS、B 端后台、数据中台等传统产品岗位。',
  },
  {
    question: '非技术背景如何协作 AI 与研发项目？',
    answer:
      '我会用产品视角定义业务目标、场景边界、数据结构和验收标准，并借助 AI 工具理解前端及部分后端代码、辅助原型和文档工作。在 Agent 项目中，我更关注工作流、检索质量、结构化输出和评估迭代，而不是把 AI 产品停留在概念层。',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[#f7ff3c] text-slate-950">
      <header className="sticky top-0 z-50 border-b-2 border-slate-950 bg-[#f7ff3c]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a className="flex items-center gap-3" href="#top" aria-label="回到首页">
            <span className="grid h-10 w-10 place-items-center rounded-sm bg-slate-950 text-sm font-semibold text-white">
              GH
            </span>
            <span className="hidden text-sm font-semibold text-slate-700 sm:inline">高涵 · 产品经理</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <a className="icon-button" href={resumePdf} target="_blank" rel="noreferrer" aria-label="打开 PDF 简历">
            <Download size={18} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-field border-b border-black/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap gap-2">
                {profileTags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                AI Product Manager / General Product Manager
              </p>
              <h1 className="headline max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                我做产品的习惯，是先把业务拆清楚，再把系统做成能跑的东西。
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                我是高涵，产品经理。过去做过 AI Agent、数据中台、电商后台和小程序改版。比较擅长把一堆散的需求、
                角色和数据口径整理成产品结构，再跟进到上线和指标复盘。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="primary-button" href={resumePdf} target="_blank" rel="noreferrer">
                  <Download size={18} />
                  查看 PDF 简历
                </a>
                <a className="secondary-button" href="#projects">
                  进入项目案例
                  <ChevronRight size={18} />
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
                <a className="contact-item" href="tel:15840149228">
                  <Phone size={16} />
                  15840149228
                </a>
                <a className="contact-item" href="mailto:kyriehan0405@163.com">
                  <Mail size={16} />
                  kyriehan0405@163.com
                </a>
                <span className="contact-item">
                  <MapPin size={16} />
                  杭州 · 可看杭州/上海/南京/无锡
                </span>
              </div>
            </div>

            <aside className="grid content-start gap-4">
              <div className="panel dossier-card bg-slate-950 p-7 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">当前求职方向</p>
                    <h2 className="mt-2 text-2xl font-semibold">AI 产品 + 通用产品</h2>
                  </div>
                  <Rocket className="text-teal-300" size={32} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded border border-white/10 bg-white/5 p-4">
                      <p className="text-3xl font-semibold text-teal-200">{metric.value}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="panel value-card p-6">
                <h2 className="text-lg font-semibold text-slate-950">一句话价值</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  如果团队正在做 AI 产品、B 端系统或数据化运营，我能补上的那块通常是：把业务语言翻译成系统结构，再把系统结果翻译回业务动作。
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="strengths" className="section">
          <div className="section-heading">
            <p className="section-kicker">Core Strengths</p>
            <h2>双主线能力：AI 产品落地 + 传统复杂系统交付</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {strengths.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="panel p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="icon-tile">
                      <Icon size={22} />
                    </div>
                    <CheckCircle2 className="mt-1 text-teal-600" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <span key={point} className="mini-tag">
                        {point}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="projects" className="section border-y-2 border-slate-950 bg-[#f8fbff]">
          <div className="section-heading">
            <p className="section-kicker">Selected Projects</p>
            <h2>用项目证明：能从业务问题走到产品结构和指标结果</h2>
          </div>
          <div className="grid gap-5">
            {projects.map((project) => (
              <article key={project.title} className="panel overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
                  <div className="border-b border-slate-200 bg-slate-950 p-6 text-white lg:border-b-0 lg:border-r lg:border-slate-800">
                    <p className="text-sm font-semibold text-teal-200">{project.eyebrow}</p>
                    <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-3 text-slate-300">{project.subtitle}</p>
                    <p className="mt-6 leading-7 text-slate-200">{project.description}</p>
                    {project.link ? (
                      <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-200" href={project.link} target="_blank" rel="noreferrer">
                        {project.linkLabel}
                        <ArrowUpRight size={16} />
                      </a>
                    ) : null}
                  </div>
                  <div className="p-6">
                    {project.details ? (
                      <div className="mb-6 grid gap-3 lg:grid-cols-3">
                        {project.details.map((detail) => (
                          <div key={detail.title} className="detail-card">
                            <h4>{detail.title}</h4>
                            <p>{detail.body}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <ul className="grid gap-3">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 leading-7 text-slate-700">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="result-strip mt-6 rounded-sm p-4 text-sm font-medium leading-6">
                      {project.result}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2>从需求调研到上线复盘，持续围绕 0-1 项目交付</h2>
          </div>
          <div className="grid gap-4">
            {experiences.map((item) => (
              <article key={`${item.period}-${item.company}`} className="panel p-6">
                <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
                  <div>
                    <p className="text-sm font-semibold text-teal-700">{item.period}</p>
                    <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
                      <BriefcaseBusiness size={16} />
                      {item.role}
                    </p>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-950">
                      <Building2 size={20} className="text-slate-500" />
                      {item.company}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-700">{item.description}</p>
                    {item.result ? <p className="mt-2 font-medium leading-7 text-slate-900">{item.result}</p> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section border-y-2 border-slate-950 bg-[#fff7ed]">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="panel p-6">
              <div className="icon-tile mb-5">
                <GraduationCap size={22} />
              </div>
              <p className="section-kicker">Education</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">沈阳理工大学</h2>
              <p className="mt-3 text-slate-700">2018.09 - 2022.07 · 通信工程 · 全日制本科</p>
            </div>
            <div className="panel p-6">
              <p className="section-kicker">More</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="mini-card">英语 CET-6</div>
                <div className="mini-card">班长 / 院学生会副部长 / 校艺术团成员</div>
                <div className="mini-card">能基于 AI 辅助理解前端与部分后端代码</div>
                <div className="mini-card">持续学习 AI 在不同行业的落地案例</div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="section-heading">
            <p className="section-kicker">FAQ</p>
            <h2>招聘方可能关心的问题</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="panel p-6">
                <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold">高涵 · 产品经理</p>
            <p className="mt-2 text-sm text-slate-300">AI 产品 / 通用产品 / 复杂系统 / 数据中台</p>
          </div>
          <a className="footer-link" href="mailto:kyriehan0405@163.com">
            <Mail size={18} />
            kyriehan0405@163.com
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
