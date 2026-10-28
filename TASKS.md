# งานสัปดาห์ 1

> ทุกข้อใน **Core** ต้องจบภายในคาบ ไม่มีการบ้าน ส่วน **Challenge** ทำหรือไม่ทำก็ได้ ไม่เก็บคะแนน

## คาบเดี่ยว (40 นาที) — วาด component และลอง Inspector

| # | งาน | เวลา |
|---|---|---|
| 1 | ฟังภาพรวมคอร์สและ 3 project | 10 |
| 2 | **Deconstruct:** เลือกเว็บจริง 1 เว็บ (เว็บโรงเรียน, YouTube ฯลฯ) วาดกรอบแยกเป็น component บนกระดาษ ตั้งชื่อแต่ละกรอบ | 20 |
| 3 | เปิดคอมพิวเตอร์ ใช้ Inspector เลือกกล่องและลองแก้ข้อความหรือสี แล้วรีเฟรชดูผล | 8 |
| 4 | สรุปและตอบคำถาม | 2 |

**Done check:** มีภาพวาด component อย่างน้อย 5 กรอบพร้อมชื่อ และเคยใช้ Inspector เลือกกล่องและลองแก้อย่างน้อย 1 อย่าง

## คาบคู่ (70 นาที)

ข้อ 1–10 เป็น Core ทุกข้อต้องจบในคาบ ไม่มีการบ้าน

| # | งาน | เวลา |
|---|---|---|
| 1 | ใช้ GitHub Desktop ตั้งชื่อ/noreply email ราย repo, Fork repo สัปดาห์ 1 ตามลิงก์ครู แล้ว clone เป็น `web-prog-2026/w01` ตรวจ branch `starter` | 15 |
| 2 | เปิดโฟลเดอร์ใน VS Code แล้ว `npm install` | 3 |
| 3 | `npm run dev` แล้วเปิด URL ที่ Terminal แสดง | 2 |
| 4 | **TODO 1:** แก้ข้อความ 2 บรรทัดใน `src/App.tsx` เป็นของคุณ | 4 |
| 5 | **TODO 2:** ทำนายก่อน แล้วเปลี่ยน `variant` ของปุ่มเป็น `"outlined"` และ `"text"` สังเกตผล | 6 |
| 6 | ลองพิมพ์ผิดชื่อ prop (เช่น `varient`) อ่าน error แล้วแก้กลับ | 5 |
| 7 | **ลองใช้ component ใหม่:** `Typography`, `Stack`, `Chip` และฝึกอ่านเอกสาร MUI เพื่อหาว่า prop ไหนรับค่าอะไร | 12 |
| 8 | **TODO 3:** ดูภาพ `target.png` แล้วสร้างหน้าให้เหมือนภาพด้วย component ที่เรียน | 13 |
| 9 | `npm run check` ให้ผ่าน แล้วใช้ GitHub Desktop ดู diff, Commit, Push origin และตรวจ fork | 7 |
| 10 | Exit ticket | 3 |

**Done check:** หน้าเว็บของคุณหน้าตาเหมือน `target.png` (ข้อความเป็นของคุณได้) และเห็นการแก้ไขใน fork ของคุณบน GitHub

> ครูเตรียมก่อนคาบ: ติดตั้ง Node.js, VS Code และ GitHub Desktop ทดลอง login ด้วยบัญชีนักเรียน และตรวจว่าเข้าอีเมลรับโค้ดยืนยันได้
>
> Repo เป็น public และ fork ของนักเรียนก็เป็น public เปลี่ยนเป็น private ไม่ได้ จึงให้ตั้ง **Keep my email addresses private** ใน GitHub Settings → Emails แล้วใช้อีเมล `…@users.noreply.github.com` ใน `git config user.email` เพื่อไม่ให้อีเมลจริงติดอยู่ในประวัติ commit

## Challenge (สมัครใจ ไม่เก็บคะแนน)

- เพิ่ม `<Alert>` หนึ่งกล่องไว้บนสุดของหน้า ให้เป็นสีเขียว (หาจากเอกสารว่า prop ไหนเปลี่ยนสีของ Alert)
- เปลี่ยนชิป 3 ใบให้ใบหนึ่งมีขนาดเล็กลง และอีกใบมีสีรอง (`secondary`)
- เปิด <https://mui.com/material-ui/react-button/> หา prop อื่นของ `Button` ที่ยังไม่เคยใช้ (เช่น `size`, `disabled`) แล้วลองใช้
