/**
 * 词库数据（由 tools/generate_dict.py 从 Excel 生成，勿手改）
 * 来源：2026秋季八年级上册英语人教版单词表（整理版）.xlsx
 * 每个词包含：单元 / 单词 / 音标 / 词性 / 中文释义
 */
const DICTIONARY = [
{
    id: "ancient",
    unit: "Unit 1",
    word: "ancient",
    phonetic: "/ˈeɪnʃənt/",
    pos: "adj.",
    meaning: "古代的；古老的",
    emoji: "🏛",
    root: "源自拉丁语 antiquus(古老的)",
    mnemonic: "ancient 谐音 安神的，古代庙宇让人安神",
    example: "This is an ancient city."
  },
{
    id: "camp",
    unit: "Unit 1",
    word: "camp",
    phonetic: "/kæmp/",
    pos: "n.",
    meaning: "度假营；营地 v. 露营；宿营",
    emoji: "⛺",
    example: "I like this camp."
  },
{
    id: "landscape",
    unit: "Unit 1",
    word: "landscape",
    phonetic: "/ˈlændskeɪp/",
    pos: "n.",
    meaning: "风景；景色",
    emoji: "🏞",
    mnemonic: "land(土地) + scape(景色) -> 一片土地的景色",
    example: "I like this landscape."
  },
{
    id: "strange",
    unit: "Unit 1",
    word: "strange",
    phonetic: "/streɪndʒ/",
    pos: "adj.",
    meaning: "奇怪的；陌生的",
    emoji: "❓",
    example: "This is very strange."
  },
{
    id: "vacation",
    unit: "Unit 1",
    word: "vacation",
    phonetic: "/vəˈkeɪʃn/",
    pos: "n.",
    meaning: "假期；度假",
    emoji: "🏖",
    root: "vacat(空闲) + -ion -> 假期",
    mnemonic: "vacation 谐音 我开心，假期我开心",
    example: "I have a vacation."
  },
{
    id: "fantastic",
    unit: "Unit 1",
    word: "fantastic",
    phonetic: "/fænˈtæstɪk/",
    pos: "adj.",
    meaning: "极好的；吸引人的",
    emoji: "🤩",
    mnemonic: "fan(粉丝) + tastic，粉丝都觉得太棒了",
    example: "This is fantastic."
  },
{
    id: "town",
    unit: "Unit 1",
    word: "town",
    phonetic: "/taʊn/",
    pos: "n.",
    meaning: "镇；商业区",
    emoji: "🏘",
    example: "I live in a town."
  },
{
    id: "breath",
    unit: "Unit 1",
    word: "breath",
    phonetic: "/breθ/",
    pos: "n.",
    meaning: "呼吸的空气；一口气",
    emoji: "🌬",
    mnemonic: "bre 谐音 不累，呼吸不能停",
    example: "I like this breath."
  },
{
    id: "take_sb_s_breath_away",
    unit: "Unit 1",
    word: "take sb’s breath away",
    phonetic: "",
    pos: "",
    meaning: "令人惊叹；让人叹绝",
    example: "I can use this phrase in a sentence."
  },
{
    id: "especially",
    unit: "Unit 1",
    word: "especially",
    phonetic: "/ɪˈspeʃəli/",
    pos: "adv.",
    meaning: "尤其；特别",
    mnemonic: "especial(特别的) + -ly -> 尤其",
    example: "I especially every day."
  },
{
    id: "steamed_chicken_soup",
    unit: "Unit 1",
    word: "steamed chicken soup",
    phonetic: "/stiːmd/",
    pos: "",
    meaning: "汽锅鸡",
    example: "I can use this phrase in a sentence."
  },
{
    id: "anywhere",
    unit: "Unit 1",
    word: "anywhere",
    phonetic: "/ˈeniweə(r)/",
    pos: "adv. & pron.",
    meaning: "在任何地方；随便哪个地方",
    emoji: "🌍",
    mnemonic: "any(任何) + where(哪里) -> 任何地方",
    example: "I anywhere every day."
  },
{
    id: "nothing",
    unit: "Unit 1",
    word: "nothing",
    phonetic: "/ˈnʌθɪŋ/",
    pos: "pron.",
    meaning: "没有事；没有任何东西",
    emoji: "🚫",
    mnemonic: "no(没有) + thing(东西) -> 什么都没有",
    example: "I like this nothing."
  },
{
    id: "guide",
    unit: "Unit 1",
    word: "guide",
    phonetic: "/ɡaɪd/",
    pos: "n.",
    meaning: "导游；指南；手册 v. 给某人领路；指导",
    emoji: "🧭",
    mnemonic: "guide 谐音 归的，导游归你管",
    example: "I like this guide."
  },
{
    id: "scenery",
    unit: "Unit 1",
    word: "scenery",
    phonetic: "/ˈsiːnəri/",
    pos: "n.",
    meaning: "风景；景色",
    emoji: "🌄",
    mnemonic: "scen 谐音 山顶，山顶风景好",
    example: "I like this scenery."
  },
{
    id: "silk",
    unit: "Unit 1",
    word: "silk",
    phonetic: "/sɪlk/",
    pos: "n.",
    meaning: "丝绸； （蚕）丝",
    emoji: "🧵",
    mnemonic: "silk 谐音 丝绸",
    example: "I like this silk."
  },
{
    id: "scarf",
    unit: "Unit 1",
    word: "scarf",
    phonetic: "/skɑːf/",
    pos: "n.",
    meaning: "围巾；披巾",
    emoji: "🧣",
    mnemonic: "scarf 谐音 死卡夫，围巾卡在脖子上",
    example: "I like this scarf."
  },
{
    id: "ready",
    unit: "Unit 1",
    word: "ready",
    phonetic: "/ˈredi/",
    pos: "adj.",
    meaning: "准备好的；现成的 adv. 已做完；已完成",
    emoji: "✅",
    mnemonic: "read(读) + y -> 读完 = 准备好了",
    example: "This is very ready."
  },
{
    id: "ready_to_do_sth",
    unit: "Unit 1",
    word: "ready to do sth",
    phonetic: "",
    pos: "",
    meaning: "马上要（做某事） ； 愿意做（某事）",
    example: "I can use this phrase in a sentence."
  },
{
    id: "somewhere",
    unit: "Unit 1",
    word: "somewhere",
    phonetic: "/ˈsʌmweə(r)/",
    pos: "adv.",
    meaning: "在某处；到某处 pron. 某处；某个地方",
    emoji: "📍",
    example: "I somewhere every day."
  },
{
    id: "myself",
    unit: "Unit 1",
    word: "myself",
    phonetic: "/maɪˈself/",
    pos: "pron.",
    meaning: "我自己",
    emoji: "🪞",
    example: "I like this myself."
  },
{
    id: "nothing_but",
    unit: "Unit 1",
    word: "nothing but",
    phonetic: "",
    pos: "",
    meaning: "只有；只是",
    example: "I can use this phrase in a sentence."
  },
{
    id: "hotel",
    unit: "Unit 1",
    word: "hotel",
    phonetic: "/həʊˈtel/",
    pos: "n.",
    meaning: "旅馆；旅社",
    emoji: "🏨",
    mnemonic: "hotel 谐音 好特，好特别的酒店",
    example: "I stay at a hotel."
  },
{
    id: "comfortable",
    unit: "Unit 1",
    word: "comfortable",
    phonetic: "/ˈkʌmftəbl/",
    pos: "adj.",
    meaning: "使人舒服的；舒适的",
    emoji: "😌",
    root: "com-(共同) + fort(力量) + -able -> 舒适的",
    mnemonic: "com-(共同) + fort(力量) -> 共同有力量 = 舒适",
    example: "This chair is comfortable."
  },
{
    id: "bored",
    unit: "Unit 1",
    word: "bored",
    phonetic: "/bɔːd/",
    pos: "adj.",
    meaning: "厌倦的；烦闷的",
    emoji: "😑",
    example: "I am very bored."
  },
{
    id: "sky",
    unit: "Unit 1",
    word: "sky",
    phonetic: "/skaɪ/",
    pos: "n.",
    meaning: "天；天空",
    emoji: "🌤",
    mnemonic: "sky 谐音 死盖，天空像盖子",
    example: "The sky is blue."
  },
{
    id: "towards",
    unit: "Unit 1",
    word: "towards",
    phonetic: "/təˈwɔːdz; tɔːrdz/",
    pos: "prep.",
    meaning: "向；朝",
    example: "I like this towards."
  },
{
    id: "rainbow",
    unit: "Unit 1",
    word: "rainbow",
    phonetic: "/ˈreɪnbəʊ/",
    pos: "n.",
    meaning: "虹；彩虹",
    emoji: "🌈",
    mnemonic: "rain(雨) + bow(弓) -> 雨后的弓 = 彩虹",
    example: "I like this rainbow."
  },
{
    id: "square",
    unit: "Unit 1",
    word: "square",
    phonetic: "/skweə(r)/",
    pos: "n.",
    meaning: "广场；正方形 adj. 正方形的；平方的",
    emoji: "⬜",
    example: "I like this square."
  },
{
    id: "during",
    unit: "Unit 1",
    word: "during",
    phonetic: "/ˈdjʊərɪŋ/",
    pos: "prep.",
    meaning: "在……期间",
    emoji: "⏳",
    example: "I like this during."
  },
{
    id: "victory",
    unit: "Unit 1",
    word: "victory",
    phonetic: "/ˈvɪktəri/",
    pos: "n.",
    meaning: "胜利；成功",
    emoji: "🏆",
    mnemonic: "victory 谐音 维克多，胜利属于维克多",
    example: "I like this victory."
  },
{
    id: "russian",
    unit: "Unit 1",
    word: "Russian",
    phonetic: "/ˈrʌʃn/",
    pos: "adj.",
    meaning: "俄罗斯的；俄罗斯人的 n. 俄罗斯人；俄语",
    example: "This is very russian."
  },
{
    id: "fight",
    unit: "Unit 1",
    word: "fight",
    phonetic: "/faɪt/",
    pos: "n.",
    meaning: "战斗；搏斗；斗争 v. (fought /fɔːt/) 打仗；打架",
    emoji: "🥊",
    example: "I like this fight."
  },
{
    id: "against",
    unit: "Unit 1",
    word: "against",
    phonetic: "/əˈɡenst/",
    pos: "prep.",
    meaning: "反对；与……相反；紧靠",
    example: "I like this against."
  },
{
    id: "fight_against_sb_sth",
    unit: "Unit 1",
    word: "fight against sb / sth",
    phonetic: "",
    pos: "",
    meaning: "与……作战； 与……作斗争",
    example: "I can use this phrase in a sentence."
  },
{
    id: "artwork",
    unit: "Unit 1",
    word: "artwork",
    phonetic: "/ˈɑːtwɜːk/",
    pos: "n.",
    meaning: "艺术作品；插图",
    example: "I like this artwork."
  },
{
    id: "thousands_of",
    unit: "Unit 1",
    word: "thousands of",
    phonetic: "",
    pos: "",
    meaning: "数以千计的；成千上万的",
    example: "I can use this phrase in a sentence."
  },
{
    id: "tear",
    unit: "Unit 1",
    word: "tear",
    phonetic: "/tɪə(r)/",
    pos: "n.",
    meaning: "眼泪；泪水",
    emoji: "💧",
    example: "I like this tear."
  },
{
    id: "remind",
    unit: "Unit 1",
    word: "remind",
    phonetic: "/rɪˈmaɪnd/",
    pos: "v.",
    meaning: "提醒；使想起",
    emoji: "🔔",
    root: "re-(再) + mind(心) -> 提醒",
    example: "I remind every day."
  },
{
    id: "peace",
    unit: "Unit 1",
    word: "peace",
    phonetic: "/piːs/",
    pos: "n.",
    meaning: "和平；太平",
    emoji: "🕊",
    mnemonic: "peace 谐音 皮思，和平年代皮思",
    example: "Peace is important."
  },
{
    id: "easily",
    unit: "Unit 1",
    word: "easily",
    phonetic: "/ˈiːzəli/",
    pos: "adv.",
    meaning: "容易地；轻易地",
    emoji: "💨",
    example: "I easily every day."
  },
{
    id: "forget",
    unit: "Unit 1",
    word: "forget",
    phonetic: "/fəˈɡet/ /fəˈɡɒt/",
    pos: "v.",
    meaning: "忘记；遗忘",
    emoji: "🧠",
    mnemonic: "for(为了) + get(得到) -> 为了新忘旧",
    example: "I forget every day."
  },
{
    id: "noon",
    unit: "Unit 1",
    word: "noon",
    phonetic: "/nuːn/",
    pos: "n.",
    meaning: "正午；中午",
    emoji: "🕜",
    example: "I like this noon."
  },
{
    id: "sick",
    unit: "Unit 1",
    word: "sick",
    phonetic: "/sɪk/",
    pos: "adj.",
    meaning: "恶心的；生病的",
    emoji: "🤒",
    mnemonic: "sick 谐音 死渴，生病了死渴",
    example: "I am very sick."
  },
{
    id: "metro",
    unit: "Unit 1",
    word: "metro",
    phonetic: "/ˈmetrəʊ/",
    pos: "n.",
    meaning: "地下铁道系统",
    emoji: "🚇",
    mnemonic: "metro 谐音 迈德罗",
    example: "I like this metro."
  },
{
    id: "station",
    unit: "Unit 1",
    word: "station",
    phonetic: "/ˈsteɪʃn/",
    pos: "n.",
    meaning: "车站；所；局",
    emoji: "🚉",
    example: "I go to the station."
  },
{
    id: "palace",
    unit: "Unit 1",
    word: "palace",
    phonetic: "/ˈpæləs/",
    pos: "n.",
    meaning: "王宫；宫殿",
    emoji: "🏰",
    mnemonic: "pal(朋友) + ace -> 朋友住宫殿",
    example: "I like this palace."
  },
{
    id: "accordion",
    unit: "Unit 1",
    word: "accordion",
    phonetic: "/əˈkɔːdiən/",
    pos: "n.",
    meaning: "手风琴",
    example: "I like this accordion."
  },
{
    id: "get_together",
    unit: "Unit 1",
    word: "get together",
    phonetic: "",
    pos: "",
    meaning: "聚会；相聚",
    example: "I can use this phrase in a sentence."
  },
{
    id: "in_the_sun",
    unit: "Unit 1",
    word: "in the sun",
    phonetic: "",
    pos: "",
    meaning: "在阳光下",
    example: "I can use this phrase in a sentence."
  },
{
    id: "tower",
    unit: "Unit 1",
    word: "tower",
    phonetic: "/taʊə(r)/",
    pos: "n.",
    meaning: "塔；塔楼",
    emoji: "🗼",
    mnemonic: "tower 谐音 头儿，塔的头儿最高",
    example: "I like this tower."
  },
{
    id: "might",
    unit: "Unit 1",
    word: "might",
    phonetic: "/maɪt/",
    pos: "modal v.",
    meaning: "可能；可以",
    emoji: "💪",
    example: "I might every day."
  },
{
    id: "budget",
    unit: "Unit 1",
    word: "budget",
    phonetic: "/ˈbʌdʒɪt/",
    pos: "n.",
    meaning: "预算 v. 把……编入预算；精打细算",
    example: "I have a budget."
  },
{
    id: "passport",
    unit: "Unit 1",
    word: "passport",
    phonetic: "/ˈpɑːspɔːt/",
    pos: "n.",
    meaning: "护照",
    emoji: "📕",
    mnemonic: "pass(通过) + port(港口) -> 通过港口的证件",
    example: "I like this passport."
  },
{
    id: "forgetful",
    unit: "Unit 1",
    word: "forgetful",
    phonetic: "/fəˈgetfl/",
    pos: "adj.",
    meaning: "健忘的；好忘事的",
    example: "This is very forgetful."
  },
{
    id: "faraway",
    unit: "Unit 1",
    word: "faraway",
    phonetic: "/ˈfɑːrəweɪ; ˌfɑːrəˈweɪ/",
    pos: "adj.",
    meaning: "远方的；遥远的",
    example: "This is very faraway."
  },
{
    id: "regular",
    unit: "Unit 1",
    word: "regular",
    phonetic: "/ˈreɡjələ(r)/",
    pos: "adj.",
    meaning: "平常的；有规律的",
    example: "This is very regular."
  },
{
    id: "countryside",
    unit: "Unit 1",
    word: "countryside",
    phonetic: "/ˈkʌntrisaɪd/",
    pos: "n.",
    meaning: "乡村；农村",
    emoji: "🌾",
    example: "I like this countryside."
  },
{
    id: "turn_around",
    unit: "Unit 1",
    word: "turn around",
    phonetic: "",
    pos: "",
    meaning: "转身；翻转",
    example: "I can use this phrase in a sentence."
  },
{
    id: "surprised",
    unit: "Unit 1",
    word: "surprised",
    phonetic: "/səˈpraɪzd/",
    pos: "adj.",
    meaning: "惊奇的；惊讶的",
    emoji: "😲",
    example: "I am very surprised."
  },
{
    id: "deer",
    unit: "Unit 1",
    word: "deer",
    phonetic: "/dɪə(r)/",
    pos: "n.",
    meaning: "鹿",
    emoji: "🦌",
    example: "I like this deer."
  },
{
    id: "probably",
    unit: "Unit 1",
    word: "probably",
    phonetic: "/ˈprɒbəbli/",
    pos: "adv.",
    meaning: "很可能；大概",
    emoji: "🤔",
    mnemonic: "probable(可能的) + -ly -> 可能地",
    example: "I probably every day."
  },
{
    id: "look_for",
    unit: "Unit 1",
    word: "look for",
    phonetic: "",
    pos: "",
    meaning: "寻找",
    example: "I can use this phrase in a sentence."
  },
{
    id: "guest_greeting_pine",
    unit: "Unit 1",
    word: "Guest-Greeting Pine",
    phonetic: "/ˈɡestˌɡriːtɪŋ/ /paɪn/",
    pos: "",
    meaning: "迎客松",
    example: "I can use this phrase in a sentence."
  },
{
    id: "sea_of_clouds",
    unit: "Unit 1",
    word: "Sea of Clouds",
    phonetic: "",
    pos: "",
    meaning: "云海",
    example: "I can use this phrase in a sentence."
  },
{
    id: "seattle",
    unit: "Unit 1",
    word: "Seattle",
    phonetic: "/siˈætl/",
    pos: "",
    meaning: "西雅图（美国城市）",
    example: "I like this seattle."
  },
{
    id: "red_square",
    unit: "Unit 1",
    word: "Red Square",
    phonetic: "",
    pos: "",
    meaning: "红场",
    example: "I can use this phrase in a sentence."
  },
{
    id: "alexander_garden",
    unit: "Unit 1",
    word: "Alexander Garden",
    phonetic: "/ˌælɪɡˈzɑːndə(r)/",
    pos: "",
    meaning: "亚历山大花园",
    example: "I can use this phrase in a sentence."
  },
{
    id: "vincent",
    unit: "Unit 1",
    word: "Vincent",
    phonetic: "/ˈvɪnsənt/",
    pos: "",
    meaning: "文森特",
    example: "I like this vincent."
  },
{
    id: "moscow",
    unit: "Unit 1",
    word: "Moscow",
    phonetic: "/ˈmɒskəʊ/",
    pos: "",
    meaning: "莫斯科（俄罗斯首都）",
    example: "I like this moscow."
  },
{
    id: "russia",
    unit: "Unit 1",
    word: "Russia",
    phonetic: "/ˈrʌʃə/",
    pos: "",
    meaning: "俄罗斯",
    example: "I like this russia."
  },
{
    id: "the_victory_museum",
    unit: "Unit 1",
    word: "the Victory Museum",
    phonetic: "",
    pos: "",
    meaning: "胜利博物馆",
    example: "I can use this phrase in a sentence."
  },
{
    id: "nazi",
    unit: "Unit 1",
    word: "Nazi",
    phonetic: "/ˈnɑːtsi/",
    pos: "n.",
    meaning: "纳粹党人；纳粹分子",
    example: "I like this nazi."
  },
{
    id: "world_war_ii",
    unit: "Unit 1",
    word: "World War II",
    phonetic: "",
    pos: "",
    meaning: "第二次世界大战",
    example: "I can use this phrase in a sentence."
  },
{
    id: "moscow_metro",
    unit: "Unit 1",
    word: "Moscow Metro",
    phonetic: "",
    pos: "",
    meaning: "莫斯科地铁",
    example: "I can use this phrase in a sentence."
  },
{
    id: "scotland",
    unit: "Unit 1",
    word: "Scotland",
    phonetic: "/ˈskɒtlənd/",
    pos: "",
    meaning: "苏格兰",
    example: "I like this scotland."
  },
{
    id: "pack",
    unit: "Unit 2",
    word: "pack",
    phonetic: "/pæk/",
    pos: "v.",
    meaning: "打包；收拾",
    emoji: "🎒",
    mnemonic: "pack 谐音 拍客，打包行李的拍客",
    example: "I pack every day."
  },
{
    id: "pack_up",
    unit: "Unit 2",
    word: "pack up",
    phonetic: "",
    pos: "",
    meaning: "打包",
    example: "I can use this phrase in a sentence."
  },
{
    id: "bathroom",
    unit: "Unit 2",
    word: "bathroom",
    phonetic: "/ˈbɑːθruːm/",
    pos: "n.",
    meaning: "浴室；洗手间",
    emoji: "🚿",
    mnemonic: "bath(洗澡) + room(房间) -> 浴室",
    example: "I wash in the bathroom."
  },
{
    id: "sort",
    unit: "Unit 2",
    word: "sort",
    phonetic: "/sɔːt/",
    pos: "v.",
    meaning: "把……分类；整理 n. 种类",
    example: "I sort every day."
  },
{
    id: "bedroom",
    unit: "Unit 2",
    word: "bedroom",
    phonetic: "/ˈbedruːm/",
    pos: "n.",
    meaning: "卧室",
    emoji: "🛏",
    mnemonic: "bed(床) + room(房间) -> 卧室",
    example: "I sleep in the bedroom."
  },
{
    id: "balcony",
    unit: "Unit 2",
    word: "balcony",
    phonetic: "/ˈbælkəni/",
    pos: "n.",
    meaning: "阳台",
    emoji: "🌿",
    mnemonic: "balcony 谐音 白看你，阳台白看风景",
    example: "I like this balcony."
  },
{
    id: "hang_up",
    unit: "Unit 2",
    word: "hang up",
    phonetic: "",
    pos: "",
    meaning: "挂起；挂断电话",
    example: "I can use this phrase in a sentence."
  },
{
    id: "invite",
    unit: "Unit 2",
    word: "invite",
    phonetic: "/ɪnˈvaɪt/",
    pos: "v.",
    meaning: "邀请",
    emoji: "💌",
    mnemonic: "in-(进入) + vite(邀请) -> 邀请进入",
    example: "I invite every day."
  },
{
    id: "living_room",
    unit: "Unit 2",
    word: "living room",
    phonetic: "",
    pos: "",
    meaning: "客厅",
    example: "I can use this phrase in a sentence."
  },
{
    id: "arrival",
    unit: "Unit 2",
    word: "arrival",
    phonetic: "/əˈraɪvl/",
    pos: "n.",
    meaning: "到达",
    emoji: "🛢",
    example: "I like this arrival."
  },
{
    id: "yet",
    unit: "Unit 2",
    word: "yet",
    phonetic: "/jet/",
    pos: "adv.",
    meaning: "用于否定句和疑问句）还 conj. 但是",
    example: "I yet every day."
  },
{
    id: "add",
    unit: "Unit 2",
    word: "add",
    phonetic: "/æd/",
    pos: "v.",
    meaning: "添加；加",
    emoji: "➕",
    mnemonic: "add 谐音 爱的，加上爱的",
    example: "I add every day."
  },
{
    id: "add_sth_to_sth",
    unit: "Unit 2",
    word: "add sth to sth",
    phonetic: "",
    pos: "",
    meaning: "把……加入……",
    example: "I can use this phrase in a sentence."
  },
{
    id: "go_shopping",
    unit: "Unit 2",
    word: "go shopping",
    phonetic: "",
    pos: "",
    meaning: "去购物",
    example: "I can use this phrase in a sentence."
  },
{
    id: "biscuit",
    unit: "Unit 2",
    word: "biscuit",
    phonetic: "/ˈbɪskɪt/",
    pos: "n.",
    meaning: "饼干",
    emoji: "🍪",
    mnemonic: "bis(二) + cuite(快) -> 两口快吃完的饼干",
    example: "I like this biscuit."
  },
{
    id: "borrow",
    unit: "Unit 2",
    word: "borrow",
    phonetic: "/ˈbɒrəʊ/",
    pos: "v.",
    meaning: "借",
    emoji: "📚",
    example: "I borrow every day."
  },
{
    id: "plan",
    unit: "Unit 2",
    word: "plan",
    phonetic: "/plæn/",
    pos: "v.",
    meaning: "策划；打算 n. 计划；方案",
    emoji: "📋",
    example: "I plan every day."
  },
{
    id: "treasure",
    unit: "Unit 2",
    word: "treasure",
    phonetic: "/ˈtreʒə(r)/",
    pos: "n.",
    meaning: "宝物；财富 v. 珍视",
    emoji: "💎",
    root: "treas(宝库) + -ure -> 宝藏",
    mnemonic: "treasure 谐音 踹热，踹开热土找宝藏",
    example: "I like this treasure."
  },
{
    id: "hunt",
    unit: "Unit 2",
    word: "hunt",
    phonetic: "/hʌnt/",
    pos: "n.",
    meaning: "搜寻；狩猎 v. 搜寻；打猎",
    emoji: "🔍",
    mnemonic: "hunt 谐音 憨特，憨憨地特别爱打猎",
    example: "I like this hunt."
  },
{
    id: "treasure_hunt",
    unit: "Unit 2",
    word: "treasure hunt",
    phonetic: "",
    pos: "",
    meaning: "寻宝游戏",
    example: "I can use this phrase in a sentence."
  },
{
    id: "lift",
    unit: "Unit 2",
    word: "lift",
    phonetic: "/lɪft/",
    pos: "n.",
    meaning: "搭便车；电梯 v. 举起；抬起",
    emoji: "🛗",
    example: "I take the lift."
  },
{
    id: "give_sb_a_lift",
    unit: "Unit 2",
    word: "give sb a lift",
    phonetic: "",
    pos: "",
    meaning: "开车顺便送某人",
    example: "I can use this phrase in a sentence."
  },
{
    id: "until",
    unit: "Unit 2",
    word: "until",
    phonetic: "/ənˈtɪl/",
    pos: "prep.",
    meaning: "到……时；直到……为止",
    emoji: "⏳",
    mnemonic: "un-(不) + til(倾斜) -> 不倾斜 = 直到",
    example: "I like this until."
  },
{
    id: "be_careful_with",
    unit: "Unit 2",
    word: "be careful with",
    phonetic: "",
    pos: "",
    meaning: "注意；当心",
    example: "I can use this phrase in a sentence."
  },
{
    id: "movie",
    unit: "Unit 2",
    word: "movie",
    phonetic: "/ˈmuːvi/",
    pos: "n.",
    meaning: "电影",
    emoji: "🎬",
    mnemonic: "movie 谐音 木维，电影里的木头维纳斯",
    example: "I watch a movie."
  },
{
    id: "the_movies",
    unit: "Unit 2",
    word: "the movies",
    phonetic: "",
    pos: "",
    meaning: "电影院；电影产业",
    example: "I can use this phrase in a sentence."
  },
{
    id: "dead",
    unit: "Unit 2",
    word: "dead",
    phonetic: "/ded/",
    pos: "adj.",
    meaning: "不运行的；死的",
    emoji: "💀",
    example: "This is very dead."
  },
{
    id: "note",
    unit: "Unit 2",
    word: "note",
    phonetic: "/nəʊt/",
    pos: "n.",
    meaning: "笔记；记录；便条 v. 注意；指出",
    emoji: "📝",
    example: "I have a ten-dollar note."
  },
{
    id: "take_notes",
    unit: "Unit 2",
    word: "take notes",
    phonetic: "",
    pos: "",
    meaning: "做笔记",
    example: "I can use this phrase in a sentence."
  },
{
    id: "clean_up",
    unit: "Unit 2",
    word: "clean up",
    phonetic: "",
    pos: "",
    meaning: "清扫",
    example: "I can use this phrase in a sentence."
  },
{
    id: "community",
    unit: "Unit 2",
    word: "community",
    phonetic: "/kəˈmjuːnəti/",
    pos: "n.",
    meaning: "社区；社团",
    emoji: "🏘",
    mnemonic: "com-(共同) + muni(交流) -> 共同交流 = 社区",
    example: "I like this community."
  },
{
    id: "rubbish",
    unit: "Unit 2",
    word: "rubbish",
    phonetic: "/ˈrʌbɪʃ/",
    pos: "n.",
    meaning: "垃圾",
    emoji: "🗑",
    mnemonic: "rub(擦) + bish -> 擦掉的垃圾",
    example: "I like this rubbish."
  },
{
    id: "almost",
    unit: "Unit 2",
    word: "almost",
    phonetic: "/ˈɔːlməʊst/",
    pos: "adv.",
    meaning: "差不多；几乎",
    emoji: "🔜",
    mnemonic: "al-(全) + most(最多) -> 几乎全部",
    example: "I almost every day."
  },
{
    id: "journey",
    unit: "Unit 2",
    word: "journey",
    phonetic: "/ˈdʒɜːni/",
    pos: "n.",
    meaning: "旅行；历程 v. 旅行",
    emoji: "🚂",
    mnemonic: "journey 谐音 截你，旅程截住你",
    example: "I go on a journey."
  },
{
    id: "pull",
    unit: "Unit 2",
    word: "pull",
    phonetic: "/pʊl/",
    pos: "v. & n.",
    meaning: "拉；拖；拽",
    emoji: "🕹",
    mnemonic: "pull 谐音 扑了，扑过去拉",
    example: "I pull every day."
  },
{
    id: "luggage",
    unit: "Unit 2",
    word: "luggage",
    phonetic: "/ˈlʌɡɪdʒ/",
    pos: "n.",
    meaning: "行李",
    emoji: "🧳",
    mnemonic: "lugg(拉) + age -> 拉着的东西 = 行李",
    example: "I like this luggage."
  },
{
    id: "ah",
    unit: "Unit 2",
    word: "ah",
    phonetic: "/ɑː/",
    pos: "interj.",
    meaning: "啊（表示高兴、惊奇等）",
    example: "I like this ah."
  },
{
    id: "share_sth_with_sb",
    unit: "Unit 2",
    word: "share sth with sb",
    phonetic: "",
    pos: "",
    meaning: "把……与……分享",
    example: "I can use this phrase in a sentence."
  },
{
    id: "mm",
    unit: "Unit 2",
    word: "mm",
    phonetic: "/m/",
    pos: "interj.",
    meaning: "嗯（表示喜欢、同意等）",
    example: "I like this mm."
  },
{
    id: "familiar",
    unit: "Unit 2",
    word: "familiar",
    phonetic: "/fəˈmɪliə(r)/",
    pos: "adj.",
    meaning: "熟悉的",
    emoji: "👋",
    mnemonic: "fa-(做) + mili(家庭) -> 像家人一样熟悉",
    example: "This is very familiar."
  },
{
    id: "joke",
    unit: "Unit 2",
    word: "joke",
    phonetic: "/dʒəʊk/",
    pos: "n.",
    meaning: "笑话 v. 开玩笑",
    emoji: "😄",
    example: "I like this joke."
  },
{
    id: "several",
    unit: "Unit 2",
    word: "several",
    phonetic: "/ˈsevrəl/",
    pos: "pron.",
    meaning: "几个；一些",
    emoji: "3⃣",
    example: "I like this several."
  },
{
    id: "nod",
    unit: "Unit 2",
    word: "nod",
    phonetic: "/nɒd/",
    pos: "v. & n.",
    meaning: "点头",
    emoji: "😊",
    example: "I nod every day."
  },
{
    id: "writer",
    unit: "Unit 2",
    word: "writer",
    phonetic: "/ˈraɪtə(r)/",
    pos: "n.",
    meaning: "作者",
    emoji: "✍",
    mnemonic: "write(写) + -er -> 写字的人",
    example: "She is a writer."
  },
{
    id: "text",
    unit: "Unit 2",
    word: "text",
    phonetic: "/tekst/",
    pos: "n.",
    meaning: "正文；文本 v. （用手机给某人）发短信",
    emoji: "📖",
    example: "I like this text."
  },
{
    id: "describe",
    unit: "Unit 2",
    word: "describe",
    phonetic: "/dɪˈskraɪb/",
    pos: "v.",
    meaning: "描述；形容",
    emoji: "💬",
    root: "de-(向下) + scrib(写) -> 描述",
    mnemonic: "de-(向下) + scrib(写) -> 写下来 = 描述",
    example: "Please describe the picture."
  },
{
    id: "wherever",
    unit: "Unit 2",
    word: "wherever",
    phonetic: "/weərˈevə(r)/",
    pos: "adv. & conj.",
    meaning: "无论去哪里；在任何地方",
    example: "I wherever every day."
  },
{
    id: "matter",
    unit: "Unit 2",
    word: "matter",
    phonetic: "/ˈmætə(r)/",
    pos: "v.",
    meaning: "要紧 n. 问题",
    emoji: "❓",
    mnemonic: "matter 谐音 麦特，麦特的事 = 问题",
    example: "I matter every day."
  },
{
    id: "no_matter",
    unit: "Unit 2",
    word: "no matter",
    phonetic: "",
    pos: "",
    meaning: "不论；不要紧",
    example: "I can use this phrase in a sentence."
  },
{
    id: "perhaps",
    unit: "Unit 2",
    word: "perhaps",
    phonetic: "/pəˈhæps; præps/",
    pos: "adv.",
    meaning: "也许；可能",
    emoji: "🤔",
    mnemonic: "per-(通过) + hap(运气) -> 通过运气 = 也许",
    example: "I perhaps every day."
  },
{
    id: "plate",
    unit: "Unit 2",
    word: "plate",
    phonetic: "/pleɪt/",
    pos: "n.",
    meaning: "盘子；碟子",
    emoji: "🍽",
    example: "I eat from a plate."
  },
{
    id: "freshly",
    unit: "Unit 2",
    word: "freshly",
    phonetic: "/ˈfreʃli/",
    pos: "adv.",
    meaning: "刚刚",
    example: "I freshly every day."
  },
{
    id: "smell",
    unit: "Unit 2",
    word: "smell",
    phonetic: "/smel/",
    pos: "v.",
    meaning: "发臭；闻到 n. 气味；臭味",
    emoji: "👃",
    mnemonic: "smell 谐音 死卖哦，死卖哦好臭",
    example: "I smell every day."
  },
{
    id: "joy",
    unit: "Unit 2",
    word: "joy",
    phonetic: "/dʒɔɪ/",
    pos: "n.",
    meaning: "喜悦；乐趣",
    emoji: "🎉",
    mnemonic: "joy 谐音 解忧，快乐解忧",
    example: "I like this joy."
  },
{
    id: "apartment",
    unit: "Unit 2",
    word: "apartment",
    phonetic: "/əˈpɑːtmənt/",
    pos: "n.",
    meaning: "房间；公寓套房",
    emoji: "🏠",
    mnemonic: "apart(分开) + -ment -> 分开的房间 = 公寓",
    example: "I like this apartment."
  },
{
    id: "block",
    unit: "Unit 2",
    word: "block",
    phonetic: "/blɒk/",
    pos: "n.",
    meaning: "大楼；街区；大块 v. 阻挡；堵塞",
    emoji: "🧱",
    example: "I like this block."
  },
{
    id: "decorate",
    unit: "Unit 2",
    word: "decorate",
    phonetic: "/ˈdekəreɪt/",
    pos: "v.",
    meaning: "装饰；装潢",
    example: "I decorate every day."
  },
{
    id: "cover",
    unit: "Unit 2",
    word: "cover",
    phonetic: "/ˈkʌvə(r)/",
    pos: "v.",
    meaning: "遮盖；包括 n. 遮盖物；封皮",
    emoji: "📕",
    example: "I cover every day."
  },
{
    id: "poster",
    unit: "Unit 2",
    word: "poster",
    phonetic: "/ˈpəʊstə(r)/",
    pos: "n.",
    meaning: "海报",
    example: "I like this poster."
  },
{
    id: "scissors",
    unit: "Unit 2",
    word: "scissors",
    phonetic: "/ˈsɪzəz/",
    pos: "n.",
    meaning: "剪刀",
    emoji: "✂",
    mnemonic: "sci(知道) + ssors -> 知道怎么剪 = 剪刀",
    example: "I cut with scissors."
  },
{
    id: "glue",
    unit: "Unit 2",
    word: "glue",
    phonetic: "/ɡluː/",
    pos: "n.",
    meaning: "胶水 v. 粘贴",
    emoji: "🧴",
    example: "I like this glue."
  },
{
    id: "paper_cut",
    unit: "Unit 2",
    word: "paper-cut",
    phonetic: "/ˈpeɪpə(r)kʌt/",
    pos: "n.",
    meaning: "剪纸",
    example: "I like this paper-cut."
  },
{
    id: "compare",
    unit: "Unit 3",
    word: "compare",
    phonetic: "/kəmˈpeə(r)/",
    pos: "v.",
    meaning: "比较；对比",
    emoji: "⚖",
    mnemonic: "com-(共同) + pare(比较) -> 共同比较",
    example: "I compare the two books."
  },
{
    id: "shy",
    unit: "Unit 3",
    word: "shy",
    phonetic: "/ʃaɪ/",
    pos: "adj.",
    meaning: "害羞的",
    emoji: "😳",
    example: "This is very shy."
  },
{
    id: "lazy",
    unit: "Unit 3",
    word: "lazy",
    phonetic: "/ˈleɪzi/",
    pos: "adj.",
    meaning: "懒惰的；懒洋洋的",
    emoji: "🦤",
    mnemonic: "lazy 谐音 累贼，懒人累成贼",
    example: "He is very lazy."
  },
{
    id: "loud",
    unit: "Unit 3",
    word: "loud",
    phonetic: "/laʊd/",
    pos: "adv.",
    meaning: "响亮地 adj. 大声的",
    emoji: "📢",
    example: "I loud every day."
  },
{
    id: "outgoing",
    unit: "Unit 3",
    word: "outgoing",
    phonetic: "/ˌaʊtˈɡəʊɪŋ/",
    pos: "adj.",
    meaning: "外向的",
    emoji: "😄",
    root: "out-(向外) + going(走) -> 外向的",
    mnemonic: "out-(向外) + going(走) -> 向外走 = 外向",
    example: "This is very outgoing."
  },
{
    id: "hard_working",
    unit: "Unit 3",
    word: "hard-working",
    phonetic: "/ˌhɑːd ˈwɜːkɪŋ/",
    pos: "adj.",
    meaning: "勤奋的",
    example: "This is very hard-working."
  },
{
    id: "perform",
    unit: "Unit 3",
    word: "perform",
    phonetic: "/pəˈfɔːm/",
    pos: "v.",
    meaning: "表演；执行",
    emoji: "🎭",
    root: "per-(完全) + form(形状) -> 表演",
    mnemonic: "per-(完全) + form(形状) -> 完全展现 = 表演",
    example: "I like to perform on stage."
  },
{
    id: "alone",
    unit: "Unit 3",
    word: "alone",
    phonetic: "/əˈləʊn/",
    pos: "adv. & adj.",
    meaning: "独自；单独",
    emoji: "👤",
    example: "I alone every day."
  },
{
    id: "solve",
    unit: "Unit 3",
    word: "solve",
    phonetic: "/sɒlv/",
    pos: "v.",
    meaning: "解决；解答",
    emoji: "🧩",
    mnemonic: "solve 谐音 扫五，扫五题解决",
    example: "I can solve this problem."
  },
{
    id: "flute",
    unit: "Unit 3",
    word: "flute",
    phonetic: "/fluːt/",
    pos: "n.",
    meaning: "长笛",
    emoji: "🎵",
    mnemonic: "flute 谐音 拂绿，笛声拂过绿林",
    example: "I like this flute."
  },
{
    id: "congratulation",
    unit: "Unit 3",
    word: "congratulation",
    phonetic: "/kənˌɡrætʃəˈleɪʃn/",
    pos: "n.",
    meaning: "祝贺；恭喜",
    example: "I like this congratulation."
  },
{
    id: "congratulations_on",
    unit: "Unit 3",
    word: "Congratulations (on ...) !",
    phonetic: "",
    pos: "",
    meaning: "对……表示）祝贺！",
    example: "I can use this phrase in a sentence."
  },
{
    id: "prize",
    unit: "Unit 3",
    word: "prize",
    phonetic: "/praɪz/",
    pos: "n.",
    meaning: "奖；奖励",
    emoji: "🏅",
    mnemonic: "prize 谐音 普来兹，普来兹获奖",
    example: "I win a prize."
  },
{
    id: "attend",
    unit: "Unit 3",
    word: "attend",
    phonetic: "/əˈtend/",
    pos: "v.",
    meaning: "参加；出席",
    mnemonic: "at-(朝向) + tend(伸展) -> 朝向伸展 = 参加",
    example: "I attend every day."
  },
{
    id: "as_as",
    unit: "Unit 3",
    word: "as … as …",
    phonetic: "",
    pos: "",
    meaning: "像……一样……",
    example: "I can use this phrase in a sentence."
  },
{
    id: "besides",
    unit: "Unit 3",
    word: "besides",
    phonetic: "/bɪˈsaɪdz/",
    pos: "prep.",
    meaning: "除……之外（还） adv. 而且",
    emoji: "➕",
    mnemonic: "be-(在) + side(旁边) -> 在旁边 = 除了",
    example: "I like this besides."
  },
{
    id: "spare",
    unit: "Unit 3",
    word: "spare",
    phonetic: "/speə(r)/",
    pos: "adj.",
    meaning: "空闲的；备用的 v. 抽出；拨出",
    emoji: "⏰",
    example: "This is very spare."
  },
{
    id: "spare_time",
    unit: "Unit 3",
    word: "spare time",
    phonetic: "",
    pos: "",
    meaning: "空闲时间",
    example: "I can use this phrase in a sentence."
  },
{
    id: "pleasure",
    unit: "Unit 3",
    word: "pleasure",
    phonetic: "/ˈpleʒə(r)/",
    pos: "n.",
    meaning: "乐事；愉快；荣幸",
    emoji: "😊",
    root: "pleas(愉悦) + -ure -> 愉快",
    mnemonic: "pleas(愉悦) + -ure -> 愉快",
    example: "I like this pleasure."
  },
{
    id: "have_sth_in_common",
    unit: "Unit 3",
    word: "have sth in common",
    phonetic: "",
    pos: "",
    meaning: "有共同之处",
    example: "I can use this phrase in a sentence."
  },
{
    id: "appearance",
    unit: "Unit 3",
    word: "appearance",
    phonetic: "/əˈpɪərəns/",
    pos: "n.",
    meaning: "外表；露面",
    emoji: "👀",
    mnemonic: "appear(出现) + -ance -> 外表",
    example: "I like this appearance."
  },
{
    id: "personality",
    unit: "Unit 3",
    word: "personality",
    phonetic: "/ˌpɜːsəˈnæləti/",
    pos: "n.",
    meaning: "性格；品质",
    emoji: "🧬",
    mnemonic: "person(人) + -ality -> 个性",
    example: "I like this personality."
  },
{
    id: "serious",
    unit: "Unit 3",
    word: "serious",
    phonetic: "/ˈsɪəriəs/",
    pos: "adj.",
    meaning: "严肃的；严重的",
    emoji: "🧐",
    example: "He is very serious."
  },
{
    id: "strength",
    unit: "Unit 3",
    word: "strength",
    phonetic: "/streŋθ/",
    pos: "n.",
    meaning: "优势；力量",
    emoji: "💪",
    mnemonic: "strong(强) -> 力量",
    example: "Strength is power."
  },
{
    id: "slim",
    unit: "Unit 3",
    word: "slim",
    phonetic: "/slɪm/",
    pos: "adj.",
    meaning: "苗条的；薄的",
    emoji: "🧘",
    example: "She is very slim."
  },
{
    id: "fact",
    unit: "Unit 3",
    word: "fact",
    phonetic: "/fækt/",
    pos: "n.",
    meaning: "事实；现实",
    emoji: "📋",
    example: "I like this fact."
  },
{
    id: "population",
    unit: "Unit 3",
    word: "population",
    phonetic: "/ˌpɒpjuˈleɪʃn/",
    pos: "n.",
    meaning: "人口",
    emoji: "👥",
    root: "popul(人民) + -ation -> 人口",
    mnemonic: "popul(人民) + -ation -> 人口",
    example: "I like this population."
  },
{
    id: "km",
    unit: "Unit 3",
    word: "km",
    phonetic: "/ˈkɪləmiːtə(r); kɪˈlɒmɪtə(r)/",
    pos: "",
    meaning: "千米；公里",
    example: "I like this km."
  },
{
    id: "average",
    unit: "Unit 3",
    word: "average",
    phonetic: "/ˈævərɪdʒ/",
    pos: "adj.",
    meaning: "平均的；平常的 n. 平均数；平均水准",
    emoji: "📊",
    root: "源自阿拉伯语 awar(损坏的货物) -> 平均",
    example: "This is very average."
  },
{
    id: "rainfall",
    unit: "Unit 3",
    word: "rainfall",
    phonetic: "/ˈreɪnfɔːl/",
    pos: "n.",
    meaning: "降雨量",
    emoji: "🌧",
    example: "I like this rainfall."
  },
{
    id: "per",
    unit: "Unit 3",
    word: "per",
    phonetic: "/pə(r); pɜː(r)/",
    pos: "prep.",
    meaning: "每",
    example: "I like this per."
  },
{
    id: "pleasant",
    unit: "Unit 3",
    word: "pleasant",
    phonetic: "/ˈpleznt/",
    pos: "adj.",
    meaning: "宜人的；友好的",
    emoji: "😊",
    mnemonic: "pleas(愉悦) + -ant -> 令人愉快的",
    example: "The weather is pleasant."
  },
{
    id: "difference",
    unit: "Unit 3",
    word: "difference",
    phonetic: "/ˈdɪfrəns/",
    pos: "n.",
    meaning: "差异",
    emoji: "🔀",
    mnemonic: "dif-(分开) + fer(带来) -> 差别",
    example: "I like this difference."
  },
{
    id: "alike",
    unit: "Unit 3",
    word: "alike",
    phonetic: "/əˈlaɪk/",
    pos: "adj.",
    meaning: "相像的 adv. 相似地",
    emoji: "👯",
    example: "We look very alike."
  },
{
    id: "mirror",
    unit: "Unit 3",
    word: "mirror",
    phonetic: "/ˈmɪrə(r)/",
    pos: "n.",
    meaning: "镜子",
    emoji: "🪞",
    example: "I look in the mirror."
  },
{
    id: "interest",
    unit: "Unit 3",
    word: "interest",
    phonetic: "/ˈɪntrest/",
    pos: "n.",
    meaning: "业余爱好；兴趣 v. 使感兴趣",
    emoji: "🎯",
    mnemonic: "inter-(在中间) + est -> 在中间停住 = 兴趣",
    example: "I like this interest."
  },
{
    id: "novel",
    unit: "Unit 3",
    word: "novel",
    phonetic: "/ˈnɒvl/",
    pos: "n.",
    meaning: "小说",
    emoji: "📖",
    mnemonic: "novel 谐音 闹欧，新小说闹欧洲",
    example: "I like this novel."
  },
{
    id: "sense",
    unit: "Unit 3",
    word: "sense",
    phonetic: "/sens/",
    pos: "n.",
    meaning: "理解力；感觉 v. 意识到；感觉到",
    emoji: "👃",
    example: "I like this sense."
  },
{
    id: "humour",
    unit: "Unit 3",
    word: "humour",
    phonetic: "/ˈhjuːmə(r)/",
    pos: "n.",
    meaning: "幽默；幽默感",
    emoji: "😄",
    example: "I like this humour."
  },
{
    id: "thanks_to",
    unit: "Unit 3",
    word: "thanks to",
    phonetic: "",
    pos: "",
    meaning: "归功于；由于；因为",
    example: "I can use this phrase in a sentence."
  },
{
    id: "opinion",
    unit: "Unit 3",
    word: "opinion",
    phonetic: "/əˈpɪnjən/",
    pos: "n.",
    meaning: "看法；意见",
    emoji: "💭",
    mnemonic: "opinion 谐音 哦拼你，哦拼你的意见",
    example: "I like this opinion."
  },
{
    id: "make_a_mistake",
    unit: "Unit 3",
    word: "make a mistake",
    phonetic: "",
    pos: "",
    meaning: "犯错误",
    example: "I can use this phrase in a sentence."
  },
{
    id: "less",
    unit: "Unit 3",
    word: "less",
    phonetic: "/les/",
    pos: "adj.",
    meaning: "较少的；更少的 adv. 较少地；更少地 pron. 较少；更少",
    example: "This is very less."
  },
{
    id: "straightforward",
    unit: "Unit 3",
    word: "straightforward",
    phonetic: "/ˌstreɪtˈfɔːwəd/",
    pos: "adj.",
    meaning: "坦率的；简单的",
    example: "The answer is very straightforward."
  },
{
    id: "honest",
    unit: "Unit 3",
    word: "honest",
    phonetic: "/ˈɒnɪst/",
    pos: "adj.",
    meaning: "坦诚的；诚实的",
    emoji: "🧐",
    mnemonic: "源自拉丁语 honestus(尊敬的)",
    example: "He is an honest boy."
  },
{
    id: "direct",
    unit: "Unit 3",
    word: "direct",
    phonetic: "/dəˈrekt; daɪˈrekt/",
    pos: "adj.",
    meaning: "率直的；直接的",
    emoji: "➡",
    mnemonic: "di-(完全) + rect(直) -> 完全直的 = 直接",
    example: "The answer is very direct."
  },
{
    id: "similarity",
    unit: "Unit 3",
    word: "similarity",
    phonetic: "/ˌsɪməˈlærəti/",
    pos: "n.",
    meaning: "相似之处",
    example: "I like this similarity."
  },
{
    id: "friendship",
    unit: "Unit 3",
    word: "friendship",
    phonetic: "/ˈfrendʃɪp/",
    pos: "n.",
    meaning: "友谊；友情",
    emoji: "🤝",
    root: "friend(朋友) + -ship -> 友谊",
    mnemonic: "friend(朋友) + -ship -> 友谊",
    example: "I like this friendship."
  },
{
    id: "metre",
    unit: "Unit 3",
    word: "metre",
    phonetic: "/ˈmiːtə(r)/",
    pos: "n.",
    meaning: "米",
    emoji: "📏",
    example: "I like this metre."
  },
{
    id: "prince",
    unit: "Unit 3",
    word: "prince",
    phonetic: "/prɪns/",
    pos: "n.",
    meaning: "王子",
    emoji: "🧓",
    mnemonic: "prince 谐音 普林斯，普林斯王子",
    example: "I am the prince."
  },
{
    id: "character",
    unit: "Unit 3",
    word: "character",
    phonetic: "/ˈkærəktə(r)/",
    pos: "n.",
    meaning: "人物；个性",
    emoji: "👤",
    example: "I am a character."
  },
{
    id: "pauper",
    unit: "Unit 3",
    word: "pauper",
    phonetic: "/ˈpɔːpə(r)/",
    pos: "n.",
    meaning: "贫民；乞丐",
    example: "I like this pauper."
  },
{
    id: "exchange",
    unit: "Unit 3",
    word: "exchange",
    phonetic: "/ɪksˈtʃeɪndʒ/",
    pos: "v. & n.",
    meaning: "交换",
    emoji: "🔄",
    mnemonic: "ex-(出) + change(变化) -> 交换",
    example: "I exchange every day."
  },
{
    id: "accident",
    unit: "Unit 3",
    word: "accident",
    phonetic: "/ˈæksɪdənt/",
    pos: "n.",
    meaning: "意外； （交通）事故",
    emoji: "💥",
    mnemonic: "ac-(朝向) + cid(落下) -> 朝向落下 = 意外",
    example: "I like this accident."
  },
{
    id: "by_accident",
    unit: "Unit 3",
    word: "by accident",
    phonetic: "",
    pos: "",
    meaning: "偶然；意外地",
    example: "I can use this phrase in a sentence."
  },
{
    id: "expect",
    unit: "Unit 3",
    word: "expect",
    phonetic: "/ɪkˈspekt/",
    pos: "v.",
    meaning: "预料；期待",
    emoji: "🔮",
    root: "ex-(向外) + spect(看) -> 期望",
    mnemonic: "ex-(向外) + spect(看) -> 向外看 = 期望",
    example: "I expect to see you."
  },
{
    id: "silver",
    unit: "Unit 3",
    word: "silver",
    phonetic: "/ˈsɪlvə(r)/",
    pos: "adj.",
    meaning: "银色的 n. 银",
    emoji: "🥈",
    example: "This is very silver."
  },
{
    id: "lining",
    unit: "Unit 3",
    word: "lining",
    phonetic: "/ˈlaɪnɪŋ/",
    pos: "n.",
    meaning: "内衬",
    example: "I like this lining."
  },
{
    id: "silver_lining",
    unit: "Unit 3",
    word: "silver lining",
    phonetic: "",
    pos: "",
    meaning: "一线光明",
    example: "I can use this phrase in a sentence."
  },
{
    id: "situation",
    unit: "Unit 3",
    word: "situation",
    phonetic: "/ˌsɪtʃuˈeɪʃn/",
    pos: "n.",
    meaning: "情况；状况",
    emoji: "📍",
    root: "situa(位置) + -tion -> 情况",
    example: "I like this situation."
  },
{
    id: "care_about",
    unit: "Unit 3",
    word: "care about",
    phonetic: "",
    pos: "",
    meaning: "关心；担心",
    example: "I can use this phrase in a sentence."
  },
{
    id: "reach",
    unit: "Unit 3",
    word: "reach",
    phonetic: "/riːtʃ/",
    pos: "v.",
    meaning: "伸手；到达",
    example: "I reach every day."
  },
{
    id: "reach_for",
    unit: "Unit 3",
    word: "reach for",
    phonetic: "",
    pos: "",
    meaning: "伸手触碰",
    example: "I can use this phrase in a sentence."
  },
{
    id: "touch",
    unit: "Unit 3",
    word: "touch",
    phonetic: "/tʌtʃ/",
    pos: "v.",
    meaning: "触动；触碰",
    emoji: "👋",
    mnemonic: "touch 踏去，踏去触摸",
    example: "I touch every day."
  },
{
    id: "lend_sb_a_hand",
    unit: "Unit 3",
    word: "lend (sb) a hand",
    phonetic: "",
    pos: "",
    meaning: "帮助（某人）",
    example: "I can use this phrase in a sentence."
  },
{
    id: "julie",
    unit: "Unit 3",
    word: "Julie",
    phonetic: "/ˈdʒuːli/",
    pos: "",
    meaning: "朱莉",
    example: "I like this julie."
  },
{
    id: "vancouver",
    unit: "Unit 3",
    word: "Vancouver",
    phonetic: "/vænˈkuːvə(r)/",
    pos: "",
    meaning: "温哥华（加拿大城市）",
    example: "I like this vancouver."
  },
{
    id: "matt",
    unit: "Unit 3",
    word: "Matt",
    phonetic: "/mæt/",
    pos: "",
    meaning: "马特",
    example: "I like this matt."
  },
{
    id: "stephen",
    unit: "Unit 3",
    word: "Stephen",
    phonetic: "/ˈstiːvən/",
    pos: "",
    meaning: "斯蒂芬",
    example: "I like this stephen."
  },
{
    id: "diana",
    unit: "Unit 3",
    word: "Diana",
    phonetic: "/daɪˈænə/",
    pos: "",
    meaning: "戴安娜",
    example: "I like this diana."
  },
{
    id: "edward",
    unit: "Unit 3",
    word: "Edward",
    phonetic: "/ˈedwəd/",
    pos: "",
    meaning: "爱德华",
    example: "I like this edward."
  },
{
    id: "mark_twain",
    unit: "Unit 3",
    word: "Mark Twain",
    phonetic: "/tweɪn/",
    pos: "",
    meaning: "马克 /u00B7.j吐温",
    example: "I can use this phrase in a sentence."
  },
{
    id: "rose",
    unit: "Unit 3",
    word: "Rose",
    phonetic: "/rəʊz/",
    pos: "",
    meaning: "罗丝",
    example: "I like this rose."
  },
{
    id: "moss",
    unit: "Unit 4",
    word: "moss",
    phonetic: "/mɒs/",
    pos: "n.",
    meaning: "苔藓",
    emoji: "🌿",
    mnemonic: "moss 谐音 冒丝，苔藓冒出丝丝",
    example: "I like this moss."
  },
{
    id: "redwood",
    unit: "Unit 4",
    word: "redwood",
    phonetic: "/ˈredwʊd/",
    pos: "n.",
    meaning: "红杉；红木",
    emoji: "🌲",
    example: "I like this redwood."
  },
{
    id: "cheetah",
    unit: "Unit 4",
    word: "cheetah",
    phonetic: "/ˈtʃiːtə/",
    pos: "n.",
    meaning: "猎豹",
    emoji: "🐆",
    example: "I like this cheetah."
  },
{
    id: "folding",
    unit: "Unit 4",
    word: "folding",
    phonetic: "/ˈfəʊldɪŋ/",
    pos: "adj.",
    meaning: "折叠式的；可折叠的",
    example: "This is very folding."
  },
{
    id: "folding_fan",
    unit: "Unit 4",
    word: "folding fan",
    phonetic: "",
    pos: "",
    meaning: "折扇",
    example: "I can use this phrase in a sentence."
  },
{
    id: "bamboo",
    unit: "Unit 4",
    word: "bamboo",
    phonetic: "/ˌbæmˈbuː/",
    pos: "n.",
    meaning: "竹；竹子",
    emoji: "🎋",
    mnemonic: "bamboo 谐音 班布，班布是竹子",
    example: "I like this bamboo."
  },
{
    id: "yeah",
    unit: "Unit 4",
    word: "yeah",
    phonetic: "/jeə/",
    pos: "interj.",
    meaning: "是的；对",
    example: "I like this yeah."
  },
{
    id: "popular",
    unit: "Unit 4",
    word: "popular",
    phonetic: "/ˈpɒpjələ(r)/",
    pos: "adj.",
    meaning: "广受欢迎的；流行的",
    emoji: "🔥",
    root: "popul(人民) + -ar -> 受欢迎的",
    mnemonic: "popul(人民) + -ar -> 受欢迎的",
    example: "This song is very popular."
  },
{
    id: "goodness",
    unit: "Unit 4",
    word: "goodness",
    phonetic: "/ˈɡʊdnəs/",
    pos: "n.",
    meaning: "美德；营养",
    emoji: "💖",
    example: "I like this goodness."
  },
{
    id: "tool",
    unit: "Unit 4",
    word: "tool",
    phonetic: "/tuːl/",
    pos: "n.",
    meaning: "工具；手段",
    emoji: "🔧",
    mnemonic: "tool 谐音 兔哦，工具像兔子",
    example: "I like this tool."
  },
{
    id: "actually",
    unit: "Unit 4",
    word: "actually",
    phonetic: "/ˈæktʃuəli/",
    pos: "adv.",
    meaning: "实际上；居然",
    emoji: "💡",
    example: "I actually every day."
  },
{
    id: "shoot",
    unit: "Unit 4",
    word: "shoot",
    phonetic: "/ʃuːt/",
    pos: "n.",
    meaning: "幼苗；嫩芽 v. (shot /ʃɒt/) 开（枪） ；射击",
    example: "I like this shoot."
  },
{
    id: "appear",
    unit: "Unit 4",
    word: "appear",
    phonetic: "/əˈpɪə(r)/",
    pos: "v.",
    meaning: "出现；看来好像",
    example: "I appear every day."
  },
{
    id: "feel_free_to_do_sth",
    unit: "Unit 4",
    word: "feel free (to do sth)",
    phonetic: "",
    pos: "",
    meaning: "可以随便做某事",
    example: "I can use this phrase in a sentence."
  },
{
    id: "land",
    unit: "Unit 4",
    word: "land",
    phonetic: "/lænd/",
    pos: "n.",
    meaning: "陆地；土地 v. 降落；着陆",
    emoji: "🌍",
    mnemonic: "land 谐音 蓝的，蓝色的土地",
    example: "I like this land."
  },
{
    id: "african",
    unit: "Unit 4",
    word: "African",
    phonetic: "/ˈæfrɪkən/",
    pos: "adj.",
    meaning: "非洲的；非洲人的 n. 非洲人",
    example: "This is very african."
  },
{
    id: "peony",
    unit: "Unit 4",
    word: "peony",
    phonetic: "/ˈpiːəni/",
    pos: "n.",
    meaning: "牡丹；芍药",
    emoji: "🌸",
    example: "I like this peony."
  },
{
    id: "lotus",
    unit: "Unit 4",
    word: "lotus",
    phonetic: "/ˈləʊtəs/",
    pos: "n.",
    meaning: "莲花",
    emoji: "🪷",
    example: "I like this lotus."
  },
{
    id: "butterfly",
    unit: "Unit 4",
    word: "butterfly",
    phonetic: "/ˈbʌtəflaɪ/",
    pos: "n.",
    meaning: "蝴蝶",
    emoji: "🦋",
    mnemonic: "butter(黄油) + fly(飞) -> 黄油飞 = 蝴蝶",
    example: "It is a butterfly."
  },
{
    id: "wing",
    unit: "Unit 4",
    word: "wing",
    phonetic: "/wɪŋ/",
    pos: "n.",
    meaning: "翅膀；翼",
    emoji: "🪽",
    example: "I like this wing."
  },
{
    id: "frog",
    unit: "Unit 4",
    word: "frog",
    phonetic: "/frɒɡ/",
    pos: "n.",
    meaning: "蛙；青蛙",
    emoji: "🐸",
    example: "It is a frog."
  },
{
    id: "up_to",
    unit: "Unit 4",
    word: "up to",
    phonetic: "",
    pos: "",
    meaning: "接近；直到",
    example: "I can use this phrase in a sentence."
  },
{
    id: "weigh",
    unit: "Unit 4",
    word: "weigh",
    phonetic: "/weɪ/",
    pos: "v.",
    meaning: "有……重；称重量",
    emoji: "⚖",
    example: "I weigh every day."
  },
{
    id: "kg",
    unit: "Unit 4",
    word: "kg",
    phonetic: "",
    pos: "",
    meaning: "千克；公斤",
    example: "I like this kg."
  },
{
    id: "ginkgo",
    unit: "Unit 4",
    word: "ginkgo",
    phonetic: "/ˈɡɪŋkəʊ/",
    pos: "n.",
    meaning: "银杏",
    emoji: "🌿",
    example: "I like this ginkgo."
  },
{
    id: "believe",
    unit: "Unit 4",
    word: "believe",
    phonetic: "/bɪˈliːv/",
    pos: "v.",
    meaning: "相信；认为有可能",
    emoji: "💭",
    mnemonic: "be-(在) + lieve(相信) -> 相信",
    example: "I believe in you."
  },
{
    id: "province",
    unit: "Unit 4",
    word: "province",
    phonetic: "/ˈprɒvɪns/",
    pos: "n.",
    meaning: "省份",
    emoji: "🗺",
    mnemonic: "province 谐音 破文思，省份破文思",
    example: "I like this province."
  },
{
    id: "take_a_walk",
    unit: "Unit 4",
    word: "take a walk",
    phonetic: "",
    pos: "",
    meaning: "散步",
    example: "I can use this phrase in a sentence."
  },
{
    id: "connect",
    unit: "Unit 4",
    word: "connect",
    phonetic: "/kəˈnekt/",
    pos: "v.",
    meaning: "关联；连接",
    emoji: "🔗",
    mnemonic: "con-(共同) + nect(连接) -> 共同连接",
    example: "Please connect to the Internet."
  },
{
    id: "connected",
    unit: "Unit 4",
    word: "connected",
    phonetic: "/kəˈnektɪd/",
    pos: "adj.",
    meaning: "连接的；相关的",
    example: "This is very connected."
  },
{
    id: "be_connected_with_to",
    unit: "Unit 4",
    word: "be connected with / to",
    phonetic: "",
    pos: "",
    meaning: "与……相连； 与……有关联",
    example: "I can use this phrase in a sentence."
  },
{
    id: "without",
    unit: "Unit 4",
    word: "without",
    phonetic: "/wɪˈðaʊt/",
    pos: "prep.",
    meaning: "没有；缺乏",
    example: "I like this without."
  },
{
    id: "imagine",
    unit: "Unit 4",
    word: "imagine",
    phonetic: "/ɪˈmædʒɪn/",
    pos: "v.",
    meaning: "想象；猜想",
    emoji: "💭",
    mnemonic: "im-(进入) + agine(想象) -> 进入想象",
    example: "I imagine a beautiful world."
  },
{
    id: "honey",
    unit: "Unit 4",
    word: "honey",
    phonetic: "/ˈhʌni/",
    pos: "n.",
    meaning: "蜂蜜； （爱称）亲爱的",
    emoji: "🍯",
    mnemonic: "honey 谐音 哈尼，亲爱的哈尼",
    example: "I like this honey."
  },
{
    id: "disappointed",
    unit: "Unit 4",
    word: "disappointed",
    phonetic: "/ˌdɪsəˈpɔɪntɪd/",
    pos: "adj.",
    meaning: "失望的；沮丧的",
    example: "I am very disappointed."
  },
{
    id: "connection",
    unit: "Unit 4",
    word: "connection",
    phonetic: "/kəˈnekʃn/",
    pos: "n.",
    meaning: "联系；连接",
    root: "con-(共同) + nect(连接) + -ion -> 连接",
    example: "I like this connection."
  },
{
    id: "pollination",
    unit: "Unit 4",
    word: "pollination",
    phonetic: "/ˌpɒləˈneɪʃn/",
    pos: "n.",
    meaning: "授粉",
    example: "I like this pollination."
  },
{
    id: "pollen",
    unit: "Unit 4",
    word: "pollen",
    phonetic: "/ˈpɒlən/",
    pos: "n.",
    meaning: "花粉",
    emoji: "🌼",
    example: "I like this pollen."
  },
{
    id: "action",
    unit: "Unit 4",
    word: "action",
    phonetic: "/ˈækʃn/",
    pos: "n.",
    meaning: "行动；行为",
    emoji: "🎬",
    root: "act(行动) + -ion -> 行动",
    example: "I like this action."
  },
{
    id: "in_fact",
    unit: "Unit 4",
    word: "in fact",
    phonetic: "",
    pos: "",
    meaning: "确切地说；实际上",
    example: "I can use this phrase in a sentence."
  },
{
    id: "per_cent",
    unit: "Unit 4",
    word: "per cent",
    phonetic: "/pə ˈsent/",
    pos: "n.",
    meaning: "百分之…… adj. & adv. 每一百中",
    example: "I can use this phrase in a sentence."
  },
{
    id: "for_this_reason",
    unit: "Unit 4",
    word: "for this reason",
    phonetic: "",
    pos: "",
    meaning: "出于这个原因",
    example: "I can use this phrase in a sentence."
  },
{
    id: "planet",
    unit: "Unit 4",
    word: "planet",
    phonetic: "/ˈplænɪt/",
    pos: "n.",
    meaning: "行星",
    emoji: "🪐",
    mnemonic: "planet 谐音 普兰特，行星普兰特",
    example: "I like this planet."
  },
{
    id: "in_order_to",
    unit: "Unit 4",
    word: "in order to",
    phonetic: "",
    pos: "",
    meaning: "为了；以便",
    example: "I can use this phrase in a sentence."
  },
{
    id: "store",
    unit: "Unit 4",
    word: "store",
    phonetic: "/stɔː(r)/",
    pos: "v.",
    meaning: "贮存；存储 n. 百货商店；商店",
    emoji: "🏪",
    mnemonic: "store 谐音 死多，商店死多东西",
    example: "I store every day."
  },
{
    id: "honeycomb",
    unit: "Unit 4",
    word: "honeycomb",
    phonetic: "/ˈhʌnikəʊm/",
    pos: "n.",
    meaning: "蜂巢",
    example: "I like this honeycomb."
  },
{
    id: "communicate",
    unit: "Unit 4",
    word: "communicate",
    phonetic: "/kəˈmjuːnɪkeɪt/",
    pos: "v.",
    meaning: "交流；沟通",
    emoji: "💬",
    mnemonic: "com-(共同) + muni(交流) + -cate -> 共同交流",
    example: "I communicate with my friends."
  },
{
    id: "play_a_part_in_sth",
    unit: "Unit 4",
    word: "play a part (in sth)",
    phonetic: "",
    pos: "",
    meaning: "参与某事",
    example: "I can use this phrase in a sentence."
  },
{
    id: "ecosystem",
    unit: "Unit 4",
    word: "ecosystem",
    phonetic: "/ˈiːkəʊsɪstəm/",
    pos: "n.",
    meaning: "生态系统",
    emoji: "🌍",
    example: "I like this ecosystem."
  },
{
    id: "protect",
    unit: "Unit 4",
    word: "protect",
    phonetic: "/prəˈtekt/",
    pos: "v.",
    meaning: "保护；防护",
    emoji: "🛡",
    mnemonic: "pro-(向前) + tect(覆盖) -> 在前面覆盖 = 保护",
    example: "I protect every day."
  },
{
    id: "importance",
    unit: "Unit 4",
    word: "importance",
    phonetic: "/ɪmˈpɔːtns/",
    pos: "n.",
    meaning: "重要性",
    emoji: "⭐",
    mnemonic: "import(重要) + -ance -> 重要性",
    example: "I like this importance."
  },
{
    id: "title",
    unit: "Unit 4",
    word: "title",
    phonetic: "/ˈtaɪtl/",
    pos: "n.",
    meaning: "标题；题目；名称",
    emoji: "🏷",
    example: "I like this title."
  },
{
    id: "human",
    unit: "Unit 4",
    word: "human",
    phonetic: "/ˈhjuːmən/",
    pos: "n.",
    meaning: "人 adj. 人的；人类的",
    emoji: "🧑",
    example: "I am a human."
  },
{
    id: "ant",
    unit: "Unit 4",
    word: "ant",
    phonetic: "/ænt/",
    pos: "n.",
    meaning: "蚂蚁",
    emoji: "🐜",
    mnemonic: "ant 谐音 俺特，俺特爱蚂蚁",
    example: "It is an ant."
  },
{
    id: "be_home_to_sb_sth",
    unit: "Unit 4",
    word: "be home to sb / sth",
    phonetic: "",
    pos: "",
    meaning: "有……栖息； 是……的家乡",
    example: "I can use this phrase in a sentence."
  },
{
    id: "happiness",
    unit: "Unit 4",
    word: "happiness",
    phonetic: "/ˈhæpinəs/",
    pos: "n.",
    meaning: "幸福；快乐",
    emoji: "😊",
    mnemonic: "happy(开心) + -ness -> 幸福",
    example: "Happiness is important."
  },
{
    id: "disappoint",
    unit: "Unit 4",
    word: "disappoint",
    phonetic: "/ˌdɪsəˈpɔɪnt/",
    pos: "v.",
    meaning: "使失望；使破灭",
    root: "dis-(否定) + appoint -> 使失望",
    example: "I disappoint every day."
  },
{
    id: "mushroom",
    unit: "Unit 4",
    word: "mushroom",
    phonetic: "/ˈmʌʃrʊm/",
    pos: "n.",
    meaning: "蘑菇；伞菌",
    emoji: "🍄",
    mnemonic: "mush(糊) + room -> 糊状的房间 = 蘑菇",
    example: "I like this mushroom."
  },
{
    id: "ton",
    unit: "Unit 4",
    word: "ton",
    phonetic: "/tʌn/",
    pos: "n.",
    meaning: "吨",
    emoji: "⚖",
    example: "I like this ton."
  },
{
    id: "role",
    unit: "Unit 4",
    word: "role",
    phonetic: "/rəʊl/",
    pos: "n.",
    meaning: "作用；职能；角色",
    emoji: "🎭",
    example: "I like this role."
  },
{
    id: "play_a_role_in",
    unit: "Unit 4",
    word: "play a role (in)",
    phonetic: "",
    pos: "",
    meaning: "在……中发挥作用； 扮演角色",
    example: "I can use this phrase in a sentence."
  },
{
    id: "pea",
    unit: "Unit 4",
    word: "pea",
    phonetic: "/piː/",
    pos: "n.",
    meaning: "豌豆",
    emoji: "🟢",
    example: "I like this pea."
  },
{
    id: "climate",
    unit: "Unit 4",
    word: "climate",
    phonetic: "/ˈklaɪmət/",
    pos: "n.",
    meaning: "气候",
    emoji: "🌡",
    mnemonic: "clim(爬) + ate -> 爬过不同气候",
    example: "I like this climate."
  },
{
    id: "ocean",
    unit: "Unit 4",
    word: "ocean",
    phonetic: "/ˈəʊʃn/",
    pos: "n.",
    meaning: "大海；海洋",
    emoji: "🌊",
    mnemonic: "ocean 谐音 哦深，海洋哦深",
    example: "I sail on the ocean."
  },
{
    id: "except",
    unit: "Unit 4",
    word: "except",
    phonetic: "/ɪkˈsept/",
    pos: "prep.",
    meaning: "除……之外；除了",
    example: "I like this except."
  },
{
    id: "tiny",
    unit: "Unit 4",
    word: "tiny",
    phonetic: "/ˈtaɪni/",
    pos: "adj.",
    meaning: "极小的；微小的",
    emoji: "🔍",
    example: "The ant is very tiny."
  },
{
    id: "lively",
    unit: "Unit 4",
    word: "lively",
    phonetic: "/ˈlaɪvli/",
    pos: "adj.",
    meaning: "精力充沛的；生机勃勃的",
    emoji: "🎉",
    example: "This is very lively."
  },
{
    id: "the_arctic_ocean",
    unit: "Unit 4",
    word: "the Arctic Ocean",
    phonetic: "/ˈɑːktɪk/",
    pos: "",
    meaning: "北冰洋",
    example: "I can use this phrase in a sentence."
  },
{
    id: "billy",
    unit: "Unit 4",
    word: "Billy",
    phonetic: "/ˈbɪli/",
    pos: "",
    meaning: "比利",
    example: "I like this billy."
  },
{
    id: "pepper",
    unit: "Unit 5",
    word: "pepper",
    phonetic: "/ˈpepə(r)/",
    pos: "n.",
    meaning: "胡椒粉；菜椒",
    emoji: "🌶",
    mnemonic: "pepper 谐音 拍拍，辣椒拍拍嘴",
    example: "I like this pepper."
  },
{
    id: "cut_up",
    unit: "Unit 5",
    word: "cut up",
    phonetic: "",
    pos: "",
    meaning: "切碎；剁碎",
    example: "I can use this phrase in a sentence."
  },
{
    id: "mix",
    unit: "Unit 5",
    word: "mix",
    phonetic: "/mɪks/",
    pos: "v.",
    meaning: "使）混合；融合；调配 n. 混合；混杂；混合料",
    example: "I mix every day."
  },
{
    id: "bake",
    unit: "Unit 5",
    word: "bake",
    phonetic: "/beɪk/",
    pos: "v.",
    meaning: "烘焙",
    emoji: "🍞",
    mnemonic: "bake 谐音 贝克，贝克烤面包",
    example: "I bake every day."
  },
{
    id: "oven",
    unit: "Unit 5",
    word: "oven",
    phonetic: "/ˈʌvn/",
    pos: "n.",
    meaning: "烤箱；烤炉",
    emoji: "🔥",
    example: "I cook in an oven."
  },
{
    id: "pour_sth_into_sth",
    unit: "Unit 5",
    word: "pour sth into sth",
    phonetic: "",
    pos: "",
    meaning: "将……倒入……",
    example: "I can use this phrase in a sentence."
  },
{
    id: "flour",
    unit: "Unit 5",
    word: "flour",
    phonetic: "/ˈflaʊə(r)/",
    pos: "n.",
    meaning: "面粉",
    emoji: "🌾",
    example: "I like this flour."
  },
{
    id: "boil",
    unit: "Unit 5",
    word: "boil",
    phonetic: "/bɔɪl/",
    pos: "v.",
    meaning: "煮沸；烧开 n. 沸腾；沸点",
    emoji: "♨",
    example: "I boil every day."
  },
{
    id: "butter",
    unit: "Unit 5",
    word: "butter",
    phonetic: "/ˈbʌtə(r)/",
    pos: "n.",
    meaning: "黄油",
    emoji: "🧈",
    example: "I like this butter."
  },
{
    id: "cheese",
    unit: "Unit 5",
    word: "cheese",
    phonetic: "/tʃiːz/",
    pos: "n.",
    meaning: "奶酪；干酪",
    emoji: "🧀",
    example: "I like this cheese."
  },
{
    id: "cut_sth_in_into_sth",
    unit: "Unit 5",
    word: "cut sth in / into sth",
    phonetic: "",
    pos: "",
    meaning: "将……切成……",
    example: "I can use this phrase in a sentence."
  },
{
    id: "tablespoon",
    unit: "Unit 5",
    word: "tablespoon",
    phonetic: "/ˈteɪblspuːn/",
    pos: "n.",
    meaning: "一汤匙（的量） ；餐匙；汤匙",
    example: "I like this tablespoon."
  },
{
    id: "mash",
    unit: "Unit 5",
    word: "mash",
    phonetic: "/mæʃ/",
    pos: "v.",
    meaning: "捣烂；捣碎",
    emoji: "🥔",
    example: "I mash every day."
  },
{
    id: "mashed_potatoes",
    unit: "Unit 5",
    word: "mashed potatoes",
    phonetic: "/mæʃt/",
    pos: "",
    meaning: "土豆泥",
    example: "I can use this phrase in a sentence."
  },
{
    id: "stir_fry",
    unit: "Unit 5",
    word: "stir-fry",
    phonetic: "/ˈstɜːfraɪ/",
    pos: "v.",
    meaning: "翻炒；炒；煸",
    example: "I stir-fry every day."
  },
{
    id: "do_with",
    unit: "Unit 5",
    word: "do with",
    phonetic: "",
    pos: "",
    meaning: "处理",
    example: "I can use this phrase in a sentence."
  },
{
    id: "bowl",
    unit: "Unit 5",
    word: "bowl",
    phonetic: "/bəʊl/",
    pos: "n.",
    meaning: "碗；钵；盆",
    emoji: "🥣",
    example: "I eat from a bowl."
  },
{
    id: "heat",
    unit: "Unit 5",
    word: "heat",
    phonetic: "/hiːt/",
    pos: "v.",
    meaning: "加热；变热 n. 热；温度；炎热天气",
    emoji: "🔥",
    example: "I heat every day."
  },
{
    id: "oil",
    unit: "Unit 5",
    word: "oil",
    phonetic: "/ɔɪl/",
    pos: "n.",
    meaning: "食用油；石油；燃油",
    emoji: "🫒",
    example: "I like this oil."
  },
{
    id: "pan",
    unit: "Unit 5",
    word: "pan",
    phonetic: "/pæn/",
    pos: "n.",
    meaning: "平底锅；烤盘",
    emoji: "🍳",
    example: "I cook in a pan."
  },
{
    id: "put_sth_back",
    unit: "Unit 5",
    word: "put sth back",
    phonetic: "",
    pos: "",
    meaning: "将……放回",
    example: "I can use this phrase in a sentence."
  },
{
    id: "mix_with",
    unit: "Unit 5",
    word: "mix … with …",
    phonetic: "",
    pos: "",
    meaning: "使）……和……混合",
    example: "I can use this phrase in a sentence."
  },
{
    id: "simple",
    unit: "Unit 5",
    word: "simple",
    phonetic: "/ˈsɪmpl/",
    pos: "adj.",
    meaning: "简单的；朴素的",
    emoji: "👌",
    mnemonic: "simple 谐音 森剖，简单地剖开",
    example: "This is very simple."
  },
{
    id: "ingredient",
    unit: "Unit 5",
    word: "ingredient",
    phonetic: "/ɪnˈɡriːdiənt/",
    pos: "n.",
    meaning: "食材；成分",
    example: "I like this ingredient."
  },
{
    id: "instruction",
    unit: "Unit 5",
    word: "instruction",
    phonetic: "/ɪnˈstrʌkʃn/",
    pos: "n.",
    meaning: "用法说明；操作指南",
    root: "in-(进入) + struct(建造) + -tion -> 指导",
    example: "I like this instruction."
  },
{
    id: "steamed_fish",
    unit: "Unit 5",
    word: "steamed fish",
    phonetic: "",
    pos: "",
    meaning: "清蒸鱼",
    example: "I can use this phrase in a sentence."
  },
{
    id: "sour",
    unit: "Unit 5",
    word: "sour",
    phonetic: "/ˈsaʊə(r)/",
    pos: "adj.",
    meaning: "酸的；有酸味的",
    emoji: "🍋",
    mnemonic: "sour 谐音 扫二，酸得扫二遍",
    example: "The lemon is very sour."
  },
{
    id: "hot_and_sour_soup",
    unit: "Unit 5",
    word: "hot and sour soup",
    phonetic: "",
    pos: "",
    meaning: "酸辣汤",
    example: "I can use this phrase in a sentence."
  },
{
    id: "mess",
    unit: "Unit 5",
    word: "mess",
    phonetic: "/mes/",
    pos: "n.",
    meaning: "脏乱；凌乱",
    emoji: "🗑",
    example: "I like this mess."
  },
{
    id: "pretty",
    unit: "Unit 5",
    word: "pretty",
    phonetic: "/ˈprɪti/",
    pos: "adj.",
    meaning: "漂亮的；美丽的 adv. 相当；十分；非常",
    emoji: "🌼",
    example: "This is very pretty."
  },
{
    id: "christmas",
    unit: "Unit 5",
    word: "Christmas",
    phonetic: "/ˈkrɪsməs/",
    pos: "n.",
    meaning: "圣诞节",
    emoji: "🎄",
    mnemonic: "Christ(基督) + mas(弥撒) -> 圣诞节",
    example: "I like this christmas."
  },
{
    id: "pancake",
    unit: "Unit 5",
    word: "pancake",
    phonetic: "/ˈpænkeɪk/",
    pos: "n.",
    meaning: "烙饼；薄饼",
    emoji: "🥞",
    example: "I like this pancake."
  },
{
    id: "dream",
    unit: "Unit 5",
    word: "dream",
    phonetic: "/driːm/",
    pos: "n.",
    meaning: "梦想；梦 v. (dreamt /dremt/或 dreamed) 做梦；梦见；梦想",
    emoji: "💭",
    mnemonic: "dream 谐音 追梦，做梦追梦",
    example: "I have a dream."
  },
{
    id: "university",
    unit: "Unit 5",
    word: "university",
    phonetic: "/ˌjuːnɪˈvɜːsəti/",
    pos: "n.",
    meaning: "综合性）大学；高等学府",
    emoji: "🎓",
    mnemonic: "uni-(一个) + vers(转) -> 一个转的地方 = 大学",
    example: "I go to university."
  },
{
    id: "go_boating",
    unit: "Unit 5",
    word: "go boating",
    phonetic: "",
    pos: "",
    meaning: "去划船",
    example: "I can use this phrase in a sentence."
  },
{
    id: "memory",
    unit: "Unit 5",
    word: "memory",
    phonetic: "/ˈmeməri/",
    pos: "n.",
    meaning: "回忆；记忆",
    emoji: "🧠",
    mnemonic: "memory 谐音 卖莫里，卖莫里的记忆",
    example: "I have a good memory."
  },
{
    id: "visible",
    unit: "Unit 5",
    word: "visible",
    phonetic: "/ˈvɪzəbl/",
    pos: "adj.",
    meaning: "看得见的；可见的",
    root: "vis(看) + -ible(能) -> 可见的",
    example: "This is very visible."
  },
{
    id: "along_with_sb_sth",
    unit: "Unit 5",
    word: "along with sb / sth",
    phonetic: "",
    pos: "",
    meaning: "除……以外（还） ； 与……同样地",
    example: "I can use this phrase in a sentence."
  },
{
    id: "pumpkin",
    unit: "Unit 5",
    word: "pumpkin",
    phonetic: "/ˈpʌmpkɪn/",
    pos: "n.",
    meaning: "南瓜",
    emoji: "🎃",
    mnemonic: "pump(泵) + kin -> 泵出来的大家伙 = 南瓜",
    example: "I like this pumpkin."
  },
{
    id: "pie",
    unit: "Unit 5",
    word: "pie",
    phonetic: "/paɪ/",
    pos: "n.",
    meaning: "果馅饼；肉馅饼",
    emoji: "🥧",
    example: "I like this pie."
  },
{
    id: "warm_up",
    unit: "Unit 5",
    word: "warm up",
    phonetic: "",
    pos: "",
    meaning: "使）活跃起来；热身；预热",
    example: "I can use this phrase in a sentence."
  },
{
    id: "cinnamon",
    unit: "Unit 5",
    word: "cinnamon",
    phonetic: "/ˈsɪnəmən/",
    pos: "n.",
    meaning: "肉桂皮；桂皮香料",
    emoji: "🌿",
    example: "I like this cinnamon."
  },
{
    id: "fill_with",
    unit: "Unit 5",
    word: "fill … with …",
    phonetic: "",
    pos: "",
    meaning: "使）充满； （使）填满",
    example: "I can use this phrase in a sentence."
  },
{
    id: "sweetness",
    unit: "Unit 5",
    word: "sweetness",
    phonetic: "/ˈswiːtnəs/",
    pos: "n.",
    meaning: "甜；芬芳；愉悦",
    emoji: "🍬",
    example: "I like this sweetness."
  },
{
    id: "college",
    unit: "Unit 5",
    word: "college",
    phonetic: "/ˈkɒlɪdʒ/",
    pos: "n.",
    meaning: "学院；大学",
    emoji: "🎓",
    mnemonic: "col-(共同) + lege(法律) -> 共同学法律的地方",
    example: "I like this college."
  },
{
    id: "host",
    unit: "Unit 5",
    word: "host",
    phonetic: "/həʊst/",
    pos: "n.",
    meaning: "主人；东道主 v. 主办；主持（活动）",
    emoji: "🎤",
    mnemonic: "host 谐音 厚实的，主人厚实的",
    example: "I am the host."
  },
{
    id: "hostess",
    unit: "Unit 5",
    word: "hostess",
    phonetic: "/ˈhəʊstəs/",
    pos: "n.",
    meaning: "女主人；女房东",
    example: "I like this hostess."
  },
{
    id: "recipe",
    unit: "Unit 5",
    word: "recipe",
    phonetic: "/ˈresəpi/",
    pos: "n.",
    meaning: "食谱；烹饪法",
    emoji: "📖",
    mnemonic: "recipe 谐音 瑞思碧，瑞思碧的食谱",
    example: "I like this recipe."
  },
{
    id: "cream",
    unit: "Unit 5",
    word: "cream",
    phonetic: "/kriːm/",
    pos: "n.",
    meaning: "奶油；护肤霜",
    emoji: "🍦",
    example: "I like this cream."
  },
{
    id: "crust",
    unit: "Unit 5",
    word: "crust",
    phonetic: "/krʌst/",
    pos: "n.",
    meaning: "糕饼酥皮；面包皮",
    example: "I like this crust."
  },
{
    id: "mixture",
    unit: "Unit 5",
    word: "mixture",
    phonetic: "/ˈmɪkstʃə(r)/",
    pos: "n.",
    meaning: "混合物；结合体",
    example: "I like this mixture."
  },
{
    id: "least",
    unit: "Unit 5",
    word: "least",
    phonetic: "/liːst/",
    pos: "adv. & pron.",
    meaning: "最小；最少",
    example: "I least every day."
  },
{
    id: "at_least",
    unit: "Unit 5",
    word: "at least",
    phonetic: "",
    pos: "",
    meaning: "至少",
    example: "I can use this phrase in a sentence."
  },
{
    id: "secret",
    unit: "Unit 5",
    word: "secret",
    phonetic: "/ˈsiːkrət/",
    pos: "n.",
    meaning: "诀窍；秘密 adj. 秘密的；隐秘的",
    emoji: "🤫",
    mnemonic: "secret 谐音 思克瑞特，思克瑞特的秘密",
    example: "I have a secret."
  },
{
    id: "according_to",
    unit: "Unit 5",
    word: "according to",
    phonetic: "/əˈkɔːdɪŋ/",
    pos: "",
    meaning: "根据；依照",
    example: "I can use this phrase in a sentence."
  },
{
    id: "whenever",
    unit: "Unit 5",
    word: "whenever",
    phonetic: "/wenˈevə(r)/",
    pos: "adv. & conj.",
    meaning: "每当；在任何……的时候",
    example: "I whenever every day."
  },
{
    id: "item",
    unit: "Unit 5",
    word: "item",
    phonetic: "/ˈaɪtəm/",
    pos: "n.",
    meaning: "项目；条",
    example: "I like this item."
  },
{
    id: "spaghetti",
    unit: "Unit 5",
    word: "spaghetti",
    phonetic: "/spəˈɡeti/",
    pos: "n.",
    meaning: "意大利细面条",
    emoji: "🍝",
    example: "I like this spaghetti."
  },
{
    id: "spoon",
    unit: "Unit 5",
    word: "spoon",
    phonetic: "/spuːn/",
    pos: "n.",
    meaning: "一勺的量；勺",
    emoji: "🥄",
    example: "I eat with a spoon."
  },
{
    id: "slice",
    unit: "Unit 5",
    word: "slice",
    phonetic: "/slaɪs/",
    pos: "n.",
    meaning: "薄片；片 v. 把……切成薄片；切；割",
    emoji: "🔪",
    example: "I like this slice."
  },
{
    id: "couple",
    unit: "Unit 5",
    word: "couple",
    phonetic: "/ˈkʌpl/",
    pos: "n.",
    meaning: "夫妻；情侣；两人",
    emoji: "💑",
    example: "I like this couple."
  },
{
    id: "island",
    unit: "Unit 5",
    word: "island",
    phonetic: "/ˈaɪlənd/",
    pos: "n.",
    meaning: "岛",
    emoji: "🏝",
    mnemonic: "is(是) + land(地) -> 是陆地 = 岛",
    example: "I live on an island."
  },
{
    id: "wife",
    unit: "Unit 5",
    word: "wife",
    phonetic: "/waɪf/ /waɪvz/",
    pos: "n.",
    meaning: "妻子",
    emoji: "👩",
    example: "I like this wife."
  },
{
    id: "separate",
    unit: "Unit 5",
    word: "separate",
    phonetic: "/ˈseprət/",
    pos: "adj. /ˈseprət/",
    meaning: "单独的；分开的 v. /ˈsepəreɪt/ （使）分开； （使）分离",
    emoji: "↔",
    example: "This is very separate."
  },
{
    id: "born",
    unit: "Unit 5",
    word: "born",
    phonetic: "/bɔːn/",
    pos: "v.",
    meaning: "出生；出世 adj. 天生（有某方面才能）的",
    emoji: "👶",
    mnemonic: "born 谐音 波恩，波恩出生",
    example: "I born every day."
  },
{
    id: "one_by_one",
    unit: "Unit 5",
    word: "one by one",
    phonetic: "",
    pos: "",
    meaning: "逐个地；逐一地",
    example: "I can use this phrase in a sentence."
  },
{
    id: "thanksgiving",
    unit: "Unit 5",
    word: "Thanksgiving",
    phonetic: "/ˌθæŋksˈɡɪvɪŋ/",
    pos: "",
    meaning: "感恩节",
    example: "I like this thanksgiving."
  },
{
    id: "guoqiao_rice_noodles",
    unit: "Unit 5",
    word: "Guoqiao Rice Noodles",
    phonetic: "",
    pos: "",
    meaning: "过桥米线",
    example: "I can use this phrase in a sentence."
  },
{
    id: "yourself",
    unit: "Unit 6",
    word: "yourself",
    phonetic: "/jɔːˈself/ /jɔːˈselvz/",
    pos: "pron.",
    meaning: "你自己；您自己",
    emoji: "🪞",
    example: "I like this yourself."
  },
{
    id: "engineer",
    unit: "Unit 6",
    word: "engineer",
    phonetic: "/ˌendʒɪˈnɪə(r)/",
    pos: "n.",
    meaning: "工程师 ；技师",
    emoji: "⚙",
    mnemonic: "engine(引擎) + er -> 引擎的人 = 工程师",
    example: "She is an engineer."
  },
{
    id: "fashion",
    unit: "Unit 6",
    word: "fashion",
    phonetic: "/ˈfæʃn/",
    pos: "n.",
    meaning: "时装业；时尚",
    emoji: "👗",
    mnemonic: "fashion 谐音 费兴，时尚费兴",
    example: "I like this fashion."
  },
{
    id: "designer",
    unit: "Unit 6",
    word: "designer",
    phonetic: "/dɪˈzaɪnə(r)/",
    pos: "n.",
    meaning: "设计师",
    emoji: "🎨",
    example: "She is a designer."
  },
{
    id: "director",
    unit: "Unit 6",
    word: "director",
    phonetic: "/dəˈrektə(r); daɪˈrektə(r)/",
    pos: "n.",
    meaning: "导演；主任；董事",
    emoji: "🎬",
    example: "I am a director."
  },
{
    id: "musician",
    unit: "Unit 6",
    word: "musician",
    phonetic: "/mjuˈzɪʃn/",
    pos: "n.",
    meaning: "音乐家；乐师",
    emoji: "🎵",
    example: "He is a musician."
  },
{
    id: "fireman",
    unit: "Unit 6",
    word: "fireman",
    phonetic: "/ˈfaɪəmən/ /ˈfaɪəmən/",
    pos: "n.",
    meaning: "消防队员",
    example: "I call the fireman."
  },
{
    id: "ai",
    unit: "Unit 6",
    word: "AI",
    phonetic: "/ˌeɪ ˈaɪ/ /ˌaːtɪˈfɪʃəl/ /ɪnˈtelɪdʒəns/",
    pos: "",
    meaning: "人工智能",
    example: "I like this ai."
  },
{
    id: "essay",
    unit: "Unit 6",
    word: "essay",
    phonetic: "/ˈeseɪ/",
    pos: "n.",
    meaning: "小品文；文章",
    emoji: "📝",
    example: "Write an essay."
  },
{
    id: "classic",
    unit: "Unit 6",
    word: "classic",
    phonetic: "/ˈklæsɪk/",
    pos: "n.",
    meaning: "经典作品；名著 adj. 最优秀的；古典的",
    emoji: "📖",
    example: "I like this classic."
  },
{
    id: "keep_on_doing_sth",
    unit: "Unit 6",
    word: "keep on doing sth",
    phonetic: "",
    pos: "",
    meaning: "继续做；反复做",
    example: "I can use this phrase in a sentence."
  },
{
    id: "make_sure",
    unit: "Unit 6",
    word: "make sure",
    phonetic: "",
    pos: "",
    meaning: "确保；保证",
    example: "I can use this phrase in a sentence."
  },
{
    id: "try_one_s_best",
    unit: "Unit 6",
    word: "try one’s best",
    phonetic: "",
    pos: "",
    meaning: "尽最大努力",
    example: "I can use this phrase in a sentence."
  },
{
    id: "literature",
    unit: "Unit 6",
    word: "literature",
    phonetic: "/ˈlɪtrətʃə(r)/",
    pos: "n.",
    meaning: "文学；文献",
    emoji: "📚",
    root: "liter(文字) + -ature -> 文学",
    mnemonic: "liter(文字) + -ature -> 文学",
    example: "I like this literature."
  },
{
    id: "athlete",
    unit: "Unit 6",
    word: "athlete",
    phonetic: "/ˈæθliːt/",
    pos: "n.",
    meaning: "运动员",
    emoji: "🏃",
    mnemonic: "athlete 谐音 爱实力，运动员爱实力",
    example: "He is an athlete."
  },
{
    id: "photographer",
    unit: "Unit 6",
    word: "photographer",
    phonetic: "/fəˈtɒɡrəfə(r)/",
    pos: "n.",
    meaning: "摄影师；拍照者",
    emoji: "📷",
    mnemonic: "photo(光) + graph(画) + -er -> 摄影师",
    example: "He is a photographer."
  },
{
    id: "painter",
    unit: "Unit 6",
    word: "painter",
    phonetic: "/ˈpeɪntə(r)/",
    pos: "n.",
    meaning: "画家；油漆匠",
    emoji: "🎨",
    example: "She is a painter."
  },
{
    id: "businessman",
    unit: "Unit 6",
    word: "businessman",
    phonetic: "/ˈbɪznəsmæn/",
    pos: "n.",
    meaning: "商界人士；企业家",
    emoji: "💼",
    mnemonic: "business(生意) + man -> 商人",
    example: "I am a businessman."
  },
{
    id: "actress",
    unit: "Unit 6",
    word: "actress",
    phonetic: "/ˈæktrəs/",
    pos: "n.",
    meaning: "女演员",
    example: "She is an actress."
  },
{
    id: "lawyer",
    unit: "Unit 6",
    word: "lawyer",
    phonetic: "/ˈlɔːjə(r)/",
    pos: "n.",
    meaning: "律师",
    emoji: "⚖",
    mnemonic: "law(法律) + -yer -> 律师",
    example: "He is a lawyer."
  },
{
    id: "law",
    unit: "Unit 6",
    word: "law",
    phonetic: "/lɔː/",
    pos: "n.",
    meaning: "法律；法规",
    example: "I like this law."
  },
{
    id: "bath",
    unit: "Unit 6",
    word: "bath",
    phonetic: "/bɑːθ/",
    pos: "n.",
    meaning: "洗澡；浴缸",
    emoji: "🛁",
    example: "I like this bath."
  },
{
    id: "miss",
    unit: "Unit 6",
    word: "miss",
    phonetic: "/mɪs/",
    pos: "v.",
    meaning: "想念；错过",
    example: "I miss every day."
  },
{
    id: "be_tired_of",
    unit: "Unit 6",
    word: "be tired of",
    phonetic: "",
    pos: "",
    meaning: "对……感到厌倦",
    example: "I can use this phrase in a sentence."
  },
{
    id: "able",
    unit: "Unit 6",
    word: "able",
    phonetic: "/ˈeɪbl/",
    pos: "adj.",
    meaning: "能够；有才能的",
    emoji: "💪",
    example: "This is very able."
  },
{
    id: "stick",
    unit: "Unit 6",
    word: "stick",
    phonetic: "/stɪk/ /stʌk/",
    pos: "v.",
    meaning: "粘贴；将……刺入 n. 枝条；棍",
    emoji: "📌",
    example: "I stick every day."
  },
{
    id: "stick_to_sth",
    unit: "Unit 6",
    word: "stick to sth",
    phonetic: "",
    pos: "",
    meaning: "坚持；维持",
    example: "I can use this phrase in a sentence."
  },
{
    id: "resolution",
    unit: "Unit 6",
    word: "resolution",
    phonetic: "/ˌrezəˈluːʃn/",
    pos: "n.",
    meaning: "决定；决议",
    mnemonic: "re-(再) + solu(松开) + -tion -> 决心",
    example: "I like this resolution."
  },
{
    id: "have_to_do_with_sb_sth",
    unit: "Unit 6",
    word: "have (…) to do with sb / sth",
    phonetic: "",
    pos: "",
    meaning: "与……有关系",
    example: "I can use this phrase in a sentence."
  },
{
    id: "mini_goal",
    unit: "Unit 6",
    word: "mini-goal",
    phonetic: "/ˈmɪniˌɡəʊl/",
    pos: "n.",
    meaning: "小目标",
    example: "I like this mini-goal."
  },
{
    id: "achieve",
    unit: "Unit 6",
    word: "achieve",
    phonetic: "/əˈtʃiːv/",
    pos: "v.",
    meaning: "经过努力）达到；完成",
    example: "I achieve every day."
  },
{
    id: "physical",
    unit: "Unit 6",
    word: "physical",
    phonetic: "/ˈfɪzɪkl/",
    pos: "adj.",
    meaning: "身体的；物质的",
    emoji: "💪",
    mnemonic: "physic(医学) + -al -> 身体的",
    example: "This is very physical."
  },
{
    id: "health",
    unit: "Unit 6",
    word: "health",
    phonetic: "/helθ/",
    pos: "n.",
    meaning: "健康",
    emoji: "❤",
    example: "Health is wealth."
  },
{
    id: "healthily",
    unit: "Unit 6",
    word: "healthily",
    phonetic: "/ˈhelθɪli/",
    pos: "adv.",
    meaning: "健康地",
    example: "I healthily every day."
  },
{
    id: "take_up",
    unit: "Unit 6",
    word: "take up",
    phonetic: "",
    pos: "",
    meaning: "开始学；开始从事",
    example: "I can use this phrase in a sentence."
  },
{
    id: "photography",
    unit: "Unit 6",
    word: "photography",
    phonetic: "/fəˈtɒɡrəfi/",
    pos: "n.",
    meaning: "照相术；摄影",
    example: "I like this photography."
  },
{
    id: "self_improvement",
    unit: "Unit 6",
    word: "self-improvement",
    phonetic: "/ˌselfɪmˈpruːvmənt/",
    pos: "n.",
    meaning: "自我改进；自我提高",
    example: "I like this self-improvement."
  },
{
    id: "confident",
    unit: "Unit 6",
    word: "confident",
    phonetic: "/ˈkɒnfɪdənt/",
    pos: "adj.",
    meaning: "自信的；肯定的",
    emoji: "😎",
    root: "con-(完全) + fid(信任) -> 自信的",
    mnemonic: "con-(完全) + fid(信任) -> 自信",
    example: "I am very confident."
  },
{
    id: "organized",
    unit: "Unit 6",
    word: "organized",
    phonetic: "/ˈɔːɡənaɪzd/",
    pos: "adj.",
    meaning: "有条理的；有组织的",
    example: "This is very organized."
  },
{
    id: "wisely",
    unit: "Unit 6",
    word: "wisely",
    phonetic: "/ˈwaɪzli/",
    pos: "adv.",
    meaning: "聪明地；明智地",
    emoji: "🧠",
    example: "I wisely every day."
  },
{
    id: "possible",
    unit: "Unit 6",
    word: "possible",
    phonetic: "/ˈpɒsəbl/",
    pos: "adj.",
    meaning: "可能的；合理的",
    root: "poss(能够) + -ible -> 可能的",
    example: "This is possible."
  },
{
    id: "paragraph",
    unit: "Unit 6",
    word: "paragraph",
    phonetic: "/ˈpærəɡrɑːf/",
    pos: "n.",
    meaning: "段；段落",
    emoji: "📄",
    root: "para-(旁边) + graph(写) -> 段落",
    mnemonic: "para-(旁边) + graph(写) -> 段落",
    example: "Write a paragraph."
  },
{
    id: "introduce",
    unit: "Unit 6",
    word: "introduce",
    phonetic: "/ˌɪntrəˈdjuːs/",
    pos: "v.",
    meaning: "介绍；引见；引进",
    emoji: "👋",
    root: "intro-(向内) + duc(引导) -> 介绍",
    mnemonic: "intro-(向内) + duc(引导) -> 介绍",
    example: "Let me introduce myself."
  },
{
    id: "meaning",
    unit: "Unit 6",
    word: "meaning",
    phonetic: "/ˈmiːnɪŋ/",
    pos: "n.",
    meaning: "意义；含义",
    emoji: "💡",
    mnemonic: "mean(意思) + -ing -> 意义",
    example: "I like this meaning."
  },
{
    id: "fail",
    unit: "Unit 6",
    word: "fail",
    phonetic: "/feɪl/",
    pos: "v.",
    meaning: "未能（做到） ；失败",
    emoji: "❌",
    mnemonic: "fail 谐音 飞偶，飞偶失败了",
    example: "I do not want to fail."
  },
{
    id: "ahead",
    unit: "Unit 6",
    word: "ahead",
    phonetic: "/əˈhed/",
    pos: "adv.",
    meaning: "提前；在前面",
    emoji: "➡",
    mnemonic: "a-(朝向) + head(头) -> 朝向头 = 向前",
    example: "I ahead every day."
  },
{
    id: "put_out",
    unit: "Unit 6",
    word: "put out",
    phonetic: "",
    pos: "",
    meaning: "扑灭；把……摆好",
    example: "I can use this phrase in a sentence."
  },
{
    id: "design",
    unit: "Unit 6",
    word: "design",
    phonetic: "/dɪˈzaɪn/",
    pos: "v.",
    meaning: "设计；计划 n. 设计；花纹",
    emoji: "🎨",
    mnemonic: "de-(向下) + sign(标记) -> 标记出来 = 设计",
    example: "I design a new poster."
  },
{
    id: "bridge",
    unit: "Unit 6",
    word: "bridge",
    phonetic: "/brɪdʒ/",
    pos: "n.",
    meaning: "桥",
    emoji: "🌉",
    example: "I cross the bridge."
  },
{
    id: "final",
    unit: "Unit 6",
    word: "final",
    phonetic: "/ˈfaɪnl/",
    pos: "adj.",
    meaning: "最后的；最终的 n. 决赛",
    example: "This is very final."
  },
{
    id: "confidence",
    unit: "Unit 6",
    word: "confidence",
    phonetic: "/ˈkɒnfɪdəns/",
    pos: "n.",
    meaning: "信心；信任",
    example: "I like this confidence."
  },
{
    id: "draw_to_a_close",
    unit: "Unit 6",
    word: "draw to a close",
    phonetic: "",
    pos: "",
    meaning: "即将结束；即将完成",
    example: "I can use this phrase in a sentence."
  },
{
    id: "form",
    unit: "Unit 6",
    word: "form",
    phonetic: "/fɔːm/",
    pos: "v.",
    meaning: "使）形成；组成 n. 类型；形式；表格",
    emoji: "📋",
    example: "I form every day."
  },
{
    id: "relationship",
    unit: "Unit 6",
    word: "relationship",
    phonetic: "/rɪˈleɪʃnʃɪp/",
    pos: "n.",
    meaning: "关系；联系",
    emoji: "🤝",
    root: "relation(关系) + -ship -> 关系",
    mnemonic: "relation(关系) + -ship -> 关系",
    example: "I like this relationship."
  },
{
    id: "push_up",
    unit: "Unit 6",
    word: "push-up",
    phonetic: "/ˈpʊʃʌp/",
    pos: "n.",
    meaning: "俯卧撑",
    example: "I like this push-up."
  },
{
    id: "energetic",
    unit: "Unit 6",
    word: "energetic",
    phonetic: "/ˌenəˈdʒetɪk/",
    pos: "adj.",
    meaning: "精力充沛的；充满活力的",
    emoji: "⚡",
    mnemonic: "energy(精力) + -tic -> 精力充沛的",
    example: "He is very energetic."
  },
{
    id: "last_but_not_least",
    unit: "Unit 6",
    word: "last but not least",
    phonetic: "",
    pos: "",
    meaning: "最后但同等重要的",
    example: "I can use this phrase in a sentence."
  },
{
    id: "jason",
    unit: "Unit 6",
    word: "Jason",
    phonetic: "/ˈdʒeɪsən/",
    pos: "",
    meaning: "贾森",
    example: "I like this jason."
  },
{
    id: "tina",
    unit: "Unit 6",
    word: "Tina",
    phonetic: "/ˈtiːnə/",
    pos: "",
    meaning: "蒂娜",
    example: "I like this tina."
  },
{
    id: "prediction",
    unit: "Unit 7",
    word: "prediction",
    phonetic: "/prɪˈdɪkʃn/",
    pos: "n.",
    meaning: "预测；预言",
    emoji: "🔮",
    root: "pre-(预先) + dict(说) + -ion -> 预测",
    mnemonic: "pre-(预先) + dict(说) + -ion -> 预测",
    example: "I like this prediction."
  },
{
    id: "outer",
    unit: "Unit 7",
    word: "outer",
    phonetic: "/ˈaʊtə(r)/",
    pos: "adj.",
    meaning: "外围的；外表的",
    emoji: "🚀",
    example: "This is very outer."
  },
{
    id: "outer_space",
    unit: "Unit 7",
    word: "outer space",
    phonetic: "",
    pos: "",
    meaning: "太空；外层空间",
    example: "I can use this phrase in a sentence."
  },
{
    id: "worse",
    unit: "Unit 7",
    word: "worse",
    phonetic: "/wɜːs/",
    pos: "adj.",
    meaning: "的比较级） 更差的；更糟的；更坏的 adv. （badly 的比较级） 更差；更糟；更坏",
    example: "This is very worse."
  },
{
    id: "take_over",
    unit: "Unit 7",
    word: "take over",
    phonetic: "",
    pos: "",
    meaning: "接替；接管；接收",
    example: "I can use this phrase in a sentence."
  },
{
    id: "sci_fi",
    unit: "Unit 7",
    word: "sci-fi",
    phonetic: "/ˈsaɪ faɪ/",
    pos: "n.",
    meaning: "科幻小说（或影片等）",
    example: "I like this sci-fi."
  },
{
    id: "ticket",
    unit: "Unit 7",
    word: "ticket",
    phonetic: "/ˈtɪkɪt/",
    pos: "n.",
    meaning: "票；券",
    emoji: "🎫",
    example: "I like this ticket."
  },
{
    id: "positive",
    unit: "Unit 7",
    word: "positive",
    phonetic: "/ˈpɒzətɪv/",
    pos: "adj.",
    meaning: "乐观的；积极的；良好的",
    emoji: "👍",
    mnemonic: "posi(位置) + tive -> 找到正确位置 = 积极",
    example: "This is very positive."
  },
{
    id: "traffic",
    unit: "Unit 7",
    word: "traffic",
    phonetic: "/ˈtræfɪk/",
    pos: "n.",
    meaning: "交通；运输 v. （非法）进行交易；做……买卖",
    emoji: "🚗",
    example: "I like this traffic."
  },
{
    id: "technology",
    unit: "Unit 7",
    word: "technology",
    phonetic: "/tekˈnɒlədʒi/",
    pos: "n.",
    meaning: "科技；工艺",
    emoji: "💻",
    root: "techno(技术) + -logy(学科) -> 技术",
    mnemonic: "techno(技术) + -logy(学科) -> 技术",
    example: "I like this technology."
  },
{
    id: "video",
    unit: "Unit 7",
    word: "video",
    phonetic: "/ˈvɪdiəʊ/",
    pos: "n.",
    meaning: "视频；录像系统 v. 录视频；给……录像",
    root: "vid(看) + -eo -> 视频",
    example: "I watch a video."
  },
{
    id: "transport",
    unit: "Unit 7",
    word: "transport",
    phonetic: "/ˈtrænspɔːt/",
    pos: "n. /ˈtrænspɔːt/",
    meaning: "交通运输系统；旅行方式 v. /trænˈspɔːt/ 运输；运送",
    emoji: "🚚",
    root: "trans-(跨越) + port(搬运) -> 运输",
    mnemonic: "trans-(跨越) + port(搬运) -> 运输",
    example: "I like this transport."
  },
{
    id: "system",
    unit: "Unit 7",
    word: "system",
    phonetic: "/ˈsɪstəm/",
    pos: "n.",
    meaning: "系统",
    emoji: "⚙",
    example: "I like this system."
  },
{
    id: "efficient",
    unit: "Unit 7",
    word: "efficient",
    phonetic: "/ɪˈfɪʃnt/",
    pos: "adj.",
    meaning: "效率高的；有功效的",
    emoji: "⚡",
    mnemonic: "ef-(出) + fic(做) -> 做出来有效率",
    example: "This is very efficient."
  },
{
    id: "education",
    unit: "Unit 7",
    word: "education",
    phonetic: "/ˌedʒuˈkeɪʃn/",
    pos: "n.",
    meaning: "教育",
    emoji: "📚",
    root: "e-(出) + duc(引导) + -ation -> 教育",
    mnemonic: "e-(出) + duc(引导) + -ation -> 教育",
    example: "I like this education."
  },
{
    id: "length",
    unit: "Unit 7",
    word: "length",
    phonetic: "/leŋθ/",
    pos: "n.",
    meaning: "时长；长度",
    example: "The length is long."
  },
{
    id: "topic",
    unit: "Unit 7",
    word: "topic",
    phonetic: "/ˈtɒpɪk/",
    pos: "n.",
    meaning: "话题；题目；标题",
    example: "I like this topic."
  },
{
    id: "partner",
    unit: "Unit 7",
    word: "partner",
    phonetic: "/ˈpɑːtnə(r)/",
    pos: "n.",
    meaning: "搭档；同伴",
    emoji: "🤝",
    mnemonic: "partner 谐音 帕特纳，帕特纳伙伴",
    example: "She is my partner."
  },
{
    id: "shall",
    unit: "Unit 7",
    word: "shall",
    phonetic: "/ʃəl; ʃæl/ /ʃʊd/",
    pos: "modal v.",
    meaning: "将要；将会",
    example: "I shall every day."
  },
{
    id: "pass",
    unit: "Unit 7",
    word: "pass",
    phonetic: "/pɑːs/",
    pos: "v.",
    meaning: "及格；通过 n. 及格；通行证",
    example: "I pass every day."
  },
{
    id: "winner",
    unit: "Unit 7",
    word: "winner",
    phonetic: "/ˈwɪnə(r)/",
    pos: "n.",
    meaning: "优胜者；成功者",
    emoji: "🏆",
    mnemonic: "win(赢) + -ner -> 赢家",
    example: "He is a winner."
  },
{
    id: "cure",
    unit: "Unit 7",
    word: "cure",
    phonetic: "/kjʊə(r)/",
    pos: "n.",
    meaning: "药物；疗法 v. 治愈；治好",
    emoji: "💊",
    mnemonic: "cure 谐音 哭儿，哭儿需要治愈",
    example: "I like this cure."
  },
{
    id: "cancer",
    unit: "Unit 7",
    word: "cancer",
    phonetic: "/ˈkænsə(r)/",
    pos: "n.",
    meaning: "癌症",
    emoji: "🎗",
    example: "I like this cancer."
  },
{
    id: "concert",
    unit: "Unit 7",
    word: "concert",
    phonetic: "/ˈkɒnsət/",
    pos: "n.",
    meaning: "音乐会；演奏会",
    emoji: "🎸",
    mnemonic: "con-(共同) + cert(确定) -> 共同确定 = 音乐会",
    example: "I like this concert."
  },
{
    id: "cash",
    unit: "Unit 7",
    word: "cash",
    phonetic: "/kæʃ/",
    pos: "n.",
    meaning: "现金；金钱 v. 兑现",
    emoji: "💰",
    example: "I pay cash."
  },
{
    id: "wallet",
    unit: "Unit 7",
    word: "wallet",
    phonetic: "/ˈwɒlɪt/",
    pos: "n.",
    meaning: "钱包；皮夹",
    emoji: "💰",
    example: "I like this wallet."
  },
{
    id: "guest",
    unit: "Unit 7",
    word: "guest",
    phonetic: "/gest/",
    pos: "n.",
    meaning: "客人；宾客",
    emoji: "👤",
    example: "I have a guest."
  },
{
    id: "chief",
    unit: "Unit 7",
    word: "chief",
    phonetic: "/tʃiːf/",
    pos: "adj.",
    meaning: "首席的；最重要的 n. 首领；酋长",
    example: "This is very chief."
  },
{
    id: "researcher",
    unit: "Unit 7",
    word: "researcher",
    phonetic: "/rɪˈsɜːtʃə(r)/",
    pos: "n.",
    meaning: "研究者；探索者",
    emoji: "🔬",
    example: "I like this researcher."
  },
{
    id: "research",
    unit: "Unit 7",
    word: "research",
    phonetic: "/rɪˈsɜːtʃ/",
    pos: "n. & v.",
    meaning: "研究；调查",
    emoji: "🔬",
    mnemonic: "re-(再) + search(搜索) -> 再搜索 = 研究",
    example: "I research every day."
  },
{
    id: "futurist",
    unit: "Unit 7",
    word: "futurist",
    phonetic: "/ˈfjuːtʃərɪst/",
    pos: "n.",
    meaning: "未来学家",
    example: "I like this futurist."
  },
{
    id: "everywhere",
    unit: "Unit 7",
    word: "everywhere",
    phonetic: "/ˈevriweə(r)/",
    pos: "adv., pron. & conj.",
    meaning: "到处；所有地方",
    emoji: "🌍",
    example: "I everywhere every day."
  },
{
    id: "robotics",
    unit: "Unit 7",
    word: "robotics",
    phonetic: "/rəʊˈbɒtɪks/",
    pos: "n.",
    meaning: "机器人学",
    emoji: "🤖",
    example: "I like this robotics."
  },
{
    id: "industry",
    unit: "Unit 7",
    word: "industry",
    phonetic: "/ˈɪndəstri/",
    pos: "n.",
    meaning: "行业；工业",
    emoji: "🏭",
    mnemonic: "indu(引导) + stry -> 引导产业",
    example: "I like this industry."
  },
{
    id: "service",
    unit: "Unit 7",
    word: "service",
    phonetic: "/ˈsɜːvɪs/",
    pos: "n.",
    meaning: "服务；公共服务",
    emoji: "🛠",
    example: "I like this service."
  },
{
    id: "disaster",
    unit: "Unit 7",
    word: "disaster",
    phonetic: "/dɪˈzɑːstə(r)/",
    pos: "n.",
    meaning: "灾难；不幸",
    emoji: "🌪",
    mnemonic: "dis-(否定) + aster(星) -> 坏星 = 灾难",
    example: "I like this disaster."
  },
{
    id: "emergency",
    unit: "Unit 7",
    word: "emergency",
    phonetic: "/ɪˈmɜːdʒənsi/",
    pos: "n.",
    meaning: "突发事件；紧急情况",
    emoji: "🚨",
    mnemonic: "emerge(出现) + -ncy -> 紧急情况",
    example: "I like this emergency."
  },
{
    id: "disappear",
    unit: "Unit 7",
    word: "disappear",
    phonetic: "/ˌdɪsəˈpɪə(r)/",
    pos: "v.",
    meaning: "消失；不见",
    emoji: "👻",
    root: "dis-(否定) + appear(出现)",
    mnemonic: "dis-(否定) + appear(出现) -> 消失",
    example: "I disappear every day."
  },
{
    id: "challenging",
    unit: "Unit 7",
    word: "challenging",
    phonetic: "/ˈtʃælɪndʒɪŋ/",
    pos: "adj.",
    meaning: "挑战性的",
    example: "This is very challenging."
  },
{
    id: "pilot",
    unit: "Unit 7",
    word: "pilot",
    phonetic: "/ˈpaɪlət/",
    pos: "n.",
    meaning: "飞行员；领航员",
    emoji: "👨‍⚈",
    mnemonic: "pilot 谐音 派乐的，派乐的飞行员",
    example: "I am the pilot."
  },
{
    id: "expert",
    unit: "Unit 7",
    word: "expert",
    phonetic: "/ˈekspɜːt/",
    pos: "n.",
    meaning: "专家；行家 adj. 熟练的；内行的",
    emoji: "🎓",
    mnemonic: "ex-(出) + pert(尝试) -> 尝试很多次 = 专家",
    example: "I like this expert."
  },
{
    id: "replace",
    unit: "Unit 7",
    word: "replace",
    phonetic: "/rɪˈpleɪs/",
    pos: "v.",
    meaning: "代替；取代",
    root: "re-(替换) + place(放置) -> 替换",
    example: "I replace every day."
  },
{
    id: "creativity",
    unit: "Unit 7",
    word: "creativity",
    phonetic: "/ˌkriːeɪˈtɪvəti/",
    pos: "n.",
    meaning: "创造力",
    emoji: "💡",
    mnemonic: "creat(创造) + -ivity -> 创造力",
    example: "I like this creativity."
  },
{
    id: "emotional",
    unit: "Unit 7",
    word: "emotional",
    phonetic: "/ɪˈməʊʃənl/",
    pos: "adj.",
    meaning: "情感的；情绪的",
    example: "This is very emotional."
  },
{
    id: "intelligence",
    unit: "Unit 7",
    word: "intelligence",
    phonetic: "/ɪnˈtelɪdʒəns/",
    pos: "n.",
    meaning: "智力；智慧",
    emoji: "🧠",
    mnemonic: "in-(之间) + tellig(选择) -> 智力",
    example: "I like this intelligence."
  },
{
    id: "emotional_intelligence",
    unit: "Unit 7",
    word: "emotional intelligence",
    phonetic: "",
    pos: "",
    meaning: "情绪智力",
    example: "I can use this phrase in a sentence."
  },
{
    id: "mention",
    unit: "Unit 7",
    word: "mention",
    phonetic: "/ˈmenʃn/",
    pos: "v.",
    meaning: "提到；写到",
    emoji: "💬",
    example: "He mentions it to me."
  },
{
    id: "refrigerator",
    unit: "Unit 7",
    word: "refrigerator",
    phonetic: "/rɪˈfrɪdʒəreɪtə(r)/ /frɪdʒ/",
    pos: "n.",
    meaning: "冰箱",
    emoji: "🧊",
    mnemonic: "re-(再) + friger(冷) -> 再次冷却 = 冰箱",
    example: "I store in the refrigerator."
  },
{
    id: "low",
    unit: "Unit 7",
    word: "low",
    phonetic: "/ləʊ/",
    pos: "adv.",
    meaning: "向……底部；低 adj. 低的；矮的 n. 低水平；低谷",
    emoji: "📉",
    example: "I low every day."
  },
{
    id: "run_low_on_sth",
    unit: "Unit 7",
    word: "run low (on sth)",
    phonetic: "",
    pos: "",
    meaning: "即将用尽；快用完",
    example: "I can use this phrase in a sentence."
  },
{
    id: "accept",
    unit: "Unit 7",
    word: "accept",
    phonetic: "/əkˈsept/",
    pos: "v.",
    meaning: "接受；相信",
    emoji: "✅",
    root: "ac-(朝向) + cept(拿) -> 接受",
    example: "I accept your invitation."
  },
{
    id: "influence",
    unit: "Unit 7",
    word: "influence",
    phonetic: "/ˈɪnfluəns /",
    pos: "v.",
    meaning: "影响；对……起作用 n. 影响；作用",
    emoji: "🌊",
    mnemonic: "in-(进入) + flu(流) -> 流进去 = 影响",
    example: "I influence every day."
  },
{
    id: "creative",
    unit: "Unit 7",
    word: "creative",
    phonetic: "/kriˈeɪtɪv/",
    pos: "adj.",
    meaning: "创造性的；创作的",
    emoji: "🎨",
    root: "creat(创造) + -ive -> 有创造力的",
    mnemonic: "creat(创造) + -ive -> 创造性的",
    example: "She is very creative."
  },
{
    id: "impossible",
    unit: "Unit 7",
    word: "impossible",
    phonetic: "/ɪmˈpɒsəbl/",
    pos: "adj.",
    meaning: "不可能的",
    emoji: "🚫",
    root: "im-(不) + possible(可能)",
    example: "This is impossible."
  },
{
    id: "quality",
    unit: "Unit 7",
    word: "quality",
    phonetic: "/ˈkwɒləti/",
    pos: "n.",
    meaning: "素质；质量；品质 adj. 优质的；高质量的",
    emoji: "⭐",
    mnemonic: "quality 谐音 夸利体，夸利体质量",
    example: "The quality is good."
  },
{
    id: "develop",
    unit: "Unit 7",
    word: "develop",
    phonetic: "/dɪˈveləp/",
    pos: "v.",
    meaning: "增强；发展；开发",
    emoji: "📈",
    mnemonic: "de-(向下) + velop(包裹) -> 展开 = 发展",
    example: "I develop every day."
  },
{
    id: "german",
    unit: "Unit 7",
    word: "German",
    phonetic: "/ˈdʒɜːmən/",
    pos: "n.",
    meaning: "德语；德国人 adj. 德国的",
    example: "I like this german."
  },
{
    id: "valuable",
    unit: "Unit 7",
    word: "valuable",
    phonetic: "/ˈvæljuəbl/",
    pos: "adj.",
    meaning: "很有用的；宝贵的",
    emoji: "💎",
    root: "valu(价值) + -able -> 有价值的",
    mnemonic: "valu(价值) + -able -> 有价值的",
    example: "This is very valuable."
  },
{
    id: "public",
    unit: "Unit 7",
    word: "public",
    phonetic: "/ˈpʌblɪk/",
    pos: "adj.",
    meaning: "公共的；公众的",
    example: "This is very public."
  },
{
    id: "medical",
    unit: "Unit 7",
    word: "medical",
    phonetic: "/ˈmedɪkl/",
    pos: "adj.",
    meaning: "医学的；医疗的",
    emoji: "🏥",
    example: "This is very medical."
  },
{
    id: "challenge",
    unit: "Unit 7",
    word: "challenge",
    phonetic: "/ˈtʃælɪndʒ/",
    pos: "n.",
    meaning: "挑战；质疑 v. 向（某人）挑战；对……怀疑",
    emoji: "🏔",
    mnemonic: "challenge 谐音 才令准，挑战才令准",
    example: "I like this challenge."
  },
{
    id: "task",
    unit: "Unit 7",
    word: "task",
    phonetic: "/tɑːsk/",
    pos: "n.",
    meaning: "任务；工作",
    emoji: "📋",
    example: "I like this task."
  },
{
    id: "depend",
    unit: "Unit 7",
    word: "depend",
    phonetic: "/dɪˈpend/",
    pos: "v.",
    meaning: "取决于；依靠",
    emoji: "🤝",
    mnemonic: "de-(向下) + pend(挂) -> 挂在下面 = 依赖",
    example: "It depends on the weather."
  },
{
    id: "depend_on_upon",
    unit: "Unit 7",
    word: "depend on / upon",
    phonetic: "",
    pos: "",
    meaning: "取决于；依靠",
    example: "I can use this phrase in a sentence."
  },
{
    id: "come_over",
    unit: "Unit 7",
    word: "come over",
    phonetic: "",
    pos: "",
    meaning: "来访；拜访",
    example: "I can use this phrase in a sentence."
  },
{
    id: "as_long_as",
    unit: "Unit 7",
    word: "as long as",
    phonetic: "",
    pos: "",
    meaning: "只要",
    example: "I can use this phrase in a sentence."
  },
{
    id: "jennifer",
    unit: "Unit 7",
    word: "Jennifer",
    phonetic: "/ˈdʒenifə/",
    pos: "",
    meaning: "珍妮弗",
    example: "I like this jennifer."
  },
{
    id: "harry",
    unit: "Unit 7",
    word: "Harry",
    phonetic: "/ˈhæri/",
    pos: "",
    meaning: "哈里；哈丽",
    example: "I like this harry."
  },
{
    id: "asimov",
    unit: "Unit 7",
    word: "Asimov",
    phonetic: "/ˈæzɪmɒf/",
    pos: "",
    meaning: "阿西莫夫",
    example: "I like this asimov."
  },
{
    id: "france",
    unit: "Unit 7",
    word: "France",
    phonetic: "/frɑːns/",
    pos: "",
    meaning: "法国",
    example: "I like this france."
  },
{
    id: "mandy",
    unit: "Unit 7",
    word: "Mandy",
    phonetic: "/ˈmændi/",
    pos: "",
    meaning: "曼迪",
    example: "I like this mandy."
  },
{
    id: "communication",
    unit: "Unit 8",
    word: "communication",
    phonetic: "/kəˌmjuːnɪˈkeɪʃn/",
    pos: "n.",
    meaning: "表达；交流",
    emoji: "💬",
    root: "com-(共同) + muni(交流) + -cation -> 交流",
    mnemonic: "com-(共同) + muni(交流) + -cation -> 交流",
    example: "I like this communication."
  },
{
    id: "face_to_face",
    unit: "Unit 8",
    word: "face to face",
    phonetic: "",
    pos: "",
    meaning: "面对面",
    example: "I can use this phrase in a sentence."
  },
{
    id: "text_message",
    unit: "Unit 8",
    word: "text message",
    phonetic: "",
    pos: "",
    meaning: "手机）短信息；短信",
    example: "I can use this phrase in a sentence."
  },
{
    id: "sign",
    unit: "Unit 8",
    word: "sign",
    phonetic: "/saɪn/",
    pos: "n.",
    meaning: "手势；迹象；标志 v. 签（名） ；签字",
    emoji: "📝",
    example: "I like this sign."
  },
{
    id: "speaker",
    unit: "Unit 8",
    word: "speaker",
    phonetic: "/ˈspiːkə(r)/",
    pos: "n.",
    meaning: "说话者；发言者",
    emoji: "🗣",
    example: "I listen to the speaker."
  },
{
    id: "rehearsal",
    unit: "Unit 8",
    word: "rehearsal",
    phonetic: "/rɪˈhɜːsl/",
    pos: "n.",
    meaning: "排演；排练",
    example: "I like this rehearsal."
  },
{
    id: "show_sb_around",
    unit: "Unit 8",
    word: "show sb around",
    phonetic: "",
    pos: "",
    meaning: "领某人参观",
    example: "I can use this phrase in a sentence."
  },
{
    id: "local",
    unit: "Unit 8",
    word: "local",
    phonetic: "/ˈləʊkl/",
    pos: "adj.",
    meaning: "当地的；地方的 n. 当地人；本地人",
    emoji: "📍",
    example: "This is very local."
  },
{
    id: "u8_face_to_face",
    unit: "Unit 8",
    word: "face-to-face",
    phonetic: "",
    pos: "",
    meaning: "面对面的",
    example: "I like this face-to-face."
  },
{
    id: "professor",
    unit: "Unit 8",
    word: "professor",
    phonetic: "/prəˈfesə(r)/",
    pos: "n.",
    meaning: "教授",
    emoji: "🎓",
    mnemonic: "pro-(向前) + fess(说) + -or -> 教授",
    example: "I see the professor."
  },
{
    id: "speech",
    unit: "Unit 8",
    word: "speech",
    phonetic: "/spiːtʃ/",
    pos: "n.",
    meaning: "演说；发言",
    emoji: "🎤",
    mnemonic: "speak(说) -> 演讲",
    example: "I like this speech."
  },
{
    id: "argue",
    unit: "Unit 8",
    word: "argue",
    phonetic: "/ˈɑːɡjuː/",
    pos: "v.",
    meaning: "争论；争吵",
    emoji: "😤",
    mnemonic: "argue 谐音 啊古，啊古在争论",
    example: "I do not like to argue."
  },
{
    id: "make_up_with_sb",
    unit: "Unit 8",
    word: "make up (with sb)",
    phonetic: "",
    pos: "",
    meaning: "与……言归于好",
    example: "I can use this phrase in a sentence."
  },
{
    id: "in_person",
    unit: "Unit 8",
    word: "in person",
    phonetic: "",
    pos: "",
    meaning: "亲自；亲身",
    example: "I can use this phrase in a sentence."
  },
{
    id: "prefer",
    unit: "Unit 8",
    word: "prefer",
    phonetic: "/prɪˈfɜː(r)/",
    pos: "v.",
    meaning: "较喜欢",
    example: "I prefer every day."
  },
{
    id: "calm",
    unit: "Unit 8",
    word: "calm",
    phonetic: "/kɑːm/",
    pos: "adj.",
    meaning: "镇静的；沉着的 v. 使平静；使镇静",
    emoji: "😌",
    mnemonic: "calm 谐音 卡木，卡木很冷静",
    example: "This is very calm."
  },
{
    id: "worry_about",
    unit: "Unit 8",
    word: "worry about",
    phonetic: "",
    pos: "",
    meaning: "为……担心",
    example: "I can use this phrase in a sentence."
  },
{
    id: "expression",
    unit: "Unit 8",
    word: "expression",
    phonetic: "/ɪkˈspreʃn/",
    pos: "n.",
    meaning: "表达方式；表达",
    root: "ex-(出) + press(压) + -ion -> 表达",
    example: "I like this expression."
  },
{
    id: "chance",
    unit: "Unit 8",
    word: "chance",
    phonetic: "/tʃɑːns/",
    pos: "n.",
    meaning: "机会；可能性 adj. 意外的；偶然的",
    emoji: "🍀",
    example: "I give you a chance."
  },
{
    id: "meeting",
    unit: "Unit 8",
    word: "meeting",
    phonetic: "/ˈmiːtɪŋ/",
    pos: "n.",
    meaning: "会面；会议",
    example: "I like this meeting."
  },
{
    id: "difficulty",
    unit: "Unit 8",
    word: "difficulty",
    phonetic: "/ˈdɪfɪkəlti/",
    pos: "n.",
    meaning: "困难；难题",
    emoji: "🏔",
    example: "I like this difficulty."
  },
{
    id: "right_away",
    unit: "Unit 8",
    word: "right away",
    phonetic: "",
    pos: "",
    meaning: "立即；马上",
    example: "I can use this phrase in a sentence."
  },
{
    id: "line",
    unit: "Unit 8",
    word: "line",
    phonetic: "/laɪn/",
    pos: "n.",
    meaning: "字行；便条；线",
    example: "I like this line."
  },
{
    id: "drop_sb_a_line",
    unit: "Unit 8",
    word: "drop sb a line",
    phonetic: "",
    pos: "",
    meaning: "给……写信",
    example: "I can use this phrase in a sentence."
  },
{
    id: "detail",
    unit: "Unit 8",
    word: "detail",
    phonetic: "/ˈdiːteɪl/",
    pos: "n.",
    meaning: "细节；详情",
    emoji: "🔍",
    example: "I like this detail."
  },
{
    id: "reunion",
    unit: "Unit 8",
    word: "reunion",
    phonetic: "/ˌriːˈjuːniən/",
    pos: "n.",
    meaning: "团聚；重逢；聚会",
    example: "I like this reunion."
  },
{
    id: "seriously",
    unit: "Unit 8",
    word: "seriously",
    phonetic: "/ˈsɪəriəsli/",
    pos: "adv.",
    meaning: "严肃地；认真地",
    example: "I seriously every day."
  },
{
    id: "training",
    unit: "Unit 8",
    word: "training",
    phonetic: "/ˈtreɪnɪŋ/",
    pos: "n.",
    meaning: "训练；培训",
    example: "I like this training."
  },
{
    id: "nervous",
    unit: "Unit 8",
    word: "nervous",
    phonetic: "/ˈnɜːvəs/",
    pos: "adj.",
    meaning: "担忧的；焦虑的；胆怯的",
    emoji: "😰",
    root: "nerv(神经) + -ous -> 紧张的",
    mnemonic: "nerv(神经) + -ous -> 紧张的",
    example: "I am very nervous."
  },
{
    id: "stranger",
    unit: "Unit 8",
    word: "stranger",
    phonetic: "/ˈstreɪndʒə(r)/",
    pos: "n.",
    meaning: "陌生人",
    emoji: "👤",
    mnemonic: "strange(陌生的) + -r -> 陌生人",
    example: "Do not talk to strangers."
  },
{
    id: "tip",
    unit: "Unit 8",
    word: "tip",
    phonetic: "/tɪp/",
    pos: "n.",
    meaning: "指点；实用的提示；尖端 v. （使）倾斜；倒出；给小费",
    example: "I like this tip."
  },
{
    id: "carefully",
    unit: "Unit 8",
    word: "carefully",
    phonetic: "/ˈkeəfəli/",
    pos: "adv.",
    meaning: "认真地；仔细地；小心地",
    emoji: "👀",
    example: "I carefully every day."
  },
{
    id: "show_interest_in_sth",
    unit: "Unit 8",
    word: "show interest in sth",
    phonetic: "",
    pos: "",
    meaning: "对……表现出兴趣",
    example: "I can use this phrase in a sentence."
  },
{
    id: "listener",
    unit: "Unit 8",
    word: "listener",
    phonetic: "/ˈlɪsənə(r)/",
    pos: "n.",
    meaning: "听者",
    example: "I like this listener."
  },
{
    id: "point",
    unit: "Unit 8",
    word: "point",
    phonetic: "/pɔɪnt/",
    pos: "n.",
    meaning: "观点；重点 v. 指向；瞄准",
    example: "I score a point."
  },
{
    id: "surely",
    unit: "Unit 8",
    word: "surely",
    phonetic: "/ˈʃʊəli/",
    pos: "adv.",
    meaning: "想必；必定",
    example: "I surely every day."
  },
{
    id: "continue",
    unit: "Unit 8",
    word: "continue",
    phonetic: "/kənˈtɪnjuː/",
    pos: "v.",
    meaning: "持续；继续做",
    emoji: "▶",
    mnemonic: "con-(共同) + tin(保持) -> 共同保持 = 继续",
    example: "Please continue your work."
  },
{
    id: "impolite",
    unit: "Unit 8",
    word: "impolite",
    phonetic: "/ˌɪmpəˈlaɪt/",
    pos: "adj.",
    meaning: "不礼貌的；粗鲁的",
    root: "im-(不) + polite(礼貌)",
    example: "This is very impolite."
  },
{
    id: "personal",
    unit: "Unit 8",
    word: "personal",
    phonetic: "/ˈpɜːsənl/",
    pos: "adj.",
    meaning: "个人的；私人的",
    emoji: "👤",
    root: "person(人) + -al -> 个人的",
    mnemonic: "person(人) + -al -> 个人的",
    example: "This is very personal."
  },
{
    id: "argue_with_sb",
    unit: "Unit 8",
    word: "argue with sb",
    phonetic: "",
    pos: "",
    meaning: "与某人争论",
    example: "I can use this phrase in a sentence."
  },
{
    id: "move_on_to_sth",
    unit: "Unit 8",
    word: "move on (to sth)",
    phonetic: "",
    pos: "",
    meaning: "换话题；开始做（别的事）",
    example: "I can use this phrase in a sentence."
  },
{
    id: "sincere",
    unit: "Unit 8",
    word: "sincere",
    phonetic: "/sɪnˈsɪə(r)/",
    pos: "adj.",
    meaning: "真诚的；诚实的",
    emoji: "💖",
    mnemonic: "sincere 谐音 辛思尔，辛思尔真诚的",
    example: "This is very sincere."
  },
{
    id: "find_out",
    unit: "Unit 8",
    word: "find out",
    phonetic: "",
    pos: "",
    meaning: "查明；弄清（情况）",
    example: "I can use this phrase in a sentence."
  },
{
    id: "pay",
    unit: "Unit 8",
    word: "pay",
    phonetic: "/peɪ/ /peɪd/",
    pos: "v.",
    meaning: "付费；交纳；偿还 n. 工资；薪水",
    example: "I pay every day."
  },
{
    id: "attention",
    unit: "Unit 8",
    word: "attention",
    phonetic: "/əˈtenʃn/",
    pos: "n.",
    meaning: "注意；专心；关注",
    root: "at-(朝向) + tent(伸展) + -ion -> 注意力",
    example: "I like this attention."
  },
{
    id: "pay_attention_to",
    unit: "Unit 8",
    word: "pay attention (to …)",
    phonetic: "",
    pos: "",
    meaning: "注意；关注",
    example: "I can use this phrase in a sentence."
  },
{
    id: "be_yourself",
    unit: "Unit 8",
    word: "be yourself",
    phonetic: "",
    pos: "",
    meaning: "行为自然；不做作",
    example: "I can use this phrase in a sentence."
  },
{
    id: "offer",
    unit: "Unit 8",
    word: "offer",
    phonetic: "/ˈɒfə(r)/",
    pos: "v.",
    meaning: "提供；主动提出 n. 主动提议；出价",
    emoji: "🎁",
    mnemonic: "offer 谐音 奥佛，奥佛提供",
    example: "She offers to help."
  },
{
    id: "reasonable",
    unit: "Unit 8",
    word: "reasonable",
    phonetic: "/ˈriːznəbl/",
    pos: "adj.",
    meaning: "公平的；合理的",
    root: "reason(理由) + -able -> 合理的",
    example: "The answer is very reasonable."
  },
{
    id: "social",
    unit: "Unit 8",
    word: "social",
    phonetic: "/ˈsəʊʃl/",
    pos: "adj.",
    meaning: "社会的；社交的 n. 联谊会；联欢会",
    example: "This is very social."
  },
{
    id: "medium",
    unit: "Unit 8",
    word: "medium",
    phonetic: "/ˈmiːdiəm/ /ˈmiːdiə/",
    pos: "n.",
    meaning: "媒介；手段 adj. 中等的；适中的",
    example: "I like this medium."
  },
{
    id: "social_media",
    unit: "Unit 8",
    word: "social media",
    phonetic: "",
    pos: "",
    meaning: "社交媒体",
    example: "I can use this phrase in a sentence."
  },
{
    id: "trust",
    unit: "Unit 8",
    word: "trust",
    phonetic: "/trʌst/",
    pos: "n. & v.",
    meaning: "信任；相信",
    emoji: "🤝",
    mnemonic: "trust 谐音 踹死特，信任踹死特",
    example: "I trust you."
  },
{
    id: "keep_away_from",
    unit: "Unit 8",
    word: "keep (…) away from …",
    phonetic: "",
    pos: "",
    meaning: "使）远离；避免……靠近",
    example: "I can use this phrase in a sentence."
  },
{
    id: "misunderstanding",
    unit: "Unit 8",
    word: "misunderstanding",
    phonetic: "/ˌmɪsʌndəˈstændɪŋ/",
    pos: "n.",
    meaning: "误解；误会",
    example: "I like this misunderstanding."
  },
{
    id: "event",
    unit: "Unit 8",
    word: "event",
    phonetic: "/ɪˈvent/",
    pos: "n.",
    meaning: "公开活动；重要事情",
    emoji: "📅",
    mnemonic: "e-(出) + vent(来) -> 出来的事 = 事件",
    example: "I like this event."
  },
{
    id: "take_place",
    unit: "Unit 8",
    word: "take place",
    phonetic: "",
    pos: "",
    meaning: "发生；进行",
    example: "I can use this phrase in a sentence."
  },
{
    id: "cost",
    unit: "Unit 8",
    word: "cost",
    phonetic: "/kɒst/",
    pos: "n.",
    meaning: "费用；价钱；代价 v. 价格为；使损失；使付出努力",
    emoji: "💰",
    example: "The cost is low."
  },
{
    id: "opportunity",
    unit: "Unit 8",
    word: "opportunity",
    phonetic: "/ˌɒpəˈtjuːnəti/",
    pos: "n.",
    meaning: "机会；时机",
    example: "I like this opportunity."
  },
{
    id: "benefit",
    unit: "Unit 8",
    word: "benefit",
    phonetic: "/ˈbenɪfɪt/",
    pos: "v.",
    meaning: "对……有用；使受益 n. 益处；成效",
    emoji: "✅",
    mnemonic: "bene-(好) + fit(做) -> 做好事 = 好处",
    example: "I benefit every day."
  },
{
    id: "benefit_from",
    unit: "Unit 8",
    word: "benefit … from …",
    phonetic: "",
    pos: "",
    meaning: "从……获益",
    example: "I can use this phrase in a sentence."
  },
{
    id: "reply",
    unit: "Unit 8",
    word: "reply",
    phonetic: "/rɪˈplaɪ/",
    pos: "n. & v.",
    meaning: "回答；回复",
    emoji: "💬",
    root: "re-(回) + ply(折叠) -> 回复",
    mnemonic: "re-(回) + ply(折叠) -> 折回去 = 回复",
    example: "I reply to the email."
  },
{
    id: "honour",
    unit: "Unit 8",
    word: "honour",
    phonetic: "/ˈɒnə(r)/",
    pos: "n.",
    meaning: "荣幸；尊敬 v. 给……荣誉；表彰",
    emoji: "🏅",
    mnemonic: "honour 谐音 哈呢，哈呢荣誉",
    example: "I like this honour."
  },
{
    id: "sincerely",
    unit: "Unit 8",
    word: "sincerely",
    phonetic: "/sɪnˈsɪəli/",
    pos: "adv.",
    meaning: "真诚地；诚实地",
    example: "I sincerely every day."
  },
{
    id: "opening",
    unit: "Unit 8",
    word: "opening",
    phonetic: "/ˈəʊpənɪŋ/",
    pos: "adj.",
    meaning: "开篇的；开始的 n. 开始；孔；洞",
    example: "I am opening the ceremony."
  },
{
    id: "closing",
    unit: "Unit 8",
    word: "closing",
    phonetic: "/ˈkləʊzɪŋ/",
    pos: "adj.",
    meaning: "结尾的；结束的 n. 停业；关闭",
    example: "I am closing the meeting."
  },
{
    id: "sentence",
    unit: "Unit 8",
    word: "sentence",
    phonetic: "/ˈsentəns/",
    pos: "n.",
    meaning: "句子；判决 v. 判决；宣判",
    example: "Write a sentence."
  },
{
    id: "date",
    unit: "Unit 8",
    word: "date",
    phonetic: "/deɪt/",
    pos: "n.",
    meaning: "日期；日子；约会 v. 确定年代；注明日期",
    example: "I like this date."
  },
{
    id: "clause",
    unit: "Unit 8",
    word: "clause",
    phonetic: "/klɔːz/",
    pos: "n.",
    meaning: "从句；分句",
    example: "I like this clause."
  },
{
    id: "susan",
    unit: "Unit 8",
    word: "Susan",
    phonetic: "/ˈsu:zən/",
    pos: "",
    meaning: "苏珊",
    example: "I like this susan."
  },
{
    id: "jones",
    unit: "Unit 8",
    word: "Jones",
    phonetic: "/dʒəunz/",
    pos: "",
    meaning: "琼斯",
    example: "I like this jones."
  },
{
    id: "game",
    unit: "Unit 1",
    word: "game",
    phonetic: "/ɡeɪm/",
    pos: "n.",
    meaning: "游戏；运动",
    emoji: "🎮",
    example: "I play a game."
  },
{
    id: "excited",
    unit: "Unit 1",
    word: "excited",
    phonetic: "/ɪkˈsaɪtɪd/",
    pos: "adj.",
    meaning: "兴奋的；激动的",
    emoji: "🎉",
    mnemonic: "ex-(出) + cit(叫) -> 叫出来 = 兴奋",
    example: "I am very excited."
  },
{
    id: "sleep",
    unit: "Unit 1",
    word: "sleep",
    phonetic: "/sliːp/",
    pos: "n.",
    meaning: "睡觉；睡眠 v. (slept /slept/) 睡觉；入睡",
    emoji: "😴",
    example: "I like this sleep."
  },
{
    id: "worry",
    unit: "Unit 1",
    word: "worry",
    phonetic: "/ˈwʌri/",
    pos: "n. & v.",
    meaning: "担心；发愁",
    emoji: "😟",
    example: "Do not worry."
  },
{
    id: "autumn",
    unit: "Unit 1",
    word: "autumn",
    phonetic: "/ˈɔːtəm/",
    pos: "n.",
    meaning: "秋天；秋季",
    emoji: "🍂",
    mnemonic: "autumn 谐音 奥特姆，奥特姆秋天",
    example: "I like this autumn."
  },
{
    id: "train",
    unit: "Unit 1",
    word: "train",
    phonetic: "/treɪn/",
    pos: "n.",
    meaning: "火车；列车 v. 训练；培训",
    emoji: "🚂",
    mnemonic: "train 谐音 踹恩，踹恩火车",
    example: "I like this train."
  },
{
    id: "beside",
    unit: "Unit 1",
    word: "beside",
    phonetic: "/bɪˈsaɪd/",
    pos: "prep.",
    meaning: "在……旁边； 在……附近",
    example: "I like this beside."
  },
{
    id: "sweep",
    unit: "Unit 2",
    word: "sweep",
    phonetic: "/swiːp/ /swept/",
    pos: "v.",
    meaning: "扫；清扫",
    emoji: "🧹",
    mnemonic: "sweep 谐音 思威普，思威普扫地",
    example: "I sweep every day."
  },
{
    id: "floor",
    unit: "Unit 2",
    word: "floor",
    phonetic: "/flɔː(r)/",
    pos: "n.",
    meaning: "地板",
    emoji: "🏠",
    example: "I clean the floor."
  },
{
    id: "toilet",
    unit: "Unit 2",
    word: "toilet",
    phonetic: "/ˈtɔɪlət/",
    pos: "n.",
    meaning: "厕所；抽水马桶",
    emoji: "🚽",
    example: "I use the toilet."
  },
{
    id: "careful",
    unit: "Unit 2",
    word: "careful",
    phonetic: "/ˈkeəfl/",
    pos: "adj.",
    meaning: "小心；注意；细致的",
    emoji: "⚠",
    mnemonic: "care(关心) + -ful -> 小心的",
    example: "This is very careful."
  },
{
    id: "tomorrow",
    unit: "Unit 2",
    word: "tomorrow",
    phonetic: "/təˈmɒrəʊ/",
    pos: "n.",
    meaning: "明天",
    example: "I like this tomorrow."
  },
{
    id: "face",
    unit: "Unit 2",
    word: "face",
    phonetic: "/feɪs/",
    pos: "n.",
    meaning: "脸",
    emoji: "😊",
    mnemonic: "face 谐音 费斯，费斯脸",
    example: "Wash your face."
  },
{
    id: "kitchen",
    unit: "Unit 2",
    word: "kitchen",
    phonetic: "/ˈkɪtʃɪn/",
    pos: "n.",
    meaning: "厨房",
    emoji: "🍳",
    mnemonic: "kitchen 谐音 起珍，起珍厨房",
    example: "I cook in the kitchen."
  },
{
    id: "word",
    unit: "Unit 2",
    word: "word",
    phonetic: "/wɜːd/",
    pos: "n.",
    meaning: "词；字",
    emoji: "📝",
    example: "This is a new word."
  },
{
    id: "slow",
    unit: "Unit 3",
    word: "slow",
    phonetic: "/sləʊ/",
    pos: "adj.",
    meaning: "慢的；迟钝的",
    emoji: "🐢",
    mnemonic: "slow 谐音 丝漏，丝漏慢吞吞",
    example: "The car is very slow."
  },
{
    id: "fan",
    unit: "Unit 4",
    word: "fan",
    phonetic: "/fæn/",
    pos: "n.",
    meaning: "扇子；电风扇",
    example: "I am a fan."
  },
{
    id: "earth",
    unit: "Unit 4",
    word: "earth",
    phonetic: "/ɜːθ/",
    pos: "n.",
    meaning: "地球；世界",
    emoji: "🌍",
    mnemonic: "earth 谐音 饿死，地球饿死了",
    example: "The earth is round."
  },
{
    id: "bee",
    unit: "Unit 4",
    word: "bee",
    phonetic: "/biː/",
    pos: "n.",
    meaning: "蜜蜂",
    example: "It is a bee."
  },
{
    id: "far",
    unit: "Unit 4",
    word: "far",
    phonetic: "/fɑː(r)/",
    pos: "adv.",
    meaning: "远； （离……）有多远 adj. 较远的；远端的",
    example: "I far every day."
  },
{
    id: "meat",
    unit: "Unit 5",
    word: "meat",
    phonetic: "/miːt/",
    pos: "n.",
    meaning: "肉",
    emoji: "🥩",
    mnemonic: "meat 谐音 米特，米特肉",
    example: "I like this meat."
  },
{
    id: "grape",
    unit: "Unit 5",
    word: "grape",
    phonetic: "/ɡreɪp/",
    pos: "n.",
    meaning: "葡萄",
    emoji: "🍇",
    example: "I like this grape."
  },
{
    id: "thin",
    unit: "Unit 5",
    word: "thin",
    phonetic: "/θɪn/",
    pos: "adj.",
    meaning: "薄的；细的；瘦的",
    emoji: "📏",
    example: "He is very thin."
  },
{
    id: "worker",
    unit: "Unit 6",
    word: "worker",
    phonetic: "/ˈwɜːkə/",
    pos: "n.",
    meaning: "工人；工作者",
    emoji: "👷",
    mnemonic: "work(工作) + -er -> 工人",
    example: "I am a worker."
  },
{
    id: "fire",
    unit: "Unit 6",
    word: "fire",
    phonetic: "/faɪə(r)/",
    pos: "n.",
    meaning: "火；火灾 v. 射击；开火",
    emoji: "🔥",
    mnemonic: "fire 谐音 发哦，发哦火",
    example: "I warm by the fire."
  },
{
    id: "helpful",
    unit: "Unit 8",
    word: "helpful",
    phonetic: "/ˈhelpfl/",
    pos: "adj.",
    meaning: "有用的；有益的",
    emoji: "👍",
    mnemonic: "help(帮助) + -ful -> 有帮助的",
    example: "This is very helpful."
  }
];

window.DICTIONARY = DICTIONARY;
