# 2019 kakao 실패율
def solution(N, stages):
    result = {}
    tatal_len = len(stages)
    for stage in range(1, N+1):
        if tatal_len != 0:
            result[stage] = stages.count(stage) / tatal_len
            tatal_len -= stages.count(stage)
        else:
            result[stage] = 0
    return sorted(result, key=lambda x : result[x], reverse=True)

    #sork key, value 공부하기