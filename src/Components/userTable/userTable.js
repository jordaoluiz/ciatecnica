import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './Styles'
import { DataGrid } from '@material-ui/data-grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Link } from "react-router-dom";


export default function UserTable() {
    const classes = useStyles();

    const columns = [
        { field: 'firstName', headerName: 'Nome', width: 130 },
        { field: 'lastName', headerName: 'Sobrenome', width: 130 },
        { field: 'phone', headerName: 'Telefone', width: 140 },
        {
            field: 'fullName',
            headerName: 'Nome Completo',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },
        { field: 'isActive', headerName: 'Status', width: 100 },
    ];
    const rows = [
        { id: 1, lastName: 'Jordão', firstName: 'Luiz', phone: '(12) 99180-1118', isActive: 'Ativo' },
        { id: 2, lastName: 'Técnica', firstName: 'Cia', phone: '(17) 99180-1118', isActive: 'Ativo' },
    ];
    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <strong>Tabela de usuários</strong>
                    <div className={classes.addUser}>
                    <Link to="/novoUsuario" style={{ textDecoration: "none" }}>
                        <Fab color="secondary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Link>
                    </div>
                    <div style={{ height: 400, width: 1500, marginTop: 50 }}>
                        <DataGrid rows={rows} columns={columns} pisActiveSize={5} checkboxSelection />
                    </div>
                </CardContent>

            </Card>
        </>
    );
}
