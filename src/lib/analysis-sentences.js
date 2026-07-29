(function initAnalysisSentenceLibrary(globalScope, factory) {
  const library = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = library;
  if (globalScope) globalScope.ODDS_ARCHIVE_ANALYSIS_SENTENCES = library;
}(typeof globalThis !== "undefined" ? globalThis : this, () => {
  const ANALYSIS_SENTENCE_LIBRARY_VERSION = "analysis-sentences-v1";
  const sentences = [];
  const headlines = {
    LOW_CONFIDENCE: [
      "표본이 많지 않아 보수적으로 해석할 경기입니다.",
      "근거는 일부 보이지만 아직 확신 단계는 아닙니다.",
      "데이터가 얇아 방향보다 관찰이 먼저 필요한 경기입니다.",
      "표본이 제한적이라 신중하게 보는 편이 맞습니다."
    ],
    UPSET_WARNING: [
      "정배 쪽 기대보다 변동 가능성을 더 조심해서 볼 경기입니다.",
      "겉보기 배당보다 결과가 흔들릴 여지가 있는 편입니다.",
      "시장 기준보다 실제 결과 분산이 더 큰 유형으로 보입니다.",
      "정배 신뢰만으로 보기엔 부담이 남는 매치업입니다."
    ],
    DRAW_HEAVY: [
      "승패보다 무승부 축의 존재감이 강하게 보입니다.",
      "결정력보다 균형이 먼저 보이는 경기입니다.",
      "한쪽 우세보다 무승부 압력이 더 또렷한 매치업입니다.",
      "결과 분포가 무승부 쪽으로 자주 모이는 유형입니다."
    ],
    HOME_WITH_DRAW_RISK: [
      "홈 우세 흐름은 있지만 무승부 여지를 함께 봐야 합니다.",
      "기본 축은 홈팀이지만 비기는 그림도 충분히 열려 있습니다.",
      "홈쪽 무게가 약간 앞서도 쉽게 벌어질 경기는 아닙니다.",
      "홈 우세와 무승부 가능성이 함께 잡히는 유형입니다."
    ],
    AWAY_WITH_DRAW_RISK: [
      "원정 우세 흐름은 있지만 무승부 가능성이 같이 보입니다.",
      "기본 축은 원정팀 쪽이지만 비길 여지도 적지 않습니다.",
      "원정이 앞서는 결이 있어도 접전 구간을 무시하기 어렵습니다.",
      "원정 우세와 무승부 위험이 동시에 걸리는 경기입니다."
    ],
    HOME_STRONG: [
      "현재 데이터만 놓고 보면 홈팀 쪽 근거가 더 선명합니다.",
      "흐름과 분포를 합치면 홈팀 쪽으로 무게가 쏠립니다.",
      "전반적인 지표는 홈팀 우세 쪽으로 조금 더 정리됩니다.",
      "이 매치업은 홈팀 쪽 논리가 더 자연스럽게 이어집니다."
    ],
    AWAY_STRONG: [
      "현재 데이터 기준으로는 원정팀 쪽 설명이 더 매끄럽습니다.",
      "흐름과 결과 분포를 합치면 원정팀 쪽이 조금 더 낫습니다.",
      "주요 지표가 원정팀 우세 쪽으로 정리되는 경기입니다.",
      "이 경기는 원정팀 쪽 근거가 상대적으로 더 안정적입니다."
    ],
    BALANCED: [
      "한쪽으로 단정하기보다는 균형 구도로 보는 편이 맞습니다.",
      "뚜렷한 우세 한 방향보다는 혼전 성격이 더 보입니다.",
      "결과 분포가 크게 한쪽으로 기울지 않은 경기입니다.",
      "이 매치업은 우세 판단보다 균형 해석이 더 어울립니다."
    ]
  };

  function addGroup({
    category,
    meaningKey,
    allowedDirections,
    requiredTags = [],
    excludedTags = [],
    priority = 50,
    weight = 1,
    cooldownKey = meaningKey,
    tone = "neutral",
    connectorType = "independent",
    evidenceKeys = [],
    texts = []
  }) {
    texts.forEach((text, index) => {
      sentences.push({
        id: `${meaningKey.toLowerCase()}_${index + 1}`,
        category,
        meaningKey,
        allowedDirections,
        requiredTags,
        excludedTags,
        priority,
        weight,
        cooldownKey,
        tone,
        connectorType,
        evidenceKeys,
        text
      });
    });
  }

  addGroup({
    category: "intro",
    meaningKey: "INTRO_LOW_CONFIDENCE",
    allowedDirections: ["LOW_CONFIDENCE"],
    priority: 100,
    texts: [
      "표본이 얇은 경기라 방향을 단정하기보다 현재 보이는 단서 위주로 읽는 편이 낫습니다.",
      "이 경기는 결론보다 관찰 포인트를 정리하는 쪽이 더 적절합니다.",
      "확실한 방향을 말하기엔 근거가 충분하지 않아 해석 폭을 넓게 두는 편이 좋습니다.",
      "데이터가 제한적이어서 강한 주장보다는 보수적인 해석이 어울립니다."
    ]
  });
  addGroup({
    category: "intro",
    meaningKey: "INTRO_HOME_STRONG",
    allowedDirections: ["HOME_STRONG"],
    priority: 100,
    texts: [
      "출발점은 홈팀 우세 쪽이 가장 자연스럽습니다.",
      "기본 해석을 잡는다면 홈팀 쪽 논리가 먼저 보입니다.",
      "현재 지표 흐름은 홈팀 우세를 먼저 떠올리게 합니다.",
      "전체 그림의 첫 인상은 홈팀이 조금 더 안정적이라는 쪽입니다."
    ]
  });
  addGroup({
    category: "intro",
    meaningKey: "INTRO_AWAY_STRONG",
    allowedDirections: ["AWAY_STRONG"],
    priority: 100,
    texts: [
      "첫 해석은 원정팀 우세 쪽으로 잡히는 경기입니다.",
      "전체 흐름을 보면 원정팀 쪽 근거가 먼저 눈에 들어옵니다.",
      "이 매치업은 출발선에서 원정팀 쪽 설명이 더 단단합니다.",
      "기본 방향을 하나 고르면 원정팀 쪽이 조금 더 설득력 있습니다."
    ]
  });
  addGroup({
    category: "intro",
    meaningKey: "INTRO_DRAW_HEAVY",
    allowedDirections: ["DRAW_HEAVY"],
    priority: 100,
    texts: [
      "승패 한쪽보다 무승부 축이 먼저 보이는 경기입니다.",
      "이 경기는 누가 더 강한지보다 얼마나 팽팽한지가 더 중요해 보입니다.",
      "한 방향 우세보다 비길 가능성이 더 강하게 읽히는 매치업입니다.",
      "결과 분포를 보면 무승부를 중심에 두고 해석하는 편이 자연스럽습니다."
    ]
  });
  addGroup({
    category: "intro",
    meaningKey: "INTRO_UPSET_WARNING",
    allowedDirections: ["UPSET_WARNING"],
    priority: 100,
    texts: [
      "시장상 정배가 보이더라도 그대로 따라가기엔 부담이 남는 경기입니다.",
      "표면 배당보다 결과 변동성이 더 크게 작동할 수 있는 구간입니다.",
      "정배 신뢰만으로 설명하기 어려운 요소가 겹쳐 있는 매치업입니다.",
      "숫자상 우세 팀은 있어도 결과는 그보다 더 흔들릴 가능성이 있습니다."
    ]
  });
  addGroup({
    category: "intro",
    meaningKey: "INTRO_BALANCED",
    allowedDirections: ["BALANCED", "HOME_WITH_DRAW_RISK", "AWAY_WITH_DRAW_RISK"],
    priority: 100,
    texts: [
      "이 경기는 한쪽으로 밀기보다 균형 상태를 먼저 인정하는 편이 맞습니다.",
      "우세팀은 보여도 결과까지 단순하게 이어지지는 않을 수 있습니다.",
      "전체 지표를 모아도 접전 성격이 쉽게 지워지지 않는 경기입니다.",
      "기본 구도 자체가 팽팽하게 형성된 매치업으로 보입니다."
    ]
  });

  addGroup({
    category: "sample",
    meaningKey: "SAMPLE_NONE",
    allowedDirections: ["LOW_CONFIDENCE"],
    priority: 97,
    cooldownKey: "sample-size",
    evidenceKeys: ["samples.similarOdds.known"],
    texts: [
      "아직 유사 사례가 적어 강하게 판단하기는 어렵습니다.",
      "비슷한 배당 조합에서 참고할 만한 누적 사례가 적어 확률을 강하게 밀기 어렵습니다."
    ]
  });
  addGroup({
    category: "sample",
    meaningKey: "SAMPLE_LOW",
    allowedDirections: ["LOW_CONFIDENCE", "HOME_STRONG", "AWAY_STRONG", "DRAW_HEAVY", "UPSET_WARNING", "HOME_WITH_DRAW_RISK", "AWAY_WITH_DRAW_RISK", "BALANCED"],
    requiredTags: ["SIMILAR_SAMPLE_LOW"],
    priority: 96,
    cooldownKey: "sample-size",
    evidenceKeys: ["samples.similarOdds.known"],
    texts: [
      "유사배당 사례가 아직 적어 이번 분석은 참고용으로 보는 편이 좋습니다.",
      "현재 판단은 근거가 많지 않아 결론보다 흐름 확인에 가깝습니다.",
      "비슷한 배당 사례 수가 많지 않아 강한 결론까지 연결하긴 어렵습니다.",
      "유사배당 사례가 많지 않아 강한 결론보다는 흐름만 참고하는 편이 좋습니다."
    ]
  });
  addGroup({
    category: "sample",
    meaningKey: "SAMPLE_MEDIUM",
    allowedDirections: ["LOW_CONFIDENCE", "HOME_STRONG", "AWAY_STRONG", "DRAW_HEAVY", "UPSET_WARNING", "HOME_WITH_DRAW_RISK", "AWAY_WITH_DRAW_RISK", "BALANCED"],
    requiredTags: ["SIMILAR_SAMPLE_MEDIUM"],
    priority: 94,
    cooldownKey: "sample-size",
    evidenceKeys: ["samples.similarOdds.known"],
    texts: [
      "유사배당 표본은 판단을 시작하기엔 충분하지만, 아주 단단한 결론을 내릴 정도는 아닙니다.",
      "사례 수는 어느 정도 확보돼 있어 흐름 해석에는 무리가 없는 편입니다.",
      "유사배당 표본이 중간 정도라 큰 방향성은 읽을 수 있습니다.",
      "현재 표본 규모는 경향을 말해주지만 과신 단계까지는 아닙니다."
    ]
  });
  addGroup({
    category: "sample",
    meaningKey: "SAMPLE_HIGH",
    allowedDirections: ["HOME_STRONG", "AWAY_STRONG", "DRAW_HEAVY", "UPSET_WARNING", "HOME_WITH_DRAW_RISK", "AWAY_WITH_DRAW_RISK", "BALANCED"],
    requiredTags: ["SIMILAR_SAMPLE_HIGH"],
    priority: 94,
    cooldownKey: "sample-size",
    evidenceKeys: ["samples.similarOdds.known"],
    texts: [
      "유사배당 표본이 충분히 쌓여 있어 이번 해석의 바닥은 비교적 단단한 편입니다.",
      "사례 수가 넉넉해 결과 분포를 읽는 데 신뢰를 더할 수 있습니다.",
      "비슷한 배당 사례가 많이 누적돼 있어 패턴 해석의 안정감이 있습니다.",
      "현재 표본 규모는 단순 인상보다 실제 경향을 말해줄 수 있는 수준입니다."
    ]
  });

  addGroup({
    category: "exactOdds",
    meaningKey: "EXACT_HOME_SUPPORT",
    allowedDirections: ["HOME_STRONG", "HOME_WITH_DRAW_RISK"],
    requiredTags: ["EXACT_HAS_RESULT_RATES", "EXACT_TOP_H"],
    priority: 90,
    evidenceKeys: ["samples.sameOdds.rates.home", "samples.sameOdds.known"],
    texts: [
      "동일배당 사례에서는 홈승 쪽 결과가 가장 자주 나왔습니다.",
      "같은 배당 조합만 좁혀 보면 홈팀 방향이 먼저 확인됩니다.",
      "정확히 일치하는 배당 구간에서는 홈승 비중이 가장 높게 형성돼 있습니다.",
      "동일배당 기준 결과 분포는 홈승 쪽으로 더 많이 기울어 있습니다."
    ]
  });
  addGroup({
    category: "exactOdds",
    meaningKey: "EXACT_AWAY_SUPPORT",
    allowedDirections: ["AWAY_STRONG", "AWAY_WITH_DRAW_RISK"],
    requiredTags: ["EXACT_HAS_RESULT_RATES", "EXACT_TOP_A"],
    priority: 90,
    evidenceKeys: ["samples.sameOdds.rates.away", "samples.sameOdds.known"],
    texts: [
      "동일배당 사례에서는 원정승이 가장 자주 나온 결과입니다.",
      "정확히 같은 배당만 보면 원정 쪽 설명이 더 강합니다.",
      "같은 배당 조합의 결과 분포는 원정승 비중이 가장 높습니다.",
      "동일배당 표본에서는 원정팀 쪽 마감 결과가 더 많이 쌓여 있습니다."
    ]
  });
  addGroup({
    category: "exactOdds",
    meaningKey: "EXACT_DRAW_SUPPORT",
    allowedDirections: ["DRAW_HEAVY", "HOME_WITH_DRAW_RISK", "AWAY_WITH_DRAW_RISK", "BALANCED"],
    requiredTags: ["EXACT_HAS_RESULT_RATES", "EXACT_TOP_D"],
    priority: 90,
    evidenceKeys: ["samples.sameOdds.rates.draw", "samples.sameOdds.known"],
    texts: [
      "동일배당 구간에서는 무승부가 가장 자주 나온 축입니다.",
      "정확히 같은 배당 조합만 보면 비기는 그림이 먼저 보입니다.",
      "동일배당 결과 분포가 승패보다 무승부 쪽으로 더 모여 있습니다.",
      "같은 배당 표본에서는 무승부 비중이 가장 높게 형성됩니다."
    ]
  });
  addGroup({
    category: "exactOdds",
    meaningKey: "EXACT_SAMPLE_THIN",
    allowedDirections: ["LOW_CONFIDENCE", "HOME_STRONG", "AWAY_STRONG", "DRAW_HEAVY", "UPSET_WARNING", "HOME_WITH_DRAW_RISK", "AWAY_WITH_DRAW_RISK", "BALANCED"],
    requiredTags: ["EXACT_SAMPLE_LOW"],
    priority: 78,
    evidenceKeys: ["samples.sameOdds.known"],
    texts: [
      "다만 동일배당 표본 자체는 많지 않아 여기서 강한 의미를 뽑아내긴 어렵습니다.",
      "정확히 같은 배당 사례 수는 제한적이라 이 구간은 보조 근거로 보는 편이 맞습니다.",
      "동일배당 데이터는 얇아서 결과 분포를 확대 해석할 단계는 아닙니다.",
      "같은 배당 조합의 표본은 적은 편이라 방향성 확인 정도에 그칩니다."
    ]
  });

  addGroup({
    category: "similarOdds",
    meaningKey: "SIMILAR_HOME_SUPPORT",
    allowedDirections: ["HOME_STRONG", "HOME_WITH_DRAW_RISK"],
    requiredTags: ["SIMILAR_HAS_RESULT_RATES", "SIMILAR_TOP_H"],
    priority: 92,
    evidenceKeys: ["samples.similarOdds.rates.home", "samples.similarOdds.known"],
    texts: [
      "유사배당 전체 분포는 홈승 쪽이 가장 앞섭니다.",
      "비슷한 배당 사례를 넓게 보면 홈팀 방향이 먼저 잡힙니다.",
      "유사배당 결과만 놓고 보면 홈승 비중이 가장 높게 쌓여 있습니다.",
      "같은 가격대의 과거 사례는 홈승 쪽 확률을 조금 더 밀어줍니다."
    ]
  });
  addGroup({
    category: "similarOdds",
    meaningKey: "SIMILAR_AWAY_SUPPORT",
    allowedDirections: ["AWAY_STRONG", "AWAY_WITH_DRAW_RISK"],
    requiredTags: ["SIMILAR_HAS_RESULT_RATES", "SIMILAR_TOP_A"],
    priority: 92,
    evidenceKeys: ["samples.similarOdds.rates.away", "samples.similarOdds.known"],
    texts: [
      "유사배당 분포에서는 원정승이 가장 자주 확인됩니다.",
      "비슷한 가격대 사례를 넓게 보면 원정 쪽 설명이 더 강합니다.",
      "유사배당 결과군은 원정승 비중이 가장 크게 형성됩니다.",
      "같은 배당대의 과거 결과는 원정팀 쪽 손을 조금 더 들어줍니다."
    ]
  });
  addGroup({
    category: "similarOdds",
    meaningKey: "SIMILAR_DRAW_SUPPORT",
    allowedDirections: ["DRAW_HEAVY", "HOME_WITH_DRAW_RISK", "AWAY_WITH_DRAW_RISK", "BALANCED"],
    requiredTags: ["SIMILAR_HAS_RESULT_RATES", "SIMILAR_TOP_D"],
    priority: 92,
    evidenceKeys: ["samples.similarOdds.rates.draw", "samples.similarOdds.known"],
    texts: [
      "유사배당 사례에서는 무승부 비중이 가장 높게 잡힙니다.",
      "같은 배당대 결과를 넓게 보면 비기는 그림이 가장 먼저 보입니다.",
      "비슷한 배당 구간의 과거 결과는 무승부 쪽으로 더 자주 모입니다.",
      "유사배당 표본에서는 승패보다 무승부가 더 강하게 남아 있습니다."
    ]
  });
  addGroup({
    category: "similarOdds",
    meaningKey: "SIMILAR_UPSET_FLAG",
    allowedDirections: ["UPSET_WARNING"],
    requiredTags: ["SIMILAR_HAS_RESULT_RATES", "SIGNAL_UNDERDOG_ALERT"],
    priority: 95,
    tone: "warning",
    evidenceKeys: ["samples.similarOdds.favoriteHitRate", "judgement.signalKeys"],
    texts: [
      "유사배당 결과에서 정배 적중이 안정적으로 굳지 않은 점은 분명한 경고 신호입니다.",
      "같은 가격대 사례를 보면 정배가 기대만큼 버티지 못한 흔적이 남아 있습니다.",
      "유사배당 분포는 정배 우세보다 다른 결과 가능성을 더 크게 열어 둡니다.",
      "정배 중심으로만 보기엔 유사배당 사례의 이탈 폭이 꽤 큽니다."
    ]
  });

  addGroup({
    category: "leagueOdds",
    meaningKey: "LEAGUE_HOME_SUPPORT",
    allowedDirections: ["HOME_STRONG", "HOME_WITH_DRAW_RISK"],
    requiredTags: ["LEAGUE_HAS_RESULT_RATES", "LEAGUE_TOP_H"],
    priority: 74,
    evidenceKeys: ["samples.sameLeagueSimilar.rates.home", "samples.sameLeagueSimilar.known"],
    texts: [
      "같은 리그 유사배당 표본에서도 홈승 쪽 흐름이 이어집니다.",
      "리그 안쪽 데이터로 좁혀 봐도 홈팀 방향이 크게 흐트러지지 않습니다.",
      "동일 리그 유사배당 분포 역시 홈승 비중이 가장 높습니다.",
      "리그 특성까지 반영해도 홈승 쪽 그림이 유지됩니다."
    ]
  });
  addGroup({
    category: "leagueOdds",
    meaningKey: "LEAGUE_AWAY_SUPPORT",
    allowedDirections: ["AWAY_STRONG", "AWAY_WITH_DRAW_RISK"],
    requiredTags: ["LEAGUE_HAS_RESULT_RATES", "LEAGUE_TOP_A"],
    priority: 74,
    evidenceKeys: ["samples.sameLeagueSimilar.rates.away", "samples.sameLeagueSimilar.known"],
    texts: [
      "같은 리그 유사배당 사례에서는 원정승 비중이 가장 높습니다.",
      "리그 내부 분포로 좁혀도 원정 쪽 설명이 유지됩니다.",
      "동일 리그 데이터까지 보면 원정승 흐름이 더 선명해집니다.",
      "리그 특성을 감안해도 원정팀 방향이 무너지지 않습니다."
    ]
  });
  addGroup({
    category: "leagueOdds",
    meaningKey: "LEAGUE_DRAW_SUPPORT",
    allowedDirections: ["DRAW_HEAVY", "HOME_WITH_DRAW_RISK", "AWAY_WITH_DRAW_RISK", "BALANCED"],
    requiredTags: ["LEAGUE_HAS_RESULT_RATES", "LEAGUE_TOP_D"],
    priority: 74,
    evidenceKeys: ["samples.sameLeagueSimilar.rates.draw", "samples.sameLeagueSimilar.known"],
    texts: [
      "같은 리그 유사배당 결과는 무승부 비중이 적지 않게 쌓여 있습니다.",
      "리그 안쪽 데이터로 좁혀도 비기는 방향이 계속 눈에 띕니다.",
      "동일 리그 사례는 승패보다 무승부 압력을 더 강하게 보여줍니다.",
      "리그 맥락까지 보면 무승부 가능성을 쉽게 지우기 어렵습니다."
    ]
  });

  addGroup({
    category: "recentForm",
    meaningKey: "RECENT_HOME_EDGE",
    allowedDirections: ["HOME_STRONG", "HOME_WITH_DRAW_RISK", "BALANCED"],
    requiredTags: ["RECENT_HOME_EDGE"],
    priority: 82,
    evidenceKeys: ["recent.homeTeam.pointsPerMatch", "recent.awayTeam.pointsPerMatch"],
    texts: [
      "최근 경기 결과는 홈팀 쪽이 조금 더 좋습니다.",
      "최근 다섯 경기의 방향은 홈팀 쪽에 조금 더 힘을 실어 줍니다.",
      "단기 흐름에서는 홈팀이 경기력을 더 잘 유지하고 있습니다.",
      "최근 성적 기준으로는 홈팀 흐름이 더 좋습니다."
    ]
  });
  addGroup({
    category: "recentForm",
    meaningKey: "RECENT_AWAY_EDGE",
    allowedDirections: ["AWAY_STRONG", "AWAY_WITH_DRAW_RISK", "BALANCED", "UPSET_WARNING"],
    requiredTags: ["RECENT_AWAY_EDGE"],
    priority: 82,
    evidenceKeys: ["recent.homeTeam.pointsPerMatch", "recent.awayTeam.pointsPerMatch"],
    texts: [
      "원정팀 흐름이 최근 경기에서 조금 더 좋게 이어집니다.",
      "직전 경기들의 방향만 보면 원정팀이 더 좋은 리듬을 유지합니다.",
      "단기 성적에서는 원정팀 쪽 연속성이 더 낫게 잡힙니다.",
      "최근 다섯 경기 기준으로는 원정팀 쪽 분위기가 더 낫습니다."
    ]
  });

  addGroup({
    category: "venue",
    meaningKey: "VENUE_HOME_EDGE",
    allowedDirections: ["HOME_STRONG", "HOME_WITH_DRAW_RISK"],
    requiredTags: ["VENUE_HOME_EDGE"],
    priority: 80,
    evidenceKeys: ["venue.home.pointsPerMatch", "venue.away.pointsPerMatch"],
    texts: [
      "홈팀은 자기 홈 환경에서 성과를 더 꾸준히 내고 있습니다.",
      "장소 조건까지 포함하면 홈팀 쪽 이점이 더 또렷해집니다.",
      "홈/원정 분리 성적에서는 홈팀 쪽 안정감이 조금 더 낫습니다.",
      "경기 장소를 반영하면 홈팀 쪽 손을 들어줄 근거가 늘어납니다."
    ]
  });
  addGroup({
    category: "venue",
    meaningKey: "VENUE_AWAY_EDGE",
    allowedDirections: ["AWAY_STRONG", "AWAY_WITH_DRAW_RISK", "UPSET_WARNING"],
    requiredTags: ["VENUE_AWAY_EDGE"],
    priority: 80,
    evidenceKeys: ["venue.home.pointsPerMatch", "venue.away.pointsPerMatch"],
    texts: [
      "원정팀은 원정 경기에서도 성과를 비교적 잘 유지해 왔습니다.",
      "장소 분리 성적을 보면 원정팀 쪽 저항력이 생각보다 좋습니다.",
      "홈/원정 지표에서는 원정팀이 쉽게 밀리지 않는 편입니다.",
      "원정 조건을 감안해도 원정팀 경쟁력이 꽤 선명하게 남습니다."
    ]
  });
  addGroup({
    category: "risk",
    meaningKey: "DATA_GAP_GENERAL",
    allowedDirections: ["LOW_CONFIDENCE", "BALANCED", "DRAW_HEAVY", "HOME_WITH_DRAW_RISK", "AWAY_WITH_DRAW_RISK"],
    priority: 72,
    cooldownKey: "data-gap",
    evidenceKeys: ["samples.similarOdds.known"],
    texts: [
      "추가 지표가 아직 충분히 붙지 않아 몇몇 근거는 폭넓게 보는 편이 낫습니다.",
      "세부 데이터가 완전히 채워지지 않아 일부 단서는 보조 수준으로 보는 것이 안전합니다.",
      "남아 있는 정보 공백 때문에 이번 판단은 단정보다 관찰에 가깝습니다.",
      "지금은 강한 결론보다 흐름 확인이 먼저 필요한 구간입니다."
    ]
  });

  addGroup({
    category: "attackDefense",
    meaningKey: "ATTACK_HOME_EDGE",
    allowedDirections: ["HOME_STRONG", "HOME_WITH_DRAW_RISK"],
    requiredTags: ["ATTACK_HOME_EDGE"],
    priority: 70,
    evidenceKeys: ["recent.homeTeam.avgGoalsFor", "recent.awayTeam.avgGoalsFor"],
    texts: [
      "최근 득점 흐름에서는 홈팀이 더 꾸준히 찬스를 마무리하고 있습니다.",
      "공격 생산성만 보면 홈팀 쪽 수치가 조금 더 낫습니다.",
      "득점 페이스는 홈팀이 조금 더 꾸준합니다.",
      "공격력에서는 홈팀이 조금 앞서 있습니다."
    ]
  });
  addGroup({
    category: "attackDefense",
    meaningKey: "ATTACK_AWAY_EDGE",
    allowedDirections: ["AWAY_STRONG", "AWAY_WITH_DRAW_RISK", "UPSET_WARNING"],
    requiredTags: ["ATTACK_AWAY_EDGE"],
    priority: 70,
    evidenceKeys: ["recent.homeTeam.avgGoalsFor", "recent.awayTeam.avgGoalsFor"],
    texts: [
      "최근 득점 흐름은 원정팀 쪽이 조금 더 날카롭게 잡힙니다.",
      "공격 생산성 비교에서는 원정팀이 한 발 앞섭니다.",
      "최근 마무리 효율은 원정팀 쪽이 조금 더 좋습니다.",
      "득점 지표만 떼어 놓으면 원정팀 쪽 손을 들어줄 만합니다."
    ]
  });
  addGroup({
    category: "attackDefense",
    meaningKey: "DEFENSE_HOME_EDGE",
    allowedDirections: ["HOME_STRONG", "DRAW_HEAVY", "BALANCED"],
    requiredTags: ["DEFENSE_HOME_EDGE"],
    priority: 70,
    evidenceKeys: ["recent.homeTeam.avgGoalsAgainst", "recent.awayTeam.avgGoalsAgainst"],
    texts: [
      "실점 관리에서는 홈팀이 조금 더 낫습니다.",
      "수비 쪽 수치만 보면 홈팀이 조금 더 단단합니다.",
      "최근 실점 흐름은 홈팀 쪽이 더 잘 버티는 모습입니다.",
      "수비 안정감에서는 홈팀이 조금 더 앞서 있습니다."
    ]
  });
  addGroup({
    category: "attackDefense",
    meaningKey: "DEFENSE_AWAY_EDGE",
    allowedDirections: ["AWAY_STRONG", "DRAW_HEAVY", "UPSET_WARNING", "BALANCED"],
    requiredTags: ["DEFENSE_AWAY_EDGE"],
    priority: 70,
    evidenceKeys: ["recent.homeTeam.avgGoalsAgainst", "recent.awayTeam.avgGoalsAgainst"],
    texts: [
      "실점 억제력은 원정팀 쪽이 조금 더 좋습니다.",
      "수비 수치에서는 원정팀이 조금 더 단단합니다.",
      "최근 실점 관리만 보면 원정팀 쪽이 더 잘 버팁니다.",
      "수비 안정감은 원정팀 쪽이 한 단계 더 정리돼 있습니다."
    ]
  });

  addGroup({
    category: "risk",
    meaningKey: "RISK_DRAW_SIGNAL",
    allowedDirections: ["DRAW_HEAVY", "HOME_WITH_DRAW_RISK", "AWAY_WITH_DRAW_RISK", "BALANCED"],
    requiredTags: ["SIGNAL_DRAW_RISK"],
    priority: 88,
    tone: "warning",
    connectorType: "contrast",
    evidenceKeys: ["judgement.signalKeys", "samples.similarOdds.rates.draw"],
    texts: [
      "무승부 쪽 신호가 살아 있어 승패 한 방향만 보기엔 부담이 남습니다.",
      "그렇지만 무승부 가능성은 이번 분석에서 계속 지워지지 않는 변수입니다.",
      "반대로 보면 비기는 결과가 끼어들 여지도 꽤 크게 남아 있습니다.",
      "특히 무승부 위험 신호가 있어 단선적인 우세 해석은 조심할 필요가 있습니다."
    ]
  });
  addGroup({
    category: "risk",
    meaningKey: "RISK_UNDERDOG_SIGNAL",
    allowedDirections: ["UPSET_WARNING", "AWAY_WITH_DRAW_RISK", "HOME_WITH_DRAW_RISK"],
    requiredTags: ["SIGNAL_UNDERDOG_ALERT"],
    priority: 88,
    tone: "warning",
    connectorType: "contrast",
    evidenceKeys: ["judgement.signalKeys", "samples.similarOdds.favoriteHitRate"],
    texts: [
      "여기에 역배 쪽 이탈 신호가 함께 보여 정배 신뢰는 한 단계 낮춰 보는 편이 좋습니다.",
      "반대 방향 결과가 생각보다 자주 나온다는 점은 그냥 지나치기 어렵습니다.",
      "예상 밖 결과가 나온 사례가 계속 보여 쉽게 단정하기 어렵습니다.",
      "낮게 본 쪽도 만만치 않아 한쪽으로만 단정하긴 어렵습니다."
    ]
  });

  addGroup({
    category: "conclusion",
    meaningKey: "CONCLUSION_HOME",
    allowedDirections: ["HOME_STRONG", "HOME_WITH_DRAW_RISK"],
    priority: 110,
    connectorType: "conclusion",
    evidenceKeys: ["judgement.key", "samples.similarOdds.topOutcomeKey"],
    texts: [
      "종합하면 기본 방향은 홈팀 쪽이지만, 접전 요소가 있으면 무승부까지 함께 보는 구도가 자연스럽습니다.",
      "전체적으로 보면 홈팀 쪽 논리가 앞서지만 경기 양상은 생각보다 팽팽할 수 있습니다.",
      "결론적으로 홈팀 우세 쪽이 더 자연스럽지만, 쉽게 벌어질 경기는 아닙니다.",
      "정리하면 홈팀이 기본 축이고, 남는 변수는 얼마나 접전으로 흘러가느냐에 가깝습니다."
    ]
  });
  addGroup({
    category: "conclusion",
    meaningKey: "CONCLUSION_AWAY",
    allowedDirections: ["AWAY_STRONG", "AWAY_WITH_DRAW_RISK"],
    priority: 110,
    connectorType: "conclusion",
    evidenceKeys: ["judgement.key", "samples.similarOdds.topOutcomeKey"],
    texts: [
      "종합하면 기본 방향은 원정팀 쪽이지만, 경기 흐름 자체는 꽤 팽팽할 수 있습니다.",
      "전체적으로 보면 원정팀 쪽 설명이 앞서도 무승부 여지는 끝까지 남습니다.",
      "결론적으로 원정팀 우세 해석이 가장 자연스럽지만, 접전 가능성을 같이 안고 가는 경기입니다.",
      "정리하면 원정팀이 기본 축이고, 남는 변수는 무승부가 얼마나 버티느냐입니다."
    ]
  });
  addGroup({
    category: "conclusion",
    meaningKey: "CONCLUSION_DRAW",
    allowedDirections: ["DRAW_HEAVY", "BALANCED"],
    priority: 110,
    connectorType: "conclusion",
    evidenceKeys: ["judgement.key", "samples.similarOdds.topOutcomeKey"],
    texts: [
      "종합하면 승패보다 무승부 가능성을 더 중심에 두고 봐야 할 경기입니다.",
      "전체 그림은 한쪽 우세보다 비길 수 있는 구조에 더 가깝습니다.",
      "정리하면 무승부 압력이 강해 결과가 쉽게 한 방향으로 고정되진 않아 보입니다.",
      "결론적으로 이번 매치업은 한쪽 우세보다 팽팽한 흐름에 더 가깝습니다."
    ]
  });
  addGroup({
    category: "conclusion",
    meaningKey: "CONCLUSION_UPSET",
    allowedDirections: ["UPSET_WARNING"],
    priority: 110,
    connectorType: "conclusion",
    tone: "warning",
    evidenceKeys: ["judgement.key", "judgement.signalKeys", "samples.similarOdds.favoriteHitRate"],
    texts: [
      "종합하면 정배 신뢰보다 이탈 가능성을 더 조심해서 볼 경기입니다.",
      "전체적으로는 정배가 보이더라도 결과 변동성을 함께 인정해야 하는 매치업입니다.",
      "결론적으로 이 경기는 우세팀보다 흔들릴 가능성 쪽 설명력이 더 큽니다.",
      "정리하면 겉배당보다 결과 분산이 크게 나올 수 있는 타입으로 읽힙니다."
    ]
  });
  addGroup({
    category: "conclusion",
    meaningKey: "CONCLUSION_LOW_CONFIDENCE",
    allowedDirections: ["LOW_CONFIDENCE"],
    priority: 110,
    connectorType: "conclusion",
    evidenceKeys: ["samples.similarOdds.known"],
    texts: [
      "종합하면 지금 단계에서는 추가 근거를 더 확인하는 편이 중요합니다.",
      "전체적으로는 관찰 가치가 있지만 확정 해석까지 밀어붙일 상황은 아닙니다.",
      "결론적으로 현재 정보만으로 강한 판정을 내리기엔 근거가 부족합니다.",
      "정리하면 이번 경기는 비슷한 사례가 더 쌓여야 판단도 선명해질 유형입니다."
    ]
  });

  addGroup({
    category: "closing",
    meaningKey: "CLOSING_MONITOR",
    allowedDirections: ["LOW_CONFIDENCE", "HOME_STRONG", "AWAY_STRONG", "DRAW_HEAVY", "UPSET_WARNING", "HOME_WITH_DRAW_RISK", "AWAY_WITH_DRAW_RISK", "BALANCED"],
    priority: 40,
    connectorType: "closing",
    cooldownKey: "closing-monitor",
    texts: [
      "남은 변수는 경기 직전 배당과 최근 흐름이 같은 방향을 유지하는지입니다.",
      "마지막으로 확인할 포인트는 경기 직전까지 현재 패턴이 흔들리지 않는지 여부입니다.",
      "끝까지 볼 지점은 배당과 흐름이 지금 해석과 같은 결을 유지하느냐입니다.",
      "마무리 체크 포인트는 경기 직전 정보가 현재 그림을 뒤집는지 아닌지입니다."
    ]
  });

  return {
    ANALYSIS_SENTENCE_LIBRARY_VERSION,
    ANALYSIS_SENTENCE_LIBRARY: sentences,
    ANALYSIS_HEADLINE_LIBRARY: headlines
  };
}));
