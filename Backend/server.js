// Responsável por toda a configuração e execução da aplicação

const app = require('./src/app');

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log("Aplicação rodando na porta..." + PORT);
});