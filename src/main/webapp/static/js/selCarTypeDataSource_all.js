//数据源
var carTypeSourceData = [
      {
            id:1,
            group:1,
            initial:'D',
            brandName:'东风',
            carType:[
                  {id:2,name:'东风天龙旗舰'},{id:3,name:'东风天龙'},{id:4,name:'东风天锦'},{id:5,name:'东风大力神'},{id:6,name:'东风紫罗兰'},{id:7,name:'东风153'},{id:8,name:'东风145'},{id:9,name:'东风运煤王'},{id:10,name:'东风猛士'},{id:11,name:'东风军车'},{id:12,name:'东风柳汽霸龙'},{id:13,name:'东风柳汽乘龙'},{id:14,name:'东风柳汽龙卡'},{id:15,name:'东风小霸王'},{id:16,name:'东风康霸'},{id:17,name:'东风金霸'},{id:18,name:'东风多利卡'},{id:19,name:'东风得利卡'},{id:20,name:'东风劲诺'},{id:21,name:'东风金刚'},{id:22,name:'东风之星'},{id:23,name:'东风嘉运'},{id:24,name:'东风小康'},{id:25,name:'东风特商'},{id:26,name:'东风客车'},{id:529,name:'其他(东风)'},{id:2914,name:'东风凯普特'},{id:2915,name:'东风福瑞卡'},{id:2916,name:'东风力拓'},{id:2917,name:'东风御风'}
            ]
      },{
            id:27,
            group:1,
            initial:'Z',
            brandName:'中国重汽',
            carType:[
                  {id:28,name:'汕德卡(SITRAK)'},{id:29,name:'豪沃(HOWO)'},{id:30,name:'斯太尔(STR)'},{id:31,name:'豪瀚(HOHAN)'},{id:32,name:'金王子'},{id:33,name:'黄河'},{id:34,name:'成都王牌'},{id:35,name:'福泺'},{id:36,name:'威泺'},{id:530,name:'其他(中国重汽)'}
            ]
      },{
            id:37,
            group:1,
            initial:'Y',
            brandName:'一汽解放',
            carType:[
                  {id:38,name:'一汽解放J6'},{id:3031,name:'一汽解放J7'},{id:39,name:'一汽解放奥威'},{id:40,name:'一汽解放大威'},{id:41,name:'一汽解放骏威'},{id:42,name:'一汽解放三赛'},{id:3032,name:'一汽佳宝'},{id:3033,name:'青岛解放JH6'},{id:3034,name:'青岛解放天V'},{id:3035,name:'青岛解放悍V '},{id:3036,name:'青岛解放虎V  '},{id:3037,name:'青岛解放虎VH '},{id:3038,name:'青岛解放虎VN  '},{id:3039,name:'青岛解放龙V '},{id:3040,name:'青岛解放龙VH '},{id:3041,name:'青岛解放途V  '},{id:3042,name:'青岛解放陆V  '},{id:3043,name:'青岛解放麟V '},{id:3044,name:'青岛解放新大威 '},{id:3045,name:'青岛解放新悍威  '},{id:3046,name:'青岛解放赛龙'},{id:3047,name:'一汽柳特安捷  '},{id:3048,name:'一汽柳特金大陆  '},{id:3049,name:'一汽柳特金陆  '},{id:3050,name:'一汽柳特神力  '},{id:3051,name:'一汽柳特运财王  '},{id:3052,name:'一汽柳特龙威'},{id:3053,name:'一汽红塔解放金铃  '},{id:3054,name:'一汽红塔解放霸铃  '},{id:3055,name:'一汽红塔解放公狮  '},{id:3056,name:'一汽红塔解放经典'},{id:3057,name:'大凌运  '},{id:3058,name:'小凌运  '},{id:3059,name:'城市之星  '},{id:3060,name:'一汽凌源'},{id:531,name:'其他(一汽解放)'}
            ]
      },{
            id:43,
            group:1,
            initial:'S',
            brandName:'陕汽重卡',
            carType:[
                  {id:44,name:'德龙'},{id:45,name:'奥龙'},{id:46,name:'轩德'},{id:47,name:'延安'},{id:48,name:'欧舒特'},{id:49,name:'华山'},{id:50,name:'通家'},{id:532,name:'其他(陕汽重卡)'}
            ]
      },{
            id:51,
            group:1,
            initial:'B',
            brandName:'北汽福田',
            carType:[
                  {id:52,name:'欧曼'},{id:53,name:'欧马可'},{id:54,name:'奥铃'},{id:55,name:'瑞沃'},{id:56,name:'时代康瑞'},{id:57,name:'时代驭菱'},{id:58,name:'福田金刚'},{id:59,name:'福田骁运'},{id:60,name:'欧辉'},{id:533,name:'其他(北汽福田)'}
            ]
      },{
            id:61,
            group:1,
            initial:'A',
            brandName:'安徽江淮',
            carType:[
                  {id:62,name:'格尔发'},{id:63,name:'帅铃'},{id:64,name:'康铃'},{id:65,name:'骏铃'},{id:66,name:'威铃'},{id:67,name:'好微'},{id:68,name:'好运'},{id:69,name:'大好运'},{id:70,name:'星锐'},{id:534,name:'其他(安徽江淮)'}
            ]
      },{
            id:71,
            group:1,
            initial:'D',
            brandName:'大运汽车',
            carType:[
                  {id:3061,name:'山西大运N6'},{id:3062,name:'山西大运N8C'},{id:3063,name:'山西大运N8E'},{id:3064,name:'山西大运N8H'},{id:3065,name:'山西大运N8V'},{id:3066,name:'山西大运N9'},{id:3067,name:'山西大运E系列'},{id:3068,name:'湖北大运风驰'},{id:3069,name:'湖北大运风度'},{id:3070,name:'湖北大运运隆'},{id:3071,name:'湖北大运运途'},{id:3072,name:'湖北大运致胜'},{id:3073,name:'湖北大运锐胜'},{id:3074,name:'湖北大运征途'},{id:3075,name:'湖北大运风景'},{id:3076,name:'湖北大运运驰'},{id:3077,name:'湖北大运劲隆'},{id:72,name:'成都大运奥普力'},{id:73,name:'大运川路'},{id:74,name:'大运川交'},{id:535,name:'其他（大运汽车）'}
            ]
      },{
            id:75,
            group:1,
            initial:'A',
            brandName:'安徽华菱',
            carType:[
                  {id:76,name:'华菱重卡'},{id:77,name:'星凯马'},{id:78,name:'华菱之星'},{id:79,name:'汉马'},{id:80,name:'星马'},{id:536,name:'其他(安徽华菱)'}
            ]
      },{
            id:81,
            group:1,
            initial:'B',
            brandName:'北奔',
            carType:[
                  {id:82,name:'北奔重卡'},{id:83,name:'重庆铁马'},{id:537,name:'其他(北奔)'}
            ]
      },{
            id:84,
            group:1,
            initial:'S',
            brandName:'上汽依维柯红岩',
            carType:[
                  {id:85,name:'红岩杰狮'},{id:86,name:'红岩金刚'},{id:538,name:'其他(上汽依维柯红岩)'}
            ]
      },{
            id:87,
            group:1,
            initial:'H',
            brandName:'湖北三环',
            carType:[
                  {id:88,name:'三环昊龙'},{id:89,name:'福星卡'},{id:90,name:'福星天然气'},{id:91,name:'三环御龙'},{id:92,name:'三环客车'},{id:539,name:'其他(湖北三环)'}
            ]
      },{
            id:93,
            group:1,
            initial:'L',
            brandName:'辽宁曙光',
            carType:[
                  {id:94,name:'黄海特种车'},{id:95,name:'黄海客车'},{id:540,name:'其他(辽宁曙光)'}
            ]
      },{
            id:96,
            group:1,
            initial:'Z',
            brandName:'重庆力帆',
            carType:[
                  {id:97,name:'重庆力帆'},{id:541,name:'其他(重庆力帆)'}
            ]
      },{
            id:98,
            group:1,
            initial:'Q',
            brandName:'庆铃汽车',
            carType:[
                  {id:99,name:'五十铃'},{id:542,name:'其他(庆铃汽车)'}
            ]
      },{
            id:100,
            group:1,
            initial:'S',
            brandName:'四川现代',
            carType:[
                  {id:101,name:'创虎'},{id:102,name:'瑞宇'},{id:103,name:'瑞越'},{id:104,name:'瑞逸'},{id:105,name:'瑞康'},{id:106,name:'祥康'},{id:107,name:'新鸿运'},{id:108,name:'金骑'},{id:109,name:'瑞骑'},{id:110,name:'瑞宝'},{id:111,name:'祥康'},{id:112,name:'瑞贝'},{id:113,name:'瑞捷'},{id:114,name:'瑞驰'},{id:115,name:'康恩迪'},{id:543,name:'其他(四川现代)'}
            ]
      },{
            id:116,
            group:1,
            initial:'S',
            brandName:'山东唐骏',
            carType:[
                  {id:117,name:'唐骏微卡'},{id:118,name:'唐骏轻卡'},{id:119,name:'唐骏中重卡'},{id:120,name:'唐骏工程自卸'},{id:544,name:'其他(山东唐骏)'}
            ]
      },{
            id:121,
            group:1,
            initial:'J',
            brandName:'江铃汽车',
            carType:[
                  {id:122,name:'凯锐'},{id:123,name:'新顺达'},{id:124,name:'经典顺达'},{id:125,name:'凯运'},{id:126,name:'宝典PLUS'},{id:127,name:'域虎'},{id:128,name:'宝典'},{id:129,name:'全顺'},{id:545,name:'其他(江铃汽车)'}
            ]
      },{
            id:130,
            group:1,
            initial:'J',
            brandName:'金杯汽车',
            carType:[
                  {id:131,name:'金杯海狮'},{id:132,name:'金杯新海狮'},{id:133,name:'金杯大海狮'},{id:134,name:'全新阁瑞斯'},{id:135,name:'经典阁瑞斯'},{id:546,name:'其他(金杯汽车)'}
            ]
      },{
            id:136,
            group:1,
            initial:'C',
            brandName:'长城汽车',
            carType:[
                  {id:137,name:'风骏'},{id:547,name:'其他(长城汽车)'}
            ]
      },{
            id:138,
            group:1,
            initial:'Z',
            brandName:'重庆长安',
            carType:[
                  {id:139,name:'长安神骐'},{id:140,name:'长安星卡'},{id:141,name:'长安之星'},{id:142,name:'长安睿行'},{id:143,name:'长安尊行'},{id:144,name:'保定长安'},{id:548,name:'其他(重庆长安)'}
            ]
      },{
            id:145,
            group:1,
            initial:'S',
            brandName:'上汽通用五菱',
            carType:[
                  {id:146,name:'五菱之光'},{id:147,name:'五菱荣光'},{id:148,name:'五菱宏光'},{id:149,name:'五菱征程'},{id:549,name:'其他(上汽通用五菱)'}
            ]
      },{
            id:150,
            group:1,
            initial:'S',
            brandName:'山东凯马',
            carType:[
                  {id:151,name:'凯马'},{id:550,name:'其他(山东凯马)'}
            ]
      },{
            id:152,
            group:1,
            initial:'Q',
            brandName:'奇瑞汽车',
            carType:[
                  {id:153,name:'开瑞'},{id:154,name:'奇瑞'},{id:155,name:'威麟'},{id:156,name:'集瑞联合'},{id:551,name:'其他(奇瑞汽车)'}
            ]
      },{
            id:157,
            group:1,
            initial:'G',
            brandName:'广汽吉奥',
            carType:[
                  {id:158,name:'星旺'},{id:159,name:'财运'},{id:552,name:'其他(广汽吉奥)'}
            ]
      },{
            id:160,
            group:1,
            initial:'Z',
            brandName:'郑州宇通',
            carType:[
                  {id:161,name:'宇通客车'},{id:553,name:'其他(郑州宇通)'}
            ]
      },{
            id:162,
            group:1,
            initial:'S',
            brandName:'苏州金龙',
            carType:[
                  {id:163,name:'海格客车'},{id:554,name:'其他(苏州金龙)'}
            ]
      },{
            id:164,
            group:1,
            initial:'X',
            brandName:'厦门金龙',
            carType:[
                  {id:165,name:'金龙客车'},{id:166,name:'金龙金威'},{id:167,name:'金龙凯歌'},{id:168,name:'金龙凯特'},{id:555,name:'其他(厦门金龙)'}
            ]
      },{
            id:169,
            group:1,
            initial:'X',
            brandName:'厦门金旅',
            carType:[
                  {id:170,name:'金旅客车'},{id:171,name:'考斯特'},{id:172,name:'金旅海狮'},{id:556,name:'其他(厦门金旅)'}
            ]
      },{
            id:173,
            group:1,
            initial:'Z',
            brandName:'中通客车',
            carType:[
                  {id:174,name:'中通客车'},{id:557,name:'其他(中通客车)'}
            ]
      },{
            id:175,
            group:1,
            initial:'A',
            brandName:'安徽安凯',
            carType:[
                  {id:176,name:'安凯客车'},{id:177,name:'宝斯通'},{id:178,name:'考斯特'},{id:558,name:'其他(安徽安凯)'}
            ]
      },{
            id:179,
            group:1,
            initial:'B',
            brandName:'比亚迪',
            carType:[
                  {id:180,name:'比亚迪'},{id:559,name:'其他(比亚迪)'}
            ]
      },{
            id:181,
            group:1,
            initial:'Y',
            brandName:'扬州亚星',
            carType:[
                  {id:182,name:'亚星客车'},{id:183,name:'维特思达'},{id:560,name:'其他(扬州亚星)'}
            ]
      },{
            id:184,
            group:1,
            initial:'S',
            brandName:'上海申龙',
            carType:[
                  {id:185,name:'申龙客车'},{id:561,name:'其他(上海申龙)'}
            ]
      },{
            id:186,
            group:1,
            initial:'Y',
            brandName:'一汽丰田',
            carType:[
                  {id:187,name:'一汽丰田'},{id:562,name:'其他(一汽丰田)'}
            ]
      },{
            id:188,
            group:1,
            initial:'N',
            brandName:'南京依维柯',
            carType:[
                  {id:189,name:'依维柯'},{id:190,name:'超越'},{id:191,name:'上骏'},{id:192,name:'帅虎'},{id:193,name:'小福星'},{id:563,name:'其他(南京依维柯)'}
            ]
      },{
            id:194,
            group:1,
            initial:'S',
            brandName:'上汽大通',
            carType:[
                  {id:195,name:'上汽大通'},{id:564,name:'其他(上汽大通)'}
            ]
      },{
            id:2913,
            group:1,
            initial:'G',
            brandName:'广汽日野',
            carType:[
                  {id:2918,name:'日野700系列'},{id:2919,name:'日野轻卡300J系列'},{id:2920,name:'日野轻卡320D系列'},{id:2921,name:'日野轻卡270Y系列'}
            ]
      },{
            id:2922,
            group:1,
            initial:'L',
            brandName:'联合卡车',
            carType:[
                  {id:2936,name:'联合U系'},{id:2937,name:'联合V系'},{id:2938,name:'其他(联合卡车)'}
            ]
      },{
            id:2923,
            group:1,
            initial:'W',
            brandName:'五十铃',
            carType:[
                  {id:2939,name:'五十铃F系列'},{id:2940,name:'五十铃E系列'},{id:2941,name:'五十铃T系列'},{id:2942,name:'其他(五十铃)'}
            ]
      },{
            id:2924,
            group:1,
            initial:'B',
            brandName:'奔驰',
            carType:[
                  {id:2943,name:'奔驰新Actros'},{id:2944,name:'奔驰Actros'},{id:2945,name:'奔驰Axor'},{id:2946,name:'奔驰Atego'},{id:2947,name:'奔驰Zetros'},{id:2948,name:'乌尼莫克'},{id:2949,name:'其他(奔驰)'}
            ]
      },{
            id:2925,
            group:1,
            initial:'S',
            brandName:'斯堪尼亚',
            carType:[
                  {id:2950,name:'斯堪尼亚S系列'},{id:2951,name:'斯堪尼亚R系列'},{id:2952,name:'斯堪尼亚P系列'},{id:2953,name:'斯堪尼亚G系列'},{id:2954,name:'其他(斯堪尼亚)'}
            ]
      },{
            id:2926,
            group:1,
            initial:'W',
            brandName:'沃尔沃',
            carType:[
                  {id:2955,name:'沃尔沃新FH'},{id:2956,name:'沃尔沃新FM'},{id:2957,name:'沃尔沃FH16'},{id:2958,name:'沃尔沃FH'},{id:2959,name:'沃尔沃FMX'},{id:2960,name:'沃尔沃FM'},{id:2961,name:'沃尔沃FL'},{id:2962,name:'沃尔沃FE'},{id:2963,name:'其他(沃尔沃)'}
            ]
      },{
            id:2927,
            group:1,
            initial:'M',
            brandName:'曼',
            carType:[
                  {id:2964,name:'曼TGS'},{id:2965,name:'曼TGX'},{id:2966,name:'曼TGA'},{id:2967,name:'曼TGM'},{id:2968,name:'其他(曼)'}
            ]
      },{
            id:2928,
            group:1,
            initial:'L',
            brandName:'雷诺',
            carType:[
                  {id:2969,name:'雷诺Magnum'},{id:2970,name:'雷诺Premium'},{id:2971,name:'雷诺Kerax'},{id:2972,name:'其他(雷诺)'}
            ]
      },{
            id:2929,
            group:1,
            initial:'D',
            brandName:'达夫/DAF',
            carType:[
                  {id:2973,name:'达夫XF'},{id:2974,name:'达夫CF'},{id:2975,name:'达夫LF'},{id:2976,name:'其他(达夫)'}
            ]
      },{
            id:2930,
            group:1,
            initial:'F',
            brandName:'福特',
            carType:[
                  {id:2977,name:'福特cargo'},{id:2978,name:'其他(福特)'}
            ]
      },{
            id:2931,
            group:1,
            initial:'T',
            brandName:'通用GM',
            carType:[
                  {id:2979,name:'GMC'},{id:2980,name:'其他(通用)'}
            ]
      },{
            id:2932,
            group:1,
            initial:'R',
            brandName:'日产柴',
            carType:[
                  {id:2981,name:'UD系列'},{id:2982,name:'DND系列'},{id:2983,name:'其他(日产柴)'}
            ]
      },{
            id:2933,
            group:1,
            initial:'Y',
            brandName:'依维柯',
            carType:[
                  {id:2984,name:'Stralis'},{id:2985,name:'EuroCargo'},{id:2986,name:'Trakker'},{id:2987,name:'Daily'},{id:2988,name:'其他(依维柯)'}
            ]
      },{
            id:2934,
            group:1,
            initial:'G',
            brandName:'工程机械国外品牌',
            carType:[
                  {id:2989,name:'卡特彼勒CATERPILLAR'},{id:2990,name:'斗山DOOSAN'},{id:2991,name:'小松KOMATSU'},{id:2992,name:'沃尔沃VOLVO'},{id:2993,name:'日立HITACHI'},{id:2994,name:'神钢KOBELCO'},{id:2995,name:'利勃海尔LIEBHERR'},{id:2996,name:'加藤KATO'},{id:2997,name:'凯斯CASE'},{id:2998,name:'卡特重工CARTER'},{id:2999,name:'现代HYUNDAI'},{id:3000,name:'住友SUMITOMO'},{id:3001,name:'JCB'},{id:3002,name:'久保田KUBOTA'},{id:3003,name:'竹内TAKEUCHI'},{id:3004,name:'山猫BOBCAT'},{id:3005,name:'洋马YANMAR'},{id:3006,name:'石川岛IHISCE'},{id:3007,name:'约翰迪尔JOHN DEERE'},{id:3008,name:'威克诺森wackerneuson'},{id:3009,name:'其他(工程机械国外品牌)'}
            ]
      },{
            id:2935,
            group:1,
            initial:'G',
            brandName:'工程机械国内品牌',
            carType:[
                  {id:3010,name:'徐工XCMG'},{id:3011,name:'三一SANY'},{id:3012,name:'柳工LIUGONG'},{id:3013,name:'山东临工SDLG'},{id:3014,name:'中联重科ZOOMLION'},{id:3015,name:'雷沃重工LOVOL'},{id:3016,name:'龙工LONKING'},{id:3017,name:'厦工XGMA'},{id:3018,name:'山河智能SUNWARD'},{id:3019,name:'山重建机STRONGEST'},{id:3020,name:'玉柴YUCHAIHI'},{id:3021,name:'徐挖XCG'},{id:3022,name:'沃得重工WORLD'},{id:3023,name:'宣工HBXG'},{id:3024,name:'开元智富KAIYUAN'},{id:3025,name:'力士德LISHIDE'},{id:3026,name:'鼎盛重工DINGSHENG'},{id:3027,name:'铁力士HONGDA'},{id:3028,name:'上海彭浦SPPMBP'},{id:3029,name:'晋工JINGONG'},{id:3030,name:'其他(工程机械国内品牌)'}
            ]
      },
      {
            id:196,
            group:1,
            initial:'D',
            brandName:'东风康明斯',
            carType:[
                  {id:197,name:'B系列'},{id:198,name:'C系列'},{id:199,name:'L系列'},{id:200,name:'ISB系列'},{id:201,name:'ISC系列'},{id:202,name:'ISDe/ISD系列'},{id:203,name:'ISLe系列'},{id:204,name:'ISZ系列'},{id:205,name:'QSB系列'},{id:206,name:'QSL系列'},{id:207,name:'QSZ系列'},{id:565,name:'其他(东风康明斯)'}
            ]
      },{
            id:208,
            group:1,
            initial:'X',
            brandName:'西安康明斯 ',
            carType:[
                  {id:209,name:'ISM系列'},{id:566,name:'其他(西安康明斯 )'}
            ]
      },{
            id:210,
            group:1,
            initial:'B',
            brandName:'北京福田康明斯 ',
            carType:[
                  {id:211,name:'QSF系列'},{id:212,name:'ISF系列'},{id:213,name:'ISG系列'},{id:567,name:'其他(北京福田康明斯 )'}
            ]
      },{
            id:214,
            group:1,
            initial:'Z',
            brandName:'重庆康明斯 ',
            carType:[
                  {id:215,name:'N系列'},{id:216,name:'K系列'},{id:217,name:'M系列'},{id:218,name:'QSK系列'},{id:568,name:'其他(重庆康明斯 )'}
            ]
      },{
            id:219,
            group:1,
            initial:'W',
            brandName:'潍柴发动机',
            carType:[
                  {id:220,name:'潍柴WP2系列'},{id:221,name:'潍柴WP3系列'},{id:222,name:'潍柴WP4系列'},{id:223,name:'潍柴WP6系列'},{id:224,name:'潍柴WP7系列'},{id:225,name:'潍柴WP10系列'},{id:226,name:'潍柴WP12系列'},{id:227,name:'潍柴WP13系列'},{id:228,name:'潍柴WP5NG系列'},{id:229,name:'潍柴WP6NG系列'},{id:230,name:'潍柴WP7NG系列'},{id:231,name:'潍柴WP10NG系列'},{id:232,name:'潍柴WP12NG系列'},{id:233,name:'潍柴WP12HPDI系列'},{id:234,name:'潍柴WD12系列'},{id:235,name:'潍柴WD13系列'},{id:236,name:'潍柴6M26系列'},{id:237,name:'潍柴226B系列'},{id:238,name:'潍柴WD615系列'},{id:239,name:'潍柴WD618系列'},{id:569,name:'其他(潍柴发动机)'}
            ]
      },{
            id:240,
            group:1,
            initial:'Z',
            brandName:'中国重汽发动机',
            carType:[
                  {id:241,name:'重汽MC05系列'},{id:242,name:'重汽MC07系列'},{id:243,name:'重汽MC11系列'},{id:244,name:'重汽MC13系列'},{id:245,name:'重汽D10系列'},{id:246,name:'重汽D12系列'},{id:247,name:'重汽T10系列'},{id:248,name:'重汽T12系列'},{id:249,name:'重汽WD415系列'},{id:250,name:'重汽WD615系列'},{id:251,name:'重汽WT615系列'},{id:252,name:'重汽MT05系列'},{id:253,name:'重汽MT07系列'},{id:254,name:'重汽MT13系列'},{id:570,name:'其他(中国重汽发动机)'}
            ]
      },{
            id:255,
            group:1,
            initial:'Y',
            brandName:'玉柴发动机',
            carType:[
                  {id:256,name:'YC4FA系列'},{id:257,name:'YC4A系列'},{id:258,name:'YC4S系列'},{id:259,name:'YC4D系列'},{id:260,name:'YC4E系列'},{id:261,name:'YC4EG系列'},{id:262,name:'YC4G系列'},{id:263,name:'YC6B系列'},{id:264,name:'YC6J系列'},{id:265,name:'YC6A系列'},{id:266,name:'YC6L系列'},{id:267,name:'YC6MK系列'},{id:268,name:'YC6K系列'},{id:269,name:'YC4DN系列'},{id:270,name:'YC4GN系列'},{id:271,name:'YC6JN系列'},{id:272,name:'YC6GN系列'},{id:273,name:'YC6LN系列'},{id:274,name:'YC6MKN系列'},{id:275,name:'YC6KN系列'},{id:571,name:'其他(玉柴发动机)'}
            ]
      },{
            id:276,
            group:1,
            initial:'X',
            brandName:'锡柴发动机',
            carType:[
                  {id:277,name:'CA4DX'},{id:278,name:'CA4DW'},{id:279,name:'CA4DL'},{id:280,name:'CA4DLD'},{id:281,name:'CA4DF'},{id:282,name:'CA6DF'},{id:283,name:'CA6DN'},{id:284,name:'CA6DM'},{id:285,name:'CA6DL'},{id:286,name:'CA6SN'},{id:287,name:'CA6SL'},{id:288,name:'CA6SM'},{id:289,name:'CA4110'},{id:290,name:'CA6110'},{id:291,name:'CA6113'},{id:572,name:'其他(锡柴发动机)'}
            ]
      },{
            id:292,
            group:1,
            initial:'D',
            brandName:'大柴发动机 ',
            carType:[
                  {id:293,name:'CA498'},{id:294,name:'CA4D32'},{id:295,name:'CA4DC'},{id:296,name:'CA4DF'},{id:297,name:'CA6DE'},{id:298,name:'CA6DF'},{id:299,name:'BF4M'},{id:300,name:'BF6M'},{id:573,name:'其他(大柴发动机 )'}
            ]
      },{
            id:301,
            group:1,
            initial:'Y',
            brandName:'扬柴发动机',
            carType:[
                  {id:302,name:'YZ4102'},{id:303,name:'YZ4105'},{id:304,name:'YZ4108'},{id:305,name:'YZ485'},{id:306,name:'YZ495'},{id:307,name:'YZ4DA'},{id:308,name:'YZ4DB'},{id:309,name:'YZ4DC'},{id:310,name:'YZ4DD'},{id:311,name:'YZ4DE'},{id:312,name:'VM系列'},{id:574,name:'其他(扬柴发动机)'}
            ]
      },{
            id:313,
            group:1,
            initial:'C',
            brandName:'朝柴发动机',
            carType:[
                  {id:314,name:'CY4102'},{id:315,name:'CY4105'},{id:316,name:'CY6102'},{id:317,name:'CY4T'},{id:318,name:'CY4D'},{id:319,name:'CY6B'},{id:320,name:'CYQD'},{id:321,name:'CYNGD3.0'},{id:322,name:'HFC4DF'},{id:575,name:'其他(朝柴发动机)'}
            ]
      },{
            id:323,
            group:1,
            initial:'Y',
            brandName:'云内',
            carType:[
                  {id:324,name:'YNF40'},{id:325,name:'D30'},{id:326,name:'D25'},{id:327,name:'D19'},{id:328,name:'D16'},{id:329,name:'D09'},{id:330,name:'YN27'},{id:331,name:'YN33'},{id:332,name:'YN38'},{id:333,name:'YN4A'},{id:334,name:'YN4B'},{id:335,name:'YN4C'},{id:336,name:'YN4D'},{id:337,name:'YN4E'},{id:338,name:'YN4K'},{id:339,name:'YN4L'},{id:340,name:'YN30QNE'},{id:341,name:'YN36QNE'},{id:342,name:'YN38QNE'},{id:343,name:'YNG90-NE'},{id:344,name:'YNG115-NE'},{id:345,name:'YNH150-NE'},{id:576,name:'其他(云内)'}
            ]
      },{
            id:346,
            group:1,
            initial:'D',
            brandName:'东风发动机',
            carType:[
                  {id:347,name:'东风雷诺DCi11系列'},{id:348,name:'EQ4H系列'},{id:349,name:'EQX7系列'},{id:350,name:'Ddi系列'},{id:577,name:'其他(东风发动机)'}
            ]
      },

      {
            id:351,
            group:1,
            initial:'F',
            brandName:'法士特',
            carType:[
                  {id:352,name:'10JSD/6DT/TB  '},{id:353,name:'10JSD120/A/B'},{id:354,name:'12JS160T/TA'},{id:355,name:'12JS180T/TA  '},{id:356,name:'12JS200T/TA'},{id:357,name:'12JS240T/TA'},{id:358,name:'16JS180T/TA'},{id:359,name:'16JS200T/TA '},{id:360,name:'16JS240T/TA'},{id:361,name:'4J120T'},{id:362,name:'5J100T'},{id:363,name:'5J75T'},{id:364,name:'5J80T'},{id:365,name:'6DS'},{id:366,name:'6J55T'},{id:367,name:'6J60T'},{id:368,name:'6J70T'},{id:369,name:'6J80T'},{id:370,name:'6J82T'},{id:371,name:'6J85T'},{id:372,name:'6J90T'},{id:373,name:'6JS105T'},{id:374,name:'6JS125T'},{id:375,name:'7DS100/100B '},{id:376,name:'7JS100'},{id:377,name:'8JS100'},{id:378,name:'8JS105T'},{id:379,name:'8JS110A'},{id:380,name:'8JS118'},{id:381,name:'8JS125T'},{id:382,name:'8JS130T'},{id:383,name:'8JS75T'},{id:384,name:'8JS85T'},{id:385,name:'8JS85'},{id:386,name:'8JS95T'},{id:387,name:'9JS119'},{id:388,name:'9JS135'},{id:389,name:'9JS150'},{id:390,name:'9JS180T'},{id:391,name:'9JS180'},{id:392,name:'9JS200T'},{id:393,name:'9JS220'},{id:394,name:'9JS240T'},{id:395,name:'9JSS220T/TA'},{id:396,name:'9JSS240T/TA'},{id:397,name:'F6J95T'},{id:398,name:'FC6A140'},{id:399,name:'FC6A180'},{id:400,name:'FC6A210'},{id:401,name:'FC6A250'},{id:402,name:'AQC70取力器'},{id:403,name:'AQH70取力器'},{id:404,name:'QC40A取力器'},{id:405,name:'QC45取力器'},{id:406,name:'QF60前置取力器'},{id:407,name:'QH50取力器'},{id:408,name:'QH70取力器'},{id:409,name:'FH400B缓速器'},{id:578,name:'其他(法士特)'}
            ]
      },{
            id:410,
            group:1,
            initial:'J',
            brandName:'江山变速箱',
            carType:[
                  {id:411,name:'JS5-185'},{id:412,name:'JS6-460'},{id:413,name:'JS6-500'},{id:414,name:'JS6-600'},{id:415,name:'JS6-850'},{id:416,name:'JS5-750'},{id:417,name:'JS6-650'},{id:418,name:'JS6-550'},{id:419,name:'JS9-1600'},{id:579,name:'其他(江山变速箱)'}
            ]
      },{
            id:420,
            group:1,
            initial:'D',
            brandName:'大同变速箱',
            carType:[
                  {id:421,name:'DC5J70T '},{id:422,name:'DC5J80T '},{id:423,name:'DC5J90T '},{id:424,name:'DC5J100T '},{id:425,name:'DC5J120T'},{id:426,name:'DC6J85T  '},{id:427,name:'DC6J90T  '},{id:428,name:'DC7J100T '},{id:429,name:'DC7J120T'},{id:430,name:'DC9J125T  '},{id:431,name:'DC9J135T  '},{id:432,name:'DC9J150T  '},{id:433,name:'DC9J180T'},{id:434,name:'DC12J135T  '},{id:435,name:'DC12J150  '},{id:436,name:'DC16J200'},{id:580,name:'其他(大同变速箱)'}
            ]
      },{
            id:437,
            group:1,
            initial:'Q',
            brandName:'綦江变速箱',
            carType:[
                  {id:438,name:'QJ505同步器型  '},{id:439,name:'QJ605同步器型'},{id:440,name:'S6-120（QJ1206）   '},{id:441,name:'S6-121（QJ1216）'},{id:442,name:'S8-110'},{id:443,name:'S8-120   '},{id:444,name:'S8-135   '},{id:445,name:'4S-150GP  '},{id:446,name:'5S-150GP  '},{id:447,name:'5S-136GP  '},{id:448,name:'5S-111GP'},{id:449,name:'QJ1319F   '},{id:450,name:'QJ12S-150  '},{id:451,name:'QJ16S2200  '},{id:452,name:'QJ16S1900  '},{id:453,name:'QJ16S1700'},{id:581,name:'其他(綦江变速箱)'}
            ]
      },{
            id:454,
            group:1,
            initial:'W',
            brandName:'万里扬变速箱',
            carType:[
                  {id:455,name:'WLY52  '},{id:456,name:'WLY525  '},{id:457,name:'WLY5T'},{id:458,name:'WLY530 '},{id:459,name:'WLY535 '},{id:460,name:'WLY538H '},{id:461,name:'WLY540 '},{id:462,name:'WLY545 '},{id:463,name:'WLY553H'},{id:464,name:'WLY6T  '},{id:465,name:'WLY6G '},{id:466,name:'WLY6 '},{id:467,name:'WLY653 '},{id:468,name:'WLY670'},{id:469,name:'WLY7S150 '},{id:470,name:'WLY8D '},{id:471,name:'WLY8S150 '},{id:472,name:'WLY8S130 '},{id:473,name:'WLY8S90 '},{id:474,name:'WLY8S110 '},{id:475,name:'WLY9D'},{id:476,name:'WLY9S130 '},{id:477,name:'WLY9S150 '},{id:478,name:'WLY9S110 '},{id:479,name:'WLY9W '},{id:480,name:'WLY10S130 '},{id:481,name:'WLY10S150 '},{id:482,name:'WLY10S110 '},{id:483,name:'WLY12S180T'},{id:582,name:'其他(万里扬变速箱)'}
            ]
      },{
            id:484,
            group:1,
            initial:'Y',
            brandName:'一汽解放变速箱分公司',
            carType:[
                  {id:485,name:'CA5BB(X)075/085M/A/H'},{id:486,name:'CA6BBX095/100/130M'},{id:487,name:'CA6BB160M'},{id:488,name:'CA6TB(X)053/062/070M'},{id:489,name:'CA6TB(X)075/085/090M'},{id:490,name:'CA7TB(X)100/110/120M'},{id:491,name:'CA9TB(X)160M'},{id:492,name:'CA8TA(X)135M'},{id:493,name:'CA10TA(X)130/160/190M'},{id:494,name:'CA12TA(X)160/190/210M'},{id:495,name:'CA12TA(X)160/190/210M2'},{id:496,name:'CA12TAX210A1'},{id:583,name:'其他(一汽解放变速箱分公司)'}
            ]
      },{
            id:497,
            group:1,
            initial:'Y',
            brandName:'一汽哈尔滨变速箱公司',
            carType:[
                  {id:498,name:'CA7S-120'},{id:499,name:'CA9TA'},{id:500,name:'CA9-119'},{id:501,name:'CA5-75'},{id:502,name:'CA6-75'},{id:503,name:'CA5-38'},{id:504,name:'CA5-48'},{id:505,name:'CAG5-90F'},{id:506,name:'CAG5-50F'},{id:507,name:'CA7-95取力器'},{id:508,name:'CA6-85取力器'},{id:509,name:'CA141取力器'},{id:584,name:'其他(一汽哈尔滨变速箱公司)'}
            ]
      },{
            id:510,
            group:1,
            initial:'Z',
            brandName:'重汽变速箱',
            carType:[
                  {id:511,name:'HW20505TCL'},{id:512,name:'HW48506TC'},{id:513,name:'HW50508'},{id:514,name:'HW12706TC'},{id:515,name:'HW10707T'},{id:516,name:'HW09同步器型'},{id:517,name:'HW10'},{id:518,name:'HW12'},{id:519,name:'HW16'},{id:520,name:'HW16STL'},{id:521,name:'AMT系列'},{id:522,name:'HW19712带缓速器'},{id:523,name:'HW21712STL带缓速器'},{id:524,name:'HW50取力器'},{id:525,name:'HW70取力器'},{id:526,name:'HW80Q取力器'},{id:527,name:'4205E-010取力器'},{id:528,name:'DC4205N45A-010取力器'},{id:585,name:'其他(重汽变速箱)'}
            ]
      }
];