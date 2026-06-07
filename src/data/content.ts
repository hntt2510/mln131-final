// Nội dung nghiên cứu RBL MLN131 "Mâu thuẫn thế hệ trong gia đình số"
// được biên tập lại theo bố cục landing page (phong cách studio).

export const brand = {
  logo: 'Gia Đình Số',
  short: 'M',
  tagline: 'Nghiên cứu RBL · MLN311 · Nhóm SE1829',
}

export const hero = {
  // dòng thường + dòng có chữ serif nhấn mạnh
  headingTop: 'Mâu thuẫn thế hệ,',
  headingTopAccent: 'thế hệ,',
  headingBottom: 'trong gia đình số.',
  headingBottomAccent: 'gia đình số.',
  paragraphs: [
    'Chúng tôi khảo sát 164 người trẻ và phỏng vấn 7 cặp gia đình để trả lời một câu hỏi quen thuộc: vì sao cha mẹ và con cái ngày càng khó hiểu nhau trong thời đại số?',
    'Phát hiện cốt lõi: khác biệt giữa hai thế hệ không chỉ là tuổi tác, mà là khác biệt điều kiện xã hội hóa — hai bối cảnh lớn lên tạo ra hai bộ giá trị khác nhau.',
    'Và lời giải không nằm ở việc cấm đoán, mà ở giao tiếp cởi mở.',
  ],
}

export type VisualTile = {
  icon: string
  label: string
  from: string
  to: string
}

// "Marquee" tái hiện bằng các thẻ khái niệm thay cho ảnh stock.
export const marqueeTiles: VisualTile[] = [
  { icon: '📚', label: 'Sách vở', from: '#ff5b7f', to: '#ffb05b' },
  { icon: '📱', label: 'TikTok', from: '#5b8cff', to: '#43e0c0' },
  { icon: '☎️', label: 'Điện thoại bàn', from: '#f59e0b', to: '#ef4444' },
  { icon: '🌐', label: 'Internet', from: '#6366f1', to: '#22d3ee' },
  { icon: '💼', label: 'Ổn định', from: '#ec4899', to: '#f97316' },
  { icon: '🚀', label: 'Freelance', from: '#3b82f6', to: '#10b981' },
  { icon: '🎯', label: 'Tuân thủ', from: '#e11d48', to: '#fb923c' },
  { icon: '✨', label: 'Tự chủ', from: '#0ea5e9', to: '#34d399' },
]

export const quote = {
  text: 'Cha mẹ không hề cổ hủ — họ chỉ lớn lên trong một thế giới khác.',
  accent: 'thế giới khác.',
  author: 'Tinh thần nghiên cứu, dựa trên Mannheim (1952)',
  // "logo" = các khung lý thuyết nền tảng
  pillars: [
    { name: 'Mannheim', w: 110 },
    { name: 'Prensky', w: 96 },
    { name: 'Olson', w: 78 },
  ],
  visual: { icon: '👨‍👩‍👧‍👦', label: 'Hai thế hệ, một mái nhà', from: '#5b8cff', to: '#ff5b7f' } as VisualTile,
}

export type MechanismCard = {
  variant: 'dark' | 'light'
  title: string
  desc: string[]
  value: string
  valueLabel: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}

// "Pricing" → hai cơ chế tác động mạnh nhất tới mâu thuẫn.
export const mechanisms: MechanismCard[] = [
  {
    variant: 'dark',
    title: 'Khác biệt giá trị',
    desc: ['Yếu tố dự báo mạnh nhất của mâu thuẫn thế hệ.', 'Công nghệ chỉ làm lộ ra khác biệt sâu hơn về giá trị.'],
    value: 'r = 0.615',
    valueLabel: 'Tương quan mạnh nhất (p < 0.01)',
    primary: { label: '4 vùng bất đồng', href: '#hanh-trinh' },
    secondary: { label: 'Xem dữ liệu', href: '#hanh-trinh' },
  },
  {
    variant: 'light',
    title: 'Giao tiếp cởi mở',
    desc: ['Tác động trực tiếp làm GIẢM mâu thuẫn thế hệ.', 'Lắng nghe → giải thích → thương lượng.'],
    value: 'B = -0.260',
    valueLabel: 'Hệ số hồi quy (p < 0.001)',
    primary: { label: 'Giải pháp', href: '#dong-hanh' },
  },
]

export type Family = {
  id: string
  quote: string
  name: string
  role: string
  gradient: [string, string]
}

