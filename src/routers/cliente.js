const { Router } = require('express');
const clienteController = require('../controllers/ClienteController');
const auth = require('../middlewares/authenticate.js');
const multiparty = require('connect-multiparty');
const router = Router();

router.post('/register_client', clienteController.register_client);
router.post('/login_client', clienteController.login_client);
router.get('/listar_clientes_tienda', auth.auth, clienteController.listar_clientes_tienda);

module.exports = router;