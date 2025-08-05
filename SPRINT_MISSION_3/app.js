const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/product.routes');

dotenv.config();

const app = express();
app.use(express.json());

// 라우터 등록
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});