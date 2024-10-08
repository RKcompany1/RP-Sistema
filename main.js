
const data = [
    { "Fabricante": "BioConect", "Nome Comercial": "BioCM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.00mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "BioConect", "Nome Comercial": "BioCM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.00mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "BioConect", "Nome Comercial": "BioCM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.00mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "BioConect", "Nome Comercial": "BioHE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "BioConect", "Nome Comercial": "BioHE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "BioConect", "Nome Comercial": "BioHE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.1", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "BioConect", "Nome Comercial": "BioHE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "Sem Informação", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Na" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "BioMorseSWE", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.3", "Rosca": "1.6mm", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "BioMorse XP", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.6mm", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "BioMorse", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.6mm", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "BioMorseEZ", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.6mm", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "BioMorseEZ Classic", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.36mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "HI Cônico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.8", "Rosca": "1.6mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "HI Cônico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.2", "Rosca": "1.6mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "HI Cônico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.5mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "Classic Cilindrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "2.9", "Rosca": "1.4mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "0.7mm", "Código": "Não Fabricamos" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "Classic Cilindrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.4mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "0.7mm", "Código": "Não Fabricamos" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "Classic Cilindrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "0.7mm", "Código": "102" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "Classic Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "0.7mm", "Código": "102" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "Classic Cilindrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.5mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "BioDirect Cilindrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "BioDirect Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Bionnovation", "Nome Comercial": "BioDirect Cilindrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Conexão", "Nome Comercial": "Flash Torq/AR Torq", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.6mm", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "705" },
    { "Fabricante": "Conexão", "Nome Comercial": "Flash Torq/AR Torq", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.6mm", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "705" },
    { "Fabricante": "Conexão", "Nome Comercial": "Flash Torq/AR Torq", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.6mm", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "705" },
    { "Fabricante": "Conexão", "Nome Comercial": "Flash Torq/AR Torq", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.6mm", "Largura do Hexágono": "2.25mm", "Altura do Hexágono": "Na", "Código": "705" },
    { "Fabricante": "Conexão", "Nome Comercial": "Flash Torq/AR Torq", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.6mm", "Largura do Hexágono": "2.25mm", "Altura do Hexágono": "Na", "Código": "705" },
    {"Fabricante": "Conexão", "Nome Comercial": "Flash Torq/AR Torq", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões":"4.0", "Rosca":"1.6mm", "Largura do Hexágono":"2.25mm", "Altura do Hexágono":"Na", "Código":"705"},
    { "Fabricante": "Conexão", "Nome Comercial": "Flash Torq/AR Torq", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.25mm", "Altura do Hexágono": "Na", "Código": "705" },
    { "Fabricante": "Conexão", "Nome Comercial": "Ar/Conect AR", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.75/4.0/5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "Conexão", "Nome Comercial": "Ar/Conect AR", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "Conexão", "Nome Comercial": "Ar/Conect AR", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "Conexão", "Nome Comercial": "Conect Cônico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "Conexão", "Nome Comercial": "Conect Cônico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "Conexão", "Nome Comercial": "Easy", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "Conexão", "Nome Comercial": "Easy Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Conexão", "Nome Comercial": "Easy Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Conexão", "Nome Comercial": "Easy Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Conexão", "Nome Comercial": "Grip", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Conexão", "Nome Comercial": "Grip", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Conexão", "Nome Comercial": "Grip", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Conexão", "Nome Comercial": "Double", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.3", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "Não Atender devido ao comprimento do Parafuso" },
    { "Fabricante": "Conexão", "Nome Comercial": "Double", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "Não Atender devido ao comprimento do Parafuso" },
    { "Fabricante": "DentFix", "Nome Comercial": "CM Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "DentFix", "Nome Comercial": "CM Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "DentFix", "Nome Comercial": "CM Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "DentFix", "Nome Comercial": "CM Ápice Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "DentFix", "Nome Comercial": "CM Ápice Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "DentFix", "Nome Comercial": "CM Ápice Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "DentFix", "Nome Comercial": "CM Ápice Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "DentFix", "Nome Comercial": "Advanced Estreito Cilíndrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "DentFix", "Nome Comercial": "Advanced Estreito Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "DentFix", "Nome Comercial": "Advanced Estreito Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "DentFix", "Nome Comercial": "Advanced Estreito Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "DentFix", "Nome Comercial": "Advanced", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "DentFix", "Nome Comercial": "Advanced", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "DentFix", "Nome Comercial": "Advanced", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Supreme", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Supreme", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Supreme", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.25", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Supreme", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Classic", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Classic", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Classic", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Classic", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.25", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Classic", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Arrow", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Arrow", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Arrow", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Search", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Search", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Supreme Classic", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Supreme Classic", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Supreme Classic", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.25", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Supreme Classic", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Osseocompressivo", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "202/204" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Osseocompressivo", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "202/204" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Osseocompressivo", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.25", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "202/204" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Osseocompressivo", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "202/204" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Cilíndrico Switch", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Cilíndrico Switch", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Cilíndrico Switch", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Cilíndrico Switch", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.25", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Cilíndrico Switch", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Cilíndrico Switch", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Cônico Switch", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Cônico Switch", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Cônico Switch", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.25", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "HI Cônico Switch", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Informado" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Supreme", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Supreme", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.25", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Supreme", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Classic", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.25", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Classic", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Classic", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Classic", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Dentoflex", "Nome Comercial": "Classic", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Derig", "Nome Comercial": "Bioneck CMH 3.5", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5NP", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "320" },
    { "Fabricante": "Derig", "Nome Comercial": "Bioneck CMH 4.3", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5NP", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "320" },
    { "Fabricante": "Derig", "Nome Comercial": "Bioneck CMH 3.3", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5NP", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "320" },
    { "Fabricante": "Derig", "Nome Comercial": "Bioneck CMH 3.75", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5NP", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "320" },
    { "Fabricante": "Derig", "Nome Comercial": "Dynamic CMH 4.3", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5NP", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "320" },
    { "Fabricante": "Derig", "Nome Comercial": "Dynamic CMH 5.0", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5NP", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "320" },
    { "Fabricante": "Derig", "Nome Comercial": "Dynamic CMH 3.0", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "NC", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Derig", "Nome Comercial": "Bioneck Tri", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "115" },
    { "Fabricante": "Derig", "Nome Comercial": "Bioneck Tri", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.3", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "116" },
    { "Fabricante": "Derig", "Nome Comercial": "Bioneck Tri", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "116" },
    { "Fabricante": "Derig", "Nome Comercial": "Biodent Hex", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.6mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "0.7mm", "Código": "101" },
    { "Fabricante": "Derig", "Nome Comercial": "Biodent Hex", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "102" },
    { "Fabricante": "Derig", "Nome Comercial": "Biodent Hex", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "103" },
    { "Fabricante": "Derig", "Nome Comercial": "KORT HEX", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "104" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro CM AR", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro CM AR", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro CM AR", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Due Cone", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Due Cone", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Due Cone", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.5", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Due Cone", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico CM (Short)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.5", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.3mm", "Altura do Hexágono": "Na", "Código": "208" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.3mm", "Altura do Hexágono": "Na", "Código": "208" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.3mm", "Altura do Hexágono": "Na", "Código": "208" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico Cilíndrico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.3mm", "Altura do Hexágono": "Na", "Código": "208" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico Cilíndrico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "209" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico Cilíndrico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "209" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico Cilíndrico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "209" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro Cônico HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "0.7mm", "Código": "Usar tabela anexa" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cilíndrico HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cilíndrico HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico HE 5/6", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "Não Fabricamos" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico HE 5/6", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "Não Fabricamos" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico HE 5/6", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "6.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "Não Fabricamos" },
    { "Fabricante": "Implus - Baumer", "Nome Comercial": "Implus/Triplus", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.60mm", "Altura do Hexágono": "Na", "Código": "214" },
    { "Fabricante": "Implus - Baumer", "Nome Comercial": "Implus/Triplus", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.3", "Rosca": "2.0mm", "Largura do Hexágono": "2.60mm", "Altura do Hexágono": "Na", "Código": "214" },
    { "Fabricante": "Implus - Baumer", "Nome Comercial": "Implus/Triplus", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.60mm", "Altura do Hexágono": "Na", "Código": "214" },
    { "Fabricante": "Derig", "Nome Comercial": "Bioneck Tri", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "115" },
    { "Fabricante": "Derig", "Nome Comercial": "Bioneck Tri", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.3", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "116" },
    { "Fabricante": "Derig", "Nome Comercial": "Bioneck Tri", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "116" },
    { "Fabricante": "Derig", "Nome Comercial": "Biodent Hex", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.6mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "0.7mm", "Código": "101" },
    { "Fabricante": "Derig", "Nome Comercial": "Biodent Hex", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "102" },
    { "Fabricante": "Derig", "Nome Comercial": "Biodent HEX", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "103" },
    { "Fabricante": "Derig", "Nome Comercial": "KORT HEX", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "104" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro CM AR", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro CM AR", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro CM AR", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Due Cone", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Due Cone", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Due Cone", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.5", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Due Cone", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico CM (Short)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.5", "Rosca": "1.8mm", "Largura do Hexágono": "1.9mm", "Altura do Hexágono": "Na", "Código": "714" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.3mm", "Altura do Hexágono": "Na", "Código": "208" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.3mm", "Altura do Hexágono": "Na", "Código": "208" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.3mm", "Altura do Hexágono": "Na", "Código": "208" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico Cilíndrico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.3mm", "Altura do Hexágono": "Na", "Código": "208" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico Cilíndrico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "209" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico Cilíndrico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "209" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico Cilíndrico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "209" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Maestro Cônico HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "0.7mm", "Código": "Usar tabela anexa" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cilíndrico HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cilíndrico HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico HE 5/6", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "Não Fabricamos" },
    { "Fabricante": "Implacil de Bortoli", "Nome Comercial": "Cônico HE 5/6", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "Não Fabricamos" },
    { "Fabricante": "Implus - Baumer", "Nome Comercial": "Implus/Triplus", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.60mm", "Altura do Hexágono": "Na", "Código": "214" },
    { "Fabricante": "Implus - Baumer", "Nome Comercial": "Implus/Triplus", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.3", "Rosca": "2.0mm", "Largura do Hexágono": "2.60mm", "Altura do Hexágono": "Na", "Código": "214" },
    { "Fabricante": "Implus - Baumer", "Nome Comercial": "Implus/Triplus", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.60mm", "Altura do Hexágono": "Na", "Código": "214" },  
     { "Fabricante": "INP", "Nome Comercial": "Capsa", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "INP", "Nome Comercial": "Capsa", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "INP", "Nome Comercial": "Capsa", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "6.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "INP", "Nome Comercial": "Dynamica", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "INP", "Nome Comercial": "Dynamica", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.8", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "INP", "Nome Comercial": "Dynamica", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "INP", "Nome Comercial": "Dynamica", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "INP", "Nome Comercial": "Summalis", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "120" },
    { "Fabricante": "INP", "Nome Comercial": "Summalis", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "120" },
    { "Fabricante": "INP", "Nome Comercial": "Summalis", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "120" },
    { "Fabricante": "INP", "Nome Comercial": "Summalis easy", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "120" },
    { "Fabricante": "INP", "Nome Comercial": "Summalis easy", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "120" },
    { "Fabricante": "INP", "Nome Comercial": "Cônus HI", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "209" },
    { "Fabricante": "INP", "Nome Comercial": "Cônus HI", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "209" },
    { "Fabricante": "INP", "Nome Comercial": "Cônus HI", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "INP", "Nome Comercial": "Cônus HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "INP", "Nome Comercial": "Cônus HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "INP", "Nome Comercial": "Cônus HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "INP", "Nome Comercial": "Cônus easy", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "INP", "Nome Comercial": "Cônus easy", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "INP", "Nome Comercial": "Cônus HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "INP", "Nome Comercial": "Cônus HE", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "6.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "IntraOss", "Nome Comercial": "TitaOss Advanced", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "IntraOss", "Nome Comercial": "TitaOss Advanced", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "IntraOss", "Nome Comercial": "TitaOss Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "IntraOss", "Nome Comercial": "TitaOss Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "IntraOss", "Nome Comercial": "TitaOss Extract", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "IntraOss", "Nome Comercial": "TitaOss Extract", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "IntraOss", "Nome Comercial": "TitaOss Extract", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "IntraOss", "Nome Comercial": "TitaOss Cortical", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "IntraOss", "Nome Comercial": "TitaOss Cortical", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "IntraOss", "Nome Comercial": "TitaOss Cortical", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Max HI", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.8", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Max HI", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Max HI", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Advanced Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.8", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Advanced Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Advanced Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Extract Cortical", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.8", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Extract Cortical", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Extract Cortical", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Slim (ITRS4.1)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.25", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Slim (ITRS4.1)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.1", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Slim (ITRS3.2)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.25", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "0.7mm", "Código": "104" },
    { "Fabricante": "IntraOss", "Nome Comercial": "Slim (ITRS3.2)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.4", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "0.7mm", "Código": "104" },
    { "Fabricante": "Medens", "Nome Comercial": "Cone Morse", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Medens", "Nome Comercial": "Cone Morse", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Medens", "Nome Comercial": "Cone Morse", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Medens", "Nome Comercial": "Hexágono Interno", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.3", "Rosca": "2.0mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "Na", "Código": "211" },
    { "Fabricante": "Medens", "Nome Comercial": "Hexágono Interno", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "Na", "Código": "211" },
    { "Fabricante": "Medens", "Nome Comercial": "Hexágono Interno", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "Na", "Código": "211" },
    { "Fabricante": "Medens", "Nome Comercial": "Hexágono Externo", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Medens", "Nome Comercial": "Hexágono Externo", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Medens", "Nome Comercial": "Hexágono Externo", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Neodent", "Nome Comercial": "Helix GM TM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "720" },
    { "Fabricante": "Neodent", "Nome Comercial": "Helix GM TM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "720" },
    { "Fabricante": "Neodent", "Nome Comercial": "Helix GM TM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "6.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "720" },
    { "Fabricante": "Neodent", "Nome Comercial": "Drive GM TM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.3", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "720" },
    { "Fabricante": "Neodent", "Nome Comercial": "Drive GM TM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.8", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "720" },
    { "Fabricante": "Neodent", "Nome Comercial": "Drive GM TM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "720" },
    { "Fabricante": "Neodent", "Nome Comercial": "Drive GM TM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "720" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax GM TM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.3", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "720" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax GM TM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.8", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "720" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax GM TM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "720" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax GM TM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "720" },
    { "Fabricante": "Neodent", "Nome Comercial": "Drive GM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Drive GM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Drive GM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax CM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax CM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax CM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax CM Cortical", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax CM Cortical", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax CM Cortical", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax CM Cortical", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Alvim CM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Alvim CM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Alvim CM", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax WS", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax WS", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax WS", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "6.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax II Plus Cortical", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.75", "Rosca": "1.6mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "102" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax II Plus Cortical", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "102" },
    { "Fabricante": "Neodent", "Nome Comercial": "Alvim II Plus", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.3", "Rosca": "1.6mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "313" },
    { "Fabricante": "Neodent", "Nome Comercial": "Alvim II Plus", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "313" },
    { "Fabricante": "Neodent", "Nome Comercial": "Drive Ti", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "Neodent", "Nome Comercial": "Drive Ti", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax Ti Cortical", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax Ti Cortical", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Neodent", "Nome Comercial": "Alvim Ti", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.3", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "1.0mm", "Código": "Não Fabricamos" },
    { "Fabricante": "Neodent", "Nome Comercial": "Alvim Ti", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.3", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "1.0mm", "Código": "Não Fabricamos" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax Ti Cortical", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax Ti Cortical", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "Neodent", "Nome Comercial": "Titamax Ti Cortical", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "6.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "Neodent", "Nome Comercial": "Drive Ti", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "Neodent", "Nome Comercial": "Drive Ti", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "Morse Taper", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.3", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "Morse Taper", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "Morse Taper", "Implante Dimensões": "4.8", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "Amplified", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.3", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "Amplified", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "Amplified", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "Amplified Funcional", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.3", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "Amplified Funcional", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "Amplified Funcional", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.8", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "HEX-S Sólido", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.6mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "0.7mm", "Código": "101" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "HEX-S Funcional", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "HEX-S Funcional", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Pi Branemark", "Nome Comercial": "HEX-S Funcional", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.8", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Pross", "Nome Comercial": "Cilíndrico SA", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Pross", "Nome Comercial": "Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Infra", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.3", "Rosca": "1.6mm", "Largura do Hexágono": "2.1mm", "Altura do Hexágono": "Na", "Código": "701" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Infra", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.8", "Rosca": "1.6mm", "Largura do Hexágono": "2.1mm", "Altura do Hexágono": "Na", "Código": "701" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Infra", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.6", "Rosca": "1.6mm", "Largura do Hexágono": "2.1mm", "Altura do Hexágono": "Na", "Código": "701" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Duocon", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.6", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "702" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Duocon", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "702" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Ares", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.8", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "1.0mm", "Código": "106" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Ares", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "1.0mm", "Código": "106" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Duo", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.8", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "1.0mm", "Código": "Usar tabela anexa" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Duo", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "1.0mm", "Código": "Usar tabela anexa" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Integra", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.25", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "1.0mm", "Código": "Usar tabela anexa" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Integra", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "1.0mm", "Código": "Usar tabela anexa" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Ares", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.6", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Ares", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.1", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Duo", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Duo", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Duo", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "(4.1)", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Integra", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.5", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "Signo Vinces", "Nome Comercial": "Integra", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SW Morse (SWCM)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "712" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SW Morse (SWCM)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.8", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "712" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SW Morse (SWCM)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.5", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "712" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SW Morse (SWCM)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "712" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SW Morse (SWCM)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.5", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "712" },
    { "Fabricante": "SIN", "Nome Comercial": "Unitite Prime", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Unitite Prime", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.8", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Unitite Prime", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Unitite Prime", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SWC (CMSW...)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SWC (CMSW...)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.8", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SWC (CMSW...)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SWC (CMSW...)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Epikut (ILCM...)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Epikut (ILCM...)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.8", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Epikut (ILCM...)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Epikut (ILCM...)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Epikut Plus (ILCM...)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Epikut Plus (ILCM...)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.8", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Epikut Plus (ILCM...)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Epikut Plus (ILCM...)", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon SAT", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon SAT", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon SAT", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon SC", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "2.9", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "SIN", "Nome Comercial": "Unitite Slim", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "SIN", "Nome Comercial": "Unitite Slim", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "SIN", "Nome Comercial": "Unitite Slim", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "6.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "SIN", "Nome Comercial": "Unitite Compact", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "SIN", "Nome Comercial": "Unitite Compact", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "SIN", "Nome Comercial": "Unitite Compact", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "6.0", "Rosca": "Na", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SW HI (SW...)", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.8", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SW HI (SW...)", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SW HI (SW...)", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SW HI (SW...)", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "SIN", "Nome Comercial": "Revolution (Summ34...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.4", "Rosca": "2.0mm", "Largura do Hexágono": "2.55mm", "Altura do Hexágono": "0.7mm", "Código": "104" },
    { "Fabricante": "SIN", "Nome Comercial": "Stylos (SC03S...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.55mm", "Altura do Hexágono": "0.7mm", "Código": "104" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SW HE (SCW37...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SW HE (SCW45...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Strong SW HE (SCW50...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon/Tryon CY (SA...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.25", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon/Tryon CY (SA...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon/Tryon CY (SA...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon/Tryon CY (SA...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon/Tryon CY (SA...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon CO", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon CO", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Tryon PE (SAE...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Revolution (SUR...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.25", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Revolution (SUR...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Revolution (SUR...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Revolution (SUR...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Revolution (SUR...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Stylos (SCO...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Stylos (SCO...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Epikut HE (ILHE...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Epikut HE (ILHE...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "SIN", "Nome Comercial": "Epikut HE (ILHE...)", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "1.0mm", "Código": "Não Fabricamos" },
    { "Fabricante": "SIN", "Nome Comercial": "Revolution Compact", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "1.0mm", "Código": "Não Fabricamos" },
    { "Fabricante": "Singular", "Nome Comercial": "CM Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Singular", "Nome Comercial": "CM Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Singular", "Nome Comercial": "CM Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Singular", "Nome Comercial": "CM Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Singular", "Nome Comercial": "CM Cônico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Singular", "Nome Comercial": "CM Cilíndrico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Singular", "Nome Comercial": "CM Cilíndrico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Singular", "Nome Comercial": "CM Cilíndrico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Singular", "Nome Comercial": "CM Cilíndrico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Singular", "Nome Comercial": "CM Cilíndrico", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Singular", "Nome Comercial": "CM Go Direct", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Singular", "Nome Comercial": "CM Go Direct", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Singular", "Nome Comercial": "HE Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "Singular", "Nome Comercial": "HE Cilíndrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "Singular", "Nome Comercial": "HE Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Singular", "Nome Comercial": "HE Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Singular", "Nome Comercial": "HE Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.3", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Singular", "Nome Comercial": "HE Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Singular", "Nome Comercial": "HE Cônico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Singular", "Nome Comercial": "HE Cilíndrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Singular", "Nome Comercial": "HE Cilíndrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Singular", "Nome Comercial": "HE Cilíndrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.3", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Singular", "Nome Comercial": "HE Cilíndrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Singular", "Nome Comercial": "HE Cilíndrico", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Attract", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Systhex", "Nome Comercial": "Attract", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Systhex", "Nome Comercial": "Attract", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Systhex", "Nome Comercial": "Attracts Allure (short)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.75", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Systhex", "Nome Comercial": "Attracts Allure (short)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Systhex", "Nome Comercial": "Attracts Allure (short)", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Systhex", "Nome Comercial": "Cone FIX", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "2.8", "Rosca": "1.6mm", "Largura do Hexágono": "Na", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Systhex", "Nome Comercial": "Avantt", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Systhex", "Nome Comercial": "Avantt", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Systhex", "Nome Comercial": "Avantt", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "703" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-IN CR", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-IN CR", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-IN CR", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-IN CR", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "Systhex", "Nome Comercial": "Estetic-IN CR", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "Systhex", "Nome Comercial": "Estetic-IN CR", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "Systhex", "Nome Comercial": "Estetic-IN CR", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "316" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-IN CR", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.5", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-IN CR", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.6", "Rosca": "1.6mm", "Largura do Hexágono": "2.0mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.3", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Estetic-CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Estetic-CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Estetic-CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.3", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Estetic-CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-Cits", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-Cits", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-Cits", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.3", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-Cits", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "Systhex", "Nome Comercial": "Estetic-CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.5", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "Systhex", "Nome Comercial": "Estetic-CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "Systhex", "Nome Comercial": "Classic-Cits", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.3mm", "Altura do Hexágono": "1.0mm", "Código": "110" },
    { "Fabricante": "Systhex", "Nome Comercial": "Fit-Hex CI", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.8mm", "Largura do Hexágono": "2.37mm", "Altura do Hexágono": "1.0mm", "Código": "102" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "b-fix Profile", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.0", "Rosca": "1.4mm", "Largura do Hexágono": "1.8mm", "Altura do Hexágono": "Na", "Código": "Não Fabricamos" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "b-fix Profile", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "3.5", "Rosca": "1.6mm", "Largura do Hexágono": "2.1mm", "Altura do Hexágono": "Na", "Código": "701" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "b-fix Profile", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.0", "Rosca": "1.6mm", "Largura do Hexágono": "2.1mm", "Altura do Hexágono": "Na", "Código": "701" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "b-fix", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "4.5", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "702" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "b-fix", "Tipo de Conexão": "CONE MORSE", "Implante Dimensões": "5.0", "Rosca": "2.0mm", "Largura do Hexágono": "2.5mm", "Altura do Hexágono": "Na", "Código": "702" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "i-fix Groove", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "3.75", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "Na", "Código": "113" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "i-fix Groove", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "4.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "Na", "Código": "113" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "i-fix", "Tipo de Conexão": "CONEXÃO INTERNA", "Implante Dimensões": "5.0", "Rosca": "1.8mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "Na", "Código": "113" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "e-fix", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.7mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "1.0mm", "Código": "103" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "e-fix", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "1.7mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "1.0mm", "Código": "103" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "e-fix Silver", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "1.7mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "1.0mm", "Código": "103" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "e-fix Silver", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.5", "Rosca": "1.7mm", "Largura do Hexágono": "2.4mm", "Altura do Hexágono": "1.0mm", "Código": "103" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "e-fix Silver", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.3", "Rosca": "2.5mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "e-fix Silver", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.1", "Rosca": "2.5mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "e-fix Groove", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "3.75", "Rosca": "2.5mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "e-fix Groove", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.0", "Rosca": "2.5mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "e-fix Groove", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "4.1", "Rosca": "2.5mm", "Largura do Hexágono": "2.7mm", "Altura do Hexágono": "0.7mm", "Código": "105" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "e-fix Silver", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.0", "Rosca": "2.5mm", "Largura do Hexágono": "3.4mm", "Altura do Hexágono": "1.0mm", "Código": "112" },
    { "Fabricante": "TitaniumFix", "Nome Comercial": "e-fix Silver", "Tipo de Conexão": "CONEXÃO EXTERNA", "Implante Dimensões": "5.1", "Rosca": "2.5mm", "Largura do Hexágono": "3.4mm", "Altura do Hexágono": "1.0mm", "Código": "112" }
    ];

$(document).ready(function () {
    carregarFabricantes(); // Carrega as opções de fabricantes no select correspondente

    $('#fabricanteSelect').change(function () {
        limparFiltros(['#nomeComercialSelect', '#tipoConexaoSelect', '#dimensaoSelect', '#roscaSelect', '#larguraHexagonoSelect', '#alturaHexagonoSelect']);
        filtrarNomeComercial();
    });

    $('#nomeComercialSelect').change(function () {
        limparFiltros(['#tipoConexaoSelect', '#dimensaoSelect', '#roscaSelect', '#larguraHexagonoSelect', '#alturaHexagonoSelect']);
        filtrarTipoConexao();
    });

    $('#tipoConexaoSelect').change(function () {
        limparFiltros(['#dimensaoSelect', '#roscaSelect', '#larguraHexagonoSelect', '#alturaHexagonoSelect']);
        filtrarImplanteDimensao();
    });

    $('#dimensaoSelect').change(function () {
        limparFiltros(['#roscaSelect', '#larguraHexagonoSelect', '#alturaHexagonoSelect']);
        filtrarRosca();
    });

    $('#roscaSelect').change(function () {
        limparFiltros(['#larguraHexagonoSelect', '#alturaHexagonoSelect']);
        filtrarLarguraHexagono();
    });

    $('#larguraHexagonoSelect').change(function () {
        limparFiltros(['#alturaHexagonoSelect']);
        filtrarAlturaHexagono();
    });

    $('#salvarButton').click(function () {
        salvar();
    });
});

function carregarFabricantes() {
    const fabricantes = [...new Set(data.map(item => item.Fabricante))];
    const selectFabricante = $('#fabricanteSelect');
    selectFabricante.empty(); // Limpa todas as opções antes de adicionar novas
    selectFabricante.append(new Option("Sem Informação", "Sem Informação")); // Recoloca a opção padrão, se necessário
    fabricantes.forEach(fabricante => {
        selectFabricante.append(new Option(fabricante, fabricante));
    });
}


function filtrarNomeComercial() {
    const fabricanteSelecionado = $('#fabricanteSelect').val();
    const nomesComerciais = [...new Set(data.filter(item => item.Fabricante === fabricanteSelecionado).map(item => item['Nome Comercial']))];
    const selectNomeComercial = $('#nomeComercialSelect');
    selectNomeComercial.empty();  // Limpa as opções atuais
    if (nomesComerciais.length > 0) {
        selectNomeComercial.append(new Option("Selecione o Nome Comercial", ""));
        nomesComerciais.forEach(nome => {
            selectNomeComercial.append(new Option(nome, nome));
        });
    }
}

function filtrarTipoConexao() {
    const fabricanteSelecionado = $('#fabricanteSelect').val();
    const nomeComercialSelecionado = $('#nomeComercialSelect').val();
    const tiposConexao = [...new Set(data.filter(item => item.Fabricante === fabricanteSelecionado && item['Nome Comercial'] === nomeComercialSelecionado).map(item => item['Tipo de Conexão']))];
    const selectTipoConexao = $('#tipoConexaoSelect');
    selectTipoConexao.empty();
    if (tiposConexao.length > 0) {
        selectTipoConexao.append(new Option("Selecione o Tipo de Conexão", ""));
        tiposConexao.forEach(tipo => {
            selectTipoConexao.append(new Option(tipo, tipo));
        });
    }
}

function filtrarImplanteDimensao() {
    const fabricanteSelecionado = $('#fabricanteSelect').val();
    const nomeComercialSelecionado = $('#nomeComercialSelect').val();
    const tipoConexaoSelecionado = $('#tipoConexaoSelect').val();
    const implanteDimensoes = [...new Set(data.filter(item => item.Fabricante === fabricanteSelecionado && item['Nome Comercial'] === nomeComercialSelecionado && item['Tipo de Conexão'] === tipoConexaoSelecionado).map(item => item['Implante Dimensões']))];
    const selectImplanteDimensao = $('#dimensaoSelect');
    selectImplanteDimensao.empty();
    if (implanteDimensoes.length > 0) {
        selectImplanteDimensao.append(new Option("Selecione a Dimensão do Implante", ""));
        implanteDimensoes.forEach(dimensao => {
            selectImplanteDimensao.append(new Option(dimensao, dimensao));
        });
    }
}

function filtrarRosca() {
    const fabricanteSelecionado = $('#fabricanteSelect').val();
    const nomeComercialSelecionado = $('#nomeComercialSelect').val();
    const tipoConexaoSelecionado = $('#tipoConexaoSelect').val();
    const implanteDimensaoSelecionada = $('#dimensaoSelect').val();
    const roscas = [...new Set(data.filter(item => item.Fabricante === fabricanteSelecionado && item['Nome Comercial'] === nomeComercialSelecionado && item['Tipo de Conexão'] === tipoConexaoSelecionado && item['Implante Dimensões'] === implanteDimensaoSelecionada).map(item => item['Rosca']))];
    const selectRosca = $('#roscaSelect');
    selectRosca.empty();
    if (roscas.length > 0) {
        selectRosca.append(new Option("Selecione a Rosca", ""));
        roscas.forEach(rosca => {
            selectRosca.append(new Option(rosca, rosca));
        });
    }
}

function filtrarLarguraHexagono() {
    const fabricanteSelecionado = $('#fabricanteSelect').val();
    const nomeComercialSelecionado = $('#nomeComercialSelect').val();
    const tipoConexaoSelecionado = $('#tipoConexaoSelect').val();
    const implanteDimensaoSelecionada = $('#dimensaoSelect').val();
    const roscaSelecionada = $('#roscaSelect').val();
    const largurasHexagono = [...new Set(data.filter(item => item.Fabricante === fabricanteSelecionado && item['Nome Comercial'] === nomeComercialSelecionado && item['Tipo de Conexão'] === tipoConexaoSelecionado && item['Implante Dimensões'] === implanteDimensaoSelecionada && item['Rosca'] === roscaSelecionada).map(item => item['Largura do Hexágono']))];
    const selectLarguraHexagono = $('#larguraHexagonoSelect');
    selectLarguraHexagono.empty();
    if (largurasHexagono.length > 0) {
        selectLarguraHexagono.append(new Option("Selecione a Largura do Hexágono", ""));
        largurasHexagono.forEach(largura => {
            selectLarguraHexagono.append(new Option(largura, largura));
        });
    }
}

function filtrarAlturaHexagono() {
    const fabricanteSelecionado = $('#fabricanteSelect').val();
    const nomeComercialSelecionado = $('#nomeComercialSelect').val();
    const tipoConexaoSelecionado = $('#tipoConexaoSelect').val();
    const implanteDimensaoSelecionada = $('#dimensaoSelect').val();
    const roscaSelecionada = $('#roscaSelect').val();
    const larguraHexagonoSelecionada = $('#larguraHexagonoSelect').val();
    const alturasHexagono = [...new Set(data.filter(item => item.Fabricante === fabricanteSelecionado && item['Nome Comercial'] === nomeComercialSelecionado && item['Tipo de Conexão'] === tipoConexaoSelecionado && item['Implante Dimensões'] === implanteDimensaoSelecionada && item['Rosca'] === roscaSelecionada && item['Largura do Hexágono'] === larguraHexagonoSelecionada).map(item => item['Altura do Hexágono']))];
    const selectAlturaHexagono = $('#alturaHexagonoSelect');
    selectAlturaHexagono.empty();
    if (alturasHexagono.length > 0) {
        selectAlturaHexagono.append(new Option("Selecione a Altura do Hexágono", ""));
        alturasHexagono.forEach(altura => {
            selectAlturaHexagono.append(new Option(altura, altura));
        });
    }
}

function limparFiltros(ids) {
    ids.forEach(id => {
        $(id).empty();
        $(id).append(new Option("Selecione uma opção", ""));
    });
}

function salvar() {
    const fabricanteSelecionado = $('#fabricanteSelect').val();
    const nomeComercialSelecionado = $('#nomeComercialSelect').val();
    const tipoConexaoSelecionado = $('#tipoConexaoSelect').val();
    const implanteDimensaoSelecionada = $('#dimensaoSelect').val();
    const roscaSelecionada = $('#roscaSelect').val();
    const larguraHexagonoSelecionada = $('#larguraHexagonoSelect').val();
    const alturaHexagonoSelecionada = $('#alturaHexagonoSelect').val();
    const codigoFinal = data.find(item => item.Fabricante === fabricanteSelecionado && item['Nome Comercial'] === nomeComercialSelecionado && item['Tipo de Conexão'] === tipoConexaoSelecionado && item['Implante Dimensões'] === implanteDimensaoSelecionada && item['Rosca'] === roscaSelecionada && item['Largura do Hexágono'] === larguraHexagonoSelecionada && item['Altura do Hexágono'] === alturaHexagonoSelecionada)?.Código || 'Código não encontrado';
    $('#codigoFinal').text(codigoFinal);
}
