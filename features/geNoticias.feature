Feature: Exibição e navegação de notícias no GE.globo.com

  Scenario: Página inicial exibe no mínimo 10 notícias
    Given que o usuário acessa a página inicial do GE.globo.com
    When a página é carregada completamente
    Then devem ser exibidas no mínimo 10 notícias com título, imagem e resumo

  Scenario: Redirecionamento ao clicar em uma notícia
    Given que o usuário está na página inicial do GE.globo.com
    When o usuário clica em uma notícia
    Then ele deve ser redirecionado para a matéria completa da notícia

  Scenario: Redirecionamento para a página do time
    Given que o usuário está na página inicial do GE.globo.com
    When o usuário seleciona um time da Série A do Campeonato Brasileiro
    Then ele deve ser redirecionado para a página do clube com notícias relacionadas
