이 글은 Openstack 공식 문서를 참고해 에러 핸들링을 조사한 것을 바탕으로 정리하였습니다.

API 요청이 잘못되거나 처리 도중 오류가 발생하면 Error 정보를 응답으로 반환합니다. 오류 발생 시 HTTP Response Code 도 해당 값이 돌아오며, Error 정보는 오류 코드 <errorcode> 와 오류 텍스트 <message>로 구성되어 있습니다.

 

Openstack의 에러 핸들링에서 주의할 점은 에러 JSON 형식이 서비스마다 다르다는 것입니다.

이는 아래에서 자세히 다룰 예정입니다.

 

## Error Code List

아래는 대표적으로 horizon, keystone exception 문서와 openstack error 핸들링 공식 문서를 참고로 작성한 목록입니다.

| Error Code                | Description                                                  | Service & Exception (service: exception)                     |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 정보성 상태 코드          |                                                              |                                                              |
| 100                       | 클라이언트로부터 일부 요청을 받았으니 나머지 요청 정보를 받아야 한다. | horizen: RecoverableError                                    |
| 성공 상태 코드            |                                                              |                                                              |
| 200                       | 일반적 요청 성공                                             | exception - OK                                               |
| 201                       | 동기 리소스 생성 성공                                        | exception - Created                                          |
| 202                       | 비동기 리소스 생성 성공                                      | exception - Accepted                                         |
| 204                       | 동기 리소스 삭제 성공                                        | exception - NoContent                                        |
| 리다이렉션 상태 코드      |                                                              |                                                              |
| 300                       | 클라이언트가 따를 수 있는 리소스에 대한 여러 옵션 나타낸다.  | keystone client: MultipleChoices                             |
| 302                       | 요청된 리소스가 임시적으로 이동 페이지로 이동 (미들웨어 레벨에서 리다이렉트) | horizen: Http302keystone client: 2.2버전에서 없어질 예정     |
| 클라이언트 에러 상태 코드 |                                                              |                                                              |
| 400                       | 서버가 클라이언트 오류를 감지해 요청을 처리할 수 없다.       | horizen: BadRequestkeystone client: BadRequestkeystone server: CircularRegionHierarchyError, ValidationError, ValidationExpirationError, ValidationTimeStampError |
| 401                       | 사용자가 권한없이 리소스에 액세스했다.인증이 필요하고 실패했거나 아직 제공되지 않은 경우 | horizen: NotAuthorizedkeystone client: Unauthorizedkeystone server: InsufficientAuthMethods, Unauthorized |
| 402                       | 결제가 필요한 요청이다.                                      | keystone client: PaymentRequired                             |
| 403                       | horizen: 사용자가 로그인 안하고 요청 시도한다.keystone client: 유효한 요청이지만 서버가 응답을 거부한다. | horizen: NotAuthenticatedkeystone client: Forbiddenkeystone server: Forbidden, ForbiddenNotSecurity |
| 404                       | 요청 리소스를 찾을 수 없다.                                  | horizen: NotFoundkeystone client: NotFoundkeystone server: NotFound |
| 405                       | 해당 리소스에서 지원하지 않는 요청 방법을 사용하여 리소스 요청 | keystone client: MethodNotAllowed                            |
| 406                       | Accept 헤더 정의된 허용 가능한 값 목록과 일치하는 응답을 생성 할 수 없으며 서버가 기본 표현을 제공하지 않는다. | keystone client: NotAcceptable                               |
| 407                       | 클라이언트가 반드시 먼저 프록시로 자신을 인증해야 한다.      | keystone client: ProxyAuthenticationRequired                 |
| 408                       | 서버가 요청 대기 시간을 초과했다.                            | keystone client: RequestTimeout                              |
| 409                       | 요청이 대상 리소스의 현재 상태와 충돌했다.                   | horizen: Conflictkeystone client: Conflictkeystone server: Conflict |
| 410                       | 요청된 리소스를 더 이상 사용할 수 없다.                      | keystone client: Gonekeystone server: Gone                   |
| 411                       | 요청된 리소스에 필요한 콘텐츠 길이를 지정하지 않았다.        | keystone client: LengthRequired                              |
| 412                       | 서버가 요청자가 요청한 전제 조건을 충족하지 않는다.          | keystone client: PreconditionFailed                          |
| 413                       | 요청이 서버가 처리할 수 있는 것보다 크다.                    | keystone client: RequestEntityTooLarge                       |
| 414                       | 제공된 URI가 너무 길어서 서버가 처리할 수 없다.              | keystone client: RequestUriTooLong                           |
| 415                       | 요청 엔티티의 미디어 타입을 서버나 리소스에서 제공하지 않는다. | keystone client: UnsupportedMediaType                        |
| 416                       | 클라이언트가 파일의 일부를 요청했지만 서버가 해당 부분을 제공 할 수 없다. | keystone client: RequestedRangeNotSatisfiable                |
| 417                       | 서버가 Expect 요청 헤더 필드의 요구 사항을 충족할 수 없다.   | keystone client: ExpectationFailed                           |
| 422                       | 요청이 잘 이루어지고 요청 문법도 올바르지만 요청된 지시를 따를 수 없다. | keystone client: UnprocessableEntity                         |
| 서버 에러 상태 코드       |                                                              |                                                              |
| 500                       | 서버가 요청을 이행하지 못하게 하는 예기치 못한 조건이 발생했다. | keystone client: InternalServerErrorkeystone server: UnexpectedError |
| 501                       | 서버가 요청 방법을 인식하지 못하거나 요청을 수행할 능력이 없다. | keystone client: HttpNotImplementedkeystone server:NotImplemented |
| 502                       | 서버가 게이트웨이나 프록시 서버 역할을 하면서 업스트림 서버로부터 유효하지 않은 응답을 받았다. | keystone client: BadGateway                                  |
| 503                       | 현재 서버를 사용할 수 없다.                                  | keystone client: ServiceUnavailable                          |
| 504                       | 서버가 게이트웨이 또는 프록시 역할을 하는 동안 업스트림 서버에서 적시에 요청을 받지 못한다. | keystone client: GatewayTimeout                              |
| 505                       | 서버가 요청에 사용 된 HTTP 프로토콜 버전을 지원하지 않는다.  | keystone client: HttpVersionNotSupported                     |

 

