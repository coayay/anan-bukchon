# 북촌별서 안안 — Bukchon Byeolseo ANAN

> *A private hanok retreat in Bukchon, where peace settles gently.*
> 북촌의 마당에, 평안이 머무는 집.

프리미엄 독채 한옥 스테이 **북촌별서 안안**의 공식 브랜드 랜딩 페이지입니다.
일반 숙박 플랫폼이 아닌 **매거진급 에디토리얼 브랜드 페이지**로 설계되었으며,
방문자를 에어비앤비 예약으로 자연스럽게 유도하는 원페이지 사이트입니다.

---

## 🎯 v2 리디자인 핵심 변화

v1의 "잘 정리된 템플릿" 느낌을 벗고, 진정한 프리미엄 브랜드 월드로 격상시켰습니다.

### ✨ 주요 개선 사항

| 영역 | v1 | v2 (현재) |
|------|------|------|
| **Hero 타이포** | 작고 부드러운 표현 | `clamp(44px, 7vw, 96px)` 디스플레이 스케일, 한글 + 이탤릭 영문 혼합으로 아이코닉 |
| **Hero 구성** | 단일 중앙 정렬 | 상단 지오메타(N 37.582°) + 풀스크린 이미지 + 바텀바 + 스크롤 인디케이터로 시네마틱 |
| **Story 섹션** | 3개의 반복 카드 | 교차 정렬(pillar-01/02/03 세로 오프셋) + 수직 디바이더로 에디토리얼 조판 |
| **Signature Scenes** | 4개의 아이콘 박스 | **이미지 주도형 스프레드** — full-bleed + floating caption + 좌우 split + dark overlay 변주 |
| **A Day at ANAN** | 10pt 원 타임라인 | 큰 시간 타이포 (`Serif EN 42px`) + 영문 태그(Arrival/First Breath...) + 여백 확장 |
| **Space Details** | 6개 아이콘 카드 | **대형 숫자 디스플레이** (01 / 03 / 03 / 04–06) + 2컬럼 dt·dd 인포 리스트 |
| **Gallery** | 4×2 균등 그리드 | 21:9 히어로 → 비대칭 pair → trio → 21:9 와이드의 **4행 에디토리얼 리듬** |
| **Airbnb CTA** | 표준 버튼 | **3파트 구성 아이콘+이중 카피+화살표 배지** + 모바일 플로팅 스티키 CTA |
| **Chapter 마커** | 없음 | `Chapter I — The Name` 방식 로마자 챕터 시스템 도입 |
| **컬러 포인트** | 단색 wood | `--accent: #c8a878` 서브틀 골드 엑센트 추가 |

### 🎨 디자인 원칙

**Quiet Luxury · Editorial · Image-Led · Brand-Specific**

- **아이코닉한 Hero** — 풀블리드 이미지 위에 큰 한글 타이포 + 금색 이탤릭 영문이 교차
- **반복 박스 제거** — beige 카드를 줄이고, 섹션마다 다른 구성(spread/split/dark/centered) 사용
- **타이포그래피 권위** — `Noto Serif KR` 경량 웨이트 + `Cormorant Garamond` 이탤릭으로 한/영 대비
- **의도적 여백** — 섹션 상하 180px, 장면 간 100~180px 간격으로 시각적 호흡 확보
- **에어비앤비 전환 명확화** — 네비게이션 CTA, Reserve 섹션 메인 버튼, 모바일 플로팅 CTA 3중 배치

---

## 📐 페이지 구조

