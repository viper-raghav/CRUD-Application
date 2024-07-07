import express from 'express';
import connectDB from './db/connectdb.js';
import { join } from 'path';
import web from './routes/web.js';  // Correct import

const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/school';


// Database connection
connectDB(DATABASE_URL);

// Set view engine
app.set('view engine', 'ejs');
app.set('views', join(process.cwd(), 'views'));

// Static files
app.use(express.static(join(process.cwd(), "public")));


// Routes
app.use("/students", web);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