## 에러 JSON 예시

아래는 문서에서 예시로 제시한 에러 JSON 형식입니다. 하지만 문서에서도 언급했듯이 openstack의 각각의 서비스들은 밑의 예시와 같이 JSON 형식을 따르지 않고 다른 형식을 따릅니다. 이와 관련된 내용은 [openstack wiki](https://wiki.openstack.org/wiki/API_Special_Interest_Group/Current_Design/Errors#Analysis)에도 언급되었습니다.

{ "errors": [  {   "request_id": "1dc92f06-8ede-4fb4-8921-b507601fb59d",   "code": "orchestration.create_failed",   "status": 418,   "title": "The Stack could not be created",   "detail": "The Stack could not be created because of error(s) in other parts of the system.",   "links": [    {     "rel": "help",     "href": "https://developer.openstack.org/api-ref/orchestration/errors/orchestration.create-failed"    }   ]  },  {   "request_id": "d413ea12-dfcd-4009-8fad-229b475709f2",   "code": "compute.scheduler.no-valid-host-found",   "status": 403,   "title": "No valid host found",   "detail": "No valid host found for flavor m1.xlarge.",   "links": [    {     "rel": "help",     "href": "https://developer.openstack.org/api-ref/compute/errors/compute.scheduler.no-valid-host-found"    }   ]  } ]}

##  

## 실제 서비스 별 에러 JSON

Openstack의 오류 JSON 형식을 통일하여 사용하지 않고 서비스마다 다르기에 주의해야 합니다.

아래는 같은 404 오류로 서비스마다 실제로 다른 JSON 형식을 예시로 보여줍니다. 

해당 주의사항은 Openstack wiki([링크](https://wiki.openstack.org/wiki/API_Special_Interest_Group/Current_Design/Errors#Analysis))를 참고로 작성하였습니다.

**6.1.1 Compute JSON**

e.g. 404 오류: Json 응답 



![img](https://blog.kakaocdn.net/dn/dCQPjx/btqYKaR55JN/Ioclc3naPVfeMlm85EL7HK/img.png)



**6.1.2 Identity JSON**

e.g. 404 오류: Json 응답 



![img](https://blog.kakaocdn.net/dn/deejmq/btqYJ9Tf7kC/tHq4CeiYEwMk1h2w1qheTk/img.png)



**6.1.4 Orchestration JSON**

e.g. 404 오류: Json 응답 



![img](https://blog.kakaocdn.net/dn/9d4c5/btqYE7n99nd/qyEigP8UkmtGfBHEBFuWCk/img.png)



**6.1.5 Volume JSON**

e.g. 404 오류: Json 응답 



![img](https://blog.kakaocdn.net/dn/bnQvxT/btqYKaxRJ7b/63gUvniFUeLJyChNIjMLmK/img.png)





## Reference

- https://wiki.openstack.org/wiki/API_Special_Interest_Group/Current_Design/Errors#Analysis
- https://specs.openstack.org/openstack/api-wg/guidelines/errors.html
- 