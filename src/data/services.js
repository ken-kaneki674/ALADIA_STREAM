export const services = [
    {
        id: 'bureautique',
        icon: 'fa-briefcase',
        title: 'Traitement Bureautique & Administratif',
        link: '/services/bureautique',
        description: 'Services administratifs complets pour particuliers et entreprises.',
        items: [
            'CIP et Carte Biométrique',
            'IFU et Registre de commerce',
            'Impression couleur, noir et blanc',
            'Saisie et scannage de documents',
            'Plastification et Reliure',
            'Casier judiciaire et Certificat de nationalité',
            'Passeport',
            'Acte de Naissance Sécurisé'
        ],
        details: 'Nous prenons en charge toutes vos démarches administratives avec rapidité et efficacité. Que ce soit pour la constitution de dossiers, la numérisation de vos archives ou l\'impression de vos documents officiels, nous vous garantissons un travail soigné.'
    },
    {
        id: 'graphisme',
        icon: 'fa-camera-retro',
        title: 'Graphisme, Photographie et Formations',
        link: '/services/graphisme',
        description: 'Capturez vos moments et développez vos compétences.',
        items: [
            "Photo d'identité et Tirage photo complet",
            "Traitement d'images et Conception graphique",
            "Formation Bureautique",
            "Formation en graphisme",
            "Formation en Dessin",
            "Formation : création et conception de sites web"
        ],
        details: 'Notre studio de création vous accompagne dans la réalisation de vos supports visuels. Nous proposons également des formations pratiques pour vous permettre de maîtriser les outils numériques et artistiques.'
    },
    {
        id: 'vente-produits',
        icon: 'fa-shopping-bag',
        title: 'Vente de produits et accessoires',
        link: '/services/vente-produits',
        description: 'Le meilleur de l\'équipement et des accessoires.',
        items: [
            "Accessoires informatiques",
            "Accessoires électroménagers",
            "Équipement électronique",
            "Parfumerie"
        ],
        details: 'Découvrez notre sélection d\'accessoires et d\'équipements de qualité. Nous sélectionnons pour vous les meilleurs produits pour répondre à vos besoins quotidiens en technologie et maison.'
    },
    {
        id: 'restauration',
        icon: 'fa-utensils',
        title: 'Restauration & Bien-être',
        link: '/services/restauration',
        description: 'Une cuisine savoureuse et des boissons naturelles pour votre vitalité.',
        items: [
            'Petit-Déjeuner & Encas',
            'Sandwichs & Shawarma',
            'Plats de Résistance',
            'Crêperie Gourmande',
            'Jus de fruits Naturels'
        ],
        categories: [
            {
                name: 'Petit-Déjeuner & Encas',
                items: [
                    { name: 'Salade de fruits', description: 'Fraîcheur vitaminée' },
                    { name: 'Yaourt bio', description: 'Onctueux et naturel' }
                ]
            },
            {
                name: 'Sandwichs Privilège',
                items: [
                    { name: 'Sandwich au poulet', description: 'Poulet grillé et crudités' },
                    { name: 'Sandwich viande hachée', description: 'Bœuf savoureux' },
                    { name: 'Sandwich à l\'omelette', description: 'Classique et nutritif' },
                    { name: 'Sandwich aux saucisses', description: 'Gourmand et rapide' },
                    { name: 'Shawarma', description: 'L\'incontournable oriental' }
                ]
            },
            {
                name: 'Plats de Résistance',
                items: [
                    { 
                        name: 'Petit pois Royal', 
                        description: 'Boulettes de viande, saucisses, poulet avec frites, alloco ou riz' 
                    }
                ]
            },
            {
                name: 'Crêperie Gourmande',
                items: [
                    { name: 'Crêpe Chocolat', description: 'Douceur fondante' },
                    { name: 'Crêpe Confiture', description: 'Parfum de fruits' },
                    { name: 'Crêpe Viande hachée', description: 'Option salée' }
                ]
            },
            {
                name: 'Bien-être & Jus Naturels',
                items: [
                    { name: 'Bissap express aux dattes', benefit: 'Riche en fer et booste l\'énergie naturelle.' },
                    { name: 'Jus de gingembre', benefit: 'Anti-inflammatoire puissant et facilite la digestion.' },
                    { name: 'Jus de baobab', benefit: 'Exceptionnellement riche en Vitamine C et calcium.' },
                    { name: 'Jus d\'orange', benefit: 'Tonifiant, renforce le système immunitaire.' },
                    { name: 'Jus de pomme', benefit: 'Détoxifiant et excellent pour le cœur.' },
                    { name: 'Jus d\'ananas', benefit: 'Aide à la digestion et brûle les graisses.' },
                    { name: 'Jus de raisin', benefit: 'Puissant antioxydant pour la santé cardiovasculaire.' }
                ]
            }
        ],
        details: 'Chez ALADIA STREAM, nous croyons que bien manger est le début du bonheur. Notre menu est conçu pour allier plaisir gustatif et bienfaits pour la santé, avec des produits frais et des jus naturels préparés avec soin.'
    },
    {
        id: 'cosmetique',
        icon: 'fa-magic',
        title: 'Vente de produits cosmétiques',
        link: '/services/cosmetique',
        description: 'Révélez votre beauté au naturel.',
        items: [
            "Maquillage",
            "Soins du visage",
            "Soins du corps",
            "Parfums et parfumerie",
            "Accessoires cosmétiques"
        ],
        details: 'Une large gamme de produits de beauté pour prendre soin de vous. Maquillage, soins, parfums... trouvez tout ce dont vous avez besoin pour votre routine beauté.'
    },
    {
        id: 'vetements',
        icon: 'fa-tshirt',
        title: 'Vente de vêtements',
        link: '/services/vetements',
        description: 'Style et élégance pour toute la famille.',
        items: [
            "Vêtements hommes, femmes et enfants",
            "Chaussures",
            "Accessoires de mode",
            "Confection et retouches"
        ],
        details: 'Renouvelez votre garde-robe avec notre collection de vêtements et accessoires. Nous proposons également un service de confection et de retouches pour des vêtements parfaitement ajustés.'
    },
    {
        id: 'creation-sites-web',
        icon: 'fa-laptop-code',
        title: 'Création de Sites Web et Applications',
        link: '/services/creation-sites-web',
        description: 'Votre présence en ligne, professionnelle et percutante.',
        items: [
            "Sites Vitrines et E-commerce",
            "Applications Web et Mobiles",
            "Refonte de sites existants",
            "Maintenance et Hébergement",
            "Optimisation SEO",
            "Solutions sur mesure"
        ],
        details: 'Propulsez votre activité avec une présence numérique forte. Nous concevons des sites web modernes, rapides et optimisés pour le référencement, ainsi que des applications sur mesure pour répondre à vos besoins spécifiques.'
    }
];
