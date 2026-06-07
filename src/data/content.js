// Toàn bộ nội dung nghiên cứu RBL MLN131
// "Mâu thuẫn thế hệ trong gia đình số"

export const meta = {
  title: 'Mâu Thuẫn Thế Hệ Trong Gia Đình Số',
  subtitle: 'Khác biệt cha mẹ – con cái: Tuổi tác hay điều kiện xã hội?',
  course: 'MLN311 · RBL MLN131',
  org: 'FPT University · SE1829',
  instructor: 'Nguyễn Trung Hiếu',
}

export const team = [
  { name: 'Hoàng Đặng Nhật Nam', id: 'SE180370' },
  { name: 'Lê Thanh Trường', id: 'SE180010' },
  { name: 'Hoàng Nguyễn Thành Tâm', id: 'SE180041' },
  { name: 'Bùi Văn Vũ', id: 'SE180080' },
  { name: 'Lê Thúy Vy', id: 'SS180746' },
]

// Mạch logic trung tâm
export const coreFlow = [
  'Hai bối cảnh khác nhau',
  'Hai bộ giá trị khác nhau',
  'Mâu thuẫn thế hệ',
  'Giải pháp: Giao tiếp cởi mở',
]

// Section 0 — Vì sao mâu thuẫn xảy ra (cùng hành vi, hai cách hiểu)
export const problem = {
  behavior: 'Dùng điện thoại nhiều giờ mỗi ngày',
  parent: {
    label: 'Góc nhìn cha mẹ',
    icon: '👨‍👩‍👧',
    points: [
      'Có thể là đang lãng phí thời gian',
      'Lo con xao nhãng việc học, ít tập trung',
      'Lo về nội dung và người con gặp trên mạng',
    ],
  },
  child: {
    label: 'Góc nhìn con cái',
    icon: '🧑‍💻',
    points: [
      'Đang học nhóm, tra cứu và làm bài tập',
      'Kết nối bạn bè, giải tỏa căng thẳng',
      'Học kỹ năng mới và thể hiện bản thân',
    ],
  },
  insight:
    'Cùng một hành vi nhưng hai thế hệ gán cho nó hai ý nghĩa khác nhau — đó là nơi mâu thuẫn bắt đầu.',
}

export const valuesEmphasis =
  'Công nghệ không phải vấn đề duy nhất. Vấn đề nằm ở cách hai thế hệ gán ý nghĩa khác nhau cho cùng một hành vi.'

export const communicationEmphasis = 'Cách chúng ta nói thay đổi cách chúng ta nghe.'

// Section 1 — Điều kiện xã hội hóa
export const socialization = {
  parent: {
    label: 'Thế hệ cha mẹ',
    icon: '👴',
    tone: 'parent',
    items: [
      { icon: '📚', text: 'Học tập: Sách vở, lớp học truyền thống' },
      { icon: '📰', text: 'Thông tin: Báo giấy, TV, nghe kể' },
      { icon: '☎️', text: 'Giao tiếp: Trực tiếp, điện thoại cố định' },
      { icon: '💼', text: 'Nghề nghiệp: Ổn định, lâu dài, một công ty' },
      { icon: '🎯', text: 'Giá trị: Trách nhiệm tập thể, tuân thủ' },
    ],
  },
  child: {
    label: 'Thế hệ con cái',
    icon: '🧑‍💻',
    tone: 'child',
    items: [
      { icon: '📱', text: 'Học tập: Online, app, video, collaboration' },
      { icon: '🌐', text: 'Thông tin: Google, TikTok, YouTube, trend' },
      { icon: '💬', text: 'Giao tiếp: Mạng xã hội, group, livestream' },
      { icon: '🚀', text: 'Nghề nghiệp: Flexible, freelance, portfolio' },
      { icon: '✨', text: 'Giá trị: Tự chủ, khám phá, thể hiện bản thân' },
    ],
  },
}

// Section 2 — Môi trường số
export const digital = {
  immigrants: {
    label: 'Digital Immigrants',
    sub: 'Cha mẹ · thích nghi từ sau',
    note: 'Mạng xã hội là công cụ xa lạ, nhiều rủi ro',
  },
  natives: {
    label: 'Digital Natives',
    sub: 'Con cái · lớn lên cùng công nghệ',
    note: 'Mạng xã hội là không gian sống bình thường',
  },
  facts: [
    { value: '76.2%', label: 'Con cái dùng Internet ≥ 3 giờ/ngày' },
    { value: '3.823/5', label: 'Cha mẹ khó theo kịp thay đổi số' },
    { value: '33.5%', label: 'Bất đồng liên quan trực tiếp tới mạng' },
    { value: '3.707/5', label: 'Cha mẹ đánh giá tiêu cực việc dùng điện thoại' },
  ],
}

