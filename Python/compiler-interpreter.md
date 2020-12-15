# Compiler vs Interpreter

### Compiler

![img](https://t1.daumcdn.net/cfile/tistory/99CD644F5C76451C1A)

- 한 언어에서 다른 언어로 번역하는 프로그램.

- 모든 파일들 한번에 번역

- 프로그램을 작성한다. -> 컴파일을 한다 -> 실행

- 장점: 바이너리를 실행시키는 것이기 때문에 실행 속도가 인터프리터에 비해 빠르다.

- 단점: 컴퓨터의 칩마다 명령어 셋이 다를 수 있다.

  컴파일해서 실행한 프로그램은 명령어 셋이 다른 컴퓨터에서 동작하지 않을 수 있다.

- ex) C언어



### Interpreter

![img](https://t1.daumcdn.net/cfile/tistory/99DB843C5C8C81B82E)

- 한줄씩 번역
- 프로그램을 작성 -> 인터프리터에 실행
- 장점: 인터프리터만 설치되어 있으면 같은 프로그램을 다른 컴퓨터에서 실행시킬 수 있다.
- 단점: 인터프리터가 실행할 때마다 번역, 실행 두가지 일을 하여 컴파일과 비교해 느리다.
- ex) '스크립팅' 언어: Javascript, Python, PHP (Python, PHP는 바이트코드로 한번 컴파일 된 후 해석(interpret)된다.)



### 하이브리드(Compiler-Interpreter-Compiler)

![img](https://t1.daumcdn.net/cfile/tistory/9980113F5C764B4124)

- 고급 언어를 약간 기계어에 가까운 언어로 번역한 후 실행시 인터프리터를 이용해 한 줄씩 완전한 기계어로 번역

- ex) Java

  1. temp.java는 컴파일 시 temp.class(16진수로 된 bytecode)라는 파일로 컴파일 

  2. 자바 인터프리터가 자바 실행 시 바이트코드를 한 줄씩 번역해 CPU에 실행

     이 인터프리터는 JVM의 일부로 동작

     - 인터프리터의 단점을 극복하기 위해 JIT 컴파일러를 사용해 자주 사용되는 바이트코드를 기계어로 컴파일. => 하이브리드!
     - **파이썬 또한 JIT 컴파일러를 지원하는 버전이 있음.**