# สัปดาห์ 1 — เว็บคืออะไร และคิดแบบ component (P1 Portfolio)

## เริ่มต้น (ทำในคาบคู่)

คาบเดี่ยวสัปดาห์นี้ไม่ใช้คอมพิวเตอร์ (กิจกรรมวาด component บนกระดาษ) ส่วนคาบคู่ทำตามนี้

1. ครูพาทำทีละขั้น: เข้าสู่ระบบ GitHub ด้วยบัญชีของคุณ, ตั้งค่า git ในเครื่อง (ชื่อ และอีเมล noreply ของ GitHub — repo นี้เป็น public อย่าใช้อีเมลจริง), เปิด [repo สัปดาห์ 1](https://github.com/chanyutl-plearnpt/2026-sem2-web-programming-week01) แล้วกด **Fork**
2. สร้างโฟลเดอร์ `web-prog-2026` ไว้ที่ที่หาง่าย (เช่น Documents) เปิด Terminal ในโฟลเดอร์นั้น แล้ว clone fork ของคุณลงมาเป็นโฟลเดอร์ชื่อ `w01`

   ```
   git clone https://github.com/<ชื่อผู้ใช้ GitHub ของคุณ>/2026-sem2-web-programming-week01.git w01
   cd w01
   ```

   ทุกสัปดาห์จะ clone เป็น `w02`, `w03`, … ไว้ข้างกันในโฟลเดอร์ `web-prog-2026` นี้
3. เปิดโฟลเดอร์ `w01` ใน VS Code แล้วเปิด Terminal พิมพ์

   ```
   npm install
   npm run dev
   ```

4. เปิดเบราว์เซอร์ไปที่ <http://localhost:5173> จะเห็นหน้าเว็บแรก

## สัปดาห์นี้มีอะไรใหม่

- ไฟล์ที่แก้ได้: `src/App.tsx`
- component คือชิ้นส่วนของหน้าเว็บที่นำกลับมาใช้ได้ `<Button>` เป็น component ที่มาจาก MUI

## งานวันนี้

ดู `TASKS.md`

## จบคาบ

```
git add .
git commit -m "สัปดาห์ 1: <สรุปสั้นๆ ว่าทำอะไร>"
git push
```

งานจะอยู่ใน fork ของคุณบน GitHub (ทำงานบน branch `starter` ได้เลย ไม่ต้องสร้าง branch ใหม่) หลังจบคาบ ครูจะ push branch `final` (เฉลย) ไว้ใน repo ของครู เปิดดูเทียบกับ `starter` ได้

## ถ้าทำพัง

ย้อนไฟล์ที่ยังไม่ commit กลับเป็น starter ได้ด้วย `git restore .` (เสียแค่ส่วนที่แก้ในสัปดาห์นี้) หรือลบโฟลเดอร์แล้ว clone fork ของคุณใหม่

## คำสั่งที่ใช้บ่อย

| คำสั่ง | ทำอะไร |
|---|---|
| `npm run dev` | เปิดเว็บเพื่อดูผลระหว่างแก้ |
| `npm run check` | ตรวจ error ของ TypeScript |
| `npm run build` | สร้างเว็บฉบับสมบูรณ์ (ใช้ตอน deploy) |
