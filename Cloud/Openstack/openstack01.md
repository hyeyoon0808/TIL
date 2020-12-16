# OpenStack 01



## Definition

**계산, 저장소, 네트워크 자원들을 관리하는 클라우드 운영체제**

> OpenStack is a **cloud operating system** that controls large pools of compute, storage, and networking resources throughout a datacenter, all managed through a dashboard that gives administrators control while empowering their users to provision resources through a web interface.

​	=> 서버의 하드웨어와 운영체제와 관계 없이 클라우드 컴퓨팅 개발의 표준을 제공함







## Component

![img](https://media.vlpt.us/images/dojun527/post/7dfd61bc-e9a6-4853-8e8e-4cc4499d8ebf/dd.png)



### 1. Heat?

**: heat orchestration template을 사용하여 클라우드 자원을 생성하고 관리**

> **Orchestration?** 
>
> ​	: 컴퓨터 시스템과 애플리케이션, 서비스의 자동화된 설정, 관리, 조정을 의미
>
> ​	: 복잡해지는 IT 시스템의 유동적인 부분 관리와 시스템 또는 기기 전체에서 자동화된 여러 태스크와 관	련 설정을 결합해야 할 필요성도 높아지면서 오케스트레이션 필요성 UP
>
> **자동화 VS 오케스트레이션**
>
> ​	: 자동화 -> 단일 태스크의 자동화
>
> ​	: 오케스트레이션 -> 여러 이기종 시스템 전반에서 다양한 단계를 수반하는 프로세스 또는 워크플로우 	자동화하는 방법



#### HEAT 구조

![img](https://media.vlpt.us/images/dojun527/post/aea5c4ec-2f3b-473a-a9f2-a7127bd2d151/dd.png)

1. User가 API를 직접 호출하여 오케스트레이션 서비스를 요청하거나 CLI를 통해 동일한 작업 수행
2. 수신된 API 서버는 AMQP(Advanced Message Queueing Protocol) 규격 기반의 메세지 통신을 통해 Heat Engine으로 이를 전달합니다.
3. Heat Engine은 수신한 템플릿과 API의 파라미터에 포함된 사용자 요청 데이터를 기반으로 인프라 및 클라우드 애플리케이션을 생성하기 위하여 **Nova API, Neutron API** 등과 같은 오픈스택 프로젝트들의 API를 호출합니다.



#### Heat Orchestration Template

오케스트레이션 서비스를 제공하는 프로젝트로 사용자가 구성하고자 할 **가상 자원**들을 템플릿에 명시

		- 사람이 쉽게 읽고 작성할 수 있는 텍스트 기반의 데이터 인코딩 방식 (JSON, YAML)
		- HOT 템플릿은 YAML 파일로..





### 2. Nova

> 컴퓨트 서비스의 핵심이며 **하이퍼바이저**, 메세지 Queue, 인스턴스 접속을 하는 콘솔 등 다양한 기능이 유기적으로 연결되어 가상 서버를 생성할 수 있는 시스템
>
> ​	**=> 가상 머신 관리**
>
> - **하이퍼바이저** : 호스트 컴퓨터에서 다수의 운영 체제를 동시에 실행하기 위한 논리적 플랫폼 (VM, VMM)

- RESTful API 지원
- EC2 API와 연동



#### Nova's Logical Architecture

## ![img](https://thebook.io/img/006881/068_01.jpg)

1. dashboard/커맨드 라인 명령어 호출하는 nova-api로부터 시작
2. nova-api ------Queue------> nova-compute : 인스턴스 생성하라는 명령어 전달
3. 인스턴스 생성 명령어를 전달받은 nova-compute는 하이퍼바이저 라이브러리를 통해
4. 하이퍼바이저에서 인스턴스를 생성하라는 명령어를 다시 전달한다.
5. 그 때 하이퍼바이저는 인스턴스 생성
6. 생성된 인스턴스는 nova-console을 통해 사용자가 접근할 수 있게 됨.





### 3. Swift

**Object Storage** 중 가장 많이 사용되는 Open Source Project

- **Object Storage :** 데이터에 unique ID 부여, 컨테이너 버켓에 저장 => 필요한 데이터에 대해 부여했던 ID를 통해 호출
  - 장점: 데이터를 저장할 위치와 방법에 대해서 고민하지 않아도 된다.
  - 단점: 빠른 성능을 요구하는 경우에 쓰이기에는 부적절하다.



#### Swift Logical Architecture

![img](https://media.vlpt.us/images/dojun527/post/1fec3d5b-18ad-43cf-9e7f-afaab1497b38/dfdf.png)

> - account(사용자 계정 관리), container(저장 공간의 단위), object(실 데이터)
>
> - account, container는 DB로 데이터 관리
> - object는 저장공간에 직접 저장되는 방식



#### Swift Benefit

- 대용량 비정형 데이터를 저장하기에 적함
- 각각의 Objec들은 고유한 URL을 갖고 API로 제어
- **멀티 테넌트**로 구현이 가능하며 저장 공간에 제약이 없음

> **Multi-tenancy?**
>
> 소프트웨어 애플리케이션의 단일 인스턴스가 여러 고객에게 서비스를 제공하는 아키텍처



#### Swift API

Swift API를 사용하여 OpenStack 없이도 Swift만 단독으로 사용할 수 있음.



#### Proxy Server

클라이언트가 자신을 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해주는 컴퓨터 시스템/응용 프로그램









## Reference

- https://www.openstack.org/software/
- https://www.redhat.com/ko/topics/automation/what-is-orchestration
- https://velog.io/@dojun527/%EC%98%A4%ED%94%88-%EC%8A%A4%ED%83%9D%EC%9D%B4%EB%9E%80
- https://www.redhat.com/ko/topics/cloud-computing/what-is-multitenancy