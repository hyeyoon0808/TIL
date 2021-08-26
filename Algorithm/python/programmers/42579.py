def solution(clothes):
    closet = dict()
    num_category = []
    answer = 1
    for name, category in clothes:
        if category in closet:
            closet[category].append(name)
        else:
            closet[category] = [name]
    for key in closet.keys():
        num_category.append(len(closet[key]))
    for i in num_category:
        answer *= (i+1)
    answer -= 1
    return answer

