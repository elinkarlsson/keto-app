import { useArticles } from '../articles-provider/ArticlesProvider';
import Card from '../components/card/Card';

const ArticlesPage = () => {

  const articlesState = useArticles();

  return <div className='page'>
    <div className='gallery'>
      {articlesState.articles.map(article => {
        return (
          <Card key={article.name} heading={article.name} body={article.body} imageUrl={''} link={`/article/${article.id}`} />
        )
      })
      }
    </div>
  </div>
}

export default ArticlesPage;