import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ReferenceLine,
} from 'recharts'
import { useReducedMotion } from 'framer-motion'

const GRID = 'rgba(255,255,255,0.08)'
const AXIS = '#94a3b8'

function DarkTooltip({ active, payload, label, unit = '', decimals = 0 }) {
  if (!active || !payload || !payload.length) return null
  const v = payload[0].value
  return (
    <div className="chart-tip">
      {label && <div className="chart-tip-label">{label}</div>}
      <div className="chart-tip-val">
        {typeof v === 'number' ? v.toFixed(decimals) : v}
        {unit}
      </div>
    </div>
  )
}

/* Donut showing a single share (data[0].value highlighted) */
export function ShareDonut({ data, colors = ['#38bdf8', 'rgba(255,255,255,0.08)'], unit = '%' }) {
  const reduce = useReducedMotion()
  const main = data[0]
  return (
    <div className="donut-wrap">
      <ResponsiveContainer width="100%" height={210}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={64}
            outerRadius={92}
            paddingAngle={2}
            startAngle={90}
            endAngle={-270}
            stroke="none"
            isAnimationActive={!reduce}
            animationDuration={1100}
          >
            {data.map((e, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<DarkTooltip unit={unit} decimals={1} />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="donut-center">
        <strong>{main.value}{unit}</strong>
        <span>{main.name}</span>
      </div>
    </div>
  )
}

/* Vertical bars for Cronbach's Alpha (0..1) */
export function AlphaBars({ data }) {
  const reduce = useReducedMotion()
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 24, right: 8, left: -10, bottom: 0 }}>
        <defs>
          <linearGradient id="alphaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="name" tick={{ fill: AXIS, fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis
          domain={[0, 1]}
          ticks={[0, 0.25, 0.5, 0.75, 1]}
          tick={{ fill: AXIS, fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          width={36}
        />
        <Tooltip cursor={{ fill: 'rgba(255,255,255,0.04)' }} content={<DarkTooltip decimals={3} />} />
        <Bar dataKey="alpha" fill="url(#alphaGrad)" radius={[8, 8, 0, 0]} maxBarSize={64} isAnimationActive={!reduce} animationDuration={1200}>
          <LabelList dataKey="alpha" position="top" fill="#f8fafc" fontSize={12} formatter={(v) => v.toFixed(3)} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

/* Diverging bars for regression coefficient B */
export function BetaBars({ data }) {
  const reduce = useReducedMotion()
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 24, right: 8, left: -6, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="name" tick={{ fill: AXIS, fontSize: 11 }} axisLine={false} tickLine={false} interval={0} />
        <YAxis tick={{ fill: AXIS, fontSize: 12 }} axisLine={false} tickLine={false} width={40} />
        <Tooltip cursor={{ fill: 'rgba(255,255,255,0.04)' }} content={<DarkTooltip decimals={3} />} />
        <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
        <Bar dataKey="b" radius={[8, 8, 8, 8]} maxBarSize={70} isAnimationActive={!reduce} animationDuration={1200}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.b < 0 ? '#22d3ee' : '#a855f7'} />
          ))}
          <LabelList dataKey="b" position="top" fill="#f8fafc" fontSize={12} formatter={(v) => v.toFixed(3)} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
