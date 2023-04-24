// const Jobs = (props) => {
//   return (
//     <div className="job">
//       <div>
//         <h2>{props.title}</h2>
//       </div>
//       <div>
//         <p>
//           {props.contractType} - {props.country} - {props.city}
//         </p>
//       </div>
//     </div>
//   );
// };

const Jobs = (props) => {
  return (
    <div className="job">
      <h2>{props.title}</h2>
      <p>
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};

export default Jobs;
