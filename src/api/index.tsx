import axios from 'axios'

export const http = () => {
  const get = (url: any) => {
    return axios.get(url);
  }

  const post = (url: string, body: any) => {
    const headers = {"content-type": "application/json"}
    return axios.post(url, body, {headers});
  }

  const patch = (url: string, body: any) => {
    const headers = {"content-type": "application/json"}
    return axios.patch(url, body, {headers});
  }

  const destroy = (url: string) => {
    return axios.delete(url);
  }

  return {
    get, post, patch, destroy
  }
}
