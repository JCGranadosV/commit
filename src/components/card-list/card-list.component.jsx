import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => (
  //el props es el parametro que recibimos cuando ponemos <Cardlist name(o cualquier cosa)="x"
  <div className="card-list">
    {props.monsters.map((
      //al ponerle "className = 'card-list'" Hacemos que use el css de card-list.styles.css
      monster //mapea (pasa uno por uno) en el array de monsters
    ) => (
      <Card key={monster.id} monster={monster} /> //imprime el monster.name por cada monster.id
    ))}
  </div>
);
