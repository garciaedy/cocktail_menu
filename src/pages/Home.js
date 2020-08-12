import React  from 'react';
import CocktailsList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'



export default function Home() {

  const [loading, setLoading] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('a');
    const [cocktails, setCocktails] = React.useState([]);
    
    React.useEffect(() =>{
      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then(response => response.json())
      .then(data => setCocktails(data.drinks));
      
    },[]);

    return (
      <main>
        <SearchForm setSearchTerm={setSearchTerm}/>
        <CocktailsList loading={loading} cocktails={cocktails}/>
      </main>
    );

  }