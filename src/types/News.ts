export type TArticle = {
  author: string
  title: string
  description: string
  url: string
}

export interface INewsResponse {
  articles: Array<TArticle>
}
