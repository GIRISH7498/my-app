
import './App.css';
// 1st program styling
// function App() {
//   let mystyle = { color: "white", background: "purple" };

//   return (
//     <div>
//       <h1 className="beautify">Hello Again!</h1>

//       {/** This is kind of internal. Note: Only one curly braces. */}
//       <h1 style={mystyle}>Hello World</h1>

//       {/* THIS IS INLINE STYLING */}
//       <h1 style={{ color: "white", backgroundColor: "red" }}>Hello</h1>
//     </div>
//   );
// }

// 2nd program styling
// function App() {
//   return (
//     <div>
//       <h1 className="beautify">External Styling!</h1>
//     </div>
//   );
// }

// 3rd program bootstrap
// function App() {
//     return (
//       <div>
//         <h1 className="bg-dark text-light p-3">Bootstrap Styling!</h1>
  
//         <h1 className="bg-success" style={{ color: "#fff" }}>
//           hello
//         </h1>
//       </div>
//     );
//   }
// 4th program
// import { useState } from "react";
// function App() {
//     let [theme, setTheme] = useState("primary");
  
//     // Member funcn
//     let makePrimaryTheme = () => {
//       theme = "primary";
//       setTheme(theme);
//     };
  
//     let makeSuccessTheme = () => {
//       theme = "success";
//       setTheme(theme);
//     };
  
//     let makeDangerTheme = () => {
//       theme = "danger";
//       setTheme(theme);
//     };
  
//     return (
//       <div>
//         <h1 className={`bg-${theme} text-light p-3`}>
//           Bootstrap Styling! {theme}
//         </h1>
  
//         <input
//           className="btn btn-primary"
//           type="button"
//           value="Primary Theme"
//           onClick={makePrimaryTheme}
//         />
//         <input
//           className="btn btn-success"
//           type="button"
//           value="Success Theme"
//           onClick={makeSuccessTheme}
//         />
//         <input
//           className="btn btn-danger"
//           type="button"
//           value="Danger Theme"
//           onClick={makeDangerTheme}
//         />
//       </div>
//     );
//   }
//   5th program


export default App;
