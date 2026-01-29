import React from 'react'
// or less ideally
import { Button } from 'react-bootstrap';
import { useState } from 'react'
import axios from 'axios'
import { FacturaTable } from '../components/FacturaTable';

export const UploadFactura = () => {
  const [status, setStatus] = useState(false);
  const [contenido, setContenido] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const file = e.target.elements.archivo.files[0]

    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      /* link in text for try*/
      setStatus('Enviando...')
      const res = await axios.post('https://test-catalogue-app.ganantech.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
      setStatus('Éxito: ' + res.data.data + ' contenido extraído: ' + res.data.contenido_extraido)
      console.log('📦 JSON recibido:', JSON.stringify(res.data, null, 2))
      setContenido(res.data.contenido_extraido)
    } catch (error) {
      console.error(error)
      setStatus('Error al subir archivo')
    }
  }

  return (
    <div>
        <h1>UploadFactura</h1>
        <form onSubmit={handleSubmit}>
      <h2>Subir factura PDF</h2>
      <input type="file" name="archivo" accept="application/pdf" required />
      <br /><br /><br /><br />
      <Button type="submit">Subir</Button>
        {/* {status && <p>{status}</p>} */}
    </form>
    <br />
    {contenido && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Datos extraídos del PDF</h3>
          <FacturaTable contenido={contenido} />
        </div>
      )}
    </div>
  )
}


// export default function UploadFactura() {
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const file = e.target.elements.archivo.files[0]
//     console.log('Subiendo:', file)
//     // Aquí iría el envío real con fetch o axios + FormData
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Subir factura PDF</h2>
//       <input type="file" name="archivo" accept="application/pdf" required />
//       <button type="submit">Subir</button>
//     </form>
//   )
// }
