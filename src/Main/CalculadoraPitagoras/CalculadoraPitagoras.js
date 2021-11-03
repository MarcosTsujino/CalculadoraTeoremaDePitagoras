import React, { useState } from 'react'
import IMG from '../../assets/triangulo-retangulo.jpeg'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {
  Container,
  InputGrid,
  MiniGrid,
  Img,
  Hipotenusa,
  Op,
  Adj,
  Result,
  ResultOp,
  ResultAdj
} from './styled'

export default function CalculadoraPitagoras() {
  const [catetoOp, setCatetoOp] = useState()
  const [catetoAdj, setCatetoAdj] = useState()
  const [result, setResult] = useState()
  const [hipotenusa, setHipotenusa] = useState()
  const [resultCatetoOp, setresultCatetoOp] = useState()
  const [resultCatetoAdj, setresultCatetoAdj] = useState()

  // calcula o valor da hipotenusa, emiti um alerta de exigência

  function handleOnClick() {
    const hipotenusa = Math.sqrt(Math.pow(catetoOp, 2) + Math.pow(catetoAdj, 2))
      .toFixed(2)
      .replace('.', ',')

    setResult(hipotenusa)

    if (catetoOp == 0 && catetoAdj == 0) {
      alert('Pelo menos dois campos devem ter números válidos')
      return
    }
  }

  // calcula o valor do cateto Oposto, emiti um alerta de exigência

  function handleOnClick3() {
    const cateto = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(catetoAdj, 2))
      .toFixed(2)
      .replace('.', ',')

    setresultCatetoOp(cateto)

    if (hipotenusa == 0 && catetoAdj == 0) {
      alert('Pelo menos dois campos preenchidos com números válidos')
      return
    }
  }
  // calcula o valor do cateto Adjacente, emiti um alerta de exigência

  function handleOnClick2() {
    const cateto = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(catetoOp, 2))
      .toFixed(2)
      .replace('.', ',')

    setresultCatetoAdj(cateto)

    if (hipotenusa == 0 && catetoOp == 0) {
      alert('Pelo menos dois campos preenchidos com números válidos')
      return
    }
  }

  function clearFields() {
    setHipotenusa('')
    setCatetoOp('')
    setCatetoAdj('')
    setResult()
    setresultCatetoOp()
    setresultCatetoAdj()
  }

  return (
    <div>
      <Container>
        <div>
          <InputGrid>
            <p>
              Digite o valor para o Cateto (adjacente e/ou oposto) e/ou
              hipotenusa e obtenha o valor desejado:
            </p>
            <TextField
              placeholder="Cateto Oposto"
              value={catetoOp}
              onChange={e => setCatetoOp(e.target.value)}
            />
            <TextField
              placeholder="Cateto Adjacente"
              value={catetoAdj}
              onChange={e => setCatetoAdj(e.target.value)}
            />
            <TextField
              placeholder="Hipotenusa"
              value={hipotenusa}
              onChange={e => setHipotenusa(e.target.value)}
            />
          </InputGrid>

          <MiniGrid>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleOnClick()
                handleOnClick2()
                handleOnClick3()
              }}
            >
              Resultado
            </Button>
            <Button variant="contained" color="secondary" onClick={clearFields}>
              Limpar Campos
            </Button>
          </MiniGrid>
        </div>

        <Img src={IMG} alt="triangulo-retangulo" />
        {/* Os ternários renderizam alternativamente ou o valor inserido no input ou o resultado das funções  */}

        <Hipotenusa>
          <strong>Hipotenusa:</strong>
        </Hipotenusa>
        <Result>{hipotenusa > 0 ? hipotenusa : result}</Result>

        <Op>
          <strong>Cat. Oposto:</strong>
        </Op>
        <ResultOp>{catetoOp > 0 ? catetoOp : resultCatetoOp}</ResultOp>

        <Adj>
          <strong>Cat. Adj.:</strong>
        </Adj>

        <ResultAdj>{catetoAdj > 0 ? catetoAdj : resultCatetoAdj}</ResultAdj>
      </Container>
    </div>
  )
}
