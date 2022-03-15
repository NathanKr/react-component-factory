<h2>Motivation</h2>
Configureable UI. Use case : suppose you have a quiz app each quiz has few quiz items and each item has question and few possible answers. In its most basic use case all questions and answers are string and you can use e.g p element to render them. However, some time the question is a string , followed by an image. Some this this string is special because it has js code or html code and you need other componet to render it. So we need a flexiable mechanizm to create components and the set of these component is known a-priori


<h2>Design</h2>
Component in react are objects and there is a need to create them - this will be done using factory method called here componentFactory. I am using simple Person and Book to show this

<h2>componentFactory</h2>
```
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
```

<h2>Usage</h2>

```
const elems = order.map((it) =>
    componentFactory({ name: it.name, props: it.props })
  );

 return <div className="App">{elems}</div>;
```

<h2>Points of interest</h2>
Typescript make it easy : in particula interface and enum 

