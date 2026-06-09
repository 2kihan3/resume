import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Download, Sparkles } from 'lucide-react'
import './palettes.css'

type Palette = {
  name: string
  note: string
  mood: string
  vars: Record<string, string>
  swatches: string[]
}

const palettes: Palette[] = [
  {
    name: 'A. Soft Signal',
    note: '年轻但不刺眼，适合保守一点的招聘场景。',
    mood: '推荐优先试',
    vars: {
      '--bg': '#f3f7ee',
      '--grid': 'rgba(20, 54, 42, 0.12)',
      '--panel': '#fffdf4',
      '--ink': '#12211b',
      '--muted': '#55635b',
      '--primary': '#2f6f4e',
      '--accent': '#ff7a59',
      '--accent-2': '#78dcca',
      '--shadow': '#12211b',
      '--result': '#173127',
      '--result-text': '#f7fff6',
    },
    swatches: ['#f3f7ee', '#12211b', '#2f6f4e', '#ff7a59', '#78dcca'],
  },
  {
    name: 'B. Studio Blue',
    note: '更像年轻产品设计师/AI 产品作品集，干净、有科技感。',
    mood: '最适合 AI 方向',
    vars: {
      '--bg': '#eaf2ff',
      '--grid': 'rgba(19, 56, 120, 0.13)',
      '--panel': '#ffffff',
      '--ink': '#101827',
      '--muted': '#536176',
      '--primary': '#245bff',
      '--accent': '#ff5c8a',
      '--accent-2': '#44e0ff',
      '--shadow': '#101827',
      '--result': '#0c1b3f',
      '--result-text': '#f7fbff',
    },
    swatches: ['#eaf2ff', '#101827', '#245bff', '#ff5c8a', '#44e0ff'],
  },
  {
    name: 'C. Coral Paper',
    note: '保留大胆感，但把主色从高亮黄换成更温暖的珊瑚纸色。',
    mood: '更有人味',
    vars: {
      '--bg': '#fff1df',
      '--grid': 'rgba(99, 42, 18, 0.12)',
      '--panel': '#fffaf2',
      '--ink': '#24120d',
      '--muted': '#6b5148',
      '--primary': '#d94b2b',
      '--accent': '#234cff',
      '--accent-2': '#12c49a',
      '--shadow': '#24120d',
      '--result': '#2a1812',
      '--result-text': '#fff8ed',
    },
    swatches: ['#fff1df', '#24120d', '#d94b2b', '#234cff', '#12c49a'],
  },
  {
    name: 'D. Ink Lime Lite',
    note: '保留当前版本的年轻冲击力，但把黄色压低，不再荧光糊脸。',
    mood: '当前版降噪',
    vars: {
      '--bg': '#e9f76b',
      '--grid': 'rgba(15, 23, 42, 0.14)',
      '--panel': '#fffff6',
      '--ink': '#0d1020',
      '--muted': '#434957',
      '--primary': '#111827',
      '--accent': '#ff6b3d',
      '--accent-2': '#0057ff',
      '--shadow': '#0d1020',
      '--result': '#111827',
      '--result-text': '#f8fafc',
    },
    swatches: ['#e9f76b', '#0d1020', '#ff6b3d', '#0057ff', '#00c48c'],
  },
  {
    name: 'E. Night Resume',
    note: '更酷、更像作品集，但整体会比白底更强势。',
    mood: '朋友锐评款',
    vars: {
      '--bg': '#10131f',
      '--grid': 'rgba(255, 255, 255, 0.1)',
      '--panel': '#f7f2e8',
      '--ink': '#0b1020',
      '--muted': '#596071',
      '--primary': '#8dff6a',
      '--accent': '#ff5f7e',
      '--accent-2': '#6aa8ff',
      '--shadow': '#000000',
      '--result': '#0b1020',
      '--result-text': '#f8fafc',
    },
    swatches: ['#10131f', '#f7f2e8', '#8dff6a', '#ff5f7e', '#6aa8ff'],
  },
]

export function PalettePreview({ palette }: { palette: Palette }) {
  return (
    <article className="palette-card" style={palette.vars as React.CSSProperties}>
      <div className="palette-meta">
        <div>
          <p className="palette-mood">{palette.mood}</p>
          <h2>{palette.name}</h2>
        </div>
        <div className="swatches" aria-label={`${palette.name} 色板`}>
          {palette.swatches.map((color) => (
            <span key={color} style={{ background: color }} title={color} />
          ))}
        </div>
      </div>

      <div className="mock-hero">
        <div className="mock-copy">
          <div className="mock-tags">
            <span>AI Product</span>
            <span>Data Platform</span>
            <span>0-1 System</span>
          </div>
          <p className="mock-kicker">Palette Preview</p>
          <h3>把业务拆清楚，再把系统做成能跑的东西。</h3>
          <p>
            这里不放真实简历内容，只看色彩、对比度、按钮、卡片和结果条的视觉性格。
          </p>
          <div className="mock-actions">
            <button type="button">
              <Download size={16} />
              Primary
            </button>
            <button type="button">
              Secondary
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        <div className="mock-side">
          <div className="mock-stat-head">
            <span>Direction</span>
            <Sparkles size={24} />
          </div>
          <div className="mock-stats">
            <div>
              <strong>30%</strong>
              <span>Metric sample</span>
            </div>
            <div>
              <strong>2x</strong>
              <span>Case sample</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mock-project">
        <div>
          <p>Case Card</p>
          <h4>项目卡片视觉预览</h4>
        </div>
        <div className="mock-detail-grid">
          <span>业务中台</span>
          <span>数据口径</span>
          <span>运营闭环</span>
        </div>
        <p className="mock-result">结果总结条：重点看这里是否清晰、稳、不眩晕。</p>
      </div>

      <p className="palette-note">{palette.note}</p>
    </article>
  )
}

export function PaletteLab() {
  return (
    <main className="palette-page">
      <header className="palette-header">
        <div>
          <p>Resume Palette Lab</p>
          <h1>不动内容，只看配色。</h1>
        </div>
        <a href="./">返回主页</a>
      </header>

      <section className="palette-intro">
        <p>
          这页只放抽象模块，不放真实项目文案。可以让朋友直接选 A-E，或者说“保留某个方案的背景，换另一个方案的按钮色”。
        </p>
      </section>

      <section className="palette-grid" aria-label="配色方案列表">
        {palettes.map((palette) => (
          <PalettePreview key={palette.name} palette={palette} />
        ))}
      </section>
    </main>
  )
}

createRoot(document.getElementById('palette-root')!).render(
  <StrictMode>
    <PaletteLab />
  </StrictMode>,
)
