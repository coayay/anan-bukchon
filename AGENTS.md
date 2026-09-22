# AGENTS.md — 북촌별서 안안 (anan-bukchon)

> 이 저장소에서 작업하는 모든 코딩 에이전트(Codex CLI, Claude Code 등)를 위한 운영 규칙.
> 브랜드 사실·카피 원본은 `PROJECT_CONTEXT.md`, 디자인 의도·섹션 구조는 `README.md`에 있다.
> 충돌 시 우선순위: 사용자 지시 > AGENTS.md > PROJECT_CONTEXT.md > README.md.

---

## 1. 프로젝트 한 줄 정의

프리미엄 독채 한옥 스테이 **북촌별서 안안**의 브랜드 랜딩 페이지(`/`)와 게스트 가이드북(`/guide/`).
**빌드 시스템·패키지 매니저·백엔드 없음.** 순수 HTML + CSS + 바닐라 JS 정적 사이트다.

- 저장소: `coayay/anan-bukchon`
- 라이브: `https://coayay.github.io/anan-bukchon/` (GitHub Pages, `main` 브랜치 자동 배포)
- 예약 전환처: 에어비앤비 (URL 미연결 상태 — 아래 8절 참고)

---

## 2. 로컬 실행·확인

```bash
python3 -m http.server 8000     # 저장소 루트에서
# 랜딩:   http://localhost:8000/
# 가이드북: http://localhost:8000/guide/
```

`npm install`, 번들러, 테스트 러너, 린터는 **없다**. 도입하지 말 것(사용자가 명시적으로 요청한 경우 제외).
검증은 브라우저 육안 확인 + 아래 9절 체크리스트로 한다.

---

## 3. 파일 구조

```
index.html              # 랜딩 원페이지 (603줄) — 9개 섹션, 콘텐츠가 HTML에 직접 하드코딩
css/style.css           # 랜딩 전용 스타일 (1,860줄) — :root 디자인 토큰 정의
js/main.js              # 랜딩 인터랙션 (197줄) — IIFE, AIRBNB_URL 상수 보유
images/                 # 랜딩 이미지 8종
guide/index.html        # 가이드북 원페이지 (757줄) — 인라인 <script>로 i18n·복사 버튼 처리
guide/css/guide.css     # 가이드북 전용 스타일 (762줄)
guide/images/           # 가이드북 이미지 (랜딩과 동일 파일 8종 복제 + placeholder SVG 2종)
README.md               # 디자인 시스템·섹션 구조·타이포 스케일
PROJECT_CONTEXT.md      # 브랜드 사실·확정 카피·작업 이력 (세션 인수인계용)
```

**중요:** `images/`와 `guide/images/`의 동일 파일명 8개는 바이트 단위로 같은 복제본이다.
이미지를 교체할 때는 **양쪽 모두** 갱신해야 한다(가이드북은 `guide/images/`만 참조한다).

---

## 4. 코드 컨벤션

| 항목 | 규칙 |
|---|---|
| 들여쓰기 | 스페이스 4칸 (HTML/CSS/JS 공통) |
| CSS 색·크기 | `css/style.css`의 `:root` 토큰만 사용 (`--ink`, `--accent`, `--fs-h2` 등). 하드코딩 금지 |
| JS | 바닐라만 사용. IIFE 스코프 + `'use strict'`. `js/main.js`는 ES6(`const`·화살표 함수), `guide/index.html` 인라인 스크립트는 ES5(`var`·`function`) 스타일 — 각 파일의 기존 스타일을 따를 것. 모듈 번들·트랜스파일 전제 문법 금지 |
| 외부 의존 | Google Fonts(Cormorant Garamond / Noto Serif KR / Inter) + Font Awesome 6.4.0 CDN. 새 CDN 추가 지양 |
| 주석 | 섹션 구분은 기존의 `/* ===== 섹션명 ===== */`, HTML은 `<!-- ====== SECTION ====== -->` 패턴을 따를 것 |
| 반응형 | 브레이크포인트 1100px / 900px / 560px 3단 유지 |
| 접근성 | `prefers-reduced-motion` 대응, ARIA 라벨, 의미론적 태그 유지 — 기존 구현을 깨지 말 것 |

**색 팔레트 핵심:** 배경 `--bg: #f4efe6`, 잉크 `--ink: #1a1613`, 골드 액센트 `--accent: #c8a878`(영문 이탤릭·챕터 마커에만 절제 사용), 에어비앤비 `--airbnb: #FF385C`.

---

## 5. 가이드북 i18n 규칙 (`/guide/`)

한/영 전환은 **CSS 기반**이다. `<html data-lang="ko|en">` 속성을 JS가 토글하고, CSS가 표시를 제어한다.

- 모든 텍스트는 반드시 **쌍으로** 작성한다:
  ```html
  <span class="ko">한국어 문장</span><span class="en">English sentence</span>
  ```
