export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab itaque excepturi minima neque culpa cumque natus, vitae cum? Quae quam aperiam inventore adipisci soluta distinctio sed, velit dignissimos vel numquam.",
      picture: null
    },
    {
      id: new Date().getTime()+1000,
      date: new Date().toDateString(),
     text: 'Esse non ea nostrud sit laboris laboris aliquip. Incididunt ullamco reprehenderit voluptate commodo ipsum fugiat quis velit aliquip non cillum amet. Irure nostrud labore nostrud commodo ex fugiat elit ipsum minim duis aute enim. Sit qui Lorem esse officia nisi.',
      picture: null
    },
    {
      id: new Date().getTime()+3000,
      date: new Date().toDateString(),
     text: 'Dolore dolore cillum dolor proident laboris duis nisi elit ad pariatur aute.',
      picture: null
    },
  ],
});
