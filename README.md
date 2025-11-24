# Sistema de Inspeção de Pneus

Projeto front-end em React para gerenciar inspeções de pneus — telas de cadastro, histórico, relatórios e uma interface para inspeção.

Este repositório foi criado com Create React App. O README abaixo fornece instruções rápidas para instalar, executar, testar e gerar o build do projeto.

## Sumário

- Sobre
- Requisitos
- Instalação
- Desenvolvimento (rodar localmente)
- Build e Deploy
- Testes
- Estrutura do projeto
- Contribuição

## Requisitos

- Node.js (recomendado >= 16)
- npm (ou yarn) — este projeto usa npm nos exemplos

Verifique sua versão com:

```bash
node --version
npm --version
```

## Instalação

No diretório do projeto, instale as dependências:

```bash
npm install
```

## Rodando em desenvolvimento

Inicie a aplicação em modo de desenvolvimento (porta padrão 3000):

```bash
npm start
```

Abra http://localhost:3000 no navegador. O app fará hot-reload quando você alterar arquivos.

## Build para produção

Gera os arquivos otimizados na pasta `build/`:

```bash
npm run build
```

Se você quiser publicar no GitHub Pages este repositório já vem configurado com a dependência `gh-pages` e o script `deploy` — o comando executa `predeploy` (build) e depois publica a pasta `build`:

```bash
npm run deploy
```

Nota: verifique o campo `homepage` no `package.json` — ele aponta para o endereço onde o app será servido.

## Testes

Executa o test runner (Jest + React Testing Library):

```bash
npm test
```

## Scripts úteis (do `package.json`)

- `start` — inicia servidor de dev (react-scripts start)
- `build` — cria build de produção (react-scripts build)
- `predeploy` — roda antes do `deploy` (executa build)
- `deploy` — publica usando `gh-pages` (gh-pages -d build)
- `test` — executa testes (react-scripts test)
- `eject` — expõe configurações do CRA (use com cuidado)

## Estrutura do projeto

Base: `c:\Users\Assis\projetos\ulbra\sistema-inspecao-pneus`

- `.gitignore` — arquivos ignorados pelo Git
- `package.json` / `package-lock.json` — dependências e scripts
- `public/` — assets públicos (index.html, ícones, manifest)
- `src/` — código-fonte React
	- `index.js` — ponto de entrada
	- `App.js` — componente principal
	- `App.css`, `index.css` — estilos
	- `reportWebVitals.js`, `setupTests.js` — telemetria e configuração de testes
	- `styles/styles.js` — estilos em JS
	- `components/` — componentes da aplicação
		- `Cadastro.js` — tela de cadastro
		- `Historico.js` — histórico de inspeções
		- `login.js` — login
		- `Menu.js` — menu de navegação
		- `Relatorios.js` — relatórios
		- `TelaInspecao.js` — interface de inspeção
- `build/` — arquivos gerados pelo build (para deploy)

## Contribuindo

1. Faça um fork do repositório
2. Crie uma branch feature: `git checkout -b feature/minha-melhora`
3. Faça commits claros e atômicos
4. Abra um Pull Request descrevendo a mudança

Antes de subir PR, execute os testes e verifique a aplicação localmente.

## Observações / Próximos passos sugeridos

- Adicionar um arquivo `CONTRIBUTING.md` com padrões de commit e fluxo de trabalho.
- Configurar CI (GitHub Actions) para rodar testes e lint automaticamente.
- Adicionar ESLint/Prettier se desejar padronizar estilo de código.

## Licença

Adicione aqui a licença do projeto (por exemplo, MIT) ou deixe explícito que é propriedade do autor/empresa.

---

Se quiser, eu posso:

- adicionar um `CONTRIBUTING.md` e `CODE_OF_CONDUCT.md`;
- configurar um workflow simples do GitHub Actions para rodar testes;
- adicionar um `Dockerfile` para empacotar a app.

Diga qual item prefere que eu faça em seguida.