- 한쪽만 추가하면 해당 언어에서 빈 화면이 된다. **영문 누락은 버그로 취급한다.**
- 선택 언어는 `localStorage['anan-guide-lang']`에 저장된다. 키 이름을 바꾸지 말 것.
- 가이드북은 `<meta name="robots" content="noindex">`다. 검색 노출 대상이 아니다.
- 랜딩(`index.html`)은 한국어 단일 문서다. 가이드북 방식의 `.ko/.en` 마크업을 랜딩에 이식하지 말 것.

---

## 6. 브랜드·카피 규칙 (위반 시 재작업)

**사실로 확정된 것** (`PROJECT_CONTEXT.md` 기준):
- 100년 넘은 한옥, 기와·기둥·주춧돌 원형 보존
- 북촌에서 가장 높은 위치 — 기와지붕이 바다 너울처럼 보임
- 한 번에 한 팀만 투숙(완전 독채)
- 주소: 서울특별시 종로구 가회동 33-20 / 운영: 윌링앤에이블 직영

**톤:** Quiet Luxury · Editorial · 짧고 기억에 남는 카피. 한국어 우선, 영문 보조.

**금지:**
- "골목 끝" 류 표현 → 높이·조망·너울 이미지로 대체
- "온탕" 등 대중목욕탕 연상 단어
- 설명형 장문 카피, 관광지 홍보 문구, 전통 붓글씨 스타일
- 확정 카피(`PROJECT_CONTEXT.md` 표) 임의 변경 — 수정 요청이 명시적으로 있을 때만 손댈 것

**시설 관련 주의:** 코클(전통 화로)은 실제로 **없다**(가이드북 v0.3.1에서 세탁기·건조기 안내로 교체됨). `PROJECT_CONTEXT.md`의 시설 목록에는 아직 "코클"이 남아 있으니 그대로 복사하지 말 것.

---

## 7. 작업 후 반영 절차

```bash
git add .
git commit -m "변경 내용 요약"
git push -u origin <branch>
```

- 기본 배포 브랜치는 `main`이며 푸시 후 1~2분 내 라이브 반영된다.
- 에이전트 세션은 별도 지정 브랜치가 있으면 **그 브랜치에만** 푸시한다. 지시 없이 `main`에 직접 푸시하지 말 것.
- 커밋 메시지는 한국어, 기존 패턴을 따른다: `가이드북 v0.3.1 — 코클(없음) 항목을 세탁기·건조기 안내로 교체`
- 구조적 변경을 했다면 `PROJECT_CONTEXT.md`의 "완료된 작업 / 남은 작업" 목록도 함께 갱신한다.

---

## 8. 미해결 TODO (건드릴 때 주의)

| 항목 | 위치 | 상태 |
|---|---|---|
| 에어비앤비 리스팅 URL | `js/main.js:144` `AIRBNB_URL = ''` | 미입력. 빈 값이면 CTA가 안내 메시지를 띄우는 폴백 동작 — 폴백을 제거하지 말 것 |
| 이메일 `hello@anan-bukchon.com` | `index.html` Inquiry | 임시값 |
| 카카오톡 `@anan.bukchon` / WhatsApp `+82 10-0000-0000` | `index.html` Inquiry | 임시값 |
| Scene 02~04 · Gallery 03~07 이미지 | `images/` | 일부 실사 교체 완료, 나머지 촬영 대기 |
| 가이드북 푸터 버전 표기 | `guide/index.html:670` `Guide Book v0.2` | 커밋 이력(v0.3.1)과 불일치 — 가이드북 수정 시 함께 올릴 것 |
| SEO 강화(JSON-LD `LodgingBusiness`), 이미지 WebP 변환, 갤러리 라이트박스 | — | 미착수 후보 |

---

## 9. 변경 전 자가 점검 체크리스트

1. CSS 값을 하드코딩하지 않고 `:root` 토큰을 썼는가
2. 가이드북을 건드렸다면 `.ko` / `.en` 텍스트가 **둘 다** 있는가
3. 이미지를 교체했다면 `images/`와 `guide/images/` 양쪽을 갱신했는가
4. 1100 / 900 / 560px에서 레이아웃이 깨지지 않는가
5. `prefers-reduced-motion`, ARIA 라벨, 시맨틱 태그를 훼손하지 않았는가
6. 앵커(`#home #story #experience #day #space #gallery #reserve #inquiry`)를 바꿨다면 네비게이션·플로팅 CTA 링크를 모두 맞췄는가
7. 카피를 추가했다면 6절 금지 표현에 걸리지 않는가
8. 커밋·푸시까지 완료했는가 (작업을 워킹트리에 남겨두지 말 것)

---

## 10. 하지 말 것

- 빌드 도구·프레임워크·패키지 매니저 도입 (React, Vite, Tailwind 등)
- `index.html` / `guide/index.html`의 원페이지 구조를 다중 파일로 분해
- 15MB 규모 이미지 디렉터리를 무단으로 재인코딩·삭제
- 확정 카피·브랜드 사실의 임의 변경 또는 추측성 사실 추가(없는 시설·수상 이력·가격 등)
- 지정 브랜치 외 푸시, 요청 없는 PR 생성
