// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;
// const { spawn } = require('child_process');
// const path = require('path');
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);

// app.use(express.json());
// let pythonOutput = ''

// // WebSocket connection to communicate with React app
// io.on('connection', (socket) => {
//   console.log('Client connected');
//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

// app.post('/check-squat-form', (req, res) => {
//   const formData = req.body.data;
//   const pythonScriptPath = 'C:\Users\abhir\GymFormCorrection\angles_and_reps.py';

//   const pythonProcess = spawn('python', [pythonScriptPath, formData]);


//   pythonProcess.stdout.on('data', (data) => {
//     const result = data.toString();
//     pythonOutput = result; // Store the output
//     console.log('Python Output:', result);
//   });

//   pythonProcess.stderr.on('data', (data) => {
//     console.error(`Error: ${data}`);
//     pythonOutput = 'An error occurred';
//   });

//   res.status(200).json({ message: 'Processing...' });
// });

// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { spawn } = require('child_process');

app.use(express.json());

app.post('/execute-python-script', (req, res) => {
  const inputData = req.body; // You can send data from the client to the server

  // Execute the Python script
  const pythonProcess = spawn('python', ['C:\Users\abhir\GymFormCorrection\angle_and_reps.py', JSON.stringify(inputData)]);

  pythonProcess.stdout.on('data', (data) => {
    const result = data.toString();
    res.status(200).json({ message: result });
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
    res.status(500).json({ error: 'An error occurred' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
