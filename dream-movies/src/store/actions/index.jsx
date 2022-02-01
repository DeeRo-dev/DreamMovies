import axios from 'axios'

export const GET_MOVIES = 'GET_MOVIES';

const key = 'd055834283d25ffeb36def2dd41152bd'

export function fetchDogs(){
  return async function(dispatch){
   let response = await axios.get(`https://netu.tv/api/file/list?key=${key}&show_files={show_files}&show_folders={show_folders}&page={page}&per_page={page}&name={name}&folder_id={folder_id}&order={order}`)
   console.log(response.data)
   return dispatch({
        
        type: GET_MOVIES,
        data: response.data
       })
      
    }
  }