```
┌──────────────────────────────────────────────┐
│  01. HERO                                    │
│  • Cinematic full-bleed courtyard image      │
│  • Top meta line (geo / location / year)    │
│  • Large display typography with gold accent │
│  • Airbnb primary CTA + Inquiry secondary    │
│  • Bottom bar with tagline + scroll indicator│
├──────────────────────────────────────────────┤
│  02. STORY — Chapter I · The Name            │
│  • Three pillars (北村 / 別墅 / 安安)         │
│  • Vertical offset layout, not repeating card│
├──────────────────────────────────────────────┤
│  03. SCENES — Chapter II · Four Scenes       │
│  • Scene 01 · 마당의 빛 (full-bleed + caption)│
│  • Scene 02 · 따뜻한 물의 시간 (split right)  │
│  • Scene 03 · 차와 정적 (dark overlay)        │
│  • Scene 04 · 다락의 고요 (split left)        │
├──────────────────────────────────────────────┤
│  04. A DAY AT ANAN — Chapter III · A Day     │
│  • Dark section with radial gold glow        │
│  • 6 timeline entries with EN tags           │
├──────────────────────────────────────────────┤
│  05. SPACE — Chapter IV · The Space          │
│  • Big stat row (01 / 03 / 03 / 04–06)       │
│  • Bilingual dt·dd info list                 │
├──────────────────────────────────────────────┤
│  06. GALLERY — Chapter V · Gallery           │
│  • 4-row editorial rhythm (hero/asym/trio/...)│
├──────────────────────────────────────────────┤
│  07. RESERVE                                 │
│  • Dark atmospheric background               │
│  • Oversized 3-part Airbnb CTA (icon+text+arrow)│
├──────────────────────────────────────────────┤
│  08. INQUIRY (minimal direct lines)          │
│  09. FOOTER (seal + address + tagline)       │
│  + Sticky Floating Airbnb CTA (mobile)       │
└──────────────────────────────────────────────┘
```

---

## ✅ 완료된 기능

### 레이아웃 / 섹션
- [x] 시네마틱 Hero (풀스크린 이미지 + 탑/바텀 메타 + 시간차 페이드업 애니메이션)
- [x] Chapter 마커 시스템 (Roman numeral + 장식선)
- [x] Story 3-pillar 수직 오프셋 레이아웃
- [x] Scenes 4가지 변주 (full-bleed caption / split / dark overlay / split reversed)
- [x] A Day 다크 섹션 (radial gold glow 배경)
- [x] Space 대형 숫자 통계 + 한/영 병기 인포 리스트
- [x] Gallery 에디토리얼 4행 리듬
- [x] Reserve 강화된 Airbnb CTA (3파트 버튼)
- [x] 모바일 플로팅 스티키 Airbnb CTA

### 인터랙션
- [x] Hero 슬로우 줌 애니메이션 (18s ease-out)
- [x] 서브틀 패럴럭스 (Hero 이미지, reduced-motion 대응)
- [x] 스크롤 리빌 (IntersectionObserver + stagger delay)
- [x] Smooth scroll + 헤더 높이 오프셋
- [x] 모바일 메뉴 토글 + 스크롤 잠금
- [x] 헤더 투명 → 불투명 전환

### 접근성 / 반응형
- [x] `prefers-reduced-motion` 대응
- [x] 의미론적 HTML (`<header>` `<nav>` `<section>` `<article>` `<figure>` `<dl>` 활용)
- [x] ARIA 라벨 적용
- [x] 3단 반응형 (1100px / 900px / 560px)

---

## 🔗 앵커 URI

| 섹션 | 경로 |
|------|------|
| Home / Hero | `/#home` |
| Story — Chapter I | `/#story` |
| Experience / Scenes — Chapter II | `/#experience` |
| A Day — Chapter III | `/#day` |
| Space — Chapter IV | `/#space` |
| Gallery — Chapter V | `/#gallery` |
| Reserve (Airbnb CTA) | `/#reserve` |
| Inquiry | `/#inquiry` |

---

## 📁 파일 구조

```
├── index.html              # 원페이지 에디토리얼 메인
├── css/style.css           # v2 리디자인 스타일시트
├── js/main.js              # 인터랙션 + 스크롤 리빌 + 모바일 메뉴
├── images/
│   ├── hero-courtyard.jpg  # ✅ 메인 히어로 이미지
│   └── garden-view.jpg     # ✅ Gallery 02 이미지
└── README.md
```

