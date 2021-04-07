import React from 'react';
import Header from '../../Components/Header/Header'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NewUserForm from "../../Components/NewUserFrom/Form"
import useStyles from "./Styles"

export default function NewUserPage() {
  const classes = useStyles()
  return (
    <>
        <Header/>
        <Card className={classes.root}>
            <CardContent>
                <strong>Cadastrar novo usuário</strong>
                <div className={classes.formUser}>
                  <NewUserForm/>    
                </div>
            </CardContent>
        </Card>
    </>
  );
}
