# 🎬 Cineflex

Aplicação React que simula um sistema de compra de ingressos de cinema.  
Permite escolher o filme, horário de sessão, selecionar assentos e finalizar a compra.  

🚀 Deploy: [Cineflex - Vercel](https://cineflex-seven-bay.vercel.app)

---

## 📱 Layout

O layout do projeto segue o Figma fornecido (apenas versão mobile):  
[Cineflex - Figma](https://www.figma.com/design/gd33iwfpYMAO8BQGH7QgDH/Cineflex?m=dev&node-id=0-1)

---

## 🛠️ Tecnologias

- **React** (com Vite)
- **React Router DOM**
- **Styled-components**
- **Axios**
- API REST fornecida pela Driven

---

## 🔗 API Utilizada

- 🎥 **Filmes em cartaz**  
  `GET https://mock-api.driven.com.br/api/v8/cineflex/movies`

- 📅 **Sessões por filme**  
  `GET https://mock-api.driven.com.br/api/v8/cineflex/movies/:idFilme/showtimes`

- 💺 **Assentos por sessão**  
  `GET https://mock-api.driven.com.br/api/v8/cineflex/showtimes/:idSessao/seats`

- ✅ **Reservar assentos**  
  `POST https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`

---

## ⚙️ Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cineflex.git

# Entre na pasta
cd cineflex

# Instale as dependências
npm install

# Rode o projeto
npm run dev
