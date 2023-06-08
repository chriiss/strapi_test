import styles from "./App.module.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get("https://jazzy-croissant-15f8fc.netlify.app/api/articles?populate=assets");
        setArticles(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    getArticles();
  }, []);

  return (
    <div className={styles.bloc}>
      {articles.map((article) => (
        <div className={styles.children} key={article.id}>
          <h2>{article.attributes.title}</h2>
          {article.attributes.content}
          <img src={`http://localhost:1337${article.attributes.assets.data[0].attributes.url}`} alt={article.attributes.title} />
        </div>
      ))}
    </div>
  )
}

export default App;
