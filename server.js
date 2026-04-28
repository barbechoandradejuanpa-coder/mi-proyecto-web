const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data', 'pacientes.json');

// Crear carpeta data si no existe
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}
// Crear archivo vacío si no existe
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// GET todos los pacientes
app.get('/api/pacientes', (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    res.json(JSON.parse(data));
  } catch (e) {
    res.json([]);
  }
});

// POST guardar todos los pacientes (reemplaza el archivo)
app.post('/api/pacientes', (req, res) => {
  try {
    const data = req.body;
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Backup manual
app.get('/api/backup', (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const fecha = new Date().toISOString().split('T')[0];
    res.setHeader('Content-Disposition', `attachment; filename="hcl-backup-${fecha}.json"`);
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log('');
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║     Historia Clínica Electrónica — Consultorio Médico    ║');
  console.log('║     Dra. Yuly Andrade  &  Dr. Juan Pablo Barbecho        ║');
  console.log('╠══════════════════════════════════════════════════════════╣');
  console.log(`║  ✓ Servidor corriendo en: http://localhost:${PORT}          ║`);
  console.log('║  ✓ Datos guardados en:    data/pacientes.json            ║');
  console.log('║                                                          ║');
  console.log('║  Abra su navegador (Chrome recomendado) y vaya a:        ║');
  console.log(`║  → http://localhost:${PORT}                                  ║`);
  console.log('║                                                          ║');
  console.log('║  Para cerrar: presione Ctrl+C en esta ventana            ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('');
});
