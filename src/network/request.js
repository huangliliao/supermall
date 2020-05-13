import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:"http://123.207.32.32:8000/api/m3",
   /* baseURL:'http://123.207.32.32:8000/api/h3',*/
    timeout:5000 ,
  })
  return instance(config)
}

