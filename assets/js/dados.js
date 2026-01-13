const noticias = [
    // --- CARROSSEL (6 NOTÍCIAS) ---
    { 
        id: 101, titulo: "ALERTA: Defesa Civil de Campina Grande do Sul emite aviso de tempestades severas", 
        resumo: "(Fonte: Simepar/Defesa Civil)", 
        categoria: "segurança", imagem: "https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?q=80&w=1200", 
        data: "13/01/2026", destaque: false, noCarrossel: true 
    },
    { 
        id: 102, titulo: "FESTA DO CAQUI 2026: Prefeitura anuncia expansão do Parque de Eventos para shows nacionais", 
        resumo: "(Fonte: Sec. de Turismo)", 
        categoria: "local", imagem: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=1200", 
        data: "13/01/2026", destaque: false, noCarrossel: true 
    },
    { 
        id: 103, titulo: "MERCADO DE TRABALHO: Multinacional de logística abre 150 novas vagas no Jardim Paulista", 
        resumo: "(Fonte: Agência do Trabalhador)", 
        categoria: "economia", imagem: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200", 
        data: "12/01/2026", destaque: false, noCarrossel: true 
    },
    { 
        id: 104, titulo: "REFORÇO NA SEGURANÇA: Guarda Municipal recebe blindagem e novas viaturas de alta potência", 
        resumo: "(Fonte: Secretaria de Defesa Social)", 
        categoria: "segurança", imagem: "https://www.seguranca.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2023-08/falcao.jpg", 
        data: "12/01/2026", destaque: false, noCarrossel: true 
    },
    { 
        id: 105, titulo: "CAMPANHA DE SAÚDE: Campina Grande do Sul atinge meta recorde de vacinação infantil", 
        resumo: "(Fonte: Ministério da Saúde/SMS)", 
        categoria: "saúde", imagem: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200", 
        data: "11/01/2026", destaque: false, noCarrossel: true 
    },
    { 
        id: 106, titulo: "TURISMO ECOLÓGICO: Pico Paraná registra movimentação intensa e reforço na fiscalização do IAT", 
        resumo: "(Fonte: IAT/Pico Paraná)", 
        categoria: "local", imagem: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200", 
        data: "11/01/2026", destaque: false, noCarrossel: true 
    },

    // --- DESTAQUES (3 NOTÍCIAS) ---
    { 
        id: 1, titulo: "PSS CAMPINA GRANDE DO SUL: Edital aberto com salários que chegam a R$ 16.500,00", 
        resumo: "O novo Processo Seletivo Simplificado visa preencher cargos estratégicos na saúde e educação. Há vagas para médicos especialistas, professores de ensino fundamental e engenheiros civis. As inscrições devem ser realizadas exclusivamente via portal oficial. (Fonte: Diário Oficial do Município)", 
        categoria: "local", imagem: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800", 
        data: "07/01/2026", destaque: true, noCarrossel: false 
    },
    { 
        id: 2, titulo: "CRIME ORGANIZADO: Grande operação policial desarticula grupo de tráfico na BR-116", 
        resumo: "Em uma ação coordenada entre a Polícia Civil e Militar, diversos mandados de busca e apreensão foram cumpridos nas primeiras horas de hoje. A operação foca em neutralizar a distribuição de entorpecentes que utilizava o trecho de Campina como rota logística. (Fonte: PM-PR/PCPR)", 
        categoria: "segurança", imagem: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800", 
        data: "07/01/2026", destaque: true, noCarrossel: false 
    },
    { 
        id: 3, titulo: "REFERÊNCIA MÉDICA: Hospital Angelina Caron inaugura ala tecnológica de Transplantes", 
        resumo: "O hospital, que já é referência nacional, deu um salto de modernidade com a inauguração de dez novos leitos de UTI equipados com inteligência artificial para monitoramento cardíaco, otimizando o sucesso de cirurgias complexas. (Fonte: Assessoria de Comunicação HAC)", 
        categoria: "saúde", imagem: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800", 
        data: "07/01/2026", destaque: true, noCarrossel: false 
    },

    // --- RECENTES (6 NOTÍCIAS) ---
    { id: 4, titulo: "INFRAESTRUTURA: Ciclovia do Caqui recebe iluminação inteligente em toda sua extensão", resumo: "O novo sistema de LED com sensores de movimento visa garantir economia de energia e maior segurança para os ciclistas que utilizam a via durante o período noturno e madrugadas. (Fonte: Sec. de Obras)", categoria: "local", imagem: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=800", data: "06/01/2026", destaque: false },
    { id: 5, titulo: "ESPORTE AMADOR: Campeonato Municipal tem rodada de abertura com recorde de gols", resumo: "O Estádio Municipal de Campina Grande do Sul foi palco de grandes confrontos. Os times locais demonstraram alto nível técnico e as arquibancadas ficaram lotadas pelos torcedores apaixonados. (Fonte: Sec. de Esportes)", categoria: "esportes", imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800", data: "06/01/2026", destaque: false },
    { id: 6, titulo: "TRÂNSITO: Obras de readequação no trevo de acesso entram em fase final de sinalização", resumo: "A intervenção viária promete eliminar os pontos de congestionamento e reduzir drasticamente o índice de acidentes laterais na entrada principal da cidade. Motoristas devem redobrar atenção. (Fonte: Arteris Planalto Sul)", categoria: "infraestrutura", imagem: "https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/shutterstock_VerenJn.jpg", data: "05/01/2026", destaque: false },
    { id: 7, titulo: "EDUCAÇÃO: Secretaria inicia distribuição de kits escolares modernos para 5 mil alunos", resumo: "Pela primeira vez, os kits contam com materiais de alto padrão e tablets para alunos do ensino fundamental, visando a inclusão digital e a modernização do aprendizado na rede pública. (Fonte: Sec. de Educação)", categoria: "local", imagem: "https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?q=80&w=800", data: "05/01/2026", destaque: false },
    { id: 8, titulo: "MEIO AMBIENTE: Novo cronograma de Coleta Seletiva é expandido para todos os bairros", resumo: "O projeto 'Campina Sustentável' agora conta com caminhões dedicados exclusivamente ao lixo reciclável em dias alternados, buscando reduzir o impacto ambiental e gerar renda para cooperativas. (Fonte: Sec. de Meio Ambiente)", categoria: "local", imagem: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800", data: "04/01/2026", destaque: false },
    { id: 9, titulo: "GASTRONOMIA: Restaurantes locais lançam pratos exclusivos para o Festival do Caqui", resumo: "Chefes da região exploram a versatilidade da fruta em pratos doces e salgados, atraindo críticos gastronômicos e turistas de todo o estado para a rota culinária de Campina. (Fonte: Portal RMC)", categoria: "local", imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800", data: "04/01/2026", destaque: false }
];