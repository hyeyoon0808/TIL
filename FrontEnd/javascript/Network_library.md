Gephi 또는 Cytoscape와 같은 인기있는 데스크탑 애플리케이션과 igraph 및 networkx 내의 시각화 패키지와 같은 프로그래밍 언어와 결합 된 라이브러리를 포함하여 다른 많은 그래프 시각화 라이브러리를 사용할 수 있습니다. 이러한 소프트웨어 라이브러리는 개별 분석가에게는 좋지만 더 큰 제품 오퍼링에 통합하기는 어렵습니다.

범용 브라우저를 지원하는 Javascript는 대화 형 웹 응용 프로그램을 구축하는 데 매우 매력적인 솔루션입니다. 이러한 라이브러리는 더 큰 웹 애플리케이션에 쉽게 통합되거나 데스크톱 전자 애플리케이션으로 게시 될 수도 있습니다. 성능은 기본 운영 체제 기능보다 낮을 수 있지만 대부분의 데이터 시각화 요구 사항에는 충분합니다.

도서관 목록
다음은 평가를 위해 최종 후보에 오른 8 개의 라이브러리 목록입니다.

D3
Keylines / Regraph
Vis.js
Sigma.js / Graphology
Ogma / Linkurious
G6 / 그래 핀
Ngraph / Vivagraph
반응력 그래프
우리는 성능 / 렌더링 엔진, 사용 가능한 알고리즘 및 즉시 사용 가능한 구성 요소 등 서로 다른 제품을 비교하고자하는 3 가지 영역을 확인했습니다.

렌더링 엔진
성능에 가장 큰 영향을 미치는 요소는 기본 프레임 워크가 사용하는 렌더링 엔진입니다. 다이어그램 라이브러리 SDK 제공 업체 인 Yworks 는 3 가지 렌더링 방법을 잘 비교했습니다 . 2015 년 맥북을 사용하는 SVG 성능은 2k 노드와 2k 에지에 도달 할 때까지 실행 가능한 성능을 제공합니다. 캔버스 성능은 5k 노드 및 5k 에지에서 한계에 도달하는 반면 WebGL은 10k 노드 및 11k 에지까지 사용할 수 있습니다.

WebGL은 컴퓨터의 GPU 처리 능력을 활용하기 때문에 성능이 더 우수하지만 작업하기가 더 어렵습니다. 즉, 성능, 사용 편의성 및 기능간에 균형이있는 경향이 있습니다.

알고리즘
이는 사용자가 그래프 작업을 수행 할 수 있도록 사용 가능한 API 집합을 나타냅니다. 여기에는 레이아웃 옵션, 경로 찾기 알고리즘 또는 네트워크 감지 알고리즘이 포함될 수 있습니다. 이러한 모든 추가 기능은 필요한 개발 시간을 크게 줄일 수 있습니다.

구성품
제품 개발 속도를 높일 수있는 즉시 사용 가능한 구성 요소. 여기에는 사용자가 캔버스를 탐색하는 데 도움이되는 시간 표시 줄 필터 또는 미니 맵이 포함될 수 있습니다.

요약 평가 매트릭스

Library	Licence	Rendering Engine	Algorithms	Components
D3	BSD	SVG / Canvas	Low	Low
Keylines	Commercial	Canvas / WebGL	High	Medium
Vis.js	MIT	Canvas	Middle	Low
Sigma.js	MIT	Canvas / WebGL	Middle	Low
Ogma	Commercial	Canvas / WebGL	High	Low
G6	MIT	Canvas	High	High
Ngraph	MIT	WebGL	Middle	Low
React-force-graph	MIT	WebGL	Low	Low
view rawMatrix.csv hosted with ❤ by GitHub
자세한 비교
