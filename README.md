<h2>Motivation</h2>
<p>Configurable UI<p>
 Use case: suppose you have a quiz app each quiz has a few quiz items. Each item has a question and a few possible answers. In its most basic use case, all questions and answers are strings and you can use e.g p element to render them. However, sometimes the question is a string, followed by an image. Sometimes this string is special because it has js code or HTML code and you need another component to render it. So we need a flexible mechanism to create components by specific order. Notice  that the set of these components is known a priori



<h2>Design</h2>
A component in react is an object and there is a need to create it. This will be done using the factory method called here componentFactory. I am using simple Person and Book components to show this


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
<ul>
<li>Typescript make it easy: in particular interface and enum</li>
<li>The configurable UI is typically stored on a database e.g. MongoDB as follows


```
{
      name: 0,
      props: { name: "Jim Smith", age: 33 },
    },
    {
      name: 1,
      props: { name: "Bible", Description: "Holly stuff", pages: 123 },
    },
    {
      name: 0,
      props: { name: "John Doe", age: 56 },
    }
}
```

You might want to use ComponentFactoryItemName with strings to make this clear e.g.


```
export enum ComponentFactoryItemName{
    person='person' , 
    book='book'
}
```

</li>
</ul>


