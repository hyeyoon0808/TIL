# OpenStack 02



## Component

![img](https://media.vlpt.us/images/dojun527/post/7dfd61bc-e9a6-4853-8e8e-4cc4499d8ebf/dd.png)





### 3. Glance

**템플릿(운영체제) 이미지 관리**

​	: Nova가 지원하는 다양한 하이퍼바이저에서 사용할 수 있는 가상머신 이미지를 관리하고, 가상머신에 설치	된 운영체제를 보관 및 관리



#### Glance Logical Architecture

![img](https://media.vlpt.us/images/dojun527/post/9e92b0c7-0c97-43fa-8785-88adbcdad24c/dfdf.png)

- glance-api를 통해 이미지 등록, 삭제 및 관리 할 수 있다.

- glance-api는 glance-registry와 glance database에서 이미지 관리.

- 이미지를 등록할 때는 glance_registry 를 통해 glance_database 에 저장

- 등록된 이미지를 사용할 때, glance-db에 바로 사용요청

  ​	ex)

![img](https://media.vlpt.us/images/dojun527/post/780470fb-d02e-4538-ab13-c07c33e91392/dfdf.png)



#### Glance Image

오픈스택 Nova에서 다운받은 이미지를 Glance에 등록 -> 등록시킨 이미지로 인스턴스 생성







### 4. Keystone

**OpenStack 사용자 인증 관리 서비스 (ex - IAM)



#### Keystone Logical Architecture

![img](https://media.vlpt.us/images/dojun527/post/419c4f51-6d53-4072-ac53-dbe11f9aa636/dfdf.png)

- Token Backend : 사용자 별 Token 관리
- Catalog Backend : 오픈스택의 모든 서비스의 End-point URL 관리
- Policy Backend : 태넌트 사용자 계정 및 룰 등을 관리
- Identity Backend : 사용자 인증 관리







### 5. Neutron

**네트워그의 생성/변경/삭제에 대한 API만 제공** => Plug-in을 통해서 네트워크 구성



#### Neutron Logical Architecture

![img](https://media.vlpt.us/images/dojun527/post/2fb2b649-2f1e-4440-a8c4-155f2e0de99c/dd.png)







### 6. Cinder

**Nova에서 생성된 인스턴스에 확장하여 사용할 수 있는 저장 공간을 생성 및 삭제하고 인스턴스에 연결할 수 있는 기능**



#### Cinder Logical Architecture

![img](https://media.vlpt.us/images/dojun527/post/eb2e5102-f30f-42f5-9d5c-749955ec96c4/dd.png)

1. Cinder API 통해 볼륨 추가 및 삭제
2. Cinder-volume을 실제로 생성하고 DB에 volume정보 업데이트
3. 물리 하드 디스크는 LVM(Logical Volume Manager)로 설정
4. 설정한 LVM은 cinder.conf와 nova.conf의 환경설정을 통하여 volume 할당함
5. Cinder API 통해 생성된 volume은 단일 인스턴스 또는 여러 인스턴스에 할당



> **LVM (Logical Volume Manager)**
>
> 1. 하드 디스크를 파티션 대신 논리 볼륨으로 할당
>
> 2. 다시 여러 개의 디스크를 좀 더 효율적이고 유연하게 관리할 수 있는 방식







### 7. Horizon

**사용자가 웹 UI를 통하여 인스턴스 생성, 삭제 및 관리 등을 쉽고 빠르게 처리할 수 있도록 해주는 웹 서비스**

​	: Using 아파치 웹 서버 & 대시보드로는 파이썬 장고 프레임워크



#### Horizon Logical Architecture

![img](https://media.vlpt.us/images/dojun527/post/dcb11f68-b51f-461a-91ae-36957476c91a/dd.png)















## Reference

- https://www.openstack.org/software/
- https://www.redhat.com/ko/topics/automation/what-is-orchestration
- https://velog.io/@dojun527/%EC%98%A4%ED%94%88-%EC%8A%A4%ED%83%9D%EC%9D%B4%EB%9E%80