# TCP/IP 기초 복습

### Protocol

데이터를 전달 해줄때 약속

ex) HTTP(Hypertext), SMTP POP3(이메일), FTP(file) 



### AJAX(Asynchrous JavaScript and XML)

- 동기/비동기

  동기: Func() 이 있으면 Function이 다 수행될때까지 기다리고 다 끝나면 다음 행으로 넘어간다. 무조건 절차적으로

  비동기: FuncAsync() 이 제대로 호출되면 넘어가고 해당 함수를 나중에 callback으로 호출되면 그때 결과값을 받는다. 

- Cookies/Session

  Cookies: 클라이언트에 특정 부분, 특정 위치에 저장된다. 보안상 중요한 내용은 담지 못한다.

  Session: 변수들이 서버에 저장되어있다. DB랑 다르다? Database에 실제로 저장되어 있는게 아닌 Web-Server 나 WAS 서버 수준에서 저장이 되어있는거다. Session이 날라간다? 클라이언트에 의해서 접속이 되었는데 클라이언트가 접속하는 순간 변수가 생겨 날라오는데 세션이 끝나면 해당 데이터가 날라간다.



- VoIP(Voice over IP)

  IP에 Voice를 심는다. 음성->데이터->IP->데이터->음성

  UDP에 더 가깝다(무손실 압축, 속도 빠름)	
  - Port (=항구): like 인천항? 부산항? port를 거쳐 Application으로 간다. 
  - 서버, 컴퓨터 보트를 검색하는 검색어 netstat -n

- www.~~ -> DNS를 통해 -> IP로 변환 이 데이터를 전달해주는게 TCP

  - IP가 라우팅으로 찾아간다.

- NAT(Network Address Translation) 서버

  : 모든 서버가 public ip를 갖지 않는다 서버들을 뭉쳐 NAT 서버를 사용. 그 안에서 각각의 서버가 private ip를 사용. private ip만 가지고 다른곳과 통신을 못한다. 기본적으로 소스 ip와 desctination ip를 가지고 통신한다. 

  이때, Private IP를 NAT가 Public IP로 전환을 해준다. 공인 IP를 받아서 destination으로 접근 가능

- 필수 터미널 command - ipconfig, ping, tracert, nslookup
  - ipconfig: 자신의 컴퓨터에 할당받은 Ip 주소를 볼수 있다.
  - ping + ip 주소: 서버 통신 확인
  - tracert + URL: 해당 URL 로 가는 라우팅 정보를 줌. 서버에 접속이 안되서 문제를 파악하는데 도움됨
  - nslookup: DNS 서버 조회. 
    - nslookup+도메인: 도메인에 해당하는 IP 알 수 있음.
    - nslookup+IP: IP가 해당되는 도메인 알 수 있음.

- HTTPS: HTTP를 암호화해서 전달
- Hash: Hash화 한다? Hash Table? key, value로 데이터를 저장하는 자료구조 중 하나로 빠르게 데이터를 검색할 수 있는 자료구조.



------

### 기본 용어 및 개념 

**XML**: 문자 기반의 마크업 언어

**서버**: 네트워크를 통해 클라이언트에게 정보나 서비스를 제공하는 컴퓨터 시스템

**WEB / WAS 서버**

- WEB 서버: HTML, CSS, js, jpg 등 정적인 데이터를 처리하는 웹서버. HTTP 규약에 따라 웹 클라이언트와 주고받으며 통신하는 것이 주 역할. (아파치 웹서버) 

  -> 쉽게 말해, 인터넷을 기반으로 클라이언트에게 웹 서비스를 제공하는 서비스, 정적인 컨텐츠만 줄 수 있다.

- WAS(Web Application Server) 서버: JSP, ASP, PHP 등 사용자의 입력을 받아 서버에서 무언가를 처리하고 그 결과를 보여주는 동적인 데이터를 처리하는 웹서버.(아파치 톰캣) 

  ->쉽게 말해, 웹 어플리케이션을 실행시켜 필요한 기능을 수행하고 그 결과를 웹 서버에서 전달하는 일종의 미들웨어, 동적인 페이지를 만들어낼 수 있는 서버(비지니스 로직 수행), "웹 서버 + 웹 컨테이너"를 합친 형태

  - 언어별 웹서버 구성

    -(JAVA) JSP, Servlet -> 아파치 톰켓 -> WAS 서버 (WEB서버 내장)

    -(C,C++) PHP -> RWAPM -> WAS 서버 (WEB서버 내장)

    -(MFC, .NET) ASP, ASPX -> IIS ->WAS 서버 (WEB서버 내장)

- WEB, WAS를 따로 사용하는 이유

  - 서로의 기능을 분리하여 서버 부하를 방지할 수 있다.
    - WAS는 DB 조회 등 페이지를 만들기 위한 다양한 로직을 처리하는데, 단순한 정적 컨텐츠까지도 WAS에서 제공하면 다른 작업에 사용하는 리소스로 인해 지연이 생길 수 있다.
  - 물리적으로 분리하여 보안을 강화할 수 있다.
    - 웹 서버를 앞단에 두어, 공격이 있을 때 중요한 정보가 담긴 DB나 로직까지(WAS) 전파되지 못하게 한다.

**TCP/UDP**

: IP 프로토콜을 기반으로 구현되어 데이터를 보내기 위해 사용하는 프로토콜

- TCP (Transmission Control Protocol)

  : 신뢰성을 보장하는 연결형 서비스. 통신할 컴퓨터끼리 서로 확인 메세지를 보내면서 데이터를 주고받음으로써 통신의 신뢰성 높임. 웹이나 메일, 파일 공유 등과 같이 데이터를 누락시키고 싶지 않은 서비스는 TCP사용

- UDP(User Datagram Protocol)

  : 데이터를 보내면 그것으로 확인메세지 없이 그것으로 끝이므로 신뢰성은 없지만 확인 응답과 같은 절차를 생략할 수 있으므로 통신의 신속성을 높인다. VoIP나 시간 동기, 이름 해결 과 같은 빠른 속도 필요한 서비스는 UDP 사용

**이더넷**

: 통신을 할 수 있는 규격, 규약. 물리적인 하단에 있는 접속의 하단.

**허브**: 스위치. 

