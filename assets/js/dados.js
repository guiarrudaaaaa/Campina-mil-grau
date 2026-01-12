/**
 * DATABASE DE NOTÍCIAS - CAMPINA MIL GRAU
 * ----------------------------------------------------------------
 * Desenvolvedor: Guilherme Arruda De Souza
 * Instagram: @guiarrudaaaa
 * Contato: 41 99522-5483
 * * Orientações para atualização:
 * 1. Mantenha o padrão de IDs únicos.
 * 2. As notícias com 'destaque: true' aparecerão no topo do portal.
 * 3. Use URLs de imagens de alta qualidade (mínimo 800px de largura).
 * ----------------------------------------------------------------
 */

const noticias = [
    { 
        id: 1, 
        titulo: "Prefeitura de Campina Grande do Sul abre PSS com salários de até R$ 16.435,27", 
        resumo: "A administração municipal oficializou a abertura de um novo Processo Seletivo Simplificado (PSS) para contratação imediata e cadastro reserva em 2026. As vagas abrangem níveis fundamental, médio e superior, com foco na rede de saúde e educação.", 
        categoria: "local", 
        imagem: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800", 
        data: "07/01/2026", 
        destaque: true,
        fonte: "Fonte: Portal da Transparência de Campina Grande do Sul"
    },
    { 
        id: 2, 
        titulo: "Operação Verão: PRF intensifica fiscalização na BR-116 em trecho de Campina", 
        resumo: "A Polícia Rodoviária Federal (PRF) iniciou hoje um esquema especial de monitoramento. Com o fim das festividades, o volume de veículos aumentou 30% no trecho da rodovia que corta o município.", 
        categoria: "segurança", 
        imagem: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800", 
        data: "07/01/2026", 
        destaque: true,
        fonte: "Fonte: Polícia Rodoviária Federal (PRF)"
    },
    { 
        id: 3, 
        titulo: "COP-30: Brasil lidera discussões globais sobre financiamento climático em Belém", 
        resumo: "Na condição de sede da Conferência das Nações Unidas, o Brasil abriu hoje a primeira rodada de negociações de 2026 focada na proteção da Amazônia e investimentos em energia limpa.", 
        categoria: "mundial", 
        imagem: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800", 
        data: "07/01/2026", 
        destaque: true,
        fonte: "Fonte: Agência Brasil / G1"
    },
    { 
        id: 4, 
        titulo: "Hospital Angelina Caron é destaque nacional em transplantes de alta complexidade", 
        resumo: "Referência em Campina Grande do Sul, o hospital consolidou sua posição como um dos maiores centros de transplantes do Sul do país, anunciando novos investimentos em tecnologia cirúrgica robótica.", 
        categoria: "saúde", 
        imagem: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800", 
        data: "06/01/2026", 
        destaque: false,
        fonte: "Fonte: Assessoria de Imprensa Hospital Angelina Caron"
    },
    { 
        id: 5, 
        titulo: "Pico Paraná: IAT reforça normas de preservação para temporada de montanhismo", 
        resumo: "O Instituto Água e Terra (IAT) atualizou o sistema de registro para visitantes do Pico Paraná. O acesso agora exige reserva digital antecipada visando evitar o impacto ambiental no cume.", 
        categoria: "local", 
        imagem: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800", 
        data: "06/01/2026", 
        destaque: false,
        fonte: "Fonte: IAT-PR"
    },
    { 
        id: 6, 
        titulo: "James Webb captura imagens inéditas de sistema solar em formação", 
        resumo: "A NASA divulgou hoje dados processados pelo telescópio James Webb que sugerem a presença de elementos essenciais para a vida em exoplanetas rochosos recém-descobertos.", 
        categoria: "ciência", 
        imagem: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", 
        data: "05/01/2026", 
        destaque: false,
        fonte: "Fonte: NASA Space Center"
    },
    { 
        id: 7, 
        titulo: "Ciclovia do Caqui: Iluminação em LED é concluída no trecho urbano", 
        resumo: "A Secretaria de Obras finalizou a instalação da nova rede de LED, garantindo economia de 40% e maior segurança noturna para as famílias e ciclistas de Campina Grande do Sul.", 
        categoria: "infraestrutura", 
        imagem: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=800",         
        data: "04/01/2026", 
        destaque: false,
        fonte: "Fonte: Prefeitura Municipal"
    },
    { 
        id: 8, 
        titulo: "Mercado Financeiro: Estabilidade cambial favorece o varejo paranaense", 
        resumo: "Analistas apontam que a estabilidade do dólar e a boa safra agrícola contribuíram para o controle da inflação no Paraná, gerando otimismo para o comércio local neste início de ano.", 
        categoria: "economia", 
        imagem: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800",
        data: "04/01/2026", 
        destaque: false,
        fonte: "Fonte: IBGE / SEAB"
    },
    { 
        id: 9, 
        titulo: "Campeonato Paranaense 2026: Clubes iniciam última semana de pré-temporada", 
        resumo: "Com o uso do VAR confirmado em todas as fases, Coritiba, Athletico e Operário entram na reta final de preparação física e tática para a estreia do estadual.", 
        categoria: "esportes", 
        imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800", 
        data: "04/01/2026", 
        destaque: false,
        fonte: "Fonte: Federação Paranaense de Futebol (FPF)"
    }
];

// Exportação simbólica para garantir que o objeto está pronto para uso global
console.log("Database 'Campina Mil Grau' carregado com sucesso. Desenvolvido por Guilherme Arruda.");