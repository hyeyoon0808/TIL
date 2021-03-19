

## Snap shot VS Template

- snapshot: 증분값에 대해서 스냅샷을 뜨게 되어있음(통체로 가능)
  - 증분값만 뜨면 용량이 작다
  - template으로만 환경설정을 하는게 아니라 snapshot으로 증분값으로 에러 사항들을 막아준다
- template: 통체로 가능
  - VM 만들기 전 환경설정해서 'Template'을 쓴다
  - VM 이 Template을 받아 설치



- 라이브로 snapshot으로부터 복구 가능한가?

Window와 달리 linux는 드라이브를 설치했을때 껐다키지 않아도 된다

따라서 환경설정을 다시할때 window는 껐다 킬 수 있는 상황이 벌어진다



## Openstack 정의

![deployment_model](https://docs.oracle.com/cd/E56343_01/html/E56872/figures/deployment_model.jpg)

HR-network(서브넷)

Tenant -> Project

출처: https://docs.oracle.com/cd/E56343_01/html/E56872/l3agent.html

router?

- **라우터는** 네트워크간에 전달 된 데이터 패킷이 논리 요소이다. 또한 레이어 3 및 NAT 전달을 제공하여 프로젝트 네트워크의 서버에 대한 외부 네트워크 액세스를 제공합니다.
- 서브넷과 같은 원리
- Router > Port > NIC
- Router안에 서브넷 별로 VM(interface)을 연결하는데 서브넷 입장에서는 port, VM입장에서는 NIC

Port?

- 

cloud- 모든 컴퓨트 리소스가 가상화 됬다고 생각해야함

Openstack에서 네트웍은 어떻게 하는가..?

- 멀티테넌시?
  - 사용자 측면에서 한 네트워크에서 여러 프로젝트를 생성하는것이지만!!
    - VM, 리소스 측면에서는 여러 네트워크를 관리해야하기 때문에 
      - 모니터링이 까다로워지고 리소스 관리가 복잡해진다.



## TCP VS UDP

UDP - broadcasting(announcement)

TCP - communication

TCP 기반의 통신은 Packing의 손실

​	Packing이 손실되더라도 양방향 통신이 된다(연결형)

UDP은 양방향 통신이 없다(비연결형)

​	UDP는 한방향에서 던지고 만다

따라서 TCP 와 UDP는 연결 불가능! 

**하지만!**

- SDN에서는 다 가능

근본적 차이? TCP 수가 제한되어있다, UDP는 아님, 따라서 UDP는 가성비가 높다

클라우드는 UDP 처럼 통신을 던져준다 (따라서, 보안에 취약)

HTTP는 TCP로 연결된다 

- HTTP/3는 UDP로 연결
- https://evan-moon.github.io/2019/10/08/what-is-http3/



Java V5 때는 멀티스레드가 없었기 때문에 싱글스레드로 연결

Java v6,7 는 멀티스로드로 스레드 연결

Spring은 알아서 여러개의 스래드를 받아와줌(하지만 느려짐..연결을 끊을 수 없다)



## SPDY

Chrome 이 빠른 이유!!!!
