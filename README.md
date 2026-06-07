# mln131-final

Landing page trình bày dự án nghiên cứu **RBL MLN131** —
**"Mâu thuẫn thế hệ trong gia đình số: Khác biệt cha mẹ – con cái là khác biệt tuổi tác hay khác biệt điều kiện xã hội?"**

Xây dựng theo phong cách một creative-studio landing page, nhưng toàn bộ nội dung được biên tập lại từ dữ liệu nghiên cứu của nhóm.

## Công nghệ

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** — toàn bộ giao diện, nền trắng, hệ màu tối #051A24 / #0D212C
- **lucide-react** — icon
- Hiệu ứng thuần CSS + IntersectionObserver: marquee vô tận, fade-in-up theo cuộn, parallax, mouse-trail

> Ghi chú: font gốc PP Neue Montreal / PP Mondwest là font thương mại nên được thay
> bằng Google Fonts hỗ trợ tiếng Việt: **Be Vietnam Pro** (body) + **Playfair Display** (serif nhấn).
> Ảnh GIF stock được thay bằng các thẻ visual gradient đúng chủ đề gia đình số.

## Bố cục (theo prompt landing page)

1. **Hero** — tiêu đề nghiên cứu + 3 đoạn giới thiệu
2. **Marquee** — dải khái niệm cuộn vô tận (sách vở ↔ TikTok…)
3. **Quote** — trích dẫn cốt lõi + parallax, "logo" là các khung lý thuyết (Mannheim, Prensky, Olson)
4. **Cơ chế** (pricing-style) — 2 cơ chế mạnh nhất: Khác biệt giá trị (r = 0.615) & Giao tiếp cởi mở (B = -0.260)
5. **Các gia đình nói gì** — carousel 7 cặp gia đình phỏng vấn
6. **Hành trình** (projects) — 3 mắt xích mô hình + bảng kiểm định giả thuyết H1–H5
7. **Partner** — CTA tương tác mouse-trail "Giao tiếp + Tin tưởng"
8. **Footer + Copyright + Bottom nav**

## Chạy dự án

```bash
npm install
npm run dev      # môi trường phát triển
npm run build    # type-check + build production vào /dist
npm run preview  # xem thử bản build
```

## Cấu trúc

```
src/
├─ App.tsx                      # hero + marquee + composition
├─ data/content.ts             # toàn bộ nội dung nghiên cứu (typed)
├─ hooks/useInViewAnimation.ts # IntersectionObserver scroll trigger
├─ components/                 # Button, FadeIn, VisualTile, các section
└─ index.css                  # fonts, marquee, fade-in-up, mouse-trail
```

Tài liệu nghiên cứu gốc nằm trong [`docs/`](./docs).

---

> Nhóm SE1829 · FPT University · GVHD: Nguyễn Trung Hiếu
