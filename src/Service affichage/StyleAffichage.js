const StyleAffichage = ({data, handleDelete}) =>{

    const affiche = data.length ? data.map(dt =>{
        return(
            <div key={dt.id} className="card" onClick={() =>handleDelete(dt.id)}>
                <p>Nom: { dt.nom }</p>
                <p>Prenom: { dt.prenom}</p>
            </div>
        )
    }) : (
        <h3 className="center-align">Empty list...</h3>
    );

    return(
        <div className="div-data">
            {
                affiche
            }
        </div>
    );
}

export default StyleAffichage;