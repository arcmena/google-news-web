import { useEffect, useState } from 'react'

import { Heading } from '../../components/elements/Heading/Heading'
import { CardContent } from '../../components/layouts/CardContent/CardContent'

import { getTopHeadlines } from '../../services/newsService'

import { cutContent } from '../../helpers/newsHelpers'
import { openUrl } from '../../helpers/urlHelpers'

import { TArticle } from '../../types/News'

import { NewsPageContainer } from './styles'

export function NewsPage() {
  const [topHeadlines, setTopHeadlines] = useState<TArticle[] | undefined>()
  const [error, setError] = useState(false)

  const getNews = async () => {
    const { data } = await getTopHeadlines()

    if (data) {
      return setTopHeadlines(data)
    }

    setError(true)
  }

  useEffect(() => {
    getNews()
  }, [])

  if (error) {
    return <div>error</div>
  }

  if (topHeadlines) {
    return (
      <NewsPageContainer>
        <Heading className="news-page__title">
          Ultimas máterias de todo Brasil
        </Heading>

        {topHeadlines.map(({ title, description, content, url }) => (
          <CardContent
            title={title}
            subtitle={description}
            paragraph={cutContent(content)}
            buttonLabel="Ver matéria"
            buttonAction={() => openUrl(url)}
          />
        ))}
      </NewsPageContainer>
    )
  }

  return null
}
