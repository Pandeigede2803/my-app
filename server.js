const express = require('express');
const mongoose = require('mongoose');
const projectController = require('./src/controllers/project_controller');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const upload = require('./src/middleware/upload');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const port = 5000;

const url =
  'mongodb+srv://dedesudiahna:Sudiahna21@cluster0.eldpxem.mongodb.net/Project?retryWrites=true&w=majority';

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Terhubung ke MongoDB'))
  .catch((err) => console.error('Koneksi ke MongoDB gagal:', err));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure CORS to allow requests from your frontend's domain
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend's URL
  optionsSuccessStatus: 200, // Some legacy browsers (IE11) choke on 204
};

app.use(cors(corsOptions)); // Use the CORS middleware with the specified options

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.get('/', (req, res) => {
  res.send('Hello, ini adalah backend server!');
});

app.get('/api/data', (req, res) => {
  const data = {
    message: 'Ini adalah data dari backend server',
    timestamp: new Date(),
  };
  res.json(data);
});

// Tambahkan route untuk pengendalian proyek
app.post('/api/projects', upload.single('Image'), projectController.createProject);
app.get('/api/projects', projectController.getProjects);
app.get('/api/projects/:id', projectController.getProjectById);
app.put('/api/projects/:id', projectController.updateProject);
app.delete('/api/projects/:id', projectController.deleteProject);
// app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
