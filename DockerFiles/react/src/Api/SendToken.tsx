import axios from 'axios';
import { SetParamsToGetPost } from '../Headers/HeaderManager';

export async  function  SendTokenRequest(tokenForm  : any)
{
const config = SetParamsToGetPost()
  return await axios.post(`${process.env.REACT_APP_SERVER}:3630/auth/register`,  tokenForm, config)
}
