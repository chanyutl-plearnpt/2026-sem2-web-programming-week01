import Button from '@mui/material/Button'

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      {/* TODO 1: แก้ข้อความ 2 บรรทัดด้านล่างนี้เป็นของคุณ แล้วดูหน้าเว็บเปลี่ยนทันที */}
      <h1>สวัสดีชาวโลก</h1>
      <p>นี่คือเว็บแรกของฉัน</p>

      {/* TODO 2: ทำนายก่อนว่าหน้าตาปุ่มจะเปลี่ยนเป็นอย่างไร แล้วลองเปลี่ยน variant เป็น "outlined" และ "text" */}
      <Button variant="contained">กดฉันสิ</Button>

      {/* TODO 3: ดูภาพ target.png แล้วสร้างหน้าให้เหมือนภาพ
          ใช้ Typography, Stack, Chip, Button (import เพิ่มด้านบนเหมือนบรรทัดแรก)
          ลบ h1, p และปุ่มด้านบนทิ้งได้ ไม่ต้องใช้แล้ว
          ไม่รู้ว่าต้องใส่ค่า prop อะไร ให้เปิดหน้าเอกสาร mui.com/material-ui ของ component นั้น */}
    </div>
  )
}