// Section 3 — Khác biệt giá trị → 4 vùng bất đồng
export const valueZones = [
  { icon: '📚', title: 'Học tập', parent: 'Sự chuẩn bị', child: 'Trải nghiệm' },
  { icon: '💼', title: 'Nghề nghiệp', parent: 'Ổn định', child: 'Phát triển' },
  { icon: '👥', title: 'Bạn bè & Tình yêu', parent: 'Kiểm soát', child: 'Tự chủ' },
  { icon: '⏰', title: 'Thời gian & Điện thoại', parent: 'Kỷ luật', child: 'Tự quản lý' },
]

export const strongestCorrelation = {
  r: '0.615',
  caption: 'Khác biệt giá trị ↔ Mâu thuẫn thế hệ',
  note: 'Tương quan mạnh nhất (p < 0.01). Công nghệ không phải gốc rễ — giá trị mới là gốc rễ.',
}

// Section 4 — Giao tiếp gia đình: 3 bước
export const dialogueSteps = [
  {
    no: '01',
    icon: '👂',
    title: 'Lắng nghe',
    desc: 'Hỏi động cơ của con, không phán xét ngay từ đầu.',
  },
  {
    no: '02',
    icon: '💬',
    title: 'Giải thích',
    desc: 'Cha mẹ chia sẻ nỗi lo, con nói rõ mục đích trực tuyến.',
  },
  {
    no: '03',
    icon: '🤝',
    title: 'Thương lượng',
    desc: 'Cùng thống nhất quy tắc, hai bên cùng có lợi.',
  },
]

export const communicationImpact = {
  beta: '-0.260',
  p: 'p < 0.001',
  text: 'Giao tiếp cởi mở tác động trực tiếp làm GIẢM mâu thuẫn thế hệ.',
}

// Section 5 — Thống kê mẫu (164 người)
export const sampleStats = [
  { value: '164', label: 'Mẫu khảo sát hợp lệ' },
  { value: '68.3%', label: 'Nhóm tuổi 19–22 (sinh viên)' },
  { value: '73.2%', label: 'Đến từ thành thị' },
  { value: '7', label: 'Cặp gia đình phỏng vấn' },
]

// Độ tin cậy thang đo (Cronbach's Alpha)
export const reliability = [
  { code: 'XHH', name: 'Khác biệt điều kiện xã hội hóa', alpha: 0.867 },
  { code: 'MTS', name: 'Khác biệt môi trường số', alpha: 0.893 },
  { code: 'GTGD', name: 'Giao tiếp gia đình cởi mở', alpha: 0.889 },
  { code: 'KBG', name: 'Khác biệt giá trị', alpha: 0.886 },
  { code: 'MTTH', name: 'Mâu thuẫn thế hệ', alpha: 0.908 },
]

// Section 6 — Kết quả kiểm định giả thuyết
export const hypotheses = [
  { id: 'H1', text: 'Khác biệt XHH → Khác biệt giá trị', stat: 'B = 0.399 · p < .001', status: 'accept' },
  { id: 'H2', text: 'Khác biệt môi trường số → Khác biệt giá trị', stat: 'B = 0.409 · p < .001', status: 'accept' },
  { id: 'H3', text: 'Khác biệt giá trị → Mâu thuẫn thế hệ', stat: 'B = 0.404 · p < .001', status: 'accept' },
  { id: 'H4', text: 'Giao tiếp cởi mở → Giảm mâu thuẫn', stat: 'B = -0.260 · p < .001', status: 'accept' },
  { id: 'H5', text: 'Giao tiếp điều tiết quan hệ KBG–MTTH', stat: 'B = -0.029 · p = .712', status: 'pending' },
]

export const modelFit = {
  r2: '46.4%',
  note: 'Các biến độc lập giải thích 46.4% biến thiên của mâu thuẫn thế hệ (R² = 0.464, F = 34.353, p < .001).',
}

// Section 7 — Giải pháp 3 cấp độ
export const solutions = [
  {
    icon: '👨‍👩‍👧',
    title: 'Cấp độ gia đình',
    tag: 'Hiểu mục đích',
    desc: 'Chuyển từ kiểm soát hành vi sang hiểu mục đích — hỏi con đang làm gì và vì sao, đồng hành thay vì cấm đoán.',
  },
  {
    icon: '🧠',
    title: 'Cấp độ cá nhân',
    tag: 'Kỹ năng hai chiều',
    desc: 'Cha mẹ học thêm kỹ năng số; người trẻ rèn tự quản lý thời gian và tư duy phản biện trước thông tin.',
  },
  {
    icon: '🎓',
    title: 'Nhà trường & xã hội',
    tag: 'Hỗ trợ hệ thống',
    desc: 'Workshop giao tiếp liên thế hệ, quyền riêng tư số, an toàn thông tin và mẫu thỏa thuận gia đình.',
  },
]

