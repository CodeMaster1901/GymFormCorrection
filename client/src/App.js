// import React from 'react';
// import './App.css';

// function App() {
//   const handleButtonClick = () => {
//     // Make a POST request to the server when the button is clicked
//     fetch('/squats', {
//       method: 'POST',
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.message);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>SquatForm</h1>
//       <p>
//         This option allows you to visualize your squats, correct your form,
//         and get personalized feedback.
//       </p>
//       <div className="button-container">
//         <button onClick={handleButtonClick}>Squats</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [result, setResult] = useState('');
//   const handleButtonClick = () => {
//     // Replace 'formData' with the actual data you want to send to the Python function
//     const formData = 'correct';

//     fetch('/check-squat-form', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ data: formData }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setResult(data.message);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>BicepCurlz</h1>
//       <p>
//         This option allows you to visualize your bicep curls, correct your form,
//         and understand the fault in your reps.
//       </p>
//       <div className="button-container">
//         <button onClick={handleButtonClick}>Visualise your curlz here</button>
//       </div>
//       {result && <p>{result}</p>}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
//   const [result, setResult] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleButtonClick = () => {
//     setLoading(true);
    
//     // Replace 'formData' with the actual data you want to send to the Python script
//     const formData = { data: 'correct' };

//     axios.post('/execute-python-script', formData)
//       .then((response) => {
//         setResult(response.data.message);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setResult('An error occurred');
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>MERN Squats</h1>
//       <p>
//         This option allows you to visualize your squats, correct your form,
//         and get personalized feedback.
//       </p>
//       <div className="button-container">
//         <button onClick={handleButtonClick} disabled={loading}>
//           {loading ? 'Processing...' : 'Click me for Squats'}
//         </button>
//       </div>
//       <div className="result-container">
//         <p>{result}</p>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import './App.css';
// import axios from 'axios'; // Import Axios for making API requests

// function App() {
//   const [result, setResult] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleButtonClick = () => {
//     setLoading(true);

//     axios.post('/execute-python-script')
//       .then((response) => {
//         setResult(response.data.message);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setResult('An error occurred');
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>BicpeCurlz</h1>
//       <p>
//         This option allows you to visualize your bicep curls, correct your form,
//         and get feedback.
//       </p>
//       <div className="button-container">
//         <button onClick={handleButtonClick} disabled={loading}>
//           {loading ? 'Processing...' : 'Click me for Squats'}
//         </button>
//       </div>
//       <div className="result-container">
//         <p>{result}</p>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import axios from 'axios'; // Import Axios for making API requests

function App() {
  const handleButtonClick = () => {
    axios.post('/execute-python-script')
      .then(() => {
        console.log('Python script executed successfully.');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <h1>MERN Squats</h1>
      <p>
        This option allows you to execute the Python script when you click the button.
      </p>
      <div className="button-container">
        <button onClick={handleButtonClick}>Click to Execute Python Script</button>
      </div>
    </div>
  );
}

export default App;
