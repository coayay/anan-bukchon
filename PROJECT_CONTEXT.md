# 북촌별서 안안 — 프로젝트 컨텍스트
> 이 파일을 Claude Code에 보여주면 이전 작업을 이어서 진행할 수 있습니다.

---

## 프로젝트 개요

- **브랜드명:** 북촌별서 안안 (Bukchon Byeolseo ANAN)
- **운영:** 윌링앤에이블 (Willing & Able) 직영
- **주소:** 서울특별시 종로구 가회동 33-20
- **형태:** 독채 한옥 스테이 (에어비앤비 예약)
- **예약:** 에어비앤비 (URL 아직 미연결 — js/main.js의 AIRBNB_URL 변수에 입력 필요)

---

## 핵심 브랜드 사실

- **100년이 넘은 한옥** (리모델링했으나 기와·기둥·주춧돌 원형 보존)
- **북촌에서 가장 높은 위치** — 하늘과 가깝고, 다른 집 기와지붕이 바다 너울처럼 보임
- **한 번에 한 팀만** 투숙 (완전 독채, 공유 없음)
- **주요 시설:** 전망 자쿠지(처마 아래), 마당, 대청, 다락, 코클(전통 화로), 티 공간
- **타깃:** 프리미엄 국내외 여행자 (Quiet Luxury 감도)

---

## 브랜드 톤앤매너

- Quiet Luxury · Editorial · Contemporary Hanok
- 짧고 기억에 남는 카피 (설명형 금지)
- 관광지 홍보 문구 금지
- 한국어 우선, 영문 보조
- 전통 붓글씨 스타일 금지

---

## 확정된 핵심 카피

| 섹션 | 카피 |
|---|---|
| Hero 헤드라인 | 100년이 기다린 / **하룻밤.** |
| Hero 서브 | 북촌에서 하늘과 가장 가까운 100년 한옥. 오직 한 팀만을 위해 열립니다. |
| Hero 하단 EN | A hundred years standing. One night, yours alone. |
| Story 헤드라인 | 기와의 너울 위에, / **안안.** |
| Story 리드 | 북촌에서 하늘과 가장 가까운 자리. 기와의 너울이 발아래 펼쳐지는 곳에, 안안이 있습니다. |
| Scenes 헤드라인 | 말보다 / **몸이 먼저 압니다.** |
| Scene 02 자쿠지 제목 | 100년의 처마 아래, / **오늘의 온도.** |
| Scene 02 본문 | 몸이 뜨거워질수록, 서울이 멀어집니다. |
| Scene 02 EN | The older the tiles, the further Seoul feels. |
| Reserve 헤드라인 | 이 하루, / **살 수 있습니다.** |
| Footer 태그라인 | A hundred years standing. One night at a time. |

---

## 파일 구조

```
안안 홈페이지/
├── index.html          # 메인 페이지 (원페이지)
├── css/style.css       # 전체 스타일 (v2 에디토리얼)
├── js/main.js          # 인터랙션 + Airbnb URL 변수
├── images/
│   ├── hero-courtyard.jpg   # Hero + Reserve + Scene 01 배경
│   ├── garden-view.jpg      # Gallery 02
│   └── scene-bath.png       # 자쿠지 (Scene 02 + Gallery 03)
└── PROJECT_CONTEXT.md  # 이 파일
```

---

## GitHub 배포 정보

- **저장소:** https://github.com/coayay/anan-bukchon
- **라이브 URL:** https://coayay.github.io/anan-bukchon/
- **배포 방식:** GitHub Pages (main 브랜치 자동 배포)

### 수정 후 반영 방법
```bash
cd "C:/Users/flowedu/안안 홈페이지"
git add .
git commit -m "수정 내용 메모"
git push
```
→ 1~2분 후 라이브 URL에 자동 반영

---

## 완료된 작업

- [x] 젠스파크 v2 디자인 인수 및 분석
- [x] 자쿠지 이미지(scene-bath.png) 적용 — Scene 02 + Gallery 03
- [x] 전체 카피 리라이팅 (브랜드 디렉터 + 카피라이터 관점)
- [x] 타이포 위계 개선 (Hero weight·자간·gradient 조정)
- [x] Hero eyebrow 스타일 변경 (이탤릭 골드 → 산세리프 트래킹 레이블)
- [x] GitHub Pages 배포 완료

---

## 남은 작업 (교체 대기)

### 이미지
- [ ] Scene 03 — 차와 정적 (대청 / 촬영 예정)
- [ ] Scene 04 — 다락 (촬영 예정)
- [ ] Gallery 04~07 — 티룸·침실·다락·건축 디테일

### 링크·연락처
- [ ] 에어비앤비 URL — `js/main.js` 상단 `AIRBNB_URL` 변수에 입력
- [ ] 이메일 — hello@anan-bukchon.com (임시)
- [ ] 카카오톡 — @anan.bukchon (임시)
- [ ] WhatsApp — +82 10-0000-0000 (임시)

### 추가 개선 후보
- [ ] Gallery 라이트박스 (PhotoSwipe 연동)
- [ ] SEO 강화 — JSON-LD LodgingBusiness 스키마
- [ ] 영문 페이지 분리 (/en/index.html)
- [ ] 이미지 WebP 변환 + lazy loading 최적화

---

## Claude에게 전달할 말

이 파일을 읽었다면:
- 위 브랜드 사실과 카피 원칙을 기억하고 작업하세요
- "골목 끝" 같은 표현은 사용하지 마세요 (높이·조망·너울 이미지 사용)
- "온탕" 같은 대중목욕탕 연상 단어는 피하세요
- 수정 후에는 항상 git add/commit/push까지 완료하세요
