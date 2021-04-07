import React from 'react';
import {useEffect, useRef } from 'react';
import viaCEP from "../../Services/viaCEP"
import Input from "../Input/Input"
import {Form} from "@unform/web"
import useStyles from "./Style"
import { RedoOutlined } from '@material-ui/icons';

export default function NewUserForm() {
    const classes = useStyles()
    const formRef = useRef(null)
    const handleSubmit = (data) =>{
        let dataJson = JSON.stringify(data)
        let usuarios = []
        usuarios.push(localStorage.getItem('usuarios')||[])
        usuarios.push(dataJson)
        setTimeout(() =>{
            alert('Cadastrado com sucesso')
        }, 1000)
    }

    useEffect(async () => {
        if(formRef.current.getFieldValue('CEP') == null){
            return ''
        }else{
            let value = formRef.current.getFieldValue('CEP')
            const dados = await viaCEP.get(`${value}/json`)
            console.log(dados)

        }
    }, [ formRef.current.getFieldValue('CEP')])
  return (
    <>
    <Form className={classes.form} onSubmit={handleSubmit} ref={formRef}>
        <Input name="nome" placeholder="Nome"/>
        <br/>
        <br/>
        <Input name="Sobrenome" placeholder="Sobrenome"/>
        <br/>
        <br/>
        <Input name="Telefone" placeholder="Telefone"/>
        <br/>
        <br/>
        <Input name="Email" placeholder="E-mail"/>
        <br/>
        <br/>
        <Input name="CEP" placeholder="CEP"/>
        <br/>
        <br/>
        <Input name="rua" placeholder="Rua"/>
        <br/>
        <br/>
        <Input name="cidade" placeholder="Cidade"/>
        <br/>
        <br/>
        <Input name="uf" placeholder="Estado"/>
        <br/>
        <br/>
        <Input name="btn" type="submit"   value="Cadastrar"/>
    </Form>
    </>
  );
}
