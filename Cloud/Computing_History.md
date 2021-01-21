# Computing

**1. Super Computing => 2. Grid Computing => 3. Cloud Computing **

**=> 4. Edge Computing**



## 2. Grid Computing

- Super Comper 때의 비슷한 속도로 적은 금액에 사용 가능한 가상화
- 그리드 컴퓨팅은 그리드 상의 모든 관련 컴퓨터의 계산능력을 결합하여 가상의 슈퍼 컴퓨터를 구축하려고, 지리적으로 멀리 떨어진 컴퓨터를 하나의 네트워크로 연결하는 것이다. 
- 그리드 컴퓨팅은 기업이 초고속 인터넷 접속을 통해 원거리의 컴퓨터를 경제적으로 연결하고 엄청난 양의 데이터를 다룰 수 있기 전까지는 불가능 하였다. 



## 3. Cloud Computing

​	: PC 붐이 생기면서 Grid 쓰기 위해선 서버가격이 너무 비쌌다.

​		=> 리소스를 대여하기 시작하면서 Cloud 시작.

- **Cloud는 가상화 (Hypervisor) 기술이 있어야 한다.**

  - 자동화 = Fog Computing

- ex) VMware , Vcenter, Vsphere 

  ​		=> **클라우드**

  - VMware : 가상화 = 하이퍼바이저 (VMM) =! 네트워크 가상화, Vcenter로 관리
  - Vcenter : 오케스트레이터 => 배포 & 마이그레이팅 but Node의 위치들을 알 수 없는 상태 -> cloud's benfit

- Xen (Citrix)

|              | 오케스트레이터 | 웹 통해 관리 |
| ------------ | -------------- | ------------ |
| **가상화**   | X              | X            |
| **클라우드** | O              | O            |

- 컨테이너 VS Hypervisor

  격리기술		Scheduling

  - 격리기술 : 네트워크 통제에 문제, 컨테이너가 근본적으로 가지지 않음, 리눅스 

    ​				등등에서 추가한 기능

- 도커, 쿠버네티스 : 도커OS, VMware에도 배포

  - 마이그레이션이 안됨 (도커 & VM)

  - 관리적 요소 차이

    - PaaS

      : OpenShift, Cloud Foundary => 개발적 플랫폼

- IaaS : 컴퓨터 인프라 가상화

  - SDC (Software Define Compute)

- PaaS : Platform을 서비스적으로 제공 (개발 & 서비스)

  - 도메인을 등록한 뒤 모든환경 제공
    - user에게 도메인 제공

- SaaS : ex) 필립스휴



## Edge Compute

: 엣지 컴퓨팅은 사용자 또는 데이터 소스의 물리적인 위치나 그 위치와 가까운 곳에서 컴퓨팅을 수행하는 것을 말합니다. 컴퓨팅 서비스를 사용자가 사용하는 단말 장치와 가까운 위치에서 처리하게 되면 사용자는 더욱 빠르고 안정적인 서비스를 제공받을 수 있으며 기업은 유연한 하이브리드 클라우드 컴퓨팅의 이점을 얻을 수 있습니다. 

![엣지컴퓨팅-02](https://img.kr.news.samsung.com/kr/wp-content/uploads/2017/05/%EC%97%A3%EC%A7%80%EC%BB%B4%ED%93%A8%ED%8C%85-02.jpg)

- ex) IoT (사물 인터넷), 5G, Smart city, Rola, 자율주행
  - 중앙화 안함!!
  - 중앙 Compute로 바로 가지않고 edge에서 모든 처리
    - 더욱 빠른 서버
    - 로컬에서 시스템화



## 용어

- SDN

  : Protocol 이 생긴 계기

  ​	=> Switch 마다의 명령어 다름

  ​	=> 이를 고치기 위해 분리 시킴.

  ​	=> SDN을 하려면 NFV있어야 함.

  ​		: Network를 소프트웨어적으로 Define 가능

- SDS

  : Object Storage (ex-네이버 클라우드) & Block Storage (ex-컴퓨터 내에 있는 스토리지)

- CEPH : Storage 컨트롤링 가능
- SDF : OCP -> 오픈 서버 & 네트워크 오픈소스화

  