import React from "react";

// class SearchBox extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     // console.log(this.props);

//     // const { name, searchChange } = this.props;

//     return (
//       // <div>
//       //   filter :
//       //   <input type="search" onChange={searchChange} />
//       //   <h1>{name}</h1>
//       // </div>
//       <div>
//         <div>ooo</div>
//         <div>ooo</div>
//       </div>
//     );
//   }
// }

// export default SearchBox;

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      filter :
      <input type="search" onChange={searchChange} />
    </div>
  );
};

export default SearchBox;

// function SearchBox({ searchChange }) {
//   return (
//     <div>
//       filter :
//       <input type="search" onChange={searchChange} />
//     </div>
//   );
// }

// export default SearchBox;
