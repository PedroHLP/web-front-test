import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask'; // Importe a biblioteca
import '../Cadastro.css'

const Cadastro = () => {
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      numeroXPTO: '',
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(3, 'O nome deve ter pelo menos 3 caracteres')
        .required('O nome é obrigatório'),
      email: Yup.string()
        .email('O email deve ser válido')
        .required('O email é obrigatório'),
      numeroXPTO: Yup.string()
        .test('is-xpto', 'Número XPTO inválido', (value) => {
          if (!value) return false;
          const regex = /^[0-9]{4}-[0-9]$/;
          if (!regex.test(value)) return false;
          const [numParte, dv] = value.split('-');
          const dv_calculado = calculaDV(parseInt(numParte, 10));
          return parseInt(dv, 10) === dv_calculado;
        })
        .required('Número XPTO é obrigatório'),
    }),
    onSubmit: (values) => {
      alert('Cadastro realizado com sucesso!');
    },
  });

  const calculaDV = (numero) => {
    let soma = 0;
    let peso = 4;
    for (const dígito of String(numero)) {
      soma += parseInt(dígito, 10) * peso;
      peso += 1;
    }
    const restoDivisao = soma % 20;
    const somaCom7 = restoDivisao + 7;
    const dv = somaCom7 % 10;
    return dv;
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            onChange={formik.handleChange}
            value={formik.values.nome}
          />
          {formik.touched.nome && formik.errors.nome ? (
            <div className="error">{formik.errors.nome}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="numeroXPTO">Número XPTO:</label>
          <InputMask
            mask="9999-9"
            type="text"
            id="numeroXPTO"
            name="numeroXPTO"
            onChange={formik.handleChange}
            value={formik.values.numeroXPTO}
          />
          {formik.touched.numeroXPTO && formik.errors.numeroXPTO ? (
            <div className="error">{formik.errors.numeroXPTO}</div>
          ) : null}
        </div>
      </form>
      <button type="submit">Cadastrar</button>

    </div>
  );
};

export default Cadastro;
