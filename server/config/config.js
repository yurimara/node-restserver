// =============================
// PUERTO
// =============================
process.env.PORT = process.env.PORT || 3000;

// =============================
// Entorno
// =============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================
// Vencimiento del token
// =============================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =============================
// Seed del token
// =============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


// =============================
// Base de datos
// =============================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URL_DB = urlDB;

// =============================
// Google client ID
// =============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '404889876851-agt9hsc6mrmjec5tlisiso5amtn97kep.apps.googleusercontent.com';