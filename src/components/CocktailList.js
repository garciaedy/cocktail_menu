import React from "react"
import Cocktail from './Cocktail';

export default function CocktailList({cocktails, loading}){
  if (loading) {
    return <h2 className="section-title">Loading...</h2>
  }
  if(cocktails.letgh)
}