import { useEffect, useState } from "react";

export default function UseStateCrud()
{

    const [client,setClient]=useState({
        idClient:1,
        nom:'',
        prenom:'',
        email:'',
        genre:''
    })

    const [listeClients,setListeClients]=useState([])
   const [startIndex,setStartIndex]=useState(0);
    const[modifierClicked,setModifierClicked]=useState(false)
    const getClient=(event)=>{
        setClient((preveClient)=>({
           ...preveClient,
           [event.target.name]:event.target.value
        }))

    }


    const AjouterClient=()=>{
        if(client.nom!='' && client.prenom && client.email && client.genre)
        {
            setListeClients((prevListeClient)=>([...prevListeClient,client]))
       
            setClient({
                idClient:client.idClient+1,
                nom:'',
                prenom:'',
                email:'',
                genre:''
            })
        }
        else
        {
            alert("Erreur tous les champs sont obligatoires")
        }
    }



const supprimerClient=(idClient)=>{
    setListeClients(listeClients.filter((cli=>cli.idClient!=idClient)))
}


const modifierClient=(cli)=>{
    setClient(cli)

    //afficher le bouton modifier
    setModifierClicked(true)
}



const ValiderModifierClient=()=>{
    setListeClients(listeClients.map((cli)=>{
        if(client.idClient==cli.idClient)
        {
            return client
        }
        else
        {
            return cli
        }
    }))


    //intialiser l'objet client pour ajouter un nouveau client
    setClient({
        idClient:listeClients[listeClients.length-1].idClient+1,
        nom:'',
        prenom:'',
        email:'',
        genre:''

    })


    //reafficher le bouton ajouter Client
    setModifierClicked(false)
}




    return(
        <div>
        <fieldset>
            <legend>Ajouter un client</legend>
            <table>
                <tr>
                    <td>Nom</td>
                    <td><input type="text" value={client.nom} name="nom" onChange={getClient}/></td>
                </tr>
                <tr>
                    <td>prenom</td>
                    <td><input type="text" name="prenom" value={client.prenom} onChange={getClient}/></td>
                </tr>
                <tr>
                    <td>email</td>
                    <td><input type="email" name="email"value={client.email} onChange={getClient}/></td>
                </tr>
                <tr>
                    <td>genre</td>
                    <td>
                        <input type="checkbox" name="genre"  value="Femme" checked={client.genre=="Femme"} onChange={getClient} style={{width:'25%'}}/>Femme
                        <input type="checkbox" name="genre"  value="Homme"  checked={client.genre=="Homme"} onChange={getClient} style={{width:'25%'}}/>Homme
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                       {modifierClicked? <input type="button" value="Modifier" onClick={ValiderModifierClient}/>
                       :<input type="button" value="Ajouter" onClick={AjouterClient}/>
                       
                       }

                    </td>
                </tr>
            </table>
        </fieldset>

        <h4>Liste Client</h4>
        <table>
            <thead>
                <th>Id</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Genre</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    listeClients.slice(startIndex,startIndex+3).map((cli,index)=>{
                        if(index<3)
                        {
                        return (
                            <tr>
                                <td>{cli.idClient}</td>
                                <td>{cli.nom}</td>
                                <td>{cli.prenom}</td>
                                <td>{cli.email}</td>
                                <td>{cli.genre}</td>
                                <td>
                                    <input type="button" value="Supprimer" onClick={()=>supprimerClient(cli.idClient)}/>
                                    <input type="button" value="Modifier" onClick={()=>modifierClient(cli)}/>
                                </td>
                            </tr>
                        )
                        }
                    })
                }
               
            </tbody>
        </table>

        les pages:{
            listeClients.map((p,index)=>{
                if(index%3==0) {
                return (
                    <button onClick={()=>setStartIndex(index)}>{index/3}</button>
                )
                }
            })
        }
    </div>
    )
}