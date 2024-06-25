import { useState } from 'react';
import axios from 'axios';
import { Container, FormControl, InputLabel, Select, MenuItem, TextField, Button, Typography, Paper, /*Box*/ } from '@mui/material';

const AdminPlanAula = () => {
  const context = 'Crie um plano de aula baseado nas seguintes informações:';
  const [result, setResult] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [tipoAula, setTipoAula] = useState('');
  const [tema, setTema] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [turma, setTurma] = useState('');

  const handleSubmit = async () => {
    const prompt = `${context} Disciplina: ${disciplina}\nTipo de aula: ${tipoAula}\nTema: ${tema}\nObjetivo: ${objetivo}\nTurma: ${turma}`;
    console.log('Prompt = ', prompt);

    try {
      const response = await axios.post('http://localhost:5000/chat', { message: prompt });
      console.log('Response:', response.data);
      setResult(formatResponse(response.data.reply));
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setResult('An error occurred while processing your request.');
    }
  };

  const formatResponse = (response) => {
    const lines = response.split('\n');
    const structuredResponse = lines.map((line, index) => (
      <Typography key={index} variant="body1" paragraph>
        {line}
      </Typography>
    ));
    return structuredResponse;
  };

  return (
    <Container maxWidth="md" style={{ backgroundColor: '#f0f4f8', padding: '40px', borderRadius: '8px', marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Plano de Aula
      </Typography>
      <Paper elevation={3} style={{ padding: '30px', marginBottom: '30px' }}>
        <Typography variant="h6" gutterBottom>
          Informações do Plano de Aula
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel>Disciplina</InputLabel>
          <Select value={disciplina} onChange={(e) => setDisciplina(e.target.value)}>
            <MenuItem value="Português">Português</MenuItem>
            <MenuItem value="Matemática">Matemática</MenuItem>
            <MenuItem value="História">História</MenuItem>
            <MenuItem value="Geografia">Geografia</MenuItem>
            <MenuItem value="Ciências">Ciências</MenuItem>
            <MenuItem value="Educação Física">Educação Física</MenuItem>
            <MenuItem value="Artes">Artes</MenuItem>
            <MenuItem value="Inglês">Inglês</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Tipo de Aula</InputLabel>
          <Select value={tipoAula} onChange={(e) => setTipoAula(e.target.value)}>
            <MenuItem value="Teórica">Teórica</MenuItem>
            <MenuItem value="Prática">Prática</MenuItem>
            <MenuItem value="Seminário">Seminário</MenuItem>
            <MenuItem value="Laboratório">Laboratório</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Turma</InputLabel>
          <Select value={turma} onChange={(e) => setTurma(e.target.value)}>
            <MenuItem value="1º Ano">1º Ano</MenuItem>
            <MenuItem value="2º Ano">2º Ano</MenuItem>
            <MenuItem value="3º Ano">3º Ano</MenuItem>
            <MenuItem value="4º Ano">4º Ano</MenuItem>
            <MenuItem value="5º Ano">5º Ano</MenuItem>
            <MenuItem value="6º Ano">6º Ano</MenuItem>
            <MenuItem value="7º Ano">7º Ano</MenuItem>
            <MenuItem value="8º Ano">8º Ano</MenuItem>
            <MenuItem value="9º Ano">9º Ano</MenuItem>
            <MenuItem value="Ensino Médio 1º Ano">Ensino Médio 1º Ano</MenuItem>
            <MenuItem value="Ensino Médio 2º Ano">Ensino Médio 2º Ano</MenuItem>
            <MenuItem value="Ensino Médio 3º Ano">Ensino Médio 3º Ano</MenuItem>
          </Select>
        </FormControl>
        <TextField 
          label="Tema" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          value={tema} 
          onChange={(e) => setTema(e.target.value)} 
        />
        <TextField 
          label="Objetivo" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          value={objetivo} 
          onChange={(e) => setObjetivo(e.target.value)} 
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSubmit}
          style={{ marginTop: '20px' }}
        >
          Enviar
        </Button>
      </Paper>
      {result && (
        <Paper elevation={3} style={{ padding: '30px', marginTop: '30px' }}>
          <Typography variant="h5" gutterBottom>
            Resposta:
          </Typography>
          {result}
        </Paper>
      )}
    </Container>
  );
}

export default AdminPlanAula;
