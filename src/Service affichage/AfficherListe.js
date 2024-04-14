import React, { Component } from 'react';
import StyleAffichage from "./StyleAffichage";
import Formulaire from '../Service formulaire/Formulaire';

class AfficherListe extends Component {
    state = {
        lst: [
            { nom: 'TORO', prenom: 'Beto', id: 1 },
            { nom: 'HERITIANA', prenom: 'William', id: 2 },
        ]
    }
    handleDelete = (id) => {
        const dlt = this.state.lst.filter(fil => {
            return fil.id !== id;
        })
        this.setState({
            lst: dlt
        })
    }

    handleAdd = (e) => {
        e.id = Math.random();
        let lists = [...this.state.lst, e];
        this.setState({
            lst: lists
        })
    }

    render() {
        return (
            <div>
                <Formulaire handleAdd={ this.handleAdd }/>
                <StyleAffichage data={this.state.lst} handleDelete={this.handleDelete} />

            </div>
        );
    }
}

export default AfficherListe;