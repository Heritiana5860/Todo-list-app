import React, { Component } from 'react';

class Formulaire extends Component{

    state = {
        nom : '',
        prenom: ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: [e.target.value]
        })
    }

    handleSubmi = (e) =>{
        e.preventDefault();
        this.props.handleAdd(this.state);
        this.setState({
            nom: '',
            prenom: ''
        })
    }

    render(){
        return(
            <div className="div-main">
                <form onSubmit={this.handleSubmi}>
                    <div className='style-card card'>
                        <h3 className='center-align'>Formulaire</h3>
                        <div className="fname">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" name='nom' id='nom' value={this.state.nom} required onChange={this.handleChange}/>
                        </div>
                        <div className="lname">
                            <label htmlFor="prenom">Preom</label>
                            <input type="text" name='prenom' id='prenom' value={this.state.prenom} required onChange={this.handleChange}/>
                        </div>
                        <div className="center-align">
                        <button className='waves-effect waves-light btn-large'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulaire;