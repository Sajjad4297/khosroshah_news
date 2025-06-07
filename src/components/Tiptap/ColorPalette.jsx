import { useState, useRef, useEffect } from 'react'

export const ColorPalette = ({ editor }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  const colors = [
    '#000000', '#FF0000', '#FFA500', '#FFFF00',
    '#008000', '#0000FF', '#4B0082', '#EE82EE',
    '#808080', '#A52A2A', '#00CED1', '#FF69B4',
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(!open)}>
        🎨
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: 0,
            background: '#fff',
            padding: '10px',
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '5px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 100,
          }}
        >
          {colors.map((color) => (
  <button
    key={color}
    onClick={() => {
      const { empty } = editor.state.selection
      if (!empty) {
        editor.chain().focus().setColor(color).run()
      } else {
        alert("لطفاً ابتدا متنی را انتخاب کنید.")
      }
      setOpen(false)
    }}
    style={{
      backgroundColor: color,
      width: '24px',
      height: '24px',
      borderRadius: '4px',
      border: '1px solid #aaa',
    }}
    title={color}
  />
))}

        </div>
      )}
    </div>
  )
}
