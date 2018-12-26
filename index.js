/*  Passing Data to Child Components with Props

Earllier, we mentioned creating a component for blog posts.
The problem is, that component won't be useful unless you can
pass data to it, such as the title and content of the specific
post we want to display. That's where props come in.

Props are custom attributes you can register on a component.
When a value is  passed to a prop attribute, it becomes a property
on that component instance. To pass a title to our blog post
component, we can include it in the list of props this 
component accepts, using a props option:

*/

Vue.component('blog-post',{
	props: ['title'],
	template: '<h3> {{ title }} </h3>'
})

/*
A component can have as many props as you'd
like and by defalut, any value can be 
passed to any prop. In the template above,
you'll see that we can access this value
on the component instance, just like with
data .

Once a prop is registered, you can pass data
to it as a custom  attribute, like this:

*/

new Vue({
	el: '#components-demo'
})