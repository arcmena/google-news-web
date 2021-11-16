import { api } from './api'

import { BASE_GOOGLE_NEWS_PARAMS } from '../constants/apiConstants'

import { INewsResponse, TArticle } from '../types/News'

export const getTopHeadlines = async () => {
  let res: { data?: TArticle[]; error?: any } = {
    data: undefined,
    error: undefined
  }

  try {
    const headlines = await api.get<INewsResponse>('/top-headlines', {
      params: { ...BASE_GOOGLE_NEWS_PARAMS }
    })

    const topHeadlines = headlines.data.articles

    res = {
      data: topHeadlines,
      error: undefined
    }
  } catch (error) {
    res = {
      data: undefined,
      error
    }
  }

  return res
}