// Insight 7 cặp gia đình phỏng vấn
export const familyPairs = [
  {
    id: 'F01',
    valueGap: 'Riêng tư & tự chủ học tập là điểm căng nhất.',
    example: 'Mẹ thu điện thoại khi thấy con online khuya.',
    fix: 'Thỏa thuận giờ liên lạc và cách báo trước khi học nhóm khuya.',
  },
  {
    id: 'F02',
    valueGap: 'Ổn định hiểu khác nhau: biên chế vs kỹ năng linh hoạt.',
    example: 'Con nhận job freelance buổi tối, ba sợ ảnh hưởng việc học.',
    fix: 'Con trình bày kế hoạch thời gian & rủi ro thay vì bị phủ nhận.',
  },
  {
    id: 'F03',
    valueGap: 'Tự lập và an toàn va vào nhau.',
    example: 'Mẹ gọi video khuya, con không nghe vì đang học nhóm.',
    fix: 'Thống nhất khung giờ cập nhật và cách báo khi bận.',
  },
  {
    id: 'F04',
    valueGap: 'Kỷ luật cố định vs linh hoạt miễn hoàn thành việc.',
    example: 'Ba thấy con chơi game nửa đêm sau khi nộp project.',
    fix: 'Con báo tiến độ trước khi giải trí, đánh giá theo kết quả.',
  },
  {
    id: 'F05',
    valueGap: 'Quyền riêng tư và tình cảm cá nhân là điểm nhạy cảm.',
    example: 'Mẹ đọc tin nhắn khi con để điện thoại ngoài phòng khách.',
    fix: 'Phân biệt quan tâm với kiểm tra, có ranh giới rõ về điện thoại.',
  },
  {
    id: 'F06',
    valueGap: 'Tự do đi kèm trách nhiệm là điểm gần nhau nhất.',
    example: 'Con chơi game quá giờ cuối tuần, mẹ yêu cầu tự đề xuất cách sửa.',
    fix: 'Duy trì thỏa thuận có thể điều chỉnh theo lịch thi & sức khỏe.',
  },
  {
    id: 'F07',
    valueGap: 'Ổn định tài chính vs phát triển cá nhân.',
    example: 'Con nghỉ công ty để nhận dự án, ba cho là bốc đồng.',
    fix: 'Con chia sẻ kế hoạch tài chính định kỳ, ba góp ý rủi ro.',
  },
]

export const conclusion = {
  lead: 'Mâu thuẫn thế hệ không chỉ đến từ tuổi tác, mà từ điều kiện xã hội hóa khác nhau.',
  body: 'Thay vì xóa bỏ khác biệt, gia đình cần học cách sống chung với khác biệt bằng giao tiếp cởi mở và tin tưởng.',
  key: 'Công nghệ là công cụ, không phải kẻ thù. Khóa mở của mâu thuẫn = Giao tiếp + Tin tưởng.',
}

// Mô hình nghiên cứu (flow diagram)
export const modelFlow = {
  inputs: [
    { code: 'XHH', label: 'Khác biệt điều kiện xã hội hóa', b: 'B = 0.399' },
    { code: 'MTS', label: 'Khác biệt môi trường số', b: 'B = 0.409' },
  ],
  mediator: { code: 'KBG', label: 'Khác biệt giá trị' },
  outcome: { code: 'MTTH', label: 'Mâu thuẫn thế hệ' },
  link: 'B = 0.404 · p < .001',
  moderator: {
    code: 'GTGD',
    label: 'Giao tiếp gia đình cởi mở',
    b: 'B = -0.260 · p < .001',
  },
}

