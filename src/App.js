import './input.css'
import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function Input({
  tipoInput = 'text',
  label = 'Label',
  obrigatorio = false,
  corCampoText = '#cfcfcf',
  corLabel = '#cfcfcf',
  corEye = '#cfcfcf',
  corLinhaBottom = '#cfcfcf'
}) {
  const [tpInput, setTpInput] = useState(tipoInput)
  const [visivel, setVisivel] = useState(false)

  const handleEye = () => {
    setVisivel(!visivel)
    setTpInput(!visivel ? 'text' : 'password')
  }

  return (
    <div className="Input">
      <input
        type={tpInput}
        placeholder=" "
        style={{ color: corCampoText }}
        required={obrigatorio}
      />

      <p style={{ color: corLabel }}>{label}</p>
      {tipoInput === 'password' ? (
        <div onClick={handleEye} className="Input-Type">
          {visivel ? (
            <FiEye color={corEye} size={22} />
          ) : (
            <FiEyeOff color={corEye} size={22} />
          )}
        </div>
      ) : (
        ''
      )}
      <div
        className="borderBottom"
        style={{ backgroundColor: corLinhaBottom }}
      ></div>
    </div>
  )
}
