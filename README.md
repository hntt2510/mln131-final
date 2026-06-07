# mln131-final

Website trình bày tương tác (interactive scrollytelling) cho dự án nghiên cứu RBL MLN131:
**"Mâu thuẫn thế hệ trong gia đình số – Khác biệt cha mẹ và con cái là khác biệt tuổi tác hay khác biệt điều kiện xã hội?"**

Xây dựng bằng **React + Three.js** với hiệu ứng chuyển cảnh mượt, nền 3D động và animation theo cuộn (scroll-driven).

## Công nghệ

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) — nền tảng & build
- [Three.js](https://threejs.org/) qua [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) — nền 3D động (hai "đám mây hạt" thế hệ, quả cầu mâu thuẫn, camera bay theo cuộn)
- [Framer Motion](https://www.framer.com/motion/) — reveal animation, đếm số, thanh tiến trình
- [Lenis](https://github.com/darkroomengineering/lenis) — smooth scroll, đồng bộ với render loop 3D

## Mạch nội dung (flow)

1. **Mở đầu** — Đặt vấn đề
2. **Điều kiện xã hội hóa** — Hai thế hệ, hai bối cảnh lớn lên
3. **Môi trường số** — Digital Natives vs Digital Immigrants
4. **Khác biệt giá trị** — 4 vùng bất đồng & tương quan mạnh nhất (r = 0.615)
5. **Giao tiếp gia đình** — 3 bước đối thoại (B = -0.260)
6. **Dữ liệu** — 164 mẫu, độ tin cậy thang đo (Cronbach's Alpha)
7. **Kết quả** — Kiểm định giả thuyết H1–H6, R² = 46.4%
8. **Giải pháp** — 3 cấp độ + insight 7 cặp gia đình
9. **Kết luận** — Giao tiếp + Tin tưởng

## Chạy dự án

```bash
npm install
npm run dev      # chạy môi trường phát triển
npm run build    # build production vào /dist
npm run preview  # xem thử bản build
```

## Cấu trúc

```
src/
├─ three/Scene.jsx        # nền 3D (react-three-fiber)
├─ store/scroll.js        # state cuộn chia sẻ giữa Lenis và render loop
├─ components/            # Nav, Progress, Reveal, Counter
├─ sections/              # 9 cảnh nội dung
├─ data/content.js        # toàn bộ dữ liệu nghiên cứu
└─ styles/global.css      # design system
```

Tài liệu nghiên cứu gốc nằm trong thư mục [`docs/`](./docs).

---

> Nhóm SE1829 · FPT University · GVHD: Nguyễn Trung Hiếu
