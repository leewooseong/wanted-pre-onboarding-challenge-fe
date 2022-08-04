# 🏥 휴먼스케이프 클론코딩 과제
<img src="https://user-images.githubusercontent.com/73621658/169637259-93d7f249-72e2-4653-a424-440401f05a69.png"/>
🍀 질병명칭 XML을 이용한 질병검색 사이트

- **Github Repository URL** <br/> https://github.com/wanted-pre-onboarding-FE-01/B-search-clinical.git
- **배포 URL** <br/> [![Netlify Status](https://api.netlify.com/api/v1/badges/5e1e62d4-1be5-457f-93a4-730b8dacae74/deploy-status)](https://app.netlify.com/sites/humanscape1b/deploys)  <br/> https://humanscape1b.netlify.app/
- **JSON Backend Api Github Repository URL** <br /> https://github.com/GyuJae/wanted_humanscape_backend

<br/>

# 실행 방법
> git clone https://github.com/wanted-pre-onboarding-FE-01/B-search-clinical.git  ➝ yarn install ➝ yarn start

<br/>

# 🗂 프로젝트 소개
- **개발 기간** 22.05.19 - 22.05.21
- **팀원** 강도희, 김민효, 이우성, 전해강, 정규재
- **프로젝트 개요** <br/>
본 프로젝트는 휴먼 스케이프 과제로 건강보험심사평가원 질병정보 서비스 api 데이터를 활용하여 검색어 추천 기능이 있는 검색창을 구현한 프로젝트입니다. 

<br/>

# 📁 폴더 구조
<details>
    <summary>펼치기</summary>
📦src<br/>
 ┣ 📂assets<br/>
 ┃ ┗ 📂svg<br/>
 ┃ ┃ ┣ 📜decoration-M.svg<br/>
 ┃ ┃ ┣ 📜decoration-PC.svg<br/>
 ┃ ┃ ┣ 📜gnb.svg<br/>
 ┃ ┃ ┣ 📜index.ts<br/>
 ┃ ┃ ┣ 📜logo.svg<br/>
 ┃ ┃ ┗ 📜search_icon.svg<br/>
 ┣ 📂hooks<br/>
 ┃ ┣ 📜useAppDispatch.tsx<br/>
 ┃ ┣ 📜useAppSelector.tsx<br/>
 ┃ ┗ 📜useKeywordQuery.tsx<br/>
 ┣ 📂routes<br/>
 ┃ ┣ 📂Footer<br/>
 ┃ ┃ ┣ 📜Footer.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┣ 📂Header<br/>
 ┃ ┃ ┣ 📂Gnb<br/>
 ┃ ┃ ┃ ┣ 📜GNB.module.scss<br/>
 ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┣ 📜Header.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┣ 📂Main<br/>
 ┃ ┃ ┣ 📂RecommendKeyword<br/>
 ┃ ┃ ┃ ┣ 📜RecommendKeyword.module.scss<br/>
 ┃ ┃ ┃ ┣ 📜RecommendKeywordItem.tsx<br/>
 ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┣ 📂SectionDecoration<br/>
 ┃ ┃ ┃ ┣ 📜SectionDecoration.module.scss<br/>
 ┃ ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┃ ┣ 📜Main.module.scss<br/>
 ┃ ┃ ┗ 📜index.tsx<br/>
 ┃ ┣ 📜Routes.module.scss<br/>
 ┃ ┗ 📜index.tsx<br/>
 ┣ 📂service<br/>
 ┃ ┗ 📜apis.ts<br/>
 ┣ 📂states<br/>
 ┃ ┣ 📜index.ts<br/>
 ┃ ┗ 📜search.ts<br/>
 ┣ 📂styles<br/>
 ┃ ┣ 📂base<br/>
 ┃ ┃ ┣ 📜_fonts.scss<br/>
 ┃ ┃ ┣ 📜_more.scss<br/>
 ┃ ┃ ┗ 📜_reset.scss<br/>
 ┃ ┣ 📂constants<br/>
 ┃ ┃ ┣ 📜_colors.scss<br/>
 ┃ ┃ ┣ 📜_levels.scss<br/>
 ┃ ┃ ┗ 📜_sizes.scss<br/>
 ┃ ┣ 📂mixins<br/>
 ┃ ┃ ┣ 📜_animation.scss<br/>
 ┃ ┃ ┣ 📜_flexbox.scss<br/>
 ┃ ┃ ┣ 📜_position.scss<br/>
 ┃ ┃ ┣ 📜_responsive.scss<br/>
 ┃ ┃ ┣ 📜_typography.scss<br/>
 ┃ ┃ ┗ 📜_visual.scss<br/>
 ┃ ┣ 📜index.js<br/>
 ┃ ┗ 📜index.scss<br/>
 ┣ 📂types<br/>
 ┣ 📂utils<br/>
 ┃ ┗ 📜axios.ts<br/>
 ┣ 📜index.tsx<br/>
 ┣ 📜react-app-env.d.ts<br/>
 ┣ 📜reportWebVitals.ts<br/>
 ┗ 📜setupTests.ts<br/>
</details>

<br/>

# 🔨 기술 스택
<div align="center">
 <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
 <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
 <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
 <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
 <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
 <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>

 <br/>

|라이브러리|내용|버전|
|:---:|:---:|:---:|
|react query | 비동기 통신 | 3.39.0 |
| react-use | 리액트 편의 | 17.3.2 |
|redux toolkit | 리덕스 편의 | 1.8.1 |
| lodash | 자바스크립트 편의 | 4.17.21 |
| axios | 비동기 통신 | 0.27.2 |
| classnames | styles 관련 | 2.3.1 |
| expressJS | api 개발 | 4.18.1 |

<br/>

</div>

# 🏞 기능 설명 with GIF

 |검색 기능|방향키 선택 기능|퍼지 문자열 검색 기능|
 |:---:|:---:|:---:|
 |<img src="https://user-images.githubusercontent.com/73621658/169635351-cf24445c-ee61-4ea4-b6fb-60ba4fd6048b.gif"/>|<img src="https://user-images.githubusercontent.com/73621658/169635275-b98085ec-b69a-4223-be6a-2c26df61aa0c.gif"/>|<img src="https://user-images.githubusercontent.com/73621658/169635275-b98085ec-b69a-4223-be6a-2c26df61aa0c.gif"/>|

<br/>



---
## 사용 방법

1. 사용자가 검색어를 입력합니다.
2. 검색어를 입력하면 클라이언트가 추천 검색어 결과를 expressJS 서버에 요청합니다.
3. expressJS 서버에서 입력된 검색어에 따라 퍼지 문자열 검색을 수행하여 관련된 결과를 응답으로 보내줍니다.
4. 사용자가 입력한 검색어와 일치하는 추천 검색어는 볼드 처리됩니다.
5. 퍼지 문자열 검색에 의한 추천 검색어는 볼드 처리가 안됩니다.
6. 입력 창에서 상하 방향키 및 tab 키를 이용하여 추천 검색어로 포커스 이동이 가능합니다.
7. 추천 검색어로 이동할 경우 입력창에 표시되는 단어가 포커스 된 추천 검색어로 바뀝니다.

<br/>

### 검색 기능

<details>
    <summary>구현 방법</summary>

## API 호출 방법
1. Debounce를 통해 사용자가 입력할 때마다 API가 호출되지 않고, 사용자가 입력한 후 0.5초에 API를 호출하도록 하였습니다.
```ts
const setGlobalKeyword = useMemo(() => debounce((value) => dispatch(setKeyword(value)), 500), [dispatch])
```
 
2. react-query를 사용하여 staleTime을 통해 10분동안 한번 입력했던 값은 다시 API를 부르지 않습니다. 또, enabled에 !!keyword를 작성하여 keyword가 있을 때만 API가 실행되도록 하였습니다.
```ts
const useKeywordQuery = (keyword: string) => {
  const dispatch = useAppDispatch()
 
  return useQuery(['recommendKeyword', keyword], () => getDissNameCodeList(keyword), {
    enabled: !!keyword,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    suspense: true,
    onSuccess: () => dispatch(incrementCallCount(keyword)),
  })
}
```

</details>

---

### 방향키 선택 기능
<details>
    <summary>구현 방법</summary>

1. 연관 검색어 리스트를 ref 배열 형태로 생성합니다.

2. 연관 검색어 인덱스를 관리할 autoFrame state를 생성, keydown 이벤트를 통해 관리합니다.
    ```ts
    const keyEvent = useCallback(
        (e: globalThis.KeyboardEvent) => {
            if (e.isComposing === true) return

            const size = autoFrameRef.current.length
            switch (e.key) {
            case 'ArrowUp':
                e.preventDefault()
                setAutoFrame((prev) => (prev > 0 ? prev - 1 : size - 1))
                break
            case 'ArrowDown':
            case 'Tab':
                e.preventDefault()
                setAutoFrame((prev) => (prev < size - 1 ? prev + 1 : 0))
            }
        },
        [autoFrameRef]
    )
    ```
    한글이나 특수 키 같은 경우 keydown 이벤트가 2번 발생하는 버그를 발견하여
    isComposing 상태를 확인해 중복 이벤트 발생을 방지해 주었습니다.

3. autoFrame 값에 따른 focus 상태 변경
   ```ts
    useEffect(() => {
        autoFrameRef.current[autoFrame]?.focus()
    }, [autoFrame])
   ```
   useEffect를 통해 autoFrame이 변경되면 값에 따른 ref 요소에 focus를 부여해 주었습니다.

4. focus된 요소의 값을 input에 대입
    ```ts
    const focusHandler = (e: FocusEvent<HTMLButtonElement>) => {
        setInputValue(e.currentTarget.value)
    }
    ```
</details>

---

### 퍼지 문자열 검색 기능

<details>
    <summary>구현 방법</summary>

xml data를 받아 expressJS를 이용하여 fuzzy search 기능이 있는 api를 만들었습니다.

1. fuzzy 정규 표현식 만드는 함수

자음이 입력되도, 음절이 입력되도 일치하는 문자열을 찾을 수 있게 된다. 단, 종성까지 완성된 음절은 범위로 찾지 않고 해당 글자만 찾도록 합니다.

```ts
import { escapeRegExp } from "lodash";

interface ICon2syl {
  ㄱ: number;
  ㄲ: number;
  ㄴ: number;
  ㄷ: number;
  ㄸ: number;
  ㄹ: number;
  ㅁ: number;
  ㅂ: number;
  ㅃ: number;
  ㅅ: number;
}

function ch2pattern(ch: string) {
  const offset = 44032;
  if (/[가-힣]/.test(ch)) {
    const chCode = ch.charCodeAt(0) - offset;
    if (chCode % 28 > 0) {
      return ch;
    }
    const begin = Math.floor(chCode / 28) * 28 + offset;
    const end = begin + 27;
    return `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }
  if (/[ㄱ-ㅎ]/.test(ch)) {
    const con2syl = {
      ㄱ: "가".charCodeAt(0),
      ㄲ: "까".charCodeAt(0),
      ㄴ: "나".charCodeAt(0),
      ㄷ: "다".charCodeAt(0),
      ㄸ: "따".charCodeAt(0),
      ㄹ: "라".charCodeAt(0),
      ㅁ: "마".charCodeAt(0),
      ㅂ: "바".charCodeAt(0),
      ㅃ: "빠".charCodeAt(0),
      ㅅ: "사".charCodeAt(0),
    };
    const begin =
      ch in con2syl
        ? con2syl[ch as keyof ICon2syl]
        : (ch.charCodeAt(0) - 12613) * 588 + con2syl["ㅅ"];
    const end = begin + 587;
    return `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }

  return escapeRegExp(ch);
}

export function createFuzzyMatcher(input: string) {
  const pattern = input.split("").map(ch2pattern).join(".*?");
  return new RegExp(pattern, "gi");
}

```

2. searchText query params을 받아 해당하는 데이터를 filter해서 보내고 있습니다.

```ts
app.get("/", async (req: Request, res: Response): Promise<Response> => {
    try {
        const { searchText } = req.query;

        if (!searchText) {
            return res.json({
                ok: false,
                error: "검색어를 입력해주세요.",
                result: [],
            });
        }

        const result = dieaseData
        .filter((i) => createFuzzyMatcher(searchText as string).test(i.sickNm))
        .slice(0, 10);

        return res.json({
            ok: true,
            result,
        });
    } catch (error) {
        return res.json({
            ok: false,
            error,
            result: [],
        });
    }
});
```

</details>



