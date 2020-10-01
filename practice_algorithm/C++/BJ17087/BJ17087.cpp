#include <iostream>
#include <vector>

using namespace std;

int GCD(int a, int b)
{
    int r = a % b;
    if (!r)
    {
        return b;
    }
    return GCD(b, r);
}
// 동생들간의 각각의 이동거리의 최대공약수
int main()
{
    int n, s, a, ans;
    vector<int> vt;

    cin >> n >> s;
    for (int i = 0; i < n; i++)
    {
        cin >> a;
        vt.push_back(abs(a - s));
    }
    ans = vt[0];
    for (int i = 1; i < vt.size(); i++)
    {
        ans = GCD(ans, vt[i]);
    }
    cout << ans;
    return 0;
}