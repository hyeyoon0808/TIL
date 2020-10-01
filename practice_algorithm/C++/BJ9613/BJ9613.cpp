#include <iostream>
using namespace std;

int tc, n, num[100], result[2];
long long int ans;

// 두 수를 인자로 받아 유클리드 호제법을 이용해
// 두 수의 최대 공약수를 반환해주는 함수
int getGCD(int a, int b)
{

    // a를 b로 나눈 나머지는 r일 때,
    // r이 0이면 그때의 b가 최대공약수이고,
    // 아니라면 a는 b로, b는 r로 만들어주고 반복합니다
    while (1)
    {
        int r = a % b;
        if (!r)
            return b;
        a = b, b = r;
    }
}

int main(void)
{
    scanf("%d", &tc);
    for (int t = 0; t < tc; t++)
    {

        ans = 0;
        scanf("%d", &n);
        for (int i = 0; i < n; i++)
            scanf("%d", &num[i]);

        // num 배열에 있는 모든 값 중에서
        // 두 개를 선택하는 모든 경우에 대해
        // 최대공약수를 누적하여 더한 후 출력합니다
        for (int i = 0; i < n; i++)
            for (int j = i + 1; j < n; j++)
                ans += getGCD(num[i], num[j]);

        printf("%lld\n", ans);
    }
    return 0;
}