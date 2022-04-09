import {API_URL} from "./consts"

const originalRequest = async (url, config) => {
  url = `${API_URL}${url}`
  const response = await fetch(url, {
    ...config,
    credentials: 'include',
    redirect: 'follow'
  })
  const data = await response.json()
  return {response, data}
}

const refreshToken = async (type) => {
  const response = await fetch(`${API_URL}/user/refresh`, {
    method: 'GET',
    credentials: 'include',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  const data = await response.json()
  console.log(data)
  localStorage.setItem('accessToken', data.accessToken)
  return data
}

const customFetcher = async (url, config, type) => {
  let accessToken = localStorage.getItem('accessToken') ?? null
  config['headers'] = {
    ...config['headers'],
    Authorization: `Bearer ${accessToken}`
  }
  let {response, data} = await originalRequest(url, config)
  if (response.status === 401 && response.message === 'Refresh token is empty'){

  }
  console.log(response.status)
  if(response.status === 401){
    response = await refreshToken(type)
    config['headers'] = {
      Authorization: `Bearer ${response.accessToken}`
    }

    const newResponse = await originalRequest(url, config)
    response = newResponse.response
    data = newResponse.data
  }

  return {response, data}
}

export default customFetcher
