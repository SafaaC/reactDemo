import React from 'react';

function paras(){
    return (
        <div>
             <p>Since class is a keyword use className as an attribute in html tag.for the same reason use htmlFor
             instead of for attribute.For giving inline style to tag , make an object and define styles as key: value pair
            where the key should not have - or space use Camel cases(background-color=backgroundColor),and 
            pass the object within curely braces</p>
            <p>we can pass only a sigle statement in curely braces</p>
            <p>It is difficult to write 1000s of line in a single file. so seperated them into different file,
               with the support od react in the form of components.
               Props are arguments passed into React components.Props are passed to components via HTML attributes.
               if the prop is not having value , its default value is true
            </p>
        </div>
    )
}
export default paras;