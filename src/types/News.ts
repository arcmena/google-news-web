export type TArticle = {
  author: string
  title: string
  description: string
  content: string
  url: string
}

export interface INewsResponse {
  articles: Array<TArticle>
}
