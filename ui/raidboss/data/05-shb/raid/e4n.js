'use strict';

[{
  zoneRegex: {
    en: /^Eden's Gate: Sepulture$/,
    cn: /^伊甸希望乐园 \(觉醒之章4\)$/,
    ko: /^희망의 낙원 에덴: 각성편 \(4\)$/,
  },
  timelineFile: 'e4n.txt',
  triggers: [
    {
      id: 'E4N Voice of the Land',
      regex: Regexes.startsUsing({ id: '40F7', source: 'Titan', capture: false }),
      regexDe: Regexes.startsUsing({ id: '40F7', source: 'Titan', capture: false }),
      regexFr: Regexes.startsUsing({ id: '40F7', source: 'Titan', capture: false }),
      regexJa: Regexes.startsUsing({ id: '40F7', source: 'タイタン', capture: false }),
      regexCn: Regexes.startsUsing({ id: '40F7', source: '泰坦', capture: false }),
      regexKo: Regexes.startsUsing({ id: '40F7', source: '타이탄', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'E4N Earthen Fury',
      regex: Regexes.startsUsing({ id: '40F8', source: 'Titan', capture: false }),
      regexDe: Regexes.startsUsing({ id: '40F8', source: 'Titan', capture: false }),
      regexFr: Regexes.startsUsing({ id: '40F8', source: 'Titan', capture: false }),
      regexJa: Regexes.startsUsing({ id: '40F8', source: 'タイタン', capture: false }),
      regexCn: Regexes.startsUsing({ id: '40F8', source: '泰坦', capture: false }),
      regexKo: Regexes.startsUsing({ id: '40F8', source: '타이탄', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      infoText: {
        en: 'aoe + dot',
        de: 'AoE + DoT',
        fr: 'Dégâts de zone + dot',
        cn: 'AOE + dot',
        ko: '전체공격 + 도트뎀',
      },
    },
    {
      id: 'E4N Stonecrusher',
      regex: Regexes.startsUsing({ id: '40F9', source: 'Titan' }),
      regexDe: Regexes.startsUsing({ id: '40F9', source: 'Titan' }),
      regexFr: Regexes.startsUsing({ id: '40F9', source: 'Titan' }),
      regexJa: Regexes.startsUsing({ id: '40F9', source: 'タイタン' }),
      regexCn: Regexes.startsUsing({ id: '40F9', source: '泰坦' }),
      regexKo: Regexes.startsUsing({ id: '40F9', source: '타이탄' }),
      condition: function(data, matches) {
        return matches.target == data.me || data.role == 'tank' || data.role == 'healer';
      },
      response: Responses.tankBuster(),
    },
    {
      id: 'E4N Massive Landslide',
      regex: Regexes.startsUsing({ id: '40FA', source: 'Titan', capture: false }),
      regexDe: Regexes.startsUsing({ id: '40FA', source: 'Titan', capture: false }),
      regexFr: Regexes.startsUsing({ id: '40FA', source: 'Titan', capture: false }),
      regexJa: Regexes.startsUsing({ id: '40FA', source: 'タイタン', capture: false }),
      regexCn: Regexes.startsUsing({ id: '40FA', source: '泰坦', capture: false }),
      regexKo: Regexes.startsUsing({ id: '40FA', source: '타이탄', capture: false }),
      alertText: {
        en: 'Stand In Front',
        de: 'Vor ihm stehen',
        fr: 'Placez-vous devant',
        cn: '面前躲避',
        ko: '정면이 안전',
      },
    },
    {
      id: 'E4N Seismic Wave',
      regex: Regexes.startsUsing({ id: '40F2', source: 'Massive Boulder', capture: false }),
      regexDe: Regexes.startsUsing({ id: '40F2', source: 'Riesig(?:e|er|es|en) Felsen', capture: false }),
      regexFr: Regexes.startsUsing({ id: '40F2', source: 'Monolithe Géant', capture: false }),
      regexJa: Regexes.startsUsing({ id: '40F2', source: 'ジャイアントボルダー', capture: false }),
      regexCn: Regexes.startsUsing({ id: '40F2', source: '巨大岩石', capture: false }),
      regexKo: Regexes.startsUsing({ id: '40F2', source: '거대 바위', capture: false }),
      delaySeconds: 6,
      suppressSeconds: 10,
      infoText: {
        en: 'Hide Behind Boulder',
        de: 'Hinter Felsen verstecken',
        fr: 'Cachez-vous derrière le rocher',
        cn: '躲在石头后',
        ko: '돌 뒤에 숨기',
      },
    },
    {
      id: 'E4N Geocrush',
      regex: Regexes.startsUsing({ id: '40F6', source: 'Titan', capture: false }),
      regexDe: Regexes.startsUsing({ id: '40F6', source: 'Titan', capture: false }),
      regexFr: Regexes.startsUsing({ id: '40F6', source: 'Titan', capture: false }),
      regexJa: Regexes.startsUsing({ id: '40F6', source: 'タイタン', capture: false }),
      regexCn: Regexes.startsUsing({ id: '40F6', source: '泰坦', capture: false }),
      regexKo: Regexes.startsUsing({ id: '40F6', source: '타이탄', capture: false }),
      response: Responses.knockback('info'),
    },
    {
      id: 'E4N Fault Zone',
      regex: Regexes.startsUsing({ id: '4102', source: 'Titan', capture: false }),
      regexDe: Regexes.startsUsing({ id: '4102', source: 'Titan', capture: false }),
      regexFr: Regexes.startsUsing({ id: '4102', source: 'Titan', capture: false }),
      regexJa: Regexes.startsUsing({ id: '4102', source: 'タイタン', capture: false }),
      regexCn: Regexes.startsUsing({ id: '4102', source: '泰坦', capture: false }),
      regexKo: Regexes.startsUsing({ id: '4102', source: '타이탄', capture: false }),
      alertText: {
        en: 'Stand On Flank',
        de: 'Auf seiner Flanke stehen',
        fr: 'Placez-vous sur le flanc',
        cn: '两侧躲避',
        ko: '넓은쪽 옆면이 안전',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Titan': 'Titan',
        'Bomb Boulder': 'Bomber-Brocken',
        'Massive Boulder': 'Riesiger Felsen',
      },
      'replaceText': {
        'Fault Line': 'Bruchlinie',
        'Earthen Wheels': 'Gaia-Räder',
        'Geocrush': 'Kraterschlag',
        'Earthen Armor': 'Gaia-Panzer',
        'Fault Zone': 'Bruchzone',
        'Bomb Boulders': 'Tumulus',
        'Weight Of The Land': 'Gaias Gewicht',
        'Voice Of The Land': 'Aufschrei der Erde',
        'Left/Right Landslide': 'Linker/Rechter Bergsturz',
        'Leftward Landslide': 'Linker Bergsturz',
        'Explosion': 'Explosion',
        'Evil Earth': 'Grimm der Erde',
        'Aftershock': 'Nachbeben',
        'Magnitude 5.0': 'Magnitude 5.0',
        'Seismic Wave': 'Seismische Welle',
        'Crumbling Down': 'Felsfall',
        'Rightward Landslide': 'Rechter Bergsturz',
        'Massive Landslide': 'Gigantischer Bergsturz',
        'Earthen Gauntlets': 'Gaia-Armberge',
        'Cobalt Bomb': 'Kobaltbombe',
        'Bury': 'Begraben',
        'Earthen Fury': 'Gaias Zorn',
        'Stonecrusher': 'Felsbrecher',
        '(?<! )Landslide': 'Bergsturz',
      },
      '~effectNames': {
        'Brink of Death': 'Sterbenselend',
        'Physical Vulnerability Up': 'Erhöhte physische Verwundbarkeit',
        'Filthy': 'Dreck',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Titan': 'Titan',
        'Bomb Boulder': 'Bombo Rocher',
      },
      'replaceText': {
        'Fault Line': 'Ligne de faille',
        'Earthen Wheels': 'Pas tellurique',
        'Geocrush': 'Broie-terre',
        'Earthen Armor': 'Armure tellurique',
        'Fault Zone': 'Faille tectonique',
        'Bomb Boulders': 'Bombo rocher',
        'Weight of the Land': 'Poids de la terre',
        'Voice of the Land': 'Hurlement tellurique',
        'Left/Right Landslide': 'Glissement senestre/dextre',
        'Leftward Landslide': 'Glissement senestre',
        'Explosion': 'Explosion',
        'Evil Earth': 'Terre maléfique',
        'Aftershock': 'Répercussion',
        'Magnitude 5.0': 'Magnitude 5',
        'Seismic Wave': 'Ondes sismiques',
        'Crumbling Down': 'Chute de monolithes',
        'Rightward Landslide': 'Glissement dextre',
        'Massive Landslide': 'Glissement apocalyptique',
        'Earthen Gauntlets': 'Poing tellurique',
        'Cobalt Bomb': 'Bombo de cobalt',
        'Bury': 'Ensevelissement',
        'Earthen Fury': 'Fureur tellurique',
        'Stonecrusher': 'Éruption tellurique',
        '(?<! )Landslide': 'Glissement de terrain',
      },
      '~effectNames': {
        'Brink of Death': 'Mourant',
        'Physical Vulnerability Up': 'Vulnérabilité physique augmentée',
        'Filthy': 'Embourbement',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Titan': 'タイタン',
        'Bomb Boulder': 'ボムボルダー',
      },
      'replaceText': {
        'Fault Line': 'フォールトライン',
        'Earthen Wheels': '大地の車輪',
        'Geocrush': 'ジオクラッシュ',
        'Earthen Armor': '大地の鎧',
        'Fault Zone': 'フォールトゾーン',
        'Bomb Boulders': 'ボムボルダー',
        'Weight of the Land': '大地の重み',
        'Voice of the Land': '大地の叫び',
        'Left/Right Landslide': 'レフト/ライト・ランドスライド',
        'Leftward Landslide': 'レフト・ランドスライド',
        'Explosion': '爆散',
        'Evil Earth': 'イビルアース',
        'Aftershock': '余波',
        'Magnitude 5.0': 'マグニチュード5.0',
        'Seismic Wave': 'サイズミックウェーブ',
        'Crumbling Down': '岩盤崩落',
        'Earthen Fury': '大地の怒り',
        'Rightward Landslide': 'ライト・ランドスライド',
        'Massive Landslide': 'メガ・ランドスライド',
        'Earthen Gauntlets': '大地の手甲',
        'Cobalt Bomb': 'コバルトボム',
        'Bury': '衝撃',
        'Stonecrusher': 'ロッククラッシュ',
        '(?<! )Landslide': 'ランドスライド',
      },
      '~effectNames': {
        'Dropsy': '水毒',
        'Brink of Death': '衰弱［強］',
        'Physical Vulnerability Up': '被物理ダメージ増加',
        'Filthy': '汚泥',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Titan': '泰坦',
        'Bomb Boulder': '爆破岩石',
        'Massive Boulder': '巨大岩石',
      },
      'replaceText': {
        'Fault Line': '断层线',
        'Earthen Wheels': '大地之车轮',
        'Geocrush': '大地粉碎',
        'Earthen Armor': '大地之铠',
        'Fault Zone': '断裂带',
        'Bomb Boulders': '爆破岩石',
        'Weight [oO]f [tT]he Land': '大地之重',
        'Voice [oO]f [tT]he Land': '大地之号',
        'Left/Right Landslide': '左/右侧地裂',
        'Leftward Landslide': '左侧地裂',
        'Explosion': '大引爆',
        'Evil Earth': '邪土',
        'Aftershock': '余波',
        'Magnitude 5.0': '震级5.0',
        'Seismic Wave': '地震波',
        'Crumbling Down': '岩层崩落',
        'Earthen Fury': '大地之怒',
        'Rightward Landslide': '右侧地裂',
        'Massive Landslide': '百万地裂',
        'Earthen Gauntlets': '大地之手甲',
        'Cobalt Bomb': '钴弹',
        'Bury': '塌方',
        'Stonecrusher': '崩岩',
        '(?<! )Landslide': '地裂',
      },
      '~effectNames': {
        'Dropsy': '水毒',
        'Brink of Death': '濒死',
        'Physical Vulnerability Up': '物理受伤加重',
        'Filthy': '污泥',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Titan': '타이탄',
        'Bomb Boulder': '바위폭탄',
        'Massive Boulder': '거대 바위',
      },
      'replaceText': {
        'Fault Line': '단층선',
        'Earthen Wheels': '대지의 바퀴',
        'Geocrush': '대지 붕괴',
        'Earthen Armor': '대지의 갑옷',
        'Fault Zone': '단층대',
        'Bomb Boulders': '바위폭탄',
        'Weight [oO]f [tT]he Land': '대지의 무게',
        'Voice [oO]f [tT]he Land': '대지의 외침',
        'Left/Right Landslide': '좌/우측 산사태',
        'Leftward Landslide': '좌측 산사태',
        'Explosion': '폭산',
        'Evil Earth': '사악한 대지',
        'Aftershock': '여파',
        'Magnitude 5.0': '진도 5.0',
        'Seismic Wave': '지진파',
        'Crumbling Down': '암반 낙하',
        'Earthen Fury': '대지의 분노',
        'Rightward Landslide': '우측 산사태',
        'Massive Landslide': '대규모 산사태',
        'Earthen Gauntlets': '대지의 완갑',
        'Cobalt Bomb': '코발트 폭탄',
        'Bury': '충격',
        'Stonecrusher': '암석 붕괴',
        '(?<! )Landslide': '산사태',
      },
      '~effectNames': {
        'Dropsy': '물독',
        'Brink of Death': '쇠약강',
        'Physical Vulnerability Up': '받는 물리 피해량 증가',
        'Filthy': '진흙탕',
      },
    },
  ],
}];