// "Testimonial carousel" → insight 7 cặp gia đình phỏng vấn.
export const families: Family[] = [
  {
    id: 'F01',
    quote: 'Mẹ thu điện thoại khi thấy con online khuya, trong khi con đang học nhóm. Sau khi thỏa thuận giờ liên lạc, cả hai bớt căng thẳng hẳn.',
    name: 'Cặp F01',
    role: 'Riêng tư & tự chủ học tập',
    gradient: ['#ff5b7f', '#ffb05b'],
  },
  {
    id: 'F02',
    quote: 'Con nhận job freelance buổi tối, ba sợ ảnh hưởng việc học. Khi con trình bày kế hoạch thời gian và rủi ro, ba thấy yên tâm hơn nhiều.',
    name: 'Cặp F02',
    role: 'Ổn định vs phát triển',
    gradient: ['#5b8cff', '#43e0c0'],
  },
  {
    id: 'F03',
    quote: 'Mẹ gọi video khuya để yên tâm, con lại hiểu thành kiểm tra. Thống nhất khung giờ cập nhật giúp mẹ bớt lo mà con không thấy bị soi.',
    name: 'Cặp F03',
    role: 'Tự lập vs an toàn',
    gradient: ['#6366f1', '#22d3ee'],
  },
  {
    id: 'F04',
    quote: 'Ba thấy con chơi game nửa đêm sau khi đã nộp project. Khi đánh giá theo kết quả thay vì nhìn màn hình, mâu thuẫn giảm rõ rệt.',
    name: 'Cặp F04',
    role: 'Kỷ luật vs linh hoạt',
    gradient: ['#ec4899', '#f97316'],
  },
  {
    id: 'F05',
    quote: 'Mẹ đọc tin nhắn khi con để điện thoại ngoài phòng khách. Phân biệt rõ "quan tâm" và "kiểm tra" giúp hai mẹ con đặt lại ranh giới.',
    name: 'Cặp F05',
    role: 'Quyền riêng tư cá nhân',
    gradient: ['#f43f5e', '#fb923c'],
  },
  {
    id: 'F06',
    quote: 'Con chơi game quá giờ cuối tuần, mẹ yêu cầu tự đề xuất cách sửa. Tự do đi kèm trách nhiệm là điểm hai bên gần nhau nhất.',
    name: 'Cặp F06',
    role: 'Tự do đi kèm trách nhiệm',
    gradient: ['#0ea5e9', '#34d399'],
  },
  {
    id: 'F07',
    quote: 'Con nghỉ công ty để nhận dự án, ba cho là bốc đồng. Khi con chia sẻ kế hoạch tài chính định kỳ, ba góp ý rủi ro thay vì phản đối.',
    name: 'Cặp F07',
    role: 'Ổn định tài chính vs phát triển',
    gradient: ['#8b5cf6', '#ec4899'],
  },
]

export type JourneyItem = {
  no: string
  name: string
  desc: string
  visual: VisualTile
}

// "Projects" → ba mắt xích chính trong mô hình nghiên cứu.
export const journey: JourneyItem[] = [
  {
    no: '01',
    name: 'Điều kiện xã hội hóa',
    desc: 'Cha mẹ và con cái lớn lên trong hai bối cảnh xã hội khác nhau — sách vở & ổn định so với Internet & linh hoạt.',
    visual: { icon: '👴 ⟷ 🧑‍💻', label: 'Hai bối cảnh lớn lên', from: '#ff5b7f', to: '#5b8cff' },
  },
  {
    no: '02',
    name: 'Môi trường số',
    desc: 'Digital Immigrants vs Digital Natives. Cùng một hành vi "dùng điện thoại" được hai thế hệ gán hai ý nghĩa khác nhau.',
    visual: { icon: '📵 ⟷ 📱', label: 'Immigrants vs Natives', from: '#6366f1', to: '#43e0c0' },
  },
  {
    no: '03',
    name: 'Khác biệt giá trị → Mâu thuẫn',
    desc: 'Bốn vùng bất đồng: học tập, nghề nghiệp, bạn bè & tình yêu, thời gian & điện thoại — dẫn tới mâu thuẫn thế hệ.',
    visual: { icon: '⚡', label: 'r = 0.615', from: '#f97316', to: '#ef4444' },
  },
]

export type Hypo = { id: string; text: string; stat: string; status: 'accept' | 'pending' }

export const hypotheses: Hypo[] = [
  { id: 'H1', text: 'Khác biệt XHH → Khác biệt giá trị', stat: 'B = 0.399 · p < .001', status: 'accept' },
  { id: 'H2', text: 'Khác biệt môi trường số → Khác biệt giá trị', stat: 'B = 0.409 · p < .001', status: 'accept' },
  { id: 'H3', text: 'Khác biệt giá trị → Mâu thuẫn thế hệ', stat: 'B = 0.404 · p < .001', status: 'accept' },
  { id: 'H4', text: 'Giao tiếp cởi mở → Giảm mâu thuẫn', stat: 'B = -0.260 · p < .001', status: 'accept' },
  { id: 'H5', text: 'Giao tiếp điều tiết quan hệ KBG–MTTH', stat: 'B = -0.029 · p = .712', status: 'pending' },
]

export const partner = {
  heading: 'Sống chung với khác biệt',
  cta: 'Giao tiếp + Tin tưởng',
}

export type FooterLink = { label: string; href: string; external?: boolean }

export const footer: { cta: string; columns: { links: FooterLink[] }[] } = {
  cta: 'Đọc tài liệu nghiên cứu',
  columns: [
    {
      links: [
        { label: 'Nội dung', href: '#hanh-trinh' },
        { label: 'Dữ liệu', href: '#co-che' },
        { label: 'Nhóm', href: '#copyright' },
      ],
    },
    {
      links: [
        { label: 'FPT University', href: 'https://fpt.edu.vn', external: true },
        { label: 'MLN311', href: '#hero', external: false },
      ],
    },
  ],
}

export const team = [
  { name: 'Hoàng Đặng Nhật Nam', id: 'SE180370' },
  { name: 'Lê Thanh Trường', id: 'SE180010' },
  { name: 'Hoàng Nguyễn Thành Tâm', id: 'SE180041' },
  { name: 'Bùi Văn Vũ', id: 'SE180080' },
  { name: 'Lê Thúy Vy', id: 'SS180746' },
]

export const copyright = {
  left: 'Nhóm SE1829 · FPT University',
  right: 'TP. Hồ Chí Minh, 2026',
}
