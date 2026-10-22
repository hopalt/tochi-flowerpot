# 토치의 화분 홈페이지

앱 소개 페이지와 개인정보 처리방침(한국어·영어). GitHub Pages로 https://tochi-flowerpot.hopalt.com 에 게시한다.

| 페이지 | 파일 | 주소 |
|---|---|---|
| 소개(영어, 기본) | `index.html` | https://tochi-flowerpot.hopalt.com/ |
| 소개(한국어) | `ko/index.html` | https://tochi-flowerpot.hopalt.com/ko/ |
| 개인정보 처리방침(영어) | `privacy/index.html` | https://tochi-flowerpot.hopalt.com/privacy/ |
| 개인정보 처리방침(한국어) | `ko/privacy/index.html` | https://tochi-flowerpot.hopalt.com/ko/privacy/ |

- 언어: 영어 페이지에 처음 온 사람은 브라우저 언어가 한국어면 한국어 페이지로 넘어간다(`assets/lang.js`). EN/한국어를 한 번 누르면 그 선택을 기억한다.
- 공통 스타일과 그림은 `assets/`. 외부에서 불러오는 것은 Google Fonts(Jua, Nunito) 하나다.
- `CNAME`(사용자 지정 도메인), `app-ads.txt`(Unity Ads), `sitemap.xml`, `robots.txt`.
- 원본은 앱 저장소(`tochi-block`)의 `homepage/` 폴더다. 거기서 고친 뒤 이 저장소로 복사한다.

## 게시 설정 (처음 한 번)

1. DNS: `hopalt.com` 영역에 `tochi-flowerpot` CNAME 레코드 → `hopalt.github.io`.
2. GitHub 저장소 Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `/(root)`.
3. Custom domain에 `tochi-flowerpot.hopalt.com`이 들어가 있는지 확인(`CNAME` 파일), 인증서가 나오면 `Enforce HTTPS` 켜기.

## 로컬에서 보기

```bash
python3 -m http.server 7360
```

http://localhost:7360/ko/ 를 연다.

## 스토어에 넣을 주소

- Google Play → 앱 콘텐츠 → 개인정보처리방침: `https://tochi-flowerpot.hopalt.com/ko/privacy/`
- 스토어 등록정보 → 웹사이트: `https://tochi-flowerpot.hopalt.com/`

## 확인할 것

- Google Play 버튼: 소개 두 페이지의 첫 버튼이 스토어 링크(`https://play.google.com/store/apps/details?id=com.hopalt.moablock`)다(2026-10-22 출시 뒤 교체).
- iOS를 내면 처리방침의 광고 절(ATT)과 앱 권한 절을 iOS 기준으로 보완한다.
- `app-ads.txt`의 `unity.com, 15672259, DIRECT` 줄이 Unity 대시보드 ‘토치의 화분’ 프로젝트의 조직 ID와 같은지 확인한다(www.hopalt.com의 파일을 옮겨 온 것).
