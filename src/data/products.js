// Helper: automatically optimizes any Cloudinary URL
// Inserts w_600,q_auto,f_auto after /upload/ so images are
// resized, compressed, and served as WebP — ~20x smaller files
const cdn = (url) => {
    if (!url || !url.includes("res.cloudinary.com")) return url;
    return url.replace("/upload/", "/upload/w_600,q_auto,f_auto/");
};

export const categories = [
    {
        id: "tea",
        title: "Ceylon Tea",
        items: [
            {
                id: "ceylon-tea-1",
                name: "Black Tea Mix Fruit",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745910/DSC08116_bdfxqj.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-2",
                name: "Lotus Flavour Tea",
                price: "$12",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777740164/DSC08203_kkr2qg.jpg"),
                desc: "Rich aroma and flavor"
            },
            {
                id: "ceylon-tea-3",
                name: "Nuwaraeliya High Grown Tea",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777740165/DSC08198_wn1lhs.jpg"),
                desc: "Exclusive silver tips blend"
            },
            {
                id: "ceylon-tea-4",
                name: "Vanila Tea",
                price: "$8",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777740926/DSC08085_pxswso.jpg"),
                desc: "Traditional strong Sri Lankan tea"
            },
            {
                id: "ceylon-tea-5",
                name: "Earl Gray",
                price: "$18",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777749897/DSC08028_1_sfpvbj.jpg"),
                desc: "Handpicked estate premium leaves"
            },
            {
                id: "ceylon-tea-6",
                name: "Lemon Grass",
                price: "$14",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777741213/DSC08023_t3beme.jpg"),
                desc: "Refreshing herbal blend"
            },
            {
                id: "ceylon-tea-7",
                name: "Green Tea Soursop",
                price: "$16",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777744884/DSC08031_kxz5oa.jpg"),
                desc: "Exotic and healthy"
            },
            {
                id: "ceylon-tea-8",
                name: "Mango Flavour",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777744884/DSC08045_kzeczk.jpg"),
                desc: "Tropical sweet aroma"
            },
            {
                id: "ceylon-tea-9",
                name: "Black Tea Pineapple",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777744881/DSC08052_igwyhb.jpg"),
                desc: "Fruity and robust"
            },
            {
                id: "ceylon-tea-10",
                name: "Black Tea Lotus",
                price: "$16",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777744881/DSC08082_llndiv.jpg"),
                desc: "Floral and rich taste"
            },
            {
                id: "ceylon-tea-11",
                name: "Vanila Flavour",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777744883/DSC08085_upuyrd.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-12",
                name: "Banana Flavour",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777744880/DSC08092_zbosgp.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-13",
                name: "Black Tea Rose",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777744885/DSC08093_jobunr.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-14",
                name: "Black Tea Jasmine",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777744885/DSC08097_adzhf8.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-15",
                name: "Chai Masala",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745909/DSC08104_phsx52.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-16",
                name: "Passion",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745907/DSC08106_yunjia.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-17",
                name: "Green Tea Mix Fruit",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745908/DSC08111_qx4wce.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-18",
                name: "Black Tea Mint",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745908/DSC08112_ay7pi0.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-19",
                name: "Ginger Flavour",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745911/DSC08121_fp67fk.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-20",
                name: "Black Tea 1001 Night",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745911/DSC08127_kzzy9u.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-21",
                name: "Green Tea",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745913/DSC08131_nhtmgb.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-22",
                name: "PEKOE-1",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745914/DSC08134_efieri.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-23",
                name: "Black Tea FFEX-SP1",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745915/DSC08137_issn2l.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-24",
                name: "Black Tea BOP",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745917/DSC08140_st666b.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-25",
                name: "Black Tea Pekeo",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745918/DSC08154_nminrw.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-26",
                name: "Black Tea OP",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745918/DSC08156_zzrmcj.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-27",
                name: "Golden Tips Tea",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745919/DSC08161_ilxbio.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-28",
                name: "BOP",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745918/DSC08167_z8n8q0.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-29",
                name: "Silver Tips Tea",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745920/DSC08170_wlddby.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-30",
                name: "White Tips Tea",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777748656/DSC08173_cspikn.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-31",
                name: "Purple Tea",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777748654/DSC08178_hjnxe6.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-32",
                name: "BOPF SP-1",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777748656/DSC08181_v8gk6m.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-33",
                name: "OP",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777748655/DSC08183_d7fvnb.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-34",
                name: "Merry Gold",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777748659/DSC08190_js0dbl.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-35",
                name: "Water Lily",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777736429/DSC08214_lhue60.jpg"),
                desc: "Premium quality from our private estate"
            },
            {
                id: "ceylon-tea-36",
                name: "Mint Tea",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777812629/DSC08007_lx3ccp.jpg"),
                desc: "Freshly harvested Mint tea"
            },
            {
                id: "ceylon-tea-36",
                name: "Black Tea Chocolate",
                price: "$15",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777745912/DSC08126_p5sls3.jpg"),
                desc: "Premium quality from our private estate"
            }
        ]
    },
    {
        id: "spices",
        title: "Sri Lankan Spices",
        items: [
            {
                id: "s-item-1",
                name: "Cinnamon Powder",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784693/DSC08292_i78ttf.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-2",
                name: "Cinnamon Pieces",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784693/DSC08289_c4qqfi.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-3",
                name: "White Pepper",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784693/DSC08295_veics6.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-4",
                name: "Curry Leaves Powder",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784692/DSC08299_tri27d.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-5",
                name: "Curry Powder",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784693/DSC08331_pjltdb.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-6",
                name: "Chilli Pieces",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784694/DSC08339_ruklwu.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-7",
                name: "Roasted Curry Powder",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784698/DSC08358_ehztmn.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-8",
                name: "Turmeric Powder",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784701/DSC08361_wgbef2.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-9",
                name: "Clove",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784696/DSC08370_krfp3o.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-10",
                name: "Pepper Powder",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784698/DSC08377_xpzlws.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-11",
                name: "Rosemary",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784697/DSC08457_jg0ko3.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-12",
                name: "Cardamom",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784696/DSC08453_yavjfq.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-13",
                name: "Roasted Chilli Powder",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784695/DSC08353_m1rzff.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "s-item-14",
                name: "Coriander",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777784696/DSC08454_cbisgm.jpg"),
                desc: "100% Authentic Sri Lankan"
            }
        ]
    },
    {
        id: "herbal",
        title: "Herbal",
        items: [
            {
                id: "h-item-1",
                name: "Vanila Extract",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777783728/DSC08320_abtoin.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "h-item-2",
                name: "Cinnamon Air Freshner",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777783729/DSC08322_grfoyp.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "h-item-3",
                name: "Cinnamon oil",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777783728/DSC08326_rdwgpl.jpg"),
                desc: "100% Authentic Sri Lankan"
            }
        ]
    },
    {
        id: "other",
        title: "Other Products",
        items: [
            {
                id: "op-item-1",
                name: "Elephant",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777783727/DSC08240_qyrws1.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "op-item-2",
                name: "Elephant Trio",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777783726/DSC08242_rc9g95.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "op-item-3",
                name: "Coconut Shell Wise Man",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777815271/DSC08245_svqgcw.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "op-item-4",
                name: "Rabbit",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777783733/DSC08249_t4ika4.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "op-item-5",
                name: "Monkey",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777783732/DSC08253_iericn.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "op-item-6",
                name: "Monkey Face",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777783727/DSC08261_w7hyze.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "op-item-7",
                name: "Mother Monkey",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777783732/DSC08262_mjl6xc.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "op-item-8",
                name: "Elephant & Monkey Carving",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777815265/DSC08256_nyjpis.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "op-item-9",
                name: "Royal Tusker Elephant",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777815273/DSC08266_ryvpke.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "op-item-10",
                name: "Coconut Shell Old Man",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777815275/DSC08270_ujjcon.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "op-item-11",
                name: "Coconut Shell Turtle",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777815271/DSC08305_a9n7p2.jpg"),
                desc: "100% Authentic Sri Lankan"
            },
            {
                id: "op-item-12",
                name: "Mother & Baby Elephant",
                price: "$10",
                img: cdn("https://res.cloudinary.com/dp1jwsapk/image/upload/v1777815272/DSC08308_dtlgni.jpg"),
                desc: "100% Authentic Sri Lankan"
            }
        ]
    }
];