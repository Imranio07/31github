// import React from 'react'
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }
//
//   componentDidMount() {
//     fetch("https://pokeapi.co/api/v2/pokemon/")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }
//
//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Ошибка: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Загрузка...</div>;
//     } else {
//       return (
//         <ul>
//
//           {items?.map(item => (
//             <li key={item.id}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }
// export default MyComponent