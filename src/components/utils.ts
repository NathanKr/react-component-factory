import { ReactElement , createElement } from "react";
import Book from "./Book";
import Person from "./Person";

export enum ComponentFactoryItemName{
    person,
    book
}

export interface IComponentFactoryItem{
    name:ComponentFactoryItemName;
    props: any; 
}

export  function componentFactory(item : IComponentFactoryItem) : ReactElement{
    const {name,props} = item;
    switch(name){
        case  ComponentFactoryItemName.person :
            return createElement(Person,props);

        case ComponentFactoryItemName.book:
            return createElement(Book,props);                        

        default:
            throw new Error(`Unexpected ComponentFactoryItemName : ${name}`);
    }
}