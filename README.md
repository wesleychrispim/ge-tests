# Projeto GE.globo.com E2E

Este projeto realiza testes automatizados de interface com o site ge.globo.com utilizando o framework Playwright com o padrão Page Object Model (POM) e integração com Cucumber para escrita dos testes em linguagem Gherkin.

Os cenários de teste estão descritos no arquivo `features/geNoticias.feature` utilizando Cucumber.

## Funcionalidades testadas

- A página inicial deve exibir no mínimo 10 notícias
- Cada notícia deve redirecionar para a matéria completa ao ser clicada
- A seleção de um time da Série A redireciona para a página específica do clube

## Requisitos

- Node.js 18 ou superior
- Git (opcional)
- VS Code (opcional, recomendado)

## Instalação do ambiente

```bash
npm install
npx playwright install
```

## Execução dos testes

Executar todos os testes:

```bash
npx playwright test
```

Executar um teste específico:

```bash
npx playwright test tests/homepage.spec.ts
npx playwright test tests/team-page.spec.ts
```

Executar em modo visual com debug:

```bash
npx playwright test tests/homepage.spec.ts --headed --debug
```

## Relatórios

Após executar os testes, o relatório HTML pode ser aberto com:

```bash
npx playwright show-report
```

Esse relatório apresenta:

- Lista de testes executados
- Screenshots automáticos
- Vídeos gravados das execuções
- Arquivos de trace para análise detalhada de falhas

## Artefatos gerados

Os resultados são salvos em:

```
test-results/
├── homepage-spec/
│   └── nome-do-teste/
│       ├── video.webm         -> vídeo da execução
│       ├── screenshot.png     -> imagem da execução
│       ├── trace.zip          -> trace interativo (em caso de falha)
```

## Estrutura do Projeto

```
ge-tests/
├── features/
│   ├── geNoticias.feature       -> Cenários escritos em Gherkin
│   └── geNoticias.steps.ts      -> Implementação dos steps com Playwright
├── pages/
│   └── HomePage.ts              -> Page Object com ações reutilizáveis
├── tests/
│   ├── homepage.spec.ts         -> Testes diretos sem BDD (opcional)
│   └── team-page.spec.ts        -> Testes diretos sem BDD (opcional)
├── playwright.config.ts         -> Configuração do Playwright
├── package.json                 -> Dependências e scripts
├── tsconfig.json                -> Configuração do TypeScript
└── README.md                    -> Documentação do projeto
```

## Tecnologias utilizadas

- Playwright - Automação de testes E2E
- TypeScript - Tipagem estática
- Cucumber - Escrita de testes BDD em Gherkin
- Page Object Model - Organização de código de teste
- HTML Reporter - Visualização de resultados

## Considerações

- Screenshots e vídeos são capturados em todos os testes
- Traces são armazenados apenas em caso de falha
- O projeto está pronto para integração com pipelines de CI/CD