---

## 🚧 교체 대기 중인 플레이스홀더

실제 데이터가 준비되면 즉시 교체 가능하도록 우아한 플레이스홀더로 처리했습니다.

### 📸 이미지 (촬영 전 프리뷰)
- [ ] **Scene 02** — 전망 자쿠지 / View Bath
- [ ] **Scene 03** — 대청 / Tea & Stillness (다크 오버레이 변주)
- [ ] **Scene 04** — 다락 / Loft
- [ ] **Gallery 03~07** — 욕실, 침실, 다락, 건축 디테일

### 🔗 링크 / 연락처
- [ ] **에어비앤비 리스팅 URL** — `js/main.js` 의 `AIRBNB_URL` 상수
- [ ] **이메일** — `hello@anan-bukchon.com` (임시)
- [ ] **카카오톡 채널** — `@anan.bukchon` (임시)
- [ ] **WhatsApp** — `+82 10-0000-0000` (임시)
- [ ] **체크인 정확 시간** — 조정 가능 문구 포함

---

## 🛠️ 권장 다음 단계

1. **최종 촬영 이미지 적용** — Scene 2~4, Gallery 3~7의 placeholder 교체
2. **에어비앤비 URL 연결** — `js/main.js` 상단 `AIRBNB_URL` 변수에 실제 listing URL 입력
3. **문의 채널 실제 연결** — Email / Kakao / WhatsApp 정식 계정
4. **SEO 고도화** — JSON-LD `LodgingBusiness` 스키마, sitemap.xml, `hreflang`
5. **이미지 최적화** — WebP/AVIF 변환, `loading="lazy"`, `<picture>` 반응형
6. **영문 전용 페이지** — `/en/index.html` 분리 또는 i18n 토글
7. **지도 임베드** — Space 섹션에 커스텀 스타일 지도 추가 검토
8. **라이트박스** — Gallery 확대 보기 인터랙션 (PhotoSwipe 등)

---

## 🎨 타이포그래피 시스템

| 용도 | 폰트 | 크기 |
|------|------|------|
| Hero display (한글) | Noto Serif KR 300 | `clamp(44px, 7vw, 96px)` |
| Hero display (영문 이탤릭) | Cormorant Garamond Italic 400 | ~95% of Korean |
| H2 section headline | Noto Serif KR 300 | `clamp(32px, 4.8vw, 60px)` |
| Stat numbers | Cormorant Italic 300 | `clamp(56px, 6.5vw, 88px)` |
| Body large | Noto Serif KR 300 | `clamp(16px, 1.3vw, 19px)` |
| Chapter label | Cormorant Italic 500 | 12px · letter-spacing 0.32em |

**Accent color:** `#c8a878` (subtle gold) — 영문 이탤릭과 챕터 마커에만 사용하여 절제

---

## 🗄️ 데이터 / 스토리지

정적 사이트로 **외부 DB·API 미사용**. 콘텐츠는 HTML에 직접 포함.
추후 블로그·리뷰·동적 예약 연동 시 프로젝트 제공 RESTful Table API 활용 가능.

---

## 🚀 배포

배포는 **Publish 탭**에서 원클릭으로 진행해 주세요. 라이브 URL이 자동 생성됩니다.

---

## 📍 사업 정보

- **상호:** 북촌별서 안안 (Bukchon Byeolseo ANAN)
- **주소:** 서울특별시 종로구 가회동 33-20
- **운영:** 윌링앤에이블 (Willing & Able) 직영
- **포지셔닝:** 북촌 프리미엄 독채 한옥 · 별서형 프라이빗 스테이
- **타깃:** 한국 건축·미학에 관심 있는 해외 프리미엄 여행자 + 조용한 독채를 찾는 국내 고관여 고객

---

© 2026 Bukchon Byeolseo ANAN — *Designed as a quiet retreat, not a hotel.*
