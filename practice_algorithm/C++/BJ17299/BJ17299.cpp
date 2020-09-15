#include <iostream>
#include <stack>
#include <vector>

using namespace std;

int main()
{
    int n;
    int cnt[100000];
    vector<int> a(n);
    vector<int> ans(n);
    stack<int> st;

    cin >> n;

    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        cnt[a[i]]++;
    }
    st.push(0);
    for (int i = 1; i < n; i++)
    {
        if (st.empty())
        {
            st.push(i);
        }
        while (!st.empty() && cnt[st.top()] < cnt[i])
        {
            ans[st.top()] = a[i];
            st.pop();
        }
        st.push(i);
    }
    while (!st.empty())
    {
        ans[st.top()] = -1;
        st.pop();
    }
    for (int i = 0; i < n; i++)
    {
        cout << ans[i] << ' ';
    }
    cout << '\n';
    return 0;
}