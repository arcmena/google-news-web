import { useEffect, useState } from 'react'

import { CardContent } from '../../components/layouts/CardContent/CardContent'
import { openUrl } from '../../helpers/urlHelpers'

import { getTopHeadlines } from '../../services/newsService'

import { TArticle } from '../../types/News'

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
      <>
        {topHeadlines.map(({ title, description, url }) => (
          <CardContent
            title={title}
            subtitle="Subtitle SM"
            paragraph={description}
            buttonLabel="Ver matéria"
            buttonAction={() => openUrl(url)}
          />
        ))}
      </>
    )
  }

  return null
}
