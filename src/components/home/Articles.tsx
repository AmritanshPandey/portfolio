
import ArticleCard from '../global/Cards/ArticleCard'
import SectionTitle from '../global/SectionTitle/SectionTitle'

function Articles() {
  return (
      <section className="ai padding-page secondary-background">
            <SectionTitle title="AI & Web Tools"
                actionLabel="View All"
                actionHref="/work/case-studies" />

            <div className="article-grid margin-top-lg">
               <ArticleCard />
               <ArticleCard />
               <ArticleCard />
               <ArticleCard />  



            </div>
        </section>
  )
}

export default Articles