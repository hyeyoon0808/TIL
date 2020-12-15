#include <iostream>

using namespace std;

int main()
{
    int n, cnt;
    string str;
    char chr[100];
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        cin >> str;
        int size = str.length();
        bool flag = true;
        for (int j = 0; j < size; j++)
        {
            for (int k = 0; k < j; k++)
            {
                if (str[j] != str[j - 1] && str[j] == str[k])
                {
                    flag = false;
                    break;
                }
            }
        }
        if (flag)
            cnt++;
    }
    cout << cnt;

    return 0;
}