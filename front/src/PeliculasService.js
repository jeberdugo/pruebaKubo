import axios from 'axios';

const url = 'http://localhost:5000/peliculas';

class PeliculasService {

    //Obtener peliculas
    static getPeliculas(){
        return new Promise(async (resolve, rej)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                
                resolve(
                    
                    data.map(peliculas=> ({
                        ...peliculas,
                        createdAt: new Date(peliculas.createdAt)
                    }))
                );

            }
            catch(err){
                rej(err);
            }
        });
    }

    //Crear pelicula
    static crearPelicula(data){
        return axios.post(url,{
            data
        });
    }

    //calificar
    static calificarPelicula(id, data){
        return axios.update(`${url}${id}`,{
            data
        });
    }

}
export default PeliculasService