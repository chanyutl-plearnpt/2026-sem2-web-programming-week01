import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <Stack spacing={2}>
        <Typography variant="h3">สมชาย ใจดี</Typography>
        <Typography variant="h6">นักเรียน ม.5 · กำลังเรียนทำเว็บ</Typography>
        <Typography variant="body1">ฉันชอบสร้างเว็บที่ใช้งานง่ายและสวยงาม</Typography>

        <Stack direction="row" spacing={1}>
          <Chip label="React" />
          <Chip label="TypeScript" color="primary" />
          <Chip label="MUI" variant="outlined" />
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button variant="contained">ดูผลงาน</Button>
          <Button variant="outlined">ติดต่อ</Button>
        </Stack>
      </Stack>
    </div>
  )
}
