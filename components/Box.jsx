export default function Box({text, color}) {
  return (
    <div style={{ backgroundColor: color, width: '100px', height: '100px',gap: '10px', justifyItems: 'center' }}>
        <p>{text}</p>
    </div>
  )
}
