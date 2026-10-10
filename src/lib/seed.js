export const CATS = ["Candle Patterns", "Basics", "Market Gyaan"];

export const SEED_POSTS = [
  {
    id: "p16",
    slug: "inside-bar-candlestick-pattern-hindi",
    title: "Inside Bar क्या है? Real Chart से Mother Candle और Breakdown समझें",
    category: "Candle Patterns",
    tags: ["inside bar", "mother candle", "candlestick patterns", "price action", "breakout", "false breakout"],
    excerpt: "Inside Bar पहचानने के लिए सिर्फ Body नहीं, पूरी Candle की Range देखें। HDFC Bank के Real Chart से Mother Candle और अगले दिन का Breakdown समझें।",
    content: `कभी Chart में एक Candle के बाद ऐसी Candle बनती है, जिसका पूरा High-Low पिछली Candle के अंदर रहता है। यही Inside Bar की बुनियादी पहचान है।

लेकिन छोटी Candle दिखते ही बड़ी तेजी या गिरावट मान लेना सही नहीं। पहले उसकी पूरी Range जाँचें, फिर देखें कि price उस Range से बाहर कैसे निकलता है।

## Inside Bar की पहचान कैसे करें?

इस article में हम Strict Inside Bar का नियम इस्तेमाल करेंगे:

- नई Candle का High, पिछली Candle के High से नीचे हो।
- नई Candle का Low, पिछली Candle के Low से ऊपर हो।

पिछली Candle को Mother Candle या Mother Bar कहते हैं। उसके बाद बनने वाली अंदर की Candle, Inside Bar है।

सिर्फ Body अंदर होना काफी नहीं है। ऊपर और नीचे की Wicks भी Mother Candle की High-Low Range के भीतर होनी चाहिए।

कुछ traders बराबर High या Low को भी स्वीकार करते हैं। इसलिए Scanner या Chart Indicator इस्तेमाल करते समय उसका नियम देख लें।

## Real Chart: HDFC Bank में Inside Bar

![HDFC Bank के 6-8 अक्टूबर 2026 के Daily Chart में Mother Candle, Inside Bar और अगले दिन का Breakdown](/inside-bar-hdfc-real-chart.png)

यह Chart वास्तविक historical OHLC data से बनाया गया है। हर Candle एक पूरे Trading Session को दिखाती है। पीली dashed lines Mother Candle की सीमा हैं।

| तारीख | Open | High | Low | Close | भूमिका |
|---|---|---:|---:|---:|---|
| 6 अक्टूबर 2026 | ₹705.60 | ₹714.70 | ₹701.00 | ₹711.45 | Mother Candle |
| 7 अक्टूबर 2026 | ₹708.55 | ₹711.00 | ₹701.70 | ₹702.75 | Inside Bar |
| 8 अक्टूबर 2026 | ₹704.05 | ₹705.80 | ₹690.50 | ₹692.25 | अगले दिन का Breakdown |

## Step 1: Mother Candle की सीमा तय करें

6 अक्टूबर की Candle का High ₹714.70 और Low ₹701.00 था।

इसलिए उसकी पूरी Range हुई: ₹714.70 − ₹701.00 = ₹13.70

Chart में इन दोनों levels के बीच हल्का shaded area दिया गया है।

## Step 2: अगली Candle की Wicks जाँचें

7 अक्टूबर का High ₹711.00 था, जो Mother High से नीचे है। उसका Low ₹701.70 था, जो Mother Low से ऊपर है।

दोनों शर्तें पूरी हुईं, इसलिए यह Strict Inside Bar है।

उसकी Range: ₹711.00 − ₹701.70 = ₹9.30

पिछले Session की तुलना में High-Low Range छोटी हुई। इसका मतलब उस Session का price movement सीमित रहा; अगली दिशा इससे निश्चित नहीं होती।

## Step 3: अगले Session में क्या हुआ?

8 अक्टूबर को price Mother Candle के Low के नीचे गया और दिन का Close भी उसी सीमा के नीचे रहा। इस ऐतिहासिक उदाहरण में नीचे की तरफ Range Break हुआ।

लेकिन 7 अक्टूबर के Close पर अगले दिन का नतीजा मालूम नहीं था। इसलिए इसे "पहले से पक्का Sell Signal" कहना गलत होगा।

यह एक उदाहरण है, किसी strategy की success rate या भविष्य के profit का प्रमाण नहीं।

## Inside Bar के बाद कौन-से levels देखें?

इस explanation में reference Mother Candle की पूरी Range है:

| आगे की स्थिति | कैसे पढ़ें |
|---|---|
| Price Mother High से ऊपर जाता है | ऊपर की सीमा पार हुई; देखें move टिकता है या नहीं |
| Price Mother Low से नीचे जाता है | नीचे की सीमा पार हुई; देखें move टिकता है या नहीं |
| Price दोनों सीमाओं के अंदर रहता है | Mother Range अभी नहीं टूटी |

Inside Bar का अपना High-Low और Mother Candle का High-Low अलग levels हैं। इन्हें मिला देने से Breakout का अर्थ बदल सकता है।

## False Breakout क्या होता है?

कभी price सीमा के बाहर जाता है, फिर वापस Range में लौट आता है। इसे False Breakout कहा जा सकता है।

Candle Close का इंतजार करने से पता चलता है कि चुना हुआ Session बाहर बंद हुआ या नहीं। फिर भी बाद के Session में reversal हो सकता है। Close मिलने से success की guarantee नहीं बनती।

## Beginners की चार सामान्य गलतियाँ

1. केवल Candle की Body देखकर Inside Bar मान लेना।
2. Red Inside Bar को निश्चित गिरावट और Green Inside Bar को निश्चित तेजी समझना।
3. अधूरी Candle पर pattern final मान लेना — बंद होने से पहले उसका High या Low बदल सकता है।
4. एक सफल उदाहरण देखकर हर Inside Bar से वही परिणाम उम्मीद करना।

## अभ्यास कैसे करें?

अपने Chart पर पहले Mother Candle का High-Low mark करें। उसके बाद अगली पूरी Candle के extremes की तुलना करें। फिर आने वाले Sessions का परिणाम अलग लिखें।

ऐसा record बनाते समय सफल और असफल, दोनों उदाहरण रखें। तभी आप पहचानने और परिणाम देखकर कहानी बनाने का फर्क समझ पाएँगे।

Inside Bar मुख्य रूप से Range के सिकुड़ने की पहचान है। इसे समझने के लिए Candle का रंग जितना दिखता है, उससे ज्यादा जरूरी उसके High और Low हैं।

यह लेख केवल शिक्षा के लिए है; किसी शेयर को खरीदने या बेचने की सलाह नहीं।

## आगे पढ़ें

- [Gap Up और Gap Down क्या हैं](/post/gap-up-gap-down-hindi)
- [Volume क्या है](/post/stock-market-volume-hindi)
- [Moving Average क्या है](/post/moving-average-sma-hindi)

## अक्सर पूछे जाने वाले सवाल

**1. Inside Bar क्या होता है?**
Strict Inside Bar में नई Candle का High पिछली Candle के High से नीचे और Low पिछली Candle के Low से ऊपर रहता है।

**2. Mother Candle किसे कहते हैं?**
Inside Bar के ठीक पहले वाली Candle को Mother Candle कहते हैं, जिसकी High-Low Range के भीतर Inside Bar बनता है।

**3. क्या Inside Bar हमेशा Bullish होता है?**
नहीं। Pattern अकेले अगली दिशा तय नहीं करता। Price ऊपर या नीचे निकल सकता है, या Range में रह सकता है।

**4. क्या केवल Body अंदर होने से Inside Bar बन जाता है?**
नहीं। इस article के Strict नियम में पूरी High-Low Range, Wicks सहित, पिछली Candle के भीतर होनी चाहिए।

**5. क्या Candle Close के बाद False Breakout का खतरा खत्म हो जाता है?**
नहीं। Range के बाहर Close मिलने के बाद भी आगे price वापस लौट सकता है।`,
    author: "HoshiyarStock",
    date: "2026-10-10",
    readTime: 8,
    cover: "/inside-bar-pattern-hindi-thumbnail.png",
  },
  {
    id: "p15",
    slug: "gap-up-gap-down-hindi",
    title: "Gap Up और Gap Down क्या हैं? Real Chart से आसान भाषा में समझें",
    category: "Basics",
    tags: ["gap up", "gap down", "gap fill", "candlestick basics", "price action", "market education"],
    excerpt: "ऊपर खुला शेयर गिरकर बंद हो सकता है और नीचे खुला शेयर Green Candle बना सकता है। Real Chart से Opening Gap और Candle Colour का फर्क सीखें।",
    content: `सुबह शेयर ऊपर खुला, लेकिन शाम तक गिर गया। दूसरी तरफ, नीचे खुला शेयर दिन के अंत में Green Candle बना गया। ऐसा क्यों?

क्योंकि **Opening Gap शुरुआत की स्थिति बताता है। पूरे दिन की दिशा बाद की कीमतों से पता चलती है।**

## Gap Up और Gap Down का मतलब

पिछले Trading Session के Close से अगले Session के Open की तुलना करें:

- **Gap Up Opening:** नया Open, पिछले Close से ऊपर।
- **Gap Down Opening:** नया Open, पिछले Close से नीचे।
- दोनों बराबर हों तो इस तुलना में Opening Gap नहीं है।

यहाँ "पिछला Session" जरूरी है। बीच में छुट्टी हो तो पिछली calendar date का भाव नहीं, पिछले कारोबारी दिन का Close लें।

## Real Chart: शुरुआत और अंतिम नतीजा अलग हो सकते हैं

![HDFC Bank के 29 सितंबर और 5 अक्टूबर 2026 के Daily Chart में Gap Down और Gap Up की तुलना](/gap-up-down-hdfc-real-chart.png)

यह चार्ट HDFC Bank के NSE historical OHLC data से बनाया गया है। हर Candle एक पूरे Trading Session की है। पीली dashed line पिछले Close को और नीली dotted line नए Open को दिखाती है।

| जानकारी | Gap Down उदाहरण | Gap Up उदाहरण |
|---|---:|---:|
| उदाहरण की तारीख | 29 सितंबर 2026 | 5 अक्टूबर 2026 |
| पिछला Trading Session | 28 सितंबर | 1 अक्टूबर |
| Previous Close | ₹719.05 | ₹721.20 |
| नया Open | ₹713.70 | ₹731.95 |
| Opening Gap | −₹5.35 | +₹10.75 |
| Gap प्रतिशत | −0.74% | +1.49% |
| उसी दिन का Close | ₹722.70 | ₹704.80 |

## उदाहरण 1: Gap Down हुआ, फिर भी Green Candle क्यों बनी?

Chart के बाएँ हिस्से में 29 सितंबर का Open ₹713.70 है। पिछले Session का Close ₹719.05 था, इसलिए शेयर ₹5.35 नीचे खुला।

लेकिन उस दिन Close ₹722.70 रहा — अपने Open से ₹9 ऊपर। सामान्य Open-Close colour setting में इसलिए Candle Green बनी।

**सीख:** Gap Down देखकर यह तय नहीं होता कि शेयर दिन भर गिरता रहेगा।

## उदाहरण 2: Gap Up हुआ, फिर भी शेयर गिरा

दाएँ हिस्से में 5 अक्टूबर का Open ₹731.95 है, जबकि पिछले Session का Close ₹721.20 था। यानी शुरुआत लगभग 1.49% ऊपर हुई।

दिन के अंत में भाव ₹704.80 रहा। यह उस दिन के Open और पिछले Close, दोनों से नीचे था। इसलिए शुरुआत Gap Up होने के बावजूद Candle Red बनी।

इन दो उदाहरणों से किसी setup की success rate नहीं निकाली जा सकती। ये केवल Opening Gap और बाद की चाल का फर्क दिखाते हैं।

## Gap प्रतिशत कैसे निकालें?

Gap % = [(नया Open − पिछला Close) ÷ पिछला Close] × 100

5 अक्टूबर का हिसाब: [(731.95 − 721.20) ÷ 721.20] × 100 = लगभग +1.49%

Daily Change अलग है: उसमें नए Open की जगह उसी दिन का Close इस्तेमाल होता है। इसीलिए Gap % और दिन का अंतिम Change % अलग हो सकते हैं।

## Opening Gap और Chart पर खाली जगह में फर्क

हर Opening Gap के बाद दो Daily Candles के बीच खाली जगह बचना जरूरी नहीं।

Daily ranges के बीच Up Gap तब बचता है जब नए Session का Low, पिछले Session के High से ऊपर हो। Down Gap में नया High, पिछले Low से नीचे रहता है।

इस article के chart में Opening Gaps दिखाए गए हैं। दोनों उदाहरणों में दिन खत्म होने तक ranges overlap करती हैं। इन्हें बचा हुआ full-day price gap समझना गलत होगा।

## क्या हर Gap भर जाता है?

नहीं। Gap Fill की गारंटी या निश्चित समय नहीं होता।

इस article में Opening Gap Fill का मतलब price का पिछले Close के स्तर तक वापस पहुँचना है। ऊपर के दोनों उदाहरणों में दिन की range ने उस स्तर को पार किया। लेकिन Daily OHLC से यह नहीं पता चलता कि ऐसा किस समय हुआ या उस समय कैसी Intraday Candle बनी।

इसलिए Daily Chart से "सुबह इतने बजे reversal आया" जैसी कहानी नहीं बनानी चाहिए।

## Chart पढ़ते समय ये चार बातें देखें

1. **Reference सही रखें:** Open की तुलना पिछले Trading Session के Close से करें।
2. **Candle colour समझें:** सामान्य setting में colour Open और Close का संबंध दिखाता है। कुछ platforms की setting अलग हो सकती है।
3. **Context देखें:** Opening के बाद price कहाँ टिकता है, पास में कौन-से price levels हैं और Volume कैसा है?
4. **Data की consistency जाँचें:** एक ही Exchange और adjustment basis रखें। Split या अन्य corporate action के आसपास raw prices भ्रामक लग सकते हैं।

Opening Gap देखकर अकेले Buy या Sell का फैसला निकालना ठीक नहीं। Price के आगे के व्यवहार और अपने risk limits को भी समझना जरूरी है।

यह लेख शिक्षा के लिए है; किसी शेयर को खरीदने या बेचने की सलाह नहीं।

## आगे पढ़ें

- [Green Candle के बावजूद शेयर नीचे क्यों](/post/green-candle-negative-day-hindi)
- [Volume क्या है](/post/stock-market-volume-hindi)
- [Moving Average क्या है](/post/moving-average-sma-hindi)

## अक्सर पूछे जाने वाले सवाल

**1. Gap Up क्या होता है?**
जब नया Trading Session पिछले Session के Close से ऊपर खुलता है, उसे Gap Up Opening कहते हैं।

**2. क्या Gap Down के बाद Green Candle बन सकती है?**
हाँ। नीचे खुलने के बाद शेयर अपने Open से ऊपर बंद हो तो सामान्य Open-Close setting में Green Candle बनती है।

**3. Gap प्रतिशत कैसे निकालते हैं?**
नए Open में से पिछला Close घटाएँ, उसे पिछले Close से भाग दें और 100 से गुणा करें।

**4. क्या हर Gap उसी दिन भर जाता है?**
नहीं। Gap Fill की गारंटी या निश्चित समय नहीं होता।

**5. क्या Gap Up एक Buy Signal है?**
अकेला Gap Up भरोसेमंद Buy Signal नहीं है। Opening के बाद price behaviour, context और risk भी समझना जरूरी है।`,
    author: "HoshiyarStock",
    date: "2026-10-09",
    readTime: 8,
    cover: "/gap-up-gap-down-hindi-thumbnail.png",
  },
  {
    id: "p14",
    slug: "stock-market-volume-hindi",
    title: "Volume क्या है? Real Chart से Price और Volume का संबंध समझें",
    category: "Market Gyaan",
    tags: ["volume", "market gyaan", "price action", "chart reading", "technical analysis"],
    excerpt: "ज्यादा Volume हमेशा तेजी नहीं बताता। HDFC Bank के वास्तविक Chart से समझें कि कारोबार बढ़ने के बावजूद शेयर क्यों नीचे बंद हो सकता है।",
    content: `Chart के नीचे अचानक एक लंबी Volume Bar दिखाई दे, तो क्या शेयर में तेजी आने वाली है?

जरूरी नहीं। ज्यादा Volume का मतलब ज्यादा शेयरों का कारोबार हुआ। कीमत ऊपर गई या नीचे, यह जानने के लिए Price को साथ पढ़ना होगा।

## Volume का मतलब

किसी तय अवधि में जितने शेयरों का कारोबार होता है, वह Trading Volume है। Daily Chart में यह पूरे कारोबारी सत्र का Volume होता है। पाँच मिनट के Chart में हर Bar उन पाँच मिनट का कारोबार दिखाती है।

एक काल्पनिक उदाहरण लें: एक व्यक्ति 50 शेयर बेचता है और दूसरा वही 50 शेयर खरीदता है। इस Trade का Volume 50 शेयर होगा, 100 नहीं।

Volume, अलग-अलग निवेशकों की संख्या भी नहीं है। एक ही शेयर दिन में कई बार हाथ बदल सकता है।

## Real Chart: HDFC Bank

![HDFC Bank का 24 सितंबर-6 अक्टूबर 2026 Chart, 5 अक्टूबर को 6.61 करोड़ शेयरों का Volume और −2.27% Daily Change](/volume-hdfc-real-chart.png)

शेयर: HDFC Bank (NSE:HDFCBANK)
Timeframe: Daily
Chart अवधि: 24 सितंबर-6 अक्टूबर 2026
ऊपरी हिस्सा: Candlestick Price Chart
निचला हिस्सा: Volume, करोड़ शेयरों में

एक ही तारीख की Candle और Volume Bar को साथ देखें। 5 अक्टूबर को नीचे बड़ी Volume Bar है, जबकि ऊपर बड़ी Red Candle दिखाई देती है।

## उस सत्र के आँकड़े

- 5 अक्टूबर का Open: ₹731.95
- Close: ₹704.80
- पिछला कारोबारी Close: ₹721.20
- Volume: 6,60,56,690 शेयर, लगभग 6.61 करोड़
- Daily Change: लगभग −2.27%

यानी उस दिन अधिक कारोबार हुआ, लेकिन भाव पिछले Close से नीचे बंद हुआ। ज्यादा Volume अपने आप तेजी का संकेत नहीं बना।

## Volume ज्यादा था — लेकिन किसकी तुलना में?

हमने 5 अक्टूबर से पहले के पाँच कारोबारी सत्रों — 25, 28, 29, 30 सितंबर और 1 अक्टूबर — का औसत निकाला।

पिछले पाँच सत्रों का कुल Volume: 16,10,39,867 शेयर
औसत = 16,10,39,867 ÷ 5 = 3,22,07,973.4 शेयर, लगभग 3.22 करोड़

तुलना = 6,60,56,690 ÷ 3,22,07,973.4 = लगभग 2.05 गुना

इसलिए हम कह सकते हैं कि इस चुने हुए औसत के मुकाबले 5 अक्टूबर का Volume ज्यादा था।

Chart की पीली टूटी Line यही स्थिर तुलना-स्तर है। यह हर तारीख पर बदलने वाली Moving Average Line नहीं है। औसत में 5 अक्टूबर को शामिल नहीं किया गया है।

पाँच सत्र यहाँ समझाने के लिए चुने गए हैं; इसे High Volume की कोई सार्वभौमिक सीमा न मानें।

## Red और Green Volume Bars का मतलब

इस Chart में Volume Bar का रंग संबंधित Candle के Open-Close के अनुसार है। Close ऊपर हो तो Green, नीचे हो तो Red।

Red Bar का मतलब यह नहीं कि इतने शेयर केवल बिके और किसी ने खरीदे ही नहीं। हर पूरे हुए Trade में Buyer और Seller दोनों होते हैं।

अलग Platforms में रंग का नियम बदल सकता है, इसलिए Settings समझना जरूरी है।

## क्या बड़ी Bar से बड़े निवेशक की पहचान हो जाती है?

नहीं। कुल Volume की संख्या यह नहीं बताती कि किसने खरीदा, किसने बेचा या कितने अलग निवेशक शामिल थे।

ऊपर के Chart से हम ज्यादा कारोबार और गिरता Close देख सकते हैं। केवल इन आँकड़ों से किसी खास संस्था की खरीद-बिक्री या गिरावट का कारण तय करना अतिरिक्त दावा होगा।

## Beginners के लिए चार सवाल

1. Price पिछले Close से ऊपर बंद हुआ या नीचे?
2. Volume किस औसत की तुलना में ज्यादा है?
3. क्या दोनों आँकड़े एक ही Exchange और Timeframe के हैं?
4. क्या पूरा सत्र खत्म हुआ है?

सुबह तक के अधूरे Volume की तुलना सीधे किसी पूरे दिन के Volume से करने पर गलत निष्कर्ष निकल सकता है।

## अभ्यास कैसे करें?

किसी पुराने Chart में एक पूरी हुई Candle चुनें। उसका Price Change और Volume लिखें। फिर उससे पहले के पाँच पूरे सत्रों का औसत निकालें।

एक उदाहरण अधिक Volume के साथ बढ़ती कीमत का और दूसरा अधिक Volume के साथ गिरती कीमत का चुनें। दोनों की अगली Candles देखें, लेकिन बाद का परिणाम देखकर पहले से निश्चित भविष्यवाणी का दावा न करें।

यह लेख शिक्षा के लिए है, किसी शेयर को खरीदने या बेचने की सलाह नहीं।

## आगे पढ़ें

- [Moving Average क्या है](/post/moving-average-sma-hindi)
- [Green Candle के बावजूद शेयर नीचे क्यों](/post/green-candle-negative-day-hindi)

## अक्सर पूछे जाने वाले सवाल

**1. Trading Volume क्या है?**
किसी तय अवधि में कारोबार हुए शेयरों की संख्या।

**2. 50 शेयर खरीदे और बेचे गए तो Volume कितना है?**
एक ही Trade में उन 50 शेयरों का Volume 50 है, 100 नहीं।

**3. क्या High Volume हमेशा तेजी बताता है?**
नहीं। अधिक Volume के साथ कीमत गिर भी सकती है।

**4. Red Volume Bar क्या केवल बिके हुए शेयर दिखाती है?**
नहीं। सामान्य रंगीन Bars पूरे Volume को Price Movement के रंग से दिखाती हैं; हर Trade में Buyer और Seller दोनों होते हैं।

**5. High Volume की तुलना किससे करें?**
उसी शेयर, Exchange और Timeframe के पिछले तुलनीय सत्रों से। तुलना की अवधि स्पष्ट रखें।`,
    author: "HoshiyarStock",
    date: "2026-10-09",
    readTime: 8,
    cover: "/stock-market-volume-hindi.png",
  },
  {
    id: "p13",
    slug: "moving-average-sma-hindi",
    title: "Moving Average क्या है? Real Chart से 5-Day SMA समझें",
    category: "Basics",
    tags: ["moving average", "sma", "ema", "basics", "technical analysis", "chart reading"],
    excerpt: "Chart की Moving Average Line बनती कैसे है? पाँच वास्तविक Closing Prices से SMA निकालें और जानें कि नया सत्र आने पर औसत कैसे बदलता है।",
    content: `Stock Chart पर Candles के बीच चलती पीली या नीली Line आपने देखी होगी। कई बार वह कीमत के पास रहती है और कई बार उससे दूर। लेकिन यह Line बनती कैसे है?

Moving Average का एक सरल रूप है SMA यानी Simple Moving Average। इसे समझने के लिए शुरुआत पाँच Closing Prices के औसत से कर सकते हैं।

## Moving Average का मतलब

यह चुने हुए पिछले Periods की कीमतों का औसत दिखाता है। इस लेख में Daily Chart की Closing Prices इस्तेमाल की गई हैं।

5-Day SMA = नवीनतम 5 कारोबारी सत्रों के Close का जोड़ ÷ 5

नया सत्र पूरा होने पर उसकी Closing Price शामिल होती है और सबसे पुरानी Price बाहर निकल जाती है। इसीलिए औसत समय के साथ बदलता है और इसे Moving Average कहते हैं।

पाँच दिन का अर्थ पाँच कारोबारी सत्र है, पाँच कैलेंडर दिन नहीं।

## Real Chart: HDFC Bank और 5-Day SMA

![HDFC Bank का 21 सितंबर-6 अक्टूबर 2026 Daily Chart, जिसमें 30 सितंबर का 5-Day SMA ₹722.99 है](/moving-average-hdfc-real-chart.png)

शेयर: HDFC Bank (NSE:HDFCBANK)
Chart अवधि: 21 सितंबर-6 अक्टूबर 2026
Timeframe: Daily
Indicator: 5-Day SMA
Price Source: Close

Chart में Candles वास्तविक Open, High, Low और Close दिखाती हैं। पीली Line हर सत्र तक उपलब्ध नवीनतम पाँच Closing Prices का औसत है।

## 30 सितंबर का SMA खुद निकालें

| कारोबारी तारीख, 2026 | Close |
|---|---:|
| 24 सितंबर | ₹728.90 |
| 25 सितंबर | ₹735.60 |
| 28 सितंबर | ₹719.05 |
| 29 सितंबर | ₹722.70 |
| 30 सितंबर | ₹708.70 |

जोड़ = ₹3,614.95
5-Day SMA = ₹3,614.95 ÷ 5 = ₹722.99

उस दिन Close ₹708.70 था। इसलिए Candle का Close, SMA से ₹14.29 नीचे था। Chart में यही अंतर चिन्हित है।

## अगले सत्र में औसत क्यों बदला?

1 अक्टूबर का Close ₹721.20 शामिल हुआ और 24 सितंबर का ₹728.90 बाहर निकला।

नया SMA = (₹3,614.95 − ₹728.90 + ₹721.20) ÷ 5 = ₹721.45

यहाँ एक दिलचस्प बात है: पिछले सत्र से Close बढ़ा, लेकिन SMA थोड़ा घटा। कारण यह है कि औसत से निकली पुरानी Price, शामिल हुई नई Price से अधिक थी।

## Chart पर Line कैसे पढ़ें?

पहले देखें कि Close, SMA से ऊपर है या नीचे। यह बताता है कि वर्तमान Close चुनी हुई अवधि के औसत की तुलना में कहाँ है।

फिर Line की दिशा देखें। ऊपर उठती SMA औसत कीमत बढ़ने और नीचे झुकती SMA औसत कीमत घटने का संकेत देती है।

केवल Line छूने या पार करने से भविष्य का परिणाम तय नहीं होता। यह पिछली कीमतों से बनी गणना है, आगे का भाव बताने वाली निश्चित भविष्यवाणी नहीं।

## 5-Day और 20-Day SMA में क्या फर्क है?

5-Day SMA में कम Prices शामिल होती हैं, इसलिए यह छोटी अवधि के बदलावों पर सामान्यतः जल्दी प्रतिक्रिया करती है। 20-Day SMA अधिक सत्रों को समेटती है और अक्सर अधिक Smooth होती है, लेकिन बदलाव दिखाने में अधिक देरी हो सकती है।

यहाँ पाँच सत्र केवल गणना आसानी से सीखने के लिए चुने गए हैं। इसे हर शेयर के लिए सबसे अच्छा Trading Setting न मानें।

## SMA और EMA एक ही हैं?

नहीं। SMA में चुने हुए सभी Periods का Weight बराबर होता है। EMA में हाल की कीमतों को अधिक Weight दिया जाता है, इसलिए समान Period वाली EMA सामान्यतः तेजी से प्रतिक्रिया करती है।

तेज प्रतिक्रिया अपने आप बेहतर नतीजों की गारंटी नहीं है।

## Beginners की तीन गलतियाँ

1. SMA के ऊपर भाव देखकर उसे पक्का Buy Signal मान लेना।
2. Daily और पाँच मिनट के Chart पर समान Length को समान अवधि समझना।
3. बार-बार Line पार करने वाले Sideways Market में हर Cross को नया Trend मान लेना।

Daily Chart पर Length 5 का मतलब पाँच Daily Candles है। पाँच मिनट के Chart पर इसका मतलब पाँच पाँच-मिनट की Candles होगा।

## छोटा अभ्यास

Chart में SMA चुनें, Length 5 और Source Close रखें। किसी पूरी हो चुकी Daily Candle पर रुकें। उस सत्र सहित नवीनतम पाँच Closes जोड़कर पाँच से भाग दें।

फिर Chart की SMA Value से अपनी गणना मिलाएँ। अंतर हो तो Timeframe, Source और Price Adjustment Settings जाँचें।

यह लेख शिक्षा के लिए है, किसी शेयर को खरीदने या बेचने की सलाह नहीं।

## आगे पढ़ें

- [Doji Candle क्या है](/post/doji-candle-pattern-hindi)
- [Green Candle के बावजूद शेयर नीचे क्यों](/post/green-candle-negative-day-hindi)

## अक्सर पूछे जाने वाले सवाल

**1. SMA का पूरा नाम क्या है?**
Simple Moving Average। यह चुने हुए Periods की कीमतों का साधारण औसत है।

**2. 5-Day SMA कैसे निकालते हैं?**
संबंधित सत्र सहित नवीनतम पाँच कारोबारी सत्रों के Close जोड़कर पाँच से भाग दें।

**3. क्या Price बढ़ने पर SMA हमेशा बढ़ेगी?**
नहीं। नई शामिल Price और बाहर निकली पुरानी Price का अंतर भी औसत की दिशा तय करता है।

**4. SMA और EMA में क्या फर्क है?**
SMA बराबर Weight देती है; EMA हाल की कीमतों को अधिक Weight देती है।

**5. क्या SMA के ऊपर Close पक्का Buy Signal है?**
नहीं। अकेली Moving Average भविष्य की तेजी या मुनाफा निश्चित नहीं करती।`,
    author: "HoshiyarStock",
    date: "2026-10-08",
    readTime: 8,
    cover: "/moving-average-sma-hindi.png",
  },
  {
    id: "p12",
    slug: "green-candle-negative-day-hindi",
    title: "Green Candle के बावजूद शेयर नीचे क्यों? Real Chart से समझें",
    category: "Market Gyaan",
    tags: ["market gyaan", "candlestick basics", "daily change", "previous close", "chart reading"],
    excerpt: "हरी Candle के साथ नुकसान और लाल Candle के साथ बढ़त — SBI के दो वास्तविक उदाहरणों से जानें कि यह कैसे संभव है।",
    content: `आपने Trading App खोला। शेयर के सामने नुकसान दिख रहा है, लेकिन Daily Chart में Candle हरी है। क्या Chart गलत है?

जरूरी नहीं। Candle का रंग और Daily Change दो अलग तुलना दिखा सकते हैं। फर्क समझते ही यह उलझन दूर हो जाती है।

## Candle का रंग किससे तय होता है?

सामान्य Candlestick Chart में Green Candle का मतलब है कि Close, उसी Candle के Open से ऊपर है। Red Candle में Close, Open से नीचे होता है।

Daily Candle एक कारोबारी सत्र दिखाती है। पाँच मिनट के Chart में यही तुलना उन पाँच मिनट के Open और Close के बीच होगी।

इस लेख के Chart में सामान्य Open-Close colour rule इस्तेमाल किया गया है।

## Daily Change किससे बनता है?

पूरे हुए कारोबारी सत्र का Daily Change आम तौर पर उसके Close की तुलना पिछले कारोबारी सत्र के Close से करता है।

Daily Change = आज का Close − पिछला Close

Daily Change % = (Daily Change ÷ पिछला Close) × 100

यहाँ पिछला Close हमेशा पिछले कैलेंडर दिन का नहीं होता। बीच में छुट्टी हो सकती है।

## Real Chart: SBI के दो उलटे दिखने वाले उदाहरण

![SBI की 1 अक्टूबर 2026 Green Candle के साथ −0.56% और 5 अक्टूबर की Red Candle के साथ +0.41% Daily Change](/green-candle-negative-day-sbi.png)

शेयर: State Bank of India (NSE:SBIN)
Timeframe: Daily
तारीखें: 1 और 5 अक्टूबर 2026
पीली टूटी लाइन: संबंधित पिछले कारोबारी सत्र का Close
दोनों हिस्सों का Price Scale समान है।

### उदाहरण 1: Green Candle, फिर भी नुकसान

1 अक्टूबर को SBI का Open ₹953.10 और Close ₹954.10 था। पिछला कारोबारी Close, 30 सितंबर का ₹959.50 था।

Open से Close: ₹954.10 − ₹953.10 = +₹1.00 — इसलिए Candle Green है।

पिछले Close से बदलाव: ₹954.10 − ₹959.50 = −₹5.40 — Daily Change लगभग −0.56% है।

शेयर नीचे खुला और अपने Open से सुधरा, लेकिन पिछले Close तक नहीं पहुँचा। इसलिए हरी Candle और दैनिक नुकसान साथ दिखे।

### उदाहरण 2: Red Candle, फिर भी बढ़त

5 अक्टूबर को Open ₹959.00 और Close ₹958.00 था। पिछला कारोबारी Close ₹954.10 था।

Open से Close: ₹958.00 − ₹959.00 = −₹1.00 — इसलिए Candle Red है।

पिछले Close से बदलाव: ₹958.00 − ₹954.10 = +₹3.90 — Daily Change लगभग +0.41% है।

इस बार शेयर ऊपर खुला। Open से कुछ नीचे बंद होने के बाद भी पिछला Close पीछे रह गया।

## अपनी App में क्या देखें?

इन तीन Prices को साथ रखें: Previous Close, Open और Close। केवल रंग देखकर पूरे दिन का प्रदर्शन तय न करें।

Market खुला हो तो दिन का अंतिम Close अभी बना नहीं है। स्क्रीन का Live Change आम तौर पर चल रही कीमत और पिछले Close की तुलना करता है। बन रही Candle का रंग भी बदल सकता है।

## Colour setting भी फर्क पैदा करती है

कुछ Chart Platforms में "Color bars based on previous close" जैसा विकल्प होता है। इसे चालू करने पर रंग का आधार अपनी Candle का Open नहीं, पिछली Candle का Close हो सकता है।

इसलिए दो Apps में अलग रंग दिखे तो पहले Symbol, Exchange, Timeframe, Chart Type और Colour Settings मिलाएँ। सीधे यह न मानें कि Price Data गलत है।

## छोटा अभ्यास

कल्पना करें: Previous Close ₹100, Open ₹95 और Close ₹98।

सामान्य नियम में Candle Green होगी, क्योंकि ₹98, ₹95 से ऊपर है। लेकिन Daily Change −₹2 यानी −2% होगा, क्योंकि तुलना ₹100 से है।

यह अभ्यास काल्पनिक है। ऊपर दिया SBI Chart वास्तविक ऐतिहासिक डेटा से बनाया गया है।

Candle का रंग पढ़ते समय पूछें: "तुलना किस कीमत से हो रही है?" यही सवाल Open-Close Movement और Daily Change को अलग समझने में मदद करता है।

यह लेख शिक्षा के लिए है, किसी शेयर को खरीदने या बेचने की सलाह नहीं।

## आगे पढ़ें

- [Doji Candle क्या है](/post/doji-candle-pattern-hindi)

## अक्सर पूछे जाने वाले सवाल

**1. क्या Green Candle के बावजूद Daily Change negative हो सकता है?**
हाँ। Close अपने Open से ऊपर, लेकिन पिछले कारोबारी Close से नीचे हो सकता है।

**2. क्या Red Candle के बावजूद शेयर दिन में बढ़त पर बंद हो सकता है?**
हाँ। Close अपने Open से नीचे, लेकिन पिछले Close से ऊपर हो सकता है।

**3. Daily Change % कैसे निकालते हैं?**
आज के Close से पिछले Close को घटाएँ, फिर पिछले Close से भाग देकर 100 से गुणा करें।

**4. अलग Apps में Candle का रंग अलग क्यों दिख सकता है?**
Colour Settings या Chart Type अलग हो सकते हैं। Symbol, Exchange और Timeframe भी जाँचें।

**5. क्या Green Candle अपने आप Buy Signal है?**
नहीं। रंग केवल चुनी हुई तुलना बताता है; उससे भविष्य की तेजी निश्चित नहीं होती।`,
    author: "HoshiyarStock",
    date: "2026-10-08",
    readTime: 7,
    cover: "/green-candle-negative-day-hindi.png",
  },
  {
    id: "p11",
    slug: "doji-candle-pattern-hindi",
    title: "Doji Candle क्या है? Real Chart से Open और Close का मतलब समझें",
    category: "Basics",
    tags: ["doji candle", "candlestick basics", "chart reading", "sbi", "technical analysis"],
    excerpt: "छोटी Body का मतलब छोटी Price Movement नहीं। SBI की वास्तविक Doji से Open-Close, High-Low और अगली Candle को पढ़ना सीखें।",
    content: `कभी Chart में Candle की मोटी Body की जगह केवल एक पतली आड़ी लाइन दिखाई देती है। उसे देखकर सवाल आता है — क्या उस दिन शेयर की कीमत चली ही नहीं?

जरूरी नहीं। कीमत दिनभर ऊपर-नीचे घूमकर भी लगभग वहीं बंद हो सकती है, जहाँ से शुरू हुई थी। Doji Candle को समझने की शुरुआत यहीं से होती है।

## Doji की पहचान

जब किसी Candle का Open और Close बराबर या लगभग बराबर हो, तो उसकी Body बहुत पतली या लगभग गायब दिखती है। इसे Doji कहते हैं।

ऊपर और नीचे की Wicks की लंबाई अलग हो सकती है। Technical Analysis में इसे अक्सर अनिर्णय का संकेत माना जाता है। अकेली Doji यह तय नहीं करती कि अगली चाल ऊपर होगी या नीचे।

## Real Chart: SBI की Doji

![SBI का 7-18 अगस्त 2026 Daily Chart और 13 अगस्त की Doji, जिसमें Open और Close ₹1,083 हैं](/doji-sbi-real-chart.png)

शेयर: State Bank of India (NSE:SBIN)
Timeframe: Daily
Chart अवधि: 7-18 अगस्त 2026
Doji की तारीख: 13 अगस्त 2026

उस सत्र का डेटा:

| Price | मूल्य |
|---|---:|
| Open | ₹1,083.00 |
| High | ₹1,086.80 |
| Low | ₹1,073.00 |
| Close | ₹1,083.00 |

Open और Close बराबर हैं। इसलिए Body की ऊँचाई शून्य है। लेकिन High और Low अलग हैं, इसलिए Wicks दिखाई देती हैं।

हमारी गणना:

- Body = Open और Close का अंतर = ₹0.00
- पूरे सत्र की Range = High − Low = ₹13.80

यानी Body शून्य होने के बावजूद कीमत ₹13.80 की Range में घूमी।

## Chart को तीन हिस्सों में पढ़ें

बाईं तरफ पूरा Chart है। पीली छाया वाली Candle Doji है। दाईं तरफ उसी का बड़ा दृश्य है; उसका Price Scale अलग है।

आड़ी पीली लाइन Open और Close दिखाती है। ऊपर की Wick High तक और नीचे की Wick Low तक जाती है। यहाँ दोनों Wicks बराबर नहीं हैं, फिर भी Open-Close बराबर होने की शर्त पूरी होती है।

## अगले दिन क्या हुआ?

14 अगस्त को Close ₹1,067.70 रहा — Doji के Low ₹1,073 से नीचे। इस उदाहरण में अगली Candle ने कमजोरी दिखाई।

लेकिन यह बाद में दिखा परिणाम है। Doji बनते समय इस गिरावट को निश्चित नहीं कहा जा सकता था।

## एक और फर्क: Open-Close और Daily Change

Candle की Body, उसी सत्र के Open और Close की तुलना करती है। Daily Change आम तौर पर पिछली कारोबारी तारीख के Close से तुलना करता है।

इसलिए किसी शेयर में Doji बनने पर भी पिछले Close की तुलना में लाभ या नुकसान दिख सकता है। दोनों गणनाएँ अलग सवालों का जवाब देती हैं।

## Doji और Spinning Top में अंतर

Doji में Body लगभग गायब या बहुत पतली होती है। Spinning Top में छोटी, लेकिन दिखाई देने वाली Body होती है। दोनों को केवल रंग देखकर पहचानना ठीक नहीं। पहले Open-Close और Candle की पूरी बनावट देखें।

## Doji देखकर क्या जाँचना चाहिए?

1. Candle पूरी हुई है या अभी बन रही है?
2. उससे पहले कीमत किस दिशा में चल रही थी?
3. अगली Candle कहाँ बंद हुई?
4. क्या आप पूरी Price Movement देख रहे हैं या केवल एक निशान?

हमारे उदाहरण में Doji से पहले गिरावट और एक उछाल दोनों दिखते हैं। इसे लंबी तेजी के शीर्ष पर बना आदर्श Reversal बताना सही नहीं होगा। यहाँ इसका उपयोग Candle की बनावट सीखने के लिए है।

## छोटा अभ्यास

पुराने Chart पर कोई Doji चुनें। आगे की Candles छिपाकर उसका Open, High, Low और Close लिखें। Body और Range अलग-अलग निकालें। फिर अगली Candles खोलकर देखें कि क्या हुआ।

कम से कम कई अलग उदाहरण दर्ज करें। केवल एक सफल दिखने वाले Chart से किसी Pattern की सफलता-दर नहीं निकाली जा सकती।

यह लेख शिक्षा के लिए है, किसी शेयर को खरीदने या बेचने की सलाह नहीं।

## आगे पढ़ें

- [Bullish Engulfing Pattern क्या है](/post/bullish-engulfing-pattern-hindi)
- [Bearish Engulfing Pattern क्या है](/post/bearish-engulfing-pattern-hindi)

## अक्सर पूछे जाने वाले सवाल

**1. Doji Candle क्या है?**
जिस Candle का Open और Close बराबर या लगभग बराबर हो, उसे Doji कहते हैं।

**2. क्या Doji का मतलब दिनभर कीमत नहीं बदली?**
नहीं। High और Low अलग हो सकते हैं। हमारे SBI उदाहरण की Range ₹13.80 थी।

**3. क्या Doji हमेशा Reversal बताती है?**
नहीं। अकेली Doji अगली दिशा निश्चित नहीं करती।

**4. क्या दोनों Wicks बराबर होनी चाहिए?**
नहीं। Doji की मुख्य पहचान Open और Close का बराबर या लगभग बराबर होना है।

**5. Doji और Spinning Top में क्या फर्क है?**
Doji की Body लगभग गायब या बेहद पतली होती है; Spinning Top में छोटी, दिखाई देने वाली Body होती है।`,
    author: "HoshiyarStock",
    date: "2026-10-08",
    readTime: 7,
    cover: "/doji-candle-pattern-hindi.png",
  },
  {
    id: "p10",
    slug: "bearish-engulfing-pattern-hindi",
    title: "Bearish Engulfing Pattern क्या है? SBI के Real Chart से समझें",
    category: "Candle Patterns",
    tags: ["bearish engulfing", "candle patterns", "chart reading", "sbi", "technical analysis"],
    excerpt: "SBI की वास्तविक Candles से समझिए कि Bearish Engulfing कैसे बनता है और उसके बाद गिरावट के साथ उछाल भी क्यों देखना चाहिए।",
    content: `तेजी से बढ़ते शेयर में अचानक बड़ी Red Candle बन जाए, तो क्या गिरावट शुरू हो गई? जवाब जानने के लिए केवल उसका रंग देखना काफी नहीं है। पिछली Candle और पहले की Price Movement भी देखनी होगी।

[Bullish Engulfing Pattern क्या है](/post/bullish-engulfing-pattern-hindi) के बाद अब उसके उलट Pattern को समझते हैं — Bearish Engulfing।

### Bearish Engulfing की पहचान

यह दो Candles का Pattern है, जिसे पहले की तेजी के संदर्भ में देखते हैं। पहली Candle Green होती है। अगली Red Candle की Body, पहली Green Body को पूरी तरह ढक लेती है। यह संभावित कमजोरी का संकेत है।

Body यानी Open और Close के बीच का मोटा हिस्सा। Wick यानी High और Low तक की पतली रेखा। Engulfing की मुख्य कसौटी Body है; पूरी Wick ढकना जरूरी नहीं।

### Real Chart: SBI में कहाँ बना Pattern?

![SBI का 30 जुलाई से 14 अगस्त 2026 Daily Chart, Bearish Engulfing और बाद की Price Movement](/bearish-engulfing-sbi-real-chart.png)

शेयर: State Bank of India (NSE:SBIN)
Timeframe: Daily
Chart अवधि: 30 जुलाई-14 अगस्त 2026
Pattern: 7 और 10 अगस्त 2026 के लगातार कारोबारी सत्र

Chart की शुरुआत में छोटी अवधि की तेजी दिखती है। पीली छाया में चिन्हित जोड़ी पर ध्यान दें: पहले Green और फिर बड़ी Red Candle।

| Price | 7 अगस्त: Green | 10 अगस्त: Red |
|---|---|---:|
| Open | ₹1,080.10 | ₹1,108.00 |
| High | ₹1,124.50 | ₹1,113.30 |
| Low | ₹1,075.70 | ₹1,068.60 |
| Close | ₹1,097.20 | ₹1,071.00 |

हमारी गणना में पहली Body ₹17.10 और दूसरी ₹37.00 की है। दूसरी Candle पिछली Close के ऊपर खुली और पिछली Open के नीचे बंद हुई। इसलिए उसकी Body ने पहली Body का पूरा क्षेत्र ढक लिया।

### Zoom Chart: Body और Wick का फर्क

![SBI की 7 और 10 अगस्त 2026 Candles में Red Body द्वारा Green Body को ढकना](/bearish-engulfing-sbi-body-detail.png)

पीली पट्टी Green Body का क्षेत्र दिखाती है। Red Body इस पट्टी के ऊपर से नीचे तक फैली है। पहली Candle की ऊपरी Wick फिर भी ज्यादा ऊँची है — इससे Body Engulfing की पहचान नहीं बदलती।

### अगले सत्र में क्या हुआ?

11 अगस्त का Close ₹1,066 रहा, जो Pattern के सबसे निचले Low ₹1,068.60 से नीचे था। लेकिन 12 अगस्त को भाव उछला और Close ₹1,082 हुआ।

इस उदाहरण में पहले कमजोरी आई, फिर उछाल। इसलिए Bearish संकेत का मतलब रोज लगातार गिरावट नहीं है।

### Confirmation को आसान भाषा में समझें

Pattern बनना एक घटना है; उसके बाद की चाल दूसरी। अभ्यास के लिए पहले एक स्पष्ट शर्त चुन सकते हैं: क्या अगली पूरी Daily Candle, Pattern Low के नीचे बंद हुई?

ऊपर के उदाहरण में यह शर्त पूरी हुई। फिर भी उसके बाद उछाल आया। इससे समझ आता है कि Confirmation भी भविष्य की गारंटी नहीं है। यह केवल हमारी चुनी हुई जाँच है, सबके लिए अनिवार्य Trading Rule नहीं।

### Beginners की आम गलतियाँ

- हर बड़ी Red Candle को Bearish Engulfing मान लेना।
- पहले की तेजी देखे बिना Pattern का नाम लगा देना।
- Body की जगह केवल Wicks की तुलना करना।
- अधूरी Candle देखकर अंतिम निष्कर्ष निकाल लेना।
- बाद का Chart देखकर मान लेना कि गिरावट पहले से निश्चित थी।

### खुद Chart पढ़ने का छोटा अभ्यास

पुराना Chart खोलें और आगे की Candles छिपा दें। पहले Trend देखें, फिर दो Candles के Open-Close लिखें। Pattern मिलने पर अपनी Confirmation की शर्त नोट करें। इसके बाद अगली Candles खोलकर परिणाम जाँचें।

अपनी नोटबुक में सफल और असफल दोनों उदाहरण रखें। एक चुना हुआ Chart किसी Pattern की सफलता-दर साबित नहीं करता; उसके लिए स्पष्ट नियमों पर कई उदाहरण जाँचना पड़ता है।

यह लेख शिक्षा के लिए है, किसी शेयर को खरीदने, बेचने या Short करने की सलाह नहीं।

## अक्सर पूछे जाने वाले सवाल

**1. Bearish Engulfing में कितनी Candles होती हैं?**
दो — पहली Green और दूसरी Red, जिसकी Body पहली की Body को ढकती है।

**2. क्या Wicks भी ढकनी चाहिए?**
Body Engulfing की कसौटी में जरूरी नहीं। ऊपर के SBI उदाहरण में पहली Wick ज्यादा ऊँची है।

**3. क्या Pattern के बाद रोज गिरावट होती है?**
नहीं। हमारे उदाहरण में कमजोरी के बाद उछाल भी आया।

**4. Bullish और Bearish Engulfing में क्या अंतर है?**
Bullish में Green Body पिछली Red Body को ढकती है; Bearish में क्रम उलटा होता है। पहले का Trend भी साथ देखें।

**5. क्या केवल इस Pattern से फैसला लेना चाहिए?**
एक Pattern पूरी जानकारी नहीं देता। Trend, बाद की Price Movement और जोखिम को साथ समझना जरूरी है।`,
    author: "HoshiyarStock",
    date: "2026-10-07",
    readTime: 8,
    cover: "/bearish-engulfing-pattern-hindi.png",
  },
  {
    id: "p9",
    slug: "bullish-engulfing-pattern-hindi",
    title: "Bullish Engulfing Pattern क्या है? Real Chart से आसान भाषा में समझें",
    category: "Candle Patterns",
    tags: ["bullish engulfing", "candle patterns", "technical analysis", "hdfc bank", "chart reading"],
    excerpt: "HDFC Bank के वास्तविक Chart पर देखें कि Green Candle ने Red Body को कैसे ढका और अगले सत्र में तेजी क्यों टिक नहीं सकी।",
    content: `गिरते शेयर में एक छोटी Red Candle के बाद बड़ी Green Candle बने, तो ध्यान जाता है। लेकिन क्या हर बड़ी Green Candle, Bullish Engulfing होती है? नहीं। इसमें दूसरी Candle की Body को पहली Candle की Body पूरी तरह ढकनी होती है।

HDFC Bank के वास्तविक Daily Chart से इसकी पहचान और उसके बाद की चाल समझते हैं।

## Bullish Engulfing की पहचान

यह दो Candles का Pattern है। पहली Candle लाल और दूसरी हरी होती है। दूसरी की Body पहली की Body को नीचे और ऊपर दोनों तरफ से समेट लेती है। पहले गिरावट या नीचे की ओर चाल का संदर्भ होना जरूरी है।

Body, Open और Close के बीच का मोटा हिस्सा है। Wick, High और Low तक की पतली रेखा है। मूल Engulfing कसौटी Body की है; दोनों Wicks को ढकना जरूरी नहीं।

यह संभावित Bullish Reversal का संकेत है, निश्चित तेजी का वादा नहीं।

## Real Chart: HDFC Bank

![HDFC Bank का 23 सितंबर-5 अक्टूबर 2026 Daily Chart, Bullish Engulfing और अगले सत्र की गिरावट](/bullish-engulfing-real-chart.png)

शेयर: HDFC Bank | Exchange: NSE | Timeframe: Daily
Chart अवधि: 23 सितंबर-5 अक्टूबर 2026
Pattern की तारीखें: 30 सितंबर और 1 अक्टूबर 2026

23 सितंबर का Close ₹737.25 था, जो 30 सितंबर को ₹708.70 रह गया। बीच में उतार-चढ़ाव था, लेकिन Pattern से पहले की इस छोटी अवधि में कीमत कमजोर हुई थी।

## पहली Candle: 30 सितंबर

Open ₹711.50 था और Close ₹708.70। Close नीचे होने से Candle लाल बनी। उसकी Body ₹708.70-₹711.50 के बीच है, यानी ₹2.80 की।

## दूसरी Candle: 1 अक्टूबर

Open ₹708.40 और Close ₹721.20 था। Close ऊपर होने से Candle हरी बनी। उसकी Body ₹708.40-₹721.20 के बीच है, यानी ₹12.80 की।

दो तुलना करें:

- ₹708.40, पिछली Candle के Close ₹708.70 से नीचे है
- ₹721.20, पिछली Candle के Open ₹711.50 से ऊपर है

इसलिए Green Body ने Red Body का पूरा Price Range ढक लिया। Chart में इसी कारण इसे Bullish Engulfing के रूप में चिह्नित किया गया है।

## दोनों Bodies को पास से देखें

![HDFC Bank की 30 सितंबर और 1 अक्टूबर 2026 Candles में Green Body द्वारा Red Body को पूरा ढकना](/bullish-engulfing-body-detail.png)

पीली पट्टी पहली Red Candle की Body का क्षेत्र दिखाती है। Green Candle इस पट्टी के नीचे से शुरू होकर काफी ऊपर बंद होती है। सिर्फ Green Candle का बड़ा होना पर्याप्त नहीं; उसका Open और Close सही स्थान पर होना भी जरूरी है।

## Pattern बनने के बाद क्या हुआ?

अगले कारोबारी सत्र, 5 अक्टूबर को शेयर ₹731.95 पर खुला और ₹734.20 तक पहुँचा। यह Pattern की दूसरी Candle के High ₹721.30 से ऊपर था।

लेकिन उसी दिन भाव पलट गया और ₹704.80 पर बंद हुआ। यह दोनों Pattern Candles के सबसे निचले Low ₹707.10 से भी नीचे था।

अर्थात Pattern बना, शुरुआत में ऊपर भाव भी मिला, लेकिन तेजी टिक नहीं सकी। इस उदाहरण में बाद की Candle ने Bullish Reversal की उम्मीद को कमजोर किया।

## Confirmation का मतलब समझें

Pattern की पहचान और उसके बाद मजबूती की पुष्टि अलग बातें हैं। कोई Trader अगली Candle की मजबूती देखता है; कोई Pattern High के ऊपर Close की शर्त रखता है। पहले अपनी कसौटी स्पष्ट करें।

हमारे उदाहरण में यदि शर्त अगली Daily Candle का ₹721.30 से ऊपर Close होना हो, तो वह पूरी नहीं हुई। High के ऊपर खुलना और वहीं से ऊपर बंद होना एक जैसी बात नहीं है।

यह एक ऐतिहासिक उदाहरण है, Pattern की सफलता-दर का Backtest नहीं। इससे हर Bullish Engulfing के असफल होने का निष्कर्ष भी नहीं निकलता।

## Beginners की आम गलतियाँ

- हर बड़ी Green Candle को Engulfing मान लेना
- पहले का Trend देखे बिना केवल दो Candles चुनना
- Body और Wick को मिला देना
- चल रही Candle को पूरा हुआ Pattern मान लेना
- Pattern को पक्का Buy Signal समझना

## अभ्यास कैसे करें?

पुराने Chart पर पहले केवल दो Candles और उनका पिछला Trend देखें। Open और Close लिखकर Body की शर्त जाँचें। फिर अगली Candle खोलें और देखें कि आपकी तय Confirmation मिली या नहीं।

सफल और असफल दोनों उदाहरण नोट करें। इस तरह Pattern पहचानने और उसके परिणाम को अलग-अलग समझने की आदत बनेगी।

यह लेख शिक्षा के लिए है, किसी शेयर को खरीदने या बेचने की सलाह नहीं।

## अक्सर पूछे जाने वाले सवाल

**1. Bullish Engulfing कितनी Candles का Pattern है?**
दो Candles का — पहली लाल और दूसरी हरी, जिसकी Body पहली की Body को ढकती है।

**2. क्या Wicks को भी ढकना जरूरी है?**
नहीं। मूल कसौटी Real Body की है, पूरी High-Low Range की नहीं।

**3. क्या हर बड़ी Green Candle Bullish Engulfing है?**
नहीं। पहली Candle से Open-Close का संबंध और पहले का Trend भी देखें।

**4. क्या Pattern के बाद तेजी निश्चित है?**
नहीं। वास्तविक HDFC Bank उदाहरण में अगले सत्र का Close Pattern Low से नीचे रहा।

**5. क्या High के ऊपर जाना और ऊपर Close होना एक ही Confirmation है?**
नहीं। कीमत दिन में ऊपर जाकर नीचे लौट सकती है। कौन-सी कसौटी इस्तेमाल करनी है, पहले तय करें।`,
    author: "HoshiyarStock",
    date: "2026-10-07",
    readTime: 8,
    cover: "/bullish-engulfing-pattern-hindi.png",
  },
  {
    id: "p8",
    slug: "support-resistance-real-chart-hindi",
    title: "Support और Resistance क्या हैं? Real Chart से Zones पहचानना सीखें",
    category: "Market Gyaan",
    tags: ["support resistance", "market gyaan", "price action", "breakout", "retest", "chart reading"],
    excerpt: "Reliance के वास्तविक Candlestick Chart से सीखें कि Support टूटकर वापस कैसे मिल सकता है और वही Zone बाद में दोबारा क्यों टूट सकता है।",
    content: `कभी शेयर एक भाव के आसपास बार-बार रुकता है, तो कभी उसी जगह से अचानक निकल जाता है। Chart पर इन इलाकों को Support और Resistance के रूप में समझा जाता है। लेकिन कोई Zone ऐसी दीवार नहीं है जिसे कीमत तोड़ ही न सके।

Reliance के वास्तविक Chart से समझते हैं कि Zones कैसे चुने जाते हैं और उनके टूटने के बाद क्या देखना चाहिए।

## Support क्या है?

Support वह Price Area है जहाँ गिरावट के दौरान खरीदारी का दबाव कीमत को रुकने या वापस ऊपर जाने में मदद कर सकता है। इसे संभावित सहारा समझें, पक्का Bottom नहीं।

## Resistance क्या है?

Resistance वह Price Area है जहाँ ऊपर जाती कीमत को बिकवाली के दबाव का सामना करना पड़ सकता है। यहाँ तेजी रुक सकती है, लेकिन पर्याप्त खरीदारी आने पर कीमत इस क्षेत्र के ऊपर भी निकल सकती है।

## एक Line के बजाय Zone क्यों?

कीमत हर बार ठीक एक ही रुपये-पैसे पर नहीं मुड़ती। आस-पास के High, Low और Close देखकर एक संकरा क्षेत्र बनाना उपयोगी हो सकता है। Zone की चौड़ाई शेयर की चाल और Timeframe के अनुसार बदलती है। सभी शेयरों के लिए कोई एक तय चौड़ाई नहीं है।

## Real Chart: Reliance, 15-28 सितंबर 2026

इस Chart में NSE:RELIANCE के वास्तविक Daily Open, High, Low और Close इस्तेमाल किए गए हैं। पूरे चुने हुए समय के सभी 10 कारोबारी सत्र दिखाए गए हैं।

- हरा क्षेत्र: ₹1,232-₹1,240 का चुना गया Support Zone
- लाल क्षेत्र: ₹1,250-₹1,260 का चुना गया Resistance Zone

ये Zones ऐतिहासिक Chart को समझाने के लिए हमारा विश्लेषण हैं। ये Exchange के घोषित Levels या आज की Buy/Sell Calls नहीं हैं। दूसरे विश्लेषक थोड़े अलग Zones चुन सकते हैं।

## इन Zones को चुनने का आधार क्या है?

15, 16 और 17 सितंबर के Low क्रमशः ₹1,235.30, ₹1,240.00 और ₹1,238.50 थे। ये पास-पास हैं। इन्हें देखते हुए ₹1,232-₹1,240 को एक शैक्षिक Support Area माना गया है; किनारों पर थोड़ा अंतर रखा गया है।

इन्हीं तारीखों के High ₹1,259.40, ₹1,255.00 और ₹1,253.40 थे। इसलिए ऊपर ₹1,250-₹1,260 का क्षेत्र चुना गया। 23 सितंबर का High ₹1,252.80 भी इसी क्षेत्र में रहा।

इस तरह Zone का आधार Chart में दिखे भाव हैं, कोई मनमाना गोल नंबर नहीं। फिर भी इसे चुनने में विश्लेषक का निर्णय शामिल है।

## 18 सितंबर: Support के नीचे Close

18 सितंबर को शेयर ₹1,226.40 पर बंद हुआ, यानी चुने हुए Support Zone के नीचे। इसे इस Zone के संदर्भ में Breakdown कह सकते हैं।

![18 सितंबर का Zone के नीचे Close और 21 सितंबर की Zone के ऊपर वापसी — Failed Breakdown](/false-breakdown-real-chart.png)

लेकिन 21 सितंबर को Low ₹1,232.50 रहा और Close ₹1,247.40 पर पहुँचा — Support Zone के ऊपर वापसी।

इस बाद की वापसी को देखते हुए 18 सितंबर के Break को इस उदाहरण में Failed Breakdown की तरह पढ़ सकते हैं। यह निष्कर्ष अगली Candle आने के बाद मिलता है; 18 सितंबर को पहले से निश्चित नहीं था।

## 24 सितंबर: वही Support फिर टूटा

24 सितंबर का Close ₹1,219.20 था। 25 सितंबर को हल्की Recovery के बाद Close ₹1,226.00 रहा, जो Zone से नीचे था। 28 सितंबर का Close ₹1,197.60 तक आया।

![24 सितंबर के बाद Support का दोबारा टूटना और Zone के नीचे बने रहना](/support-breakdown-followthrough-real-chart.png)

इस बार दिखाई गई अगली Candles में कीमत पुराने Support के ऊपर टिककर वापस नहीं आई। एक बार False Breakdown होने का मतलब यह नहीं कि वह Zone हमेशा सुरक्षित रहेगा।

## Breakout और False Breakout क्या हैं?

Resistance के ऊपर निकलने को आम तौर पर ऊपर की ओर Breakout और Support के नीचे निकलने को Breakdown कहते हैं।

जब कीमत बाहर निकलकर जल्दी पुराने क्षेत्र में लौट आए और उस दिशा में चाल टिक न सके, तो उसे Failed या False Break कहा जा सकता है। ऊपर दिखाया मामला नीचे की ओर Failed Breakdown का उदाहरण है।

सिर्फ Wick के बाहर जाने और Candle के बाहर Close होने में फर्क है। फिर भी Close अकेले सफल Break की गारंटी नहीं है — हमारे Chart में 18 सितंबर इसका उदाहरण है।

## Retest क्या होता है?

Break के बाद कीमत जब वापस उसी टूटे हुए Zone के पास आती है, तो उसे Retest कहते हैं। कभी पुराना Resistance नया Support बन सकता है और पुराना Support नया Resistance। ऐसा होना जरूरी नहीं।

केवल समझाने के लिए काल्पनिक उदाहरण: ₹500-₹505 का Resistance ऊपर टूटे, फिर कीमत लौटकर इसी क्षेत्र के आसपास सहारा पाए और ऊपर बढ़े। इसे सफल Retest की संभावित व्याख्या माना जा सकता है।

हमारे Real Chart में 24 सितंबर के Breakdown के बाद 25 सितंबर का High ₹1,227.40 था। यह पुराने ₹1,232-₹1,240 Zone तक नहीं पहुँचा। इसलिए इसे उस Zone का पूरा Retest नहीं कहेंगे।

## Beginners के लिए अभ्यास

पहले Timeframe चुनें। पास-पास के पुराने Turning Points से Zones बनाएँ, फिर Chart की अगली Candles एक-एक करके खोलें। दर्ज करें कि कीमत Zone पर रुकी, बाहर बंद हुई या लौट आई।

बाद की चाल देखकर पुराने Zones बार-बार बदलने से बचें। वास्तविक समय में आपके पास भविष्य की Candles नहीं होतीं। यह अभ्यास पहचान सिखाता है, मुनाफे का प्रमाण नहीं।

यह लेख शैक्षिक जानकारी है, किसी शेयर को खरीदने या बेचने की सलाह नहीं।

## अक्सर पूछे जाने वाले सवाल

**1. Support और Resistance में क्या अंतर है?**
Support पर गिरावट रुकने की संभावना देखी जाती है; Resistance पर ऊपर की चाल रुकने की। दोनों टूट सकते हैं।

**2. क्या Support एक निश्चित Price होता है?**
उसे एक Price Level या छोटे Zone के रूप में देखा जा सकता है। कीमत हर बार ठीक एक बिंदु से नहीं मुड़ती।

**3. False Breakdown क्या है?**
Support के नीचे जाने के बाद कीमत जल्दी पुराने क्षेत्र में लौट आए और गिरावट टिक न सके, तो उसे Failed Breakdown की तरह पढ़ा जा सकता है।

**4. क्या हर Breakout के बाद Retest आता है?**
नहीं। कीमत बिना Retest आगे बढ़ सकती है, और Retest आने पर भी Zone टिकना जरूरी नहीं।

**5. क्या ये Reliance के आज के Levels हैं?**
नहीं। ये 15-28 सितंबर 2026 के ऐतिहासिक डेटा पर शैक्षिक रूप से चुने गए Zones हैं।`,
    author: "HoshiyarStock",
    date: "2026-10-06",
    readTime: 8,
    cover: "/support-resistance-hindi.png",
  },
  {
    id: "p7",
    slug: "moving-average-real-chart-hindi",
    title: "Moving Average क्या है? Reliance के Real Chart से समझें",
    category: "Basics",
    tags: ["moving average", "sma", "stock market basics", "reliance", "technical analysis", "chart reading"],
    excerpt: "Reliance के Real Chart से जानिए कि Price का SMA के ऊपर होना और SMA का ऊपर बढ़ना अलग बातें क्यों हैं।",
    content: `एक शेयर अपने Moving Average के ऊपर बंद हुआ। क्या इसका मतलब Trend ऊपर मुड़ गया? हमेशा नहीं। Reliance के वास्तविक Chart में ऐसा उदाहरण दिखता है जहाँ Close, Average के ऊपर है, लेकिन Average खुद नीचे आ रहा है।

इस लेख में NSE:RELIANCE के 1 सितंबर से 5 अक्टूबर 2026 तक के वास्तविक Daily भावों से समझेंगे कि Moving Average कैसे बनता है और उसे पढ़ते समय क्या देखना चाहिए।

यह एक ऐतिहासिक उदाहरण है। इसमें 6 अक्टूबर की चल रही Candle शामिल नहीं है।

## Moving Average क्या है?

Moving Average कीमतों का औसत है, जो हर नई अवधि के साथ बदलता है। यहाँ हम Simple Moving Average यानी SMA समझेंगे।

5-session SMA = पिछले पाँच कारोबारी सत्रों के Closing Prices का योग ÷ 5

हर नए सत्र पर नया Close शामिल होता है और पाँच-सत्र की सूची से सबसे पुराना Close बाहर हो जाता है।

ध्यान दें: यहाँ कारोबारी सत्र गिने जाते हैं, लगातार पाँच Calendar Days नहीं।

## Real Chart कैसे पढ़ें?

इस लेख के साथ दिए Chart में:

- हरी-लाल Candles वास्तविक Daily Open, High, Low और Close दिखाती हैं
- पीली Line, Closing Prices से निकाला गया 5-session SMA है
- नीचे तारीखें और बाईं ओर भाव रुपये में हैं

Chart में 1 सितंबर से 5 अक्टूबर तक के सभी 23 कारोबारी सत्र शामिल हैं। शुरुआती SMA निकालने के लिए 26-31 अगस्त के चार पिछले कारोबारी Close भी इस्तेमाल किए गए हैं।

इसलिए पहली दिखाई गई Candle से ही Average उपलब्ध है।

![1 सितंबर से 5 अक्टूबर 2026 का Reliance NSE Daily Candlestick Chart और पीली 5-session SMA Line](/reliance-moving-average-real-chart.png)

## असली भावों से SMA निकालें

5 अक्टूबर 2026 तक के आखिरी पाँच पूरे कारोबारी सत्रों के Close देखें:

- 28 सितंबर: ₹1,197.60
- 29 सितंबर: ₹1,182.00
- 30 सितंबर: ₹1,187.00
- 1 अक्टूबर: ₹1,167.70
- 5 अक्टूबर: ₹1,186.40

इनका योग = ₹5,920.70

5-session SMA = ₹5,920.70 ÷ 5 = ₹1,184.14

5 अक्टूबर का Close ₹1,186.40 था, यानी उस दिन कीमत अपने SMA से ₹2.26 ऊपर बंद हुई।

लेकिन यही पूरी कहानी नहीं है।

## Chart में तीन बातें ध्यान से देखें

### 1. सितंबर की शुरुआत के बाद Average नीचे मुड़ा

7 सितंबर को 5-session SMA ₹1,311.22 था। 8 सितंबर को यह ₹1,308.40 रह गया और आगे कमजोरी दिखी।

Chart की पीली Line छोटी अवधि के औसत में यह गिरावट साफ दिखाती है।

### 2. बीच में मजबूती आई, लेकिन टिक नहीं सकी

21 सितंबर का Close ₹1,247.40 था, जबकि SMA ₹1,238.60 था। यानी कीमत Average से ऊपर थी।

22 और 23 सितंबर के Close भी अपने SMA के ऊपर रहे। लेकिन 24 सितंबर को Close फिर Average के नीचे आ गया।

इस उदाहरण में Average के ऊपर कुछ Close मिलना लगातार तेजी की गारंटी नहीं बना। यह इसी ऐतिहासिक Chart का अवलोकन है, किसी रणनीति का पूर्ण Backtest नहीं।

### 3. 5 अक्टूबर का Close ऊपर था, लेकिन SMA की दिशा नीचे

1 अक्टूबर का SMA ₹1,192.06 था। 5 अक्टूबर को यह घटकर ₹1,184.14 हुआ।

फिर भी 5 अक्टूबर का Close ₹1,186.40 होने से कीमत Average के थोड़ा ऊपर थी।

इसलिए दो सवाल अलग-अलग पूछें:

- Price, Average के ऊपर है या नीचे?
- Average खुद ऊपर जा रहा है या नीचे?

इन दोनों बातों को एक ही संकेत मानना गलत हो सकता है।

## केवल Moving Average पर निर्भर क्यों न रहें?

SMA पिछली कीमतों से बनता है, इसलिए उसमें देरी यानी Lag होता है। लंबी अवधि का SMA आम तौर पर अधिक Smooth होता है, लेकिन बदलाव को देर से दिखा सकता है।

5-session SMA यहाँ गणना समझाने के लिए लिया गया है। इसे हर शेयर और हर परिस्थिति के लिए सबसे अच्छा Trading Setting न समझें।

Price का Average के ऊपर जाना अपने-आप Buy Recommendation नहीं है।

## खुद अभ्यास कैसे करें?

अपने Chart में ये Settings चुनें:

- Symbol: RELIANCE
- Exchange: NSE
- Timeframe: Daily
- Indicator: Simple Moving Average
- Length: 5
- Source: Close

फिर 5 अक्टूबर 2026 का SMA इस लेख की गणना से मिलाएँ। Exchange, डेटा स्रोत या Adjusted Data settings अलग होने पर थोड़ा अंतर हो सकता है।

अभ्यास करते समय केवल Price Crossing न देखें। Average की दिशा भी लिखें और अगली कुछ Candles में क्या हुआ, उसे नोट करें।

यह लेख शैक्षिक जानकारी है, किसी शेयर को खरीदने या बेचने की सलाह नहीं।

## अक्सर पूछे जाने वाले सवाल

**प्रश्न 1: Moving Average क्या है?**
यह चुनी हुई अवधि की कीमतों का औसत है, जिसे हर नई अवधि पर दोबारा निकाला जाता है।

**प्रश्न 2: 5-session SMA कैसे निकालते हैं?**
आखिरी पाँच कारोबारी सत्रों के Closing Prices को जोड़कर पाँच से भाग देते हैं।

**प्रश्न 3: क्या Price का SMA के ऊपर होना तेजी की गारंटी है?**
नहीं। इस उदाहरण में 5 अक्टूबर का Close SMA से ऊपर था, जबकि SMA पिछले सत्र से नीचे था।

**प्रश्न 4: क्या यहाँ दिया Chart असली डेटा पर बना है?**
हाँ। इसमें NSE:RELIANCE के 1 सितंबर-5 अक्टूबर 2026 के वास्तविक Daily OHLC भाव हैं। Chart और SMA गणना स्वतंत्र रूप से तैयार किए गए हैं।

**प्रश्न 5: क्या यह Live Chart है?**
नहीं। यह एक निश्चित ऐतिहासिक अवधि का शैक्षिक Chart है।`,
    author: "HoshiyarStock",
    date: "2026-10-06",
    readTime: 8,
    cover: "/moving-average-real-chart-hindi.png",
  },
  {
    id: "p6",
    slug: "hammer-candlestick-pattern-hindi",
    title: "Hammer Candlestick क्या है? पहचान, Confirmation और आम गलतियाँ",
    category: "Candle Patterns",
    tags: ["hammer candlestick", "candle patterns", "technical analysis", "chart reading", "share market hindi"],
    excerpt: "गिरावट के बाद बनने वाली Hammer Candle को पहचानें। Shape, Trend और Confirmation को आसान उदाहरण से समझें।",
    content: `लगातार गिरते Chart पर नीचे की ओर लंबी Wick वाली एक छोटी Candle दिखाई देती है। क्या गिरावट खत्म हो गई? जरूरी नहीं। यह Hammer हो सकती है, लेकिन उसका सही मतलब जानने के लिए Candle की बनावट के साथ पहले का Trend भी देखना पड़ता है।

## Hammer Candle की पहचान कैसे करें?

Hammer एक Single-Candle Pattern है, जिसे गिरावट के बाद संभावित Bullish Reversal के संकेत के रूप में देखा जाता है। यानी कीमत की दिशा नीचे से ऊपर बदलने की संभावना — पक्की भविष्यवाणी नहीं।

इसकी सामान्य पहचान है:

- छोटी Body, Candle की पूरी Range के ऊपरी हिस्से में
- लंबी Lower Wick, आम तौर पर Body से कम-से-कम दो गुनी
- बहुत छोटी Upper Wick या उसका न होना
- Pattern बनने से पहले गिरावट का होना

सिर्फ लंबी Lower Wick देखकर हर Candle को Hammer कहना सही नहीं है। Chart में उसकी जगह भी मायने रखती है।

![Hammer Candle की छोटी Body, लंबी Lower Wick और पहले का Downtrend दिखाता Diagram](/hammer-candlestick-hd.png)

## ₹200 के उदाहरण से समझें

मान लीजिए एक काल्पनिक शेयर हाल की कई Candles में गिरा है। उसके बाद एक Candle के भाव हैं:

- Open: ₹200
- High: ₹203
- Low: ₹194
- Close: ₹202

अब इसकी बनावट निकालें:

- Body = ₹202 − ₹200 = ₹2
- Lower Wick = ₹200 − ₹194 = ₹6
- Upper Wick = ₹203 − ₹202 = ₹1

यहाँ Lower Wick, Body की तीन गुनी है और Body ऊपर के हिस्से में है। पहले की गिरावट के साथ यह Hammer जैसी बनावट का उदाहरण है।

ये भाव केवल समझाने के लिए हैं, किसी वास्तविक शेयर की Trading Call नहीं।

## लंबी Lower Wick का मतलब क्या है?

कीमत अवधि के दौरान नीचे गई, लेकिन वहाँ टिक नहीं सकी और निचले स्तर से काफी ऊपर बंद हुई। इसे अक्सर नीचे के भावों पर खरीदारी लौटने के संकेत की तरह पढ़ा जाता है।

फिर भी एक Candle पूरे समय के सभी सौदों का क्रम नहीं बताती। अगले सत्र में Selling दोबारा आ सकती है। Hammer को गिरावट खत्म होने की घोषणा न समझें।

## क्या Hammer हमेशा Green होती है?

नहीं। Hammer, Green या Red दोनों हो सकती है। Colour से ज्यादा उसकी Shape और पहले का Trend जरूरी है।

केवल Green होने के कारण किसी Candle को मजबूत Buy Signal मान लेना गलत होगा।

## Confirmation कैसे समझें?

एक सामान्य तरीका है अगली Candle का Hammer के High से ऊपर Close होना देखना। यह आगे खरीदारी जारी रहने का प्रमाण जोड़ता है, हालांकि Reversal की गारंटी नहीं देता।

हमारे उदाहरण में Hammer का High ₹203 है। अगली Candle का ₹204 पर Close होना इस कसौटी पर Confirmation होगा।

सिर्फ ₹203 के ऊपर क्षणभर जाना और वापस नीचे बंद होना अलग स्थिति है।

Support, Volume और आसपास के Resistance से अतिरिक्त संदर्भ मिल सकता है। Confirmation की प्रतीक्षा करने पर कीमत पहले से ऊपर पहुँच सकती है, इसलिए जोखिम भी बदलता है।

## Hammer और Hanging Man में अंतर

दोनों की बनावट मिलती-जुलती हो सकती है:

- गिरावट के बाद यही आकार → Hammer
- तेजी के बाद यही आकार → Hanging Man

इसलिए पहले की Candles को छिपाकर सिर्फ एक Candle से निष्कर्ष न निकालें। Pattern की पहचान में उसका स्थान उतना ही जरूरी है जितना उसका आकार।

## Pattern कब कमजोर पड़ सकता है?

Hammer के Low के नीचे फिर गिरावट आना संभावित Recovery वाली व्याख्या को कमजोर कर सकता है।

हमारे उदाहरण में ₹194 के नीचे जाना इसी तरह का संकेत होगा।

कुछ Traders Hammer के Low के नीचे Stop-Loss रखते हैं, लेकिन यह हर स्थिति के लिए तय नियम नहीं है। Gap या Slippage में निकासी अपेक्षित भाव से अलग हो सकती है।

## Beginners के लिए अभ्यास

पुराने Chart में दस संभावित Hammer खोजें। हर उदाहरण में लिखें:

1. पहले का Trend कैसा था?
2. Body कितनी बड़ी थी?
3. Lower Wick, Body से कितनी गुनी थी?
4. अगली Candle कहाँ Close हुई?
5. क्या बाद में Hammer का Low टूट गया?

सफल दिखने वाले उदाहरणों के साथ असफल उदाहरण भी शामिल करें। इससे Pattern को पहचानने और उसकी सीमाएँ समझने में मदद मिलेगी।

यह लेख केवल शिक्षा के लिए है, किसी शेयर को खरीदने या बेचने की सलाह नहीं।

## अक्सर पूछे जाने वाले सवाल

**प्रश्न 1: Hammer Candle कब बनती है?**
गिरावट के बाद छोटी ऊपरी Body और लंबी Lower Wick वाली Candle बनने पर उसे Hammer के रूप में पहचाना जा सकता है।

**प्रश्न 2: Hammer की Lower Wick कितनी लंबी होनी चाहिए?**
आम कसौटी में Lower Wick, Body से कम-से-कम दो गुनी होती है। Upper Wick छोटी या अनुपस्थित होती है।

**प्रश्न 3: क्या Red Hammer भी हो सकती है?**
हाँ। Colour के साथ Shape और पहले का Trend देखना जरूरी है।

**प्रश्न 4: Hammer का Confirmation क्या है?**
अगली Candle का Hammer के High से ऊपर Close होना एक सामान्य Confirmation कसौटी है, लेकिन इससे लाभ निश्चित नहीं होता।

**प्रश्न 5: Hammer और Hanging Man में क्या अंतर है?**
मिलती-जुलती बनावट गिरावट के बाद Hammer और तेजी के बाद Hanging Man कहलाती है।`,
    author: "HoshiyarStock",
    date: "2026-10-06",
    readTime: 7,
    cover: "/hammer-candlestick-pattern-hindi.png",
  },
  {
    id: "p5",
    slug: "candlestick-chart-basics-hindi",
    title: "कैंडलस्टिक क्या है? चार्ट पढ़ना सीखें आसान उदाहरण से",
    category: "Basics",
    tags: ["candlestick", "stock market basics", "technical analysis", "ohlc", "hindi finance"],
    excerpt: "चार्ट की हरी और लाल कैंडल को समझना सीखें। आसान उदाहरणों से जानिए OHLC, Body, Wick और Timeframe का मतलब।",
    content: `## कैंडलस्टिक क्या है?

शेयर बाजार का चार्ट खोलते ही हरी और लाल कैंडल देखकर उलझन होती है? इन आकृतियों को समझने के लिए पहले सिर्फ चार भाव जानने हैं — Open, High, Low और Close। यही चार जानकारी बताती हैं कि चुने हुए समय में कीमत कहाँ से शुरू हुई, कहाँ तक गई और कहाँ बंद हुई।

कैडलस्टिक किसी तय समय की कीमतों को दिखाने का तरीका है। 5 मिनट के चार्ट की एक कैंडल पाँच मिनट का डेटा दिखाती है, जबकि Daily चार्ट की एक कैंडल एक कारोबारी दिन का। कई कैंडल मिलकर Candlestick Chart बनाती हैं।

OHLC का अर्थ:

- **Open:** उस अवधि का शुरुआती भाव
- **High:** उस अवधि का सबसे ऊँचा भाव
- **Low:** उस अवधि का सबसे निचला भाव
- **Close:** उस अवधि का समापन भाव

## Body और Wick कैसे पहचानें?

कैंडल का मोटा आयताकार हिस्सा Body है। यह Open और Close के बीच का अंतर दिखाता है। ऊपर और नीचे की पतली रेखाओं को Wick या Shadow कहते हैं। ऊपरी सिरा High और निचला सिरा Low दिखाता है। कुछ कैंडल में एक या दोनों Wick नहीं होतीं।

![Bullish और Bearish कैंडल में Open, High, Low, Close, Body और Wick](/candlestick-basics-hd.svg)

## हरी और लाल कैंडल में क्या अंतर है?

सामान्य हरी-लाल सेटिंग में Close, Open से ऊपर हो तो कैंडल हरी बनती है। इसे Bullish Candle कहते हैं। Close, Open से नीचे हो तो लाल यानी Bearish Candle बनती है। रंग चार्ट की सेटिंग से बदले भी जा सकते हैं।

हरी कैंडल में Body का निचला किनारा Open और ऊपरी किनारा Close है। लाल कैंडल में ऊपरी किनारा Open और निचला किनारा Close है।

## ₹100 वाले उदाहरण से समझें

मान लीजिए किसी काल्पनिक शेयर की एक पूरी हो चुकी कैंडल में Open ₹100, High ₹108, Low ₹97 और Close ₹105 है।

यह हरी कैंडल होगी। Body ₹100 से ₹105 तक, ऊपरी Wick ₹105 से ₹108 तक और निचली Wick ₹97 से ₹100 तक होगी। Body का आकार ₹5 और पूरी Range ₹11 है।

अब दूसरे काल्पनिक उदाहरण में Open ₹105, High ₹108, Low ₹97 और Close ₹100 रखें। यह लाल कैंडल होगी, लेकिन इसकी Body का आकार और पूरी Range पहले उदाहरण जितनी ही होगी।

## क्या हरी कैंडल का मतलब पिछले दिन से तेजी है?

जरूरी नहीं। सामान्य कैंडल का रंग उसी अवधि के Open और Close की तुलना से तय होता है।

मान लीजिए पिछला Close ₹110 था। आज शेयर ₹100 पर खुला और ₹105 पर बंद हुआ। आज की कैंडल हरी होगी, फिर भी भाव पिछले Close से ₹5 नीचे है। इसलिए कैंडल का रंग और पिछले दिन के मुकाबले बदलाव अलग-अलग देखें।

## कैंडल की बनावट क्या बताती है?

बड़ी Body, Open और Close के बीच बड़ा अंतर दिखाती है। छोटी Body छोटा अंतर दिखाती है; इसका मतलब यह नहीं कि पूरे समय कीमत बहुत कम हिली। लंबी Wicks वाली छोटी Body में High और Low का अंतर बड़ा हो सकता है।

लंबी ऊपरी Wick बताती है कि कीमत ऊँचे स्तर तक पहुँची, लेकिन वहाँ बंद नहीं हुई। लंबी निचली Wick बताती है कि भाव नीचे गया और उस निचले स्तर से ऊपर बंद हुआ। केवल इस बनावट से अगली चाल पक्की नहीं होती।

जब Open और Close लगभग बराबर हों, तो बहुत छोटी Body वाली आकृति को Doji कहा जा सकता है। इसका अर्थ समझने के लिए आसपास की कैंडल और पहले का Trend भी देखें।

## Timeframe बदलने से क्या बदलता है?

एक ही शेयर की 5 मिनट वाली कैंडल लाल और Daily कैंडल हरी हो सकती है, क्योंकि दोनों अलग समय का डेटा दिखाती हैं। तुलना करते समय Timeframe जरूर जाँचें।

चल रही कैंडल का अंतिम Close अभी तय नहीं होता। उसका रंग, Body और Wicks बदल सकते हैं। सीखते समय पूरी हो चुकी कैंडल से शुरुआत करना आसान रहता है।

## नए लोग कौन-सी गलतियाँ करते हैं?

केवल हरी कैंडल देखकर खरीदना, लाल देखकर बेचना और एक आकृति को निश्चित भविष्यवाणी मान लेना आम गलतियाँ हैं। कैंडल के साथ Trend, Volume और आसपास के महत्वपूर्ण भाव स्तर भी समझें। कोई एक पैटर्न लाभ की गारंटी नहीं देता।

अभ्यास के लिए किसी पुराने चार्ट की दस पूरी हो चुकी कैंडल चुनें। हर कैंडल का OHLC लिखें और Body तथा Wicks पहचानें। फिर देखें कि आपकी पढ़ी हुई जानकारी चार्ट से मेल खाती है या नहीं।

यह लेख शैक्षिक जानकारी के लिए है, किसी शेयर को खरीदने या बेचने की सलाह नहीं।

## अक्सर पूछे जाने वाले सवाल

**1. कैंडलस्टिक में OHLC क्या है?**
OHLC का अर्थ Open, High, Low और Close है। ये तय अवधि के शुरुआती, सबसे ऊँचे, सबसे निचले और समापन भाव हैं।

**2. क्या हरी कैंडल देखकर शेयर खरीदना चाहिए?**
केवल रंग के आधार पर निर्णय नहीं लेना चाहिए। हरी कैंडल उस अवधि में Close के Open से ऊपर होने की जानकारी देती है, भविष्य के लाभ की गारंटी नहीं।

**3. Body और Wick में क्या अंतर है?**
Body, Open और Close के बीच का हिस्सा है। Wicks, Body से High और Low तक का विस्तार दिखाती हैं।

**4. क्या एक कैंडल हमेशा एक दिन की होती है?**
नहीं। उसकी अवधि चुने हुए Timeframe पर निर्भर है, जैसे 5 मिनट, 1 घंटा या 1 कारोबारी दिन।`,
    author: "HoshiyarStock",
    date: "2026-10-05",
    readTime: 6,
    cover: "/candlestick-chart-basics-hindi.png",
  },
];
