# Sala de Estudos Lo-Fi

Ambiente minimalista para estudo com relógio, data e trilha sonora lo-fi. Uma página web estática pensada para criar uma atmosfera calma enquanto você foca.

## Funcionalidades

- **Relógio em tempo real** — horário atualizado a cada segundo, no formato AM/PM
- **Data completa** — dia da semana, mês e dia em português
- **Tema claro e escuro** — alternância com um clique no botão sol/lua
- **Música lo-fi** — reprodução em loop com controle de play/pause pelo botão de volume

## Tecnologias

- HTML5
- CSS3 (variáveis CSS e flexbox)
- JavaScript (vanilla)

Sem dependências externas e sem etapa de build.

## Estrutura do projeto

```
sala_de_estudo_lo_fi/
├── index.html          # Página principal
├── script.js           # Lógica de tema, relógio, data e áudio
├── style.css           # Estilos e temas
└── public/
    └── assets/
        ├── mondamusic-lofi.mp3
        ├── sun-moon.svg
        └── volume.svg
```

## Como executar

Como o projeto é estático, basta abrir o arquivo principal no navegador:

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd sala_de_estudo_lo_fi
   ```

2. Abra `index.html` no navegador ou use um servidor local:
   ```bash
   # Python 3
   python3 -m http.server 8000
   ```
   Depois acesse `http://localhost:8000`.

> **Nota:** alguns navegadores bloqueiam a reprodução automática de áudio. Clique no botão de volume para iniciar a música.

## Uso

| Ação | Como fazer |
|------|------------|
| Alternar tema | Clique no botão sol/lua no canto superior esquerdo |
| Tocar ou pausar a música | Clique no botão de volume no rodapé |

## Licença

Este projeto é de uso pessoal. Verifique os direitos de uso da trilha `mondamusic-lofi.mp3` antes de redistribuir.
