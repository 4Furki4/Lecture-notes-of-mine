import { useState } from 'react'
import ColorInput from './components/ColorInput';
import Card from './components/Card';

export default function App() {
  const [colorText, setColor] = useState('');
  return (
    <>
      <Card colorText={colorText} />
      <ColorInput colorText={colorText} setColor={setColor} />
    </>
  )
}