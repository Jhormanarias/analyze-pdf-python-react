import React from 'react'

export const FacturaTable = ({ contenido }) => {
  if (!contenido) return null

  // Convertir líneas como "Proveedor: ACME S.A." en pares clave-valor
  const lineas = contenido.split('\n').filter(Boolean)
  const filas = lineas.map((linea) => {
    const [clave, ...resto] = linea.split(':')
    return { clave: clave.trim(), valor: resto.join(':').trim() }
  })

  return (
    <>
    {
      contenido ?
      (
        <table className="table table-bordered table-sm">
      <thead>
        <tr>
          <th>Campo</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {filas.map(({ clave, valor }, index) => (
          <tr key={index}>
            <td>{clave}</td>
            <td>{valor}</td>
          </tr>
        ))}
      </tbody>
    </table>)
    :
    (
    <div>No hay</div>
    )
    }
    </>
    
  )
}