// Dữ liệu cho biểu đồ (recharts)
export const charts = {
  // Khu vực sinh sống của mẫu khảo sát
  area: [
    { name: 'Thành thị', value: 73.2 },
    { name: 'Nông thôn', value: 26.8 },
  ],
  // Nhóm tuổi
  age: [
    { name: '19–22 tuổi', value: 68.3 },
    { name: 'Nhóm khác', value: 31.7 },
  ],
  // Thời lượng dùng Internet / mạng xã hội mỗi ngày
  usage: [
    { name: '≥ 3 giờ/ngày', value: 76.2 },
    { name: '< 3 giờ/ngày', value: 23.8 },
  ],
  // Độ tin cậy thang đo (Cronbach's Alpha)
  reliability: [
    { name: 'XHH', alpha: 0.867 },
    { name: 'MTS', alpha: 0.893 },
    { name: 'GTGD', alpha: 0.889 },
    { name: 'KBG', alpha: 0.886 },
    { name: 'MTTH', alpha: 0.908 },
  ],
  // Hệ số hồi quy B của các giả thuyết chính
  beta: [
    { name: 'XHH → KBG', b: 0.399 },
    { name: 'MTS → KBG', b: 0.409 },
    { name: 'KBG → MTTH', b: 0.404 },
    { name: 'GTGD → MTTH', b: -0.26 },
  ],
}

// Kịch bản thuyết trình (presenter mode)
export const presenterScript = [
  {
    time: '0:00 – 0:30',
    title: 'Mở đầu',
    cue: 'Đặt câu hỏi & tạo tò mò',
    notes: [
      'Vì sao cha mẹ và con cái hay bất đồng? Không phải vì "cha mẹ già" mà vì cha mẹ lớn lên trong một thế giới khác.',
      'PAUSE sau câu "…lớn lên trong thế giới khác" để khán giả tự ngẫm.',
    ],
  },
  {
    time: '0:30 – 1:30',
    title: 'Điều kiện xã hội hóa',
    cue: 'Hai bối cảnh lớn lên',
    notes: [
      'Cha mẹ: sách vở, báo giấy, nghề ổn định → giá trị trách nhiệm, tập thể.',
      'Con cái: Internet, mạng xã hội, linh hoạt → giá trị tự chủ, khám phá.',
      'Nhấn mạnh: hai bối cảnh, hai bộ giá trị — không ai sai.',
    ],
  },
  {
    time: '1:30 – 2:20',
    title: 'Môi trường số',
    cue: 'Digital Natives vs Immigrants',
    notes: [
      'Cha mẹ thấy mạng xã hội là công cụ xa lạ; con cái thấy đó là không gian sống bình thường.',
      'Con số: 76.2% online ≥ 3h/ngày, 33.5% bất đồng liên quan tới mạng, 3.823/5 cha mẹ khó theo kịp.',
    ],
  },
  {
    time: '2:20 – 3:20',
    title: 'Khác biệt giá trị',
    cue: 'Bốn vùng bất đồng',
    notes: [
      'Học tập, nghề nghiệp, bạn bè/tình yêu, điện thoại — mỗi bên gán ý nghĩa khác nhau.',
      'DỪNG ở con số 0.615 — tương quan mạnh nhất: giá trị mới là gốc rễ, không phải công nghệ.',
    ],
  },
  {
    time: '3:20 – 4:20',
    title: 'Giao tiếp cởi mở',
    cue: 'Giải pháp cảm xúc',
    notes: [
      'Ba bước: Lắng nghe → Giải thích → Thương lượng.',
      'Câu chốt: "Cách chúng ta nói thay đổi cách chúng ta nghe." Giao tiếp cởi mở làm giảm mâu thuẫn (B = -0.260).',
    ],
  },
  {
    time: '4:20 – 5:20',
    title: 'Giải pháp 3 cấp độ',
    cue: 'Gia đình · Cá nhân · Xã hội',
    notes: [
      'Gia đình: hiểu mục đích thay vì chỉ kiểm soát hành vi.',
      'Cá nhân: cha mẹ học kỹ năng số, con học tự quản & tư duy phản biện.',
      'Nhà trường/xã hội: workshop, an toàn thông tin, thỏa thuận gia đình.',
    ],
  },
  {
    time: '5:20 – 5:50',
    title: 'Kết luận',
    cue: 'Kết thúc tích cực',
    notes: [
      'Công nghệ là công cụ, không phải kẻ thù.',
      'MỈM CƯỜI khi nói "tin tưởng": khóa mở của mâu thuẫn = Giao tiếp + Tin tưởng.',
    ],
  },
]

// Cấu trúc điều hướng giữa các "cảnh"
export const navItems = [
  { id: 'hero', label: 'Mở đầu' },
  { id: 'problem', label: 'Vì sao mâu thuẫn' },
  { id: 'socialization', label: 'Xã hội hóa' },
  { id: 'digital', label: 'Môi trường số' },
  { id: 'values', label: 'Khác biệt giá trị' },
  { id: 'communication', label: 'Giao tiếp' },
  { id: 'data', label: 'Dữ liệu' },
  { id: 'findings', label: 'Kết quả' },
  { id: 'solutions', label: 'Giải pháp' },
  { id: 'conclusion', label: 'Kết luận' },
]
